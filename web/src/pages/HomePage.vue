<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import { getIndexQuotes, getMarketStocks } from '@/services/market'
import { getNewsArticles } from '@/services/news'
import type { IndexQuote, StockQuote } from '@/mock/market'
import type { NewsArticle } from '@/mock/news'

const router = useRouter()
const indices = ref<IndexQuote[]>([])
const stocks = ref<StockQuote[]>([])
const news = ref<NewsArticle[]>([])
const isLoading = ref(true)
const error = ref('')
const isRefreshing = ref(false)
const updatedAt = ref('14:32')
const rising = computed(() => [...stocks.value].filter((stock) => stock.trend === 'up').sort((a, b) => Number.parseFloat(b.percent) - Number.parseFloat(a.percent)).slice(0, 4))
const falling = computed(() => [...stocks.value].filter((stock) => stock.trend === 'down').sort((a, b) => Number.parseFloat(a.percent) - Number.parseFloat(b.percent)).slice(0, 4))

async function load() {
  isLoading.value = true
  error.value = ''
  try {
    const [indexData, stockData, newsData] = await Promise.all([getIndexQuotes(), getMarketStocks(), getNewsArticles()])
    indices.value = indexData
    stocks.value = stockData
    news.value = newsData.slice(0, 4)
    updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  } catch { error.value = '首页数据暂时无法加载，请稍后重试。' } finally { isLoading.value = false }
}
function refresh() { if (isRefreshing.value) return; isRefreshing.value = true; load().finally(() => { isRefreshing.value = false }) }
onMounted(load)
</script>

<template>
  <section class="home-page">
    <div class="page-heading"><div><p class="eyebrow">MARKET DESK / TODAY</p><h1>市场工作台</h1><p class="muted">关注市场脉搏，快速发现今日机会。</p></div><button class="secondary-button refresh-home" :disabled="isRefreshing" @click="refresh">{{ isRefreshing ? '刷新中…' : '刷新行情 ↻' }}</button></div>
    <LoadingState v-if="isLoading" label="正在加载市场数据" />
    <ErrorState v-else-if="error" title="首页加载失败" :message="error" :retry="load" />
    <template v-else>
      <section class="index-grid"><article v-for="index in indices" :key="index.code" class="panel index-card"><div class="card-top"><span>{{ index.name }}</span><span class="code">{{ index.code }}</span></div><strong :class="index.trend === 'up' ? 'text-up' : 'text-down'">{{ index.value }}</strong><div class="quote-change" :class="index.trend === 'up' ? 'text-up' : 'text-down'"><span>{{ index.change }}</span><span>{{ index.percent }}</span></div><span class="sparkline">▁▃▂▅▄▆</span></article></section>
      <div class="dashboard-grid"><section class="panel table-panel"><div class="panel-heading"><h2>涨幅榜</h2><RouterLink class="text-button" to="/market">查看全部 →</RouterLink></div><div class="table-header"><span>股票</span><span>最新价</span><span>涨跌幅</span><span>成交额</span></div><RouterLink v-for="(stock, index) in rising" :key="stock.code" class="stock-row" :to="`/stock/${stock.code}`"><span class="stock-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span><span class="mono">{{ stock.price }}</span><span class="mono text-up">{{ stock.percent }}</span><span class="mono muted">{{ stock.volume }}</span></RouterLink><div v-if="!rising.length" class="home-empty">暂无涨幅数据</div></section><section class="panel table-panel"><div class="panel-heading"><h2>跌幅榜</h2><RouterLink class="text-button" to="/market">查看全部 →</RouterLink></div><div class="table-header"><span>股票</span><span>最新价</span><span>涨跌幅</span><span>成交额</span></div><RouterLink v-for="(stock, index) in falling" :key="stock.code" class="stock-row" :to="`/stock/${stock.code}`"><span class="stock-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span><span class="mono">{{ stock.price }}</span><span class="mono text-down">{{ stock.percent }}</span><span class="mono muted">{{ stock.volume }}</span></RouterLink><div v-if="!falling.length" class="home-empty">暂无跌幅数据</div></section></div>
      <section class="panel news-panel"><div class="panel-heading"><h2>市场快讯</h2><RouterLink class="text-button" to="/news">更多资讯 →</RouterLink></div><RouterLink v-for="item in news" :key="item.id" class="news-row" :to="`/news/${item.id}`"><time>{{ item.time }}</time><div><span class="news-tag">{{ item.tag }}</span><p>{{ item.title }}</p></div></RouterLink><div v-if="!news.length" class="home-empty">暂无市场资讯</div></section>
      <p class="home-footer">数据更新于 {{ updatedAt }} · 行情仅供参考，投资需谨慎</p>
    </template>
  </section>
</template>

<style scoped>
.home-page { max-width: 1120px; margin: 0 auto; }.refresh-home:disabled { opacity: .6; cursor: wait; }.home-empty { color: var(--muted); text-align: center; padding: 28px 0; font-size: 11px; }.home-footer { color: var(--muted); font-size: 10px; text-align: right; margin-top: 12px; }
@media (max-width: 820px) { .home-page .page-heading { flex-direction: row; align-items: center; }.home-page .page-heading h1 { font-size: 22px; }.refresh-home { white-space: nowrap; }.home-footer { text-align: center; } }
</style>
