import { computed, reactive } from 'vue'

export interface UserProfile { id: string; name: string; phone?: string; avatar?: string }
const state = reactive<{ user: UserProfile | null; loading: boolean; error: string }>({ user: null, loading: false, error: '' })
let initialized = false
export function useAuthStore() {
  if (!initialized) {
    try { state.user = JSON.parse(window.localStorage.getItem('zedarc-user') ?? 'null') as UserProfile | null } catch { state.user = null }
    initialized = true
  }
  async function login(phone: string) {
    state.loading = true; state.error = ''
    try {
      await new Promise((resolve) => window.setTimeout(resolve, 350))
      if (!/^1\d{10}$/.test(phone)) throw new Error('请输入有效的手机号')
      state.user = { id: phone, name: `用户${phone.slice(-4)}`, phone }
      window.localStorage.setItem('zedarc-user', JSON.stringify(state.user))
    } catch (error) { state.error = error instanceof Error ? error.message : '登录失败' } finally { state.loading = false }
  }
  function logout() { state.user = null; window.localStorage.removeItem('zedarc-user') }
  return { user: computed(() => state.user), loading: computed(() => state.loading), error: computed(() => state.error), login, logout }
}
