type Fields = Record<string, unknown>
const secretKey = /(authorization|cookie|token|secret|password|api.?key|code)/i

function safe(fields: Fields) {
  return Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, secretKey.test(key) ? '[REDACTED]' : value]))
}

export function workerLog(level: 'info' | 'warn' | 'error', event: string, fields: Fields = {}) {
  const output = JSON.stringify({ timestamp: new Date().toISOString(), level, service: 'zedarc-market-worker', event, ...safe(fields) })
  if (level === 'error') console.error(output)
  else console.log(output)
}
