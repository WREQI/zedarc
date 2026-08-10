import { indexQuotes, marketBoards, marketStocks, type IndexQuote, type MarketBoardQuote, type StockQuote } from '@/mock/market'
import { getRealIndexes, getRealStock, getRealStocks } from '@/services/stock-sdk-adapter'
import { apiFetch } from '@/services/api-client'

const latency = 180
function clone<T>(value: T): T { return structuredClone(value) }

export function getMarketStocksSnapshot(): StockQuote[] { return clone(marketStocks) }

export async function getIndexQuotes(): Promise<IndexQuote[]> {
  try { const result = await apiFetch<Array<{ code: string; name: string; value: number; change: number; changePercent: number }>>('/api/market/indices'); if (result.length) return result.map((item) => ({ code: item.code, name: item.name, value: item.value.toFixed(2), change: `${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}`, percent: `${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%`, trend: item.changePercent >= 0 ? 'up' : 'down' })) } catch { /* provider fallback */ }
  try { return clone(await getRealIndexes()) } catch { await delay(); return clone(indexQuotes) }
}

export async function getMarketStocks(): Promise<StockQuote[]> {
  try {
    const response = await fetch(`/api/market/quotes?codes=${marketStocks.map((stock) => stock.code).join(',')}`)
    if (response.ok) {
      const quotes = await response.json() as Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>
      if (quotes.length) return quotes.map(toStockQuote)
    }
  } catch { /* local development may run without the API container */ }
  try { return clone(await getRealStocks()) } catch { await delay(); return clone(marketStocks) }
}

export async function getBoardQuotes(board: string): Promise<MarketBoardQuote[]> {
  const endpoint = board === '板块' ? '/api/market/sectors' : board === 'ETF' ? '/api/market/etfs?limit=50' : ''
  if (endpoint) {
    try {
      const response = await fetch(endpoint)
      if (response.ok) {
        const values = await response.json() as Array<{ code: string; name: string; price?: number; changePercent: number; volume?: number; amount?: number; leadingStock?: string }>
        if (values.length) return values.map((item) => ({ code: item.code, name: item.name, price: item.price == null ? '--' : item.price.toFixed(3), change: item.price == null ? '--' : `${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}`, percent: `${item.changePercent >= 0 ? '+' : ''}${item.changePercent.toFixed(2)}%`, extra: item.leadingStock ?? (item.amount == null ? '' : `成交 ${formatAmount(item.amount)}`), trend: item.changePercent >= 0 ? 'up' : 'down' }))
      }
    } catch { /* local development may run without the API container */ }
  }
  await delay()
  return clone(marketBoards[board] ?? [])
}

export async function searchStocks(keyword: string): Promise<StockQuote[]> {
  const query = keyword.trim().toLowerCase()
  if (!query) return []
  try {
    const response = await fetch(`/api/market/search?q=${encodeURIComponent(query)}`)
    if (response.ok) {
      const results = await response.json() as Array<{ code: string; name: string; type?: string }>
      if (results.length) return results.map((item) => ({ code: item.code, name: item.name, price: '--', change: '--', percent: '--', volume: item.type ?? '证券', trend: 'up' as const }))
    }
  } catch { /* local development may run without the API container */ }
  try {
    const realStocks = await getRealStocks()
    const matches = realStocks.filter((stock) => stock.name.toLowerCase().includes(query) || stock.code.toLowerCase().includes(query))
    if (matches.length) return matches
  } catch { /* fall through to the local catalogue */ }
  const stocks = await getMarketStocks()
  return stocks.filter((stock) => stock.name.toLowerCase().includes(query) || stock.code.toLowerCase().includes(query))
}

export async function getStockQuote(code: string): Promise<StockQuote | undefined> {
  try {
    const response = await fetch(`/api/market/quotes?codes=${encodeURIComponent(code)}`)
    if (response.ok) {
      const [quote] = await response.json() as Array<{ code: string; name: string; price: number; change: number; changePercent: number; volume: number }>
      if (quote) return toStockQuote(quote)
    }
  } catch { /* local development may run without the API container */ }
  try {
    const real = await getRealStock(code)
    if (real) return real
  } catch { /* use mock data when the browser source is unavailable */ }
  const stocks = await getMarketStocks()
  return stocks.find((stock) => stock.code === code)
}

function toStockQuote(quote: { code: string; name: string; price: number; change: number; changePercent: number; volume: number }): StockQuote {
  return { code: quote.code, name: quote.name, price: quote.price.toFixed(2), change: `${quote.change >= 0 ? '+' : ''}${quote.change.toFixed(2)}`, percent: `${quote.changePercent >= 0 ? '+' : ''}${quote.changePercent.toFixed(2)}%`, volume: quote.volume >= 100000000 ? `${(quote.volume / 100000000).toFixed(1)}亿` : `${(quote.volume / 10000).toFixed(1)}万`, trend: quote.change >= 0 ? 'up' : 'down' }
}

function formatAmount(value: number) {
  return value >= 100000000 ? `${(value / 100000000).toFixed(1)}亿` : `${(value / 10000).toFixed(1)}万`
}

function delay() {
  return new Promise<void>((resolve) => window.setTimeout(resolve, latency))
}
