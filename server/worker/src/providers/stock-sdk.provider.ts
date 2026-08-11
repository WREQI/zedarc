import { StockSDK } from 'stock-sdk'
import { isValidCapitalFlowData, normalizeMarketCode, validateKlineBars, validateFinancialRecords, validateMarketEtfs, validateMarketSectors, validateNormalizedQuotes, type CapitalFlowData, type CapitalFlowCategory, type NormalizedQuote, type KlineBar, type StockBlockTradeRecord, type StockDividendRecord, type StockFinancialRecord, type StockInstitutionRecord } from '@zedarc/shared'

export interface ProviderIndex { code: string; name: string; value: number; change: number; changePercent: number; timestamp: number }
export interface ProviderSector { code: string; name: string; changePercent: number; leadingStock?: string; leadingChangePercent?: number }
export interface ProviderEtf { code: string; name: string; price: number; changePercent: number; volume: number; amount: number }
export interface ProviderSearch { code: string; name: string; type?: string }

const capitalFlowCategories: Array<{ category: CapitalFlowCategory; field: 'mainNetInflow' | 'superLargeNetInflow' | 'largeNetInflow' | 'mediumNetInflow' | 'smallNetInflow' }> = [
  { category: 'main', field: 'mainNetInflow' },
  { category: 'extraLarge', field: 'superLargeNetInflow' },
  { category: 'large', field: 'largeNetInflow' },
  { category: 'medium', field: 'mediumNetInflow' },
  { category: 'small', field: 'smallNetInflow' },
]

type CapitalFlowRow = { date: string; mainNetInflow: number | null; superLargeNetInflow: number | null; largeNetInflow: number | null; mediumNetInflow: number | null; smallNetInflow: number | null }
type CapitalFlowRankRow = Omit<CapitalFlowRow, 'date'> & { code: string; name: string }

export async function getSdkCapitalFlow(code: string): Promise<CapitalFlowData> {
  const normalized = normalizeMarketCode(code)
  const [history, rank] = await Promise.all([
    sdk.fundFlow.individual(normalized, { period: 'daily' }) as Promise<CapitalFlowRow[]>,
    sdk.fundFlow.rank({ indicator: 'today' }) as Promise<CapitalFlowRankRow[]>,
  ])
  const validHistory = history.filter((row) => row && typeof row.date === 'string' && capitalFlowCategories.every(({ field }) => Number.isFinite(row[field])))
  const latest = validHistory.at(-1)
  if (!latest) throw new Error(`stock-sdk returned no capital-flow data for ${normalized}`)
  const timestamp = new Date(`${latest.date}T23:59:59Z`).getTime()
  const items = capitalFlowCategories.map(({ category, field }) => ({ category, netAmount: latest[field] as number, inflow: null, outflow: null, timestamp }))
  const series = validHistory.map((row) => ({ timestamp: new Date(`${row.date}T23:59:59Z`).getTime(), date: row.date, netAmount: row.mainNetInflow as number, inflow: null, outflow: null }))
  const ranking = rank.filter((row) => row && typeof row.code === 'string' && typeof row.name === 'string').flatMap((row) => capitalFlowCategories.flatMap(({ category, field }) => Number.isFinite(row[field]) ? [{ code: normalizeMarketCode(row.code), name: row.name, category, netAmount: row[field] as number, timestamp }] : []))
  const result = { code: normalized, timestamp, source: 'stock-sdk' as const, availability: { available: true, source: 'stock-sdk', asOf: timestamp }, items, series, ranking }
  if (!isValidCapitalFlowData(result)) throw new Error(`stock-sdk returned invalid capital-flow data for ${normalized}`)
  return result
}

export async function getSdkFundamentals(code: string): Promise<StockFinancialRecord[]> {
  const [row] = await sdk.quotes.cn([code])
  if (!row) return []
  const records = [{ code: row.code, name: row.name, asOf: row.timestamp ?? Date.now(), peTtm: row.pe, peStatic: row.peStatic, peDynamic: row.peDynamic, pb: row.pb, circulatingMarketCap: row.circulatingMarketCap, totalMarketCap: row.totalMarketCap, circulatingShares: row.circulatingShares, totalShares: row.totalShares, source: 'stock-sdk' as const }]
  return validateFinancialRecords(records)
}

