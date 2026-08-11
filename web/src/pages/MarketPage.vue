<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import DataState from '@/components/DataState.vue'

import HorizontalTabs from '@/components/HorizontalTabs.vue'
import { getBoardQuotes, getIndexQuotes, getMarketRankings, getMarketStocks, getMarketStocksSnapshot } from '@/services/market'
import type { IndexQuote, MarketBoardQuote, MarketRankQuote, MarketRankingFilters, MarketScope, StockQuote } from '@/services/market-types'
import { connectMarketSocket } from '@/services/market-socket'
import type { MarketSocketEvent, MarketSocketStatus } from '@/services/market-socket'

const mainTabs = ['行情', '板块', 'ETF', '债券', '科创', '港股']
const marketLabels = ['沪深市场', '沪深港通', '美股']
const rankTabs = ['涨幅榜', '跌幅榜', '成交额', '换手率']
const boardRanks = ['全部', '涨幅榜', '跌幅榜', '成交额']
const quickLinks = [
  { label: '涨停', to: '/market/limit-up' },
  { label: '跌停', to: '/market/limit-down' },
  { label: '市场情绪', to: '/market/sentiment' },
  { label: '排行中心', to: '/market/rank' },
  { label: '板块', to: '/sector' },
  { label: 'ETF', to: '/etf' },
]

const activeMainTab = ref('行情')
const activeMarket = ref('沪深市场')
const activeRank = ref('涨幅榜')
const activeBoardRank = ref('全部')
const search = ref('')
const sortDescending = ref(true)
const indexQuotes = ref<IndexQuote[]>([])
const marketData = ref<StockQuote[]>([])
const rankingData = ref<MarketRankQuote[]>([])
const boardData = ref<MarketBoardQuote[]>([])
const isLoading = ref(true)
const loadError = ref('')
const isRefreshing = ref(false)
const lastUpdated = ref('--:--')
const realtimeStatus = ref<MarketSocketStatus>('connecting')
let disconnectMarketSocket: (() => void) & { setCodes?: (codes: string[]) => void } = () => undefined
let quoteSequence = new Map<string, number>()
const filterDraft = ref({ minPercent: '', maxPercent: '', minAmount: '', maxAmount: '', minTurnoverRate: '', maxTurnoverRate: '', minPrice: '', maxPrice: '' })
const filterError = ref('')

const activeMarketSupported = computed(() => activeMarket.value === '沪深市场')
const activeMetricLabel = computed(() => ({
  '涨幅榜': '涨跌幅',
  '跌幅榜': '涨跌幅',
  '成交额': '成交额',
  '换手率': '换手率',
} as Record<string, string>)[activeRank.value] ?? '涨跌幅')

function numeric(value: string) {
  const text = value.trim()
  const result = Number.parseFloat(text.replace(/[^\d.+-]/g, ''))
  if (Number.isNaN(result)) return 0
  if (text.includes('亿')) return result * 100000000
  if (text.includes('万')) return result * 10000
  return result
}
function filterNumber(value: string) { const result = Number(value); return value.trim() === '' || !Number.isFinite(result) ? undefined : result }
function rankingFilters(): MarketRankingFilters {
  return Object.fromEntries(Object.entries(filterDraft.value).map(([key, value]) => [key, filterNumber(value)]).filter(([, value]) => value !== undefined)) as MarketRankingFilters
}
function applyLocalFilters(source: Array<MarketRankQuote | StockQuote>) {
  const filters = rankingFilters()
  return source.filter((stock) => {
    const percent = numeric(stock.percent)
    const amount = 'amount' in stock ? numeric(stock.amount) : numeric(stock.volume)
    const turnover = numeric(stock.turnoverRate ?? '')
    const price = numeric(stock.price)
    return (filters.minPercent == null || percent >= filters.minPercent) && (filters.maxPercent == null || percent <= filters.maxPercent) && (filters.minAmount == null || amount >= filters.minAmount) && (filters.maxAmount == null || amount <= filters.maxAmount) && (filters.minTurnoverRate == null || turnover >= filters.minTurnoverRate) && (filters.maxTurnoverRate == null || turnover <= filters.maxTurnoverRate) && (filters.minPrice == null || price >= filters.minPrice) && (filters.maxPrice == null || price <= filters.maxPrice)
  })
}

