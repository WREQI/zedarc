<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import EmptyState from '@/components/EmptyState.vue'
import { getMarketStocksSnapshot, getStockQuote } from '@/services/market'
import { calculateKDJ, calculateRSI, calculateSAR, createKlineSeries, getKlineDataSource, getKlineSeries, getMinuteSeries, type KlineCandle } from '@/services/kline'
import { useWatchlistStore } from '@/stores/watchlist'
import { useChartPreferencesStore } from '@/stores/chart-preferences'
import { connectMarketSocket } from '@/services/market-socket'
import { createPriceAlert } from '@/services/alerts'
import { getAccessToken } from '@/services/api-client'

const marketStocks = getMarketStocksSnapshot()
const route = useRoute()
const code = computed(() => String(route.params.code || '000001'))
const fallbackStock = computed(() => ({ code: code.value, name: '加载中', price: '--', change: '--', percent: '--', volume: '--', trend: 'up' as const }))
const watchlistStore = useWatchlistStore()
const chartPreferences = useChartPreferencesStore()
const realStock = ref<typeof marketStocks[number] | null>(null)
const isQuoteLoading = ref(true)
const quoteError = ref('')
const stock = computed(() => realStock.value ?? marketStocks.find((item) => item.code === code.value) ?? fallbackStock.value)
const stockStats = computed(() => {
  const price = Number(stock.value.price.replace(',', '')) || 0
  const change = Number(stock.value.change.replace(',', '')) || 0
  const open = price - change * .42
  return { open: open.toFixed(2), high: (Math.max(open, price) + Math.abs(change) * .18).toFixed(2), low: (Math.min(open, price) - Math.abs(change) * .12).toFixed(2), turnover: stock.value.volume }
})
const periods = ['分时', '5日', '日K', '周K', '月K']
const activePeriod = ref('日K')
const indicator = ref<'MA' | 'MACD' | 'BOLL' | 'KDJ' | 'RSI' | 'SAR'>('MA')
const adjustment = ref('前复权')
const showAdjustment = ref(false)
const showSignals = ref(true)
const zoom = ref(1)
const pan = ref(0)
const selectedIndex = ref<number | null>(null)
const candles = ref<KlineCandle[]>(createKlineSeries(code.value))
const isChartLoading = ref(false)
const chartError = ref('')
const dataSource = ref<'api' | 'sdk' | 'mock'>('mock')
const pointer = ref({ active: false, startX: 0, startPan: 0 })
const touchPoints = new Map<number, number>()
const pinch = ref({ active: false, startDistance: 0, startZoom: 1 })
const activeDetailTab = ref('分时 / K线')
const showSettings = ref(false)
const settings = ref({ trendLine: false, supportPressure: false, areaSelect: false, magicNine: false, tradeLine: false, draw: false })
const drawPoints = ref<Array<{ x: number; y: number }>>([])
const areaPoints = ref<Array<{ x: number; y: number }>>([])
const isFollowed = ref(false)
const showAlert = ref(false)
const alertPrice = ref('')
const alertDirection = ref<'above' | 'below'>('above')
const alertRepeat = ref(false)
const alertError = ref('')
const alertSaved = ref(false)
let disconnectMarketSocket: () => void = () => undefined

const orderBook = computed(() => {
  const price = Number(stock.value.price.replace(',', '')) || 0
  const levels = [0.6, 0.4, 0.2, 0.1, 0.05]
  const amounts = [1204, 862, 2031, 1536, 4120, 4820, 3128, 2745, 1680, 936]
  return [...levels.map((offset, index) => ({ label: `卖${5 - index}`, price: (price + offset).toFixed(2), amount: amounts[index].toLocaleString(), side: 'sell' })), ...levels.map((offset, index) => ({ label: `买${index + 1}`, price: (price - offset).toFixed(2), amount: amounts[index + 5].toLocaleString(), side: 'buy' }))]
})
const capitalFlow = [{ label: '主力净流入', value: '+2.86亿', percent: '+6.7%', trend: 'up' }, { label: '超大单净流入', value: '+1.42亿', percent: '+3.3%', trend: 'up' }, { label: '大单净流入', value: '+1.08亿', percent: '+2.5%', trend: 'up' }, { label: '中单净流出', value: '-0.32亿', percent: '-0.7%', trend: 'down' }, { label: '小单净流出', value: '-0.18亿', percent: '-0.4%', trend: 'down' }]
const detailNews = [{ time: '14:32', tag: '公告', title: '公司发布最新业务进展，产业链订单保持稳定' }, { time: '13:58', tag: '市场', title: '新能源板块持续活跃，机构关注盈利修复' }, { time: '11:24', tag: '研报', title: '机构上调目标价，维持“推荐”评级' }]
const analysisMetrics = [{ label: '市盈率 TTM', value: '18.42', note: '低于行业均值', trend: 'up' }, { label: '市净率', value: '3.26', note: '处于历史中位', trend: 'neutral' }, { label: 'ROE', value: '16.80%', note: '连续三年提升', trend: 'up' }, { label: '机构关注度', value: '★★★★☆', note: '近一月新增 12 家', trend: 'up' }]

