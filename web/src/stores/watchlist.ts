import { computed, ref } from 'vue'

const key = 'zedarc-watchlist'
const recentKey = 'zedarc-recent-stocks'
const selectedCodes = ref<string[]>([])
const recentCodes = ref<string[]>([])
let initialized = false

function read(keyName: string): string[] {
  try { return JSON.parse(window.localStorage.getItem(keyName) ?? '[]') as string[] } catch { return [] }
}
function init() {
  if (initialized) return
  selectedCodes.value = read(key)
  recentCodes.value = read(recentKey)
  initialized = true
}
export function useWatchlistStore() {
  init()
  const has = (code: string) => selectedCodes.value.includes(code)
  function persist() { window.localStorage.setItem(key, JSON.stringify(selectedCodes.value)) }
  function toggle(code: string) { selectedCodes.value = has(code) ? selectedCodes.value.filter((item) => item !== code) : [...selectedCodes.value, code]; persist() }
  function remove(code: string) { selectedCodes.value = selectedCodes.value.filter((item) => item !== code); persist() }
  function addRecent(code: string) { recentCodes.value = [code, ...recentCodes.value.filter((item) => item !== code)].slice(0, 12); window.localStorage.setItem(recentKey, JSON.stringify(recentCodes.value)) }
  function clearRecent() { recentCodes.value = []; window.localStorage.removeItem(recentKey) }
  return { selectedCodes, recentCodes, count: computed(() => selectedCodes.value.length), has, toggle, remove, addRecent, clearRecent }
}
