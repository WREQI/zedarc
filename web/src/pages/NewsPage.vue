<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { newsCategories, type NewsArticle } from '@/mock/news'
import { getNewsArticles } from '@/services/news'
import { useFavoritesStore } from '@/stores/favorites'

const route = useRoute()
const router = useRouter()
const categories = newsCategories
const activeCategory = ref('全部')
const savedOnly = ref(route.query.saved === '1')
const isRefreshing = ref(false)
const isLoading = ref(true)
const loadError = ref('')
const favorites = useFavoritesStore()
const savedNews = favorites.savedIds
const news = ref<NewsArticle[]>([])

const filteredNews = computed(() => {
  const source = savedOnly.value ? news.value.filter((item) => savedNews.value.includes(item.id)) : news.value
  return activeCategory.value === '全部' ? source : source.filter((item) => item.tag === activeCategory.value || (activeCategory.value === '市场' && item.tag === '市场热点'))
})

function showAllNews() { savedOnly.value = false; activeCategory.value = '全部'; router.replace('/news') }
function showSavedNews() { savedOnly.value = true; router.replace('/news?saved=1') }
function selectCategory(category: string) { activeCategory.value = category; savedOnly.value = false; router.replace('/news') }

async function loadNews() {
  isLoading.value = true
  loadError.value = ''
  try { news.value = await getNewsArticles() } catch { loadError.value = '资讯暂时无法加载，请稍后重试。' } finally { isLoading.value = false }
}
function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadNews().finally(() => { isRefreshing.value = false })
}

onMounted(() => { loadNews() })

function toggleSave(id: number) { favorites.toggle(id) }
</script>

<template>
  <section class="news-page">
    <div class="news-nav panel"><div class="news-tabs"><button :class="{ selected: !savedOnly && activeCategory === '全部' }" @click="showAllNews">全部</button><button :class="{ selected: savedOnly }" @click="showSavedNews">收藏 <small v-if="savedNews.length">{{ savedNews.length }}</small></button><button v-for="category in categories" :key="category" :class="{ selected: !savedOnly && activeCategory === category }" @click="selectCategory(category)">{{ category }}</button></div><div class="news-actions"><button class="news-action">☷</button><button class="news-action" :class="{ loading: isRefreshing }" @click="refresh">↻</button></div></div>
    <div class="news-date">今日 · 2026年08月10日</div>
    <LoadingState v-if="isLoading" label="正在加载资讯" />
    <ErrorState v-else-if="loadError" title="资讯加载失败" :message="loadError" :retry="loadNews" />
    <section v-else class="news-list">
      <article v-for="item in filteredNews" :key="item.id" class="news-item panel" :class="{ featured: item.featured, 'video-item': item.video }"><div class="news-item-meta"><span class="news-tag">{{ item.tag }}</span><time>{{ item.time }}</time><span>{{ item.source }}</span></div><RouterLink class="news-title-link" :to="`/news/${item.id}`"><h2>{{ item.title }}</h2></RouterLink><p>{{ item.summary }}</p><div v-if="item.video" class="video-preview"><span>▶</span><small>播放视频 · 03:28</small></div><div class="news-item-footer"><span>阅读 1.2k</span><button :class="{ saved: savedNews.includes(item.id) }" @click="toggleSave(item.id)">{{ savedNews.includes(item.id) ? '★ 已收藏' : '☆ 收藏' }}</button><button>分享 ↗</button></div></article>
      <EmptyState v-if="!filteredNews.length" title="暂无该栏目内容" message="下拉刷新试试" icon="◌" />
    </section>
  </section>
</template>

<style scoped>
.news-page { max-width: 820px; margin: 0 auto; }.news-nav { display: flex; align-items: center; justify-content: space-between; padding: 0 15px 0 0; border-radius: 0; }.news-tabs { display: flex; overflow-x: auto; }.news-tabs::-webkit-scrollbar { display: none; }.news-tabs button { position: relative; color: var(--muted); background: transparent; border: 0; padding: 16px 17px; font-size: 14px; white-space: nowrap; }.news-tabs button:first-child { padding-left: 20px; }.news-tabs button.selected { color: var(--text); font-weight: 600; }.news-tabs button small { color: var(--primary); font: 10px 'JetBrains Mono', monospace; margin-left: 3px; }.news-tabs button.selected::after { content: ''; position: absolute; left: 50%; bottom: 5px; width: 18px; height: 3px; border-radius: 3px; background: var(--primary); transform: translateX(-50%); }.news-actions { display: flex; gap: 12px; }.news-action { color: var(--muted); background: transparent; border: 0; font-size: 19px; }.news-action.loading { animation: rotate .7s linear infinite; color: var(--primary); }.news-date { color: var(--muted); background: var(--bg); font-size: 11px; padding: 14px 4px 9px; }.news-list { display: grid; gap: 10px; }.news-item { padding: 18px 20px; border-radius: 3px; }.news-item.featured { border-left: 3px solid var(--primary); }.video-item { border-left: 3px solid var(--gold); }.video-preview { display: flex; align-items: center; gap: 10px; color: var(--primary); background: linear-gradient(90deg, #edf4ff, #f8fbff); padding: 17px; margin-top: 14px; }.video-preview span { display: grid; place-items: center; width: 28px; height: 28px; color: #fff; background: var(--primary); border-radius: 50%; font-size: 11px; padding-left: 2px; }.video-preview small { color: var(--muted); font-size: 10px; }.news-item-meta { display: flex; gap: 10px; align-items: center; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.news-tag { color: var(--primary); }.news-title-link { color: var(--text); }.news-item h2 { color: var(--text); font-size: 16px; line-height: 1.5; margin-top: 10px; }.news-title-link:hover h2 { color: var(--primary); }.news-item p { color: var(--muted); font-size: 12px; line-height: 1.7; margin-top: 7px; }.news-item-footer { display: flex; align-items: center; gap: 16px; color: var(--muted); font-size: 10px; margin-top: 16px; }.news-item-footer button { color: var(--muted); background: transparent; border: 0; font-size: 10px; }.news-item-footer button:first-of-type { margin-left: auto; }.news-item-footer button.saved { color: var(--gold); }.news-empty { color: var(--muted); text-align: center; padding: 80px 20px; }.news-empty span { display: block; color: var(--primary); font-size: 28px; }.news-empty strong { display: block; color: var(--text); font-size: 13px; margin: 10px 0 5px; }.news-empty p { font-size: 11px; }@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 640px) { .news-nav { padding-right: 8px; }.news-tabs button { padding-left: 12px; padding-right: 12px; }.news-item { padding: 16px; }.news-item h2 { font-size: 15px; } }
</style>
