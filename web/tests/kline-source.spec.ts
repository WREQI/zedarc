import { describe, expect, it } from 'vitest'
import { getKlineDataSource, type KlineCandle } from '@/services/kline'

const candle = (source?: string): KlineCandle => ({
  date: '2026-08-11', timestamp: 1, open: 10, close: 11, high: 12, low: 9, volume: 100, turnover: 1100, source,
})

describe('getKlineDataSource', () => {
  it('recognizes provider-backed API bars', () => {
    expect(getKlineDataSource([candle('sina')])).toBe('api')
  })

  it('recognizes explicit mock fallback bars', () => {
    expect(getKlineDataSource([candle('mock')])).toBe('mock')
  })

  it('keeps legacy SDK bars distinguishable when source is absent', () => {
    expect(getKlineDataSource([candle()])).toBe('sdk')
  })
})
