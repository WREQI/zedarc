import { KlineCategory, TdxClient } from 'node-tdx-market'
import type { KlineBar, NormalizedQuote } from '@zedarc/shared'

function prefixed(code: string) {
  if (/^(sh|sz|bj)/i.test(code)) return code.toLowerCase()
  return code.startsWith('6') ? `sh${code}` : `sz${code}`
}
function yuan(value: number) { return value / 1000 }

export class TdxProvider {
  private readonly client = new TdxClient({ autoReconnect: false })

  async getQuotes(codes: string[]): Promise<NormalizedQuote[]> {
    const rows = await this.client.getQuote(codes.map(prefixed))
    return rows.map((row) => {
      const price = yuan(row.price)
      const prevClose = yuan(row.lastClose)
      const change = price - prevClose
      return { code: row.code, name: row.code, price, prevClose, change, changePercent: prevClose ? change / prevClose * 100 : 0, volume: row.volume, amount: row.amount, timestamp: Date.now(), source: 'tdx' }
    })
  }

  async getKline(code: string, count = 240): Promise<KlineBar[]> {
    const response = await this.client.getKline({ code: prefixed(code), category: KlineCategory.Day, start: 0, count })
    return response.bars.map((bar) => ({ date: bar.time.toISOString().slice(0, 10), timestamp: bar.time.getTime(), open: yuan(bar.open), close: yuan(bar.close), high: yuan(bar.high), low: yuan(bar.low), volume: bar.volume, amount: bar.amount, source: 'tdx' }))
  }

  async connect() { await this.client.connect() }
  disconnect() { this.client.disconnect() }
}