const filteredStocks = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  if (!activeMarketSupported.value) return []
  const source = rankingData.value.length ? rankingData.value : marketData.value
  const searched = keyword
    ? source.filter((stock) => stock.name.toLowerCase().includes(keyword) || stock.code.toLowerCase().includes(keyword))
    : source
  const filtered = applyLocalFilters(searched)

  // The API already orders ranking data by the selected field. Only apply the
  // local sort for the quote fallback used when the ranking endpoint is down.
  if (rankingData.value.length) return filtered
  return [...filtered].sort((a, b) => {
    if (activeRank.value === '成交额') return numeric(b.volume) - numeric(a.volume)
    if (activeRank.value === '换手率') return numeric(b.turnoverRate ?? '') - numeric(a.turnoverRate ?? '')
    const difference = numeric(b.percent) - numeric(a.percent)
    return activeRank.value === '跌幅榜' ? -difference : sortDescending.value ? difference : -difference
  })
})

const filteredBoards = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  const source = keyword
    ? boardData.value.filter((item) => item.name.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword))
    : boardData.value

  return [...source].sort((a, b) => {
    if (activeBoardRank.value === '跌幅榜') return numeric(a.percent) - numeric(b.percent)
    if (activeBoardRank.value === '成交额') return numeric(b.extra) - numeric(a.extra)
    return numeric(b.percent) - numeric(a.percent)
  })
})

const resultCount = computed(() => activeMainTab.value === '行情' ? filteredStocks.value.length : filteredBoards.value.length)

function rankingType(label: string) {
  return ({ '涨幅榜': 'changePercent', '跌幅榜': 'losers', '成交额': 'amount', '换手率': 'turnoverRate' } as Record<string, string>)[label] ?? 'changePercent'
}
function updateLastUpdated(timestamp = Date.now()) {
  lastUpdated.value = new Date(timestamp).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
}
function applyRealtimeEvent(event: MarketSocketEvent) {
  if (event.type !== 'quote') return
  if (!event.data || typeof event.data !== 'object') return
  const quote = event.data as Partial<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number; amount: number; turnoverRate: number | null; sequence: number }>
  if (!quote.code || !Number.isFinite(quote.price) || !Number.isFinite(quote.change) || !Number.isFinite(quote.changePercent)) return
  const sequence = quote.sequence
  if (typeof sequence === 'number' && Number.isFinite(sequence) && sequence <= (quoteSequence.get(quote.code) ?? 0)) return
  if (typeof sequence === 'number' && Number.isFinite(sequence)) quoteSequence.set(quote.code, sequence)
  const update = (item: StockQuote): StockQuote => ({ ...item, name: quote.name ?? item.name, price: (quote.price as number).toFixed(2), change: `${(quote.change as number) >= 0 ? '+' : ''}${(quote.change as number).toFixed(2)}`, percent: `${(quote.changePercent as number) >= 0 ? '+' : ''}${(quote.changePercent as number).toFixed(2)}%`, volume: quote.volume == null ? item.volume : String(quote.volume), turnoverRate: quote.turnoverRate == null ? item.turnoverRate : `${quote.turnoverRate}%`, trend: (quote.change as number) >= 0 ? 'up' : 'down' })
  marketData.value = marketData.value.map((item) => item.code.toLowerCase() === quote.code?.toLowerCase() ? update(item) : item)
  rankingData.value = rankingData.value.map((item) => item.code.toLowerCase() === quote.code?.toLowerCase() ? { ...item, ...update(item) } : item)
  updateLastUpdated(event.timestamp || Date.now())
}

async function loadRanking() {
  try {
    rankingData.value = await getMarketRankings(rankingType(activeRank.value), search.value, activeMarket.value as MarketScope, rankingFilters())
  } catch {
    rankingData.value = []
  }
}

async function selectRank(rank: string) {
  activeRank.value = rank
  await loadRanking()
}

async function loadMarket() {
  isLoading.value = true
  loadError.value = ''
  try {
    const [indices, stocks] = await Promise.all([getIndexQuotes(), getMarketStocks(activeMarket.value as MarketScope)])
    indexQuotes.value = indices
    marketData.value = stocks
    disconnectMarketSocket.setCodes?.(stocks.map((stock) => stock.code))
    await loadRanking()
    if (activeMainTab.value !== '行情') boardData.value = await getBoardQuotes(activeMainTab.value)
  } catch {
    loadError.value = '行情数据暂时无法加载，请稍后重试。'
  } finally {
    isLoading.value = false
  }
}

