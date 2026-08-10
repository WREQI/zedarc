import { createServer } from 'node:http'
import { createClient, type RedisClientType } from 'redis'
import { getSdkEtfs, getSdkIndices, getSdkKline, getSdkQuotes, getSdkSectors, searchSdk } from './providers/stock-sdk.provider.js'
import { validateKlineBars, validateNormalizedQuotes } from '@zedarc/shared'
import { KlineCategory } from 'node-tdx-market'
import { TdxProvider } from './providers/tdx.provider.js'
import { checkPriceAlerts } from './alerts/alert.worker.js'

const redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379' })
const codes = (process.env.MARKET_CODES ?? '600519,000001,300750,600036').split(',').map((code) => code.trim()).filter(Boolean)
const tdx = new TdxProvider()
let tdxConnected = false
let running = true
let provider = 'none'
let lastSuccess = 0
let collections = 0
let failures = 0

async function ensureRedis() {
  if (redis.isOpen) return true
  try { await redis.connect(); return true } catch (error) { console.warn('[market-worker] Redis unavailable:', error instanceof Error ? error.message : error); return false }
}
async function cache(key: string, value: unknown, ttl: number) { if (await ensureRedis()) await redis.set(key, JSON.stringify(value), { EX: ttl }) }
async function publish(channel: string, data: unknown) { if (await ensureRedis()) await redis.publish(channel, JSON.stringify({ type: channel.replace(/^market:/, ''), channel, data, timestamp: Date.now() })) }
async function markProvider(name: string, ok: boolean, error?: unknown) {
  provider = ok ? name : provider
  if (ok) lastSuccess = Date.now()
  await cache('market:provider:status', { provider: ok ? name : 'unavailable', ok, lastSuccess, checkedAt: Date.now(), error: error instanceof Error ? error.message : undefined }, 300)
}
async function writeQuotes(quotes: Awaited<ReturnType<typeof getSdkQuotes>>) {
  const valid = validateNormalizedQuotes(quotes, codes)
  if (!valid.length && quotes.length) throw new Error('refusing to cache invalid normalized quotes')
  await Promise.all(valid.map(async (quote) => { await cache(`quote:${quote.code}`, quote, 30); await publish(`market:quote:${quote.code}`, quote); await publish('market:quote', quote) }))
  await publish('market:quotes', valid)
  await publish('market:updates', quotes)
}
async function collectReferenceData() {
  try { const keywords = (process.env.MARKET_SEARCH_KEYWORDS ?? '').split(',').map((item) => item.trim()).filter(Boolean); for (const keyword of keywords) { const results = await searchSdk(keyword); await cache(`market:search:${keyword.toLowerCase()}`, results, 300) } } catch (error) { console.warn('[market-worker] search unavailable:', error instanceof Error ? error.message : error) }
  try { const indices = await getSdkIndices(); await cache('market:indices', indices, 60); await publish('market:indices', indices) } catch (error) { console.warn('[market-worker] indices unavailable:', error instanceof Error ? error.message : error) }
  try { const sectors = await getSdkSectors(); await cache('market:sectors', sectors, 300); await publish('market:sectors', sectors) } catch (error) { console.warn('[market-worker] sectors unavailable:', error instanceof Error ? error.message : error) }
  try { const etfs = await getSdkEtfs(Number(process.env.MARKET_ETF_LIMIT ?? 100)); await cache('market:etfs', etfs, 300); await publish('market:etfs', etfs) } catch (error) { console.warn('[market-worker] ETFs unavailable:', error instanceof Error ? error.message : error) }
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
          const bars = await tdx.getKline(code, 240, 0, category)
          const validBars = validateKlineBars(bars)
          if (!validBars.length && bars.length) throw new Error(`refusing to cache invalid K-line data for ${code}`)
          await cache(`kline:${period}:${code}`, validBars, 3600)
          await publish(`market:kline:${code}`, { code, period, bars })
        }
        const minute = await tdx.getMinute(code)
        await cache(`intraday:${code}`, minute.items.map((item) => ({ date: item.time, timestamp: Date.now(), open: item.price, close: item.price, high: item.price, low: item.price, volume: item.volume, amount: item.price * item.volume, source: 'tdx' })), 30)
        await publish(`market:intraday:${code}`, { code, items: minute.items })
        await cache(`orderbook:${code}`, await tdx.getQuoteBook(code), 15)
      } catch (error) { console.warn(`[market-worker] TDX chart data unavailable for ${code}:`, error instanceof Error ? error.message : error) }
    }
    console.log(`[market-worker] TDX updated ${quotes.length} quotes`)
  } catch (error) {
    failures += 1
    tdxConnected = false
    tdx.disconnect()
    await markProvider('tdx', false, error)
    console.warn('[market-worker] TDX unavailable, trying stock-sdk:', error instanceof Error ? error.message : error)
    try {
      quotes = await getSdkQuotes(codes)
      await markProvider('stock-sdk', true)
      await writeQuotes(quotes)
      for (const code of codes) { try { const bars = await getSdkKline(code); const validBars = validateKlineBars(bars); if (!validBars.length && bars.length) throw new Error('invalid K-line data'); await cache(`kline:daily:${code}`, validBars, 3600); await publish(`market:kline:${code}`, { code, period: 'daily', bars: validBars }) } catch (klineError) { console.warn(`[market-worker] stock-sdk K-line unavailable for ${code}:`, klineError instanceof Error ? klineError.message : klineError) } }
      console.log(`[market-worker] stock-sdk updated ${quotes.length} quotes`)
    } catch (sdkError) { await markProvider('stock-sdk', false, sdkError); console.warn('[market-worker] all market providers unavailable:', sdkError instanceof Error ? sdkError.message : sdkError) }
  }
  if (quotes.length) await collectReferenceData()
  try { const triggered = await checkPriceAlerts(redis); if (triggered) console.log(`[alert-worker] triggered ${triggered} price alerts`) } catch (error) { console.warn('[alert-worker] alert check failed:', error instanceof Error ? error.message : error) }
}

const healthPort = Number(process.env.HEALTH_PORT ?? 9090)
const healthServer = createServer((request, response) => {
  if (request.url === '/health' || request.url === '/health/live') {
    const ready = redis.isOpen
    response.statusCode = ready ? 200 : 503
    response.setHeader('content-type', 'application/json')
    response.end(JSON.stringify({ status: ready ? 'ok' : 'degraded', service: 'market-worker', redis: ready ? 'ok' : 'unavailable', lastSuccess }))
    return
  }
  if (request.url === '/metrics') {
    response.setHeader('content-type', 'text/plain; version=0.0.4')
    response.end(`# HELP zedarc_worker_collections_total Collection attempts\\n# TYPE zedarc_worker_collections_total counter\\nzedarc_worker_collections_total ${collections}\\n# HELP zedarc_worker_failures_total Collection failures\\n# TYPE zedarc_worker_failures_total counter\\nzedarc_worker_failures_total ${failures}\\n`)
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
