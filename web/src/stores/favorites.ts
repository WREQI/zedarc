import { computed, ref } from 'vue'
import { apiFetch, getAccessToken } from '@/services/api-client'

const key = 'zedarc-saved-news'
const savedIds = ref<number[]>([])
let initialized = false
function init() {
  if (initialized) return
  try { savedIds.value = JSON.parse(window.localStorage.getItem(key) ?? '[]') as number[] } catch { savedIds.value = [] }
  initialized = true
}
export function useFavoritesStore() {
  init()
  async function hydrate() {
    if (!getAccessToken()) return
    try {
      const items = await apiFetch<Array<{ code: string }>>('/api/favorites')
      const remote = items.map((item) => Number(item.code)).filter(Number.isFinite)
      const merged = [...new Set([...remote, ...savedIds.value])]
      savedIds.value = merged
      window.localStorage.setItem(key, JSON.stringify(merged))
      await Promise.all(savedIds.value.filter((id) => !remote.includes(id)).map((id) => apiFetch('/api/favorites', { method: 'POST', body: JSON.stringify({ code: String(id) }) })))
    } catch { /* preserve local favorites when offline */ }
  }
  function has(id: number) { return savedIds.value.includes(id) }
  function toggle(id: number) {
    const removing = has(id)
    savedIds.value = removing ? savedIds.value.filter((item) => item !== id) : [...savedIds.value, id]
    window.localStorage.setItem(key, JSON.stringify(savedIds.value))
    if (getAccessToken()) void (removing ? apiFetch(`/api/favorites/${id}`, { method: 'DELETE' }) : apiFetch('/api/favorites', { method: 'POST', body: JSON.stringify({ code: String(id) }) })).catch(() => undefined)
  }
  return { savedIds, count: computed(() => savedIds.value.length), has, hydrate, toggle }
}