async function loadQuote() {
  isQuoteLoading.value = true; quoteError.value = ''
  try { realStock.value = await getStockQuote(code.value) ?? null; if (!realStock.value) quoteError.value = '暂未找到该股票行情，请返回行情页重试。' } catch { quoteError.value = '股票行情加载失败，请检查网络后重试。' } finally { isQuoteLoading.value = false }
}
async function loadChartData() {
  isChartLoading.value = true; chartError.value = ''
  try {
    candles.value = activePeriod.value === '分时' ? await getMinuteSeries(stock.value.code) : await getKlineSeries(stock.value.code, activePeriod.value === '周K' ? 'weekly' : activePeriod.value === '月K' ? 'monthly' : 'daily', adjustment.value === '前复权' ? 'qfq' : adjustment.value === '后复权' ? 'hfq' : '')
    dataSource.value = getKlineDataSource(candles.value)
    if (!candles.value.length) chartError.value = '暂无该周期的图表数据。'
  } catch { chartError.value = 'K线数据加载失败，请稍后重试。' } finally { isChartLoading.value = false }
}
onMounted(async () => {
  await loadQuote()
  isFollowed.value = watchlistStore.has(stock.value.code)
  watchlistStore.addRecent(stock.value.code)
  const preferences = chartPreferences.get(stock.value.code)
  if (preferences?.period && periods.includes(preferences.period)) activePeriod.value = preferences.period
  if (preferences?.indicator) indicator.value = preferences.indicator
  if (preferences?.adjustment) adjustment.value = preferences.adjustment
  if (preferences?.settings) settings.value = { ...settings.value, ...preferences.settings }
  await loadChartData()
  disconnectMarketSocket = connectMarketSocket([stock.value.code], (event) => {
    if (event.type === 'quote' && event.data && typeof event.data === 'object') {
      const quote = event.data as { code?: string; name?: string; price?: number; change?: number; changePercent?: number; volume?: number }
      if (quote.code === stock.value.code && quote.price != null && quote.change != null && quote.changePercent != null) realStock.value = { ...stock.value, name: quote.name ?? stock.value.name, price: quote.price.toFixed(2), change: `${quote.change >= 0 ? '+' : ''}${quote.change.toFixed(2)}`, percent: `${quote.changePercent >= 0 ? '+' : ''}${quote.changePercent.toFixed(2)}%`, volume: String(quote.volume ?? 0), trend: quote.change >= 0 ? 'up' : 'down' }
    }
  })
})
watch([activePeriod, adjustment], () => { if (activePeriod.value) void loadChartData() })
onUnmounted(() => { disconnectMarketSocket(); chartPreferences.save(stock.value.code, { period: activePeriod.value, indicator: indicator.value, adjustment: adjustment.value, settings: settings.value }) })

