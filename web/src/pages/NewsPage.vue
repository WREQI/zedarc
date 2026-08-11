<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { newsCategories, type NewsArticle } from '@/services/news-types'
import { getNewsArticles, isNewsFavoriteAuthError } from '@/services/news'
import NewsFavoritesPage from './NewsFavoritesPage.vue'
import NewsRecommendPage from './NewsRecommendPage.vue'
import NewsTopicsPage from './NewsTopicsPage.vue'
import NewsTopicDetailPage from './NewsTopicDetailPage.vue'
import PageHeader from '@/components/PageHeader.vue'

import { useFavoritesStore } from '@/stores/favorites'
import { useNewsRecommendationsStore } from '@/stores/news-recommendations'

const route = useRoute()
const router = useRouter()
const categories = newsCategories
const activeCategory = ref('全部')
const keyword = ref('')
const tag = ref('')
const savedOnly = ref(route.query.saved === '1')
const isRefreshing = ref(false)
const isLoading = ref(true)
const loadError = ref('')
const favorites = useFavoritesStore()
const recommendationStore = useNewsRecommendationsStore()
const savedNews = favorites.savedIds
const news = ref<NewsArticle[]>([])
const tags = computed(() => [...new Set(news.value.map((item) => item.tag).filter(Boolean))])
const favoriteMessage = ref('')
let favoriteMessageTimer: number | undefined

const isVideoView = computed(() => route.query.view === 'videos')
const filteredNews = computed(() => {
  const source = savedOnly.value ? news.value.filter((item) => savedNews.value.includes(item.id)) : news.value
  const categoryNews = isVideoView.value
    ? source.filter((item) => item.video || item.videoUrl)
    : activeCategory.value === '全部'
      ? source
      : source.filter((item) => item.tag === activeCategory.value || (activeCategory.value === '市场' && item.tag === '市场热点'))
  const search = keyword.value.trim().toLowerCase()
  const tagNews = tag.value ? categoryNews.filter((item) => item.tag === tag.value) : categoryNews
  return search
    ? tagNews.filter((item) => `${item.title} ${item.summary} ${item.source} ${(item.codes || []).join(' ')}`.toLowerCase().includes(search))
    : tagNews
})

function showAllNews() { savedOnly.value = false; activeCategory.value = '全部'; router.replace('/news') }
function showVideos() { savedOnly.value = false; activeCategory.value = '视频'; router.replace('/news?view=videos') }
function showRecommendations() { savedOnly.value = false; router.replace('/news?view=recommendations') }
function showSavedNews() { router.replace('/news?view=favorites') }
function selectCategory(category: string) { activeCategory.value = category; savedOnly.value = false; router.replace('/news') }

async function loadNews() {
  isLoading.value = true
  loadError.value = ''
  try { await recommendationStore.hydrate(); news.value = (await getNewsArticles({ keyword: keyword.value.trim() || undefined, page: 1, pageSize: 100 })).filter((item) => !recommendationStore.isBlocked(item)) } catch { news.value = []; loadError.value = '资讯暂时无法加载，请稍后重试。' } finally { isLoading.value = false }
}
function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadNews().finally(() => { isRefreshing.value = false })
}

onMounted(() => { loadNews() })
function showFavoriteMessage(message: string) { favoriteMessage.value = message; window.clearTimeout(favoriteMessageTimer); favoriteMessageTimer = window.setTimeout(() => { favoriteMessage.value = '' }, 2200) }
async function toggleSave(id: string) {
  try { await favorites.toggle(id) }
  catch (error) { showFavoriteMessage(isNewsFavoriteAuthError(error) ? '登录状态已失效，请重新登录后收藏。' : '收藏同步失败，请稍后重试。') }
}
async function hideArticle(id: string) { await recommendationStore.feedback({ newsId: id, action: 'dislike' }); news.value = news.value.filter((item) => item.id !== id) }
async function resetPreferences() { await recommendationStore.reset(); await loadNews() }
</script>

