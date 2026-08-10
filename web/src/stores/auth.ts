import { computed, reactive } from 'vue'
import { clearAccessToken, getAccessToken, loginApi, setAccessToken } from '@/services/api-client'

export interface UserProfile { id: string; name: string; phone?: string; avatar?: string }
const state = reactive<{ user: UserProfile | null; loading: boolean; error: string }>({ user: null, loading: false, error: '' })
let initialized = false
export function useAuthStore() {
  if (!initialized) {
    try {
      state.user = JSON.parse(window.localStorage.getItem('zedarc-user') ?? 'null') as UserProfile | null
      if (!getAccessToken() && !window.localStorage.getItem('zedarc-refresh-token')) state.user = null
    } catch { state.user = null }
    initialized = true
  }
  async function login(phone: string, code = '123456') {
    state.loading = true; state.error = ''
    try {
      if (!/^1\d{10}$/.test(phone)) throw new Error('请输入有效的手机号')
      const result = await loginApi(phone, code)
      setAccessToken(result.accessToken)
      state.user = result.user
      window.localStorage.setItem('zedarc-user', JSON.stringify(state.user))
    } catch (error) { state.error = error instanceof Error ? error.message : '登录失败' } finally { state.loading = false }
  }
  function logout() {
    state.user = null
    clearAccessToken()
    window.localStorage.removeItem('zedarc-user')
  }
  return { user: computed(() => state.user), isAuthenticated: computed(() => Boolean(state.user && getAccessToken())), loading: computed(() => state.loading), error: computed(() => state.error), login, logout }
}
