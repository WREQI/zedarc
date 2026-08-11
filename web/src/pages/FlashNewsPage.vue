<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getNewsArticles } from '@/services/news'
import type { NewsArticle } from '@/services/news-types'

const marketFilters = ['全部市场', '沪深', '港股', '美股']
const sessionFilters = ['全部时段', '盘前', '盘中', '盘后']
const news = ref<NewsArticle[]>([])
const keyword = ref('')
const activeMarket = ref('全部市场')
const activeSession = ref('全部时段')
const isLoading = ref(true)
const isRefreshing = ref(false)
const loadError = ref('')
const lastUpdated = ref('')
let refreshTimer: number | undefined

const today = computed(() => new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric' }).format(new Date()))

function getText(item: NewsArticle) {
  return `${item.title} ${item.summary} ${item.source} ${item.tag}`.toLowerCase()
}

function getMarket(item: NewsArticle) {
  const text = getText(item)
  if (/港股|香港|恒生|港交所|hkex/.test(text)) return '港股'
  if (/美股|美国|纳斯达克|标普|道琼斯|nyse|nasdaq/.test(text)) return '美股'
  return '沪深'
}

function getSession(item: NewsArticle) {
  const match = item.time.match(/(\d{1,2}):(\d{2})/)
  if (!match) return '盘中'
  const minutes = Number(match[1]) * 60 + Number(match[2])
  if (minutes < 9 * 60 + 30) return '盘前'
  if (minutes > 15 * 60) return '盘后'
  return '盘中'
}

function isImportant(item: NewsArticle) {
  return Boolean(item.featured) || ['要闻', '市场热点'].includes(item.tag)
}

const filteredNews = computed(() => {
  const search = keyword.value.trim().toLowerCase()
  return news.value.filter((item) => {
    const matchesKeyword = !search || getText(item).includes(search)
    const matchesMarket = activeMarket.value === '全部市场' || getMarket(item) === activeMarket.value
    const matchesSession = activeSession.value === '全部时段' || getSession(item) === activeSession.value
    return matchesKeyword && matchesMarket && matchesSession
  })
})

function updateTimestamp() {
  lastUpdated.value = new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date())
}

async function loadNews(showLoading = true) {
  if (showLoading) isLoading.value = true
  loadError.value = ''
  try {
    news.value = await getNewsArticles()
    updateTimestamp()
  } catch {
    loadError.value = '快讯暂时无法加载，请检查网络后重试。'
  } finally {
    isLoading.value = false
  }
}

async function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  try {
    await loadNews(false)
  } finally {
    isRefreshing.value = false
  }
}

onMounted(() => {
  loadNews()
  refreshTimer = window.setInterval(() => { refresh() }, 60_000)
})

onBeforeUnmount(() => {
  if (refreshTimer) window.clearInterval(refreshTimer)
})
</script>

<template>
  <section class="flash-news-page">
    <header class="flash-header">
      <div class="header-row">
        <div>
          <p class="eyebrow">LIVE MARKET NEWS</p>
          <h1>7×24 快讯</h1>
          <p class="header-hint"><i />实时更新 · {{ today }}</p>
        </div>
        <button class="refresh-button" :class="{ spinning: isRefreshing }" type="button" aria-label="刷新快讯" :disabled="isRefreshing" @click="refresh">↻</button>
      </div>
      <label class="search-box">
        <span aria-hidden="true">⌕</span>
        <input v-model="keyword" type="search" placeholder="搜索标题、来源或关键词" aria-label="搜索快讯">
        <button v-if="keyword" type="button" aria-label="清空搜索" @click="keyword = ''">×</button>
      </label>
      <div class="filter-group">
        <span class="filter-label">市场</span>
        <div class="filter-list" role="tablist" aria-label="市场筛选">
          <button v-for="filter in marketFilters" :key="filter" type="button" :class="{ active: activeMarket === filter }" @click="activeMarket = filter">{{ filter }}</button>
        </div>
      </div>
      <div class="filter-group session-group">
        <span class="filter-label">时段</span>
        <div class="filter-list" role="tablist" aria-label="交易时段筛选">
          <button v-for="filter in sessionFilters" :key="filter" type="button" :class="{ active: activeSession === filter }" @click="activeSession = filter">{{ filter }}</button>
        </div>
      </div>
    </header>

    <div class="list-heading">
      <div><strong>最新动态</strong><span v-if="filteredNews.length">{{ filteredNews.length }} 条</span></div>
      <time v-if="lastUpdated">更新于 {{ lastUpdated }}</time>
    </div>

    <LoadingState v-if="isLoading" label="正在加载实时快讯" />
    <ErrorState v-else-if="loadError" title="快讯加载失败" :message="loadError" :retry="loadNews" />
    <section v-else class="flash-list" aria-label="实时快讯列表">
      <RouterLink v-for="item in filteredNews" :key="item.id" class="flash-item" :class="{ important: isImportant(item) }" :to="`/news/${item.id}`">
        <div class="item-rail">
          <time>{{ item.time || '--:--' }}</time>
          <span class="rail-dot" />
        </div>
        <div class="item-content">
          <div class="item-meta">
            <b :class="{ high: isImportant(item) }">{{ isImportant(item) ? '重要' : '快讯' }}</b>
            <span>{{ getMarket(item) }}</span>
            <span>{{ getSession(item) }}</span>
            <span class="source">{{ item.source }}</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
        </div>
        <span class="arrow" aria-hidden="true">›</span>
      </RouterLink>
      <EmptyState v-if="!filteredNews.length" title="暂无相关快讯" message="换个关键词或筛选条件试试" icon="⌕" />
    </section>
    <p class="live-note"><span />数据每分钟自动刷新 · 点击快讯查看详情</p>
  </section>
