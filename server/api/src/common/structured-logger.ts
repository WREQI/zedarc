import { randomUUID } from 'node:crypto'

export type LogFields = Record<string, unknown>

const secretKey = /(authorization|cookie|token|secret|password|api.?key|code)/i

function safeFields(fields: LogFields) {
  return Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, secretKey.test(key) ? '[REDACTED]' : value]))
}

export function requestId(value?: unknown) {
  return typeof value === 'string' && /^[A-Za-z0-9._:-]{1,128}$/.test(value) ? value : randomUUID()
}

export function log(level: 'info' | 'warn' | 'error', event: string, fields: LogFields = {}) {
  const entry = { timestamp: new Date().toISOString(), level, service: 'zedarc-api', event, ...safeFields(fields) }
  const output = JSON.stringify(entry)
  if (level === 'error') console.error(output)
  else console.log(output)
}

export function captureException(error: unknown, fields: LogFields = {}) {
  const exception = error instanceof Error ? error : new Error(String(error))
  log('error', 'exception', { ...fields, error: { name: exception.name, message: exception.message, stack: exception.stack } })
}
