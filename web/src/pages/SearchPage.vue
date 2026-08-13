<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getBoardQuotes, searchStocks } from '@/services/market'
import type { MarketBoardQuote, StockQuote } from '@/services/market-types'

import { useSearchHistoryStore } from '@/stores/search-history'

const route = useRoute()
const router = useRouter()
const searchHistory = useSearchHistoryStore()

const keyword = ref(typeof route.query.q === 'string' ? route.query.q : '')
const activeTab = ref<'all' | 'stock' | 'sector' | 'etf'>('all')
const stockResults = ref<StockQuote[]>([])
const sectorResults = ref<MarketBoardQuote[]>([])
const etfResults = ref<MarketBoardQuote[]>([])

const isLoading = ref(false)
const loadError = ref('')
let requestId = 0

// 搜索热词是产品入口，不代表额外的数据接口。
const hotSearches = ['宁德时代', '贵州茅台', '新能源', '创业板', 'ETF']
const resultTabs = [
  { key: 'all', label: '综合' },
  { key: 'stock', label: '股票' },
  { key: 'sector', label: '板块' },
  { key: 'etf', label: 'ETF' },

] as const

const hasQuery = computed(() => Boolean(keyword.value.trim()))
const history = computed(() => searchHistory.history.value)
const totalResults = computed(() => stockResults.value.length + sectorResults.value.length + etfResults.value.length)

function filterBoards(items: MarketBoardQuote[], query: string) {
  const normalized = query.toLowerCase()
  return items.filter((item) => item.name.toLowerCase().includes(normalized) || item.code.toLowerCase().includes(normalized))
}

async function loadResults(query: string) {
  const currentRequest = ++requestId
  isLoading.value = true
  loadError.value = ''
  stockResults.value = []
  sectorResults.value = []
  etfResults.value = []

  try {
    const [stocks, sectors, etfs] = await Promise.all([
      searchStocks(query),
      getBoardQuotes('板块'),
      getBoardQuotes('ETF'),
    ])
    if (currentRequest !== requestId) return
    stockResults.value = stocks
    sectorResults.value = filterBoards(sectors, query)
    etfResults.value = filterBoards(etfs, query)
  } catch {
    if (currentRequest === requestId) loadError.value = '搜索服务暂时不可用，请稍后重试。'
  } finally {
    if (currentRequest === requestId) isLoading.value = false
  }
}

function resetResults() {
  requestId += 1
  isLoading.value = false
  loadError.value = ''
  stockResults.value = []
  sectorResults.value = []
  etfResults.value = []
}

function submitSearch() {
  const query = keyword.value.trim()
  if (!query) {
    router.replace({ path: '/search' })
    resetResults()
    return
  }
  searchHistory.add(query)
  if (route.query.q !== query) {
    void router.replace({ path: '/search', query: { q: query } })
  } else {
    void loadResults(query)
  }
}

function selectKeyword(value: string) {
  keyword.value = value
  submitSearch()
}

function clearSearch() {
  keyword.value = ''
  void router.replace({ path: '/search' })
  resetResults()
}

function selectTab(tab: typeof activeTab.value) {
  activeTab.value = tab
}

function boardPath(type: 'sector' | 'etf') {
  return type === 'sector' ? '/sector' : '/etf'
}

watch(() => route.query.q, (value) => {
  const query = typeof value === 'string' ? value : ''
  keyword.value = query
  if (query.trim()) void loadResults(query.trim())
  else resetResults()
}, { immediate: true })
</script>

