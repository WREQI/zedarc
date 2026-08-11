import { createServer } from 'node:http'
import { createClient, type RedisClientType } from 'redis'
import { getSdkBlockTrades, getSdkCapitalFlow, getSdkDividends, getSdkEtfs, getSdkFundamentals, getSdkInstitutions, getSdkIndices, getSdkKline, getSdkQuotes, getSdkSectors, searchSdk } from './providers/stock-sdk.provider.js'
import { calculateMarketSentiment, isValidCapitalFlowData, validateFinancialRecords, validateKlineBars, validateMarketEtfs, validateMarketSectors, validateNormalizedQuotes, type QuoteRealtimeMessage } from '@zedarc/shared'
import { KlineCategory } from 'node-tdx-market'
import { TdxProvider, type TdxEtfConfig } from './providers/tdx.provider.js'
import { checkPriceAlerts } from './alerts/alert.worker.js'
import { workerLog } from './observability.js'

const redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379' })
const codes = (process.env.MARKET_CODES ?? '600519,000001,300750,600036').split(',').map((code) => code.trim()).filter(Boolean)
const etfConfig: TdxEtfConfig[] = (process.env.MARKET_ETFS ?? '').split(',').map((entry) => {
  const [code, ...name] = entry.split(':')
  return code && name.length ? { code: code.trim(), name: name.join(':').trim() } : null
}).filter((item): item is TdxEtfConfig => Boolean(item?.code && item.name))
const tdx = new TdxProvider()
let tdxConnected = false
let running = true
let provider = 'none'
let lastSuccess = 0
let collections = 0
let failures = 0
let lastProviderCheck = 0
let lastProviderError: string | null = null
const providerFailures = new Map<string, number>([['tdx', 0], ['stock-sdk', 0]])
const orderBookState = new Map<string, { sequence: number; bids: Map<number, number>; asks: Map<number, number> }>()
const tradesState = new Map<string, { sequence: number; keys: Set<string> }>()
const quoteSequences = new Map<string, number>()

