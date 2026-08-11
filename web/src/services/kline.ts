import { apiFetch } from '@/services/api-client'

export interface KlineIndicator { k: number; d: number; j: number; rsi: number; sar: number; direction: 'up' | 'down' }

export interface KlineCandle {
  date: string
  timestamp: number
  open: number
  close: number
  high: number
  low: number
  volume: number
  turnover: number
  source?: string
}

export type KlineDataSource = 'api' | 'sdk' | 'mock'
export type KlineAdjustment = '' | 'qfq' | 'hfq'
export interface KlineIndicatorPreferences { maFast?: number; maSlow?: number; bollPeriod?: number }

const indicatorPreferencesKey = 'zedarc-kline-indicator-parameters'

export function getKlineDataSource(candles: KlineCandle[]): KlineDataSource {
  if (candles.some((candle) => candle.source && candle.source !== 'mock')) return 'api'
  if (candles.some((candle) => candle.source === 'mock')) return 'mock'
  return 'sdk'
}

export function supportsKlineAdjustment(period: 'intraday' | 'daily' | 'weekly' | 'monthly', adjustment: KlineAdjustment, source: KlineDataSource): boolean {
  return adjustment === '' || (period !== 'intraday' && source !== 'mock')
}

export function readKlineIndicatorPreferences(code: string): KlineIndicatorPreferences | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(indicatorPreferencesKey) ?? '{}')
    const item = value && typeof value === 'object' ? (value as Record<string, unknown>)[code] : undefined
    if (!item || typeof item !== 'object') return undefined
    const parameters = item as Record<string, unknown>
    return { maFast: Number(parameters.maFast), maSlow: Number(parameters.maSlow), bollPeriod: Number(parameters.bollPeriod) }
  } catch { return undefined }
}

export function saveKlineIndicatorPreferences(code: string, preferences: KlineIndicatorPreferences) {
  if (typeof window === 'undefined') return
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(indicatorPreferencesKey) ?? '{}')
    const stored = value && typeof value === 'object' ? value as Record<string, KlineIndicatorPreferences> : {}
    stored[code] = preferences
    window.localStorage.setItem(indicatorPreferencesKey, JSON.stringify(stored))
  } catch { /* Storage may be unavailable in private browsing. */ }
}

function seedFromCode(code: string) { return [...code].reduce((sum, char) => sum + char.charCodeAt(0), 0) }

export function createKlineSeries(code: string, length = 96): KlineCandle[] {
  const seed = seedFromCode(code)
  let previous = 80 + seed % 120
  return Array.from({ length }, (_, index) => {
    const wave = Math.sin((index + seed) * .38) * 3 + Math.cos((index + seed) * .13) * 2
    const open = previous + Math.sin((index + seed) * 1.7) * 1.4
    const close = open + wave * .42 + (index > length * .72 ? .9 : 0)
    const high = Math.max(open, close) + 1.2 + (index % 3) * .45
    const low = Math.min(open, close) - 1.1 - (index % 2) * .55
    const volume = 40 + Math.abs(wave) * 12 + (index % 5) * 14
    previous = close
    return { date: `08-${String((index % 30) + 1).padStart(2, '0')}`, timestamp: Date.now() - (length - index) * 86400000, open, close, high, low, volume, turnover: volume * close, source: 'mock' }
  })
}

export function calculateMA(candles: KlineCandle[], period: number): number[] {
  return candles.map((_, index) => { const source = candles.slice(Math.max(0, index - period + 1), index + 1); return source.reduce((sum, candle) => sum + candle.close, 0) / source.length })
}

export function calculateBOLL(candles: KlineCandle[], period = 20, multiplier = 2) {
  return candles.map((_, index) => { const source = candles.slice(Math.max(0, index - period + 1), index + 1); const middle = source.reduce((sum, candle) => sum + candle.close, 0) / source.length; const deviation = Math.sqrt(source.reduce((sum, candle) => sum + (candle.close - middle) ** 2, 0) / source.length); return { middle, upper: middle + deviation * multiplier, lower: middle - deviation * multiplier } })
}

export function calculateMACD(candles: KlineCandle[]) { return candles.map((_, index) => calculateMA(candles, 5)[index] - calculateMA(candles, 10)[index]) }

