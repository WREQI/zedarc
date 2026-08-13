export type LocalTransferPayload = {
  version: 1
  exportedAt: string
  data: Record<string, unknown>
}

const transferKeys = [
  'zedarc-watchlist',
  'zedarc-recent-stocks',
  'zedarc-watchlist-groups',
  'zedarc-watchlist-group-items',
  'zedarc-kline-preferences',
  'zedarc-search-history',

  'zedarc-offline-sync-queue',
]

export function exportLocalData(storage: Storage = window.localStorage): LocalTransferPayload {
  const data: Record<string, unknown> = {}
  for (const key of transferKeys) {
    const value = storage.getItem(key)
    if (value === null) continue
    try { data[key] = JSON.parse(value) } catch { data[key] = value }
  }
  return { version: 1, exportedAt: new Date().toISOString(), data }
}

export function serializeLocalData(storage: Storage = window.localStorage) { return JSON.stringify(exportLocalData(storage), null, 2) }

export function validateLocalData(value: unknown): value is LocalTransferPayload {
  if (!value || typeof value !== 'object') return false
  const payload = value as Partial<LocalTransferPayload>
  return payload.version === 1 && typeof payload.exportedAt === 'string' && Boolean(payload.data && typeof payload.data === 'object' && !Array.isArray(payload.data))
}

export function importLocalData(value: unknown, storage: Storage = window.localStorage) {
  if (!validateLocalData(value)) throw new Error('导入文件格式无效')
  const data = value.data as Record<string, unknown>
  for (const key of transferKeys) {
    if (!(key in data)) continue
    storage.setItem(key, JSON.stringify(data[key]))
  }
  return { imported: transferKeys.filter((key) => key in data).length, exportedAt: value.exportedAt }
}

export function downloadLocalData(storage: Storage = window.localStorage) {
  const blob = new Blob([serializeLocalData(storage)], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `zedarc-local-data-${new Date().toISOString().slice(0, 10)}.json`
  link.click()
  URL.revokeObjectURL(url)
}
