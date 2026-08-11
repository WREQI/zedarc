import { describe, expect, it } from 'vitest'
import { createKlineSeries, getKlineDataSource, readKlineIndicatorPreferences, saveKlineIndicatorPreferences, supportsKlineAdjustment, type KlineCandle } from '@/services/kline'

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

  it('classifies the local generated series used by the API fallback as mock data', () => {
    expect(createKlineSeries('000001')).not.toHaveLength(0)
    expect(getKlineDataSource(createKlineSeries('000001'))).toBe('mock')
  })

  it('only advertises adjustment for supported chart data', () => {
    expect(supportsKlineAdjustment('daily', 'qfq', 'api')).toBe(true)
    expect(supportsKlineAdjustment('weekly', 'hfq', 'sdk')).toBe(true)
    expect(supportsKlineAdjustment('intraday', 'qfq', 'api')).toBe(false)
    expect(supportsKlineAdjustment('daily', 'qfq', 'mock')).toBe(false)
    expect(supportsKlineAdjustment('daily', '', 'mock')).toBe(true)
  })

  it('persists indicator parameters per stock code', () => {
    window.localStorage.clear()
    saveKlineIndicatorPreferences('000001', { maFast: 7, maSlow: 21, bollPeriod: 30 })
    expect(readKlineIndicatorPreferences('000001')).toEqual({ maFast: 7, maSlow: 21, bollPeriod: 30 })
    expect(readKlineIndicatorPreferences('600519')).toBeUndefined()
  })
})
