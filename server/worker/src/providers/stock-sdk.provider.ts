import { StockSDK } from 'stock-sdk'
import { validateKlineBars, validateNormalizedQuotes, type NormalizedQuote, type KlineBar } from '@zedarc/shared'

export interface ProviderIndex { code: string; name: string; value: number; change: number; changePercent: number; timestamp: number }
export interface ProviderSector { code: string; name: string; changePercent: number; leadingStock?: string; leadingChangePercent?: number }
export interface ProviderEtf { code: string; name: string; price: number; changePercent: number; volume: number; amount: number }
export interface ProviderSearch { code: string; name: string; type?: string }

const sdk = new StockSDK({ timeout: 8000, retry: { maxRetries: 2, baseDelay: 300 } })

export async function getSdkQuotes(codes: string[]): Promise<NormalizedQuote[]> {
  const rows = await sdk.quotes.cn(codes)
  const values = rows.map((row) => ({ code: row.code, name: row.name, price: row.price, prevClose: row.prevClose, change: row.change, changePercent: row.changePercent, volume: row.volume, amount: row.amount, timestamp: row.timestamp ?? Date.now(), source: 'stock-sdk' as const }))
  const valid = validateNormalizedQuotes(values, codes)
  if (!valid.length && rows.length) throw new Error('stock-sdk returned invalid quote data')
  return valid
}

export async function getSdkKline(code: string, period: 'daily' | 'weekly' | 'monthly' = 'daily', count = 240): Promise<KlineBar[]> {
  const rows = await sdk.kline.cn(code, { period })
  const values = rows.slice(-count).flatMap((row) => {
    if ([row.open, row.close, row.high, row.low, row.volume, row.amount].some((value) => value == null)) return []
    return [{ date: String(row.date), timestamp: new Date(row.date).getTime(), open: row.open as number, close: row.close as number, high: row.high as number, low: row.low as number, volume: row.volume as number, amount: row.amount as number, source: 'stock-sdk' as const }]
  })
  const valid = validateKlineBars(values)
  if (!valid.length && rows.length) throw new Error(`stock-sdk returned invalid K-line data for ${code}`)
  return valid
}

export async function getSdkIndices(): Promise<ProviderIndex[]> {
  const rows = await sdk.quotes.cn(['000001', '399001', '399006'])
  return rows.filter((row) => Number.isFinite(row.price) && Number.isFinite(row.change) && Number.isFinite(row.changePercent)).map((row) => ({ code: row.code, name: row.name, value: row.price, change: row.change, changePercent: row.changePercent, timestamp: row.timestamp ?? Date.now(), source: 'stock-sdk' as const }))
}

export async function getSdkSectors(): Promise<ProviderSector[]> {
  const rows = await sdk.board.industry.list()
  return rows.filter((row) => row.code && row.name && Number.isFinite(row.changePercent ?? 0)).map((row) => ({ code: row.code, name: row.name, changePercent: row.changePercent ?? 0, ...(row.leadingStock ? { leadingStock: row.leadingStock } : {}), ...(row.leadingStockChangePercent == null ? {} : { leadingChangePercent: row.leadingStockChangePercent }), source: 'stock-sdk' as const }))
}

export async function getSdkEtfs(limit = 100): Promise<ProviderEtf[]> {
  const codes = (await sdk.codes.fund()).slice(0, Math.max(1, Math.min(limit, 200)))
  const rows = await sdk.quotes.fund(codes)
  return rows.filter((row) => row.code && row.name && Number.isFinite(row.nav) && Number.isFinite(row.change)).map((row) => ({ code: row.code, name: row.name, price: row.nav, changePercent: row.nav ? row.change / row.nav * 100 : 0, volume: 0, amount: 0, timestamp: Date.now(), source: 'stock-sdk' as const }))
}

export async function searchSdk(keyword: string): Promise<ProviderSearch[]> {
  const rows = await sdk.search(keyword)
  return rows.filter((row) => row.code && row.name).map((row) => ({ code: row.code, name: row.name, type: row.type, source: 'stock-sdk' as const }))
}