<template>
  <section class="search-page">
    <header class="search-header">
      <div class="search-title">
        <p class="eyebrow">SEARCH</p>
        <h1>搜索</h1>
      </div>
      <p class="search-hint">搜索股票、板块或 ETF</p>
    </header>

    <form class="search-box" @submit.prevent="submitSearch">
      <span class="search-icon" aria-hidden="true">⌕</span>
      <input v-model="keyword" type="search" autofocus placeholder="输入名称、代码或关键词" aria-label="搜索股票、板块或 ETF">
      <button v-if="keyword" type="button" class="clear-button" aria-label="清空搜索" @click="clearSearch">×</button>
      <button class="search-button" type="submit">搜索</button>
    </form>

    <template v-if="!hasQuery">
      <section class="home-section">
        <div class="section-heading"><h2>热门搜索</h2><span>POPULAR</span></div>
        <div class="hot-list">
          <button v-for="(item, index) in hotSearches" :key="item" class="hot-item" @click="selectKeyword(item)">
            <b :class="{ accent: index < 3 }">{{ index + 1 }}</b>{{ item }}<span>›</span>
          </button>
        </div>
      </section>

      <section v-if="history.length" class="home-section history-section">
        <div class="section-heading"><h2>搜索历史</h2><button class="text-button" @click="searchHistory.clear">清空</button></div>
        <div class="history-list">
          <button v-for="item in history" :key="item" class="history-item" @click="selectKeyword(item)"><span>◷</span>{{ item }}<i>›</i></button>
        </div>
      </section>

      <section v-else class="empty-history">
        <span>◷</span><p>搜索过的内容会显示在这里</p>
      </section>
    </template>

    <template v-else>
      <LoadingState v-if="isLoading" label="正在搜索" />
      <ErrorState v-else-if="loadError" title="搜索失败" :message="loadError" :retry="() => loadResults(keyword.trim())" />
      <template v-else>
        <nav class="result-tabs" aria-label="搜索结果分类">
          <button v-for="tab in resultTabs" :key="tab.key" :class="{ selected: activeTab === tab.key }" @click="selectTab(tab.key)">
            {{ tab.label }}<small>{{ tab.key === 'all' ? totalResults : tab.key === 'stock' ? stockResults.length : tab.key === 'sector' ? sectorResults.length : etfResults.length }}</small>
          </button>
        </nav>

        <div v-if="!totalResults" class="search-empty"><span>⌕</span><strong>没有找到相关结果</strong><p>请尝试搜索股票名称、代码或关键词。</p></div>
        <div v-else class="results">
          <section v-if="(activeTab === 'all' || activeTab === 'stock') && stockResults.length" class="result-section">
            <div class="section-heading"><h2>股票</h2><span>{{ stockResults.length }} 个结果</span></div>
            <RouterLink v-for="stock in stockResults" :key="stock.code" class="result-row" :to="`/stock/${stock.code}`">
              <span class="result-badge stock-badge">股</span><span class="result-copy"><strong>{{ stock.name }}</strong><small>{{ stock.code }} · {{ stock.volume }}</small></span><span class="result-quote mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.price }}<small>{{ stock.percent }}</small></span><i>›</i>
            </RouterLink>
          </section>

          <section v-if="(activeTab === 'all' || activeTab === 'sector') && sectorResults.length" class="result-section">
            <div class="section-heading"><h2>板块</h2><span>{{ sectorResults.length }} 个结果</span></div>
            <RouterLink v-for="item in sectorResults" :key="item.code" class="result-row" :to="boardPath('sector')">
              <span class="result-badge sector-badge">板</span><span class="result-copy"><strong>{{ item.name }}</strong><small>{{ item.code }} · {{ item.extra || '板块行情' }}</small></span><span class="result-quote mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</span><i>›</i>
            </RouterLink>
          </section>

          <section v-if="(activeTab === 'all' || activeTab === 'etf') && etfResults.length" class="result-section">
            <div class="section-heading"><h2>ETF</h2><span>{{ etfResults.length }} 个结果</span></div>
            <RouterLink v-for="item in etfResults" :key="item.code" class="result-row" :to="boardPath('etf')">
              <span class="result-badge etf-badge">ETF</span><span class="result-copy"><strong>{{ item.name }}</strong><small>{{ item.code }} · {{ item.price }}</small></span><span class="result-quote mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</span><i>›</i>
            </RouterLink>
          </section>


        </div>
      </template>
    </template>
  </section>
</template>

