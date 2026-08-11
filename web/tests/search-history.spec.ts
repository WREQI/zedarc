import { beforeEach, describe, expect, it } from 'vitest'
import { useSearchHistoryStore } from '@/stores/search-history'

describe('search history store', () => {
  beforeEach(() => {
    localStorage.clear()
    useSearchHistoryStore().clear()
  })

  it('deduplicates and limits recent queries', () => {
    const store = useSearchHistoryStore()
    ;['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'].forEach((query) => store.add(query))
    expect(store.history.value).toEqual(['A', 'G', 'F', 'E', 'D', 'C'])
    expect(JSON.parse(localStorage.getItem('zedarc-search-history') ?? 'null')).toEqual(store.history.value)
  })

  it('removes and clears queries', () => {
    const store = useSearchHistoryStore()
    store.add('600519')
    store.add('000001')
    store.remove('600519')
    expect(store.history.value).toEqual(['000001'])
    store.clear()
    expect(store.history.value).toEqual([])
    expect(localStorage.getItem('zedarc-search-history')).toBeNull()
  })
})
