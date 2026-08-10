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
