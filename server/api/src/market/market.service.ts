import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import { calculateMarketSentiment, isValidCapitalFlowData, normalizeMarketCode, validateFinancialRecords, validateKlineBars, validateMarketEtfs, validateMarketSectors, validateNormalizedQuotes, type CapitalFlowData, type DataAvailability, type IntradayBar, type KlineBar, type MarketCollection, type MarketEtf, type MarketEtfDetail, type MarketHistory, type MarketHistoryPoint, type PreMarketData, type MarketIndex as SharedMarketIndex, type MarketSearchResult, type MarketSector, type MarketSectorDetail, type MarketSectorKind, type MarketSentiment, type NormalizedQuote, type OrderBook, type StockDetailData, type StockDividendRecord, type StockFinancialRecord, type StockFinancialStatementRecord, type StockShareholderRecord, type StockUnlockRecord, type StockInstitutionRecord, type StockBlockTradeRecord, type TradeTick } from '@zedarc/shared'

export type MarketIndex = SharedMarketIndex
export type Sector = MarketSector
export type RankingField = 'changePercent' | 'amount' | 'turnoverRate' | 'amplitude' | 'volumeRatio' | 'limitUp' | 'limitDown'
export interface MarketRank extends Pick<NormalizedQuote, 'code' | 'name' | 'price' | 'change' | 'changePercent' | 'volume' | 'amount' | 'turnoverRate' | 'amplitude' | 'volumeRatio' | 'limitUp' | 'limitDown' | 'limitStatus'> {}
export interface RankingOptions { type?: string; field?: string; limit?: number; keyword?: string; status?: 'up' | 'down' }
export interface LimitBoardMetric<T = number> { value: T | null; available: boolean; reason?: string; source: string }
export interface LimitBoardResponse {
  direction: 'up' | 'down'
  timestamp: number
  source: string
  items: MarketRank[]
  ladder: {
    firstBoard: LimitBoardMetric
    secondBoard: LimitBoardMetric
    aboveThirdBoard: LimitBoardMetric
    maxStreak: LimitBoardMetric
  }
  brokenBoard: { items: MarketRank[]; available: boolean; reason?: string; source: string }
  sealTime: LimitBoardMetric<string>
  sealAmount: LimitBoardMetric<number>
}


const fallback: NormalizedQuote[] = [
  { code: '600519', name: '贵州茅台', price: 1684, prevClose: 1618, change: 66, changePercent: 4.08, volume: 197000000, amount: 1970000000, turnoverRate: null, amplitude: null, volumeRatio: null, limitUp: null, limitDown: null, limitStatus: 'unsupported', timestamp: Date.now(), source: 'mock' },
  { code: '000001', name: '平安银行', price: 12.86, prevClose: 13.02, change: -0.16, changePercent: -1.23, volume: 86000000, amount: 1100000000, turnoverRate: null, amplitude: null, volumeRatio: null, limitUp: null, limitDown: null, limitStatus: 'unsupported', timestamp: Date.now(), source: 'mock' },
]