<template>
  <NewsRecommendPage v-if="route.query.view === 'recommendations'" />
  <NewsFavoritesPage v-else-if="route.query.view === 'favorites'" />
  <NewsTopicsPage v-else-if="route.query.view === 'topics'" />
  <NewsTopicDetailPage v-else-if="route.query.topic" :topic-id="String(route.query.topic)" />
  <section v-else class="news-page">
    <header class="news-header">
      <PageHeader eyebrow="INFORMATION" title="资讯">
        <template #actions><div class="heading-actions"><button v-if="recommendationStore.count" class="text-button" @click="resetPreferences">恢复屏蔽</button><button class="refresh-button" :class="{ loading: isRefreshing }" aria-label="刷新资讯" @click="refresh">↻</button></div></template>
      </PageHeader>

      <label class="tag-filter"><span>标签</span><select v-model="tag"><option value="">全部标签</option><option v-for="item in tags" :key="item" :value="item">{{ item }}</option></select></label>
      <nav class="category-bar" aria-label="资讯分类">
        <button :class="{ selected: route.query.view === 'recommendations' }" @click="showRecommendations">个性化推荐</button>
                <RouterLink class="category-link" to="/flash">快讯</RouterLink>
        <button :class="{ selected: !savedOnly && activeCategory === '全部' && route.query.view !== 'recommendations' }" @click="showAllNews">全部</button>
        <button v-for="category in categories" :key="category" :class="{ selected: !savedOnly && activeCategory === category && !isVideoView }" @click="selectCategory(category)">{{ category }}</button>
        <button :class="{ selected: savedOnly }" @click="showSavedNews">收藏<span v-if="savedNews.length">{{ savedNews.length }}</span></button>
        <button :class="{ selected: isVideoView }" @click="showVideos">视频</button>
        <RouterLink class="category-link" to="/news?view=topics">专题</RouterLink>
        <RouterLink class="category-link" to="/reports">研报</RouterLink>
      </nav>
    </header>

    <div class="news-date"><span>{{ isVideoView ? '视频资讯' : '今日资讯' }}</span><time>{{ news[0]?.publishedAt?.slice(0, 10) || '暂无日期' }}</time></div>
    <LoadingState v-if="isLoading" label="正在加载资讯" />
    <ErrorState v-else-if="loadError" title="资讯加载失败" :message="loadError" :retry="loadNews" />
    <section v-else class="news-list" aria-label="资讯列表">
      <article v-for="item in filteredNews" :key="item.id" class="news-item" :class="{ featured: item.featured }">
        <RouterLink class="news-main" :to="`/news/${item.id}`">
          <div class="news-item-meta"><span class="news-tag">{{ item.tag }}</span><time>{{ item.time }}</time><span class="source">{{ item.source }}</span></div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
          <div v-if="item.video" class="video-mark"><span>▶</span>视频资讯 <small>03:28</small></div>
        </RouterLink>
        <div class="news-item-footer"><span>阅读 1.2k</span><button :class="{ saved: savedNews.includes(item.id) }" @click.stop="toggleSave(item.id)">{{ savedNews.includes(item.id) ? '★ 已收藏' : '☆ 收藏' }}</button><button class="feedback-button" @click.stop="hideArticle(item.id)">不感兴趣</button><span class="arrow">›</span></div>
      </article>
          <EmptyState v-if="!filteredNews.length" :title="isVideoView ? '暂无视频资讯' : '暂无相关资讯'" :message="isVideoView ? '当前接口未返回可播放的视频内容。' : '换个关键词或切换栏目试试'" icon="⌕" />
    </section>
    <Transition name="toast"><div v-if="favoriteMessage" class="toast" role="status">{{ favoriteMessage }}</div></Transition>
  </section>
</template>

