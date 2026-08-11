<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { searchStocks } from '@/services/market'
import { useSearchHistoryStore } from '@/stores/search-history'

const route = useRoute()
const router = useRouter()
const keyword = ref(typeof route.query.q === 'string' ? route.query.q : '')
const activeTab = ref<'all' | 'stock' | 'news'>('all')
const searchHistory = useSearchHistoryStore()
const history = searchHistory.history
const stockResults = ref<Awaited<ReturnType<typeof searchStocks>>>([])
const isLoading = ref(false)
const loadError = ref('')
const news = [
  '两市成交额突破万亿，新能源板块持续走强',
  '政策预期升温，科技成长股迎来资金关注',
  '北向资金早盘净流入 42.6 亿元',
  '机构：关注盈利改善与产业趋势共振的公司',
]
const hotSearches = ['宁德时代', '贵州茅台', '新能源', '创业板', 'ETF']
const resultTabs = [
  { key: 'all', label: '全部' },
  { key: 'stock', label: '股票' },
  { key: 'news', label: '资讯' },
] as const

const newsResults = computed(() => {
  const query = keyword.value.trim()
  return query ? news.filter((item) => item.includes(query)) : []
})
const hasQuery = computed(() => Boolean(keyword.value.trim()))

async function submitSearch() {
  const query = keyword.value.trim()
  if (!query) { stockResults.value = []; return }
  searchHistory.add(query)
  router.replace({ path: '/search', query: { q: query } })
  isLoading.value = true
  loadError.value = ''
  try { stockResults.value = await searchStocks(query) } catch { loadError.value = '搜索服务暂时不可用，请稍后重试。' } finally { isLoading.value = false }
}
function selectKeyword(value: string) { keyword.value = value; void submitSearch() }
function clearHistory() { searchHistory.clear() }
function removeHistory(item: string) { searchHistory.remove(item) }
function selectTab(tab: 'all' | 'stock' | 'news') { activeTab.value = tab }
onMounted(() => { if (keyword.value) void submitSearch() })
</script>

<template>
  <section class="search-page"><div class="search-head"><RouterLink to="/" class="back-link">‹ 返回</RouterLink><label class="search-input"><span>⌕</span><input v-model="keyword" autofocus placeholder="搜索股票、资讯或代码" @keyup.enter="submitSearch" /><button v-if="keyword" aria-label="清除" @click="keyword = ''">×</button></label><button class="search-submit" @click="submitSearch">搜索</button></div>
    <template v-if="!hasQuery"><section class="search-section"><div class="search-section-title"><h2>热门搜索</h2></div><div class="hot-list"><button v-for="item in hotSearches" :key="item" @click="selectKeyword(item)">{{ item }}</button></div></section><section v-if="history.length" class="search-section"><div class="search-section-title"><h2>搜索历史</h2><button @click="clearHistory">清空</button></div><div class="history-list"><div v-for="item in history" :key="item" class="history-item"><button @click="selectKeyword(item)">◷ {{ item }}</button><button class="history-remove" :aria-label="`删除${item}`" @click.stop="removeHistory(item)">×</button></div></div></section></template>
    <LoadingState v-if="hasQuery && isLoading" label="正在搜索" />
    <ErrorState v-else-if="hasQuery && loadError" title="搜索失败" :message="loadError" :retry="submitSearch" />
    <template v-else><div class="result-tabs"><button v-for="tab in resultTabs" :key="tab.key" :class="{ selected: activeTab === tab.key }" @click="selectTab(tab.key)">{{ tab.label }} <small>{{ tab.key === 'stock' ? stockResults.length : tab.key === 'news' ? newsResults.length : stockResults.length + newsResults.length }}</small></button></div><section v-if="activeTab !== 'news' && stockResults.length" class="result-section"><p class="result-label">股票结果</p><RouterLink v-for="stock in stockResults" :key="stock.code" class="result-stock panel" :to="`/stock/${stock.code}`"><span class="result-icon">股</span><span><strong>{{ stock.name }}</strong><small>{{ stock.code }} · 沪深 A 股</small></span><span class="mono result-price" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.price }}<small>{{ stock.change }} {{ stock.percent }}</small></span><span class="result-arrow">›</span></RouterLink></section><section v-if="activeTab !== 'stock' && newsResults.length" class="result-section"><p class="result-label">资讯结果</p><article v-for="item in newsResults" :key="item" class="result-news panel"><span class="news-tag">资讯</span><strong>{{ item }}</strong><small>今日 14:32 · 腾讯自选股</small></article></section><div v-if="!stockResults.length && !newsResults.length" class="search-empty"><span>⌕</span><strong>没有找到相关结果</strong><p>请尝试搜索股票名称、代码或资讯关键词。</p></div></template>
  </section>
