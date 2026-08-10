import { computed, ref } from 'vue'
import { apiFetch, getAccessToken } from '@/services/api-client'

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
  async function hydrate() {
    if (!getAccessToken()) return
    try {
      const items = await apiFetch<Array<{ code: string }>>('/api/watchlist')
      const remote = items.map((item) => item.code)
      const merged = [...new Set([...remote, ...selectedCodes.value])]
      selectedCodes.value = merged
      persist()
      await Promise.all(selectedCodes.value.filter((code) => !remote.includes(code)).map((code) => apiFetch('/api/watchlist', { method: 'POST', body: JSON.stringify({ code }) })))
    } catch { /* keep the local watchlist when the API is unavailable */ }
  }
  function toggle(code: string) {
    const removing = has(code)
    selectedCodes.value = removing ? selectedCodes.value.filter((item) => item !== code) : [...selectedCodes.value, code]
    persist()
    if (getAccessToken()) void (removing ? apiFetch(`/api/watchlist/${code}`, { method: 'DELETE' }) : apiFetch('/api/watchlist', { method: 'POST', body: JSON.stringify({ code }) })).catch(() => undefined)
  }
  function remove(code: string) { selectedCodes.value = selectedCodes.value.filter((item) => item !== code); persist(); if (getAccessToken()) void apiFetch(`/api/watchlist/${code}`, { method: 'DELETE' }).catch(() => undefined) }
  function addRecent(code: string) { recentCodes.value = [code, ...recentCodes.value.filter((item) => item !== code)].slice(0, 12); window.localStorage.setItem(recentKey, JSON.stringify(recentCodes.value)) }
  function clearRecent() { recentCodes.value = []; window.localStorage.removeItem(recentKey) }
  return { selectedCodes, recentCodes, count: computed(() => selectedCodes.value.length), has, hydrate, toggle, remove, addRecent, clearRecent }
}
