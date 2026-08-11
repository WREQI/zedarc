export type MarketSource = 'tdx' | 'stock-sdk' | 'mock'
export type StockDataSource = MarketSource | 'unavailable'

export interface PaginationQuery { page?: number; pageSize?: number }
export interface PaginatedResult<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasNext: boolean
}
export interface NewsQuery extends PaginationQuery { code?: string; keyword?: string; source?: string }
export interface ReportsQuery extends PaginationQuery { code?: string; keyword?: string; institution?: string; rating?: string }

export interface NormalizedQuote {
  code: string
  name: string
  price: number
  prevClose: number
  open?: number
  high?: number
  low?: number
  change: number
  changePercent: number
  volume: number
  amount: number
  turnoverRate: number | null
  amplitude: number | null
  volumeRatio: number | null
  limitUp: number | null
  limitDown: number | null
  limitStatus: 'up' | 'down' | 'none' | 'unsupported'
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

export type MarketSectorKind = 'industry' | 'concept'

export interface MarketSector {
  code: string
  name: string
  changePercent: number
  leadingStock?: string
  leadingChangePercent?: number
  timestamp?: number
  source?: MarketSource
  kind?: MarketSectorKind
}

export interface MarketSectorMember {
  code: string
  name: string
  price: number
  change: number
  changePercent: number
  amount?: number
  source?: MarketSource
}

export interface MarketSectorDetail {
  sector: MarketSector
  kind: MarketSectorKind
  members: MarketSectorMember[]
  availability: DataAvailability
  membersAvailability: DataAvailability
  capitalFlowAvailability: DataAvailability
}

export interface MarketEtf {
  code: string
  name: string
  price: number
  changePercent: number
  volume: number
  amount: number
  /** Optional fields are only present when the upstream provider publishes them. */
  nav?: number | null
  size?: number | null
  premium?: number | null
  indexName?: string | null
  timestamp?: number
  source?: MarketSource
}

export interface MarketCollection<T> {
  items: T[]
  total: number
  availability: DataAvailability
}

export interface MarketHistoryPoint {
  timestamp: number
  value: number
  changePercent: number
  source: MarketSource
}

export interface MarketHistory<T extends MarketHistoryPoint = MarketHistoryPoint> {
  code: string
  kind?: MarketSectorKind
  items: T[]
  availability: DataAvailability
}

export interface MarketEtfDetail {
  code: string
  quote: MarketEtf | null
  availability: DataAvailability
  holdings: Array<{ code: string; name: string; weight?: number | null }>
  holdingsAvailability: DataAvailability
  size: number | null
  premium: number | null
  indexName: string | null
}

export interface MarketSearchResult {
  code: string
  name: string
  type?: string
  source?: MarketSource
}

export interface QuoteQuery { codes: string[] }
export type QuoteRealtimeKind = 'snapshot' | 'delta'
/** Per-symbol quote update sent on market:quote and market:quote:<code>. */
export interface QuoteRealtimeMessage extends NormalizedQuote {
  kind: QuoteRealtimeKind
  sequence: number
}
export interface KlineQuery { code: string; period?: 'daily' | 'weekly' | 'monthly'; adjust?: '' | 'qfq' | 'hfq' }

/** Intraday bars use the same OHLCV wire shape as K-lines. An empty array is a valid unavailable response. */
export type IntradayBar = KlineBar

export interface PreMarketQuote {
  code: string
  name: string
  price: number | null
  prevClose: number | null
  change: number | null
  changePercent: number | null
  volume: number | null
  amount: number | null
  timestamp: number
  source: StockDataSource
}

export interface PreMarketData {
  code: string
  timestamp: number
  source: StockDataSource
  availability: DataAvailability
  quote: PreMarketQuote | null
}

export interface OrderBookLevel { price: number; volume: number }
export interface OrderBook { code: string; timestamp: number; source: MarketSource | 'unavailable'; bids: OrderBookLevel[]; asks: OrderBookLevel[] }
export type TradeDirection = 'buy' | 'sell' | 'neutral'
export interface TradeTick { time: string; timestamp: number; price: number; volume: number; direction: TradeDirection; source: MarketSource }

/** The wire contract for market/orderbook and market/trades Pub/Sub -> WebSocket messages. */
export type MarketRealtimeKind = 'snapshot' | 'delta'
export interface OrderBookRealtimeMessage {
  kind: MarketRealtimeKind
  code: string
  sequence: number
  timestamp: number
  source: MarketSource
  bids: OrderBookLevel[]
  asks: OrderBookLevel[]
}
export interface TradesRealtimeMessage {
  kind: MarketRealtimeKind
  code: string
  sequence: number
  timestamp: number
  source: MarketSource
  items: TradeTick[]
}

export type TradeOrderStatus = 'pending' | 'reported' | 'partial' | 'filled' | 'cancelled' | 'rejected'
/** `placed` remains a wire-compatible alias for older clients. */
export type TradeOrderEventStatus = TradeOrderStatus | 'placed'
export interface TradeOrder {
  id: string
  userId: string
  code: string
  side: 'buy' | 'sell'
  quantity: number
  price: number
  fee: number
  status: TradeOrderStatus
  requestId?: string | null
  statusReason?: string | null
  statusUpdatedAt?: string
  createdAt: string
}
export interface TradeTransaction {
  id: string
  userId: string
  orderId: string
  code: string
  side: 'buy' | 'sell'
  quantity: number
  price: number
  fee: number
  amount: number
  createdAt: string
}
export interface TradeCashFlow {
  id: string
  userId: string
  orderId: string
  transactionId: string
  type: 'trade' | 'fee'
  amount: number
  createdAt: string
}
export interface TradeOrderRealtimeEvent {
  eventId: string
  type: `trade.order.${TradeOrderEventStatus}`
  channel: 'trade.orders'
  userId: string
  orderId: string
  requestId?: string | null
  status: TradeOrderEventStatus
  order: TradeOrder
  reason?: string | null
  timestamp: number
}
export interface TradeExecutionRealtimeEvent {
  eventId: string
  type: 'trade.execution'
  channel: 'trade.executions'
  userId: string
  orderId: string
  requestId?: string | null
  transaction: TradeTransaction
  timestamp: number
}
export interface TradeCashFlowRealtimeEvent {
  eventId: string
  type: 'trade.cash-flow'
  channel: 'trade.cash-flows'
  userId: string
  orderId: string
  requestId?: string | null
  flow: TradeCashFlow
  timestamp: number
}
export type TradeRealtimeEvent = TradeOrderRealtimeEvent | TradeExecutionRealtimeEvent | TradeCashFlowRealtimeEvent
export interface TradeOrderStatusEvent {
  eventId: string
  orderId: string
  status: TradeOrderEventStatus
  reason?: string | null
  timestamp: number
}
export type CapitalFlowCategory = 'main' | 'extraLarge' | 'large' | 'medium' | 'small'
export interface CapitalFlowItem { category: CapitalFlowCategory; netAmount: number; inflow: number | null; outflow: number | null; timestamp: number }
export interface CapitalFlowPoint { timestamp: number; date: string; netAmount: number; inflow: number | null; outflow: number | null }
export interface CapitalFlowRank { code: string; name: string; category: CapitalFlowCategory; netAmount: number; timestamp: number }
export interface CapitalFlowData { code: string; timestamp: number; source: MarketSource | 'unavailable'; availability: DataAvailability; items: CapitalFlowItem[]; series: CapitalFlowPoint[]; ranking: CapitalFlowRank[] }

export function isValidCapitalFlowData(value: unknown): value is CapitalFlowData {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<CapitalFlowData>
  if (!text(row.code) || !finite(row.timestamp) || !sourceOrUnavailable(row.source) || !row.availability || typeof row.availability.available !== 'boolean' || !Array.isArray(row.items) || !Array.isArray(row.series) || !Array.isArray(row.ranking)) return false
  return row.items.every((item) => item && capitalFlowCategory((item as CapitalFlowItem).category) && finite((item as CapitalFlowItem).netAmount) && nullableFinite((item as CapitalFlowItem).inflow) && nullableFinite((item as CapitalFlowItem).outflow) && finite((item as CapitalFlowItem).timestamp))
    && row.series.every((point) => point && text((point as CapitalFlowPoint).date) && finite((point as CapitalFlowPoint).timestamp) && finite((point as CapitalFlowPoint).netAmount) && nullableFinite((point as CapitalFlowPoint).inflow) && nullableFinite((point as CapitalFlowPoint).outflow))
    && row.ranking.every((rank) => rank && text((rank as CapitalFlowRank).code) && text((rank as CapitalFlowRank).name) && capitalFlowCategory((rank as CapitalFlowRank).category) && finite((rank as CapitalFlowRank).netAmount) && finite((rank as CapitalFlowRank).timestamp))
}

function capitalFlowCategory(value: unknown): value is CapitalFlowCategory { return value === 'main' || value === 'extraLarge' || value === 'large' || value === 'medium' || value === 'small' }
function nullableFinite(value: unknown): value is number | null { return value === null || finite(value) }
function sourceOrUnavailable(value: unknown): value is MarketSource | 'unavailable' { return source(value) || value === 'unavailable' }
export interface DataAvailability { available: boolean; source: string; reason?: string; asOf?: number }
export interface MarketSentimentMetric { value: number | null; availability: DataAvailability }
export interface MarketSentiment {
  timestamp: number
  source: MarketSource | 'unavailable'
  universe: { count: number; availability: DataAvailability }
  advances: MarketSentimentMetric
  declines: MarketSentimentMetric
  unchanged: MarketSentimentMetric
  total: MarketSentimentMetric
  amount: MarketSentimentMetric
  limitUp: MarketSentimentMetric
  limitDown: MarketSentimentMetric
  strength: MarketSentimentMetric
}

export function calculateMarketSentiment(quotes: readonly NormalizedQuote[], timestamp = Date.now()): MarketSentiment {
  const source = quotes.length && quotes.every((quote) => quote.source === quotes[0].source) ? quotes[0].source : 'market-quotes'
  const available = (value: number, reason?: string): MarketSentimentMetric => ({ value, availability: { available: true, source, asOf: timestamp, ...(reason ? { reason } : {}) } })
  const unavailable = (reason: string): MarketSentimentMetric => ({ value: null, availability: { available: false, source, reason } })
  const universeAvailability: DataAvailability = quotes.length
    ? { available: true, source, asOf: timestamp }
    : { available: false, source: 'market-quotes', reason: '当前行情快照为空' }
  if (!quotes.length) {
    const missing = unavailable('当前行情快照为空')
    return { timestamp, source: 'unavailable', universe: { count: 0, availability: universeAvailability }, advances: missing, declines: missing, unchanged: missing, total: missing, amount: missing, limitUp: missing, limitDown: missing, strength: missing }
  }
  const advances = quotes.filter((quote) => quote.change > 0).length
  const declines = quotes.filter((quote) => quote.change < 0).length
  const unchanged = quotes.length - advances - declines
  const limitsAvailable = quotes.every((quote) => quote.limitStatus !== 'unsupported')
  const limitReason = '当前行情源未提供完整 limitStatus，无法计算涨跌停家数'
  return {
    timestamp, source: source === 'market-quotes' ? 'unavailable' : source,
    universe: { count: quotes.length, availability: universeAvailability },
    advances: available(advances), declines: available(declines), unchanged: available(unchanged), total: available(quotes.length),
    amount: available(quotes.reduce((sum, quote) => sum + quote.amount, 0)),
    limitUp: limitsAvailable ? available(quotes.filter((quote) => quote.limitStatus === 'up').length) : unavailable(limitReason),
    limitDown: limitsAvailable ? available(quotes.filter((quote) => quote.limitStatus === 'down').length) : unavailable(limitReason),
    strength: available((advances - declines) / quotes.length * 100),
  }
}
export interface StockFinancialRecord {
  code: string
  name: string
  asOf: number
  peTtm: number | null
  peStatic: number | null
  peDynamic: number | null
  pb: number | null
  circulatingMarketCap: number | null
  totalMarketCap: number | null
  circulatingShares: number | null
  totalShares: number | null
  source: StockDataSource
}

export interface StockFinancialStatementRecord {
  code: string
  name: string
  reportDate: string
  reportType: string | null
  revenue: number | null
  netProfit: number | null
  netProfitYoy: number | null
  eps: number | null
  operatingCashFlow: number | null
  totalAssets: number | null
  totalLiabilities: number | null
  source: StockDataSource
}

export interface StockShareholderRecord {
  code: string
  name: string
  shareholderName: string
  shareholderType: string | null
  shares: number | null
  ownershipRatio: number | null
  reportDate: string | null
  source: StockDataSource
}

export interface StockUnlockRecord {
  code: string
  name: string
  unlockDate: string
  shares: number | null
  ownershipRatio: number | null
  shareholderName: string | null
  source: StockDataSource
}

export interface StockInstitutionRecord {
  code: string
  name: string
  date: string
  close: number | null
  changePercent: number | null
  buyOrgCount: number | null
  sellOrgCount: number | null
  orgBuyAmount: number | null
  orgSellAmount: number | null
  orgNetAmount: number | null
  source: StockDataSource
}

export interface StockBlockTradeRecord {
  code: string
  name: string
  date: string
  close: number | null
  changePercent: number | null
  dealPrice: number | null
  dealVolume: number | null
  dealAmount: number | null
  premiumRate: number | null
  buyBranch: string
  sellBranch: string
  source: StockDataSource
}

export interface StockDividendRecord {
  code: string
  name: string
  reportDate: string | null
  disclosureDate: string | null
  equityRecordDate: string | null
  exDividendDate: string | null
  payDate: string | null
  dividendPretax: number | null
  dividendDesc: string | null
  dividendYield: number | null
  eps: number | null
  bps: number | null
  netProfitYoy: number | null
  source: StockDataSource
}

export interface StockDetailData {
  code: string
  quote: NormalizedQuote | null
  orderBook: OrderBook
  trades: { code: string; timestamp: number; source: MarketSource | 'unavailable'; items: TradeTick[]; availability: DataAvailability }
  capitalFlow: CapitalFlowData
  preMarket: PreMarketData
  financials: { code: string; timestamp: number; source: StockDataSource; availability: DataAvailability; items: StockFinancialRecord[] }
  financialStatements: { code: string; timestamp: number; source: StockDataSource | 'unavailable'; availability: DataAvailability; items: StockFinancialStatementRecord[] }
  shareholders: { code: string; timestamp: number; source: StockDataSource | 'unavailable'; availability: DataAvailability; items: StockShareholderRecord[] }
  institutions: { code: string; timestamp: number; source: StockDataSource | 'unavailable'; availability: DataAvailability; items: StockInstitutionRecord[] }
  unlocks: { code: string; timestamp: number; source: StockDataSource | 'unavailable'; availability: DataAvailability; items: StockUnlockRecord[] }
  blockTrades: { code: string; timestamp: number; source: StockDataSource | 'unavailable'; availability: DataAvailability; items: StockBlockTradeRecord[] }
  dividends: { code: string; timestamp: number; source: StockDataSource; availability: DataAvailability; items: StockDividendRecord[] }
}

const finite = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)
const text = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0
const source = (value: unknown): value is MarketSource => value === 'tdx' || value === 'stock-sdk' || value === 'mock'

