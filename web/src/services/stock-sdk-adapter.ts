import { StockSDK } from 'stock-sdk'
import type { IndexQuote, MarketBoardQuote, StockQuote } from '@/mock/market'
import type { KlineCandle } from '@/services/kline'

const sdk = new StockSDK({ timeout: 8000, retry: { maxRetries: 1 } })

export const realDataEnabled = import.meta.env.VITE_ENABLE_REAL_DATA !== 'false'

const quoteCodes = ['300750', '601012', '002594', '600519', '601318', '000858', '600036', '000333']
const indexCodes = ['000001', '399001', '399006']

function formatNumber(value: number | null | undefined, digits = 2) {
  return Number.isFinite(value) ? Number(value).toLocaleString('zh-CN', { minimumFractionDigits: digits, maximumFractionDigits: digits }) : '--'
}

function formatVolume(value: number | null | undefined) {
  if (!Number.isFinite(value)) return '--'
  const amount = Number(value)
  if (amount >= 100000000) return `${(amount / 100000000).toFixed(1)}亿`
  if (amount >= 10000) return `${(amount / 10000).toFixed(1)}万`
  return amount.toLocaleString('zh-CN')
}

function toStockQuote(quote: { code: string; name: string; price: number; change: number; changePercent: number; volume: number }): StockQuote {
  return {
    code: quote.code,
    name: quote.name,
    price: formatNumber(quote.price),
    change: `${quote.change >= 0 ? '+' : ''}${formatNumber(quote.change)}`,
    percent: `${quote.changePercent >= 0 ? '+' : ''}${quote.changePercent.toFixed(2)}%`,
    volume: formatVolume(quote.volume),
    trend: quote.change >= 0 ? 'up' : 'down',
  }
}

export async function getRealStocks(): Promise<StockQuote[]> {
  if (!realDataEnabled) throw new Error('real data disabled')
  const quotes = await sdk.quotes.cn(quoteCodes)
  if (!quotes.length) throw new Error('empty quote response')
  return quotes.map(toStockQuote)
}

export async function getRealStock(code: string): Promise<StockQuote | undefined> {
  if (!realDataEnabled) throw new Error('real data disabled')
  const [quote] = await sdk.quotes.cn([code])
  return quote ? toStockQuote(quote) : undefined
}

export async function getRealIndexes(): Promise<IndexQuote[]> {
  if (!realDataEnabled) throw new Error('real data disabled')
  const quotes = await sdk.quotes.cn(indexCodes)
  if (!quotes.length) throw new Error('empty index response')
  return quotes.map((quote) => ({
    name: quote.name,
    code: quote.code,
    value: formatNumber(quote.price),
    change: `${quote.change >= 0 ? '+' : ''}${formatNumber(quote.change)}`,
    percent: `${quote.changePercent >= 0 ? '+' : ''}${quote.changePercent.toFixed(2)}%`,
    trend: quote.change >= 0 ? 'up' : 'down',
  }))
}

export async function getRealKline(code: string, period: 'daily' | 'weekly' | 'monthly' = 'daily', adjust: '' | 'qfq' | 'hfq' = 'qfq'): Promise<KlineCandle[]> {
  if (!realDataEnabled) throw new Error('real data disabled')
  const rows = await sdk.kline.cn(code, { period, adjust })
  const candles = rows.flatMap((row) => {
    if ([row.open, row.close, row.high, row.low].some((value) => value == null)) return []
    return [{
      date: row.date,
      timestamp: row.timestamp ?? Date.parse(row.date),
      open: row.open as number,
      close: row.close as number,
      high: row.high as number,
      low: row.low as number,
      volume: row.volume ?? 0,
      turnover: row.amount ?? 0,
    }]
  })
  if (!candles.length) throw new Error('empty kline response')
  return candles
}

export async function getRealMinuteKline(code: string): Promise<KlineCandle[]> {
  if (!realDataEnabled) throw new Error('real data disabled')
  const rows = await sdk.kline.cnMinute(code, { period: '1' })
  const candles = rows.flatMap((row) => {
    if ([row.open, row.close, row.high, row.low].some((value) => value == null)) return []
    return [{ date: row.time.slice(11, 16), timestamp: row.timestamp ?? Date.parse(row.time), open: row.open as number, close: row.close as number, high: row.high as number, low: row.low as number, volume: row.volume ?? 0, turnover: row.amount ?? 0 }]
  })
  if (!candles.length) throw new Error('empty minute response')
  return candles
}

export function normalizeTdxCode(code: string) {
  if (/^(sh|sz|bj)/i.test(code)) return code.toLowerCase()
  return code.startsWith('6') ? `sh${code}` : code.startsWith('4') || code.startsWith('8') || code.startsWith('9') ? `bj${code}` : `sz${code}`
}

export type { MarketBoardQuote }
