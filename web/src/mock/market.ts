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

export const indexQuotes: IndexQuote[] = [
  { name: '上证指数', code: '000001', value: '3,248.52', change: '+18.42', percent: '+0.57%', trend: 'up' },
  { name: '深证成指', code: '399001', value: '10,142.81', change: '-32.16', percent: '-0.32%', trend: 'down' },
  { name: '创业板指', code: '399006', value: '2,018.94', change: '+12.08', percent: '+0.60%', trend: 'up' },
]

export const risingStocks: StockQuote[] = [
  { code: '300750', name: '宁德时代', price: '198.20', change: '+18.02', percent: '+10.00%', volume: '42.8亿', trend: 'up' },
  { code: '601012', name: '隆基绿能', price: '24.86', change: '+2.26', percent: '+10.00%', volume: '31.6亿', trend: 'up' },
  { code: '002594', name: '比亚迪', price: '268.50', change: '+19.80', percent: '+7.96%', volume: '28.3亿', trend: 'up' },
  { code: '600519', name: '贵州茅台', price: '1,684.00', change: '+66.00', percent: '+4.08%', volume: '19.7亿', trend: 'up' },
]

export const marketNews = [
  { time: '14:32', title: '两市成交额突破万亿，新能源板块持续走强', tag: '市场' },
  { time: '13:58', title: '政策预期升温，科技成长股迎来资金关注', tag: '热点' },
  { time: '11:24', title: '北向资金早盘净流入 42.6 亿元', tag: '资金' },
]
