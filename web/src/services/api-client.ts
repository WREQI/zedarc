const tokenKey = 'zedarc-access-token'
const refreshKey = 'zedarc-refresh-token'

export function getAccessToken() { return window.localStorage.getItem(tokenKey) }
export function setAccessToken(token: string) { window.localStorage.setItem(tokenKey, token) }
export function setRefreshToken(token: string) { window.localStorage.setItem(refreshKey, token) }
export function clearAccessToken() { window.localStorage.removeItem(tokenKey); window.localStorage.removeItem(refreshKey) }

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers)
  headers.set('Content-Type', 'application/json')
  const token = getAccessToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)
  const response = await fetch(path, { ...options, headers, credentials: 'include' })
  if (!response.ok) throw new Error((await response.text()) || `请求失败 (${response.status})`)
  return response.json() as Promise<T>
}

export async function loginApi(phone: string, code = '123456') {
  const result = await apiFetch<{ accessToken: string; refreshToken: string; user: { id: string; name: string; phone: string } }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ phone, code }) })
  setAccessToken(result.accessToken)
  setRefreshToken(result.refreshToken)
  return result
}
