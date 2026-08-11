<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LoadingState from '@/components/LoadingState.vue'
import BottomActionBar from '@/components/BottomActionBar.vue'
import KlineToolbar from '@/components/KlineToolbar.vue'
import ErrorState from '@/components/ErrorState.vue'
import EmptyState from '@/components/EmptyState.vue'
import { getMarketStocksSnapshot, getStockDetail, getStockQuote } from '@/services/market'
import { getNewsPage } from '@/services/news'
import type { NewsArticle } from '@/services/news-types'
import type { StockDetailResponse } from '@/services/market-types'
import { getReportsPage } from '@/services/reports'
import type { ResearchReport } from '@/services/reports'
import { calculateBOLL, calculateKDJ, calculateMA, calculateMACD, calculateRSI, calculateSAR, createKlineSeries, getKlineDataSource, getKlineSeries, getMinuteSeries, readKlineIndicatorPreferences, saveKlineIndicatorPreferences, supportsKlineAdjustment, type KlineCandle } from '@/services/kline'
import { useWatchlistStore } from '@/stores/watchlist'
import { useChartPreferencesStore } from '@/stores/chart-preferences'
import { connectMarketSocket } from '@/services/market-socket'
import { createPriceAlert } from '@/services/alerts'
import { ApiError, getAccessToken } from '@/services/api-client'
import { placeTrade } from '@/services/trade'
import type { MarketSocketEvent, MarketSocketStatus } from '@/services/market-socket'

type RealtimeLevel = { price: number; volume: number }
type RealtimeTrade = { time: string; timestamp: number; price: number; volume: number; direction: 'buy' | 'sell' | 'neutral'; source: string }
type RealtimePayload = { kind: 'snapshot' | 'delta'; code: string; sequence: number; timestamp: number; source: string; bids?: RealtimeLevel[]; asks?: RealtimeLevel[]; items?: RealtimeTrade[] }

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
const detailData = ref<StockDetailResponse | null>(null)
const isDetailLoading = ref(false)
const detailError = ref('')
const stockStats = computed(() => {
  const quote = detailData.value?.quote
  return { open: quote?.open?.toFixed(2) ?? '—', high: quote?.high?.toFixed(2) ?? '—', low: quote?.low?.toFixed(2) ?? '—', turnover: quote ? formatAmount(quote.amount) : '—' }
})
const periods = ['分时', '5日', '日K', '周K', '月K']
const activePeriod = ref('日K')
const indicator = ref<'MA' | 'MACD' | 'BOLL' | 'KDJ' | 'RSI' | 'SAR'>('MA')
const adjustment = ref('前复权')
const showAdjustment = ref(false)
const showSignals = ref(true)
const maFast = ref(5)
const maSlow = ref(10)
const bollPeriod = ref(20)
const zoom = ref(1)
const pan = ref(0)
const selectedIndex = ref<number | null>(null)
const candles = ref<KlineCandle[]>([])
const isChartLoading = ref(false)
const chartError = ref('')
const dataSource = ref<'api' | 'sdk' | 'mock'>('mock')
const pointer = ref({ active: false, startX: 0, startPan: 0 })
const touchPoints = new Map<number, number>()
const pinch = ref({ active: false, startDistance: 0, startZoom: 1 })
let longPressTimer: number | undefined
const detailTabs = ['分时 / K线', '盘口', '资金流向', '基本面', '资讯']
const activeDetailTab = ref('分时 / K线')
const relatedNews = ref<NewsArticle[]>([])
const relatedReports = ref<ResearchReport[]>([])
const isNewsLoading = ref(false)
const newsError = ref('')
const isReportsLoading = ref(false)
const announcements = computed(() => relatedNews.value.filter((item) => item.tag === '公告'))
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
const alertSaving = ref(false)
const tradeSide = ref<'buy' | 'sell'>('buy')
const tradeQuantity = ref(100)
const tradeSubmitting = ref(false)
const tradeError = ref('')
const tradeSuccess = ref('')
const showTrade = ref(false)
let disconnectMarketSocket: () => void = () => undefined
const realtimeStatus = ref<MarketSocketStatus>('connecting')
const realtimeTimestamp = ref<number | null>(null)
const realtimeSequences = { orderbook: 0, trades: 0 }

const orderBook = computed(() => {
  const detail = detailData.value?.orderBook
  if (!detail) return []
  return [...detail.asks.map((level, index) => ({ label: `卖${5 - index}`, price: level.price.toFixed(2), amount: String(level.volume), side: 'sell' as const })), ...detail.bids.map((level, index) => ({ label: `买${5 - index}`, price: level.price.toFixed(2), amount: String(level.volume), side: 'buy' as const }))]
})
const capitalFlow = computed(() => detailData.value?.capitalFlow.items ?? [])
const financials = computed(() => detailData.value?.financials.items ?? [])
const financialStatements = computed(() => detailData.value?.financialStatements.items ?? [])
const institutions = computed(() => detailData.value?.institutions.items ?? [])
const blockTrades = computed(() => detailData.value?.blockTrades.items ?? [])
const dividends = computed(() => detailData.value?.dividends.items ?? [])
function formatMetric(value: number | null | undefined, suffix = '') { return value == null ? '—' : `${value.toFixed(2)}${suffix}` }
const capitalFlowSeries = computed(() => detailData.value?.capitalFlow.series ?? [])
const capitalFlowRanking = computed(() => detailData.value?.capitalFlow.ranking ?? [])
const capitalFlowLabels: Record<string, string> = { main: '主力', extraLarge: '超大单', large: '大单', medium: '中单', small: '小单' }
function capitalFlowLabel(category: string) { return capitalFlowLabels[category] ?? category }
function formatFlowAmount(value: number | null) { return value == null ? '—' : formatAmount(Math.abs(value)) }

async function loadQuote() {
  isQuoteLoading.value = true; quoteError.value = ''
  try { realStock.value = await getStockQuote(code.value) ?? null; if (!realStock.value) quoteError.value = '暂未找到该股票行情，请返回行情页重试。' } catch { quoteError.value = '股票行情加载失败，请检查网络后重试。' } finally { isQuoteLoading.value = false }
}
async function loadChartData() {
  isChartLoading.value = true; chartError.value = ''; selectedIndex.value = null
  try {
    candles.value = activePeriod.value === '分时' ? await getMinuteSeries(stock.value.code) : await getKlineSeries(stock.value.code, activePeriod.value === '周K' ? 'weekly' : activePeriod.value === '月K' ? 'monthly' : 'daily', adjustment.value === '前复权' ? 'qfq' : adjustment.value === '后复权' ? 'hfq' : '')
    dataSource.value = getKlineDataSource(candles.value)
    pan.value = Math.min(pan.value, Math.max(0, candles.value.length - 8))
  } catch { candles.value = []; chartError.value = 'K线数据加载失败，请稍后重试。' } finally { isChartLoading.value = false }
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
  const indicatorPreferences = readKlineIndicatorPreferences(stock.value.code)
  if (indicatorPreferences?.maFast && Number.isFinite(indicatorPreferences.maFast)) maFast.value = indicatorPreferences.maFast
  if (indicatorPreferences?.maSlow && Number.isFinite(indicatorPreferences.maSlow)) maSlow.value = indicatorPreferences.maSlow
  if (indicatorPreferences?.bollPeriod && Number.isFinite(indicatorPreferences.bollPeriod)) bollPeriod.value = indicatorPreferences.bollPeriod
  await loadChartData()
  await Promise.all([loadRelatedNews(), loadRelatedReports(), loadDetail()])
  disconnectMarketSocket = connectMarketSocket([stock.value.code], applyRealtimeEvent, { types: ['quote', 'orderbook', 'trades'], onStatus: (status) => { realtimeStatus.value = status } })
})
watch([activePeriod, adjustment], () => { if (activePeriod.value) void loadChartData() })
watch([maFast, maSlow, bollPeriod], () => saveKlineIndicatorPreferences(stock.value.code, { maFast: maFast.value, maSlow: maSlow.value, bollPeriod: bollPeriod.value }))
onUnmounted(() => { disconnectMarketSocket(); saveKlineIndicatorPreferences(stock.value.code, { maFast: maFast.value, maSlow: maSlow.value, bollPeriod: bollPeriod.value }); chartPreferences.save(stock.value.code, { period: activePeriod.value, indicator: indicator.value, adjustment: adjustment.value, settings: settings.value }) })