<style scoped>
.news-page { width: min(720px, 100%); margin: 0 auto; color: var(--text); }
.news-header { position: sticky; top: 0; z-index: 4; background: rgba(255,255,255,.97); border-bottom: 1px solid var(--border); }
.news-heading { display: flex; align-items: center; justify-content: space-between; padding: 18px 16px 12px; }
.eyebrow { color: var(--primary); font: 10px 'JetBrains Mono', monospace; letter-spacing: .14em; margin: 0 0 4px; }
.news-heading h1 { font-size: 23px; font-weight: 600; }
.heading-actions { display: flex; align-items: center; gap: 8px; }.text-button, .feedback-button { border: 0; background: transparent; color: var(--muted); font-size: 10px; }.text-button { color: var(--primary); }.refresh-button { display: grid; width: 32px; height: 32px; place-items: center; padding: 0; color: var(--primary); border: 1px solid var(--border); border-radius: 50%; background: var(--card); font-size: 20px; line-height: 1; }.refresh-button:hover { border-color: var(--primary); background: #edf4ff; }.refresh-button:active { background: #dceaff; }
.refresh-button.loading { color: var(--primary); animation: rotate .7s linear infinite; }
.search-box { display: flex; align-items: center; gap: 7px; height: 36px; margin: 0 14px 11px; padding: 0 10px; border-radius: 5px; background: #f5f6fa; color: #9aa3b1; font-size: 19px; }
.search-box input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 12px; }
.search-box input::placeholder { color: #aab2bf; }.search-box button { border: 0; background: transparent; color: var(--muted); font-size: 12px; }.tag-filter { display: flex; align-items: center; gap: 7px; margin: 0 14px 8px; color: var(--muted); font-size: 11px; }.tag-filter select { min-width: 110px; padding: 5px 7px; border: 1px solid var(--border); border-radius: 4px; background: var(--card); color: var(--text); font-size: 11px; }
.category-bar { display: flex; align-items: stretch; gap: 22px; overflow-x: auto; padding: 0 16px; scrollbar-width: none; }.category-bar::-webkit-scrollbar { display: none; }
.category-bar button, .category-bar .category-link { position: relative; display: flex; flex: 0 0 auto; align-items: center; min-height: 40px; padding: 9px 0 10px; border: 0; background: transparent; color: var(--muted); font-size: 14px; line-height: 20px; white-space: nowrap; }.category-bar button.selected, .category-bar .category-link.router-link-active { color: var(--primary); font-weight: 600; }.category-bar button.selected::after, .category-bar .category-link.router-link-active::after { position: absolute; right: 50%; bottom: 0; left: 50%; height: 2px; border-radius: 2px; background: var(--primary); content: ''; transform: translateX(-50%); }.category-bar button span { margin-left: 3px; font-size: 10px; }
.news-page :deep(.empty-state-common) { min-height: 256px; gap: 9px; }.news-page :deep(.empty-state-common strong) { font-size: 15px; }.news-page :deep(.empty-state-common p) { font-size: 12px; line-height: 1.5; }
.news-date { display: flex; justify-content: space-between; padding: 13px 16px 8px; color: var(--muted); font-size: 11px; }.news-date time { font: 10px 'JetBrains Mono', monospace; }
.news-list { background: var(--card); }.news-item { margin: 0 16px; padding: 16px 0 13px; border-bottom: 1px solid var(--border); }.news-item.featured { border-left: 2px solid var(--primary); padding-left: 10px; }.news-main { display: block; }.news-item-meta { display: flex; align-items: center; gap: 9px; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.news-tag { color: var(--primary); }.source { overflow: hidden; max-width: 130px; text-overflow: ellipsis; white-space: nowrap; }.news-item h2 { margin-top: 8px; color: var(--text); font-size: 16px; font-weight: 500; line-height: 1.45; }.news-item p { display: -webkit-box; overflow: hidden; margin-top: 6px; color: var(--muted); font-size: 12px; line-height: 1.65; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }.video-mark { display: inline-flex; align-items: center; gap: 6px; margin-top: 9px; color: var(--primary); font-size: 11px; }.video-mark span { display: grid; width: 19px; height: 19px; place-items: center; border-radius: 50%; background: #eaf2ff; font-size: 8px; }.video-mark small { color: var(--muted); margin-left: 4px; }
.news-item-footer { display: flex; align-items: center; gap: 16px; margin-top: 12px; color: var(--muted); font-size: 10px; }.news-item-footer button { margin-left: auto; padding: 0; border: 0; background: transparent; color: var(--muted); font-size: 10px; }.news-item-footer button.saved { color: var(--gold); }.arrow { color: #b8bfca; font-size: 20px; line-height: 12px; }
.toast { position: fixed; bottom: 80px; left: 50%; z-index: 10; transform: translateX(-50%); padding: 10px 15px; border-radius: 5px; background: rgba(38,46,64,.9); color: #fff; font-size: 11px; white-space: nowrap; }
@keyframes rotate { to { transform: rotate(360deg); } }
@media (min-width: 721px) { .news-header { border: 1px solid var(--border); border-top: 0; }.news-list { border: 1px solid var(--border); border-top: 0; } }
</style>
