import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import { calculateMarketSentiment, normalizeMarketCode, validateKlineBars, validateNormalizedQuotes, type CapitalFlowData, type DataAvailability, type KlineBar, type MarketEtf, type MarketIndex as SharedMarketIndex, type MarketSearchResult, type MarketSector, type MarketSentiment, type NormalizedQuote, type OrderBook, type StockDetailData, type StockDividendRecord, type StockFinancialRecord, type TradeTick } from '@zedarc/shared'

export type MarketIndex = SharedMarketIndex
export type Sector = MarketSector
export type RankingField = 'changePercent' | 'amount' | 'turnoverRate' | 'amplitude' | 'volumeRatio' | 'limitUp' | 'limitDown'
export interface MarketRank extends Pick<NormalizedQuote, 'code' | 'name' | 'price' | 'change' | 'changePercent' | 'volume' | 'amount' | 'turnoverRate' | 'amplitude' | 'volumeRatio' | 'limitUp' | 'limitDown' | 'limitStatus'> {}
export interface RankingOptions { type?: string; field?: string; limit?: number; keyword?: string; status?: 'up' | 'down' }


const fallback: NormalizedQuote[] = [
  { code: '600519', name: '贵州茅台', price: 1684, prevClose: 1618, change: 66, changePercent: 4.08, volume: 197000000, amount: 1970000000, turnoverRate: null, amplitude: null, volumeRatio: null, limitUp: null, limitDown: null, limitStatus: 'unsupported', timestamp: Date.now(), source: 'mock' },
  { code: '000001', name: '平安银行', price: 12.86, prevClose: 13.02, change: -0.16, changePercent: -1.23, volume: 86000000, amount: 1100000000, turnoverRate: null, amplitude: null, volumeRatio: null, limitUp: null, limitDown: null, limitStatus: 'unsupported', timestamp: Date.now(), source: 'mock' },
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
    return (await this.read<unknown[]>(`intraday:${normalizeMarketCode(code)}`)) ?? []
  }
  async getOrderBook(code: string): Promise<OrderBook> {
    const normalized = normalizeMarketCode(code)
    return (await this.read<OrderBook>(`orderbook:${normalized}`)) ?? { code: normalized, timestamp: Date.now(), source: 'unavailable', bids: [], asks: [] }
  }
  async getTrades(code: string, count = 100) {
    const normalized = normalizeMarketCode(code)
    const items = (await this.read<TradeTick[]>(`trades:${normalized}`)) ?? []
    return { code: normalized, timestamp: Date.now(), source: items.length ? items[0].source : 'unavailable' as const, items: items.slice(-Math.max(1, Math.min(500, Math.floor(count) || 100))), availability: availability(items.length > 0, items.length ? items[0].source : 'tdx', '当前行情源未提供逐笔成交') }
  }
  async getCapitalFlow(code: string): Promise<CapitalFlowData> {
    const normalized = normalizeMarketCode(code)
    const cached = await this.read<CapitalFlowData>(`capital-flow:${normalized}`)
    return isValidCapitalFlow(cached) ? cached : unavailableCapitalFlow(normalized)
  }
  async getStockDetail(code: string): Promise<StockDetailData> {
    const normalized = normalizeMarketCode(code)
    const quote = await this.getQuote(normalized)
    const orderBook = await this.getOrderBook(normalized)
    const trades = await this.getTrades(normalized)
    const capitalFlow = await this.getCapitalFlow(normalized)
    const unavailable = <T extends never[]>(source: string, reason: string) => ({ code: normalized, timestamp: Date.now(), source: 'unavailable' as const, availability: availability(false, source, reason), items: [] as T })
    const financials = await this.read<StockFinancialRecord[]>(`stock-detail:financials:${normalized}`)
    const dividends = await this.read<StockDividendRecord[]>(`stock-detail:dividends:${normalized}`)
    return { code: normalized, quote, orderBook, trades, capitalFlow, financials: financials?.length ? { code: normalized, timestamp: Date.now(), source: financials[0].source, availability: availability(true, financials[0].source), items: financials } : unavailable('stock-sdk', '上游行情接口未返回财务指标'), shareholders: unavailable('stock-sdk', '当前上游 provider 未提供上市公司股东名册'), dividends: dividends?.length ? { code: normalized, timestamp: Date.now(), source: dividends[0].source, availability: availability(true, dividends[0].source), items: dividends } : unavailable('stock-sdk', '上游接口未返回分红派息记录') }
  }
  async getSentiment(): Promise<MarketSentiment> {
    const quotes = validateNormalizedQuotes(await this.read<NormalizedQuote[]>('market:quotes'))
    return calculateMarketSentiment(quotes)
  }
  async getIndices(): Promise<MarketIndex[]> {
    const values = await this.read<MarketIndex[]>('market:indices')
    const valid = values?.filter(isValidIndex) ?? []
    return valid.length ? valid : fallbackIndices
  }
  async getRankings(options: RankingOptions | string = {}, legacyLimit = 20): Promise<MarketRank[]> {
    const query = typeof options === 'string' ? { type: options, limit: legacyLimit } : options
    const field = rankingField(query.field ?? query.type)
    const topicStatus = rankingStatus(query.type)
    const requestedStatus = topicStatus ?? query.status
    const cachedQuotes = await this.read<NormalizedQuote[]>('market:quotes')
    const values = cachedQuotes ?? await this.readMany<NormalizedQuote>(codesForRanking())
    const quotes = (values.length ? values : await this.getQuotes([])).filter((quote) => !query.keyword || quote.code.includes(query.keyword) || quote.name.toLowerCase().includes(query.keyword.toLowerCase())).filter((quote) => !requestedStatus || quote.limitStatus === requestedStatus)
    const descending = field !== 'changePercent' || query.type !== 'losers'
    return [...quotes].sort((a, b) => compareRank(a, b, field, descending)).slice(0, Math.max(1, Math.min(Number(query.limit) || 20, 100))).map(({ code, name, price, change, changePercent, volume, amount, turnoverRate, amplitude, volumeRatio, limitUp, limitDown, limitStatus }) => ({ code, name, price, change, changePercent, volume, amount, turnoverRate, amplitude, volumeRatio, limitUp, limitDown, limitStatus }))
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
function rankingField(value?: string): RankingField { return value === 'losers' ? 'changePercent' : value === 'amount' || value === '成交额' ? 'amount' : value === 'turnover' || value === 'turnoverRate' || value === '换手率' ? 'turnoverRate' : value === 'amplitude' || value === '振幅' ? 'amplitude' : value === 'volumeRatio' || value === '量比' ? 'volumeRatio' : value === 'limitUp' || value === '涨停' || value === 'limit-up' ? 'limitUp' : value === 'limitDown' || value === '跌停' || value === 'limit-down' ? 'limitDown' : 'changePercent' }
function rankingStatus(value?: string): 'up' | 'down' | undefined { return value === 'limit-up' || value === 'limitUp' || value === '涨停' ? 'up' : value === 'limit-down' || value === 'limitDown' || value === '跌停' ? 'down' : undefined }
function compareRank(left: NormalizedQuote, right: NormalizedQuote, field: RankingField, descending: boolean) { const a = left[field] ?? Number.NEGATIVE_INFINITY; const b = right[field] ?? Number.NEGATIVE_INFINITY; return descending ? b - a : a - b }
function availability(available: boolean, source: string, reason?: string): DataAvailability { return { available, source, ...(reason ? { reason } : {}), ...(available ? { asOf: Date.now() } : {}) } }

function unavailableCapitalFlow(code: string): CapitalFlowData {
  return { code, timestamp: Date.now(), source: 'unavailable', availability: availability(false, 'tdx/stock-sdk', '现有行情 provider 未提供主力、超大单、大单、中单、小单资金流及其时间序列/排行'), items: [], series: [], ranking: [] }
}
function isValidCapitalFlow(value: CapitalFlowData | null): value is CapitalFlowData {
  if (!value || typeof value !== 'object' || typeof value.code !== 'string' || !Number.isFinite(value.timestamp) || !Array.isArray(value.items) || !Array.isArray(value.series) || !Array.isArray(value.ranking) || !value.availability || typeof value.availability.available !== 'boolean') return false
  return value.items.every((item) => ['main', 'extraLarge', 'large', 'medium', 'small'].includes(item.category) && [item.netAmount, item.timestamp].every(Number.isFinite) && (item.inflow === null || Number.isFinite(item.inflow)) && (item.outflow === null || Number.isFinite(item.outflow))) && value.series.every((point) => [point.timestamp, point.netAmount].every(Number.isFinite) && (point.inflow === null || Number.isFinite(point.inflow)) && (point.outflow === null || Number.isFinite(point.outflow)) && typeof point.date === 'string') && value.ranking.every((row) => typeof row.code === 'string' && typeof row.name === 'string' && ['main', 'extraLarge', 'large', 'medium', 'small'].includes(row.category) && Number.isFinite(row.netAmount) && Number.isFinite(row.timestamp))
}

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
