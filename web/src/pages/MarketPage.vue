<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getBoardQuotes, getIndexQuotes, getMarketStocks } from '@/services/market'
import type { IndexQuote, MarketBoardQuote, StockQuote } from '@/services/market-types'

const mainTabs = ['行情', '板块', 'ETF', '债券', '科创', '港股']
const marketLabels = ['沪深市场', '沪深港通', '美股']
const rankTabs = ['涨幅榜', '跌幅榜', '成交额', '换手率']
const boardRanks = ['全部', '涨幅榜', '跌幅榜', '成交额']

const activeMainTab = ref('行情')
const activeMarket = ref('沪深市场')
const activeRank = ref('涨幅榜')
const activeBoardRank = ref('全部')
const search = ref('')
const sortDescending = ref(true)
const indexQuotes = ref<IndexQuote[]>([])
const marketData = ref<StockQuote[]>([])
const boardData = ref<MarketBoardQuote[]>([])
const isLoading = ref(true)
const loadError = ref('')
const isRefreshing = ref(false)
const lastUpdated = ref('--:--')

function numeric(value: string) {
  const result = Number.parseFloat(value.replace(/[^\d.+-]/g, ''))
  return Number.isNaN(result) ? 0 : result
}

const filteredStocks = computed(() => {
  const keyword = search.value.trim().toLowerCase()
  const source = keyword
    ? marketData.value.filter((stock) => stock.name.toLowerCase().includes(keyword) || stock.code.toLowerCase().includes(keyword))
    : marketData.value

  return [...source].sort((a, b) => {
    if (activeRank.value === '成交额') return numeric(b.volume) - numeric(a.volume)
    if (activeRank.value === '换手率') return b.code.charCodeAt(5) - a.code.charCodeAt(5)
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

async function loadMarket() {
  isLoading.value = true
  loadError.value = ''
  try {
    const [indices, stocks] = await Promise.all([getIndexQuotes(), getMarketStocks()])
    indexQuotes.value = indices
    marketData.value = stocks
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

function toggleSort() {
  sortDescending.value = !sortDescending.value
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
  lastUpdated.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  loadMarket()
})
</script>

<template>
  <section class="market-page">
    <header class="market-header">
      <div>
        <p class="eyebrow">MARKET / REAL-TIME</p>
        <h1>行情</h1>
      </div>
      <RouterLink class="report-link" to="/reports">研报 <span>›</span></RouterLink>
    </header>

    <nav class="market-main-tabs" aria-label="行情分类">
      <button v-for="tab in mainTabs" :key="tab" :class="{ selected: activeMainTab === tab }" @click="selectMainTab(tab)">{{ tab }}</button>
    </nav>

    <LoadingState v-if="isLoading" label="正在加载行情" />
    <ErrorState v-else-if="loadError" title="行情加载失败" :message="loadError" :retry="loadMarket" />
    <template v-else>
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
          <button v-for="label in marketLabels" :key="label" :class="{ selected: activeMarket === label }" @click="activeMarket = label">{{ label }}</button>
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
            <input v-model="search" type="search" :placeholder="`搜索${activeMainTab === '行情' ? '股票' : activeMainTab}名称或代码`" />
          </label>
        </div>

        <div v-if="activeMainTab === '行情'" class="filter-tabs" role="tablist" aria-label="股票排行筛选">
          <button v-for="tab in rankTabs" :key="tab" :class="{ selected: activeRank === tab }" @click="activeRank = tab">{{ tab }}</button>
          <button class="sort-button" @click="toggleSort">{{ sortDescending ? '↓' : '↑' }}</button>
        </div>
        <div v-else class="filter-tabs" role="tablist" aria-label="分类排行筛选">
          <button v-for="rank in boardRanks" :key="rank" :class="{ selected: activeBoardRank === rank }" @click="activeBoardRank = rank">{{ rank }}</button>
          <button class="sort-button" :class="{ loading: isRefreshing }" :disabled="isRefreshing" @click="refresh">↻</button>
        </div>

        <div class="quote-table quote-table-header" :class="{ 'board-table': activeMainTab !== '行情' }">
          <span>名称 / 代码</span><span>最新价</span><span>涨跌额</span><span>涨跌幅</span><span>{{ activeMainTab === '行情' ? '成交额' : '参考数据' }}</span>
        </div>
        <template v-if="activeMainTab === '行情'">
          <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" class="quote-table quote-row" :to="`/stock/${stock.code}`">
            <span class="quote-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
            <span class="mono">{{ stock.price }}</span><span class="mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.change }}</span><span class="mono percent" :class="stock.trend === 'up' ? 'rise' : 'fall'">{{ stock.percent }}</span><span class="mono muted">{{ stock.volume }}</span>
          </RouterLink>
        </template>
        <template v-else>
          <div v-for="(quote, index) in filteredBoards" :key="quote.code" class="quote-table quote-row board-table">
            <span class="quote-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ quote.name }}</strong><small>{{ quote.code }}</small></span>
            <span class="mono">{{ quote.price }}</span><span class="mono" :class="quote.trend === 'up' ? 'text-up' : 'text-down'">{{ quote.change }}</span><span class="mono percent" :class="quote.trend === 'up' ? 'rise' : 'fall'">{{ quote.percent }}</span><span class="mono muted">{{ quote.extra || '--' }}</span>
          </div>
        </template>
        <div v-if="!resultCount" class="empty-state"><span>⌕</span><strong>没有找到匹配标的</strong><p>请尝试其他名称或代码。</p></div>
      </section>
    </template>

    <div class="market-footer"><span class="mono">{{ resultCount }}</span> 个标的 · 更新于 {{ lastUpdated }}<RouterLink to="/sector">板块</RouterLink><RouterLink to="/etf">ETF</RouterLink></div>
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
.index-strip { display: flex; gap: 8px; overflow-x: auto; padding: 10px 0 2px; scrollbar-width: none; }.index-strip::-webkit-scrollbar { display: none; }.index-card { position: relative; min-width: 154px; flex: 1; padding: 11px 12px 10px; overflow: hidden; background: var(--card); border: 1px solid var(--border); border-radius: 4px; }.index-title { display: flex; align-items: baseline; gap: 5px; }.index-title strong { font-size: 12px; }.index-title small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; }.index-value { display: block; margin: 10px 0 3px; color: var(--text); font: 600 19px 'JetBrains Mono', monospace; }.index-change { display: flex; gap: 8px; color: var(--up); font: 10px 'JetBrains Mono', monospace; }.index-card.down .index-change { color: var(--down); }.index-spark { position: absolute; right: 10px; bottom: 10px; color: currentColor; font: 16px 'JetBrains Mono', monospace; opacity: .25; }.market-scope { display: flex; align-items: center; justify-content: space-between; margin-top: 10px; padding: 5px 8px; background: var(--card); border: 1px solid var(--border); border-radius: 4px; }.scope-tabs { display: flex; gap: 4px; overflow-x: auto; }.scope-tabs button { padding: 7px 9px; border-radius: 3px; font-size: 11px; }.scope-tabs button.selected { color: var(--primary); background: #edf4ff; font-weight: 600; }.refresh-button, .sort-button { border: 0; background: transparent; color: var(--primary); cursor: pointer; }.refresh-button { padding: 5px 7px; font-size: 18px; }.loading { animation: rotate .7s linear infinite; }.quote-panel { margin-top: 10px; padding: 14px 16px 4px; background: var(--card); border: 1px solid var(--border); border-radius: 4px; }.quote-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }.quote-heading h2 { margin-top: 4px; font-size: 17px; }.search-field { display: flex; align-items: center; gap: 6px; width: 200px; padding: 7px 9px; color: var(--muted); background: var(--bg); border: 1px solid var(--border); border-radius: 3px; }.search-field input { width: 100%; min-width: 0; color: var(--text); background: transparent; border: 0; outline: 0; font-size: 11px; }.filter-tabs { display: flex; align-items: center; gap: 19px; margin-top: 13px; border-bottom: 1px solid var(--border); }.filter-tabs button { padding: 9px 0 8px; font-size: 11px; }.filter-tabs button.selected { color: var(--text); font-weight: 600; }.sort-button { margin-left: auto; font-size: 14px !important; }.quote-table { display: grid; grid-template-columns: minmax(130px, 1.7fr) .75fr .75fr .8fr .75fr; gap: 8px; align-items: center; }.quote-table-header { padding: 10px 0 8px; color: var(--muted); border-bottom: 1px solid var(--border); font-size: 10px; }.quote-table-header span:not(:first-child) { text-align: right; }.quote-row { min-height: 56px; border-bottom: 1px solid var(--border); font-size: 11px; }.quote-row > span:not(:first-child) { text-align: right; }.quote-name { display: grid; grid-template-columns: 23px 1fr; gap: 2px; min-width: 0; }.quote-name b { grid-row: span 2; color: #b3bac7; font: 10px 'JetBrains Mono', monospace; }.quote-name strong, .quote-name small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.quote-name strong { font-size: 12px; }.quote-name small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; }.percent { width: fit-content; justify-self: end; padding: 4px 5px; }.rise { color: var(--up); background: rgba(230,53,53,.07); }.fall { color: var(--down); background: rgba(28,170,60,.08); }.empty-state { padding: 44px 20px; color: var(--muted); text-align: center; }.empty-state span { display: block; color: var(--primary); font-size: 27px; }.empty-state strong { display: block; margin-top: 8px; color: var(--text); font-size: 12px; }.empty-state p { margin-top: 5px; font-size: 11px; }.market-footer { display: flex; align-items: center; justify-content: center; gap: 5px; padding-top: 12px; color: var(--muted); font-size: 10px; }.market-footer > span { color: var(--primary); }.market-footer a { margin-left: 8px; color: var(--primary); }@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 620px) { .market-page { padding-top: 0; }.market-header { margin-bottom: 8px; }.market-header h1 { font-size: 21px; }.market-main-tabs button { padding: 9px 13px 10px; }.index-card { min-width: 148px; }.index-card:nth-child(n+4) { display: none; }.quote-panel { padding: 12px 10px 3px; }.quote-heading { align-items: stretch; flex-direction: column; gap: 9px; }.search-field { width: 100%; height: 34px; }.filter-tabs { gap: 14px; margin-top: 10px; }.quote-table { grid-template-columns: minmax(112px, 1.7fr) .72fr .72fr .78fr .68fr; gap: 5px; }.quote-table-header { font-size: 9px; }.quote-row { min-height: 52px; font-size: 10px; }.quote-name strong { font-size: 11px; }.quote-name small { font-size: 8px; }.percent { padding: 3px 4px; }.market-footer { flex-wrap: wrap; padding-bottom: 3px; } }
@media (min-width: 821px) { .market-page { padding-top: 0; }.index-strip { overflow: visible; }.index-card { min-width: 0; }.quote-panel { padding-left: 20px; padding-right: 20px; } }
</style>
