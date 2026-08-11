import { computed, ref } from 'vue'
import { addNewsFavorite, getNewsFavorites, removeNewsFavorite } from '@/services/news'
import { getAccessToken } from '@/services/api-client'

const key = 'zedarc-saved-news'
const savedIds = ref<string[]>([])
let initialized = false
function init() { if (initialized) return; try { savedIds.value = JSON.parse(window.localStorage.getItem(key) ?? '[]').map(String) as string[] } catch { savedIds.value = [] }; initialized = true }
function persist() { window.localStorage.setItem(key, JSON.stringify(savedIds.value)) }
export function useFavoritesStore() {
  init()
  async function hydrate() {
    if (!getAccessToken()) return
    try {
      const remote = await getNewsFavorites(); const remoteIds = remote.map((item) => item.newsId)
      savedIds.value = [...new Set([...remoteIds, ...savedIds.value])]; persist()
      await Promise.all(savedIds.value.filter((id) => !remoteIds.includes(id)).map((newsId) => addNewsFavorite(newsId).catch(() => undefined)))
    } catch { /* local favorites remain available when the API is offline */ }
  }
  function has(id: string) { return savedIds.value.includes(String(id)) }
  function toggle(id: string) {
    const newsId = String(id); const removing = has(newsId)
    savedIds.value = removing ? savedIds.value.filter((item) => item !== newsId) : [...savedIds.value, newsId]; persist()
    if (getAccessToken()) void (removing ? removeNewsFavorite(newsId) : addNewsFavorite(newsId)).catch(() => undefined)
  }
  return { savedIds, count: computed(() => savedIds.value.length), has, hydrate, toggle }
}