export async function getSdkDividends(code: string): Promise<StockDividendRecord[]> {
  const rows = await sdk.reference.dividendDetail(code)
  return rows.map((row) => ({ code: row.code, name: row.name, reportDate: row.reportDate, disclosureDate: row.disclosureDate, equityRecordDate: row.equityRecordDate, exDividendDate: row.exDividendDate, payDate: row.payDate, dividendPretax: row.dividendPretax, dividendDesc: row.dividendDesc, dividendYield: row.dividendYield, eps: row.eps, bps: row.bps, netProfitYoy: row.netProfitYoy, source: 'stock-sdk' }))
}

function dateDaysAgo(days: number) {
  const date = new Date(Date.now() - days * 86400000)
  return `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`
}

export async function getSdkInstitutions(code: string): Promise<StockInstitutionRecord[]> {
  const normalized = normalizeMarketCode(code)
  const rows = await sdk.dragonTiger.institution({ startDate: dateDaysAgo(180), endDate: dateDaysAgo(0) })
  return rows.filter((row) => normalizeMarketCode(row.code) === normalized).map((row) => ({ ...row, code: normalized, source: 'stock-sdk' as const }))
}

export async function getSdkBlockTrades(code: string): Promise<StockBlockTradeRecord[]> {
  const normalized = normalizeMarketCode(code)
  const rows = await sdk.blockTrade.detail({ startDate: dateDaysAgo(180), endDate: dateDaysAgo(0) })
  return rows.filter((row) => normalizeMarketCode(row.code) === normalized).map((row) => ({ ...row, code: normalized, source: 'stock-sdk' as const }))
}

const sdk = new StockSDK({ timeout: 8000, retry: { maxRetries: 2, baseDelay: 300 } })

export async function getSdkQuotes(codes: string[]): Promise<NormalizedQuote[]> {
  const rows = await sdk.quotes.cn(codes)
  const values = rows.map((row) => ({ code: row.code, name: row.name, price: row.price, prevClose: row.prevClose, change: row.change, changePercent: row.changePercent, volume: row.volume, amount: row.amount, turnoverRate: row.turnoverRate, amplitude: row.amplitude, volumeRatio: row.volumeRatio, limitUp: row.limitUp, limitDown: row.limitDown, limitStatus: getLimitStatus(row.price, row.limitUp, row.limitDown), timestamp: row.timestamp ?? Date.now(), source: 'stock-sdk' as const }))
  const valid = validateNormalizedQuotes(values, codes)
  if (!valid.length && rows.length) throw new Error('stock-sdk returned invalid quote data')
  return valid
}

function getLimitStatus(price: number, limitUp: number | null, limitDown: number | null): 'up' | 'down' | 'none' | 'unsupported' {
  if (limitUp == null || limitDown == null) return 'unsupported'
  if (price === limitUp) return 'up'
  if (price === limitDown) return 'down'
  return 'none'
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
  const values = rows.filter((row) => row.code && row.name && Number.isFinite(row.changePercent)).map((row) => ({ code: row.code, name: row.name, changePercent: row.changePercent as number, ...(row.leadingStock ? { leadingStock: row.leadingStock } : {}), ...(row.leadingStockChangePercent == null ? {} : { leadingChangePercent: row.leadingStockChangePercent }), source: 'stock-sdk' as const, kind: 'industry' as const, timestamp: Date.now() }))
  return validateMarketSectors(values)
}

export async function getSdkEtfs(_limit = 100): Promise<ProviderEtf[]> {
  // stock-sdk exposes public-fund NAV here, not ETF exchange quotes. NAV is not
  // a tradable ETF price and the API does not publish volume/amount, so do not
  // manufacture an ETF snapshot from it.
  return validateMarketEtfs([])
}

export async function searchSdk(keyword: string): Promise<ProviderSearch[]> {
  const rows = await sdk.search(keyword)
  return rows.filter((row) => row.code && row.name).map((row) => ({ code: row.code, name: row.name, type: row.type, source: 'stock-sdk' as const }))
}
