<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getBoardQuotes, getIndexQuotes, getMarketStocks } from '@/services/market'
import type { IndexQuote, MarketBoardQuote, StockQuote } from '@/mock/market'

const mainTabs = ['行情', '板块', 'ETF', '债券', '科创', '港股']
const marketLabels = ['沪深市场', '沪深港通', '美股']
const rankTabs = ['涨幅榜', '跌幅榜', '成交额', '换手率']
const activeMainTab = ref('行情')
const indexQuotes = ref<IndexQuote[]>([])
const marketData = ref<StockQuote[]>([])
const boardData = ref<MarketBoardQuote[]>([])
const isLoading = ref(true)
const loadError = ref('')
const activeMarket = ref('沪深市场')
const search = ref('')
const sortDescending = ref(true)
const activeRank = ref('涨幅榜')
const boardRanks = ['全部', '涨幅榜', '跌幅榜', '成交额']
const activeBoardRank = ref('全部')
const isRefreshing = ref(false)
const lastUpdated = ref('14:32')

const boardQuotes = computed<MarketBoardQuote[]>(() => {
  const source = boardData.value
  const keyword = search.value.trim().toLowerCase()
  const filtered = keyword ? source.filter((item) => item.name.includes(keyword) || item.code.includes(keyword)) : source
  return [...filtered].sort((a, b) => {
    if (activeBoardRank.value === '跌幅榜') return Number.parseFloat(a.percent) - Number.parseFloat(b.percent)
    if (activeBoardRank.value === '成交额') return Number.parseFloat(b.extra.replace(/[^\d.]/g, '')) - Number.parseFloat(a.extra.replace(/[^\d.]/g, ''))
    return Number.parseFloat(b.percent) - Number.parseFloat(a.percent)
  })
})

const stocks = computed<StockQuote[]>(() => {
  const keyword = search.value.trim().toLowerCase()
  const filtered = keyword ? marketData.value.filter((stock) => stock.name.includes(keyword) || stock.code.includes(keyword)) : marketData.value
  return [...filtered].sort((a, b) => {
    const first = Number.parseFloat(a.percent)
    const second = Number.parseFloat(b.percent)
    if (activeRank.value === '成交额') return Number.parseFloat(b.volume) - Number.parseFloat(a.volume)
    if (activeRank.value === '换手率') return (b.code.charCodeAt(5) % 10) - (a.code.charCodeAt(5) % 10)
    const descending = activeRank.value === '跌幅榜' ? !sortDescending.value : sortDescending.value
    return descending ? second - first : first - second
  })
})

async function loadMarket() {
  isLoading.value = true
  loadError.value = ''
  try {
    const [indices, stocks] = await Promise.all([getIndexQuotes(), getMarketStocks()])
    indexQuotes.value = indices
    marketData.value = stocks
    if (activeMainTab.value !== '行情') boardData.value = await getBoardQuotes(activeMainTab.value)
  } catch { loadError.value = '行情数据暂时无法加载，请稍后重试。' } finally { isLoading.value = false }
}
async function selectMainTab(tab: string) {
  activeMainTab.value = tab
  search.value = ''
  if (tab === '行情') return
  isLoading.value = true
  loadError.value = ''
  try { boardData.value = await getBoardQuotes(tab) } catch { loadError.value = '该行情分类暂时无法加载。' } finally { isLoading.value = false }
}
function toggleSort() { sortDescending.value = !sortDescending.value }
function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadMarket().finally(() => { lastUpdated.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }); isRefreshing.value = false })
}
onMounted(loadMarket)
</script>

