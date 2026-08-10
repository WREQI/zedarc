<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getMarketStocksSnapshot } from '@/services/market'
import { createKlineSeries, type KlineCandle } from '@/services/kline'
import { useWatchlistStore } from '@/stores/watchlist'

const marketStocks = getMarketStocksSnapshot()


const route = useRoute()
const watchlistStore = useWatchlistStore()
const stock = computed(() => marketStocks.find((item) => item.code === route.params.code) ?? marketStocks[0])
const stockStats = computed(() => {
  const price = Number(stock.value.price.replace(',', ''))
  const change = Number(stock.value.change.replace(',', ''))
  const open = price - change * .42
  return {
    open: open.toFixed(2),
    high: (Math.max(open, price) + Math.abs(change) * .18).toFixed(2),
    low: (Math.min(open, price) - Math.abs(change) * .12).toFixed(2),
    turnover: stock.value.volume,
  }
})
const periods = ['分时', '5日', '日K', '周K', '月K']
const activePeriod = ref('日K')
const indicator = ref<'MA' | 'MACD' | 'BOLL'>('MA')
const adjustment = ref('前复权')
const showAdjustment = ref(false)
const showSignals = ref(true)
const zoom = ref(1)
const pan = ref(0)
const selectedIndex = ref<number | null>(null)
const candles = ref<KlineCandle[]>(createKlineSeries(stock.value.code))
const pointer = ref({ active: false, startX: 0, startPan: 0 })
const touchPoints = new Map<number, number>()
const pinch = ref({ active: false, startDistance: 0, startZoom: 1 })
const activeDetailTab = ref('分时 / K线')
const showSettings = ref(false)
const settings = ref({ trendLine: false, supportPressure: false, areaSelect: false, magicNine: false, tradeLine: false, draw: false })
const drawPoints = ref<Array<{ x: number; y: number }>>([])
const areaPoints = ref<Array<{ x: number; y: number }>>([])
const isFollowed = ref(false)

const chartPreferencesKey = 'zedarc-kline-preferences'
const orderBook = computed(() => {
  const price = Number(stock.value.price.replace(',', ''))
  const levels = [0.6, 0.4, 0.2, 0.1, 0.05]
  const amounts = [1204, 862, 2031, 1536, 4120, 4820, 3128, 2745, 1680, 936]
  return [
    ...levels.map((offset, index) => ({ label: `卖${5 - index}`, price: (price + offset).toFixed(2), amount: amounts[index].toLocaleString(), side: 'sell' })),
    ...levels.map((offset, index) => ({ label: `买${index + 1}`, price: (price - offset).toFixed(2), amount: amounts[index + 5].toLocaleString(), side: 'buy' })),
  ]
})
const capitalFlow = [
  { label: '主力净流入', value: '+2.86亿', percent: '+6.7%', trend: 'up' },
  { label: '超大单净流入', value: '+1.42亿', percent: '+3.3%', trend: 'up' },
  { label: '大单净流入', value: '+1.08亿', percent: '+2.5%', trend: 'up' },
  { label: '中单净流出', value: '-0.32亿', percent: '-0.7%', trend: 'down' },
  { label: '小单净流出', value: '-0.18亿', percent: '-0.4%', trend: 'down' },
]
const detailNews = [
  { time: '14:32', tag: '公告', title: '公司发布最新业务进展，产业链订单保持稳定' },
  { time: '13:58', tag: '市场', title: '新能源板块持续活跃，机构关注盈利修复' },
  { time: '11:24', tag: '研报', title: '机构上调目标价，维持“推荐”评级' },
]
const analysisMetrics = [
  { label: '市盈率 TTM', value: '18.42', note: '低于行业均值', trend: 'up' },
  { label: '市净率', value: '3.26', note: '处于历史中位', trend: 'neutral' },
  { label: 'ROE', value: '16.80%', note: '连续三年提升', trend: 'up' },
  { label: '机构关注度', value: '★★★★☆', note: '近一月新增 12 家', trend: 'up' },
]

onMounted(() => {
  isFollowed.value = watchlistStore.has(stock.value.code)
  watchlistStore.addRecent(stock.value.code)
  const preferences = JSON.parse(window.localStorage.getItem(`${chartPreferencesKey}-${stock.value.code}`) ?? 'null') as { period?: string; indicator?: 'MA' | 'MACD' | 'BOLL'; adjustment?: string; settings?: typeof settings.value } | null
  if (preferences?.period && periods.includes(preferences.period)) activePeriod.value = preferences.period
  if (preferences?.indicator) indicator.value = preferences.indicator
  if (preferences?.adjustment) adjustment.value = preferences.adjustment
  if (preferences?.settings) settings.value = { ...settings.value, ...preferences.settings }
})

