<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import type { NewsArticle } from '@/services/news-types'
import { getNewsArticle, getNewsArticles } from '@/services/news'
import { useFavoritesStore } from '@/stores/favorites'

const route = useRoute()
const favorites = useFavoritesStore()
const saved = ref(false)
const videoPlaying = ref(false)
const isLoading = ref(true)
const loadError = ref('')
const article = ref<NewsArticle | null>(null)
const allArticles = ref<NewsArticle[]>([])
const related = computed(() => allArticles.value.filter((item) => item.id !== article.value?.id).slice(0, 3))

async function loadArticle() {
  isLoading.value = true
  loadError.value = ''
  try {
    const [current, articles] = await Promise.all([getNewsArticle(Number(route.params.id)), getNewsArticles()])
    if (!current) throw new Error('not-found')
    article.value = current
    allArticles.value = articles
    saved.value = favorites.has(current.id)
  } catch { loadError.value = '资讯详情暂时无法加载。' } finally { isLoading.value = false }
}

onMounted(loadArticle)
function toggleVideo() { videoPlaying.value = !videoPlaying.value }
function shareArticle() {
  const current = article.value
  if (current) window.navigator.clipboard?.writeText(current.title)
}
function toggleSave() {
  const current = article.value
  if (!current) return
  favorites.toggle(current.id)
  saved.value = favorites.has(current.id)
}
</script>

<template>
  <section class="news-detail-page">
    <LoadingState v-if="isLoading" label="正在加载资讯详情" />
    <ErrorState v-else-if="loadError" title="详情加载失败" :message="loadError" :retry="loadArticle" />
    <template v-else-if="article">
      <header class="detail-nav">
        <RouterLink class="back-link" to="/news">‹ <span>资讯</span></RouterLink>
        <div class="detail-nav-actions"><button aria-label="收藏文章" :class="{ saved }" @click="toggleSave">{{ saved ? '★' : '☆' }}</button><button aria-label="分享文章" @click="shareArticle">⌁</button></div>
      </header>
      <article class="article-card">
        <div class="article-meta"><span class="news-tag">{{ article.tag }}</span><span>{{ article.source }}</span><time>{{ article.time }} · 2026.08.10</time></div>
        <h1>{{ article.title }}</h1>
        <p class="article-lead">{{ article.summary }}</p>
        <button v-if="article.video" class="detail-video" :class="{ playing: videoPlaying }" @click="toggleVideo"><span>{{ videoPlaying ? 'Ⅱ' : '▶' }}</span><strong>{{ videoPlaying ? '正在播放行情视频' : '播放行情视频' }}</strong><small>{{ videoPlaying ? '00:18 / 03:28 · 模拟播放' : '03:28 · 点击播放' }}</small><i v-if="videoPlaying" /></button>
        <div class="article-content"><p>{{ article.content }}</p><p>市场数据和个股表现仍会受到宏观环境、行业景气度以及资金偏好的共同影响，投资者应结合自身风险承受能力独立判断。</p></div>
        <div class="article-bottom"><span>本文来自 {{ article.source }}</span><span>阅读 1.2k</span></div>
      </article>
      <section class="related-news-panel">
        <div class="block-title"><h2>相关阅读</h2><RouterLink to="/news" class="text-button">更多 ›</RouterLink></div>
        <RouterLink v-for="item in related" :key="item.id" :to="`/news/${item.id}`" class="related-news-row"><span class="news-tag">{{ item.tag }}</span><strong>{{ item.title }}</strong><time>{{ item.time }}</time><span class="result-arrow">›</span></RouterLink>
      </section>
    </template>
  </section>
</template>

<style scoped>
.news-detail-page { width: min(720px, 100%); min-height: 100%; margin: 0 auto; color: var(--text); }
.detail-nav { position: sticky; top: 0; z-index: 4; display: flex; align-items: center; justify-content: space-between; height: 48px; padding: 0 15px; border-bottom: 1px solid var(--border); background: rgba(255,255,255,.97); }.back-link { color: #4a5669; font-size: 14px; }.back-link:first-letter { color: var(--primary); font-size: 25px; }.detail-nav-actions { display: flex; gap: 16px; }.detail-nav-actions button { padding: 0; border: 0; background: transparent; color: var(--muted); font-size: 21px; line-height: 1; }.detail-nav-actions button.saved { color: var(--gold); }
.article-card { padding: 20px 16px 16px; background: var(--card); }.article-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 7px 10px; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.news-tag { color: var(--primary); }.article-meta time { color: #aab2be; }.article-card h1 { margin-top: 13px; font-size: 22px; font-weight: 600; line-height: 1.45; letter-spacing: -.02em; }.article-lead { margin-top: 15px; padding: 10px 12px; border-left: 2px solid var(--primary); background: #f7f9fc; color: var(--muted); font-size: 12px; line-height: 1.75; }
.detail-video { position: relative; display: flex; align-items: center; gap: 10px; width: 100%; margin-top: 18px; padding: 14px; border: 0; border-radius: 4px; background: #f2f6fd; color: var(--primary); text-align: left; }.detail-video.playing { background: #eaf2ff; }.detail-video span { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: var(--primary); color: #fff; font-size: 11px; }.detail-video strong { font-size: 12px; }.detail-video small { margin-left: auto; color: var(--muted); font-size: 10px; }.detail-video i { position: absolute; right: 35%; bottom: 0; left: 0; height: 2px; background: var(--primary); }
.article-content { margin-top: 22px; color: #303b4d; font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; font-size: 15px; line-height: 2; }.article-content p + p { margin-top: 15px; }.article-bottom { display: flex; justify-content: space-between; margin-top: 24px; padding-top: 12px; border-top: 1px solid var(--border); color: #a0a9b7; font-size: 10px; }
.related-news-panel { margin-top: 9px; padding: 18px 16px 26px; background: var(--card); }.block-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3px; }.block-title h2 { font-size: 15px; font-weight: 600; }.text-button { color: var(--primary); font-size: 11px; }.related-news-row { display: grid; grid-template-columns: 45px minmax(0, 1fr) 32px 14px; gap: 8px; align-items: center; padding: 13px 0; border-bottom: 1px solid var(--border); }.related-news-row strong { overflow: hidden; font-size: 12px; font-weight: 400; line-height: 1.45; text-overflow: ellipsis; white-space: nowrap; }.related-news-row time { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.result-arrow { color: #b8bfca; font-size: 19px; }
@media (min-width: 721px) { .detail-nav, .article-card, .related-news-panel { border-right: 1px solid var(--border); border-left: 1px solid var(--border); } }
@media (max-width: 420px) { .article-card h1 { font-size: 20px; }.article-content { font-size: 14px; }.related-news-row { grid-template-columns: 43px minmax(0, 1fr) 14px; }.related-news-row time { display: none; } }
</style>
