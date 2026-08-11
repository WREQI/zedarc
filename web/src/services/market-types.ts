import type { MarketEtf, MarketEtfDetail, MarketHistory, MarketHistoryPoint, StockFinancialRecord } from '@zedarc/shared'

export type { MarketEtf, MarketEtfDetail, MarketHistory, MarketHistoryPoint, StockFinancialRecord }

export type MarketScope = '沪深市场' | '沪深港通' | '美股'

export interface MarketRankingFilters {
  minPercent?: number
  maxPercent?: number
  minAmount?: number
  maxAmount?: number
  minTurnoverRate?: number
  maxTurnoverRate?: number
  minPrice?: number
  maxPrice?: number
}

export interface IndexQuote {
  name: string
  code: string
  value: string
  change: string
  percent: string
  trend: 'up' | 'down'
}

export interface StockQuote {
  code: string
  name: string
  price: string
  change: string
  percent: string
  volume: string
  trend: 'up' | 'down'
  turnoverRate?: string
  amplitude?: string
  volumeRatio?: string
  limitStatus?: 'up' | 'down' | 'none' | 'unsupported'
}

export interface MarketRankQuote extends StockQuote {
  amount: string
  turnoverRate: string
  amplitude: string
  volumeRatio: string
  limitUp: number | null
  limitDown: number | null
}

export interface LimitBoardMetric<T = number> { value: T | null; available: boolean; reason?: string; source: string }
export interface LimitBoardResponse {
  direction: 'up' | 'down'
  timestamp: number
  source: string
  items: MarketRankQuote[]
  ladder: { firstBoard: LimitBoardMetric; secondBoard: LimitBoardMetric; aboveThirdBoard: LimitBoardMetric; maxStreak: LimitBoardMetric }
  brokenBoard: { items: MarketRankQuote[]; available: boolean; reason?: string; source: string }
  sealTime: LimitBoardMetric<string>
  sealAmount: LimitBoardMetric<number>
}

export interface OrderBookLevel { price: number; volume: number }
export interface TradeTick { time: string; timestamp: number; price: number; volume: number; direction: 'buy' | 'sell' | 'neutral'; source: string }
export type CapitalFlowCategory = 'main' | 'extraLarge' | 'large' | 'medium' | 'small'
export interface CapitalFlowItem { category: CapitalFlowCategory; netAmount: number; inflow: number | null; outflow: number | null; timestamp: number }
export interface CapitalFlowPoint { timestamp: number; date: string; netAmount: number; inflow: number | null; outflow: number | null }
export interface CapitalFlowRank { code: string; name: string; category: CapitalFlowCategory; netAmount: number; timestamp: number }
export interface CapitalFlowData { code: string; timestamp: number; source: string; availability: { available: boolean; source?: string; reason?: string; asOf?: number }; items: CapitalFlowItem[]; series: CapitalFlowPoint[]; ranking: CapitalFlowRank[] }
export interface PreMarketQuote { code: string; name: string; price: number | null; prevClose: number | null; change: number | null; changePercent: number | null; volume: number | null; amount: number | null; timestamp: number; source: string }
export interface PreMarketData { code: string; timestamp: number; source: string; availability: { available: boolean; source?: string; reason?: string; asOf?: number }; quote: PreMarketQuote | null }
export interface StockDetailResponse {
  code: string
  quote: { code: string; name: string; price: number; prevClose: number; open?: number; high?: number; low?: number; change: number; changePercent: number; volume: number; amount: number; timestamp: number; source: string } | null
  orderBook: { code: string; timestamp: number; source: string; bids: OrderBookLevel[]; asks: OrderBookLevel[] }
  trades: { timestamp: number; source: string; items: TradeTick[]; availability: { available: boolean; source?: string; reason?: string; asOf?: number } }
  capitalFlow: CapitalFlowData
  preMarket: PreMarketData
  financials: { items: Array<{ code: string; name: string; asOf: number; peTtm: number | null; peStatic: number | null; peDynamic: number | null; pb: number | null; circulatingMarketCap: number | null; totalMarketCap: number | null; circulatingShares: number | null; totalShares: number | null }>; availability: { available: boolean; source?: string; reason?: string } }
  financialStatements: { items: Array<{ code: string; name: string; reportDate: string; reportType: string | null; revenue: number | null; netProfit: number | null; netProfitYoy: number | null; eps: number | null; operatingCashFlow: number | null; totalAssets: number | null; totalLiabilities: number | null }>; availability: { available: boolean; source?: string; reason?: string } }
  shareholders: { items: Array<{ code: string; name: string; shareholderName: string; shareholderType: string | null; shares: number | null; ownershipRatio: number | null; reportDate: string | null }>; availability: { available: boolean; source?: string; reason?: string } }
  institutions: { items: Array<{ code: string; name: string; date: string; close: number | null; changePercent: number | null; buyOrgCount: number | null; sellOrgCount: number | null; orgBuyAmount: number | null; orgSellAmount: number | null; orgNetAmount: number | null }>; availability: { available: boolean; source?: string; reason?: string } }
  unlocks: { items: Array<{ code: string; name: string; unlockDate: string; shares: number | null; ownershipRatio: number | null; shareholderName: string | null }>; availability: { available: boolean; source?: string; reason?: string } }
  blockTrades: { items: Array<{ code: string; name: string; date: string; close: number | null; changePercent: number | null; dealPrice: number | null; dealVolume: number | null; dealAmount: number | null; premiumRate: number | null; buyBranch: string; sellBranch: string }>; availability: { available: boolean; source?: string; reason?: string } }
  dividends: { items: Array<{ code: string; name: string; reportDate: string | null; disclosureDate: string | null; equityRecordDate: string | null; exDividendDate: string | null; payDate: string | null; dividendPretax: number | null; dividendDesc: string | null; dividendYield: number | null; eps: number | null; bps: number | null; netProfitYoy: number | null }>; availability: { available: boolean; source?: string; reason?: string } }
}

export interface MarketSentimentMetric { value: number | null; availability: { available: boolean; source: string; reason?: string; asOf?: number } }
export interface MarketSentiment {
  timestamp: number
  source: string
  universe: { count: number; availability: MarketSentimentMetric['availability'] }
  advances: MarketSentimentMetric
  declines: MarketSentimentMetric
  unchanged: MarketSentimentMetric
  total: MarketSentimentMetric
  amount: MarketSentimentMetric
  limitUp: MarketSentimentMetric
  limitDown: MarketSentimentMetric
  strength: MarketSentimentMetric
}

export interface MarketBoardQuote {
  code: string
  name: string
  price: string
  change: string
  percent: string
  extra: string
  trend: 'up' | 'down'
  changePercent?: number
  amount?: number
  source?: string
}

export interface SectorDetailResponse {
  sector: { code: string; name: string; changePercent: number; leadingStock?: string; leadingChangePercent?: number; source?: string; kind?: 'industry' | 'concept' }
  kind: 'industry' | 'concept'
  members: Array<{ code: string; name: string; price: number; change: number; changePercent: number; amount?: number; source?: string }>
  availability: { available: boolean; source: string; reason?: string; asOf?: number }
  membersAvailability: { available: boolean; source: string; reason?: string; asOf?: number }
  capitalFlowAvailability: { available: boolean; source: string; reason?: string; asOf?: number }
}
