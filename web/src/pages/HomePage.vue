<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getIndexQuotes, getMarketStocks } from '@/services/market'
import { getNewsArticles } from '@/services/news'
import type { IndexQuote, StockQuote } from '@/services/market-types'
import type { NewsArticle } from '@/services/news-types'

const indices = ref<IndexQuote[]>([])
const stocks = ref<StockQuote[]>([])
const news = ref<NewsArticle[]>([])
const isLoading = ref(true)
const isRefreshing = ref(false)
const loadError = ref('')
const updatedAt = ref('—')

const featuredIndices = computed(() => indices.value.slice(0, 3))
const marketStocks = computed(() => stocks.value.slice(0, 8))
const marketDirection = computed(() => {
  const rising = indices.value.filter((index) => index.trend === 'up').length
  if (!indices.value.length) return '等待行情'
  return rising >= Math.ceil(indices.value.length / 2) ? '市场偏强' : '市场偏弱'
})

async function loadHome() {
  isLoading.value = true
  loadError.value = ''
  try {
    const [indexData, stockData, newsData] = await Promise.all([
      getIndexQuotes(),
      getMarketStocks(),
      getNewsArticles(),
    ])
    indices.value = indexData
    stocks.value = stockData
    news.value = newsData.slice(0, 4)
    updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  } catch {
    loadError.value = '首页数据暂时无法加载，请稍后重试。'
  } finally {
    isLoading.value = false
  }
}

function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadHome().finally(() => { isRefreshing.value = false })
}

function changeClass(trend: StockQuote['trend'] | IndexQuote['trend']) {
  return trend === 'up' ? 'text-up' : 'text-down'
}

onMounted(loadHome)
</script>

<template>
  <section class="home-page">
    <header class="home-header">
      <div>
        <p class="home-kicker">ZEDARC · MARKET</p>
        <h1>早上好，今天看什么？</h1>
        <p class="home-subtitle">自选、行情和资讯，一页掌握市场动态</p>
      </div>
      <button class="refresh-button" :class="{ loading: isRefreshing }" :disabled="isRefreshing" aria-label="刷新首页数据" @click="refresh">
        <span aria-hidden="true">↻</span>
        <span>{{ isRefreshing ? '刷新中' : '刷新' }}</span>
      </button>
    </header>

    <LoadingState v-if="isLoading" label="正在加载首页数据" />
    <ErrorState v-else-if="loadError" title="首页加载失败" :message="loadError" :retry="loadHome" />
    <template v-else>
      <section class="market-summary" aria-label="市场摘要">
        <div class="summary-title"><div><span class="summary-dot" /> 今日市场</div><span class="summary-time">更新于 {{ updatedAt }}</span></div>
        <div class="summary-main"><strong>{{ marketDirection }}</strong><span>主要指数实时表现</span></div>
        <div class="summary-indexes">
          <article v-for="index in featuredIndices" :key="index.code" class="summary-index">
            <div><span>{{ index.name }}</span><small>{{ index.code }}</small></div>
            <strong :class="changeClass(index.trend)">{{ index.value }}</strong>
            <span :class="changeClass(index.trend)">{{ index.percent }}</span>
          </article>
          <div v-if="!featuredIndices.length" class="summary-empty">暂无指数数据</div>
        </div>
      </section>

      <section class="quick-entry" aria-label="快捷入口">
        <RouterLink to="/watchlist"><span class="entry-icon star-icon">☆</span><span><strong>我的自选</strong><small>关注的股票</small></span><b>›</b></RouterLink>
        <RouterLink to="/market"><span class="entry-icon chart-icon">↗</span><span><strong>全部行情</strong><small>实时市场排行</small></span><b>›</b></RouterLink>
        <RouterLink to="/news"><span class="entry-icon news-icon">▤</span><span><strong>市场资讯</strong><small>热点与快讯</small></span><b>›</b></RouterLink>
      </section>

      <section class="home-section">
        <div class="section-heading"><div><h2>行情速览</h2><p>实时关注热门标的</p></div><RouterLink to="/market">全部行情 <span>›</span></RouterLink></div>
        <div v-if="marketStocks.length" class="quote-list">
          <RouterLink v-for="stock in marketStocks" :key="stock.code" class="quote-item" :to="`/stock/${stock.code}`">
            <span class="quote-rank">{{ String(marketStocks.indexOf(stock) + 1).padStart(2, '0') }}</span>
            <span class="quote-name"><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
            <span class="quote-price mono">{{ stock.price }}</span>
            <span class="quote-change mono" :class="changeClass(stock.trend)">{{ stock.percent }}<small>{{ stock.change }}</small></span>
            <span class="quote-arrow">›</span>
          </RouterLink>
        </div>
        <EmptyState v-else title="暂无行情数据" message="行情服务暂时没有返回可展示的标的。" icon="⌁" />
      </section>

      <section class="home-section news-section">
        <div class="section-heading"><div><h2>市场资讯</h2><p>快速了解今天发生了什么</p></div><RouterLink to="/news">更多资讯 <span>›</span></RouterLink></div>
        <div v-if="news.length" class="news-list">
          <RouterLink v-for="item in news" :key="item.id" class="news-item" :to="`/news/${item.id}`">
            <span class="news-time">{{ item.time || '—' }}</span>
            <span class="news-content"><strong>{{ item.title }}</strong><small><em>{{ item.tag }}</em>{{ item.source }}</small></span>
            <span class="quote-arrow">›</span>
          </RouterLink>
        </div>
        <EmptyState v-else title="暂无市场资讯" message="稍后刷新，获取最新市场动态。" icon="◌" />
      </section>

      <p class="home-disclaimer">行情数据仅供参考 · 投资有风险，入市需谨慎</p>
    </template>
  </section>
