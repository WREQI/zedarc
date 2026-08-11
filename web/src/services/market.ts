import { getRealIndexes, getRealStock, getRealStocks } from '@/services/stock-sdk-adapter'
import { apiFetch } from '@/services/api-client'
import type { CapitalFlowData, IndexQuote, LimitBoardResponse, MarketBoardQuote, MarketRankQuote, MarketSentiment, SectorDetailResponse, StockDetailResponse, StockQuote } from '@/services/market-types'

export function getMarketSentiment(): Promise<MarketSentiment> {
  return apiFetch<MarketSentiment>('/api/market/sentiment')
}

export async function getIndexQuotes(): Promise<IndexQuote[]> {
  try {
    const result = await apiFetch<Array<{ code: string; name: string; value: number; change: number; changePercent: number }>>('/api/market/indices')
    if (result.length) return result.map((item) => ({ code: item.code, name: item.name, value: item.value.toFixed(2), change: signed(item.change), percent: `${signed(item.changePercent)}%`, trend: item.changePercent >= 0 ? 'up' : 'down' }))
  } catch { /* try the direct provider below */ }
  try { return await getRealIndexes() } catch { return [] }
}

export async function getLimitBoard(direction: 'up' | 'down'): Promise<LimitBoardResponse> {
  return apiFetch<LimitBoardResponse>(`/api/market/limit-board?direction=${direction}`)
}

export async function getMarketRankings(type: string, keyword = ''): Promise<MarketRankQuote[]> {
  const query = new URLSearchParams({ type, limit: '100' })
  if (keyword.trim()) query.set('keyword', keyword.trim())
  const values = await apiFetch<Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number; amount: number; turnoverRate: number | null; amplitude: number | null; volumeRatio: number | null; limitUp: number | null; limitDown: number | null; limitStatus: 'up' | 'down' | 'none' | 'unsupported' }>>(`/api/market/rankings?${query}`)
  return values.map((quote) => ({ code: quote.code, name: quote.name, price: quote.price.toFixed(2), change: signed(quote.change), percent: `${signed(quote.changePercent)}%`, volume: formatAmount(quote.volume), amount: formatAmount(quote.amount), turnoverRate: percentOrUnavailable(quote.turnoverRate), amplitude: percentOrUnavailable(quote.amplitude), volumeRatio: valueOrUnavailable(quote.volumeRatio), limitUp: quote.limitUp, limitDown: quote.limitDown, limitStatus: quote.limitStatus, trend: quote.change >= 0 ? 'up' : 'down' }))
}

export async function getMarketStocks(): Promise<StockQuote[]> {
  try {
    const quotes = await apiFetch<Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>>('/api/market/quotes')
    if (quotes.length) return quotes.map(toStockQuote)
  } catch { /* try the direct provider below */ }
  try { return await getRealStocks() } catch { return [] }
}

export async function getBoardQuotes(board: string, kind: 'industry' | 'concept' = 'industry'): Promise<MarketBoardQuote[]> {
  const endpoint = board === '板块' ? `/api/market/sectors?kind=${kind}` : board === 'ETF' ? '/api/market/etfs?limit=50' : ''
  if (!endpoint) return []
  try {
    const values = await apiFetch<Array<{ code: string; name: string; price?: number; changePercent: number; volume?: number; amount?: number; leadingStock?: string }>>(endpoint)
    return values.map((item) => ({ code: item.code, name: item.name, price: item.price == null ? '--' : item.price.toFixed(3), change: item.price == null ? '--' : signed(item.changePercent), percent: `${signed(item.changePercent)}%`, extra: item.leadingStock ?? (item.amount == null || item.amount <= 0 ? '' : `成交 ${formatAmount(item.amount)}`), trend: item.changePercent >= 0 ? 'up' : 'down' }))
  } catch { return [] }
}

export async function searchStocks(keyword: string): Promise<StockQuote[]> {
  const query = keyword.trim().toLowerCase()
  if (!query) return []
  try {
    const results = await apiFetch<Array<{ code: string; name: string; type?: string }>>(`/api/market/search?q=${encodeURIComponent(query)}`)
    return results.map((item) => ({ code: item.code, name: item.name, price: '--', change: '--', percent: '--', volume: item.type ?? '证券', trend: 'up' }))
  } catch { /* try the direct provider below */ }
  try { return (await getRealStocks()).filter((stock) => stock.name.toLowerCase().includes(query) || stock.code.toLowerCase().includes(query)) } catch { return [] }
}

export async function getSectorDetail(code: string, kind: 'industry' | 'concept' = 'industry'): Promise<SectorDetailResponse> {
  return apiFetch<SectorDetailResponse>(`/api/market/sector-detail?code=${encodeURIComponent(code)}&kind=${kind}`)
}

export async function getStockDetail(code: string): Promise<StockDetailResponse> {
  return apiFetch<StockDetailResponse>(`/api/market/detail?code=${encodeURIComponent(code)}`)
}

export async function getCapitalFlow(code: string): Promise<CapitalFlowData> {
  return apiFetch<CapitalFlowData>(`/api/market/capital-flow?code=${encodeURIComponent(code)}`)
}

export async function getStockQuote(code: string): Promise<StockQuote | undefined> {
  try {
    const [quote] = await apiFetch<Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>>(`/api/market/quotes?codes=${encodeURIComponent(code)}`)
    if (quote) return toStockQuote(quote)
  } catch { /* try the direct provider below */ }
  try { return await getRealStock(code) } catch { return undefined }
}

function signed(value: number) { return `${value >= 0 ? '+' : ''}${value.toFixed(2)}` }
function toStockQuote(quote: { code: string; name: string; price: number; change: number; changePercent: number; volume: number }): StockQuote { return { code: quote.code, name: quote.name, price: quote.price.toFixed(2), change: signed(quote.change), percent: `${signed(quote.changePercent)}%`, volume: formatAmount(quote.volume), trend: quote.change >= 0 ? 'up' : 'down' } }

/** Convert one validated-enough socket quote into the display model without replacing other symbols. */
export function stockQuoteFromRealtime(value: unknown): StockQuote | undefined {
  if (!value || typeof value !== 'object') return undefined
  const quote = value as Partial<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>
  if (typeof quote.code !== 'string' || typeof quote.name !== 'string' || ![quote.price, quote.change, quote.changePercent, quote.volume].every((item) => typeof item === 'number' && Number.isFinite(item))) return undefined
  return toStockQuote(quote as { code: string; name: string; price: number; change: number; changePercent: number; volume: number })
}
function formatAmount(value: number) { return value >= 100000000 ? `${(value / 100000000).toFixed(1)}亿` : `${(value / 10000).toFixed(1)}万` }
function percentOrUnavailable(value: number | null) { return value == null ? '不支持' : `${value.toFixed(2)}%` }
function valueOrUnavailable(value: number | null) { return value == null ? '不支持' : value.toFixed(2) }

export function getMarketStocksSnapshot(): StockQuote[] { return [] }
