import { KlineCategory, TdxClient, TradeDirection } from 'node-tdx-market'
import { normalizeMarketCode, validateKlineBars, validateNormalizedQuotes, type KlineBar, type NormalizedQuote } from '@zedarc/shared'

function prefixed(code: string) {
  if (/^(sh|sz|bj)/i.test(code)) return code.toLowerCase()
  return code.startsWith('6') ? `sh${code}` : `sz${code}`
}
function yuan(value: number) { return value / 1000 }

export class TdxProvider {
  private readonly client = new TdxClient({ autoReconnect: true })
  private connecting?: Promise<void>

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
    await this.ensureConnected()
    try {
      return await operation()
    } catch (error) {
      // A request can race a socket failure. Let the library reconnect, then retry once.
      await new Promise((resolve) => setTimeout(resolve, 150))
      await this.ensureConnected()
      return operation().catch(() => { throw error })
    }
  }

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

  async getKline(code: string, count = 240, start = 0, category: KlineCategory = KlineCategory.Day): Promise<KlineBar[]> {
    const response = await this.request(() => this.client.getKline({ code: prefixed(code), category, start, count }))
    const bars = response.bars.map((bar) => ({ date: bar.time.toISOString().slice(0, 10), timestamp: bar.time.getTime(), open: yuan(bar.open), close: yuan(bar.close), high: yuan(bar.high), low: yuan(bar.low), volume: bar.volume, amount: bar.amount, source: 'tdx' as const }))
    const valid = validateKlineBars(bars)
    if (!valid.length && response.bars.length) throw new Error(`TDX returned invalid K-line data for ${code}`)
    return valid
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
