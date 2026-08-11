import { beforeEach, describe, expect, it, vi } from 'vitest'
import { clearSyncQueue, drainSyncQueue, enqueueSync, getSyncConflicts, getSyncSnapshot, resolveSyncConflict } from '@/services/offline-sync'

describe('offline sync queue', () => {
  beforeEach(() => {
    window.localStorage.clear()
    vi.stubGlobal('navigator', { onLine: true })
    clearSyncQueue()
  })

  it('deduplicates mutations by resource key and drains successfully', async () => {
    enqueueSync({ key: 'watchlist:add:000001', resource: 'watchlist', method: 'POST', url: '/api/watchlist', body: JSON.stringify({ code: '000001' }) })
    enqueueSync({ key: 'watchlist:add:000001', resource: 'watchlist', method: 'POST', url: '/api/watchlist', body: JSON.stringify({ code: '000001', name: '平安银行' }) })
    expect(getSyncSnapshot().pending).toBe(1)

    const executed: string[] = []
    await drainSyncQueue(async (operation) => { executed.push(operation.body ?? '') })
    expect(executed).toEqual([JSON.stringify({ code: '000001', name: '平安银行' })])
    expect(getSyncSnapshot().pending).toBe(0)
  })

  it('keeps retryable failures with exponential backoff', async () => {
    enqueueSync({ key: 'settings:notifications', resource: 'settings', method: 'PATCH', url: '/api/settings', body: '{}' })
    await drainSyncQueue(async () => { throw new Error('network down') })
    const snapshot = getSyncSnapshot()
    expect(snapshot.pending).toBe(1)
    expect(snapshot.lastError).toContain('network down')
  })

  it('marks conflicts without retrying them forever', async () => {
    enqueueSync({ key: 'settings:privacyMode', resource: 'settings', method: 'PATCH', url: '/api/settings', body: '{}' })
    const error = Object.assign(new Error('version conflict'), { status: 409 })
    await drainSyncQueue(async () => { throw error })
    expect(getSyncSnapshot()).toMatchObject({ pending: 0, conflicts: 1 })
  })

  it('stores versions and can discard a conflict in favor of the remote', async () => {
    enqueueSync({ key: 'watchlist:item:600519', resource: 'watchlist', method: 'PATCH', url: '/api/watchlist/600519', body: JSON.stringify({ code: '600519', groupId: 'local' }) })
    const error = Object.assign(new Error('version conflict'), { status: 409, conflict: { remote: { code: '600519', groupId: 'remote' }, message: '分组已在其他设备修改' } })
    await drainSyncQueue(async () => { throw error })
    expect(getSyncConflicts()[0]).toMatchObject({ local: { code: '600519', groupId: 'local' }, remote: { code: '600519', groupId: 'remote' } })
    expect(resolveSyncConflict('watchlist:watchlist:item:600519', 'remote')).toBe(true)
    expect(getSyncSnapshot().conflicts).toBe(0)
  })
})
