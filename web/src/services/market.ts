import { indexQuotes, marketBoards, marketStocks, type IndexQuote, type MarketBoardQuote, type StockQuote } from '@/mock/market'

const latency = 180
function clone<T>(value: T): T { return structuredClone(value) }

export function getMarketStocksSnapshot(): StockQuote[] { return clone(marketStocks) }

export async function getIndexQuotes(): Promise<IndexQuote[]> {
  await new Promise((resolve) => window.setTimeout(resolve, latency))
  return clone(indexQuotes)
}

export async function getMarketStocks(): Promise<StockQuote[]> {
  await new Promise((resolve) => window.setTimeout(resolve, latency))
  return clone(marketStocks)
}

export async function getBoardQuotes(board: string): Promise<MarketBoardQuote[]> {
  await new Promise((resolve) => window.setTimeout(resolve, latency))
  return clone(marketBoards[board] ?? [])
}

export async function searchStocks(keyword: string): Promise<StockQuote[]> {
  const stocks = await getMarketStocks()
  const query = keyword.trim().toLowerCase()
  return query ? stocks.filter((stock) => stock.name.includes(query) || stock.code.includes(query)) : []
}

export async function getStockQuote(code: string): Promise<StockQuote | undefined> {
  const stocks = await getMarketStocks()
  return stocks.find((stock) => stock.code === code)
}
