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

export interface OrderBookLevel { price: number; volume: number }
export interface TradeTick { time: string; timestamp: number; price: number; volume: number; direction: 'buy' | 'sell' | 'neutral'; source: string }
export type CapitalFlowCategory = 'main' | 'extraLarge' | 'large' | 'medium' | 'small'
export interface CapitalFlowItem { category: CapitalFlowCategory; netAmount: number; inflow: number | null; outflow: number | null; timestamp: number }
export interface CapitalFlowPoint { timestamp: number; date: string; netAmount: number; inflow: number | null; outflow: number | null }
export interface CapitalFlowRank { code: string; name: string; category: CapitalFlowCategory; netAmount: number; timestamp: number }
export interface CapitalFlowData { code: string; timestamp: number; source: string; availability: { available: boolean; source?: string; reason?: string; asOf?: number }; items: CapitalFlowItem[]; series: CapitalFlowPoint[]; ranking: CapitalFlowRank[] }
export interface StockDetailResponse {
  code: string
  quote: { code: string; name: string; price: number; prevClose: number; open?: number; high?: number; low?: number; change: number; changePercent: number; volume: number; amount: number; timestamp: number; source: string } | null
  orderBook: { code: string; timestamp: number; source: string; bids: OrderBookLevel[]; asks: OrderBookLevel[] }
  trades: { timestamp: number; source: string; items: TradeTick[]; availability: { available: boolean; source?: string; reason?: string; asOf?: number } }
  capitalFlow: CapitalFlowData
  financials: { items: Array<{ code: string; name: string; asOf: number; peTtm: number | null; peStatic: number | null; peDynamic: number | null; pb: number | null; circulatingMarketCap: number | null; totalMarketCap: number | null; circulatingShares: number | null; totalShares: number | null }>; availability: { available: boolean; source?: string; reason?: string } }
  shareholders: { items: never[]; availability: { available: boolean; source?: string; reason?: string } }
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
}