function toggleFollow() { watchlistStore.toggle(stock.value.code); isFollowed.value = watchlistStore.has(stock.value.code) }
function openAlert() { alertError.value = ''; alertSaved.value = false; alertPrice.value = Number(stock.value.price.replace(',', '')).toFixed(2); showAlert.value = true }
async function saveAlert() {
  if (!getAccessToken()) { alertError.value = '请先登录后设置价格提醒'; return }
  const targetPrice = Number(alertPrice.value)
  if (!Number.isFinite(targetPrice) || targetPrice <= 0) { alertError.value = '请输入有效的目标价格'; return }
  try { await createPriceAlert({ code: stock.value.code, targetPrice, direction: alertDirection.value, repeat: alertRepeat.value }); alertSaved.value = true; window.setTimeout(() => { showAlert.value = false; alertSaved.value = false }, 900) } catch { alertError.value = '保存失败，请稍后重试' }
}
const periodSize = computed(() => ({ '分时': 40, '5日': 25, '日K': 30, '周K': 24, '月K': 18 }[activePeriod.value] ?? 30))
const visibleCandles = computed(() => { const count = Math.min(candles.value.length, Math.max(8, Math.round(periodSize.value / zoom.value))); const end = Math.max(count, Math.min(candles.value.length, candles.value.length - pan.value)); return candles.value.slice(Math.max(0, end - count), end) })
const bounds = computed(() => { const values = visibleCandles.value.flatMap((item) => [item.high, item.low]); return { min: (Math.min(...values) || 0) - 2, max: (Math.max(...values) || 2) + 2 } })
const maxVolume = computed(() => Math.max(1, ...visibleCandles.value.map((item) => item.volume)))
const latestKDJ = computed(() => { const values = calculateKDJ(visibleCandles.value); return values[values.length - 1] ?? { k: 0, d: 0, j: 0 } })
const latestRSI = computed(() => { const values = calculateRSI(visibleCandles.value); return values[values.length - 1] ?? 0 })
const latestSAR = computed(() => { const values = calculateSAR(visibleCandles.value); return values[values.length - 1] ?? 0 })
const chartWidth = 880
const candleWidth = computed(() => Math.max(7, (chartWidth / Math.max(1, visibleCandles.value.length)) * .52))
function xFor(index: number) { return 25 + (index + .5) * (chartWidth - 45) / Math.max(1, visibleCandles.value.length) }
function yFor(value: number) { return 20 + (bounds.value.max - value) / (bounds.value.max - bounds.value.min) * 270 }
function ma(period: number, index: number) { const source = visibleCandles.value.slice(Math.max(0, index - period + 1), index + 1); return source.reduce((sum, item) => sum + item.close, 0) / Math.max(1, source.length) }
function linePath(period: number) { return visibleCandles.value.map((_, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(ma(period, index))}`).join(' ') }
function closePath() { return visibleCandles.value.map((candle, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(candle.close)}`).join(' ') }
function bollValue(period: number, index: number, direction: number) { const source = visibleCandles.value.slice(Math.max(0, index - period + 1), index + 1); const average = source.reduce((sum, item) => sum + item.close, 0) / source.length; const deviation = Math.sqrt(source.reduce((sum, item) => sum + (item.close - average) ** 2, 0) / source.length); return average + direction * deviation * 2 }
function bollPath(direction: number) { return visibleCandles.value.map((_, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(bollValue(20, index, direction))}`).join(' ') }
function macdValue(index: number) { return ma(5, index) - ma(10, index) }
const macdScale = computed(() => Math.max(.8, ...visibleCandles.value.map((_, index) => Math.abs(macdValue(index)))) * 1.2)
function macdY(value: number) { return 312 - value / macdScale.value * 22 }
function macdPath() { return visibleCandles.value.map((_, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${macdY(macdValue(index))}`).join(' ') }
function indexFromPointer(event: PointerEvent) { const rect = (event.currentTarget as SVGElement).getBoundingClientRect(); return Math.max(0, Math.min(visibleCandles.value.length - 1, Math.floor(((event.clientX - rect.left) / rect.width) * visibleCandles.value.length))) }
function onChartPointerDown(event: PointerEvent) { if (settings.value.draw || settings.value.areaSelect) { const rect = (event.currentTarget as SVGElement).getBoundingClientRect(); const point = { x: (event.clientX - rect.left) / rect.width * 930, y: (event.clientY - rect.top) / rect.height * 400 }; if (settings.value.draw) drawPoints.value = drawPoints.value.length >= 2 ? [point] : [...drawPoints.value, point]; if (settings.value.areaSelect) areaPoints.value = areaPoints.value.length >= 2 ? [point] : [...areaPoints.value, point]; return }; touchPoints.set(event.pointerId, event.clientX); (event.currentTarget as Element).setPointerCapture?.(event.pointerId); if (touchPoints.size === 1) pointer.value = { active: true, startX: event.clientX, startPan: pan.value } }
function onChartPointerMove(event: PointerEvent) { if (touchPoints.has(event.pointerId)) touchPoints.set(event.pointerId, event.clientX); if (pointer.value.active) { const rect = (event.currentTarget as SVGElement).getBoundingClientRect(); const delta = Math.round((event.clientX - pointer.value.startX) / rect.width * candles.value.length); pan.value = Math.max(0, Math.min(Math.max(0, candles.value.length - 8), pointer.value.startPan + delta)) }; selectedIndex.value = indexFromPointer(event) }
function onChartPointerUp(event: PointerEvent) { touchPoints.delete(event.pointerId); pointer.value.active = false }
function onChartWheel(event: WheelEvent) { zoom.value = Math.max(.5, Math.min(2.5, zoom.value + (event.deltaY < 0 ? .25 : -.25))) }
function onChartLeave() { selectedIndex.value = null; pointer.value.active = false; touchPoints.clear() }
function resetChart() { zoom.value = 1; pan.value = 0; selectedIndex.value = null; drawPoints.value = []; areaPoints.value = []; void loadChartData() }
function toggleSettingByName(key: string) { const setting = key as keyof typeof settings.value; settings.value[setting] = !settings.value[setting]; if (key === 'draw' && !settings.value.draw) drawPoints.value = []; if (key === 'areaSelect' && !settings.value.areaSelect) areaPoints.value = [] }
function settingEnabled(key: string) { return settings.value[key as keyof typeof settings.value] }
</script>