<template>
  <section class="market-page">
    <div class="market-main-tabs panel"><button v-for="tab in mainTabs" :key="tab" :class="{ selected: activeMainTab === tab }" @click="selectMainTab(tab)">{{ tab }}</button><RouterLink class="market-more" to="/reports">研报⌄</RouterLink></div>

    <LoadingState v-if="isLoading" label="正在加载行情" />
    <ErrorState v-else-if="loadError" title="行情加载失败" :message="loadError" :retry="loadMarket" />
    <template v-else>
    <template v-if="activeMainTab === '行情'">
      <section class="index-strip"><article v-for="index in indexQuotes" :key="index.code" class="market-index-card" :class="index.trend"><div class="index-card-title">{{ index.name }} <small>{{ index.code }}</small></div><strong>{{ index.value }}</strong><div class="index-change"><span>{{ index.change }}</span><span>{{ index.percent }}</span></div><div class="index-line"><i /><i /><i /><i /><i /><i /></div></article></section>
      <div class="market-sub-tabs"><button v-for="label in marketLabels" :key="label" :class="{ selected: activeMarket === label }" @click="activeMarket = label">{{ label }}</button><button class="market-refresh" :class="{ loading: isRefreshing }" @click="refresh">↻</button></div>
      <section class="market-board panel"><div class="board-heading"><div><p class="eyebrow">{{ activeMarket }} / REAL-TIME QUOTE</p><h1>市场排行</h1></div><label class="search-field"><span>⌕</span><input v-model="search" type="search" placeholder="搜索名称或代码" /></label></div><div class="rank-tabs"><button v-for="tab in rankTabs" :key="tab" :class="{ selected: activeRank === tab }" @click="activeRank = tab">{{ tab }}</button></div><div class="market-table-grid market-table-labels"><span>股票</span><span>最新价</span><span>涨跌额</span><button @click="toggleSort">涨跌幅 {{ sortDescending ? '↓' : '↑' }}</button><span>成交额</span></div><div v-for="(stock, index) in stocks" :key="stock.code" class="market-table-grid market-table-row"><RouterLink class="market-stock" :to="`/stock/${stock.code}`"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></RouterLink><span class="mono">{{ stock.price }}</span><span class="mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.change }}</span><span class="mono percent-chip" :class="stock.trend === 'up' ? 'rise-chip' : 'fall-chip'">{{ stock.percent }}</span><span class="mono muted">{{ stock.volume }}</span></div><div v-if="!stocks.length" class="empty-state"><span>⌕</span><strong>没有找到匹配股票</strong><p>试试其他名称或股票代码。</p></div></section>
    </template>
    <section v-else class="market-board panel"><div class="board-heading"><div><p class="eyebrow">{{ activeMainTab }} / QUOTE BOARD</p><h1>{{ activeMainTab }}排行</h1></div><label class="search-field"><span>⌕</span><input v-model="search" type="search" :placeholder="`搜索${activeMainTab}名称或代码`" /></label></div><div class="board-filter"><button v-for="rank in boardRanks" :key="rank" :class="{ selected: activeBoardRank === rank }" @click="activeBoardRank = rank">{{ rank }}</button><button class="market-refresh" :class="{ loading: isRefreshing }" @click="refresh">↻</button></div><div class="market-table-grid board-table-labels"><span>名称 / 代码</span><span>最新价</span><span>涨跌额</span><span>涨跌幅</span><span>参考数据</span></div><div v-for="(quote, index) in boardQuotes" :key="quote.code" class="market-table-grid market-table-row board-row"><div class="market-stock"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ quote.name }}</strong><small>{{ quote.code }}</small></div><span class="mono">{{ quote.price }}</span><span class="mono" :class="quote.trend === 'up' ? 'text-up' : 'text-down'">{{ quote.change }}</span><span class="mono percent-chip" :class="quote.trend === 'up' ? 'rise-chip' : 'fall-chip'">{{ quote.percent }}</span><span class="mono muted">{{ quote.extra }}</span></div><div v-if="!boardQuotes.length" class="empty-state"><span>⌕</span><strong>没有找到匹配标的</strong><p>请尝试其他名称或代码。</p></div></section>
    </template>
    <div class="market-counter"><span class="text-up mono">{{ activeMainTab === '行情' ? stocks.length : boardQuotes.length }}</span> 个标的 · 数据更新于 {{ lastUpdated }} <span>收起⌃</span></div>
  </section>
</template>

