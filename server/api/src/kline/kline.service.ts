import { Injectable } from '@nestjs/common'
import { MarketService } from '../market/market.service.js'

export type IndicatorParams = { kdjPeriod?: number; kdjSignal?: number; rsiPeriod?: number; sarStep?: number; sarMax?: number }
@Injectable()
export class KlineService {
  constructor(private readonly market: MarketService) {}
  async indicators(code: string, period = 'daily', params: IndicatorParams = {}) {
    const bars = await this.market.getKline(code, period)
    const source: string = bars[0]?.source ?? 'unknown'
    return { code, period, params: normalize(params), source, dataSource: source === 'mock' ? 'mock' : source === 'unknown' ? 'unknown' : 'api', bars, indicators: calculateIndicators(bars, params) }
  }
}
export function normalize(params: IndicatorParams) { return { kdjPeriod: clamp(params.kdjPeriod, 9, 2, 60), kdjSignal: clamp(params.kdjSignal, 3, 1, 20), rsiPeriod: clamp(params.rsiPeriod, 14, 2, 60), sarStep: clamp(params.sarStep, .02, .001, .2), sarMax: clamp(params.sarMax, .2, .02, 1) } }
function clamp(value: number | undefined, fallback: number, min: number, max: number) { const n = Number(value); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : fallback }
export function calculateIndicators(bars: Array<{ high: number; low: number; close: number }>, raw: IndicatorParams = {}) {
  const p = normalize(raw); let k = 50; let d = 50; let sar = bars[0]?.low ?? 0; let ep = bars[0]?.high ?? 0; let af = p.sarStep; let rising = true
  return bars.map((bar, i) => {
    const window = bars.slice(Math.max(0, i - p.kdjPeriod + 1), i + 1); const high = Math.max(...window.map((x) => x.high)); const low = Math.min(...window.map((x) => x.low)); const rsv = high === low ? 50 : (bar.close - low) / (high - low) * 100
    k = (2 * k + rsv) / 3; d = (2 * d + k) / 3; const j = 3 * k - 2 * d
    const prev = bars[i - 1]; const change = prev ? bar.close - prev.close : 0; const gains = bars.slice(Math.max(0, i - p.rsiPeriod + 1), i + 1).map((x, n, a) => n === 0 ? 0 : Math.max(0, x.close - a[n - 1].close)); const losses = bars.slice(Math.max(0, i - p.rsiPeriod + 1), i + 1).map((x, n, a) => n === 0 ? 0 : Math.max(0, a[n - 1].close - x.close)); const avgGain = gains.reduce((a, b) => a + b, 0) / p.rsiPeriod; const avgLoss = losses.reduce((a, b) => a + b, 0) / p.rsiPeriod; const rsi = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss)
    if (i === 0) sar = bar.low; else if (rising) { sar = Math.min(sar + af * (ep - sar), prev?.low ?? sar, bars[i - 2]?.low ?? sar); if (bar.low < sar) { rising = false; sar = ep; ep = bar.low; af = p.sarStep } else if (bar.high > ep) { ep = bar.high; af = Math.min(p.sarMax, af + p.sarStep) } } else { sar = Math.max(sar + af * (ep - sar), prev?.high ?? sar, bars[i - 2]?.high ?? sar); if (bar.high > sar) { rising = true; sar = ep; ep = bar.high; af = p.sarStep } else if (bar.low < ep) { ep = bar.low; af = Math.min(p.sarMax, af + p.sarStep) } }
    return { k: round(k), d: round(d), j: round(j), rsi: round(rsi), sar: round(sar), direction: rising ? 'up' : 'down' }
  })
}
function round(value: number) { return Number(value.toFixed(4)) }
