import { computed, ref } from 'vue'
import { addNewsFavorite, getNewsFavorites, removeNewsFavorite } from '@/services/news'
import { getAccessToken, onAuthStateChange } from '@/services/api-client'

const key = 'zedarc-saved-news'
const savedIds = ref<string[]>([])
export type FavoritesSyncStatus = 'local' | 'syncing' | 'synced' | 'error'
const syncStatus = ref<FavoritesSyncStatus>('local')
const syncError = ref('')
const lastSyncedAt = ref<string | null>(null)
let initialized = false
let initializedToken: string | null | undefined
function resetForAuth(token: string | null) {
  initializedToken = token
  syncStatus.value = token ? 'local' : 'local'
  syncError.value = ''
  lastSyncedAt.value = null
}
onAuthStateChange(resetForAuth)
function init() { if (initialized) return; try { savedIds.value = JSON.parse(window.localStorage.getItem(key) ?? '[]').map(String) as string[] } catch { savedIds.value = [] }; initialized = true }
function persist() { window.localStorage.setItem(key, JSON.stringify(savedIds.value)) }
export function useFavoritesStore() {
  init()
  async function hydrate() {
    const token = getAccessToken()
    if (initializedToken !== token) resetForAuth(token)
    if (!token) { syncStatus.value = 'local'; return }
    syncStatus.value = 'syncing'; syncError.value = ''
    try {
      const remote = await getNewsFavorites(); const remoteIds = remote.map((item) => item.newsId)
      const localOnly = savedIds.value.filter((id) => !remoteIds.includes(id))
      savedIds.value = [...new Set([...remoteIds, ...savedIds.value])]; persist()
      for (const newsId of localOnly) await addNewsFavorite(newsId)
      syncStatus.value = 'synced'; lastSyncedAt.value = new Date().toISOString()
    } catch (error) {
      syncStatus.value = 'error'; syncError.value = error instanceof Error ? error.message : '资讯收藏同步失败'
    }
  }
  function has(id: string) { return savedIds.value.includes(String(id)) }
  async function toggle(id: string) {
    const newsId = String(id); const removing = has(newsId); const previous = [...savedIds.value]
    if (getAccessToken()) {
      syncStatus.value = 'syncing'; syncError.value = ''
      try {
        if (removing) await removeNewsFavorite(newsId)
        else await addNewsFavorite(newsId)
      } catch (error) {
        savedIds.value = previous
        syncStatus.value = 'error'; syncError.value = error instanceof Error ? error.message : '资讯收藏同步失败'
        throw error
      }
      syncStatus.value = 'synced'; lastSyncedAt.value = new Date().toISOString()
    }
    savedIds.value = removing ? savedIds.value.filter((item) => item !== newsId) : [...savedIds.value, newsId]
    persist()
  }
  function removeLocal(ids: string[]) {
    const remove = new Set(ids.map(String)); savedIds.value = savedIds.value.filter((id) => !remove.has(id)); persist()
  }
  return { savedIds, count: computed(() => savedIds.value.length), syncStatus, syncError, lastSyncedAt, has, hydrate, toggle, removeLocal }
}