async function loadDetail() {
  isDetailLoading.value = true; detailError.value = ''
  try { detailData.value = await getStockDetail(stock.value.code); realtimeSequences.orderbook = 0; realtimeSequences.trades = 0 }
  catch { detailData.value = null; detailError.value = '盘口、资金流向和基本面暂时无法获取，请稍后重试。' }
  finally { isDetailLoading.value = false }
}
function sameCode(left: unknown, right: string) { return typeof left === 'string' && left.trim().toLowerCase().replace(/^(sh|sz|bj)/, '') === right.trim().toLowerCase().replace(/^(sh|sz|bj)/, '') }
function applyLevels(current: RealtimeLevel[], changes: RealtimeLevel[]) {
  const levels = new Map(current.map((level) => [level.price, level.volume]))
  for (const level of changes) { if (level.volume <= 0) levels.delete(level.price); else levels.set(level.price, level.volume) }
  return [...levels].map(([price, volume]) => ({ price, volume })).sort((left, right) => right.price - left.price).slice(0, 5)
}
function applyRealtimeEvent(event: MarketSocketEvent) {
  if (!event.data || typeof event.data !== 'object') return
  const payload = event.data as RealtimePayload & { code?: string }
  if (!sameCode(payload.code, stock.value.code) || !Number.isFinite(payload.timestamp)) return
  if (event.type === 'quote') {
    const quote = payload as RealtimePayload & { name?: string; price?: number; change?: number; changePercent?: number; volume?: number }
    if (quote.price == null || quote.change == null || quote.changePercent == null) return
    realStock.value = { ...stock.value, name: quote.name ?? stock.value.name, price: quote.price.toFixed(2), change: `${quote.change >= 0 ? '+' : ''}${quote.change.toFixed(2)}`, percent: `${quote.changePercent >= 0 ? '+' : ''}${quote.changePercent.toFixed(2)}%`, volume: String(quote.volume ?? 0), trend: quote.change >= 0 ? 'up' : 'down' }
    if (detailData.value?.quote) detailData.value.quote = { ...detailData.value.quote, name: quote.name ?? detailData.value.quote.name, price: quote.price, change: quote.change, changePercent: quote.changePercent, volume: quote.volume ?? detailData.value.quote.volume, timestamp: payload.timestamp }
    realtimeTimestamp.value = payload.timestamp
    return
  }
  const eventType = event.type === 'orderBook' ? 'orderbook' : event.type === 'trade' ? 'trades' : event.type
  if (!detailData.value || (eventType !== 'orderbook' && eventType !== 'trades') || !Number.isFinite(payload.sequence)) return
  if (eventType === 'orderbook') {
    if (payload.sequence <= realtimeSequences.orderbook) return
    const current = detailData.value.orderBook
    if (payload.kind === 'snapshot') { current.bids = payload.bids ?? []; current.asks = payload.asks ?? [] } else { current.bids = applyLevels(current.bids, payload.bids ?? []); current.asks = applyLevels(current.asks, payload.asks ?? []).sort((left, right) => left.price - right.price) }
    current.timestamp = payload.timestamp; current.source = payload.source; realtimeSequences.orderbook = payload.sequence
  } else {
    if (payload.sequence <= realtimeSequences.trades) return
    const current = detailData.value.trades
    if (payload.kind === 'snapshot') current.items = payload.items ?? []
    else { const seen = new Set(current.items.map((item) => `${item.time}|${item.price}|${item.volume}|${item.direction}`)); current.items = [...current.items, ...(payload.items ?? []).filter((item) => !seen.has(`${item.time}|${item.price}|${item.volume}|${item.direction}`))].slice(-500) }
    current.timestamp = payload.timestamp; current.source = payload.source; current.availability = { available: current.items.length > 0, source: payload.source, ...(current.items.length ? { asOf: payload.timestamp } : {}) }; realtimeSequences.trades = payload.sequence
  }
  realtimeTimestamp.value = payload.timestamp
}
async function loadRelatedNews() {
  isNewsLoading.value = true; newsError.value = ''
  try { relatedNews.value = (await getNewsPage({ code: stock.value.code, page: 1, pageSize: 20 })).items }
  catch { relatedNews.value = []; newsError.value = '资讯服务暂时不可用，请稍后重试。' }
  finally { isNewsLoading.value = false }
}
async function loadRelatedReports() {
  isReportsLoading.value = true
  try { relatedReports.value = (await getReportsPage({ code: stock.value.code, page: 1, pageSize: 20 })).items } catch { relatedReports.value = [] } finally { isReportsLoading.value = false }
}
function toggleFollow() { watchlistStore.toggle(stock.value.code); isFollowed.value = watchlistStore.has(stock.value.code) }
const followStatus = computed(() => watchlistStore.syncStatus.value === 'error' ? '自选同步失败，已保存在本地' : isFollowed.value ? '已加入自选' : '已取消自选')
function openTrade(side: 'buy' | 'sell') { tradeSide.value = side; tradeQuantity.value = 100; tradeError.value = ''; tradeSuccess.value = ''; showTrade.value = true }
async function submitTrade() {
  const price = Number(stock.value.price.replace(',', ''))
  if (!Number.isFinite(price) || price <= 0) { tradeError.value = '当前价格不可用，暂时无法提交委托'; return }
  if (!Number.isInteger(tradeQuantity.value) || tradeQuantity.value < 100 || tradeQuantity.value % 100 !== 0) { tradeError.value = '请输入 100 股起、且为 100 的整数倍'; return }
  tradeSubmitting.value = true; tradeError.value = ''; tradeSuccess.value = ''
  try {
    await placeTrade({ code: stock.value.code, side: tradeSide.value, quantity: tradeQuantity.value, price })
    tradeSuccess.value = `${tradeSide.value === 'buy' ? '买入' : '卖出'}委托已提交，可在交易页查看状态`
    window.setTimeout(() => { showTrade.value = false; tradeSuccess.value = '' }, 1200)
  } catch { tradeError.value = '交易服务暂时不可用，请登录后重试或前往交易页操作' }
  finally { tradeSubmitting.value = false }
}
function openAlert() { alertError.value = ''; alertSaved.value = false; alertPrice.value = Number(stock.value.price.replace(',', '')).toFixed(2); showAlert.value = true }
async function saveAlert() {
  if (!getAccessToken()) { alertError.value = '价格提醒需要登录，登录后即可设置'; return }
  const targetPrice = Number(alertPrice.value)
  if (!Number.isFinite(targetPrice) || targetPrice <= 0) { alertError.value = '请输入有效的目标价格'; return }
  alertSaving.value = true; alertError.value = ''
  try { await createPriceAlert({ code: stock.value.code, targetPrice, direction: alertDirection.value, repeat: alertRepeat.value }); alertSaved.value = true; window.setTimeout(() => { showAlert.value = false; alertSaved.value = false }, 900) }
  catch (error) { alertError.value = error instanceof ApiError && error.status === 404 ? '当前环境暂不支持价格提醒，请前往提醒页查看服务状态' : '价格提醒服务暂时不可用，请稍后重试' }
  finally { alertSaving.value = false }
}
const periodSize = computed(() => ({ '分时': 40, '5日': 25, '日K': 30, '周K': 24, '月K': 18 }[activePeriod.value] ?? 30))
const chartPeriod = computed(() => activePeriod.value === '分时' ? 'intraday' : activePeriod.value === '周K' ? 'weekly' : activePeriod.value === '月K' ? 'monthly' : 'daily')
const adjustmentSupported = computed(() => supportsKlineAdjustment(chartPeriod.value, adjustment.value === '前复权' ? 'qfq' : adjustment.value === '后复权' ? 'hfq' : '', dataSource.value))
const adjustmentNotice = computed(() => adjustmentSupported.value ? '' : activePeriod.value === '分时' ? '分时数据不支持复权' : '当前数据源不支持复权')
const visibleCandles = computed(() => { const count = Math.min(candles.value.length, Math.max(8, Math.round(periodSize.value / Math.max(.5, zoom.value)))); const end = Math.max(count, Math.min(candles.value.length, candles.value.length - Math.max(0, pan.value))); return candles.value.slice(Math.max(0, end - count), end) })
const bounds = computed(() => { const values = visibleCandles.value.flatMap((item) => [item.high, item.low]); if (!values.length) return { min: 0, max: 1 }; const min = Math.min(...values); const max = Math.max(...values); const padding = Math.max((max - min) * .08, .01); return { min: min - padding, max: max + padding } })
const maxVolume = computed(() => Math.max(1, ...visibleCandles.value.map((item) => item.volume)))
const maFastValues = computed(() => calculateMA(visibleCandles.value, Math.max(2, Number.isFinite(maFast.value) ? maFast.value : 5)))
const maSlowValues = computed(() => calculateMA(visibleCandles.value, Math.max(3, Number.isFinite(maSlow.value) ? maSlow.value : 10)))
const bollValues = computed(() => calculateBOLL(visibleCandles.value, Math.max(5, Number.isFinite(bollPeriod.value) ? bollPeriod.value : 20)))
const macdValues = computed(() => calculateMACD(visibleCandles.value))
const kdjValues = computed(() => calculateKDJ(visibleCandles.value))
const rsiValues = computed(() => calculateRSI(visibleCandles.value))
const sarValues = computed(() => calculateSAR(visibleCandles.value))
function lastValue<T>(values: T[]) { return values[values.length - 1] }
const latestKDJ = computed(() => lastValue(kdjValues.value) ?? { k: 0, d: 0, j: 0 })
const latestRSI = computed(() => lastValue(rsiValues.value) ?? 0)
const latestSAR = computed(() => lastValue(sarValues.value) ?? 0)
const chartWidth = 880
const candleWidth = computed(() => Math.max(7, (chartWidth / Math.max(1, visibleCandles.value.length)) * .52))
function xFor(index: number) { return 25 + (index + .5) * (chartWidth - 45) / Math.max(1, visibleCandles.value.length) }
function yFor(value: number) { return 20 + (bounds.value.max - value) / (bounds.value.max - bounds.value.min) * 270 }
function valuePath(values: number[], map: (value: number) => number) { return values.map((value, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${map(value)}`).join(' ') }
function closePath() { return visibleCandles.value.map((candle, index) => `${index ? 'L' : 'M'} ${xFor(index)} ${yFor(candle.close)}`).join(' ') }
function bollPath(direction: number) { return valuePath(bollValues.value.map((item) => direction > 0 ? item.upper : item.lower), yFor) }
const macdScale = computed(() => Math.max(.8, ...macdValues.value.map((value) => Math.abs(value))) * 1.2)
function oscillatorY(value: number, min: number, max: number) { return 300 - (value - min) / Math.max(1e-9, max - min) * 55 }
function macdY(value: number) { return oscillatorY(value, -macdScale.value, macdScale.value) }
function macdPath() { return valuePath(macdValues.value, macdY) }
function kdjPath(key: 'k' | 'd' | 'j') { return valuePath(kdjValues.value.map((value) => value[key]), (value) => oscillatorY(value, 0, 100)) }
function rsiPath() { return valuePath(rsiValues.value, (value) => oscillatorY(value, 0, 100)) }
function sarPath() { return valuePath(sarValues.value, yFor) }
function indexFromPointer(event: PointerEvent) { const rect = (event.currentTarget as SVGElement).getBoundingClientRect(); return Math.max(0, Math.min(visibleCandles.value.length - 1, Math.floor(((event.clientX - rect.left) / rect.width) * visibleCandles.value.length))) }
function pointerDistance() { const points = [...touchPoints.values()]; return points.length >= 2 ? Math.abs(points[0] - points[1]) : 0 }
function onChartPointerDown(event: PointerEvent) { if (settings.value.draw || settings.value.areaSelect) { const rect = (event.currentTarget as SVGElement).getBoundingClientRect(); const point = { x: (event.clientX - rect.left) / rect.width * 930, y: (event.clientY - rect.top) / rect.height * 400 }; if (settings.value.draw) drawPoints.value = drawPoints.value.length >= 2 ? [point] : [...drawPoints.value, point]; if (settings.value.areaSelect) areaPoints.value = areaPoints.value.length >= 2 ? [point] : [...areaPoints.value, point]; return }; touchPoints.set(event.pointerId, event.clientX); (event.currentTarget as Element).setPointerCapture?.(event.pointerId); if (touchPoints.size === 1) { pointer.value = { active: true, startX: event.clientX, startPan: pan.value }; longPressTimer = window.setTimeout(() => { selectedIndex.value = indexFromPointer(event) }, 450) }; if (touchPoints.size === 2) { pinch.value = { active: true, startDistance: pointerDistance(), startZoom: zoom.value }; pointer.value.active = false } }
function onChartPointerMove(event: PointerEvent) { if (touchPoints.has(event.pointerId)) touchPoints.set(event.pointerId, event.clientX); if (pinch.value.active) { const distance = pointerDistance(); if (distance > 0 && pinch.value.startDistance > 0) zoom.value = Math.max(.5, Math.min(2.5, pinch.value.startZoom * distance / pinch.value.startDistance)); return }; if (pointer.value.active) { const rect = (event.currentTarget as SVGElement).getBoundingClientRect(); const delta = Math.round((event.clientX - pointer.value.startX) / rect.width * candles.value.length); pan.value = Math.max(0, Math.min(Math.max(0, candles.value.length - 8), pointer.value.startPan + delta)) }; selectedIndex.value = indexFromPointer(event) }
function onChartPointerUp(event: PointerEvent) { touchPoints.delete(event.pointerId); if (longPressTimer) window.clearTimeout(longPressTimer); longPressTimer = undefined; if (touchPoints.size < 2) pinch.value.active = false; pointer.value.active = false }
function onChartWheel(event: WheelEvent) { zoom.value = Math.max(.5, Math.min(2.5, zoom.value + (event.deltaY < 0 ? .25 : -.25))) }
function onChartLeave() { selectedIndex.value = null; pointer.value.active = false; pinch.value.active = false; touchPoints.clear(); if (longPressTimer) window.clearTimeout(longPressTimer); longPressTimer = undefined }
async function refreshDetail() { await Promise.all([loadQuote(), loadDetail()]); await loadChartData() }
function resetChart() { zoom.value = 1; pan.value = 0; selectedIndex.value = null; drawPoints.value = []; areaPoints.value = []; void refreshDetail() }
function toggleSettingByName(key: string) { const setting = key as keyof typeof settings.value; settings.value[setting] = !settings.value[setting]; if (key === 'draw' && !settings.value.draw) drawPoints.value = []; if (key === 'areaSelect' && !settings.value.areaSelect) areaPoints.value = [] }
function settingEnabled(key: string) { return settings.value[key as keyof typeof settings.value] }
function formatAmount(value: number) { return value >= 100000000 ? `${(value / 100000000).toFixed(2)}亿` : `${(value / 10000).toFixed(2)}万` }
function downloadChart() { const svg = document.querySelector('.chart-wrap svg'); if (!svg) return; const source = new XMLSerializer().serializeToString(svg); const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `${stock.value.code}-${activePeriod.value}-kline.svg`; link.click(); URL.revokeObjectURL(url) }
</script>

<template>
  <section class="detail-page">
    <header class="detail-nav"><RouterLink to="/market" class="back-link">‹</RouterLink><span>股票详情</span><div class="nav-actions"><button aria-label="设置价格提醒" @click="openAlert">♧</button><button aria-label="刷新行情" @click="resetChart">↻</button></div></header>
    <LoadingState v-if="isQuoteLoading" label="正在加载股票行情" />
    <ErrorState v-else-if="quoteError" title="行情暂时不可用" :message="quoteError" :retry="loadQuote" />
    <template v-else>
      <section class="stock-overview">
        <div class="stock-brief"><div class="price-column"><div class="stock-name"><h1>{{ stock.name }}</h1><span>{{ stock.code }}</span></div><strong class="stock-price mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.price }}</strong><div class="stock-change mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'"><span>{{ stock.change }}</span><span>{{ stock.percent }}</span></div><small class="overview-realtime" :class="`status-${realtimeStatus}`"><i />{{ realtimeStatus === 'connected' ? '实时已连接' : realtimeStatus === 'connecting' || realtimeStatus === 'reconnecting' ? '实时连接中' : '实时不可用' }} · {{ realtimeTimestamp ? new Date(realtimeTimestamp).toLocaleTimeString() : '等待数据' }}</small></div><button class="favorite-button" :class="{ followed: isFollowed }" :aria-pressed="isFollowed" :title="followStatus" @click="toggleFollow"><b>{{ isFollowed ? '★' : '☆' }}</b><span>{{ isFollowed ? '已自选' : '自选' }}</span></button></div>
        <div class="quote-meta"><div><small>今开</small><b>{{ stockStats.open }}</b></div><div><small>最高</small><b class="text-up">{{ stockStats.high }}</b></div><div><small>最低</small><b>{{ stockStats.low }}</b></div><div><small>成交额</small><b>{{ stockStats.turnover }}</b></div></div>
      </section>
      <nav class="detail-tabs" aria-label="股票详情栏目"><button v-for="tab in detailTabs" :key="tab" :class="{ selected: activeDetailTab === tab }" @click="activeDetailTab = tab">{{ tab }}</button></nav>
      <section v-if="activeDetailTab === '分时 / K线'" class="chart-card">
        <KlineToolbar :periods="periods" :active-period="activePeriod" :indicators="['MA', 'MACD', 'BOLL', 'KDJ', 'RSI', 'SAR']" :active-indicator="indicator" :adjustment="adjustment" :show-adjustment="showAdjustment" @select-period="activePeriod = $event" @select-indicator="indicator = $event as typeof indicator" @toggle-adjustment="showAdjustment = !showAdjustment" @update:adjustment="adjustment = $event; showAdjustment = false" @open-settings="showSettings = true" />
        <div class="chart-caption"><span v-if="selectedIndex !== null && visibleCandles[selectedIndex]">{{ visibleCandles[selectedIndex].date }}　开 {{ visibleCandles[selectedIndex].open.toFixed(2) }}　高 {{ visibleCandles[selectedIndex].high.toFixed(2) }}　低 {{ visibleCandles[selectedIndex].low.toFixed(2) }}　收 {{ visibleCandles[selectedIndex].close.toFixed(2) }}</span><span v-else>{{ activePeriod }} · {{ visibleCandles.length }} 根</span><small>数据源：{{ dataSource === 'api' ? '实时' : dataSource === 'sdk' ? '行情' : '本地' }}<b v-if="adjustmentNotice"> · {{ adjustmentNotice }}</b></small></div>
        <LoadingState v-if="isChartLoading" label="正在加载图表" /><ErrorState v-else-if="chartError" title="图表暂无数据" :message="chartError" :retry="loadChartData" /><EmptyState v-else-if="!visibleCandles.length" title="暂无图表数据" message="当前周期暂时没有可展示的数据。" />
        <div v-else class="chart-wrap"><svg viewBox="0 0 930 400" preserveAspectRatio="none" @pointerdown="onChartPointerDown" @pointermove="onChartPointerMove" @pointerup="onChartPointerUp" @pointercancel="onChartPointerUp" @wheel.prevent="onChartWheel" @dblclick="resetChart" @mouseleave="onChartLeave"><g class="grid-lines"><line v-for="line in 5" :key="`h-${line}`" x1="25" :y1="20 + (line - 1) * 67.5" x2="905" :y2="20 + (line - 1) * 67.5" /><line v-for="line in 6" :key="`v-${line}`" :x1="25 + (line - 1) * 176" y1="20" :x2="25 + (line - 1) * 176" y2="380" /></g><g class="price-labels"><text v-for="line in 5" :key="line" x="908" :y="24 + (line - 1) * 67.5">{{ (bounds.max - (line - 1) * (bounds.max - bounds.min) / 4).toFixed(2) }}</text></g><g v-if="activePeriod !== '分时'" class="candles"><g v-for="(candle, index) in visibleCandles" :key="candle.date" :class="candle.close >= candle.open ? 'rise' : 'fall'"><line :x1="xFor(index)" :x2="xFor(index)" :y1="yFor(candle.high)" :y2="yFor(candle.low)" /><rect :x="xFor(index) - candleWidth / 2" :y="Math.min(yFor(candle.open), yFor(candle.close))" :width="candleWidth" :height="Math.max(2, Math.abs(yFor(candle.open) - yFor(candle.close)))" /></g></g><path v-else class="intraday-line" :d="closePath()" /><path v-if="indicator === 'MA' && activePeriod !== '分时'" class="ma5" :d="valuePath(maFastValues, yFor)" /><path v-if="indicator === 'MA' && activePeriod !== '分时'" class="ma10" :d="valuePath(maSlowValues, yFor)" /><path v-if="indicator === 'BOLL'" class="boll" :d="valuePath(bollValues.map((item) => item.middle), yFor)" /><path v-if="indicator === 'BOLL'" class="boll boll-edge" :d="bollPath(1)" /><path v-if="indicator === 'BOLL'" class="boll boll-edge" :d="bollPath(-1)" /><path v-if="indicator === 'MACD'" class="macd-line" :d="macdPath()" /><path v-if="indicator === 'KDJ'" class="kdj-k" :d="kdjPath('k')" /><path v-if="indicator === 'KDJ'" class="kdj-d" :d="kdjPath('d')" /><path v-if="indicator === 'KDJ'" class="kdj-j" :d="kdjPath('j')" /><path v-if="indicator === 'RSI'" class="rsi-line" :d="rsiPath()" /><path v-if="indicator === 'SAR' && activePeriod !== '分时'" class="sar-line" :d="sarPath()" /><g class="volume-bars"><rect v-for="(candle, index) in visibleCandles" :key="`v-${candle.date}`" :x="xFor(index) - candleWidth / 2" :y="335 - candle.volume / maxVolume * 35" :width="candleWidth" :height="candle.volume / maxVolume * 35" :class="candle.close >= candle.open ? 'rise-volume' : 'fall-volume'" /></g><g v-if="selectedIndex !== null && visibleCandles[selectedIndex]" class="crosshair"><line :x1="xFor(selectedIndex)" y1="20" :x2="xFor(selectedIndex)" y2="380" /><line x1="25" :y1="yFor(visibleCandles[selectedIndex].close)" x2="905" :y2="yFor(visibleCandles[selectedIndex].close)" /></g></svg></div>
        <div class="chart-foot"><span v-if="indicator === 'MA'">MA{{ maFast }} {{ lastValue(maFastValues)?.toFixed(2) ?? '—' }}</span><span v-if="indicator === 'MA'">MA{{ maSlow }} {{ lastValue(maSlowValues)?.toFixed(2) ?? '—' }}</span><span v-if="indicator === 'BOLL'">BOLL {{ lastValue(bollValues)?.middle.toFixed(2) ?? '—' }}</span><span v-if="indicator === 'MACD'">MACD {{ lastValue(macdValues)?.toFixed(3) ?? '—' }}</span><span v-if="indicator === 'KDJ'">K {{ latestKDJ.k.toFixed(1) }} / D {{ latestKDJ.d.toFixed(1) }} / J {{ latestKDJ.j.toFixed(1) }}</span><span v-if="indicator === 'RSI'">RSI {{ latestRSI.toFixed(1) }}</span><span v-if="indicator === 'SAR'">SAR {{ latestSAR.toFixed(2) }}</span><button @click="zoom = Math.min(2.5, zoom + .25)">＋</button><button @click="zoom = Math.max(.5, zoom - .25)">－</button><button class="reset-chart" @click="resetChart">重置</button><button @click="downloadChart">导出</button></div>
      </section>
      <section v-else class="detail-panel"><LoadingState v-if="isDetailLoading" label="正在加载详情数据" /><ErrorState v-else-if="detailError" title="详情数据加载失败" :message="detailError" :retry="loadDetail" /><template v-else><section v-if="activeDetailTab === '盘口'" class="panel-block"><div class="block-title"><h2>五档盘口</h2><small class="realtime-meta"><i :class="`status-${realtimeStatus}`" />{{ realtimeStatus === 'connected' ? '实时连接' : realtimeStatus === 'reconnecting' || realtimeStatus === 'connecting' ? '连接中' : '连接断开' }} · {{ realtimeTimestamp ? new Date(realtimeTimestamp).toLocaleTimeString() : '等待数据' }}</small></div><EmptyState v-if="!orderBook.length" title="暂无五档盘口" message="当前行情源未提供实时买卖委托队列。" /><div v-else v-for="row in orderBook" :key="row.label" class="order-row"><span>{{ row.label }}</span><b class="mono" :class="row.side === 'sell' ? 'text-up' : 'text-down'">{{ row.price }}</b><small>{{ row.amount }}</small><i :class="row.side === 'sell' ? 'sell-bar' : 'buy-bar'" /></div><div class="sub-block"><div class="block-title"><h3>成交明细</h3><small>逐笔成交</small></div><EmptyState v-if="!detailData?.trades.items.length" title="暂无成交明细" :message="detailData?.trades.availability.reason || '当前行情源未提供逐笔成交数据。'" /><div v-else class="trade-list"><div v-for="item in detailData.trades.items" :key="`${item.timestamp}-${item.price}-${item.volume}`" class="order-row"><span>{{ item.time }}</span><b class="mono" :class="item.direction === 'buy' ? 'text-up' : item.direction === 'sell' ? 'text-down' : ''">{{ item.price.toFixed(2) }}</b><small>{{ item.volume }}</small><span>{{ item.direction === 'buy' ? '买' : item.direction === 'sell' ? '卖' : '中性' }}</span></div></div></div></section><section v-else-if="activeDetailTab === '资金流向'" class="panel-block"><div class="block-title"><h2>资金流向</h2><small>{{ detailData?.capitalFlow.availability.available ? '真实数据' : '数据源状态' }}</small></div><EmptyState v-if="!capitalFlow.length && !capitalFlowSeries.length && !capitalFlowRanking.length" title="暂无资金流向" :message="detailData?.capitalFlow.availability.reason || '当前数据源未提供该标的的资金流向明细。'" /><template v-else><div v-if="capitalFlow.length" class="flow-table"><div class="flow-row flow-head"><span>类别</span><span>净流入</span><span>流入</span><span>流出</span></div><div v-for="item in capitalFlow" :key="item.category" class="flow-row"><span>{{ capitalFlowLabel(item.category) }}</span><b :class="item.netAmount >= 0 ? 'text-up' : 'text-down'">{{ item.netAmount >= 0 ? '+' : '-' }}{{ formatFlowAmount(item.netAmount) }}</b><small>{{ formatFlowAmount(item.inflow) }}</small><small>{{ formatFlowAmount(item.outflow) }}</small></div></div><div v-if="capitalFlowSeries.length" class="sub-block"><div class="block-title"><h3>资金时间序列</h3><small>{{ capitalFlowSeries.length }} 个时间点</small></div><div v-for="point in capitalFlowSeries" :key="point.timestamp" class="flow-row"><span>{{ point.date }}</span><b :class="point.netAmount >= 0 ? 'text-up' : 'text-down'">{{ point.netAmount >= 0 ? '+' : '-' }}{{ formatFlowAmount(point.netAmount) }}</b><small>{{ formatFlowAmount(point.inflow) }}</small><small>{{ formatFlowAmount(point.outflow) }}</small></div></div><div v-if="capitalFlowRanking.length" class="sub-block"><div class="block-title"><h3>资金流向排行</h3><small>上游返回</small></div><div v-for="row in capitalFlowRanking" :key="`${row.code}-${row.category}`" class="flow-row"><span>{{ row.name }} {{ capitalFlowLabel(row.category) }}</span><b :class="row.netAmount >= 0 ? 'text-up' : 'text-down'">{{ row.netAmount >= 0 ? '+' : '-' }}{{ formatFlowAmount(row.netAmount) }}</b></div></div></template></section><section v-else-if="activeDetailTab === '资讯'" class="panel-block"><div class="block-title"><h2>相关资讯</h2><small>{{ relatedNews.length ? '关联内容' : '实时更新' }}</small></div><LoadingState v-if="isNewsLoading" label="正在加载相关资讯" /><ErrorState v-else-if="newsError" title="资讯加载失败" :message="newsError" :retry="loadRelatedNews" /><EmptyState v-else-if="!relatedNews.length" title="暂无相关资讯" message="暂时没有匹配到该股票的公开资讯。" /><RouterLink v-else v-for="item in relatedNews" :key="item.id" :to="`/news/${item.id}`" class="news-row"><time>{{ item.time || '—' }}</time><em>{{ item.tag }}</em><strong>{{ item.title }}</strong><span>›</span></RouterLink></section><section v-else-if="activeDetailTab === '公告'" class="panel-block"><div class="block-title"><h2>公司公告</h2><small>公开披露</small></div><EmptyState v-if="!announcements.length" title="暂无公司公告" message="当前新闻接口未返回该股票的公告数据。" /><RouterLink v-else v-for="item in announcements" :key="item.id" :to="`/news/${item.id}`" class="news-row"><time>{{ item.time || '—' }}</time><em>{{ item.tag }}</em><strong>{{ item.title }}</strong><span>›</span></RouterLink></section><section v-else-if="activeDetailTab === '研报'" class="panel-block"><div class="block-title"><h2>个股研报</h2><small>{{ relatedReports.length ? '机构观点' : '数据源返回为空' }}</small></div><LoadingState v-if="isReportsLoading" label="正在加载相关研报" /><EmptyState v-else-if="!relatedReports.length" title="暂无相关研报" message="当前研报接口未返回该股票的研报。" /><RouterLink v-else v-for="item in relatedReports" :key="item.id" :to="`/reports/${item.id}`" class="report-row"><div><strong>{{ item.title }}</strong><small>{{ item.institution }} · {{ item.date }} · {{ item.rating }}</small></div><span>›</span></RouterLink></section><section v-else-if="activeDetailTab === '基本面'" class="panel-block"><div class="block-title"><h2>基本面</h2><small>估值 · 财务 · 分红</small></div><div class="sub-block" style="margin-top:0;padding-top:0;border-top:0"><div class="block-title"><h3>估值概览</h3><small>{{ detailData?.financials.availability.source || '上游数据' }}</small></div><EmptyState v-if="!financials.length" title="暂无估值数据" :message="detailData?.financials.availability.reason || '上游接口未返回估值快照。'" /><div v-else class="analysis-grid"><div><small>市盈率 TTM</small><b class="mono">{{ formatMetric(financials[0].peTtm) }}</b></div><div><small>市盈率（动态）</small><b class="mono">{{ formatMetric(financials[0].peDynamic) }}</b></div><div><small>市净率</small><b class="mono">{{ formatMetric(financials[0].pb) }}</b></div><div><small>总市值（亿）</small><b class="mono">{{ formatMetric(financials[0].totalMarketCap) }}</b></div></div></div><div class="sub-block"><div class="block-title"><h3>最新财务</h3><small>{{ detailData?.financialStatements.availability.source || '上游数据' }}</small></div><EmptyState v-if="!financialStatements.length" title="暂无财务报表" :message="detailData?.financialStatements.availability.reason || '上游接口未返回财务报表。'" /><div v-else class="analysis-grid"><div><small>{{ financialStatements[0].reportDate }} 营业收入</small><b>{{ formatMetric(financialStatements[0].revenue) }}</b></div><div><small>归母净利润</small><b>{{ formatMetric(financialStatements[0].netProfit) }}</b></div><div><small>净利润同比</small><b>{{ formatMetric(financialStatements[0].netProfitYoy, '%') }}</b></div><div><small>经营现金流</small><b>{{ formatMetric(financialStatements[0].operatingCashFlow) }}</b></div></div></div><div class="sub-block"><div class="block-title"><h3>分红概览</h3><small>{{ detailData?.dividends.availability.source || '上游数据' }}</small></div><EmptyState v-if="!dividends.length" title="暂无分红记录" :message="detailData?.dividends.availability.reason || '上游接口未返回分红派息记录。'" /><div v-else class="dividend-list"><div v-for="item in dividends.slice(0, 3)" :key="`${item.code}-${item.reportDate}-${item.exDividendDate}`" class="dividend-row"><strong>{{ item.reportDate || item.disclosureDate || '—' }}</strong><span>{{ item.dividendDesc || (item.dividendPretax == null ? '—' : `税前派息 ${item.dividendPretax}`) }}</span><small>股息率 {{ formatMetric(item.dividendYield, '%') }}</small></div></div></div></section><section v-else-if="activeDetailTab === '财务'" class="panel-block"><div class="block-title"><h2>财务指标</h2><small>{{ detailData?.financials.availability.source || '上游数据' }}</small></div><EmptyState v-if="!financials.length" title="暂无财务指标" :message="detailData?.financials.availability.reason || '上游接口未返回财务指标。'" /><div v-else class="analysis-grid"><div><small>市盈率 TTM</small><b class="mono">{{ formatMetric(financials[0].peTtm) }}</b></div><div><small>市盈率（静态）</small><b class="mono">{{ formatMetric(financials[0].peStatic) }}</b></div><div><small>市盈率（动态）</small><b class="mono">{{ formatMetric(financials[0].peDynamic) }}</b></div><div><small>市净率</small><b class="mono">{{ formatMetric(financials[0].pb) }}</b></div><div><small>流通市值（亿）</small><b class="mono">{{ formatMetric(financials[0].circulatingMarketCap) }}</b></div><div><small>总市值（亿）</small><b class="mono">{{ formatMetric(financials[0].totalMarketCap) }}</b></div></div></section><section v-else-if="activeDetailTab === '股东/分红'" class="panel-block"><div class="block-title"><h2>股东与分红</h2><small>公开权益信息</small></div><div class="sub-block" style="margin-top:0;padding-top:0;border-top:0"><div class="block-title"><h3>股东名册</h3><small>数据源状态</small></div><EmptyState title="暂无股东名册" :message="detailData?.shareholders.availability.reason || '当前上游 provider 未提供上市公司股东名册。'" /></div><div class="sub-block"><div class="block-title"><h3>分红派息</h3><small>{{ detailData?.dividends.availability.source || '上游数据' }}</small></div><EmptyState v-if="!dividends.length" title="暂无分红记录" :message="detailData?.dividends.availability.reason || '上游接口未返回分红记录。'" /><div v-else class="dividend-list"><div v-for="item in dividends" :key="`${item.code}-${item.reportDate}-${item.exDividendDate}`" class="dividend-row"><strong>{{ item.reportDate || item.disclosureDate || '—' }}</strong><span>{{ item.dividendDesc || (item.dividendPretax == null ? '—' : `税前派息 ${item.dividendPretax}`) }}</span><small>除息 {{ item.exDividendDate || '—' }} · 发放 {{ item.payDate || '—' }}</small></div></div></div></section><section v-else-if="activeDetailTab === '财报'" class="panel-block"><div class="block-title"><h2>财务报表</h2><small>{{ detailData?.financialStatements.availability.source || '上游数据' }}</small></div><EmptyState v-if="!financialStatements.length" title="财务报表不可用" :message="detailData?.financialStatements.availability.reason || '当前上游未提供财务报表。'" /><div v-else v-for="item in financialStatements" :key="`${item.code}-${item.reportDate}`" class="analysis-grid"><div><small>{{ item.reportDate }} {{ item.reportType || '' }} 营业收入</small><b>{{ formatMetric(item.revenue) }}</b></div><div><small>归母净利润</small><b>{{ formatMetric(item.netProfit) }}</b></div><div><small>净利润同比</small><b>{{ formatMetric(item.netProfitYoy, '%') }}</b></div><div><small>经营现金流</small><b>{{ formatMetric(item.operatingCashFlow) }}</b></div></div></section><section v-else-if="activeDetailTab === '机构/大宗'" class="panel-block"><div class="block-title"><h2>机构与大宗交易</h2><small>{{ detailData?.institutions.availability.available || detailData?.blockTrades.availability.available ? 'stock-sdk / Eastmoney' : '数据源状态' }}</small></div><div class="sub-block" style="margin-top:0;padding-top:0;border-top:0"><div class="block-title"><h3>龙虎榜机构买卖</h3></div><EmptyState v-if="!institutions.length" title="暂无机构数据" :message="detailData?.institutions.availability.reason || '上游未返回机构买卖数据。'" /><div v-else v-for="item in institutions" :key="`${item.code}-${item.date}`" class="dividend-row"><strong>{{ item.date }}</strong><span>机构净额 {{ item.orgNetAmount == null ? '—' : formatAmount(Math.abs(item.orgNetAmount)) }}</span><small>买 {{ item.buyOrgCount ?? '—' }} 家 · 卖 {{ item.sellOrgCount ?? '—' }} 家</small></div></div><div class="sub-block"><div class="block-title"><h3>大宗交易明细</h3></div><EmptyState v-if="!blockTrades.length" title="暂无大宗交易" :message="detailData?.blockTrades.availability.reason || '上游未返回大宗交易数据。'" /><div v-else v-for="item in blockTrades" :key="`${item.code}-${item.date}-${item.dealPrice}`" class="dividend-row"><strong>{{ item.date }}</strong><span>成交价 {{ formatMetric(item.dealPrice) }} · {{ formatAmount(item.dealAmount ?? 0) }}</span><small>溢价率 {{ formatMetric(item.premiumRate, '%') }} · 买方 {{ item.buyBranch || '—' }}</small></div></div></section><section v-else-if="activeDetailTab === '解禁'" class="panel-block"><div class="block-title"><h2>限售解禁</h2><small>{{ detailData?.unlocks.availability.source || '上游数据' }}</small></div><EmptyState title="解禁数据不可用" :message="detailData?.unlocks.availability.reason || '当前上游未提供限售股解禁日历。'" /></section></template></section>
    </template>
    <BottomActionBar elevated fixed primary-label="买入" :primary-meta="stock.price" secondary-label="卖出" :secondary-meta="stock.price" :tertiary-label="isFollowed ? '★ 已自选' : '☆ 自选'" @primary="openTrade('buy')" @secondary="openTrade('sell')" @tertiary="toggleFollow" />
    <section v-if="showTrade" class="sheet-mask" @click.self="showTrade = false"><div class="sheet trade-sheet"><div class="sheet-title"><h2>{{ tradeSide === 'buy' ? '买入' : '卖出' }} {{ stock.name }}</h2><button @click="showTrade = false">×</button></div><p>{{ stock.code }} · 委托价 {{ stock.price }} 元</p><label>委托数量（股）<input v-model.number="tradeQuantity" type="number" min="100" step="100" inputmode="numeric" /></label><p class="trade-tip">交易服务会校验账户资金、持仓和交易权限。</p><p v-if="tradeError" class="form-error">{{ tradeError }}</p><p v-if="tradeSuccess" class="form-success">{{ tradeSuccess }}</p><button class="primary-button" :class="tradeSide" :disabled="tradeSubmitting || !!tradeSuccess" @click="submitTrade">{{ tradeSubmitting ? '提交中…' : tradeSuccess ? '已提交' : `确认${tradeSide === 'buy' ? '买入' : '卖出'}` }}</button></div></section>
    <section v-if="showAlert" class="sheet-mask" @click.self="showAlert = false"><div class="sheet"><div class="sheet-title"><h2>设置价格提醒</h2><button @click="showAlert = false">×</button></div><p>{{ stock.name }}（{{ stock.code }}）当前价 {{ stock.price }}</p><label>目标价格<input v-model="alertPrice" inputmode="decimal" /></label><label>触发条件<select v-model="alertDirection"><option value="above">价格高于目标价</option><option value="below">价格低于目标价</option></select></label><label class="check"><input v-model="alertRepeat" type="checkbox" /> 每次达到条件都提醒</label><p v-if="alertError" class="form-error">{{ alertError }}</p><p v-if="alertSaved" class="form-success">提醒已保存</p><button class="primary-button" :disabled="alertSaving || alertSaved" @click="saveAlert">{{ alertSaving ? '保存中…' : alertSaved ? '已保存' : '保存提醒' }}</button></div></section>
    <section v-if="showSettings" class="sheet-mask" @click.self="showSettings = false"><div class="sheet"><div class="sheet-title"><h2>K线设置</h2><button @click="showSettings = false">×</button></div><h3>复权方式</h3><div class="setting-chips"><button v-for="item in ['不复权', '前复权', '后复权']" :key="item" :class="{ selected: adjustment === item }" @click="adjustment = item">{{ item }}</button></div><h3>指标参数</h3><label class="parameter-row">MA 快线<input v-model.number="maFast" type="number" min="2" max="60" /></label><label class="parameter-row">MA 慢线<input v-model.number="maSlow" type="number" min="3" max="120" /></label><label class="parameter-row">BOLL 周期<input v-model.number="bollPeriod" type="number" min="5" max="120" /></label><h3>图表工具</h3><button v-for="item in [{ key: 'trendLine', label: '趋势线' }, { key: 'supportPressure', label: '支撑压力位' }, { key: 'draw', label: '画线工具' }, { key: 'areaSelect', label: '区间统计' }, { key: 'magicNine', label: '神奇九转' }, { key: 'tradeLine', label: '操盘线' }]" :key="item.key" class="setting-row" @click="toggleSettingByName(item.key)"><span>{{ item.label }}</span><i :class="{ on: settingEnabled(item.key) }" /></button><button class="primary-button" @click="showSettings = false">完成</button></div></section>
  </section>
</template>

<style scoped>
.detail-page{--rise:#e65353;--fall:#27a957;max-width:720px;margin:0 auto;padding-bottom:calc(82px + env(safe-area-inset-bottom));background:#f5f6f8;color:var(--text);min-height:100vh;overflow-x:hidden}.detail-nav{height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;background:#fff;border-bottom:1px solid #edf0f4;position:sticky;top:0;z-index:10;font-size:15px;font-weight:600}.back-link,.nav-actions button{border:0;background:transparent;color:#3b4658;font-size:26px;line-height:1}.nav-actions{display:flex;gap:16px}.nav-actions button{font-size:19px}.stock-overview{padding:16px 14px 12px;background:#fff}.stock-brief{display:flex;justify-content:space-between;align-items:flex-start}.stock-name{display:flex;align-items:baseline;gap:8px}.stock-name h1{font-size:19px}.stock-name span,.quote-meta small,.chart-caption,.block-title small{color:#9aa3b1;font-size:11px}.stock-price{display:block;font-size:34px;line-height:1.15;margin-top:9px}.stock-change{display:flex;gap:14px;margin-top:5px;font-size:13px}.overview-realtime{display:flex;align-items:center;gap:4px;margin-top:9px;color:#9aa3b1;font-size:10px}.overview-realtime i{width:6px;height:6px;border-radius:50%;background:#aab2be}.overview-realtime.status-connected i{background:var(--fall)}.overview-realtime.status-connecting i,.overview-realtime.status-reconnecting i{background:#e7a516}.overview-realtime.status-error i,.overview-realtime.status-closed i{background:var(--rise)}.text-up{color:var(--rise)!important}.text-down{color:var(--fall)!important}.favorite-button{display:flex;flex-direction:column;gap:3px;align-items:center;border:0;background:transparent;color:#8c96a5;font-size:11px}.favorite-button b{font-size:25px;color:#bcc3cc}.favorite-button.followed b{color:#f2a22c}.favorite-button.followed{color:#d58a16}.quote-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:17px;padding-top:12px;border-top:1px solid #f0f1f4}.quote-meta div{display:flex;flex-direction:column;gap:5px}.quote-meta b{font:12px 'JetBrains Mono',monospace;color:#313b4b}.detail-tabs{display:flex;overflow:auto;background:#fff;border-top:1px solid #f0f1f4;border-bottom:1px solid #e6e9ee;scrollbar-width:none}.detail-tabs::-webkit-scrollbar,.period-tabs::-webkit-scrollbar,.indicator-tabs::-webkit-scrollbar{display:none}.detail-tabs button{position:relative;flex:1;min-width:76px;padding:13px 5px 11px;border:0;background:transparent;color:#8993a3;font-size:13px;white-space:nowrap}.detail-tabs button.selected{color:#256fdc;font-weight:600}.detail-tabs button.selected:after{content:'';position:absolute;bottom:-1px;left:50%;width:25px;height:2px;background:#256fdc;transform:translateX(-50%)}.chart-card,.detail-panel{margin-top:8px;background:#fff}.period-tabs,.indicator-tabs{display:flex;overflow:auto;align-items:center;border-bottom:1px solid #f0f1f4}.period-tabs button,.indicator-tabs button{padding:11px 13px;border:0;background:transparent;color:#8c96a5;font-size:12px;white-space:nowrap}.period-tabs button.selected,.indicator-tabs button.selected{color:#256fdc;font-weight:600}.chart-settings{margin-left:auto!important;font-size:17px!important}.indicator-tabs{border-bottom:0}.adjustment-button{margin-left:auto}.adjustment-menu{position:absolute;right:14px;z-index:3;padding:4px;background:#fff;border:1px solid #e5e8ee;box-shadow:0 5px 16px #2630401a}.adjustment-menu button{display:block;width:76px;padding:8px;border:0;background:#fff;color:#667184;font-size:11px}.chart-caption{display:flex;justify-content:space-between;gap:8px;padding:4px 13px 0;font:10px 'JetBrains Mono',monospace;white-space:nowrap;overflow:hidden}.chart-caption span{overflow:hidden;text-overflow:ellipsis}.chart-caption small{color:#b38a34}.chart-wrap{height:285px;padding:5px 8px 0}.chart-wrap svg{width:100%;height:100%;touch-action:none;cursor:crosshair}.grid-lines line{stroke:#edf0f4;stroke-width:1}.price-labels text{fill:#a5adbb;font:10px 'JetBrains Mono',monospace}.candles line{stroke-width:1}.candles rect{stroke-width:1}.candles .rise line,.candles .rise rect{stroke:var(--rise);fill:#e653531f}.candles .fall line,.candles .fall rect{stroke:var(--fall);fill:#27a9571f}.intraday-line,.ma5,.ma10,.boll,.macd-line,.kdj-k,.kdj-d,.kdj-j,.rsi-line,.sar-line{fill:none}.intraday-line{stroke:#3077ec;stroke-width:2}.ma5{stroke:#e65353;stroke-width:1.5}.ma10{stroke:#e7a516;stroke-width:1.5}.boll{stroke:#8164c4;stroke-width:1.3}.boll-edge{stroke-dasharray:4 3;opacity:.65}.macd-line{stroke:#3077ec;stroke-width:1.6}.kdj-k{stroke:#e65353;stroke-width:1.4}.kdj-d{stroke:#e7a516;stroke-width:1.4}.kdj-j{stroke:#8164c4;stroke-width:1.2}.rsi-line{stroke:#27a957;stroke-width:1.6}.sar-line{stroke:#a65bd8;stroke-width:1.4;stroke-dasharray:2 3}.volume-bars rect{opacity:.5}.rise-volume{fill:var(--rise)}.fall-volume{fill:var(--fall)}.crosshair line{stroke:#3077ec;stroke-dasharray:4 3;opacity:.7}.chart-foot{display:flex;align-items:center;gap:13px;overflow:auto;padding:10px 13px 12px;border-top:1px solid #f0f1f4;color:#8c96a5;font:10px 'JetBrains Mono',monospace;white-space:nowrap}.chart-foot button{margin-left:auto;border:0;background:#f3f6fb;color:#3077ec}.chart-foot button+button{margin-left:-8px}.panel-block{padding:16px 14px;background:#fff}.block-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:11px}.block-title h2{font-size:15px}.block-title h3{font-size:13px;font-weight:600}.realtime-meta{display:flex;align-items:center;gap:4px;white-space:nowrap}.realtime-meta i{width:6px;height:6px;border-radius:50%;background:#aab2be}.realtime-meta .status-connected{background:#27a957}.realtime-meta .status-connecting,.realtime-meta .status-reconnecting{background:#e7a516}.realtime-meta .status-error,.realtime-meta .status-closed{background:#e65353}.sub-block{margin-top:20px;padding-top:16px;border-top:1px solid #f0f1f4}.sub-block .state-panel{min-height:140px}.report-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid #f1f2f5;color:inherit}.report-row div{display:grid;gap:6px;min-width:0}.report-row strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:500}.report-row small{color:#9aa3b1;font-size:10px}.report-row>span{color:#aab2be;font-size:18px}.order-row{display:grid;grid-template-columns:48px 1fr 74px 90px;align-items:center;padding:8px 0;color:#7d8796;font-size:12px;border-bottom:1px solid #f1f2f5}.order-row b,.order-row small{text-align:right}.order-row i{height:4px;margin-left:12px;border-radius:2px;opacity:.55}.sell-bar{background:var(--rise);width:70%}.buy-bar{background:var(--fall);width:55%}.flow-row{display:grid;grid-template-columns:1.3fr .8fr .6fr 1fr;gap:8px;align-items:center;padding:10px 0;font-size:12px;border-bottom:1px solid #f1f2f5}.flow-row small{text-align:right;color:#9aa3b1}.flow-row i{height:5px;background:#f1f3f6}.flow-row em{display:block;height:100%;width:62%}.flow-in{background:var(--rise)}.flow-out{background:var(--fall)}.news-row{display:grid;grid-template-columns:38px 36px 1fr 14px;gap:8px;align-items:center;padding:14px 0;border-bottom:1px solid #f1f2f5;color:inherit}.news-row time{color:#9aa3b1;font:10px 'JetBrains Mono',monospace}.news-row em{padding:3px 4px;background:#fff0f0;color:var(--rise);font-size:10px;font-style:normal}.news-row strong{font-size:12px;font-weight:400;line-height:1.4}.news-row span{color:#aab2be;font-size:18px}.analysis-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.analysis-grid>div{display:flex;flex-direction:column;gap:7px;padding:13px;background:#f7f8fa}.analysis-grid small,.analysis-grid em{color:#909aa9;font-size:10px;font-style:normal}.analysis-grid b{font:17px 'JetBrains Mono',monospace}.bottom-bar{position:fixed;right:0;bottom:0;left:0;z-index:20;display:flex;height:58px;padding-bottom:env(safe-area-inset-bottom);background:#fff;border-top:1px solid #e4e7ec;box-shadow:0 -2px 10px #2630400a}.bottom-bar button{flex:1;border:0;background:#fff;color:#758093;font-size:10px}.bottom-bar button b{display:block;color:#596678;font-size:15px;line-height:22px}.bottom-bar button span{display:block;font-size:10px}.bottom-bar .buy-action{background:#fff0f0;color:var(--rise)}.bottom-bar .sell-action{background:#eefaf2;color:var(--fall)}.bottom-bar .buy-action b,.bottom-bar .sell-action b{font-size:15px}.favorite-action b{font-size:20px}.sheet-mask{position:fixed;inset:0;z-index:30;display:flex;align-items:flex-end;background:#2630404d}.sheet{width:min(520px,100%);padding:18px 18px calc(20px + env(safe-area-inset-bottom));background:#fff;border-radius:14px 14px 0 0}.sheet-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.sheet-title h2{font-size:17px}.sheet-title button{border:0;background:transparent;color:#8d97a6;font-size:24px}.sheet p{color:#7d8796;font-size:12px}.sheet label{display:block;margin-top:14px;color:#697587;font-size:12px}.sheet input,.sheet select{display:block;width:100%;box-sizing:border-box;margin-top:7px;padding:10px;border:1px solid #e0e4eb;border-radius:5px;background:#fafbfd;color:#303c4c}.sheet .check{display:flex;gap:7px;align-items:center}.sheet .check input{width:auto;margin:0}.primary-button{width:100%;margin-top:18px;padding:11px;border:0;border-radius:5px;background:#3077ec;color:#fff}.primary-button.sell{background:var(--fall)}.trade-tip{margin:12px 0 0;color:#9aa3b1;font-size:11px}.form-error{color:var(--rise)!important;margin-top:10px}.form-success{color:var(--fall)!important;margin-top:10px}.sheet h3{margin:18px 0 10px;color:#8993a3;font-size:12px;font-weight:400}.setting-chips{display:flex;gap:8px}.setting-chips button{padding:8px 16px;border:0;border-radius:4px;background:#f4f6f9;color:#768194}.setting-chips button.selected{background:#edf4ff;color:#3077ec}.setting-row{display:flex;justify-content:space-between;width:100%;padding:12px 0;border:0;border-bottom:1px solid #f0f1f4;background:#fff;color:#3d4858;text-align:left}.setting-row i{width:31px;height:18px;border-radius:10px;background:#d9dee7}.setting-row i.on{background:#3077ec}.parameter-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;color:#697587;font-size:12px}.parameter-row input{width:74px;padding:6px;border:1px solid #e0e4eb;border-radius:4px;background:#fafbfd;color:#303c4c;font:12px 'JetBrains Mono',monospace}
@media (max-width:560px){.detail-page{width:100%;}.detail-nav{padding-left:12px;padding-right:12px}.stock-overview{padding:14px 12px 11px}.stock-price{font-size:32px}.detail-tabs{position:sticky;top:48px;z-index:9;overscroll-behavior-x:contain}.detail-tabs button{flex:0 0 78px;padding:12px 4px 10px}.chart-card,.detail-panel{margin-top:6px}.period-tabs,.indicator-tabs{overscroll-behavior-x:contain}.period-tabs button,.indicator-tabs button{padding-left:11px;padding-right:11px}.chart-wrap{height:250px;padding-left:4px;padding-right:4px}.chart-foot{gap:10px;padding-left:11px;padding-right:11px}.panel-block{padding:14px 12px}.order-row{grid-template-columns:42px minmax(68px,1fr) 62px 70px;min-height:36px}.flow-row{grid-template-columns:1.2fr .8fr .55fr .8fr;font-size:11px}.news-row{grid-template-columns:34px 34px minmax(0,1fr) 10px;gap:6px;padding:12px 0}.news-row strong{font-size:11px}.analysis-grid{grid-template-columns:1fr}.report-row strong{white-space:normal;line-height:1.4}.bottom-bar{height:56px}.trade-button{width:29%;font-size:14px}}
@media (min-width:721px){.detail-page{box-shadow:0 0 24px #2630400d}.bottom-bar{left:50%;width:720px;transform:translateX(-50%)}}
</style>
