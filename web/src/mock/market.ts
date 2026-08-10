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

export const fallingStocks: StockQuote[] = [
  { code: '601318', name: '中国平安', price: '42.18', change: '-1.36', percent: '-3.12%', volume: '16.4亿', trend: 'down' },
  { code: '000858', name: '五粮液', price: '128.60', change: '-2.84', percent: '-2.16%', volume: '12.8亿', trend: 'down' },
  { code: '600036', name: '招商银行', price: '31.46', change: '-0.48', percent: '-1.50%', volume: '10.3亿', trend: 'down' },
  { code: '000333', name: '美的集团', price: '68.92', change: '-0.72', percent: '-1.03%', volume: '8.7亿', trend: 'down' },
]

export const marketStocks: StockQuote[] = [...risingStocks, ...fallingStocks]

export interface MarketBoardQuote {
  code: string
  name: string
  price: string
  change: string
  percent: string
  extra: string
  trend: 'up' | 'down'
}

export const marketBoards: Record<string, MarketBoardQuote[]> = {
  板块: [
    { code: 'BK0475', name: '新能源', price: '1,284.62', change: '+28.42', percent: '+2.26%', extra: '涨家 86', trend: 'up' },
    { code: 'BK0736', name: '半导体', price: '2,418.09', change: '+35.16', percent: '+1.48%', extra: '涨家 72', trend: 'up' },
    { code: 'BK0437', name: '医药生物', price: '1,092.36', change: '-12.08', percent: '-1.09%', extra: '跌家 64', trend: 'down' },
    { code: 'BK0428', name: '银行', price: '1,036.84', change: '-6.31', percent: '-0.61%', extra: '跌家 31', trend: 'down' },
  ],
  ETF: [
    { code: '510300', name: '沪深300ETF', price: '3.964', change: '+0.028', percent: '+0.71%', extra: '成交 18.6亿', trend: 'up' },
    { code: '159919', name: '沪深300ETF', price: '4.012', change: '+0.021', percent: '+0.53%', extra: '成交 12.4亿', trend: 'up' },
    { code: '512480', name: '半导体ETF', price: '0.962', change: '-0.013', percent: '-1.33%', extra: '成交 8.1亿', trend: 'down' },
    { code: '159915', name: '创业板ETF', price: '2.184', change: '-0.018', percent: '-0.82%', extra: '成交 7.5亿', trend: 'down' },
  ],
  债券: [
    { code: '113050', name: '南银转债', price: '118.620', change: '+1.420', percent: '+1.21%', extra: '成交 3.8亿', trend: 'up' },
    { code: '110053', name: '苏银转债', price: '126.380', change: '+0.880', percent: '+0.70%', extra: '成交 2.6亿', trend: 'up' },
    { code: '127089', name: '晶澳转债', price: '104.920', change: '-0.680', percent: '-0.64%', extra: '成交 1.9亿', trend: 'down' },
  ],
  科创: [
    { code: '688981', name: '中芯国际', price: '54.28', change: '+2.86', percent: '+5.56%', extra: '成交 36.2亿', trend: 'up' },
    { code: '688041', name: '海光信息', price: '82.16', change: '+3.42', percent: '+4.34%', extra: '成交 21.8亿', trend: 'up' },
    { code: '688256', name: '寒武纪', price: '286.80', change: '-5.70', percent: '-1.95%', extra: '成交 18.4亿', trend: 'down' },
  ],
  港股: [
    { code: '00700', name: '腾讯控股', price: '382.60', change: '+6.40', percent: '+1.70%', extra: '成交 86.4亿', trend: 'up' },
    { code: '09988', name: '阿里巴巴', price: '96.25', change: '+1.35', percent: '+1.42%', extra: '成交 51.7亿', trend: 'up' },
    { code: '01810', name: '小米集团', price: '17.84', change: '-0.22', percent: '-1.22%', extra: '成交 32.6亿', trend: 'down' },
  ],
}

export const marketNews = [
  { time: '14:32', title: '两市成交额突破万亿，新能源板块持续走强', tag: '市场' },
  { time: '13:58', title: '政策预期升温，科技成长股迎来资金关注', tag: '热点' },
  { time: '11:24', title: '北向资金早盘净流入 42.6 亿元', tag: '资金' },
]
