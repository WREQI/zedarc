import { describe, expect, it, vi } from 'vitest'
import { getBoardQuotes } from '@/services/market'

describe('sector market service', () => {
  it('requests the selected board kind and preserves ranking fields', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify([
      { code: 'BK001', name: '行业一', price: 1.234, changePercent: 2.5, amount: 123000000, leadingStock: '成分一' },
    ]), { status: 200, headers: { 'Content-Type': 'application/json' } }))

    await expect(getBoardQuotes('板块', 'concept')).resolves.toEqual([expect.objectContaining({
      code: 'BK001', name: '行业一', percent: '+2.50%', changePercent: 2.5, amount: 123000000, extra: '成分一', trend: 'up',
    })])
    expect(fetchMock).toHaveBeenCalledWith('/api/market/sectors?kind=concept', expect.objectContaining({ credentials: 'include' }))
    fetchMock.mockRestore()
  })

  it('does not turn an unavailable provider into a fake empty success', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('provider unavailable', { status: 503 }))

    await expect(getBoardQuotes('板块', 'industry')).rejects.toThrow('provider unavailable')
    fetchMock.mockRestore()
  })

  it('keeps a valid empty provider response as an explicit empty result', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('[]', { status: 200 }))

    await expect(getBoardQuotes('板块', 'industry')).resolves.toEqual([])
    fetchMock.mockRestore()
  })
})
