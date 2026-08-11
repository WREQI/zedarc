import { beforeEach, describe, expect, it } from 'vitest'
import { exportLocalData, importLocalData, serializeLocalData, validateLocalData } from '@/services/local-transfer'

describe('local data transfer', () => {
  beforeEach(() => window.localStorage.clear())

  it('exports supported local state and restores it', () => {
    window.localStorage.setItem('zedarc-watchlist', JSON.stringify(['000001']))
    const payload = exportLocalData()
    expect(payload.version).toBe(1)
    expect(payload.data['zedarc-watchlist']).toEqual(['000001'])
    window.localStorage.clear()
    expect(importLocalData(payload).imported).toBe(1)
    expect(JSON.parse(window.localStorage.getItem('zedarc-watchlist') ?? '[]')).toEqual(['000001'])
  })

  it('rejects malformed files', () => {
    expect(validateLocalData({})).toBe(false)
    expect(() => importLocalData({ version: 2 })).toThrow('导入文件格式无效')
    expect(serializeLocalData()).toContain('"version": 1')
  })
})