onUnmounted(() => {
  window.localStorage.setItem(`${chartPreferencesKey}-${stock.value.code}`, JSON.stringify({ period: activePeriod.value, indicator: indicator.value, adjustment: adjustment.value, settings: settings.value }))
})

function toggleFollow() {
  watchlistStore.toggle(stock.value.code)
  isFollowed.value = watchlistStore.has(stock.value.code)
}


const periodSize = computed(() => ({ '分时': 40, '5日': 25, '日K': 30, '周K': 24, '月K': 18 }[activePeriod.value] ?? 30))
const visibleCandles = computed(() => {
  const count = Math.min(candles.value.length, Math.max(8, Math.round(periodSize.value / zoom.value)))
  const end = Math.max(count, Math.min(candles.value.length, candles.value.length - pan.value))
  return candles.value.slice(end - count, end)
})
const bounds = computed(() => {
  const values = visibleCandles.value.flatMap((item) => [item.high, item.low])
  return { min: Math.min(...values) - 2, max: Math.max(...values) + 2 }
})
const maxVolume = computed(() => Math.max(...visibleCandles.value.map((item) => item.volume)))
const chartHeight = 270
const chartWidth = 880
const candleWidth = computed(() => Math.max(7, (chartWidth / visibleCandles.value.length) * .52))

function xFor(index: number) { return 25 + (index + .5) * (chartWidth - 45) / visibleCandles.value.length }
function yFor(value: number) { return 20 + (bounds.value.max - value) / (bounds.value.max - bounds.value.min) * chartHeight }
function ma(period: number, index: number) {
  const source = visibleCandles.value.slice(Math.max(0, index - period + 1), index + 1)
  return source.reduce((sum, item) => sum + item.close, 0) / source.length
}
function linePath(period: number) { return visibleCandles.value.map((_, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(ma(period, index))}`).join(' ') }
function closePath() { return visibleCandles.value.map((candle, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(candle.close)}`).join(' ') }
function bollValue(period: number, index: number, direction: number) {
  const source = visibleCandles.value.slice(Math.max(0, index - period + 1), index + 1)
  const average = source.reduce((sum, item) => sum + item.close, 0) / source.length
  const deviation = Math.sqrt(source.reduce((sum, item) => sum + (item.close - average) ** 2, 0) / source.length)
  return average + direction * deviation * 2
}
function bollPath(direction: number) { return visibleCandles.value.map((_, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(bollValue(20, index, direction))}`).join(' ') }
function macdValue(index: number) { return ma(5, index) - ma(10, index) }
const macdScale = computed(() => Math.max(.8, ...visibleCandles.value.map((_, index) => Math.abs(macdValue(index)))) * 1.2)
function macdY(value: number) { return 312 - value / macdScale.value * 22 }
function macdPath() { return visibleCandles.value.map((_, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${macdY(macdValue(index))}`).join(' ') }
const areaStats = computed(() => {
  if (areaPoints.value.length !== 2) return null
  const toIndex = (x: number) => Math.max(0, Math.min(visibleCandles.value.length - 1, Math.round((x - 25) / (chartWidth - 45) * visibleCandles.value.length - .5)))
  const start = toIndex(Math.min(areaPoints.value[0].x, areaPoints.value[1].x))
  const end = toIndex(Math.max(areaPoints.value[0].x, areaPoints.value[1].x))
  const source = visibleCandles.value.slice(start, end + 1)
  const first = source[0]?.open ?? 0
  const last = source[source.length - 1]?.close ?? 0
  const high = Math.max(...source.map((item) => item.high))
  const low = Math.min(...source.map((item) => item.low))
  return { start, end, change: last - first, percent: first ? (last - first) / first * 100 : 0, high, low }
})
function indexFromPointer(event: PointerEvent) {
  const target = event.currentTarget as SVGElement
  const rect = target.getBoundingClientRect()
  return Math.max(0, Math.min(visibleCandles.value.length - 1, Math.floor(((event.clientX - rect.left) / rect.width) * visibleCandles.value.length)))
}
function onChartPointerDown(event: PointerEvent) {
  if (settings.value.draw || settings.value.areaSelect) {
    const target = event.currentTarget as SVGElement
    const rect = target.getBoundingClientRect()
    const point = { x: (event.clientX - rect.left) / rect.width * 930, y: (event.clientY - rect.top) / rect.height * 400 }
    if (settings.value.draw) drawPoints.value = drawPoints.value.length >= 2 ? [point] : [...drawPoints.value, point]
    if (settings.value.areaSelect) areaPoints.value = areaPoints.value.length >= 2 ? [point] : [...areaPoints.value, point]
    return
  }
  touchPoints.set(event.pointerId, event.clientX)
  ;(event.currentTarget as Element).setPointerCapture?.(event.pointerId)
  if (touchPoints.size === 2) {
    const points = [...touchPoints.values()]
    pinch.value = { active: true, startDistance: Math.abs(points[1] - points[0]), startZoom: zoom.value }
    pointer.value.active = false
    return
  }
  pointer.value = { active: true, startX: event.clientX, startPan: pan.value }
}
function onChartPointerMove(event: PointerEvent) {
  if (touchPoints.has(event.pointerId)) touchPoints.set(event.pointerId, event.clientX)
  if (pinch.value.active && touchPoints.size >= 2) {
    const points = [...touchPoints.values()]
    const distance = Math.abs(points[1] - points[0])
    zoom.value = Math.max(.5, Math.min(2.5, pinch.value.startZoom * distance / Math.max(1, pinch.value.startDistance)))
    selectedIndex.value = null
    return
  }
  if (pointer.value.active) {
    const target = event.currentTarget as SVGElement
    const rect = target.getBoundingClientRect()
    const delta = Math.round((event.clientX - pointer.value.startX) / rect.width * candles.value.length)
    pan.value = Math.max(0, Math.min(candles.value.length - 8, pointer.value.startPan + delta))
  }
  selectedIndex.value = indexFromPointer(event)
}
function onChartPointerUp(event: PointerEvent) {
  touchPoints.delete(event.pointerId)
  if (touchPoints.size < 2) pinch.value.active = false
  pointer.value.active = false
}
function onChartWheel(event: WheelEvent) {
  zoom.value = Math.max(.5, Math.min(2.5, zoom.value + (event.deltaY < 0 ? .25 : -.25)))
}
function onChartLeave() { selectedIndex.value = null; pointer.value.active = false; touchPoints.clear(); pinch.value.active = false }
function resetChart() { zoom.value = 1; pan.value = 0; selectedIndex.value = null; drawPoints.value = []; areaPoints.value = []; candles.value = createKlineSeries(stock.value.code) }
function toggleSetting(key: keyof typeof settings.value) { settings.value[key] = !settings.value[key] }
function toggleSettingByName(key: string) { toggleSetting(key as keyof typeof settings.value); if (key === 'draw' && !settings.value.draw) drawPoints.value = []; if (key === 'areaSelect' && !settings.value.areaSelect) areaPoints.value = [] }
function settingEnabled(key: string) { return settings.value[key as keyof typeof settings.value] }
</script>

