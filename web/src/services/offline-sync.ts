export type SyncConflict = {
  id: string
  key: string
  resource: string
  url: string
  method: string
  local: unknown
  remote: unknown
  message: string
  createdAt: number
}

export type SyncOperation = {
  id: string
  key: string
  resource: string
  method: string
  url: string
  body?: string
  createdAt: number
  attempts: number
  nextAttemptAt: number
  status: 'pending' | 'conflict'
  conflict?: Pick<SyncConflict, 'remote' | 'message'>
  error?: string
}

export type SyncSnapshot = { pending: number; conflicts: number; lastError: string | null; conflictItems: SyncConflict[] }
export type SyncExecutor = (operation: SyncOperation) => Promise<void>

const storageKey = 'zedarc-offline-sync-queue'
const listeners = new Set<(snapshot: SyncSnapshot) => void>()
let draining = false
let lastError: string | null = null

function read(): SyncOperation[] {
  if (typeof window === 'undefined') return []
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]')
    return Array.isArray(value) ? value.filter(isOperation) : []
  } catch { return [] }
}
function conflictFromOperation(operation: SyncOperation): SyncConflict {
  return {
    id: operation.id,
    key: operation.key,
    resource: operation.resource,
    url: operation.url,
    method: operation.method,
    local: parseBody(operation.body),
    remote: operation.conflict?.remote ?? null,
    message: operation.conflict?.message ?? operation.error ?? '远端数据已更新，请选择如何处理',
    createdAt: operation.createdAt,
  }
}
function parseBody(body?: string): unknown { if (!body) return null; try { return JSON.parse(body) as unknown } catch { return body } }
function write(queue: SyncOperation[]) {
  if (typeof window !== 'undefined') window.localStorage.setItem(storageKey, JSON.stringify(queue))
  const pending = queue.filter((item) => item.status === 'pending').length
  const conflictItems = queue.filter((item) => item.status === 'conflict').map(conflictFromOperation)
  for (const listener of listeners) listener({ pending, conflicts: conflictItems.length, conflictItems, lastError })
}
function isOperation(value: unknown): value is SyncOperation {
  if (!value || typeof value !== 'object') return false
  const item = value as Partial<SyncOperation>
  return typeof item.id === 'string' && typeof item.key === 'string' && typeof item.resource === 'string' && typeof item.method === 'string' && typeof item.url === 'string' && Number.isFinite(item.createdAt) && Number.isFinite(item.attempts) && Number.isFinite(item.nextAttemptAt) && (item.status === 'pending' || item.status === 'conflict')
}
function errorStatus(error: unknown) { return typeof error === 'object' && error !== null && 'status' in error && typeof (error as { status?: unknown }).status === 'number' ? (error as { status: number }).status : undefined }
function retryDelay(attempts: number) { return Math.min(5 * 60_000, 1000 * 2 ** Math.min(attempts, 8)) }

export function getSyncSnapshot(): SyncSnapshot {
  const queue = read()
  const conflictItems = queue.filter((item) => item.status === 'conflict').map(conflictFromOperation)
  return { pending: queue.filter((item) => item.status === 'pending').length, conflicts: conflictItems.length, conflictItems, lastError }
}
export function subscribeSync(listener: (snapshot: SyncSnapshot) => void) { listeners.add(listener); listener(getSyncSnapshot()); return () => listeners.delete(listener) }

export function enqueueSync(input: Omit<SyncOperation, 'id' | 'createdAt' | 'attempts' | 'nextAttemptAt' | 'status'>) {
  const queue = read()
  const operation: SyncOperation = { ...input, id: `${input.resource}:${input.key}`, createdAt: Date.now(), attempts: 0, nextAttemptAt: Date.now(), status: 'pending' }
  const existing = queue.findIndex((item) => item.id === operation.id)
  if (existing >= 0) queue[existing] = { ...queue[existing], ...operation, createdAt: queue[existing].createdAt }
  else queue.push(operation)
  lastError = null; write(queue); return operation
}

export async function drainSyncQueue(executor: SyncExecutor) {
  if (draining || typeof navigator !== 'undefined' && !navigator.onLine) return getSyncSnapshot()
  draining = true
  try {
    for (const operation of read()) {
      if (operation.status !== 'pending' || operation.nextAttemptAt > Date.now()) continue
      try {
        await executor(operation)
        write(read().filter((item) => item.id !== operation.id))
      } catch (error) {
        const status = errorStatus(error)
        const queue = read()
        const index = queue.findIndex((item) => item.id === operation.id)
        if (index < 0) continue
        if (status === 409) {
          const conflict = error as { conflict?: { remote?: unknown; message?: string }; remote?: unknown; remoteVersion?: unknown }
          const remote = conflict.conflict?.remote ?? conflict.remote ?? conflict.remoteVersion ?? null
          queue[index] = { ...operation, status: 'conflict', error: conflict.conflict?.message ?? '远端数据已更新，请选择如何处理', attempts: operation.attempts + 1, conflict: { remote, message: conflict.conflict?.message ?? '远端数据已更新，请选择如何处理' } }
        }
        else {
          const attempts = operation.attempts + 1
          queue[index] = { ...operation, attempts, nextAttemptAt: Date.now() + retryDelay(attempts), error: error instanceof Error ? error.message : '同步失败' }
        }
        lastError = queue[index].error ?? '同步失败'; write(queue)
      }
    }
  } finally { draining = false }
  return getSyncSnapshot()
}

export function getSyncConflicts() { return read().filter((item) => item.status === 'conflict').map(conflictFromOperation) }

export type ConflictResolution = 'local' | 'remote' | 'merge'
export function resolveSyncConflict(id: string, resolution: ConflictResolution) {
  const queue = read()
  const operation = queue.find((item) => item.id === id && item.status === 'conflict')
  if (!operation) return false
  if (resolution === 'remote') queue.splice(queue.indexOf(operation), 1)
  else {
    const local = parseBody(operation.body)
    const remote = operation.conflict?.remote
    const body = resolution === 'merge' && isRecord(local) && isRecord(remote) ? { ...remote, ...local } : local
    queue[queue.indexOf(operation)] = { ...operation, body: body == null ? operation.body : JSON.stringify(body), status: 'pending', attempts: 0, nextAttemptAt: Date.now(), error: undefined, conflict: undefined }
  }
  lastError = null; write(queue); return true
}
function isRecord(value: unknown): value is Record<string, unknown> { return typeof value === 'object' && value !== null && !Array.isArray(value) }
export function removeSyncOperation(id: string) { write(read().filter((item) => item.id !== id)) }
export function clearSyncQueue() { lastError = null; write([]) }

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => { void drainSyncQueue(async (operation) => { const response = await fetch(operation.url, { method: operation.method, headers: { 'Content-Type': 'application/json' }, body: operation.body, credentials: 'include' }); if (!response.ok) { const error = new Error(`同步失败（${response.status}）`) as Error & { status?: number }; error.status = response.status; throw error } }) })
}