</template>

<style scoped>
.flash-news-page { width: min(720px, 100%); min-height: 100%; margin: 0 auto; padding-bottom: 26px; color: var(--text); }
.flash-header { position: sticky; top: 0; z-index: 4; padding: 17px 14px 0; border-bottom: 1px solid var(--border); background: rgba(255,255,255,.97); box-shadow: 0 2px 12px rgba(52,91,140,.04); }
.header-row { display: flex; align-items: flex-start; justify-content: space-between; }.eyebrow { margin-bottom: 5px; color: var(--primary); font: 10px 'JetBrains Mono', monospace; letter-spacing: .1em; }.header-row h1 { font-size: 23px; font-weight: 600; letter-spacing: -.04em; }.header-hint { margin-top: 7px; color: var(--muted); font-size: 10px; }.header-hint i,.live-note span { display: inline-block; width: 6px; height: 6px; margin-right: 5px; border-radius: 50%; background: #55b586; box-shadow: 0 0 0 3px #e9f8f0; }
.refresh-button { width: 33px; height: 33px; border: 1px solid var(--border); border-radius: 50%; background: var(--card); color: var(--primary); font-size: 20px; line-height: 1; }.refresh-button:disabled { opacity: .65; }.spinning { animation: rotate .7s linear infinite; }
.search-box { display: flex; align-items: center; gap: 7px; height: 37px; margin-top: 15px; padding: 0 10px; border: 1px solid #e1e9f5; border-radius: 5px; background: #f7f9fc; color: var(--primary); font-size: 19px; }.search-box input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 12px; }.search-box input::placeholder { color: #aab4c2; }.search-box button { border: 0; background: transparent; color: var(--muted); font-size: 18px; }
.filter-group { display: flex; align-items: center; gap: 12px; min-height: 40px; }.session-group { border-top: 1px solid #f0f3f7; }.filter-label { flex: none; color: var(--muted); font-size: 10px; }.filter-list { display: flex; gap: 5px; overflow-x: auto; scrollbar-width: none; }.filter-list::-webkit-scrollbar { display: none; }.filter-list button { flex: 0 0 auto; padding: 5px 9px; border: 0; border-radius: 4px; background: transparent; color: var(--muted); font-size: 11px; white-space: nowrap; }.filter-list button.active { background: #edf4ff; color: var(--primary); font-weight: 600; }
.list-heading { display: flex; align-items: center; justify-content: space-between; padding: 15px 14px 9px; }.list-heading div { display: flex; align-items: baseline; gap: 8px; }.list-heading strong { font-size: 15px; }.list-heading span,.list-heading time { color: var(--muted); font-size: 10px; }.list-heading time { font: 9px 'JetBrains Mono', monospace; }
.flash-list { overflow: hidden; background: var(--card); border-top: 1px solid var(--border); }.flash-item { display: grid; grid-template-columns: 44px minmax(0,1fr) 12px; gap: 10px; padding: 15px 14px 14px; border-bottom: 1px solid var(--border); color: inherit; }.flash-item.important { background: linear-gradient(90deg,#fffdf8 0,#fff 33%); }.item-rail { position: relative; color: #a3adbb; font: 10px 'JetBrains Mono', monospace; }.item-rail time { display: block; padding-top: 1px; }.rail-dot { position: absolute; top: 4px; right: 0; width: 6px; height: 6px; border: 2px solid #dce5f1; border-radius: 50%; background: #fff; }.important .rail-dot { border-color: #f2b24d; background: #fff8e8; }.item-content { min-width: 0; }.item-meta { display: flex; align-items: center; gap: 7px; overflow: hidden; color: var(--muted); font-size: 9px; white-space: nowrap; }.item-meta b { padding: 2px 5px; border-radius: 3px; background: #edf4ff; color: var(--primary); font-size: 9px; font-weight: 400; }.item-meta b.high { background: #fff4df; color: #c98523; }.item-meta .source { overflow: hidden; text-overflow: ellipsis; }.item-content h2 { margin-top: 7px; font-size: 13px; font-weight: 500; line-height: 1.5; }.item-content p { display: -webkit-box; overflow: hidden; margin-top: 5px; color: var(--muted); font-size: 11px; line-height: 1.65; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }.arrow { align-self: center; color: #b4becb; font-size: 20px; }
.live-note { padding: 15px 14px 0; color: #a1aab7; font-size: 9px; text-align: center; }.live-note span { width: 5px; height: 5px; box-shadow: none; }
@keyframes rotate { to { transform: rotate(360deg); } }
@media (min-width: 721px) { .flash-header,.flash-list { border-right: 1px solid var(--border); border-left: 1px solid var(--border); } }
@media (max-width: 420px) { .flash-header { padding-right: 12px; padding-left: 12px; }.flash-item { grid-template-columns: 40px minmax(0,1fr) 10px; gap: 8px; padding-right: 11px; padding-left: 11px; }.item-meta { gap: 5px; }.item-meta .source { max-width: 70px; }.list-heading { padding-right: 12px; padding-left: 12px; }.list-heading time { display: none; } }
@media (prefers-reduced-motion: reduce) { .spinning { animation: none; } }
</style>