<template>
  <section class="detail-page">
    <div class="detail-top"><RouterLink class="back-link" to="/market">‹ 返回行情</RouterLink><div class="detail-actions"><button @click="showSignals = !showSignals">{{ showSignals ? '隐藏买卖点' : '显示买卖点' }}</button><button @click="resetChart">刷新 ↻</button></div></div>
    <section class="stock-header panel"><div><div class="stock-title"><h1>{{ stock.name }}</h1><span>{{ stock.code }} · 沪深 A 股</span></div><div class="stock-price mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.price }} <small>{{ stock.change }} {{ stock.percent }}</small></div></div><div class="stock-header-stats"><div><small>今开</small><strong>{{ stockStats.open }}</strong></div><div><small>最高</small><strong :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stockStats.high }}</strong></div><div><small>最低</small><strong>{{ stockStats.low }}</strong></div><div><small>成交额</small><strong>{{ stockStats.turnover }}</strong></div></div><button class="follow-button" :class="{ followed: isFollowed }" @click="toggleFollow">{{ isFollowed ? '★ 已自选' : '☆ 自选' }}</button></section>
    <div class="detail-tabs"><button v-for="tab in ['分时 / K线', '盘口', '资金', '资讯', '分析']" :key="tab" :class="{ selected: activeDetailTab === tab }" @click="activeDetailTab = tab">{{ tab }}</button></div>

    <section v-if="activeDetailTab === '分时 / K线'" class="chart-panel panel">
      <div class="chart-toolbar"><div class="period-tabs"><button v-for="period in periods" :key="period" :class="{ selected: activePeriod === period }" @click="activePeriod = period">{{ period }}</button></div><div class="indicator-tabs"><button :class="{ selected: indicator === 'MA' }" @click="indicator = 'MA'">MA</button><button :class="{ selected: indicator === 'MACD' }" @click="indicator = 'MACD'">MACD</button><button :class="{ selected: indicator === 'BOLL' }" @click="indicator = 'BOLL'">BOLL</button><button class="settings-trigger" @click="showSettings = true">⚙ 设置</button></div></div>
      <div class="chart-summary"><span v-if="selectedIndex !== null">{{ visibleCandles[selectedIndex].date }}　开 {{ visibleCandles[selectedIndex].open.toFixed(2) }}　高 {{ visibleCandles[selectedIndex].high.toFixed(2) }}　低 {{ visibleCandles[selectedIndex].low.toFixed(2) }}　收 {{ visibleCandles[selectedIndex].close.toFixed(2) }}</span><span v-else>日K · {{ adjustment }} · {{ visibleCandles.length }} 根</span><span class="chart-hint">滚动缩放 · 移动查看数据</span></div>
      <div class="chart-wrap"><svg viewBox="0 0 930 400" preserveAspectRatio="none" @pointerdown="onChartPointerDown" @pointermove="onChartPointerMove" @pointerup="onChartPointerUp" @pointercancel="onChartPointerUp" @wheel.prevent="onChartWheel" @mouseleave="onChartLeave"><g class="grid-lines"><line v-for="line in 5" :key="`h-${line}`" x1="25" :y1="20 + (line - 1) * 67.5" x2="905" :y2="20 + (line - 1) * 67.5" /><line v-for="line in 6" :key="`v-${line}`" :x1="25 + (line - 1) * 176" y1="20" :x2="25 + (line - 1) * 176" y2="380" /></g><g class="price-labels"><text v-for="line in 5" :key="line" x="908" :y="24 + (line - 1) * 67.5">{{ (bounds.max - (line - 1) * (bounds.max - bounds.min) / 4).toFixed(2) }}</text></g><g v-if="activePeriod !== '分时'" class="candles"><g v-for="(candle, index) in visibleCandles" :key="candle.date" :class="candle.close >= candle.open ? 'rise' : 'fall'"><line :x1="xFor(index)" :x2="xFor(index)" :y1="yFor(candle.high)" :y2="yFor(candle.low)" /><rect :x="xFor(index) - candleWidth / 2" :y="Math.min(yFor(candle.open), yFor(candle.close))" :width="candleWidth" :height="Math.max(2, Math.abs(yFor(candle.open) - yFor(candle.close)))" /></g></g><path v-else class="intraday-line" :d="closePath()" /><path v-if="indicator === 'MA' && activePeriod !== '分时'" class="ma5" :d="linePath(5)" /><path v-if="indicator === 'MA' && activePeriod !== '分时'" class="ma10" :d="linePath(10)" /><path v-if="indicator === 'BOLL'" class="boll boll-mid" :d="linePath(20)" /><path v-if="indicator === 'BOLL'" class="boll boll-edge" :d="bollPath(1)" /><path v-if="indicator === 'BOLL'" class="boll boll-edge" :d="bollPath(-1)" /><path v-if="settings.trendLine" class="trend-line" d="M35 230 L895 105" /><path v-if="settings.supportPressure" class="pressure-line" d="M35 172 L895 172" /><line v-if="drawPoints.length === 2" class="user-draw-line" :x1="drawPoints[0].x" :y1="drawPoints[0].y" :x2="drawPoints[1].x" :y2="drawPoints[1].y" /><rect v-if="areaPoints.length === 2" class="area-select-rect" :x="Math.min(areaPoints[0].x, areaPoints[1].x)" y="20" :width="Math.abs(areaPoints[1].x - areaPoints[0].x)" height="270" /><g v-if="areaStats" class="area-stats"><text :x="Math.min(areaPoints[0].x, areaPoints[1].x) + 8" y="42">区间 {{ areaStats.percent >= 0 ? '+' : '' }}{{ areaStats.percent.toFixed(2) }}%</text><text :x="Math.min(areaPoints[0].x, areaPoints[1].x) + 8" y="58">高 {{ areaStats.high.toFixed(2) }} / 低 {{ areaStats.low.toFixed(2) }}</text></g><circle v-for="(point, index) in drawPoints" :key="`draw-point-${index}`" class="user-draw-point" :cx="point.x" :cy="point.y" r="4" /><g v-if="settings.magicNine" class="magic-nine"><text v-for="(candle, index) in visibleCandles" :key="`nine-${candle.date}`" :x="xFor(index)" :y="yFor(candle.high) - 8" :opacity="index % 9 === 8 ? 1 : 0">9</text></g><g v-if="indicator === 'MACD'" class="macd-subplot"><line x1="25" y1="312" x2="905" y2="312" /><rect v-for="(candle, index) in visibleCandles" :key="`macd-${candle.date}`" :x="xFor(index) - candleWidth / 2" :y="Math.min(312, macdY(macdValue(index)) )" :width="candleWidth" :height="Math.max(1, Math.abs(312 - macdY(macdValue(index))))" :class="macdValue(index) >= 0 ? 'rise-volume' : 'fall-volume'" /><path class="macd-line" :d="macdPath()" /></g><g class="volume-bars"><rect v-for="(candle, index) in visibleCandles" :key="`v-${candle.date}`" :x="xFor(index) - candleWidth / 2" :y="335 - candle.volume / maxVolume * 35" :width="candleWidth" :height="candle.volume / maxVolume * 35" :class="candle.close >= candle.open ? 'rise-volume' : 'fall-volume'" /></g><g v-if="showSignals" class="signals"><path d="M0 0 l5 8 l5-8" transform="translate(120 126)" /><path d="M0 8 l5-8 l5 8" transform="translate(520 185)" /></g><g v-if="selectedIndex !== null" class="crosshair"><line :x1="xFor(selectedIndex)" y1="20" :x2="xFor(selectedIndex)" y2="380" /><line x1="25" :y1="yFor(visibleCandles[selectedIndex].close)" x2="905" :y2="yFor(visibleCandles[selectedIndex].close)" /><circle :cx="xFor(selectedIndex)" :cy="yFor(visibleCandles[selectedIndex].close)" r="4" /></g></svg></div>
      <div class="chart-legend"><span class="legend-item"><i class="legend-dot rise-dot" />MA5 <b>{{ ma(5, visibleCandles.length - 1).toFixed(2) }}</b></span><span class="legend-item"><i class="legend-dot yellow-dot" />MA10 <b>{{ ma(10, visibleCandles.length - 1).toFixed(2) }}</b></span><span class="legend-item"><i class="legend-dot purple-dot" />MA20 <b>{{ ma(20, visibleCandles.length - 1).toFixed(2) }}</b></span><span class="legend-spacer" /><button class="adjustment-button" @click="showAdjustment = !showAdjustment">切换复权⌄</button><div v-if="showAdjustment" class="adjustment-menu"><button v-for="item in ['前复权', '后复权', '不复权']" :key="item" :class="{ selected: adjustment === item }" @click="adjustment = item; showAdjustment = false">{{ item }}</button></div></div>
      <div class="chart-controls"><button @click="zoom = Math.min(2.5, zoom + .25)">＋ 放大</button><button @click="zoom = Math.max(.5, zoom - .25)">－ 缩小</button><button @click="pan = Math.min(candles.length - 8, pan + 5)">← 更早</button><button @click="pan = Math.max(0, pan - 5)">更新近端 →</button><span>成交量</span><span class="volume-key rise-key" />上涨<span class="volume-key fall-key" />下跌</div>
    </section>
    <section v-else class="detail-tab-panel">
      <section v-if="activeDetailTab === '盘口'" class="order-book-grid">
        <article class="panel detail-block order-book"><div class="block-title"><h2>五档盘口</h2><span class="muted">买卖委托</span></div><div v-for="row in orderBook" :key="row.label" class="order-row"><span>{{ row.label }}</span><span class="mono" :class="row.side === 'sell' ? 'text-up' : 'text-down'">{{ row.price }}</span><span class="mono muted">{{ row.amount }}</span><i :class="row.side === 'sell' ? 'sell-bar' : 'buy-bar'" /></div></article>
        <article class="panel detail-block"><div class="block-title"><h2>盘口明细</h2><span class="muted">今日实时</span></div><div class="quote-stat-grid"><div><small>委比</small><strong class="text-up mono">+18.62%</strong></div><div><small>委差</small><strong class="text-up mono">+12,486</strong></div><div><small>量比</small><strong class="mono">1.86</strong></div><div><small>换手率</small><strong class="mono">2.74%</strong></div></div><div class="detail-note">买盘力量较强，当前买一至买三挂单相对集中。</div></article>
      </section>
      <section v-else-if="activeDetailTab === '资金'" class="panel detail-block capital-panel"><div class="block-title"><h2>资金流向</h2><span class="muted">今日 · 亿元</span></div><div class="capital-list"><div v-for="item in capitalFlow" :key="item.label" class="capital-row"><span>{{ item.label }}</span><strong class="mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.value }}</strong><span class="capital-percent mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</span><div class="capital-track"><i :class="item.trend === 'up' ? 'capital-in' : 'capital-out'" :style="{ width: `${Math.min(100, Math.abs(Number.parseFloat(item.percent)) * 12 + 18)}%` }" /></div></div></div></section>
      <section v-else-if="activeDetailTab === '资讯'" class="panel detail-block news-detail-panel"><div class="block-title"><h2>相关资讯</h2><span class="muted">共 36 条</span></div><RouterLink v-for="item in detailNews" :key="item.time + item.title" to="/news" class="detail-news-row"><time class="mono">{{ item.time }}</time><span class="news-tag">{{ item.tag }}</span><strong>{{ item.title }}</strong><span class="result-arrow">›</span></RouterLink><RouterLink class="text-button more-detail-news" to="/news">查看全部资讯 →</RouterLink></section>
      <section v-else class="panel detail-block analysis-panel"><div class="block-title"><h2>基本面与估值</h2><span class="muted">数据日期 08-10</span></div><div class="analysis-grid"><div v-for="item in analysisMetrics" :key="item.label" class="analysis-card"><small>{{ item.label }}</small><strong class="mono">{{ item.value }}</strong><span :class="item.trend === 'up' ? 'text-up' : 'muted'">{{ item.note }}</span></div></div><div class="analysis-summary"><span class="signal-icon">◆</span><p><strong>技术面偏强</strong> 短期均线呈多头排列，成交量较前一交易日放大。</p></div></section>
    </section>
    <section v-if="showSettings" class="settings-mask" @click.self="showSettings = false"><div class="settings-sheet"><div class="settings-sheet-head"><h2>K线设置</h2><button @click="showSettings = false">×</button></div><div class="setting-group"><h3>复权方式</h3><div class="setting-chips"><button v-for="item in ['不复权', '前复权', '后复权']" :key="item" :class="{ selected: adjustment === item }" @click="adjustment = item">{{ item }}</button></div></div><div class="setting-group"><h3>图表工具</h3><button v-for="item in [{ key: 'trendLine', label: '趋势线' }, { key: 'supportPressure', label: '支撑压力位' }, { key: 'draw', label: '画线工具' }, { key: 'areaSelect', label: '区间统计' }, { key: 'magicNine', label: '神奇九转' }, { key: 'tradeLine', label: '操盘线' }]" :key="item.key" class="setting-switch-row" @click="toggleSettingByName(item.key)"><span>{{ item.label }}</span><i :class="{ on: settingEnabled(item.key) }"><b /></i></button></div><button class="settings-done" @click="showSettings = false">完成</button></div></section>
        <section class="detail-lower"><article class="panel detail-block"><div class="block-title"><h2>五档盘口</h2><button>更多 →</button></div><div v-for="row in orderBook.slice(0, 5)" :key="row.label" class="order-row"><span>{{ row.label }}</span><span class="mono" :class="row.side === 'sell' ? 'text-up' : 'text-down'">{{ row.price }}</span><span class="mono muted">{{ row.amount }}</span></div></article><article class="panel detail-block"><div class="block-title"><h2>相关资讯</h2><button>更多 →</button></div><p class="related-news">新能源板块持续活跃，机构关注盈利修复</p><p class="related-news">成交额快速放大，短线资金偏好明显</p><p class="related-news">公司发布最新业务进展公告</p></article></section>
  </section>
