import { ref } from 'vue'

const storageKey = 'zedarc-search-history'
const history = ref<string[]>([])
let initialized = false

function readHistory() {
  if (typeof window === 'undefined') return []
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]')
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
  } catch {
    return []
  }
}

function persist() {
  if (typeof window !== 'undefined') window.localStorage.setItem(storageKey, JSON.stringify(history.value))
}

export function useSearchHistoryStore() {
  if (!initialized) {
    history.value = readHistory()
    initialized = true
  }

  function add(query: string) {
    const normalized = query.trim()
    if (!normalized) return
    history.value = [normalized, ...history.value.filter((item) => item !== normalized)].slice(0, 6)
    persist()
  }

  function remove(query: string) {
    history.value = history.value.filter((item) => item !== query)
    persist()
  }

  function clear() {
    history.value = []
    if (typeof window !== 'undefined') window.localStorage.removeItem(storageKey)
  }

  return { history, add, remove, clear }
}
