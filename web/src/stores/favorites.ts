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
  function has(id: number) { return savedIds.value.includes(id) }
  function toggle(id: number) {
    const removing = has(id)
    savedIds.value = removing ? savedIds.value.filter((item) => item !== id) : [...savedIds.value, id]
    window.localStorage.setItem(key, JSON.stringify(savedIds.value))
    if (getAccessToken()) void (removing ? apiFetch(`/api/favorites/${id}`, { method: 'DELETE' }) : apiFetch('/api/favorites', { method: 'POST', body: JSON.stringify({ code: String(id) }) })).catch(() => undefined)
  }
  return { savedIds, count: computed(() => savedIds.value.length), has, toggle }
}