</template>

<style scoped>
.detail-page { max-width: 1200px; margin: 0 auto; }.detail-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }.back-link { color: var(--primary); font-size: 12px; }.detail-actions { display: flex; gap: 10px; }.detail-actions button, .follow-button { color: var(--muted); background: transparent; border: 1px solid var(--border); padding: 7px 10px; font-size: 10px; }.stock-header { position: relative; display: flex; align-items: center; padding: 22px; margin-bottom: 10px; }.follow-button.followed { color: var(--gold); border-color: rgba(255,137,30,.4); background: rgba(255,137,30,.06); }.stock-title { display: flex; align-items: baseline; gap: 10px; }.stock-title h1 { font-size: 22px; }.stock-title span { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.stock-price { font-size: 28px; font-weight: 600; margin-top: 13px; }.stock-price small { font-size: 12px; margin-left: 9px; }.stock-header-stats { display: flex; gap: 30px; margin-left: auto; margin-right: 26px; }.stock-header-stats small { display: block; color: var(--muted); font-size: 10px; margin-bottom: 7px; }.stock-header-stats strong { font: 12px 'JetBrains Mono', monospace; }.detail-tabs { display: flex; gap: 25px; border-bottom: 1px solid var(--border); }.detail-tabs button { position: relative; color: var(--muted); background: transparent; border: 0; padding: 11px 2px; font-size: 12px; }.detail-tabs button.selected { color: var(--text); font-weight: 600; }.detail-tabs button.selected::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: var(--primary); }.chart-panel { margin-top: 10px; padding: 0 18px 12px; }.chart-toolbar { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }.period-tabs, .indicator-tabs { display: flex; gap: 6px; }.period-tabs button, .indicator-tabs button { color: var(--muted); background: transparent; border: 0; padding: 12px 9px; font-size: 11px; }.period-tabs button.selected, .indicator-tabs button.selected { color: var(--primary); font-weight: 600; }.chart-summary { display: flex; justify-content: space-between; color: var(--muted); font: 10px 'JetBrains Mono', monospace; padding: 10px 5px 0; }.chart-hint { color: #adb4bf; }.chart-wrap { width: 100%; height: 390px; overscroll-behavior: contain; }.chart-wrap svg { width: 100%; height: 100%; overflow: visible; cursor: crosshair; touch-action: none; user-select: none; -webkit-user-select: none; -webkit-tap-highlight-color: transparent; }.chart-wrap svg:active { cursor: grabbing; }.grid-lines line { stroke: #edf0f4; stroke-width: 1; }.price-labels text { fill: #a5adbb; font: 10px 'JetBrains Mono', monospace; text-anchor: end; }.candles line { stroke-width: 1; }.candles rect { stroke-width: 1; }.candles .rise line, .candles .rise rect { stroke: var(--up); fill: rgba(230,53,53,.14); }.candles .fall line, .candles .fall rect { stroke: var(--down); fill: rgba(28,170,60,.14); }.ma5 { fill: none; stroke: #e63535; stroke-width: 1.5; }.ma10 { fill: none; stroke: #f2a600; stroke-width: 1.5; }.boll { fill: none; stroke: #8b64c7; stroke-width: 1.5; }.boll-edge { stroke-dasharray: 4 3; opacity: .65; }.macd-subplot line { stroke: #c7ced9; stroke-width: 1; stroke-dasharray: 3 3; }.macd-line { fill: none; stroke: #3077ec; stroke-width: 1.2; }.intraday-line { fill: none; stroke: var(--primary); stroke-width: 2; }.volume-bars rect { opacity: .48; }.rise-volume { fill: var(--up); }.fall-volume { fill: var(--down); }.signals path { fill: none; stroke: var(--primary); stroke-width: 2; }.user-draw-line { stroke: var(--primary); stroke-width: 1.5; stroke-dasharray: 6 3; }.area-select-rect { fill: rgba(48,119,236,.08); stroke: var(--primary); stroke-width: 1; stroke-dasharray: 4 3; }.area-stats text { fill: var(--primary); font: 10px 'JetBrains Mono', monospace; }.user-draw-point { fill: var(--card); stroke: var(--primary); stroke-width: 2; }.crosshair line { stroke: var(--primary); stroke-width: 1; stroke-dasharray: 4 3; opacity: .7; }.crosshair circle { fill: var(--card); stroke: var(--primary); stroke-width: 2; }.chart-legend, .chart-controls { display: flex; align-items: center; gap: 14px; color: var(--muted); font-size: 10px; }.chart-legend { position: relative; border-top: 1px solid var(--border); padding: 11px 4px; }.legend-item { display: flex; align-items: center; gap: 5px; }.legend-item b { color: var(--text); font: 10px 'JetBrains Mono', monospace; }.legend-dot { width: 9px; height: 2px; display: inline-block; }.rise-dot { background: var(--up); }.yellow-dot { background: #f2a600; }.purple-dot { background: #8b64c7; }.legend-spacer { flex: 1; }.adjustment-button, .chart-controls button { color: var(--muted); background: transparent; border: 0; font-size: 10px; }.adjustment-menu { position: absolute; right: 0; bottom: 34px; z-index: 4; background: var(--card); border: 1px solid var(--border); box-shadow: 0 5px 16px rgba(38,46,64,.12); }.adjustment-menu button { display: block; width: 88px; padding: 9px; background: transparent; color: var(--muted); border: 0; font-size: 10px; }.adjustment-menu button.selected { color: var(--primary); background: #edf4ff; }.chart-controls { padding: 2px 4px; }.volume-key { width: 8px; height: 8px; display: inline-block; margin-left: -8px; }.rise-key { background: var(--up); }.fall-key { background: var(--down); }.detail-tab-panel { margin-top: 10px; }.order-book-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }.order-book .order-row { position: relative; grid-template-columns: 1fr 1fr 1fr 1.4fr; align-items: center; }.order-row i { height: 5px; justify-self: end; border-radius: 1px; opacity: .55; }.sell-bar { background: var(--up); width: 72%; }.buy-bar { background: var(--down); width: 58%; }.quote-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 10px; padding: 9px 0 19px; }.quote-stat-grid small, .analysis-card small { display: block; color: var(--muted); font-size: 10px; margin-bottom: 7px; }.quote-stat-grid strong { font-size: 13px; }.detail-note { color: var(--muted); background: var(--bg); padding: 12px; font-size: 11px; line-height: 1.6; }.capital-panel, .news-detail-panel, .analysis-panel { padding: 18px 20px; }.capital-list { display: grid; gap: 15px; }.capital-row { display: grid; grid-template-columns: 1.2fr .8fr .6fr 1.4fr; gap: 10px; align-items: center; font-size: 11px; }.capital-row strong, .capital-percent { font-size: 11px; }.capital-track { height: 5px; background: var(--bg); }.capital-track i { display: block; height: 100%; }.capital-in { background: var(--up); }.capital-out { background: var(--down); }.detail-news-row { display: grid; grid-template-columns: 45px 42px 1fr 15px; gap: 10px; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--border); }.detail-news-row time { color: var(--muted); font-size: 10px; }.detail-news-row strong { font-size: 12px; font-weight: 500; }.more-detail-news { display: block; margin-top: 15px; text-align: right; }.analysis-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }.analysis-card { background: var(--bg); padding: 15px; }.analysis-card strong { display: block; font-size: 17px; margin-bottom: 8px; }.analysis-card span { font-size: 10px; }.analysis-summary { display: flex; align-items: center; gap: 10px; margin-top: 15px; padding: 13px; background: rgba(255,137,30,.06); color: var(--muted); font-size: 11px; }.analysis-summary strong { color: var(--text); margin-right: 4px; }.tab-content-placeholder { min-height: 390px; margin-top: 10px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; }.tab-content-placeholder .placeholder-icon { color: var(--primary); font-size: 34px; }.tab-content-placeholder h2 { margin-top: 12px; font-size: 17px; }.tab-content-placeholder p { color: var(--muted); font-size: 11px; margin-top: 8px; }.settings-mask { position: fixed; z-index: 30; inset: 0; display: flex; align-items: flex-end; justify-content: center; background: rgba(38,46,64,.28); }.settings-sheet { width: min(540px, 100%); padding: 20px 22px 24px; background: var(--card); border-radius: 10px 10px 0 0; box-shadow: 0 -8px 30px rgba(38,46,64,.14); }.settings-sheet-head { display: flex; align-items: center; justify-content: space-between; }.settings-sheet-head h2 { font-size: 16px; }.settings-sheet-head button { border: 0; background: transparent; color: var(--muted); font-size: 22px; }.setting-group { padding: 17px 0 5px; border-bottom: 1px solid var(--border); }.setting-group h3 { color: var(--muted); font-size: 11px; font-weight: 400; margin: 0 0 12px; }.setting-chips { display: flex; gap: 8px; }.setting-chips button { color: var(--muted); background: var(--bg); border: 0; border-radius: 4px; padding: 8px 18px; font-size: 11px; }.setting-chips button.selected { color: var(--primary); background: #edf4ff; }.setting-switch-row { width: 100%; display: flex; align-items: center; justify-content: space-between; color: var(--text); border: 0; background: transparent; padding: 10px 0; font-size: 12px; }.setting-switch-row i { position: relative; width: 34px; height: 20px; border-radius: 11px; background: #d9dee7; transition: background .15s; }.setting-switch-row i b { position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: transform .15s; }.setting-switch-row i.on { background: var(--primary); }.setting-switch-row i.on b { transform: translateX(14px); }.settings-done { width: 100%; margin-top: 18px; padding: 11px; color: #fff; background: var(--primary); border: 0; border-radius: 4px; font-size: 12px; }.detail-lower { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }.detail-block { padding: 17px 20px; }.block-title { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }.block-title h2 { font-size: 14px; }.block-title button { color: var(--primary); background: transparent; border: 0; font-size: 10px; }.order-row { display: grid; grid-template-columns: 1fr 1fr 1fr; padding: 7px 0; color: var(--muted); font-size: 11px; }.related-news { padding: 9px 0; border-bottom: 1px solid var(--border); color: var(--text); font-size: 11px; }.related-news:last-child { border: 0; }
@media (max-width: 760px) { .stock-header { align-items: flex-start; flex-wrap: wrap; gap: 18px; }.stock-header-stats { order: 3; width: 100%; justify-content: space-between; margin: 0; gap: 8px; }.follow-button { margin-left: auto; }.chart-toolbar { overflow-x: auto; }.period-tabs button, .indicator-tabs button { min-height: 42px; padding-left: 13px; padding-right: 13px; }.chart-wrap { height: 320px; }.detail-lower, .order-book-grid { grid-template-columns: 1fr; }.analysis-grid { grid-template-columns: repeat(2, 1fr); }.capital-row { grid-template-columns: 1.2fr .8fr .6fr 1fr; gap: 6px; }.chart-summary { font-size: 9px; }.chart-hint { display: none; }.chart-controls { overflow-x: auto; white-space: nowrap; padding-bottom: 6px; }.chart-controls button { min-height: 34px; padding: 0 7px; } }
</style>
