import { reactive } from 'vue'

export type ChartIndicator = 'MA' | 'MACD' | 'BOLL' | 'KDJ' | 'RSI' | 'SAR'
export interface ChartPreferences {
  period?: string
  indicator?: ChartIndicator
  adjustment?: string
  settings?: Record<string, boolean>
}

const preferences = reactive<Record<string, ChartPreferences>>({})
const storageKey = 'zedarc-kline-preferences'
let initialized = false

function init() {
  if (initialized || typeof window === 'undefined') return
  initialized = true
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? '{}')
    if (value && typeof value === 'object') Object.assign(preferences, value)
  } catch {
    // Invalid browser data is ignored.
  }
}

function persist() {
  if (typeof window !== 'undefined') window.localStorage.setItem(storageKey, JSON.stringify(preferences))
}

export function useChartPreferencesStore() {
  init()
  function get(code: string) { return preferences[code] }
  function save(code: string, value: ChartPreferences) {
    preferences[code] = value
    persist()
  }
  return { get, save }
}