<template>
  <section class="detail-page">
    <header class="detail-nav"><RouterLink to="/market" class="back-link">‹</RouterLink><span>股票详情</span><div class="nav-actions"><button aria-label="设置价格提醒" @click="openAlert">♧</button><button aria-label="刷新行情" @click="resetChart">↻</button></div></header>
    <LoadingState v-if="isQuoteLoading" label="正在加载股票行情" />
    <ErrorState v-else-if="quoteError" title="行情暂时不可用" :message="quoteError" :retry="loadQuote" />
    <template v-else>
      <section class="stock-overview">
        <div class="stock-brief"><div class="price-column"><div class="stock-name"><h1>{{ stock.name }}</h1><span>{{ stock.code }}</span></div><strong class="stock-price mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.price }}</strong><div class="stock-change mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'"><span>{{ stock.change }}</span><span>{{ stock.percent }}</span></div></div><button class="favorite-button" :class="{ followed: isFollowed }" @click="toggleFollow"><b>{{ isFollowed ? '★' : '☆' }}</b><span>{{ isFollowed ? '已自选' : '自选' }}</span></button></div>
        <div class="quote-meta"><div><small>今开</small><b>{{ stockStats.open }}</b></div><div><small>最高</small><b class="text-up">{{ stockStats.high }}</b></div><div><small>最低</small><b>{{ stockStats.low }}</b></div><div><small>成交额</small><b>{{ stockStats.turnover }}</b></div></div>
      </section>
      <nav class="detail-tabs"><button v-for="tab in ['分时 / K线', '盘口', '资金', '资讯', '分析']" :key="tab" :class="{ selected: activeDetailTab === tab }" @click="activeDetailTab = tab">{{ tab }}</button></nav>
      <section v-if="activeDetailTab === '分时 / K线'" class="chart-card">
        <div class="period-tabs"><button v-for="period in periods" :key="period" :class="{ selected: activePeriod === period }" @click="activePeriod = period">{{ period }}</button><button class="chart-settings" @click="showSettings = true">⚙</button></div>
        <div class="indicator-tabs"><button v-for="item in ['MA', 'MACD', 'BOLL', 'KDJ', 'RSI', 'SAR']" :key="item" :class="{ selected: indicator === item }" @click="indicator = item as typeof indicator">{{ item }}</button><button class="adjustment-button" @click="showAdjustment = !showAdjustment">{{ adjustment }}⌄</button><div v-if="showAdjustment" class="adjustment-menu"><button v-for="item in ['前复权', '后复权', '不复权']" :key="item" @click="adjustment = item; showAdjustment = false">{{ item }}</button></div></div>
        <div class="chart-caption"><span v-if="selectedIndex !== null && visibleCandles[selectedIndex]">{{ visibleCandles[selectedIndex].date }}　开 {{ visibleCandles[selectedIndex].open.toFixed(2) }}　高 {{ visibleCandles[selectedIndex].high.toFixed(2) }}　低 {{ visibleCandles[selectedIndex].low.toFixed(2) }}　收 {{ visibleCandles[selectedIndex].close.toFixed(2) }}</span><span v-else>{{ activePeriod }} · {{ visibleCandles.length }} 根</span><small>数据源：{{ dataSource === 'api' ? '实时' : dataSource === 'sdk' ? '行情' : '本地' }}</small></div>
        <LoadingState v-if="isChartLoading" label="正在加载图表" /><ErrorState v-else-if="chartError" title="图表暂无数据" :message="chartError" :retry="loadChartData" /><EmptyState v-else-if="!visibleCandles.length" title="暂无图表数据" message="当前周期暂时没有可展示的数据。" />
        <div v-else class="chart-wrap"><svg viewBox="0 0 930 400" preserveAspectRatio="none" @pointerdown="onChartPointerDown" @pointermove="onChartPointerMove" @pointerup="onChartPointerUp" @pointercancel="onChartPointerUp" @wheel.prevent="onChartWheel" @mouseleave="onChartLeave"><g class="grid-lines"><line v-for="line in 5" :key="`h-${line}`" x1="25" :y1="20 + (line - 1) * 67.5" x2="905" :y2="20 + (line - 1) * 67.5" /><line v-for="line in 6" :key="`v-${line}`" :x1="25 + (line - 1) * 176" y1="20" :x2="25 + (line - 1) * 176" y2="380" /></g><g class="price-labels"><text v-for="line in 5" :key="line" x="908" :y="24 + (line - 1) * 67.5">{{ (bounds.max - (line - 1) * (bounds.max - bounds.min) / 4).toFixed(2) }}</text></g><g v-if="activePeriod !== '分时'" class="candles"><g v-for="(candle, index) in visibleCandles" :key="candle.date" :class="candle.close >= candle.open ? 'rise' : 'fall'"><line :x1="xFor(index)" :x2="xFor(index)" :y1="yFor(candle.high)" :y2="yFor(candle.low)" /><rect :x="xFor(index) - candleWidth / 2" :y="Math.min(yFor(candle.open), yFor(candle.close))" :width="candleWidth" :height="Math.max(2, Math.abs(yFor(candle.open) - yFor(candle.close)))" /></g></g><path v-else class="intraday-line" :d="closePath()" /><path v-if="indicator === 'MA' && activePeriod !== '分时'" class="ma5" :d="linePath(5)" /><path v-if="indicator === 'MA' && activePeriod !== '分时'" class="ma10" :d="linePath(10)" /><path v-if="indicator === 'BOLL'" class="boll" :d="linePath(20)" /><path v-if="indicator === 'BOLL'" class="boll boll-edge" :d="bollPath(1)" /><path v-if="indicator === 'BOLL'" class="boll boll-edge" :d="bollPath(-1)" /><g class="volume-bars"><rect v-for="(candle, index) in visibleCandles" :key="`v-${candle.date}`" :x="xFor(index) - candleWidth / 2" :y="335 - candle.volume / maxVolume * 35" :width="candleWidth" :height="candle.volume / maxVolume * 35" :class="candle.close >= candle.open ? 'rise-volume' : 'fall-volume'" /></g><g v-if="selectedIndex !== null && visibleCandles[selectedIndex]" class="crosshair"><line :x1="xFor(selectedIndex)" y1="20" :x2="xFor(selectedIndex)" y2="380" /><line x1="25" :y1="yFor(visibleCandles[selectedIndex].close)" x2="905" :y2="yFor(visibleCandles[selectedIndex].close)" /></g></svg></div>
        <div class="chart-foot"><span>MA5 {{ ma(5, visibleCandles.length - 1).toFixed(2) }}</span><span>MA10 {{ ma(10, visibleCandles.length - 1).toFixed(2) }}</span><span v-if="indicator === 'KDJ'">K {{ latestKDJ.k.toFixed(1) }} / D {{ latestKDJ.d.toFixed(1) }}</span><span v-if="indicator === 'RSI'">RSI {{ latestRSI.toFixed(1) }}</span><span v-if="indicator === 'SAR'">SAR {{ latestSAR.toFixed(2) }}</span><button @click="zoom = Math.min(2.5, zoom + .25)">＋</button><button @click="zoom = Math.max(.5, zoom - .25)">－</button></div>
      </section>
      <section v-else class="detail-panel"><section v-if="activeDetailTab === '盘口'" class="panel-block"><div class="block-title"><h2>五档盘口</h2><small>买卖委托</small></div><div v-for="row in orderBook" :key="row.label" class="order-row"><span>{{ row.label }}</span><b class="mono" :class="row.side === 'sell' ? 'text-up' : 'text-down'">{{ row.price }}</b><small>{{ row.amount }}</small><i :class="row.side === 'sell' ? 'sell-bar' : 'buy-bar'" /></div></section><section v-else-if="activeDetailTab === '资金'" class="panel-block"><div class="block-title"><h2>资金流向</h2><small>今日 · 亿元</small></div><div v-for="item in capitalFlow" :key="item.label" class="flow-row"><span>{{ item.label }}</span><b :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.value }}</b><small>{{ item.percent }}</small><i><em :class="item.trend === 'up' ? 'flow-in' : 'flow-out'" /></i></div></section><section v-else-if="activeDetailTab === '资讯'" class="panel-block"><div class="block-title"><h2>相关资讯</h2><small>实时更新</small></div><RouterLink v-for="item in detailNews" :key="item.time" to="/news" class="news-row"><time>{{ item.time }}</time><em>{{ item.tag }}</em><strong>{{ item.title }}</strong><span>›</span></RouterLink></section><section v-else class="panel-block"><div class="block-title"><h2>基本面与估值</h2><small>数据日期 08-10</small></div><div class="analysis-grid"><div v-for="item in analysisMetrics" :key="item.label"><small>{{ item.label }}</small><b>{{ item.value }}</b><em :class="item.trend === 'up' ? 'text-up' : 'muted'">{{ item.note }}</em></div></div></section></section>
    </template>
    <footer class="bottom-bar"><button @click="toggleFollow"><b>{{ isFollowed ? '★' : '☆' }}</b><span>{{ isFollowed ? '已自选' : '自选' }}</span></button><button @click="openAlert"><b>♧</b><span>提醒</span></button><button><b>⌁</b><span>分享</span></button><RouterLink to="/trade" class="trade-button">交易</RouterLink></footer>
    <section v-if="showAlert" class="sheet-mask" @click.self="showAlert = false"><div class="sheet"><div class="sheet-title"><h2>设置价格提醒</h2><button @click="showAlert = false">×</button></div><p>{{ stock.name }}（{{ stock.code }}）当前价 {{ stock.price }}</p><label>目标价格<input v-model="alertPrice" inputmode="decimal" /></label><label>触发条件<select v-model="alertDirection"><option value="above">价格高于目标价</option><option value="below">价格低于目标价</option></select></label><label class="check"><input v-model="alertRepeat" type="checkbox" /> 每次达到条件都提醒</label><p v-if="alertError" class="form-error">{{ alertError }}</p><p v-if="alertSaved" class="form-success">提醒已保存</p><button class="primary-button" :disabled="alertSaved" @click="saveAlert">{{ alertSaved ? '已保存' : '保存提醒' }}</button></div></section>
    <section v-if="showSettings" class="sheet-mask" @click.self="showSettings = false"><div class="sheet"><div class="sheet-title"><h2>K线设置</h2><button @click="showSettings = false">×</button></div><h3>复权方式</h3><div class="setting-chips"><button v-for="item in ['不复权', '前复权', '后复权']" :key="item" :class="{ selected: adjustment === item }" @click="adjustment = item">{{ item }}</button></div><h3>图表工具</h3><button v-for="item in [{ key: 'trendLine', label: '趋势线' }, { key: 'supportPressure', label: '支撑压力位' }, { key: 'draw', label: '画线工具' }, { key: 'areaSelect', label: '区间统计' }, { key: 'magicNine', label: '神奇九转' }, { key: 'tradeLine', label: '操盘线' }]" :key="item.key" class="setting-row" @click="toggleSettingByName(item.key)"><span>{{ item.label }}</span><i :class="{ on: settingEnabled(item.key) }" /></button><button class="primary-button" @click="showSettings = false">完成</button></div></section>
  </section>