async function selectMainTab(tab: string) {
  if (activeMainTab.value === tab && !loadError.value) return
  activeMainTab.value = tab
  activeBoardRank.value = '全部'
  search.value = ''
  if (tab === '行情') {
    loadError.value = ''
    void loadRanking()
    return
  }

  isLoading.value = true
  loadError.value = ''
  try {
    boardData.value = await getBoardQuotes(tab)
  } catch {
    loadError.value = '该行情分类暂时无法加载。'
  } finally {
    isLoading.value = false
  }
}

function selectMarket(market: string) {
  activeMarket.value = market
  rankingData.value = []
  search.value = ''
  void loadRanking()
}

function metricValue(stock: MarketRankQuote | StockQuote) {
  if (activeRank.value === '成交额') return 'amount' in stock ? stock.amount : '不支持'
  if (activeRank.value === '换手率') return stock.turnoverRate ?? '不支持'
  return stock.percent
}

function toggleSort() {
  sortDescending.value = !sortDescending.value
}
function applyFilters() {
  filterError.value = ''
  const values = Object.values(filterDraft.value).map(filterNumber).filter((value): value is number => value !== undefined)
  if (values.some((value) => value < 0)) { filterError.value = '筛选条件不能为负数'; return }
  if (filterDraft.value.minPercent && filterDraft.value.maxPercent && Number(filterDraft.value.minPercent) > Number(filterDraft.value.maxPercent)) { filterError.value = '涨跌幅最小值不能大于最大值'; return }
  void loadRanking()
}
function resetFilters() {
  filterDraft.value = { minPercent: '', maxPercent: '', minAmount: '', maxAmount: '', minTurnoverRate: '', maxTurnoverRate: '', minPrice: '', maxPrice: '' }
  filterError.value = ''
  void loadRanking()
}

function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadMarket().finally(() => {
    lastUpdated.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    isRefreshing.value = false
  })
}

onMounted(() => {
  updateLastUpdated()
  disconnectMarketSocket = connectMarketSocket(getMarketStocksSnapshot().map((stock) => stock.code), applyRealtimeEvent, {
    types: ['quote', 'orderbook', 'trades'],
    onStatus: (status) => { realtimeStatus.value = status },
  })
  void loadMarket()
})
onUnmounted(() => { disconnectMarketSocket() })
</script>

