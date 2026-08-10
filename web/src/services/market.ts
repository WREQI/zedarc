import { indexQuotes, marketBoards, marketStocks, type IndexQuote, type MarketBoardQuote, type StockQuote } from '@/mock/market'
import { getRealIndexes, getRealStock, getRealStocks } from '@/services/stock-sdk-adapter'

const latency = 180
function clone<T>(value: T): T { return structuredClone(value) }

export function getMarketStocksSnapshot(): StockQuote[] { return clone(marketStocks) }

export async function getIndexQuotes(): Promise<IndexQuote[]> {
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
  // stock-sdk does not expose the same board ranking shape as the original mini-program.
  // Keep the mock board data until a dedicated board endpoint is introduced.
  await delay()
  return clone(marketBoards[board] ?? [])
}

export async function searchStocks(keyword: string): Promise<StockQuote[]> {
  const query = keyword.trim().toLowerCase()
  if (!query) return []
  try {
    const realStocks = await getRealStocks()
    const matches = realStocks.filter((stock) => stock.name.includes(query) || stock.code.includes(query))
    if (matches.length) return matches
  } catch { /* fall through to the local catalogue */ }
  const stocks = await getMarketStocks()
  return stocks.filter((stock) => stock.name.includes(query) || stock.code.includes(query))
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

function delay() {
  return new Promise<void>((resolve) => window.setTimeout(resolve, latency))
}