</template>

<style scoped>
.detail-page{--rise:#e65353;--fall:#27a957;max-width:720px;margin:0 auto;padding-bottom:76px;background:#f5f6f8;color:var(--text);min-height:100vh}.detail-nav{height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;background:#fff;border-bottom:1px solid #edf0f4;position:sticky;top:0;z-index:10;font-size:15px;font-weight:600}.back-link,.nav-actions button{border:0;background:transparent;color:#3b4658;font-size:26px;line-height:1}.nav-actions{display:flex;gap:16px}.nav-actions button{font-size:19px}.stock-overview{padding:16px 14px 12px;background:#fff}.stock-brief{display:flex;justify-content:space-between;align-items:flex-start}.stock-name{display:flex;align-items:baseline;gap:8px}.stock-name h1{font-size:19px}.stock-name span,.quote-meta small,.chart-caption,.block-title small{color:#9aa3b1;font-size:11px}.stock-price{display:block;font-size:34px;line-height:1.15;margin-top:9px}.stock-change{display:flex;gap:14px;margin-top:5px;font-size:13px}.text-up{color:var(--rise)!important}.text-down{color:var(--fall)!important}.favorite-button{display:flex;flex-direction:column;gap:3px;align-items:center;border:0;background:transparent;color:#8c96a5;font-size:11px}.favorite-button b{font-size:25px;color:#bcc3cc}.favorite-button.followed b{color:#f2a22c}.favorite-button.followed{color:#d58a16}.quote-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:17px;padding-top:12px;border-top:1px solid #f0f1f4}.quote-meta div{display:flex;flex-direction:column;gap:5px}.quote-meta b{font:12px 'JetBrains Mono',monospace;color:#313b4b}.detail-tabs{display:flex;overflow:auto;background:#fff;border-top:1px solid #f0f1f4;border-bottom:1px solid #e6e9ee;scrollbar-width:none}.detail-tabs::-webkit-scrollbar,.period-tabs::-webkit-scrollbar,.indicator-tabs::-webkit-scrollbar{display:none}.detail-tabs button{position:relative;flex:1;min-width:76px;padding:13px 5px 11px;border:0;background:transparent;color:#8993a3;font-size:13px;white-space:nowrap}.detail-tabs button.selected{color:#256fdc;font-weight:600}.detail-tabs button.selected:after{content:'';position:absolute;bottom:-1px;left:50%;width:25px;height:2px;background:#256fdc;transform:translateX(-50%)}.chart-card,.detail-panel{margin-top:8px;background:#fff}.period-tabs,.indicator-tabs{display:flex;overflow:auto;align-items:center;border-bottom:1px solid #f0f1f4}.period-tabs button,.indicator-tabs button{padding:11px 13px;border:0;background:transparent;color:#8c96a5;font-size:12px;white-space:nowrap}.period-tabs button.selected,.indicator-tabs button.selected{color:#256fdc;font-weight:600}.chart-settings{margin-left:auto!important;font-size:17px!important}.indicator-tabs{border-bottom:0}.adjustment-button{margin-left:auto}.adjustment-menu{position:absolute;right:14px;z-index:3;padding:4px;background:#fff;border:1px solid #e5e8ee;box-shadow:0 5px 16px #2630401a}.adjustment-menu button{display:block;width:76px;padding:8px;border:0;background:#fff;color:#667184;font-size:11px}.chart-caption{display:flex;justify-content:space-between;gap:8px;padding:4px 13px 0;font:10px 'JetBrains Mono',monospace;white-space:nowrap;overflow:hidden}.chart-caption span{overflow:hidden;text-overflow:ellipsis}.chart-caption small{color:#b38a34}.chart-wrap{height:285px;padding:5px 8px 0}.chart-wrap svg{width:100%;height:100%;touch-action:none;cursor:crosshair}.grid-lines line{stroke:#edf0f4;stroke-width:1}.price-labels text{fill:#a5adbb;font:10px 'JetBrains Mono',monospace}.candles line{stroke-width:1}.candles rect{stroke-width:1}.candles .rise line,.candles .rise rect{stroke:var(--rise);fill:#e653531f}.candles .fall line,.candles .fall rect{stroke:var(--fall);fill:#27a9571f}.intraday-line,.ma5,.ma10,.boll{fill:none}.intraday-line{stroke:#3077ec;stroke-width:2}.ma5{stroke:#e65353;stroke-width:1.5}.ma10{stroke:#e7a516;stroke-width:1.5}.boll{stroke:#8164c4;stroke-width:1.3}.boll-edge{stroke-dasharray:4 3;opacity:.65}.volume-bars rect{opacity:.5}.rise-volume{fill:var(--rise)}.fall-volume{fill:var(--fall)}.crosshair line{stroke:#3077ec;stroke-dasharray:4 3;opacity:.7}.chart-foot{display:flex;align-items:center;gap:13px;overflow:auto;padding:10px 13px 12px;border-top:1px solid #f0f1f4;color:#8c96a5;font:10px 'JetBrains Mono',monospace;white-space:nowrap}.chart-foot button{margin-left:auto;border:0;background:#f3f6fb;color:#3077ec}.chart-foot button+button{margin-left:-8px}.panel-block{padding:16px 14px;background:#fff}.block-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:11px}.block-title h2{font-size:15px}.order-row{display:grid;grid-template-columns:48px 1fr 74px 90px;align-items:center;padding:8px 0;color:#7d8796;font-size:12px;border-bottom:1px solid #f1f2f5}.order-row b,.order-row small{text-align:right}.order-row i{height:4px;margin-left:12px;border-radius:2px;opacity:.55}.sell-bar{background:var(--rise);width:70%}.buy-bar{background:var(--fall);width:55%}.flow-row{display:grid;grid-template-columns:1.3fr .8fr .6fr 1fr;gap:8px;align-items:center;padding:10px 0;font-size:12px;border-bottom:1px solid #f1f2f5}.flow-row small{text-align:right;color:#9aa3b1}.flow-row i{height:5px;background:#f1f3f6}.flow-row em{display:block;height:100%;width:62%}.flow-in{background:var(--rise)}.flow-out{background:var(--fall)}.news-row{display:grid;grid-template-columns:38px 36px 1fr 14px;gap:8px;align-items:center;padding:14px 0;border-bottom:1px solid #f1f2f5;color:inherit}.news-row time{color:#9aa3b1;font:10px 'JetBrains Mono',monospace}.news-row em{padding:3px 4px;background:#fff0f0;color:var(--rise);font-size:10px;font-style:normal}.news-row strong{font-size:12px;font-weight:400;line-height:1.4}.news-row span{color:#aab2be;font-size:18px}.analysis-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.analysis-grid>div{display:flex;flex-direction:column;gap:7px;padding:13px;background:#f7f8fa}.analysis-grid small,.analysis-grid em{color:#909aa9;font-size:10px;font-style:normal}.analysis-grid b{font:17px 'JetBrains Mono',monospace}.bottom-bar{position:fixed;right:0;bottom:0;left:0;z-index:20;display:flex;height:58px;padding-bottom:env(safe-area-inset-bottom);background:#fff;border-top:1px solid #e4e7ec;box-shadow:0 -2px 10px #2630400a}.bottom-bar button{flex:1;border:0;background:#fff;color:#758093;font-size:10px}.bottom-bar button b{display:block;color:#596678;font-size:20px;line-height:22px}.trade-button{display:flex;align-items:center;justify-content:center;width:31%;background:#3077ec;color:#fff;font-size:15px}.sheet-mask{position:fixed;inset:0;z-index:30;display:flex;align-items:flex-end;background:#2630404d}.sheet{width:min(520px,100%);padding:18px 18px calc(20px + env(safe-area-inset-bottom));background:#fff;border-radius:14px 14px 0 0}.sheet-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.sheet-title h2{font-size:17px}.sheet-title button{border:0;background:transparent;color:#8d97a6;font-size:24px}.sheet p{color:#7d8796;font-size:12px}.sheet label{display:block;margin-top:14px;color:#697587;font-size:12px}.sheet input,.sheet select{display:block;width:100%;box-sizing:border-box;margin-top:7px;padding:10px;border:1px solid #e0e4eb;border-radius:5px;background:#fafbfd;color:#303c4c}.sheet .check{display:flex;gap:7px;align-items:center}.sheet .check input{width:auto;margin:0}.primary-button{width:100%;margin-top:18px;padding:11px;border:0;border-radius:5px;background:#3077ec;color:#fff}.form-error{color:var(--rise)!important;margin-top:10px}.form-success{color:var(--fall)!important;margin-top:10px}.sheet h3{margin:18px 0 10px;color:#8993a3;font-size:12px;font-weight:400}.setting-chips{display:flex;gap:8px}.setting-chips button{padding:8px 16px;border:0;border-radius:4px;background:#f4f6f9;color:#768194}.setting-chips button.selected{background:#edf4ff;color:#3077ec}.setting-row{display:flex;justify-content:space-between;width:100%;padding:12px 0;border:0;border-bottom:1px solid #f0f1f4;background:#fff;color:#3d4858;text-align:left}.setting-row i{width:31px;height:18px;border-radius:10px;background:#d9dee7}.setting-row i.on{background:#3077ec}
@media (min-width:721px){.detail-page{box-shadow:0 0 24px #2630400d}.bottom-bar{left:50%;width:720px;transform:translateX(-50%)}}
</style>