<style scoped>
.search-page { width: min(720px, 100%); min-height: calc(100vh - 120px); margin: 0 auto; color: var(--text); }
.search-header { display: flex; align-items: flex-end; justify-content: space-between; padding: 2px 2px 17px; }.eyebrow { color: var(--primary); font: 10px 'JetBrains Mono', monospace; letter-spacing: .14em; }.search-title h1 { margin-top: 5px; font-size: 23px; font-weight: 600; }.search-hint { color: var(--muted); font-size: 10px; }
.search-box { display: flex; align-items: center; gap: 8px; height: 42px; padding: 0 6px 0 12px; border: 1px solid #dce5f3; border-radius: 6px; background: var(--card); box-shadow: 0 3px 12px rgba(48,119,236,.06); }.search-icon { color: var(--primary); font-size: 21px; line-height: 1; }.search-box input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 12px; }.search-box input::placeholder { color: #aab2bf; }.clear-button { padding: 0 4px; border: 0; background: transparent; color: #aab2bf; font-size: 19px; }.search-button { height: 32px; padding: 0 15px; border: 0; border-radius: 4px; background: var(--primary); color: #fff; font-size: 11px; }
.home-section { margin-top: 25px; }.section-heading { display: flex; align-items: center; justify-content: space-between; margin-bottom: 11px; }.section-heading h2 { font-size: 15px; font-weight: 600; }.section-heading > span { color: #abb4c2; font: 9px 'JetBrains Mono', monospace; }.hot-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }.hot-item { display: flex; align-items: center; gap: 10px; min-height: 47px; padding: 0 12px; border: 1px solid var(--border); border-radius: 6px; background: var(--card); color: var(--text); text-align: left; font-size: 12px; }.hot-item b { color: #aeb7c4; font: 11px 'JetBrains Mono', monospace; }.hot-item b.accent { color: var(--primary); }.hot-item span { margin-left: auto; color: #b4bdca; font-size: 17px; }.history-section { padding-top: 23px; border-top: 1px solid var(--border); }.text-button { padding: 0; border: 0; background: transparent; color: var(--primary); font-size: 10px; }.history-list { overflow: hidden; padding: 0 13px; border: 1px solid var(--border); border-radius: 6px; background: var(--card); }.history-item { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 46px; border: 0; border-bottom: 1px solid var(--border); background: transparent; color: var(--text); text-align: left; font-size: 12px; }.history-item:last-child { border-bottom: 0; }.history-item span { color: #aab3c0; font-size: 15px; }.history-item i, .result-row > i, .news-row > i { margin-left: auto; color: #b5bdc9; font-size: 19px; font-style: normal; }.empty-history { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 23px; padding: 15px; color: #aab3c0; font-size: 10px; }.empty-history span { font-size: 16px; }
.result-tabs { display: flex; gap: 25px; margin-top: 22px; overflow-x: auto; border-bottom: 1px solid var(--border); scrollbar-width: none; }.result-tabs::-webkit-scrollbar { display: none; }.result-tabs button { position: relative; flex: 0 0 auto; padding: 11px 2px 10px; border: 0; background: transparent; color: var(--muted); font-size: 13px; }.result-tabs button.selected { color: var(--primary); font-weight: 600; }.result-tabs button.selected::after { position: absolute; right: 0; bottom: -1px; left: 0; height: 2px; border-radius: 2px; background: var(--primary); content: ''; }.result-tabs small { margin-left: 4px; color: #aab2bf; font: 9px 'JetBrains Mono', monospace; }.results { padding-bottom: 30px; }.result-section { margin-top: 21px; }.result-section .section-heading { margin-bottom: 7px; }.result-section .section-heading h2 { font-size: 13px; }.result-section .section-heading > span { font-family: inherit; }.result-row, .news-row { display: flex; align-items: center; gap: 10px; min-height: 65px; padding: 0 13px; border-bottom: 1px solid var(--border); background: var(--card); }.result-row:first-of-type, .news-row:first-of-type { border-top: 1px solid var(--border); }.result-row:hover, .news-row:hover, .hot-item:hover, .history-item:hover { background: #f8faff; }.result-badge { display: grid; flex: none; place-items: center; width: 31px; height: 31px; border-radius: 7px; font-size: 10px; }.stock-badge { background: #edf4ff; color: var(--primary); }.sector-badge { background: #fff3e7; color: #e08b3c; }.etf-badge { width: 37px; background: #f1efff; color: #8167c0; font-size: 8px; }.result-copy, .news-copy { display: grid; min-width: 0; gap: 5px; }.result-copy strong, .news-copy strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; font-weight: 500; }.result-copy small, .news-copy small { overflow: hidden; color: var(--muted); text-overflow: ellipsis; white-space: nowrap; font: 9px 'JetBrains Mono', monospace; }.result-quote { min-width: 52px; margin-left: auto; text-align: right; font-size: 11px; }.result-quote small { display: block; margin-top: 4px; font-size: 9px; }.news-tag { align-self: flex-start; margin-top: 22px; color: var(--primary); font-size: 10px; white-space: nowrap; }.news-copy { flex: 1; }.news-copy strong { white-space: normal; line-height: 1.45; }.search-empty { display: grid; place-items: center; min-height: 260px; color: var(--muted); text-align: center; }.search-empty span { color: var(--primary); font-size: 29px; }.search-empty strong { margin-top: 11px; color: var(--text); font-size: 14px; }.search-empty p { margin-top: 6px; font-size: 11px; }
@media (max-width: 560px) { .search-page { padding: 0 0 20px; }.search-header { align-items: flex-start; flex-direction: column; gap: 6px; padding-top: 0; }.search-hint { font-size: 10px; }.hot-list { grid-template-columns: 1fr; }.hot-item { min-height: 44px; }.search-box { height: 40px; }.search-button { padding: 0 13px; }.result-tabs { gap: 21px; }.result-row, .news-row { padding-right: 10px; padding-left: 10px; } }
</style>
