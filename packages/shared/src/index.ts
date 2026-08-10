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
  source: 'tdx' | 'stock-sdk' | 'mock'
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
  source: 'tdx' | 'stock-sdk' | 'mock'
}

export interface QuoteQuery { codes: string[] }
export interface KlineQuery { code: string; period?: 'daily' | 'weekly' | 'monthly'; adjust?: '' | 'qfq' | 'hfq' }
