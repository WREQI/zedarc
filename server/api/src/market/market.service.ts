import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import { normalizeMarketCode, validateKlineBars, validateNormalizedQuotes, type KlineBar, type MarketEtf, type MarketIndex as SharedMarketIndex, type MarketSearchResult, type MarketSector, type NormalizedQuote } from '@zedarc/shared'

export type MarketIndex = SharedMarketIndex
export type Sector = MarketSector
export interface MarketRank { code: string; name: string; price: number; changePercent: number; volume: number; amount: number }
export interface OrderBook { code: string; timestamp: number; bids: [number, number][]; asks: [number, number][] }

const fallback: NormalizedQuote[] = [
  { code: '600519', name: '贵州茅台', price: 1684, prevClose: 1618, change: 66, changePercent: 4.08, volume: 197000000, amount: 1970000000, timestamp: Date.now(), source: 'mock' },
  { code: '000001', name: '平安银行', price: 12.86, prevClose: 13.02, change: -0.16, changePercent: -1.23, volume: 86000000, amount: 1100000000, timestamp: Date.now(), source: 'mock' },
]
const fallbackSectors: Sector[] = [
  { code: 'BK0475', name: '新能源', changePercent: 0, source: 'mock' },
  { code: 'BK0736', name: '半导体', changePercent: 0, source: 'mock' },
]
const fallbackEtfs: MarketEtf[] = [
  { code: '510300', name: '沪深300ETF', price: 0, changePercent: 0, volume: 0, amount: 0, source: 'mock' },
]
const fallbackIndices: MarketIndex[] = [
  { code: '000001', name: '上证指数', value: 3126.45, change: 18.2, changePercent: 0.59, timestamp: Date.now(), source: 'mock' },
  { code: '399001', name: '深证成指', value: 9654.12, change: 42.1, changePercent: 0.44, timestamp: Date.now(), source: 'mock' },
  { code: '399006', name: '创业板指', value: 1876.23, change: -6.3, changePercent: -0.34, timestamp: Date.now(), source: 'mock' },
]