async function ensureRedis() {
  if (redis.isOpen) return true
  try { await redis.connect(); workerLog('info', 'redis.connected'); return true } catch (error) { workerLog('error', 'redis.unavailable', { error: error instanceof Error ? error.message : String(error) }); return false }
}
async function cache(key: string, value: unknown, ttl: number) { if (await ensureRedis()) await redis.set(key, JSON.stringify(value), { EX: ttl }) }
async function appendHistory<T extends { timestamp: number }>(key: string, point: T, limit = 800) {
  if (!(await ensureRedis())) return
  try {
    const existing = JSON.parse(await redis.get(key) ?? '[]') as T[]
    const merged = [...existing.filter((item) => item.timestamp !== point.timestamp), point].sort((a, b) => a.timestamp - b.timestamp).slice(-limit)
    await redis.set(key, JSON.stringify(merged), { EX: 90 * 86400 })
  } catch (error) { console.warn(`[market-worker] history cache unavailable for ${key}:`, error instanceof Error ? error.message : error) }
}
async function publish(channel: string, data: unknown) { if (await ensureRedis()) await redis.publish(channel, JSON.stringify({ type: channel.replace(/^market:/, ''), channel, data, timestamp: Date.now() })) }
function levelMap(levels: Array<{ price: number; volume: number }>) { return new Map(levels.map((level) => [level.price, level.volume])) }
function changedLevels(previous: Map<number, number>, current: Map<number, number>) {
  return [...new Set([...previous.keys(), ...current.keys()])].filter((price) => previous.get(price) !== current.get(price)).map((price) => ({ price, volume: current.get(price) ?? 0 }))
}
async function publishOrderBook(code: string, orderBook: Awaited<ReturnType<typeof tdx.getQuoteBook>>) {
  const previous = orderBookState.get(code)
  const bids = levelMap(orderBook.bids)
  const asks = levelMap(orderBook.asks)
  const sequence = (previous?.sequence ?? 0) + 1
  const kind = previous ? 'delta' : 'snapshot'
  await publish(`market:orderbook:${code}`, { kind, code, sequence, timestamp: orderBook.timestamp, source: orderBook.source, bids: previous ? changedLevels(previous.bids, bids) : orderBook.bids, asks: previous ? changedLevels(previous.asks, asks) : orderBook.asks })
  orderBookState.set(code, { sequence, bids, asks })
}
function tradeKey(item: { time: string; price: number; volume: number; direction: string }) { return `${item.time}|${item.price}|${item.volume}|${item.direction}` }
async function publishTrades(code: string, items: Awaited<ReturnType<typeof tdx.getTrades>>) {
  const previous = tradesState.get(code)
  const currentKeys = new Set(items.map(tradeKey))
  const delta = previous ? items.filter((item) => !previous.keys.has(tradeKey(item))) : items
  const sequence = (previous?.sequence ?? 0) + 1
  await publish(`market:trades:${code}`, { kind: previous ? 'delta' : 'snapshot', code, sequence, timestamp: Date.now(), source: 'tdx', items: delta })
  tradesState.set(code, { sequence, keys: currentKeys })
}
async function markProvider(name: string, ok: boolean, error?: unknown) {
  const checkedAt = Date.now()
  lastProviderCheck = checkedAt
  if (ok) { provider = name; lastSuccess = checkedAt; lastProviderError = null; providerFailures.set(name, 0) }
  else { lastProviderError = error instanceof Error ? error.message : String(error); providerFailures.set(name, (providerFailures.get(name) ?? 0) + 1) }
  await cache('market:provider:status', { provider: ok ? name : 'unavailable', ok, lastSuccess, checkedAt, staleAfterMs: Number(process.env.MARKET_STALE_AFTER_MS ?? 30000), error: lastProviderError, providers: Object.fromEntries([...providerFailures].map(([providerName, failureCount]) => [providerName, { failureCount, healthy: providerName === name && ok }])) }, 300)
}
async function writeQuotes(quotes: Awaited<ReturnType<typeof getSdkQuotes>>) {
  const valid = validateNormalizedQuotes(quotes, codes)
  if (!valid.length && quotes.length) throw new Error('refusing to cache invalid normalized quotes')
  await Promise.all(valid.map(async (quote) => { const sequence = (quoteSequences.get(quote.code) ?? 0) + 1; quoteSequences.set(quote.code, sequence); const update: QuoteRealtimeMessage = { ...quote, kind: 'delta', sequence }; await cache(`quote:${quote.code}`, quote, 30); await publish(`market:quote:${quote.code}`, update); await publish('market:quote', update) }))
  await cache('market:quotes', valid, 30)
  await cache('market:sentiment', calculateMarketSentiment(valid), 30)
  await publish('market:quotes', valid)
  await publish('market:sentiment', calculateMarketSentiment(valid))
  await publish('market:updates', quotes)
}
async function writeCapitalFlow(code: string) {
  try {
    const data = await getSdkCapitalFlow(code)
    if (!isValidCapitalFlowData(data)) throw new Error('refusing to cache invalid capital-flow data')
    await cache(`capital-flow:${code}`, data, 300)
    await publish(`market:capital-flow:${code}`, data)
  } catch (error) {
    await cache(`capital-flow:${code}`, { code, timestamp: Date.now(), source: 'unavailable', availability: { available: false, source: 'tdx/stock-sdk', reason: '现有行情 provider 未提供主力、超大单、大单、中单、小单资金流及其时间序列/排行' }, items: [], series: [], ranking: [] }, 30)
    console.warn(`[market-worker] capital-flow unavailable for ${code}:`, error instanceof Error ? error.message : error)
  }
}
async function collectFundamentalData() {
  for (const code of codes) {
    try {
      const records = validateFinancialRecords(await getSdkFundamentals(code))
      if (records.length) {
        await cache(`stock-detail:financials:${code}`, records, 900)
        for (const record of records) await appendHistory(`stock-detail:financials-history:${code}`, { timestamp: record.asOf, record })
      }
    } catch (error) { console.warn(`[market-worker] financial data unavailable for ${code}:`, error instanceof Error ? error.message : error) }
    try {
      const records = await getSdkDividends(code)
      if (records.length) await cache(`stock-detail:dividends:${code}`, records, 86400)
    } catch (error) { console.warn(`[market-worker] dividend data unavailable for ${code}:`, error instanceof Error ? error.message : error) }
    try {
      const records = await getSdkInstitutions(code)
      await cache(`stock-detail:institutions:${code}`, records, 900)
    } catch (error) { console.warn(`[market-worker] institution data unavailable for ${code}:`, error instanceof Error ? error.message : error) }
    try {
      const records = await getSdkBlockTrades(code)
      await cache(`stock-detail:block-trades:${code}`, records, 900)
    } catch (error) { console.warn(`[market-worker] block-trade data unavailable for ${code}:`, error instanceof Error ? error.message : error) }
  }
}
async function collectReferenceData() {
  try { const keywords = (process.env.MARKET_SEARCH_KEYWORDS ?? '').split(',').map((item) => item.trim()).filter(Boolean); for (const keyword of keywords) { const results = await searchSdk(keyword); await cache(`market:search:${keyword.toLowerCase()}`, results, 300) } } catch (error) { console.warn('[market-worker] search unavailable:', error instanceof Error ? error.message : error) }
  try { const indices = await getSdkIndices(); await cache('market:indices', indices, 60); await publish('market:indices', indices) } catch (error) { console.warn('[market-worker] indices unavailable:', error instanceof Error ? error.message : error) }
  try {
    const sectors = validateMarketSectors(await getSdkSectors())
    if (sectors.length) {
      await cache('market:sectors', sectors, 300)
      await Promise.all(sectors.map((sector) => appendHistory(`market:sector-history:${sector.kind ?? 'industry'}:${sector.code}`, { timestamp: sector.timestamp ?? Date.now(), value: sector.changePercent, changePercent: sector.changePercent, source: sector.source ?? 'stock-sdk' })))
      await publish('market:sectors', sectors)
    }
  } catch (error) { console.warn('[market-worker] sectors unavailable:', error instanceof Error ? error.message : error) }
  try {
    const tdxEtfs = validateMarketEtfs(tdxConnected ? await tdx.getEtfs(etfConfig) : [])
    const etfs = tdxEtfs.length ? tdxEtfs : validateMarketEtfs(await getSdkEtfs(Number(process.env.MARKET_ETF_LIMIT ?? 100)))
    if (etfs.length) {
      await cache('market:etfs', etfs, 300)
      await Promise.all(etfs.map((etf) => appendHistory(`market:etf-history:${etf.code}`, { timestamp: etf.timestamp ?? Date.now(), value: etf.price, changePercent: etf.changePercent, source: etf.source ?? 'tdx' })))
      await publish('market:etfs', etfs)
    }
  } catch (error) { console.warn('[market-worker] ETFs unavailable:', error instanceof Error ? error.message : error) }
}
async function collect() {
  collections += 1
  let quotes: Awaited<ReturnType<typeof getSdkQuotes>> = []
  try {
    if (!tdxConnected) { await tdx.connect(); tdxConnected = true }
    quotes = await tdx.getQuotes(codes)
    provider = 'tdx'
    await markProvider('tdx', true)
    await writeQuotes(quotes)
    for (const code of codes) {
      try {
        const periods = [['daily', KlineCategory.Day], ...(collections === 1 || collections % 12 === 0 ? [['weekly', KlineCategory.Week], ['monthly', KlineCategory.Month]] as const : [])] as const
        for (const [period, category] of periods) {
          const bars = await tdx.getKline(code, Number(process.env.MARKET_KLINE_COUNT ?? 800), 0, category)
          const validBars = validateKlineBars(bars)
          if (!validBars.length && bars.length) throw new Error(`refusing to cache invalid K-line data for ${code}`)
          await cache(`kline:${period}:${code}`, validBars, 3600)
          await publish(`market:kline:${code}`, { code, period, bars })
        }
        const minute = await tdx.getMinute(code)
        await cache(`intraday:${code}`, minute.items.map((item) => ({ date: item.time, timestamp: Date.now(), open: item.price, close: item.price, high: item.price, low: item.price, volume: item.volume, amount: item.price * item.volume, source: 'tdx' })), 30)
        await publish(`market:intraday:${code}`, { code, items: minute.items })
        const orderBook = await tdx.getQuoteBook(code)
        await cache(`orderbook:${code}`, orderBook, 15)
        await publishOrderBook(code, orderBook)
        const trades = await tdx.getTrades(code)
        await cache(`trades:${code}`, trades, 15)
        await publishTrades(code, trades)
        await writeCapitalFlow(code)
      } catch (error) { console.warn(`[market-worker] TDX chart data unavailable for ${code}:`, error instanceof Error ? error.message : error) }
    }
    console.log(`[market-worker] TDX updated ${quotes.length} quotes`)
  } catch (error) {
    failures += 1
    tdxConnected = false
    tdx.disconnect()
    await markProvider('tdx', false, error)
    workerLog('warn', 'provider.fallback', { from: 'tdx', to: 'stock-sdk', error: error instanceof Error ? error.message : String(error) })
    try {
      quotes = await getSdkQuotes(codes)
      await markProvider('stock-sdk', true)
      await writeQuotes(quotes)
      for (const code of codes) { try { const periods = [['daily', getSdkKline] as const]; for (const [period, getBars] of periods) { const bars = await getBars(code, 'daily', Number(process.env.MARKET_KLINE_COUNT ?? 800)); const validBars = validateKlineBars(bars); if (!validBars.length && bars.length) throw new Error('invalid K-line data'); await cache(`kline:${period}:${code}`, validBars, 3600); await publish(`market:kline:${code}`, { code, period, bars: validBars }) } await writeCapitalFlow(code) } catch (klineError) { console.warn(`[market-worker] stock-sdk K-line unavailable for ${code}:`, klineError instanceof Error ? klineError.message : klineError) } }
      console.log(`[market-worker] stock-sdk updated ${quotes.length} quotes`)
    } catch (sdkError) { await markProvider('stock-sdk', false, sdkError); workerLog('error', 'provider.unavailable', { providers: ['tdx', 'stock-sdk'], error: sdkError instanceof Error ? sdkError.message : String(sdkError) }) }
  }
  if (quotes.length) {
    await collectReferenceData()
    if (collections === 1 || collections % 60 === 0) await collectFundamentalData()
  }
  try { const triggered = await checkPriceAlerts(redis); if (triggered) console.log(`[alert-worker] triggered ${triggered} price alerts`) } catch (error) { console.warn('[alert-worker] alert check failed:', error instanceof Error ? error.message : error) }
}