export function isValidNormalizedQuote(value: unknown): value is NormalizedQuote {
  if (!value || typeof value !== 'object') return false
  const row = value as Partial<NormalizedQuote>
  return text(row.code) && text(row.name) && finite(row.price) && finite(row.prevClose) && row.prevClose >= 0 && finite(row.change) && finite(row.changePercent) && finite(row.volume) && row.volume >= 0 && finite(row.amount) && row.amount >= 0 && (row.turnoverRate === null || finite(row.turnoverRate)) && (row.amplitude === null || finite(row.amplitude)) && (row.volumeRatio === null || finite(row.volumeRatio)) && (row.limitUp === null || finite(row.limitUp)) && (row.limitDown === null || finite(row.limitDown)) && (row.limitStatus === 'up' || row.limitStatus === 'down' || row.limitStatus === 'none' || row.limitStatus === 'unsupported') && Number.isFinite(row.timestamp) && source(row.source) && Math.abs(row.change - (row.price - row.prevClose)) <= Math.max(0.02, Math.abs(row.price) * 0.002) && (row.prevClose === 0 || Math.abs(row.changePercent - row.change / row.prevClose * 100) <= 0.2)
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

export function validateMarketSectors(values: unknown): MarketSector[] {
  if (!Array.isArray(values)) return []
  return values.filter((value): value is MarketSector => Boolean(value && typeof value === 'object' && text((value as MarketSector).code) && text((value as MarketSector).name) && finite((value as MarketSector).changePercent) && ((value as MarketSector).kind == null || (value as MarketSector).kind === 'industry' || (value as MarketSector).kind === 'concept')))
}

export function validateMarketEtfs(values: unknown): MarketEtf[] {
  if (!Array.isArray(values)) return []
  return values.filter((value): value is MarketEtf => Boolean(value && typeof value === 'object' && text((value as MarketEtf).code) && text((value as MarketEtf).name) && finite((value as MarketEtf).price) && finite((value as MarketEtf).changePercent) && nullableFinite((value as MarketEtf).volume) && nullableFinite((value as MarketEtf).amount)))
}

export function validateFinancialRecords(values: unknown): StockFinancialRecord[] {
  if (!Array.isArray(values)) return []
  const nullableFields = ['peTtm', 'peStatic', 'peDynamic', 'pb', 'circulatingMarketCap', 'totalMarketCap', 'circulatingShares', 'totalShares'] as const
  return values.filter((value): value is StockFinancialRecord => Boolean(value && typeof value === 'object' && text((value as StockFinancialRecord).code) && text((value as StockFinancialRecord).name) && finite((value as StockFinancialRecord).asOf) && nullableFields.every((field) => nullableFinite((value as StockFinancialRecord)[field])) && sourceOrUnavailable((value as StockFinancialRecord).source)))
}

export function validateKlineBars(values: unknown): KlineBar[] {
  if (!Array.isArray(values)) return []
  return values.filter(isValidKlineBar).sort((a, b) => a.timestamp - b.timestamp).filter((bar, index, all) => index === 0 || bar.timestamp > all[index - 1].timestamp)
}

export function normalizeMarketCode(code: string): string {
  return code.trim().toLowerCase().replace(/^(sh|sz|bj)/, '')
}