const fallbackEtfs: MarketEtf[] = []
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
    const result = requested.map((code) => byCode.get(code) ?? fallback.find((item) => normalizeMarketCode(item.code) === code)).filter((value): value is NormalizedQuote => Boolean(value))
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
  async getIntraday(code: string): Promise<IntradayBar[]> {
    const bars = await this.read<unknown[]>(`intraday:${normalizeMarketCode(code)}`)
    return Array.isArray(bars) ? bars.filter(isValidIntradayBar) : []
  }
  async getPreMarket(code: string): Promise<PreMarketData> {
    const normalized = normalizeMarketCode(code)
    // No provider currently publishes an auction/pre-market snapshot. Keep the
    // endpoint stable and explicit instead of deriving it from the regular quote.
    return { code: normalized, timestamp: Date.now(), source: 'unavailable', availability: availability(false, 'market-provider', '当前行情 provider 未提供交易前集合竞价/盘前行情'), quote: null }
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
    return isValidCapitalFlowData(cached) ? cached : unavailableCapitalFlow(normalized)
  }
  async getStockDetail(code: string): Promise<StockDetailData> {
    const normalized = normalizeMarketCode(code)
    const quote = await this.getQuote(normalized)
    const orderBook = await this.getOrderBook(normalized)
    const trades = await this.getTrades(normalized)
    const capitalFlow = await this.getCapitalFlow(normalized)
    const preMarket = await this.getPreMarket(normalized)
    const unavailable = <T>(source: string, reason: string) => ({ code: normalized, timestamp: Date.now(), source: 'unavailable' as const, availability: availability(false, source, reason), items: [] as T[] })
    const financials = validateFinancialRecords(await this.read<StockFinancialRecord[]>(`stock-detail:financials:${normalized}`))
    const financialStatements = await this.read<StockFinancialStatementRecord[]>(`stock-detail:financial-statements:${normalized}`)
    const shareholders = await this.read<StockShareholderRecord[]>(`stock-detail:shareholders:${normalized}`)
    const institutions = await this.read<StockInstitutionRecord[]>(`stock-detail:institutions:${normalized}`)
    const unlocks = await this.read<StockUnlockRecord[]>(`stock-detail:unlocks:${normalized}`)
    const blockTrades = await this.read<StockBlockTradeRecord[]>(`stock-detail:block-trades:${normalized}`)
    const dividends = await this.read<StockDividendRecord[]>(`stock-detail:dividends:${normalized}`)
    const available = <T>(items: T[], source: string) => ({ code: normalized, timestamp: Date.now(), source: source as 'stock-sdk', availability: availability(true, source), items })
    return {
      code: normalized, quote, orderBook, trades, capitalFlow, preMarket,
      financials: financials?.length ? available(financials, financials[0].source) : unavailable<StockFinancialRecord>('stock-sdk', 'stock-sdk 仅提供估值快照，不提供财务报表明细'),
      financialStatements: financialStatements?.length ? available(financialStatements, 'stock-sdk') : unavailable('stock-sdk', 'stock-sdk/TDX 未提供上市公司资产负债表、利润表或现金流量表接口'),
      shareholders: shareholders?.length ? available(shareholders, 'stock-sdk') : unavailable('stock-sdk', 'stock-sdk/TDX 未提供上市公司前十大股东或股东名册接口'),
      institutions: institutions?.length ? available(institutions, 'stock-sdk') : unavailable<StockInstitutionRecord>('stock-sdk', 'stock-sdk 未返回该股票近 180 天龙虎榜机构买卖数据'),
      unlocks: unlocks?.length ? available(unlocks, 'stock-sdk') : unavailable('stock-sdk', 'stock-sdk/TDX 未提供限售股解禁日历接口'),
      blockTrades: blockTrades?.length ? available(blockTrades, 'stock-sdk') : unavailable<StockBlockTradeRecord>('stock-sdk', 'stock-sdk 未返回该股票近 180 天大宗交易数据'),
      dividends: dividends?.length ? available(dividends, dividends[0].source) : unavailable<StockDividendRecord>('stock-sdk', '上游接口未返回分红派息记录'),
    }
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
  async getLimitBoard(direction: 'up' | 'down'): Promise<LimitBoardResponse> {
    const items = await this.getRankings({ type: direction === 'up' ? 'limit-up' : 'limit-down', limit: 100 })
    const source = items[0]?.limitStatus ? (await this.read<NormalizedQuote[]>('market:quotes'))?.[0]?.source ?? 'unavailable' : 'unavailable'
    const unavailable = <T = number>(reason: string): LimitBoardMetric<T> => ({ value: null, available: false, source, reason })
    return {
      direction,
      timestamp: Date.now(),
      source,
      items,
      ladder: {
        firstBoard: unavailable('当前行情 provider 未提供连板数'),
        secondBoard: unavailable('当前行情 provider 未提供连板数'),
        aboveThirdBoard: unavailable('当前行情 provider 未提供连板数'),
        maxStreak: unavailable('当前行情 provider 未提供连板数'),
      },
      brokenBoard: { items: [], available: false, source, reason: '当前行情 provider 未提供炸板状态字段' },
      sealTime: unavailable<string>('当前行情 provider 未提供封板时间'),
      sealAmount: unavailable<number>('当前行情 provider 未提供封单金额'),
    }
  }

  async getRankings(options: RankingOptions | string = {}, legacyLimit = 20): Promise<MarketRank[]> {
    const query = typeof options === 'string' ? { type: options, limit: legacyLimit } : options
    const field = rankingField(query.field ?? query.type)
    const topicStatus = rankingStatus(query.type)
    const requestedStatus = topicStatus ?? query.status
    const cachedQuotes = await this.read<NormalizedQuote[]>('market:quotes')
    const values = cachedQuotes ?? await this.readMany<NormalizedQuote>(codesForRanking())
    const quotes = (values.length ? values : await this.getQuotes([]))
      .filter((quote) => !query.keyword || quote.code.includes(query.keyword) || quote.name.toLowerCase().includes(query.keyword.toLowerCase()))
      .filter((quote) => !requestedStatus || quote.limitStatus === requestedStatus)
      // A null metric means the provider did not publish that value. Do not let
      // those rows enter a metric ranking as if they were ranked at zero.
      .filter((quote) => isRankableQuote(quote, field, Boolean(requestedStatus)))
    const descending = field !== 'changePercent' || query.type !== 'losers'
    return [...quotes].sort((a, b) => compareRank(a, b, field, descending)).slice(0, Math.max(1, Math.min(Number(query.limit) || 20, 100))).map(({ code, name, price, change, changePercent, volume, amount, turnoverRate, amplitude, volumeRatio, limitUp, limitDown, limitStatus }) => ({ code, name, price, change, changePercent, volume, amount, turnoverRate, amplitude, volumeRatio, limitUp, limitDown, limitStatus }))
  }
  async getSectors(kind: MarketSectorKind = 'industry'): Promise<MarketCollection<Sector>> {
    const values = validateMarketSectors(await this.read<Sector[]>('market:sectors')).filter((sector) => !sector.kind || sector.kind === kind)
    const available = values.length > 0
    return { items: values, total: values.length, availability: available ? { available: true, source: values[0].source ?? 'stock-sdk', ...(values[0].timestamp ? { asOf: values[0].timestamp } : {}) } : { available: false, source: 'stock-sdk', reason: kind === 'concept' ? '当前 provider 未提供概念板块快照' : '当前 provider 未返回行业板块快照' } }
  }
  async getSectorDetail(code: string, kind: MarketSectorKind = 'industry'): Promise<MarketSectorDetail> {
    const normalized = code.trim().slice(0, 64)
    const sector = (await this.getSectors(kind)).items.find((item) => item.code === normalized)
    const cached = await this.read<{ memberCodes?: string[]; members?: NormalizedQuote[] }>(`market:sector-detail:${kind}:${normalized}`)
    const cachedMembers = cached?.members?.filter((item) => validateNormalizedQuotes([item]).length) ?? []
    const members = cachedMembers.length ? cachedMembers.map(toSectorMember) : []
    const unavailable = { available: false, source: 'market-provider', reason: '当前行情 provider 未提供该板块的成分股快照' }
    return {
      sector: sector ?? { code: normalized, name: normalized, changePercent: 0, kind },
      kind,
      members,
      availability: sector ? { available: true, source: sector.source ?? 'market-provider', ...(sector.timestamp ? { asOf: sector.timestamp } : {}) } : { available: false, source: 'market-provider', reason: '未找到该板块行情快照' },
      membersAvailability: members.length ? { available: true, source: members[0].source ?? 'market-provider', asOf: Date.now() } : unavailable,
      capitalFlowAvailability: { available: false, source: 'market-provider', reason: '当前行情 provider 未提供板块级资金流，未使用个股资金流替代' },
    }
  }
  async getEtfs(limit = 20): Promise<MarketCollection<MarketEtf>> {
    const safeLimit = Math.max(1, Math.min(Number.isFinite(limit) ? Math.floor(limit) : 20, 100))
    const values = validateMarketEtfs(await this.read<MarketEtf[]>('market:etfs')).slice(0, safeLimit)
    return { items: values, total: values.length, availability: values.length ? { available: true, source: values[0].source ?? 'market-provider', ...(values[0].timestamp ? { asOf: values[0].timestamp } : {}) } : { available: false, source: 'stock-sdk', reason: '当前 provider 未提供可验证的 ETF 交易价、成交量和成交额' } }
  }
  async getSectorHistory(code: string, kind: MarketSectorKind = 'industry', count = 240): Promise<MarketHistory> {
    const normalized = code.trim().slice(0, 64)
    const items = await this.read<MarketHistoryPoint[]>(`market:sector-history:${kind}:${normalized}`)
    const valid = Array.isArray(items) ? items.filter(isValidHistoryPoint).slice(-safeHistoryCount(count)) : []
    return { code: normalized, kind, items: valid, availability: valid.length ? { available: true, source: valid[0].source, asOf: valid.at(-1)?.timestamp } : { available: false, source: 'stock-sdk', reason: '当前 provider 未产生该板块的历史快照；未使用模拟数据' } }
  }
  async getEtfHistory(code: string, count = 240): Promise<MarketHistory> {
    const normalized = normalizeMarketCode(code)
    const items = await this.read<MarketHistoryPoint[]>(`market:etf-history:${normalized}`)
    const valid = Array.isArray(items) ? items.filter(isValidHistoryPoint).slice(-safeHistoryCount(count)) : []
    return { code: normalized, items: valid, availability: valid.length ? { available: true, source: valid[0].source, asOf: valid.at(-1)?.timestamp } : { available: false, source: etfConfigSource(), reason: '未配置或当前 provider 未返回该 ETF 的真实交易快照；未使用模拟数据' } }
  }
  async getFinancialHistory(code: string, count = 20) {
    const normalized = normalizeMarketCode(code)
    const rows = await this.read<Array<{ timestamp: number; record: StockFinancialRecord }>>(`stock-detail:financials-history:${normalized}`)
    const valid = Array.isArray(rows) ? rows.filter((item) => Number.isFinite(item?.timestamp) && item.record && item.record.code === normalized).slice(-Math.max(1, Math.min(100, Math.floor(count) || 20))).map((item) => item.record) : []
    return { code: normalized, items: valid, availability: valid.length ? { available: true, source: valid[0].source, asOf: valid.at(-1)?.asOf } : { available: false, source: 'stock-sdk', reason: '当前 provider 未返回该股票的历史财务指标；未使用快照重复伪造趋势' } }
  }
  async getEtfDetail(code: string): Promise<MarketEtfDetail> {
    const normalized = normalizeMarketCode(code)
    const quote = (await this.getEtfs(100)).items.find((item) => normalizeMarketCode(item.code) === normalized) ?? null
    const cached = await this.read<Partial<MarketEtfDetail>>(`market:etf-detail:${normalized}`)
    const holdings = Array.isArray(cached?.holdings) ? cached.holdings : []
    const unavailable = (reason: string) => ({ available: false, source: 'market-provider', reason })
    return {
      code: normalized,
      quote,
      availability: quote ? { available: true, source: quote.source ?? 'market-provider', ...(quote.timestamp ? { asOf: quote.timestamp } : {}) } : unavailable('未找到该 ETF 行情快照'),
      holdings,
      holdingsAvailability: holdings.length ? { available: true, source: 'market-provider' } : unavailable('当前行情 provider 未提供 ETF 持仓明细'),
      size: cached?.size ?? quote?.size ?? null,
      premium: cached?.premium ?? quote?.premium ?? null,
      indexName: cached?.indexName ?? quote?.indexName ?? null,
    }
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
function isRankableQuote(quote: NormalizedQuote, field: RankingField, isLimitBoard: boolean) {
  // Limit boards are selected by limitStatus; limitUp/limitDown are optional
  // provider metrics and must not hide an otherwise valid board row.
  if (isLimitBoard && (field === 'limitUp' || field === 'limitDown')) return true
  return quote[field] != null && Number.isFinite(quote[field])
}
function compareRank(left: NormalizedQuote, right: NormalizedQuote, field: RankingField, descending: boolean) { const a = left[field] ?? Number.NEGATIVE_INFINITY; const b = right[field] ?? Number.NEGATIVE_INFINITY; return descending ? b - a : a - b }
function availability(available: boolean, source: string, reason?: string): DataAvailability { return { available, source, ...(reason ? { reason } : {}), ...(available ? { asOf: Date.now() } : {}) } }

function unavailableCapitalFlow(code: string): CapitalFlowData {
  return { code, timestamp: Date.now(), source: 'unavailable', availability: availability(false, 'tdx/stock-sdk', '现有行情 provider 未提供主力、超大单、大单、中单、小单资金流及其时间序列/排行'), items: [], series: [], ranking: [] }
}
function isValidIntradayBar(value: unknown): value is IntradayBar {
  if (!value || typeof value !== 'object') return false
  const bar = value as Partial<IntradayBar>
  return typeof bar.date === 'string' && bar.date.length > 0 && Number.isFinite(bar.timestamp) && [bar.open, bar.close, bar.high, bar.low, bar.volume, bar.amount].every(Number.isFinite) && (bar.volume ?? -1) >= 0 && (bar.amount ?? -1) >= 0 && (bar.high ?? -Infinity) >= Math.max(bar.open ?? Infinity, bar.close ?? Infinity) && (bar.low ?? Infinity) <= Math.min(bar.open ?? -Infinity, bar.close ?? -Infinity) && ['tdx', 'stock-sdk', 'mock'].includes(bar.source ?? '')
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
function toSectorMember(value: NormalizedQuote) {
  return { code: value.code, name: value.name, price: value.price, change: value.change, changePercent: value.changePercent, amount: value.amount, source: value.source }
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
function safeHistoryCount(value: number) { return Math.max(1, Math.min(800, Number.isFinite(value) ? Math.floor(value) : 240)) }
function isValidHistoryPoint(value: unknown): value is MarketHistoryPoint {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<MarketHistoryPoint>
  return Number.isFinite(row.timestamp) && Number.isFinite(row.value) && Number.isFinite(row.changePercent) && ['tdx', 'stock-sdk', 'mock'].includes(row.source ?? '')
}
function etfConfigSource() { return process.env.MARKET_ETFS ? 'tdx' : 'tdx/stock-sdk' }
function isValidSearch(value: unknown): value is MarketSearchResult {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<MarketSearchResult>
  return typeof row.code === 'string' && row.code.length > 0 && typeof row.name === 'string' && row.name.length > 0
}