export function calculateKDJ(candles: KlineCandle[], period = 9) { let k = 50; let d = 50; return candles.map((candle, index) => { const source = candles.slice(Math.max(0, index - period + 1), index + 1); const high = Math.max(...source.map((item) => item.high)); const low = Math.min(...source.map((item) => item.low)); const rsv = high === low ? 50 : (candle.close - low) / (high - low) * 100; k = (2 * k + rsv) / 3; d = (2 * d + k) / 3; return { k, d, j: 3 * k - 2 * d } }) }
export function calculateRSI(candles: KlineCandle[], period = 14) { return candles.map((_, index) => { const source = candles.slice(Math.max(0, index - period + 1), index + 1); let gain = 0; let loss = 0; source.forEach((item, offset) => { const previous = source[offset - 1]; if (previous) { const change = item.close - previous.close; if (change > 0) gain += change; else loss -= change } }); return loss === 0 ? 100 : 100 - 100 / (1 + gain / Math.max(loss, 1e-9)) }) }
export function calculateSAR(candles: KlineCandle[], step = .02, maximum = .2) { let sar = candles[0]?.low ?? 0; let extreme = candles[0]?.high ?? 0; let acceleration = step; let rising = true; return candles.map((candle, index) => { const previous = candles[index - 1]; if (previous) { sar += acceleration * (extreme - sar); if (rising && candle.low < sar) { rising = false; sar = extreme; extreme = candle.low; acceleration = step } else if (!rising && candle.high > sar) { rising = true; sar = extreme; extreme = candle.high; acceleration = step } else if (rising && candle.high > extreme) { extreme = candle.high; acceleration = Math.min(maximum, acceleration + step) } else if (!rising && candle.low < extreme) { extreme = candle.low; acceleration = Math.min(maximum, acceleration + step) } } return sar }) }

export async function getKlineIndicators(code: string, period = 'daily', params: Record<string, number> = {}) { const query = new URLSearchParams({ code, period, ...Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)])) }); return apiFetch<{ bars: KlineCandle[]; indicators: KlineIndicator[] }>(`/api/kline/indicators?${query}`) }

type RawKlineCandle = Partial<KlineCandle> & { amount?: number; time?: string | number; datetime?: string | number }

function normalizeCandle(row: RawKlineCandle): KlineCandle | undefined {
  const timestamp = Number(row.timestamp ?? row.time ?? row.datetime)
  const date = String(row.date ?? row.time ?? row.datetime ?? '')
  const candle = {
    ...row,
    date,
    timestamp: Number.isFinite(timestamp) ? timestamp : Date.parse(date),
    open: Number(row.open),
    close: Number(row.close),
    high: Number(row.high),
    low: Number(row.low),
    volume: Number(row.volume),
    turnover: Number(row.turnover ?? row.amount ?? 0),
    source: row.source ?? 'api',
  }
  return isValidCandle(candle) ? candle : undefined
}

function normalizeResponse(payload: unknown) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []
  const value = payload as Record<string, unknown>
  for (const key of ['bars', 'data', 'items', 'rows']) if (Array.isArray(value[key])) return value[key]
  return []
}

async function fetchKline(url: string) {
  const response = await fetch(url)
  if (!response.ok) return []
  return normalizeResponse(await response.json()).map((row) => normalizeCandle(row as RawKlineCandle)).filter((row): row is KlineCandle => Boolean(row))
}

export async function getKlineSeries(code: string, period: 'daily' | 'weekly' | 'monthly' = 'daily', adjust: '' | 'qfq' | 'hfq' = 'qfq', start = 0, count = 800) {
  try {
    const query = new URLSearchParams({ code, period, start: String(start), count: String(count), adjust })
    const valid = await fetchKline(`/api/market/kline?${query}`)
    if (valid.length) return valid
  } catch { /* local development may run without the API container */ }
  const { getRealKline } = await import('@/services/stock-sdk-adapter')
  try { return await getRealKline(code, period, adjust) } catch { return [] }
}

export async function getMinuteSeries(code: string) {
  try {
    const valid = await fetchKline(`/api/market/intraday?code=${encodeURIComponent(code)}`)
    if (valid.length) return valid
  } catch { /* local development may run without the API container */ }
  const { getRealMinuteKline } = await import('@/services/stock-sdk-adapter')
  try { return await getRealMinuteKline(code) } catch { return [] }
}

function isValidCandle(value: KlineCandle) {
  return typeof value.date === 'string' && value.date.length > 0 && Number.isFinite(value.timestamp) && [value.open, value.close, value.high, value.low, value.volume, value.turnover].every(Number.isFinite) && value.high >= Math.max(value.open, value.close) && value.low <= Math.min(value.open, value.close) && value.volume >= 0 && value.turnover >= 0
}