const healthPort = Number(process.env.HEALTH_PORT ?? 9090)
const healthServer = createServer((request, response) => {
  if (request.url === '/health' || request.url === '/health/live') {
    const ready = redis.isOpen
    const staleAfterMs = Number(process.env.MARKET_STALE_AFTER_MS ?? 30000)
    const providerReady = lastSuccess > 0 && Date.now() - lastSuccess <= staleAfterMs
    const fullyReady = ready && providerReady
    response.statusCode = fullyReady ? 200 : 503
    response.setHeader('content-type', 'application/json')
    response.end(JSON.stringify({ status: fullyReady ? 'ok' : 'degraded', service: 'market-worker', redis: ready ? 'ok' : 'unavailable', provider, providerReady, lastSuccess, ageMs: lastSuccess ? Date.now() - lastSuccess : null, lastProviderCheck, lastProviderError }))
    return
  }
  if (request.url === '/metrics') {
    response.setHeader('content-type', 'text/plain; version=0.0.4')
    const staleAfterMs = Number(process.env.MARKET_STALE_AFTER_MS ?? 30000)
    const providerAge = lastSuccess ? Date.now() - lastSuccess : -1
    response.end(`# HELP zedarc_worker_collections_total Collection attempts\\n# TYPE zedarc_worker_collections_total counter\\nzedarc_worker_collections_total ${collections}\\n# HELP zedarc_worker_failures_total Collection failures\\n# TYPE zedarc_worker_failures_total counter\\nzedarc_worker_failures_total ${failures}\\n# HELP zedarc_worker_provider_last_success_timestamp_seconds Last successful provider update\\n# TYPE zedarc_worker_provider_last_success_timestamp_seconds gauge\\nzedarc_worker_provider_last_success_timestamp_seconds ${lastSuccess / 1000}\\n# HELP zedarc_worker_provider_stale Provider data is stale\\n# TYPE zedarc_worker_provider_stale gauge\\nzedarc_worker_provider_stale ${providerAge < 0 || providerAge > staleAfterMs ? 1 : 0}\\n# HELP zedarc_worker_provider_failures_total Provider failures\\n# TYPE zedarc_worker_provider_failures_total counter\\n${[...providerFailures].map(([name, count]) => `zedarc_worker_provider_failures_total{provider="${name}"} ${count}`).join('\\n')}\\n`)
    return
  }
  response.statusCode = 404
  response.end('not found')
})
healthServer.listen(healthPort, '0.0.0.0', () => console.log(`[market-worker] health server listening on ${healthPort}`))
await ensureRedis()
await collect()
const timer = setInterval(() => { if (running) void collect() }, Number(process.env.MARKET_INTERVAL_MS ?? 5000))
async function shutdown() { running = false; clearInterval(timer); healthServer.close(); tdx.disconnect(); if (redis.isOpen) await redis.quit(); process.exit(0) }
process.once('SIGINT', shutdown)
process.once('SIGTERM', shutdown)
console.log(`[market-worker] watching ${codes.join(', ')}`)