@Injectable()
export class MarketService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  private redisAvailable = false
  private lastSuccessfulProvider = 'mock'
  private lastSuccessAt = 0

  async onModuleInit() { try { await this.redis.connect(); this.redisAvailable = true } catch { /* Redis is optional for local/demo API startup. */ } }
  async onModuleDestroy() { if (this.redis.isOpen) await this.redis.quit() }

  async getQuotes(codes: string[]) {
    const requested = codes.length ? codes.map(normalizeMarketCode) : fallback.map((item) => item.code)
    const values = validateNormalizedQuotes(await this.readMany<NormalizedQuote>(requested.map((code) => `quote:${code}`)), requested)
    const byCode = new Map(values.map((value) => [normalizeMarketCode(value.code), value]))
    const result = requested.map((code) => byCode.get(code) ?? fallback.find((item) => item.code === code)).filter((value): value is NormalizedQuote => Boolean(value))
    if (values.length) this.markSuccess(values[0].source)
    return result
  }
  async getQuote(code: string) { return (await this.getQuotes([code]))[0] ?? null }
  async getKline(code: string, period = 'daily', start = 0, count?: number): Promise<KlineBar[]> {
    const bars = validateKlineBars(await this.read<KlineBar[]>(`kline:${period}:${normalizeMarketCode(code)}`))
    if (!bars.length) return []
    // Worker data is chronological; expose pagination from the newest bar backwards.
    const safeStart = Math.max(0, Math.floor(start) || 0)
    const end = Math.max(0, bars.length - safeStart)
    const safeCount = count == null ? end : Math.max(1, Math.min(800, Math.floor(count)))
    return bars.slice(Math.max(0, end - safeCount), end)
  }
  async getIntraday(code: string) {
    const cached = await this.read<unknown[]>(`intraday:${code}`)
    if (cached?.length) return cached
    const quote = await this.getQuote(code)
    if (!quote) return []
    const now = Date.now()
    return Array.from({ length: 2 }, (_, index) => ({ date: new Date(now - (1 - index) * 60000).toISOString().slice(11, 16), timestamp: now - (1 - index) * 60000, open: quote.price, close: quote.price, high: quote.price, low: quote.price, volume: quote.volume / 2, amount: quote.amount / 2, source: 'mock' }))
  }
  async getOrderBook(code: string): Promise<OrderBook> {
    const quote = await this.getQuote(code); const price = quote?.price ?? 0
    return (await this.read<OrderBook>(`orderbook:${code}`)) ?? { code, timestamp: Date.now(), bids: price ? [[price - 0.01, 100], [price - 0.02, 200]] : [], asks: price ? [[price + 0.01, 100], [price + 0.02, 200]] : [] }
  }
  async getIndices(): Promise<MarketIndex[]> {
    const values = await this.read<MarketIndex[]>('market:indices')
    const valid = values?.filter(isValidIndex) ?? []
    return valid.length ? valid : fallbackIndices
  }
  async getRankings(type = 'gainers', limit = 20): Promise<MarketRank[]> {
    const cachedQuotes = await this.read<NormalizedQuote[]>('market:quotes')
    const values = cachedQuotes ?? await this.readMany<NormalizedQuote>(codesForRanking())
    const quotes = values.length ? values : await this.getQuotes([])
    return [...quotes].sort((a, b) => type === 'losers' ? a.changePercent - b.changePercent : b.changePercent - a.changePercent).slice(0, Math.max(1, Math.min(limit, 100))).map(({ code, name, price, changePercent, volume, amount }) => ({ code, name, price, changePercent, volume, amount }))
  }
  async getSectors(): Promise<Sector[]> {
    const values = await this.read<Sector[]>('market:sectors')
    const valid = values?.filter(isValidSector) ?? []
    return valid.length ? valid : fallbackSectors
  }
  async getEtfs(limit = 20): Promise<MarketEtf[]> {
    const safeLimit = Math.max(1, Math.min(Number.isFinite(limit) ? Math.floor(limit) : 20, 100))
    const values = await this.read<MarketEtf[]>('market:etfs')
    const valid = values?.filter(isValidEtf) ?? []
    return (valid.length ? valid : fallbackEtfs).slice(0, safeLimit)
  }
  async search(keyword: string): Promise<MarketSearchResult[]> {
    const query = keyword.trim().toLowerCase().slice(0, 64)
    if (!query) return []
    const cached = await this.read<MarketSearchResult[]>(`market:search:${query}`)
    if (cached) return cached.filter(isValidSearch).slice(0, 50)
    return fallback.filter((item) => item.code.includes(query) || item.name.toLowerCase().includes(query)).map(({ code, name }) => ({ code, name, type: 'stock', source: 'mock' as const }))
  }
  async status() {
    const provider = await this.read<{ provider: string; ok: boolean; lastSuccess: number; checkedAt: number; error?: string }>('market:provider:status')
    return { redis: this.redisAvailable && this.redis.isOpen, provider: provider?.provider ?? this.lastSuccessfulProvider, providerOk: provider?.ok ?? this.lastSuccessfulProvider !== 'mock', lastSuccess: provider?.lastSuccess ?? (this.lastSuccessAt || null), checkedAt: provider?.checkedAt ?? null, timestamp: Date.now(), source: provider ? 'provider-cache' : 'mock' }
  }
  private markSuccess(source: NormalizedQuote['source']) { this.lastSuccessfulProvider = source; this.lastSuccessAt = Date.now() }
  private async read<T>(key: string): Promise<T | null> { if (!this.redisAvailable || !this.redis.isOpen) return null; try { const value = await this.redis.get(key); return value ? JSON.parse(value) as T : null } catch { return null } }
  private async readMany<T>(keys: string[]) { const values: T[] = []; for (const key of keys) { const value = await this.read<T>(key); if (value) values.push(value) } return values }
}
function codesForRanking() { return fallback.map((item) => `quote:${item.code}`) }

function isValidIndex(value: unknown): value is MarketIndex {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<MarketIndex>
  return typeof row.code === 'string' && typeof row.name === 'string' && Number.isFinite(row.value) && Number.isFinite(row.change) && Number.isFinite(row.changePercent) && Number.isFinite(row.timestamp)
}
function isValidSector(value: unknown): value is Sector {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<Sector>
  return typeof row.code === 'string' && typeof row.name === 'string' && Number.isFinite(row.changePercent)
}
function isValidEtf(value: unknown): value is MarketEtf {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<MarketEtf>
  return typeof row.code === 'string' && typeof row.name === 'string' && Number.isFinite(row.price) && Number.isFinite(row.changePercent) && Number.isFinite(row.volume) && Number.isFinite(row.amount)
}
function isValidSearch(value: unknown): value is MarketSearchResult {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<MarketSearchResult>
  return typeof row.code === 'string' && row.code.length > 0 && typeof row.name === 'string' && row.name.length > 0
}
