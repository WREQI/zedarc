<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getNewsRecommendations, type NewsRecommendation } from '@/services/news'
import { useSearchHistoryStore } from '@/stores/search-history'
import { useFavoritesStore } from '@/stores/favorites'

const searchHistory = useSearchHistoryStore()
const favorites = useFavoritesStore()
const items = ref<NewsRecommendation[]>([])
const personalized = ref(false)
const isLoading = ref(true)
const isRefreshing = ref(false)
const loadError = ref('')

async function loadRecommendations() {
  isLoading.value = true
  loadError.value = ''
  try {
    await favorites.hydrate()
    const result = await getNewsRecommendations(searchHistory.history.value)
    items.value = result.items
    personalized.value = result.personalized
  } catch {
    loadError.value = '推荐暂时无法加载，请稍后重试。'
  } finally {
    isLoading.value = false
  }
}

function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadRecommendations().finally(() => { isRefreshing.value = false })
}

function toggleSave(id: string) { favorites.toggle(id) }
onMounted(loadRecommendations)
</script>

<template>
  <section class="recommend-page">
    <header class="recommend-header">
      <div>
        <p class="eyebrow">FOR YOU</p>
        <h1>个性化推荐</h1>
        <p class="subtitle">{{ personalized ? '基于你的自选、收藏和搜索历史' : '公开资讯推荐，登录后获得个性化内容' }}</p>
      </div>
      <button class="refresh-button" :class="{ loading: isRefreshing }" aria-label="刷新推荐" @click="refresh">↻</button>
    </header>

    <LoadingState v-if="isLoading" label="正在生成推荐" />
    <ErrorState v-else-if="loadError" title="推荐加载失败" :message="loadError" :retry="loadRecommendations" />
    <section v-else-if="items.length" class="recommend-list" aria-label="个性化资讯推荐">
      <article v-for="item in items" :key="item.id" class="recommend-item">
        <RouterLink class="recommend-main" :to="`/news/${item.id}`">
          <div class="meta"><span>{{ item.tag }}</span><time>{{ item.time }}</time><small>{{ item.source }}</small></div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
          <div class="reason">✦ {{ item.reason }}</div>
        </RouterLink>
        <footer><span>推荐度 {{ Math.min(99, Math.max(1, item.score + 60)) }}%</span><button :class="{ saved: favorites.has(item.id) }" @click="toggleSave(item.id)">{{ favorites.has(item.id) ? '★ 已收藏' : '☆ 收藏' }}</button></footer>
      </article>
    </section>
    <EmptyState v-else title="暂无可推荐资讯" message="暂时没有可用的真实资讯，稍后再来看看" icon="⌕" />
  </section>
</template>

<style scoped>
.recommend-page{width:min(720px,100%);margin:0 auto;color:var(--text)}.recommend-header{display:flex;align-items:flex-start;justify-content:space-between;padding:5px 2px 18px;border-bottom:1px solid var(--border)}.eyebrow{margin:0 0 5px;color:var(--primary);font:10px 'JetBrains Mono',monospace;letter-spacing:.14em}.recommend-header h1{font-size:23px;font-weight:600}.subtitle{margin-top:7px;color:var(--muted);font-size:11px}.refresh-button{width:32px;height:32px;border:1px solid var(--border);border-radius:50%;background:var(--card);color:var(--muted);font-size:20px}.refresh-button.loading{color:var(--primary);animation:rotate .7s linear infinite}.recommend-list{background:var(--card)}.recommend-item{margin:0 16px;padding:16px 0 13px;border-bottom:1px solid var(--border)}.recommend-main{display:block}.meta{display:flex;gap:9px;align-items:center;color:var(--muted);font:10px 'JetBrains Mono',monospace}.meta span{color:var(--primary)}.meta small{overflow:hidden;max-width:130px;text-overflow:ellipsis;white-space:nowrap}.recommend-item h2{margin-top:8px;font-size:16px;font-weight:500;line-height:1.45}.recommend-item p{display:-webkit-box;overflow:hidden;margin-top:6px;color:var(--muted);font-size:12px;line-height:1.65;-webkit-box-orient:vertical;-webkit-line-clamp:2}.reason{display:inline-block;margin-top:10px;padding:4px 7px;border-radius:3px;background:#eef5ff;color:var(--primary);font-size:10px}footer{display:flex;align-items:center;margin-top:12px;color:var(--muted);font-size:10px}footer button{margin-left:auto;padding:0;border:0;background:transparent;color:var(--muted);font-size:10px}footer button.saved{color:var(--gold)}@keyframes rotate{to{transform:rotate(360deg)}}
</style>