<template>
  <section class="market-page">

    <HorizontalTabs :items="mainTabs.map((tab) => ({ label: tab, value: tab }))" :model-value="activeMainTab" aria-label="行情分类" @update:model-value="selectMainTab" />

    <DataState :status="isLoading ? 'loading' : loadError ? 'error' : activeMarketSupported && resultCount === 0 ? 'empty' : 'ready'" loading-label="正在加载行情" error-title="行情加载失败" empty-title="暂无行情数据" empty-icon="⌕" message="当前筛选条件下暂无可展示的行情数据。" :retry="loadMarket">
    <template #default>
      <section v-if="activeMainTab === '行情'" class="index-strip" aria-label="主要指数">
        <article v-for="index in indexQuotes" :key="index.code" class="index-card" :class="index.trend">
          <div class="index-title"><strong>{{ index.name }}</strong><small>{{ index.code }}</small></div>
          <b class="index-value">{{ index.value }}</b>
          <div class="index-change"><span>{{ index.change }}</span><span>{{ index.percent }}</span></div>
          <i class="index-spark" aria-hidden="true">▁▃▂▅▄▆</i>
        </article>
      </section>

      <div v-if="activeMainTab === '行情'" class="market-scope">
        <div class="scope-tabs">
          <button v-for="label in marketLabels" :key="label" :class="{ selected: activeMarket === label }" :aria-pressed="activeMarket === label" @click="selectMarket(label)">{{ label }}</button>
        </div>
        <button class="refresh-button" :class="{ loading: isRefreshing }" :disabled="isRefreshing" aria-label="刷新行情" @click="refresh">↻</button>
      </div>

      <section class="quote-panel">
        <div class="quote-heading">
          <div>
            <p class="eyebrow">{{ activeMainTab === '行情' ? activeMarket : activeMainTab }} / QUOTE BOARD</p>
            <h2>{{ activeMainTab === '行情' ? '市场排行' : `${activeMainTab}排行` }}</h2>
          </div>
          <label class="search-field">
            <span>⌕</span>
            <input v-model="search" type="search" :placeholder="`搜索${activeMainTab === '行情' ? '股票' : activeMainTab}名称或代码`" @change="activeMainTab === '行情' && loadRanking()" />
          </label>
        </div>

        <div v-if="activeMainTab === '行情'" class="filter-tabs" role="tablist" aria-label="股票排行筛选">
          <button v-for="tab in rankTabs" :key="tab" :class="{ selected: activeRank === tab }" :aria-selected="activeRank === tab" role="tab" @click="selectRank(tab)">{{ tab }}</button>
          <button class="sort-button" :disabled="Boolean(rankingData.length)" aria-label="切换排序方向" @click="toggleSort">{{ sortDescending ? '↓' : '↑' }}</button>
        </div>
        <div v-else class="filter-tabs" role="tablist" aria-label="分类排行筛选">
          <button v-for="rank in boardRanks" :key="rank" :class="{ selected: activeBoardRank === rank }" @click="activeBoardRank = rank">{{ rank }}</button>
          <button class="sort-button" :class="{ loading: isRefreshing }" :disabled="isRefreshing" @click="refresh">↻</button>
        </div>
        <section v-if="activeMainTab === '行情'" class="condition-filters" aria-label="条件筛选">
          <div class="condition-grid">
            <label>涨跌幅 <input v-model="filterDraft.minPercent" inputmode="decimal" placeholder="最小%" /> <input v-model="filterDraft.maxPercent" inputmode="decimal" placeholder="最大%" /></label>
            <label>成交额 <input v-model="filterDraft.minAmount" inputmode="decimal" placeholder="最小元" /> <input v-model="filterDraft.maxAmount" inputmode="decimal" placeholder="最大元" /></label>
            <label>换手率 <input v-model="filterDraft.minTurnoverRate" inputmode="decimal" placeholder="最小%" /> <input v-model="filterDraft.maxTurnoverRate" inputmode="decimal" placeholder="最大%" /></label>
            <label>价格 <input v-model="filterDraft.minPrice" inputmode="decimal" placeholder="最低" /> <input v-model="filterDraft.maxPrice" inputmode="decimal" placeholder="最高" /></label>
          </div>
          <p v-if="filterError" class="filter-error">{{ filterError }}</p>
          <div class="condition-actions"><button type="button" @click="applyFilters">应用筛选</button><button type="button" @click="resetFilters">重置</button><small>支持服务端参数，接口不可用时自动本地筛选</small></div>
        </section>

        <div v-if="activeMainTab !== '行情' || activeMarketSupported" class="quote-table quote-table-header" :class="{ 'board-table': activeMainTab !== '行情' }">
          <span>名称 / 代码</span><span>最新价</span><span>涨跌额</span><span>{{ activeMainTab === '行情' ? activeMetricLabel : '涨跌幅' }}</span>
        </div>
        <p v-if="activeMainTab === '行情' && !activeMarketSupported" class="unsupported-state">当前数据服务不支持{{ activeMarket }}，未使用其他市场数据替代。</p>
        <template v-else-if="activeMainTab === '行情'">
          <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" class="quote-table quote-row" :to="`/stock/${stock.code}`">
            <span class="quote-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
            <span class="mono">{{ stock.price }}</span><span class="mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.change }}</span><span class="mono percent" :class="stock.trend === 'up' ? 'rise' : 'fall'">{{ metricValue(stock) }}</span>
          </RouterLink>
        </template>
        <template v-else>
          <RouterLink v-for="(quote, index) in filteredBoards" :key="quote.code" class="quote-table quote-row board-table" :to="activeMainTab === '板块' ? `/sector/${quote.code}` : activeMainTab === 'ETF' ? `/etf/${quote.code}` : '/market'">
            <span class="quote-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ quote.name }}</strong><small>{{ quote.code }}</small></span>
            <span class="mono">{{ quote.price }}</span><span class="mono" :class="quote.trend === 'up' ? 'text-up' : 'text-down'">{{ quote.change }}</span><span class="mono percent" :class="quote.trend === 'up' ? 'rise' : 'fall'">{{ quote.percent }}</span>
          </RouterLink>
        </template>
        <div v-if="!resultCount" class="empty-state"><span>⌕</span><strong>没有找到匹配标的</strong><p>请尝试其他名称或代码。</p></div>
      </section>
    </template>
    </DataState>

    <nav class="quick-links" aria-label="行情快捷入口">
          <span>快捷入口</span>
          <RouterLink v-for="link in quickLinks" :key="link.to" :to="link.to">{{ link.label }} <b>›</b></RouterLink>
        </nav>
        <div class="market-footer"><span class="mono">{{ resultCount }}</span> 个标的 · 更新于 {{ lastUpdated }}<small class="realtime-status" :class="`status-${realtimeStatus}`"><i />{{ realtimeStatus === 'connected' ? '实时已连接' : realtimeStatus === 'connecting' || realtimeStatus === 'reconnecting' ? '实时连接中' : '实时不可用' }}</small></div>
  </section>
