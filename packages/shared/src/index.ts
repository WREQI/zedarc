export type MarketSource = 'tdx' | 'stock-sdk' | 'mock'

export interface NormalizedQuote {
  code: string
  name: string
  price: number
  prevClose: number
  change: number
  changePercent: number
  volume: number
  amount: number
  timestamp: number
  source: MarketSource
}

export interface KlineBar {
  date: string
  timestamp: number
  open: number
  close: number
  high: number
  low: number
  volume: number
  amount: number
  source: MarketSource
}

export interface MarketIndex {
  code: string
  name: string
  value: number
  change: number
  changePercent: number
  timestamp: number
  source?: MarketSource
}

export interface MarketSector {
  code: string
  name: string
  changePercent: number
  leadingStock?: string
  leadingChangePercent?: number
  timestamp?: number
  source?: MarketSource
}

export interface MarketEtf {
  code: string
  name: string
  price: number
  changePercent: number
  volume: number
  amount: number
  timestamp?: number
  source?: MarketSource
}

export interface MarketSearchResult {
  code: string
  name: string
  type?: string
  source?: MarketSource
}

export interface QuoteQuery { codes: string[] }
export interface KlineQuery { code: string; period?: 'daily' | 'weekly' | 'monthly'; adjust?: '' | 'qfq' | 'hfq' }

const finite = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)
const text = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0
const source = (value: unknown): value is MarketSource => value === 'tdx' || value === 'stock-sdk' || value === 'mock'

export function isValidNormalizedQuote(value: unknown): value is NormalizedQuote {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<NormalizedQuote>
  return text(row.code) && text(row.name) && finite(row.price) && finite(row.prevClose) && row.prevClose >= 0 && finite(row.change) && finite(row.changePercent) && finite(row.volume) && row.volume >= 0 && finite(row.amount) && row.amount >= 0 && Number.isFinite(row.timestamp) && source(row.source) && Math.abs(row.change - (row.price - row.prevClose)) <= Math.max(0.02, Math.abs(row.price) * 0.002) && (row.prevClose === 0 || Math.abs(row.changePercent - row.change / row.prevClose * 100) <= 0.2)
}

export function validateNormalizedQuotes(values: unknown, requestedCodes?: readonly string[]): NormalizedQuote[] {
  if (!Array.isArray(values)) return []
  const requested = requestedCodes && new Set(requestedCodes.map(normalizeMarketCode))
  const seen = new Set<string>()
  return values.filter(isValidNormalizedQuote).filter((row) => {
    const code = normalizeMarketCode(row.code)
    if (requested && !requested.has(code)) return false
    if (seen.has(code)) return false
    seen.add(code)
    return true
  })
}

export function isValidKlineBar(value: unknown): value is KlineBar {
  if (!value || typeof value !== 'object') return false
  const bar = value as Partial<KlineBar>
  return text(bar.date) && Number.isFinite(bar.timestamp) && finite(bar.open) && finite(bar.close) && finite(bar.high) && finite(bar.low) && bar.high >= Math.max(bar.open, bar.close) && bar.low <= Math.min(bar.open, bar.close) && finite(bar.volume) && bar.volume >= 0 && finite(bar.amount) && bar.amount >= 0 && source(bar.source)
}

export function validateKlineBars(values: unknown): KlineBar[] {
  if (!Array.isArray(values)) return []
  return values.filter(isValidKlineBar).sort((a, b) => a.timestamp - b.timestamp).filter((bar, index, all) => index === 0 || bar.timestamp > all[index - 1].timestamp)
}

export function normalizeMarketCode(code: string): string {
  return code.trim().toLowerCase().replace(/^(sh|sz|bj)/, '')
}
