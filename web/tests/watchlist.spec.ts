import { describe, expect, it, beforeEach } from 'vitest'
import { useWatchlistStore } from '@/stores/watchlist'

describe('watchlist store', () => {
  beforeEach(() => localStorage.clear())
  it('persists and toggles symbols on mobile-sized clients', () => {
    const store = useWatchlistStore()
    store.toggle('600519')
    expect(store.selectedCodes.value).toEqual(['600519'])
    expect(JSON.parse(localStorage.getItem('zedarc-watchlist')!)).toEqual(['600519'])
    store.toggle('600519')
    expect(store.selectedCodes.value).toEqual([])
  })
})