</template>

<style scoped>
.market-page { min-height: calc(100vh - 150px); padding: 8px 0 24px; color: var(--text); }
.market-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.market-header h1 { margin: 4px 0 0; font-size: 24px; letter-spacing: -.04em; }
.report-link { color: var(--primary); font-size: 12px; }.report-link span { font-size: 18px; vertical-align: -1px; }
.market-main-tabs { display: flex; gap: 2px; overflow-x: auto; border-bottom: 1px solid var(--border); scrollbar-width: none; }.market-main-tabs::-webkit-scrollbar { display: none; }
.market-main-tabs button, .scope-tabs button, .filter-tabs button { position: relative; border: 0; background: transparent; color: var(--muted); white-space: nowrap; cursor: pointer; }
.market-main-tabs button { padding: 10px 14px 11px; font-size: 13px; }.market-main-tabs button.selected { color: var(--text); font-weight: 600; }.market-main-tabs button.selected::after, .filter-tabs button.selected::after { position: absolute; right: 50%; bottom: -1px; left: 50%; height: 2px; content: ''; background: var(--primary); transform: translateX(-50%); }
.index-strip { display: flex; gap: 8px; overflow-x: auto; padding: 10px 0 2px; scrollbar-width: none; }.index-strip::-webkit-scrollbar { display: none; }.index-card { position: relative; min-width: 154px; flex: 1; padding: 11px 12px 10px; overflow: hidden; background: var(--card); border: 1px solid var(--border); border-radius: 4px; }.index-title { display: flex; align-items: baseline; gap: 5px; }.index-title strong { font-size: 12px; }.index-title small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; }.index-value { display: block; margin: 10px 0 3px; color: var(--text); font: 600 19px 'JetBrains Mono', monospace; }.index-change { display: flex; gap: 8px; color: var(--up); font: 10px 'JetBrains Mono', monospace; }.index-card.down .index-change { color: var(--down); }.index-spark { position: absolute; right: 10px; bottom: 10px; color: currentColor; font: 16px 'JetBrains Mono', monospace; opacity: .25; }.market-scope { display: flex; align-items: center; justify-content: space-between; margin-top: 10px; padding: 5px 8px; background: var(--card); border: 1px solid var(--border); border-radius: 4px; }.scope-tabs { display: flex; gap: 4px; overflow-x: auto; }.scope-tabs button { padding: 7px 9px; border-radius: 3px; font-size: 11px; }.scope-tabs button.selected { color: var(--primary); background: #edf4ff; font-weight: 600; }.refresh-button, .sort-button { border: 0; background: transparent; color: var(--primary); cursor: pointer; }.refresh-button { padding: 5px 7px; font-size: 18px; }.loading { animation: rotate .7s linear infinite; }.quote-panel { margin-top: 10px; padding: 14px 16px 4px; background: var(--card); border: 1px solid var(--border); border-radius: 4px; }.quote-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }.quote-heading h2 { margin-top: 4px; font-size: 17px; }.search-field { display: flex; align-items: center; gap: 6px; width: 200px; padding: 7px 9px; color: var(--muted); background: var(--bg); border: 1px solid var(--border); border-radius: 3px; }.search-field input { width: 100%; min-width: 0; color: var(--text); background: transparent; border: 0; outline: 0; font-size: 11px; }.filter-tabs { display: flex; align-items: center; gap: 19px; margin-top: 13px; border-bottom: 1px solid var(--border); }.condition-filters{margin-top:12px;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:4px}.condition-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.condition-grid label{display:flex;align-items:center;gap:4px;color:var(--muted);font-size:10px}.condition-grid input{width:58px;min-width:0;padding:5px 4px;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:3px;font-size:10px}.condition-actions{display:flex;align-items:center;gap:8px;margin-top:9px}.condition-actions button{padding:5px 9px;color:var(--primary);background:var(--card);border:1px solid var(--border);border-radius:3px;font-size:10px}.condition-actions small{color:var(--muted);font-size:9px}.filter-error{margin-top:6px;color:var(--down);font-size:10px}.filter-tabs button { padding: 9px 0 8px; font-size: 11px; }.filter-tabs button.selected { color: var(--text); font-weight: 600; }.sort-button { margin-left: auto; font-size: 14px !important; }.quote-table { display: grid; grid-template-columns: minmax(130px, 1.7fr) .8fr .8fr .9fr; gap: 8px; align-items: center; }.quote-table-header { padding: 10px 0 8px; color: var(--muted); border-bottom: 1px solid var(--border); font-size: 10px; }.quote-table-header span:not(:first-child) { text-align: right; }.quote-row { min-height: 56px; border-bottom: 1px solid var(--border); font-size: 11px; }.quote-row > span:not(:first-child) { text-align: right; }.quote-name { display: grid; grid-template-columns: 23px 1fr; gap: 2px; min-width: 0; }.quote-name b { grid-row: span 2; color: #b3bac7; font: 10px 'JetBrains Mono', monospace; }.quote-name strong, .quote-name small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.quote-name strong { font-size: 12px; }.quote-name small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; }.percent { width: fit-content; justify-self: end; padding: 4px 5px; }.rise { color: var(--up); background: rgba(230,53,53,.07); }.fall { color: var(--down); background: rgba(28,170,60,.08); }.unsupported-state { padding: 32px 20px; color: var(--muted); border-bottom: 1px solid var(--border); font-size: 11px; text-align: center; }.quick-links { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 7px; padding: 14px 0 0; color: var(--muted); font-size: 10px; }.quick-links a { padding: 5px 8px; color: var(--primary); background: var(--card); border: 1px solid var(--border); border-radius: 3px; }.quick-links b { font-size: 14px; vertical-align: -1px; }.empty-state { padding: 44px 20px; color: var(--muted); text-align: center; }.empty-state span { display: block; color: var(--primary); font-size: 27px; }.empty-state strong { display: block; margin-top: 8px; color: var(--text); font-size: 12px; }.empty-state p { margin-top: 5px; font-size: 11px; }.market-footer { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 5px; padding-top: 12px; color: var(--muted); font-size: 10px; }.market-footer > span { color: var(--primary); }.market-footer a { margin-left: 8px; color: var(--primary); }.realtime-status { display: inline-flex; align-items: center; gap: 4px; margin-left: 5px; }.realtime-status i { width: 5px; height: 5px; border-radius: 50%; background: #aab2be; }.realtime-status.status-connected i { background: var(--up); }.realtime-status.status-connecting i, .realtime-status.status-reconnecting i { background: #e7a516; }.realtime-status.status-error i, .realtime-status.status-closed i { background: var(--down); }@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 620px) { .market-page { padding-top: 0; }.market-header { margin-bottom: 8px; }.market-header h1 { font-size: 21px; }.market-main-tabs button { padding: 9px 13px 10px; }.index-card { min-width: 148px; }.index-card:nth-child(n+4) { display: none; }.quote-panel { padding: 12px 10px 3px; }.quote-heading { align-items: stretch; flex-direction: column; gap: 9px; }.search-field { width: 100%; height: 34px; }.filter-tabs { gap: 14px; margin-top: 10px; }.quote-table { grid-template-columns: minmax(112px, 1.7fr) .75fr .75fr .85fr; gap: 5px; }.quote-table-header { font-size: 9px; }.quote-row { min-height: 52px; font-size: 10px; }.quote-name strong { font-size: 11px; }.quote-name small { font-size: 8px; }.percent { padding: 3px 4px; }.market-footer { flex-wrap: wrap; padding-bottom: 3px; } }
@media (min-width: 821px) { .market-page { padding-top: 0; }.index-strip { overflow: visible; }.index-card { min-width: 0; }.quote-panel { padding-left: 20px; padding-right: 20px; } }
</style>
