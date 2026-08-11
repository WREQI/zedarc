import { KlineCategory, TdxClient, TradeDirection } from 'node-tdx-market'
import { normalizeMarketCode, validateKlineBars, validateNormalizedQuotes, type KlineBar, type NormalizedQuote } from '@zedarc/shared'

function prefixed(code: string) {
  if (/^(sh|sz|bj)/i.test(code)) return code.toLowerCase()
  return code.startsWith('6') ? `sh${code}` : `sz${code}`
}
function yuan(value: number) { return value / 1000 }

export interface TdxEtfConfig { code: string; name: string }

export class TdxProvider {
  private readonly client = new TdxClient({ autoReconnect: true })
  private connecting?: Promise<void>
  private consecutiveFailures = 0
  private circuitOpenedAt = 0
  private lastError: string | undefined

  constructor() {
    this.client.on('error', (error) => console.warn('[market-worker] TDX connection error:', error instanceof Error ? error.message : error))
  }

  private async ensureConnected() {
    if (this.client.isConnected) return
    if (!this.connecting) {
      this.connecting = this.client.connect().then(() => undefined).finally(() => { this.connecting = undefined })
    }
    await this.connecting
  }

  private async request<T>(operation: () => Promise<T>): Promise<T> {
    if (this.circuitOpenedAt && Date.now() - this.circuitOpenedAt < 5000) throw new Error(`TDX provider 暂时熔断: ${this.lastError ?? '连续请求失败'}`)
    let lastError: unknown
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        await this.ensureConnected()
        const result = await operation()
        this.consecutiveFailures = 0; this.circuitOpenedAt = 0; this.lastError = undefined
        return result
      } catch (error) {
        lastError = error; this.consecutiveFailures += 1; this.lastError = error instanceof Error ? error.message : 'TDX request failed'
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 150 * 2 ** attempt))
      }
    }
    if (this.consecutiveFailures >= 3) this.circuitOpenedAt = Date.now()
    throw lastError instanceof Error ? lastError : new Error(this.lastError ?? 'TDX request failed')
  }

  status() { return { provider: 'tdx' as const, healthy: this.consecutiveFailures === 0 && !this.circuitOpenedAt, consecutiveFailures: this.consecutiveFailures, lastError: this.lastError ?? null } }

  async getQuotes(codes: string[]): Promise<NormalizedQuote[]> {
    const rows = await this.request(() => this.client.getQuote(codes.map(prefixed)))
    const values = rows.map((row) => {
      const price = yuan(row.price)
      const prevClose = yuan(row.lastClose)
      const change = price - prevClose
      return { code: normalizeMarketCode(row.code), name: row.code, price, prevClose, open: yuan(row.open), high: yuan(row.high), low: yuan(row.low), change, changePercent: prevClose ? change / prevClose * 100 : 0, volume: row.volume, amount: row.amount, turnoverRate: null, amplitude: null, volumeRatio: null, limitUp: null, limitDown: null, limitStatus: 'unsupported' as const, timestamp: Date.now(), source: 'tdx' as const }
    })
    const valid = validateNormalizedQuotes(values, codes)
    if (!valid.length && rows.length) throw new Error('TDX returned invalid quote data')
    return valid
  }

  async getKline(code: string, count = 800, start = 0, category: KlineCategory = KlineCategory.Day): Promise<KlineBar[]> {
    const safeCount = Math.max(1, Math.min(800, Math.floor(count)))
    const safeStart = Math.max(0, Math.floor(start))
    const response = await this.request(() => this.client.getKline({ code: prefixed(code), category, start: safeStart, count: safeCount }))
    const bars = response.bars.map((bar) => ({ date: bar.time.toISOString().slice(0, 10), timestamp: bar.time.getTime(), open: yuan(bar.open), close: yuan(bar.close), high: yuan(bar.high), low: yuan(bar.low), volume: bar.volume, amount: bar.amount, source: 'tdx' as const }))
    const valid = validateKlineBars(bars)
    if (!valid.length && response.bars.length) throw new Error(`TDX returned invalid K-line data for ${code}`)
    return valid
  }

  async getEtfs(config: readonly TdxEtfConfig[]) {
    if (!config.length) return []
    const rows = await this.request(() => this.client.getQuote(config.map(({ code }) => prefixed(code))))
    const names = new Map(config.map(({ code, name }) => [normalizeMarketCode(code), name]))
    return rows.flatMap((row) => {
      const code = normalizeMarketCode(row.code)
      const name = names.get(code)
      const price = yuan(row.price)
      const prevClose = yuan(row.lastClose)
      if (!name || ![price, prevClose, row.volume, row.amount].every(Number.isFinite) || prevClose <= 0) return []
      return [{ code, name, price, changePercent: (price - prevClose) / prevClose * 100, volume: row.volume, amount: row.amount, timestamp: Date.now(), source: 'tdx' as const }]
    })
  }

  async getMinute(code: string) {
    return this.request(() => this.client.getMinute(prefixed(code)))
  }

  async getQuoteBook(code: string) {
    const row = (await this.request(() => this.client.getQuote(prefixed(code))))[0]
    if (!row) throw new Error(`TDX quote not found for ${code}`)
    return { code: normalizeMarketCode(code), timestamp: Date.now(), source: 'tdx' as const, bids: row.bid.map((level) => ({ price: yuan(level.price), volume: level.volume })), asks: row.ask.map((level) => ({ price: yuan(level.price), volume: level.volume })) }
  }

  async getTrades(code: string) {
    const response = await this.request(() => this.client.getTrade(prefixed(code), 0, 500))
    return response.items.map((item) => ({ time: item.time, timestamp: Date.now(), price: yuan(item.price), volume: item.volume, direction: item.direction === TradeDirection.Buy ? 'buy' as const : item.direction === TradeDirection.Sell ? 'sell' as const : 'neutral' as const, source: 'tdx' as const }))
  }

  async connect() { await this.ensureConnected() }
  disconnect() { this.client.disconnect() }
}
