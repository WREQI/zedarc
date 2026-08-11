import { getRealIndexes, getRealStock, getRealStocks } from '@/services/stock-sdk-adapter'
import { apiFetch } from '@/services/api-client'
import type { CapitalFlowData, IndexQuote, LimitBoardResponse, MarketBoardQuote, MarketEtf, MarketEtfDetail, MarketRankQuote, MarketRankingFilters, MarketScope, MarketSentiment, PreMarketData, SectorDetailResponse, StockDetailResponse, StockQuote } from '@/services/market-types'
import type { MarketCollection, MarketHistory, StockFinancialRecord } from '@zedarc/shared'

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

type ApiMarketRankQuote = {
  code: string
  name: string
  price?: number
  change?: number
  changePercent?: number
  volume?: number
  amount?: number
  turnoverRate?: number | null
  amplitude?: number | null
  volumeRatio?: number | null
  limitUp?: number | null
  limitDown?: number | null
  limitStatus?: 'up' | 'down' | 'none' | 'unsupported'
}

export async function getMarketRankings(type: string, keyword = '', market: MarketScope = '沪深市场', filters: MarketRankingFilters = {}): Promise<MarketRankQuote[]> {
  // The API currently exposes verified A-share rankings only. Do not reuse
  // those quotes for scopes whose provider is not available yet.
  if (market !== '沪深市场') return []

  const query = new URLSearchParams({ type, limit: '100' })
  if (keyword.trim()) query.set('keyword', keyword.trim())
  // Send thresholds to the API first. Older servers may ignore them; the page
  // still applies the same predicates locally to keep filtering consistent.
  Object.entries(filters).forEach(([key, value]) => {
    if (value != null && Number.isFinite(value)) query.set(key, String(value))
  })
  const values = await apiFetch<ApiMarketRankQuote[]>(`/api/market/rankings?${query}`)
  return values
    .filter((quote) => quote && typeof quote.code === 'string' && typeof quote.name === 'string')
    .map((quote) => ({
      code: quote.code,
      name: quote.name,
      price: numberOrUnavailable(quote.price),
      change: signedOrUnavailable(quote.change),
      percent: percentOrUnavailable(quote.changePercent),
      volume: formatAmount(quote.volume),
      amount: formatAmount(quote.amount),
      turnoverRate: percentOrUnavailable(quote.turnoverRate),
      amplitude: percentOrUnavailable(quote.amplitude),
      volumeRatio: valueOrUnavailable(quote.volumeRatio),
      limitUp: quote.limitUp ?? null,
      limitDown: quote.limitDown ?? null,
      limitStatus: quote.limitStatus ?? 'unsupported',
      trend: (quote.change ?? 0) >= 0 ? 'up' : 'down',
    }))
}

export async function getMarketStocks(market: MarketScope = '沪深市场'): Promise<StockQuote[]> {
  if (market !== '沪深市场') return []
  try {
    const quotes = await apiFetch<Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>>('/api/market/quotes')
    if (quotes.length) return quotes.map(toStockQuote)
  } catch { /* try the direct provider below */ }
  try { return await getRealStocks() } catch { return [] }
}

export async function getEtfs(limit = 100): Promise<MarketEtf[]> {
  const result = await apiFetch<MarketCollection<MarketEtf> | MarketEtf[]>(`/api/market/etfs?limit=${Math.min(100, Math.max(1, limit))}`)
  return Array.isArray(result) ? result : result.items
}

export function getEtfDetail(code: string): Promise<MarketEtfDetail> {
  return apiFetch<MarketEtfDetail>(`/api/market/etf-detail?code=${encodeURIComponent(code)}`)
}