<style scoped>
.market-page { background: linear-gradient(180deg, rgba(255,255,255,.7), transparent 220px); min-height: calc(100vh - 164px); padding: 16px 0 24px; }.market-main-tabs { display: flex; overflow-x: auto; padding: 0 12px; border-radius: 0; }.market-main-tabs::-webkit-scrollbar { display: none; }.market-main-tabs button { position: relative; color: var(--muted); background: transparent; border: 0; padding: 15px 18px 14px; font-size: 14px; white-space: nowrap; }.market-main-tabs button.selected { color: var(--text); font-weight: 600; }.market-main-tabs button.selected::after, .rank-tabs button.selected::after { background: var(--primary); border-radius: 3px; bottom: 5px; content: ''; height: 3px; left: 50%; position: absolute; transform: translateX(-50%); width: 18px; }.market-more { margin-left: auto; color: var(--primary) !important; padding: 15px 18px 14px; font-size: 12px; white-space: nowrap; }.index-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 10px 0; }.market-index-card { position: relative; overflow: hidden; background: var(--card); border: 1px solid var(--border); padding: 15px 17px 12px; min-height: 126px; }.market-index-card.up { color: var(--up); }.market-index-card.down { color: var(--down); }.index-card-title { color: var(--text); font-size: 12px; font-weight: 600; }.index-card-title small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; margin-left: 5px; }.market-index-card > strong { color: inherit; display: block; font: 600 21px 'JetBrains Mono', monospace; margin: 12px 0 5px; }.index-change { display: flex; color: inherit; gap: 9px; font: 11px 'JetBrains Mono', monospace; }.index-line { position: absolute; display: flex; align-items: flex-end; gap: 5px; bottom: 12px; right: 15px; height: 28px; opacity: .45; }.index-line i { display: block; background: currentColor; width: 4px; }.index-line i:nth-child(1) { height: 35%; }.index-line i:nth-child(2) { height: 60%; }.index-line i:nth-child(3) { height: 48%; }.index-line i:nth-child(4) { height: 75%; }.index-line i:nth-child(5) { height: 62%; }.index-line i:nth-child(6) { height: 92%; }.market-sub-tabs { display: flex; align-items: center; background: var(--card); padding: 9px 18px 8px; border: 1px solid var(--border); }.market-sub-tabs button { color: var(--muted); background: var(--bg); border: 0; border-radius: 4px; padding: 7px 13px; margin-right: 8px; font-size: 11px; }.market-sub-tabs button.selected { background: #edf4ff; color: var(--primary); font-weight: 600; }.market-sub-tabs .market-refresh { margin-left: auto; color: var(--primary); background: transparent; font-size: 18px; }.market-refresh.loading { animation: rotate .7s linear infinite; }.market-board { margin-top: 10px; padding: 20px; }.board-heading { display: flex; align-items: flex-end; justify-content: space-between; }.board-heading h1 { color: var(--text); font-size: 18px; }.search-field { display: flex; align-items: center; gap: 8px; border: 1px solid var(--border); background: var(--bg); padding: 7px 10px; width: 210px; color: var(--muted); }.search-field input { border: 0; outline: 0; color: var(--text); background: transparent; width: 100%; font-size: 11px; }.board-filter { display: flex; align-items: center; gap: 20px; border-bottom: 1px solid var(--border); margin: 18px 0 0; }.board-filter button { color: var(--muted); border: 0; background: transparent; padding: 10px 0; font-size: 11px; }.board-filter button.selected { color: var(--primary); font-weight: 600; }.board-filter .market-refresh { margin-left: auto; font-size: 18px; }.rank-tabs { display: flex; gap: 25px; border-bottom: 1px solid var(--border); margin: 20px 0 0; }.rank-tabs button { position: relative; color: var(--muted); border: 0; background: transparent; padding: 10px 0; font-size: 11px; }.rank-tabs button.selected { color: var(--text); font-weight: 600; }.rank-tabs button.selected::after { bottom: -1px; }.market-table-grid { display: grid; grid-template-columns: 1.7fr .8fr .8fr .9fr .8fr; gap: 12px; align-items: center; }.market-table-labels { color: var(--muted); font-size: 10px; padding: 12px 0 9px; border-bottom: 1px solid var(--border); }.market-table-labels button { color: var(--muted); background: transparent; border: 0; font-size: 10px; text-align: right; }.market-table-row { min-height: 66px; border-bottom: 1px solid var(--border); font-size: 12px; }.market-stock { display: grid; grid-template-columns: 25px 1fr; gap: 2px 0; }.market-stock b { grid-row: span 2; color: #b3bac7; font: 10px 'JetBrains Mono', monospace; }.market-stock strong { font-size: 12px; }.market-stock small { grid-column: 2; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.percent-chip { padding: 5px 7px; width: fit-content; }.rise-chip { background: rgba(230,53,53,.07); }.fall-chip { background: rgba(28,170,60,.08); }.empty-state { padding: 60px 20px; text-align: center; color: var(--muted); }.empty-state span { color: var(--primary); display: block; font-size: 28px; }.empty-state strong { display: block; color: var(--text); font-size: 13px; margin-top: 10px; }.empty-state p { font-size: 11px; margin-top: 6px; }.market-placeholder { min-height: 350px; display: flex; align-items: center; flex-direction: column; justify-content: center; text-align: center; }.placeholder-icon { color: var(--primary); font-size: 36px; }.market-placeholder h2 { margin-top: 14px; font-size: 17px; }.market-placeholder p { color: var(--muted); font-size: 11px; margin: 8px 0 18px; }.market-counter { display: flex; align-items: center; justify-content: center; gap: 4px; color: var(--muted); font-size: 10px; padding-top: 13px; }.market-counter span:last-child { color: var(--primary); margin-left: 8px; }@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 720px) { .market-page { padding-top: 0; }.index-strip { grid-template-columns: 1fr; }.market-index-card { min-height: 108px; }.market-index-card:not(:first-child) { display: none; }.board-heading { align-items: stretch; flex-direction: column; gap: 12px; }.search-field { width: 100%; }.market-board { padding: 15px; overflow-x: auto; }.market-table-grid { min-width: 580px; }.market-counter { padding-bottom: 6px; } }
</style>
