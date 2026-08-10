<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import type { NewsArticle } from '@/mock/news'
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
const related = computed(() => allArticles.value.filter((item) => item.id !== article.value?.id).slice(0, 2))

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
    <div class="detail-top"><RouterLink class="back-link" to="/news">‹ 返回资讯</RouterLink><span class="news-detail-source">{{ article.source }} · {{ article.time }}</span></div>
    <article class="panel article-body"><div class="article-meta"><span class="news-tag">{{ article.tag }}</span><span>今日 2026.08.10</span></div><h1>{{ article.title }}</h1><p class="article-lead">{{ article.summary }}</p><button v-if="article.video" class="detail-video" :class="{ playing: videoPlaying }" @click="toggleVideo"><span>{{ videoPlaying ? 'Ⅱ' : '▶' }}</span><strong>{{ videoPlaying ? '正在播放行情视频' : '播放行情视频' }}</strong><small>{{ videoPlaying ? '00:18 / 03:28 · 模拟播放' : '03:28 · 点击播放' }}</small><i v-if="videoPlaying" /></button><div class="article-content"><p>{{ article.content }}</p><p>市场数据和个股表现仍会受到宏观环境、行业景气度以及资金偏好的共同影响，投资者应结合自身风险承受能力独立判断。</p></div><div class="article-actions"><button :class="{ saved }" @click="toggleSave">{{ saved ? '★ 已收藏' : '☆ 收藏文章' }}</button><button @click="shareArticle">分享标题 ↗</button></div></article>
    <section class="related-news-panel"><div class="block-title"><h2>相关阅读</h2><RouterLink to="/news" class="text-button">更多 →</RouterLink></div><RouterLink v-for="item in related" :key="item.id" :to="`/news/${item.id}`" class="related-news-row"><span class="news-tag">{{ item.tag }}</span><strong>{{ item.title }}</strong><span class="result-arrow">›</span></RouterLink></section>
    </template>
  </section>
</template>

<style scoped>
.news-detail-page { max-width: 820px; margin: 0 auto; }.detail-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }.back-link, .text-button { color: var(--primary); font-size: 11px; }.news-detail-source { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.article-body { padding: 28px 32px; }.article-meta { display: flex; gap: 12px; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.article-body h1 { font-size: 25px; line-height: 1.45; margin-top: 14px; }.article-lead { color: var(--muted); font-size: 13px; line-height: 1.8; border-left: 3px solid var(--primary); padding-left: 13px; margin-top: 17px; }.detail-video { position: relative; display: flex; align-items: center; gap: 10px; width: 100%; color: var(--primary); border: 0; text-align: left; background: linear-gradient(105deg, #edf4ff, #f8fbff); padding: 20px; margin-top: 20px; cursor: pointer; }.detail-video.playing { background: linear-gradient(105deg, #e6f0ff, #f5faff); }.detail-video span { display: grid; place-items: center; width: 34px; height: 34px; color: #fff; background: var(--primary); border-radius: 50%; padding-left: 2px; }.detail-video strong { font-size: 12px; }.detail-video small { color: var(--muted); font-size: 10px; margin-left: auto; }.detail-video i { position: absolute; left: 0; right: 46%; bottom: 0; height: 3px; background: var(--primary); }.article-content { color: var(--text); font-size: 13px; line-height: 2; margin-top: 25px; }.article-content p + p { margin-top: 16px; }.article-actions { display: flex; gap: 18px; border-top: 1px solid var(--border); margin-top: 27px; padding-top: 16px; }.article-actions button { color: var(--muted); border: 0; background: transparent; font-size: 11px; }.article-actions button.saved { color: var(--gold); }.related-news-panel { margin-top: 14px; padding: 20px; }.block-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }.block-title h2 { font-size: 14px; }.related-news-row { display: grid; grid-template-columns: 50px 1fr 18px; gap: 10px; align-items: center; border-top: 1px solid var(--border); padding: 14px 0; }.related-news-row strong { font-size: 12px; font-weight: 500; }@media (max-width: 640px) { .article-body { padding: 22px 17px; }.article-body h1 { font-size: 20px; }.article-content { font-size: 12px; }.detail-top { align-items: flex-start; gap: 10px; flex-direction: column; } }
</style>