export async function getBoardQuotes(board: string, kind: 'industry' | 'concept' = 'industry'): Promise<MarketBoardQuote[]> {
  if (board === 'ETF') {
    const values = await getEtfs(50)
    return values.map((item) => ({ code: item.code, name: item.name, price: item.price.toFixed(3), change: signed(item.price * item.changePercent / 100), percent: `${signed(item.changePercent)}%`, extra: item.amount != null && item.amount > 0 ? `成交 ${formatAmount(item.amount)}` : '', trend: item.changePercent >= 0 ? 'up' : 'down' }))
  }
  const endpoint = board === '板块' ? `/api/market/sectors?kind=${kind}` : ''
  if (!endpoint) return []
  const result = await apiFetch<MarketCollection<{ code: string; name: string; price?: number; changePercent: number; volume?: number; amount?: number; leadingStock?: string }> | Array<{ code: string; name: string; price?: number; changePercent: number; volume?: number; amount?: number; leadingStock?: string }>>(endpoint)
  const values = Array.isArray(result) ? result : result.items
  return values.map((item) => {
    const price = item.price == null ? '--' : item.price.toFixed(3)
    const extra = item.leadingStock || (item.amount && item.amount > 0 ? `成交 ${formatAmount(item.amount)}` : '')
    return { code: item.code, name: item.name, price, change: item.price == null ? '--' : signed(item.changePercent), percent: `${signed(item.changePercent)}%`, extra, trend: item.changePercent >= 0 ? 'up' : 'down', changePercent: item.changePercent, amount: item.amount }
  })
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

export function getSectorHistory(code: string, kind: 'industry' | 'concept' = 'industry', count = 240): Promise<MarketHistory> {
  return apiFetch<MarketHistory>(`/api/market/sector-history?code=${encodeURIComponent(code)}&kind=${kind}&count=${Math.min(800, Math.max(1, count))}`)
}

export function getEtfHistory(code: string, count = 240): Promise<MarketHistory> {
  return apiFetch<MarketHistory>(`/api/market/etf-history?code=${encodeURIComponent(code)}&count=${Math.min(800, Math.max(1, count))}`)
}

export function getFinancialHistory(code: string, count = 20): Promise<{ code: string; items: StockFinancialRecord[]; availability: { available: boolean; source: string; reason?: string; asOf?: number } }> {
  return apiFetch(`/api/market/financial-history?code=${encodeURIComponent(code)}&count=${Math.min(100, Math.max(1, count))}`)
}

export async function getPreMarket(code: string): Promise<PreMarketData> {
  return apiFetch<PreMarketData>(`/api/market/pre-market?code=${encodeURIComponent(code)}`)
}

export async function getStockQuote(code: string): Promise<StockQuote | undefined> {
  try {
    const [quote] = await apiFetch<Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>>(`/api/market/quotes?codes=${encodeURIComponent(code)}`)
    if (quote) return toStockQuote(quote)
  } catch { /* try the direct provider below */ }
  try { return await getRealStock(code) } catch { return undefined }
}

function signed(value: number) { return `${value >= 0 ? '+' : ''}${value.toFixed(2)}` }
function signedOrUnavailable(value: number | undefined) { return value == null || !Number.isFinite(value) ? '不支持' : signed(value) }
function numberOrUnavailable(value: number | undefined) { return value == null || !Number.isFinite(value) ? '不支持' : value.toFixed(2) }
function toStockQuote(quote: { code: string; name: string; price: number; change: number; changePercent: number; volume: number }): StockQuote { return { code: quote.code, name: quote.name, price: quote.price.toFixed(2), change: signed(quote.change), percent: `${signed(quote.changePercent)}%`, volume: formatAmount(quote.volume), trend: quote.change >= 0 ? 'up' : 'down' } }

/** Convert one validated-enough socket quote into the display model without replacing other symbols. */
export function stockQuoteFromRealtime(value: unknown): StockQuote | undefined {
  if (!value || typeof value !== 'object') return undefined
  const quote = value as Partial<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>
  if (typeof quote.code !== 'string' || typeof quote.name !== 'string' || ![quote.price, quote.change, quote.changePercent, quote.volume].every((item) => typeof item === 'number' && Number.isFinite(item))) return undefined
  return toStockQuote(quote as { code: string; name: string; price: number; change: number; changePercent: number; volume: number })
}
function formatAmount(value: number | null | undefined) { return value == null || !Number.isFinite(value) ? '不支持' : value >= 100000000 ? `${(value / 100000000).toFixed(1)}亿` : `${(value / 10000).toFixed(1)}万` }
function percentOrUnavailable(value: number | null | undefined) { return value == null || !Number.isFinite(value) ? '不支持' : `${value.toFixed(2)}%` }
function valueOrUnavailable(value: number | null | undefined) { return value == null || !Number.isFinite(value) ? '不支持' : value.toFixed(2) }

export function getMarketStocksSnapshot(): StockQuote[] { return [] }
