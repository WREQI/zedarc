const tokenKey = 'zedarc-access-token'
const refreshKey = 'zedarc-refresh-token'

function storage() { return typeof window === 'undefined' ? null : window.localStorage }
export function getAccessToken() { return storage()?.getItem(tokenKey) ?? null }
export function getRefreshToken() { return storage()?.getItem(refreshKey) ?? null }
export function setAccessToken(token: string) { storage()?.setItem(tokenKey, token) }
export function setRefreshToken(token: string) { storage()?.setItem(refreshKey, token) }
export function clearAccessToken() { storage()?.removeItem(tokenKey); storage()?.removeItem(refreshKey) }

let refreshInFlight: Promise<string | null> | null = null
async function refreshAccessToken() {
  const refreshToken = getRefreshToken()
  if (!refreshToken) return null
  if (!refreshInFlight) {
    refreshInFlight = fetch('/api/auth/refresh', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify({ refreshToken }) })
      .then(async (response) => {
        if (!response.ok) throw new Error('登录状态已失效')
        const result = await response.json() as { accessToken: string; refreshToken: string }
        setAccessToken(result.accessToken); setRefreshToken(result.refreshToken)
        return result.accessToken
      }).catch(() => { clearAccessToken(); return null }).finally(() => { refreshInFlight = null })
  }
  return refreshInFlight
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const request = async () => {
    const headers = new Headers(options.headers)
    if (options.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
    const token = getAccessToken()
    if (token) headers.set('Authorization', `Bearer ${token}`)
    return fetch(path, { ...options, headers, credentials: 'include' })
  }
  let response = await request()
  if (response.status === 401 && !path.startsWith('/api/auth/')) {
    const token = await refreshAccessToken()
    if (token) response = await request()
  }
  if (!response.ok) {
    const text = await response.text(); let message = text || `请求失败 (${response.status})`
    try { const body = JSON.parse(text) as { message?: string | string[]; error?: { message?: string | string[] } }; const value = body.message ?? body.error?.message; message = Array.isArray(value) ? value.join('，') : value ?? message } catch { /* raw response */ }
    throw new Error(message)
  }
  if (response.status === 204) return undefined as T
  return response.json() as Promise<T>
}
export function sendCodeApi(phone: string) { return apiFetch<{ success: boolean; expiresIn: number }>('/api/auth/code', { method: 'POST', body: JSON.stringify({ phone }) }) }
export async function loginApi(phone: string, code: string) { const result = await apiFetch<{ accessToken: string; refreshToken: string; user: { id: string; name?: string; phone: string } }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ phone, code }) }); setAccessToken(result.accessToken); setRefreshToken(result.refreshToken); return result }
export function meApi() { return apiFetch<{ id: string; name?: string; phone: string }>('/api/auth/me') }
export async function logoutApi() { const refreshToken = getRefreshToken(); try { if (refreshToken) await apiFetch<{ success: boolean }>('/api/auth/logout', { method: 'POST', body: JSON.stringify({ refreshToken }) }) } finally { clearAccessToken() } }

export function getSettingsApi() { return apiFetch<Record<string, boolean | string | number>>('/api/settings') }
export function updateSettingsApi(patch: Record<string, boolean | string | number>) { return apiFetch<Record<string, boolean | string | number>>('/api/settings', { method: 'PATCH', body: JSON.stringify(patch) }) }