</template>

<style scoped>
.home-page { max-width: 760px; margin: 0 auto; padding: 4px 0 28px; }
.home-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; padding: 12px 2px 20px; }
.home-kicker { color: var(--primary); font: 10px 'JetBrains Mono', monospace; letter-spacing: .12em; }
.home-header h1 { color: var(--text); font-size: 23px; letter-spacing: -.03em; margin-top: 8px; }
.home-subtitle { color: var(--muted); font-size: 11px; margin-top: 7px; }
.refresh-button { display: inline-flex; align-items: center; gap: 5px; color: var(--primary); background: var(--card); border: 1px solid var(--border); border-radius: 5px; padding: 8px 11px; font-size: 11px; white-space: nowrap; }
.refresh-button span:first-child { font-size: 17px; line-height: 11px; }.refresh-button.loading span:first-child { animation: rotate .7s linear infinite; }.refresh-button:disabled { opacity: .65; cursor: wait; }
.market-summary { overflow: hidden; background: linear-gradient(135deg, var(--card), var(--card-soft)); border: 1px solid var(--border); border-radius: 6px; padding: 16px; }
.summary-title, .summary-main, .summary-index > div { display: flex; align-items: center; justify-content: space-between; }.summary-title { color: var(--muted); font-size: 11px; }.summary-dot { display: inline-block; width: 6px; height: 6px; margin-right: 6px; background: var(--up); border-radius: 50%; }.summary-time { font: 10px 'JetBrains Mono', monospace; }
.summary-main { align-items: flex-end; padding: 18px 0 14px; }.summary-main strong { color: var(--text); font-size: 20px; }.summary-main span { color: var(--muted); font-size: 10px; }.summary-indexes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }.summary-index { min-width: 0; padding: 10px; background: rgba(255,255,255,.56); border-radius: 4px; }.summary-index > div { gap: 4px; justify-content: flex-start; }.summary-index span:first-child { overflow: hidden; color: var(--text); font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }.summary-index small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; }.summary-index strong { display: block; font: 600 14px 'JetBrains Mono', monospace; margin: 8px 0 4px; }.summary-index > span { font: 10px 'JetBrains Mono', monospace; }.summary-empty { color: var(--muted); grid-column: 1 / -1; padding: 12px; text-align: center; font-size: 11px; }
.quick-entry { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 12px 0 24px; }.quick-entry a { display: flex; align-items: center; gap: 8px; min-width: 0; color: var(--text); background: var(--card); border: 1px solid var(--border); border-radius: 5px; padding: 12px 9px; }.quick-entry a > span:nth-child(2) { min-width: 0; }.entry-icon { display: grid; flex: 0 0 28px; place-items: center; width: 28px; height: 28px; border-radius: 5px; font-size: 18px; }.star-icon { color: var(--gold); background: rgba(217,157,30,.12); }.chart-icon { color: var(--primary); background: rgba(37,111,220,.1); }.news-icon { color: #8b63c7; background: rgba(139,99,199,.11); }.quick-entry strong, .quick-entry small { display: block; }.quick-entry strong { font-size: 11px; white-space: nowrap; }.quick-entry small { overflow: hidden; color: var(--muted); font-size: 9px; margin-top: 4px; text-overflow: ellipsis; white-space: nowrap; }.quick-entry b { margin-left: auto; color: var(--muted); font-size: 16px; font-weight: 400; }
.home-section { margin-top: 24px; }.section-heading { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 10px; }.section-heading h2 { color: var(--text); font-size: 16px; }.section-heading p { color: var(--muted); font-size: 10px; margin-top: 4px; }.section-heading a { color: var(--primary); font-size: 10px; }.section-heading a span { font-size: 15px; vertical-align: -1px; }
.quote-list, .news-list { overflow: hidden; background: var(--card); border: 1px solid var(--border); border-radius: 5px; }.quote-item, .news-item { display: flex; align-items: center; border-bottom: 1px solid var(--border); }.quote-item:last-child, .news-item:last-child { border-bottom: 0; }.quote-item { min-height: 64px; padding: 9px 12px; gap: 9px; }.quote-rank { width: 20px; color: #b3bac7; font: 10px 'JetBrains Mono', monospace; }.quote-name { flex: 1; min-width: 0; }.quote-name strong, .quote-name small { display: block; }.quote-name strong { overflow: hidden; color: var(--text); font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }.quote-name small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; margin-top: 4px; }.quote-price { width: 68px; color: var(--text); font-size: 12px; text-align: right; }.quote-change { width: 64px; font-size: 11px; text-align: right; }.quote-change small { display: block; font-size: 9px; margin-top: 4px; opacity: .8; }.quote-arrow { color: #b3bac7; font-size: 17px; margin-left: 3px; }.text-up { color: var(--up); }.text-down { color: var(--down); }
.news-section { margin-top: 27px; }.news-item { gap: 11px; min-height: 65px; padding: 10px 12px; }.news-time { width: 34px; align-self: flex-start; color: var(--muted); font: 10px 'JetBrains Mono', monospace; padding-top: 3px; }.news-content { flex: 1; min-width: 0; }.news-content strong { display: block; overflow: hidden; color: var(--text); font-size: 12px; font-weight: 500; line-height: 1.5; text-overflow: ellipsis; white-space: nowrap; }.news-content small { display: flex; gap: 8px; color: var(--muted); font-size: 9px; margin-top: 6px; }.news-content em { color: var(--primary); font-style: normal; }.home-disclaimer { color: var(--muted); font-size: 9px; text-align: center; margin-top: 24px; }
@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 560px) { .home-page { padding: 0 0 24px; }.home-header { padding: 10px 2px 17px; }.home-header h1 { font-size: 20px; }.market-summary { border-radius: 0; margin: 0 -12px; padding: 15px 12px; }.quick-entry { gap: 6px; }.quick-entry a { padding: 11px 7px; }.entry-icon { flex-basis: 25px; width: 25px; height: 25px; }.quick-entry b { display: none; }.summary-index { padding: 9px 7px; }.summary-index small { display: none; }.quote-price { width: 58px; }.quote-change { width: 56px; } }
@media (prefers-reduced-motion: reduce) { .refresh-button.loading span:first-child { animation: none; } }
</style>
