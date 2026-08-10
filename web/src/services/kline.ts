export interface KlineCandle {
  date: string
  timestamp: number
  open: number
  close: number
  high: number
  low: number
  volume: number
  turnover: number
}

function seedFromCode(code: string) { return [...code].reduce((sum, char) => sum + char.charCodeAt(0), 0) }

export function createKlineSeries(code: string, length = 96): KlineCandle[] {
  const seed = seedFromCode(code)
  let previous = 80 + seed % 120
  return Array.from({ length }, (_, index) => {
    const wave = Math.sin((index + seed) * .38) * 3 + Math.cos((index + seed) * .13) * 2
    const open = previous + Math.sin((index + seed) * 1.7) * 1.4
    const close = open + wave * .42 + (index > length * .72 ? .9 : 0)
    const high = Math.max(open, close) + 1.2 + (index % 3) * .45
    const low = Math.min(open, close) - 1.1 - (index % 2) * .55
    const volume = 40 + Math.abs(wave) * 12 + (index % 5) * 14
    previous = close
    return { date: `08-${String((index % 30) + 1).padStart(2, '0')}`, timestamp: Date.now() - (length - index) * 86400000, open, close, high, low, volume, turnover: volume * close }
  })
}

export function calculateMA(candles: KlineCandle[], period: number): number[] {
  return candles.map((_, index) => { const source = candles.slice(Math.max(0, index - period + 1), index + 1); return source.reduce((sum, candle) => sum + candle.close, 0) / source.length })
}

export function calculateBOLL(candles: KlineCandle[], period = 20, multiplier = 2) {
  return candles.map((_, index) => { const source = candles.slice(Math.max(0, index - period + 1), index + 1); const middle = source.reduce((sum, candle) => sum + candle.close, 0) / source.length; const deviation = Math.sqrt(source.reduce((sum, candle) => sum + (candle.close - middle) ** 2, 0) / source.length); return { middle, upper: middle + deviation * multiplier, lower: middle - deviation * multiplier } })
}

export function calculateMACD(candles: KlineCandle[]) { return candles.map((_, index) => calculateMA(candles, 5)[index] - calculateMA(candles, 10)[index]) }
