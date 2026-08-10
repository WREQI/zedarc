import { computed, ref } from 'vue'

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
  function toggle(id: number) { savedIds.value = has(id) ? savedIds.value.filter((item) => item !== id) : [...savedIds.value, id]; window.localStorage.setItem(key, JSON.stringify(savedIds.value)) }
  return { savedIds, count: computed(() => savedIds.value.length), has, toggle }
}