</template>

<style scoped>
.search-page { max-width: 720px; margin: 0 auto; }.search-head { display: flex; align-items: center; gap: 10px; margin-bottom: 25px; }.back-link { color: var(--primary); font-size: 12px; }.search-input { flex: 1; display: flex; align-items: center; gap: 8px; background: var(--card); border: 1px solid var(--primary); border-radius: 4px; padding: 10px 12px; color: var(--muted); }.search-input input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 12px; }.search-input button { border: 0; background: transparent; color: var(--muted); font-size: 17px; }.search-submit { color: #fff; background: var(--primary); border: 0; border-radius: 4px; padding: 11px 17px; font-size: 12px; }.search-section { padding: 20px 0; border-bottom: 1px solid var(--border); }.search-section-title, .result-tabs { display: flex; align-items: center; justify-content: space-between; }.search-section-title h2 { font-size: 14px; }.search-section-title button { color: var(--muted); background: transparent; border: 0; font-size: 10px; }.hot-list { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 16px; }.hot-list button, .history-list button { color: var(--muted); background: var(--card); border: 1px solid var(--border); border-radius: 3px; padding: 8px 12px; font-size: 11px; }.history-list { display: grid; gap: 8px; margin-top: 14px; }.history-item { display: flex; align-items: center; background: var(--card); border: 1px solid var(--border); border-radius: 3px; }.history-item button:first-child { flex: 1; color: var(--muted); text-align: left; border: 0; background: transparent; padding: 8px 12px; font-size: 11px; }.history-remove { color: var(--muted); border: 0; background: transparent; padding: 5px 10px; font-size: 16px; }.history-remove:hover { color: var(--up); }.result-tabs { justify-content: flex-start; gap: 25px; border-bottom: 1px solid var(--border); }.result-tabs button { position: relative; color: var(--muted); border: 0; background: transparent; padding: 12px 2px; font-size: 12px; }.result-tabs button.selected { color: var(--text); font-weight: 600; }.result-tabs button.selected::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: var(--primary); }.result-tabs small { font: 10px 'JetBrains Mono', monospace; margin-left: 3px; }.result-section { margin-top: 20px; }.result-label { color: var(--muted); font-size: 11px; margin-bottom: 9px; }.result-stock { display: flex; align-items: center; gap: 11px; padding: 14px 16px; margin-bottom: 7px; }.result-icon { width: 27px; height: 27px; display: grid; place-items: center; color: var(--primary); background: #edf4ff; border-radius: 4px; font-size: 10px; }.result-stock strong, .result-stock small, .result-news strong, .result-news small { display: block; }.result-stock strong { font-size: 12px; }.result-stock small { color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 4px; }.result-price { margin-left: auto; text-align: right; font-size: 12px; }.result-price small { display: block; font-size: 10px; margin-top: 4px; }.result-arrow { color: var(--muted); font-size: 20px; }.result-news { display: grid; gap: 7px; padding: 15px 16px; margin-bottom: 7px; }.result-news strong { font-size: 12px; }.result-news small { color: var(--muted); font-size: 10px; }.search-empty { padding: 90px 20px; text-align: center; color: var(--muted); }.search-empty span { display: block; color: var(--primary); font-size: 30px; }.search-empty strong { display: block; color: var(--text); font-size: 13px; margin: 11px 0 6px; }.search-empty p { font-size: 11px; }
@media (max-width: 640px) { .search-head { align-items: stretch; flex-wrap: wrap; }.search-head .back-link { align-self: center; }.search-input { order: 2; flex-basis: calc(100% - 57px); }.search-submit { order: 2; } }
</style>
