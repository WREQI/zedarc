import { computed, reactive } from 'vue'
import { clearAccessToken, getAccessToken, getRefreshToken, getTokenStatus, loginApi, logoutApi, meApi, revokeOtherSessionsApi, type TokenStatus } from '@/services/api-client'
import { useWatchlistStore } from '@/stores/watchlist'

export interface UserProfile { id: string; name: string; phone?: string; avatar?: string }
const state = reactive<{ user: UserProfile | null; loading: boolean; error: string; ready: boolean }>({ user: null, loading: false, error: '', ready: false })
let initialized = false
export function useAuthStore() {
  if (!initialized) { initialized = true; try { state.user = JSON.parse(window.localStorage.getItem('zedarc-user') ?? 'null') } catch { state.user = null } }
  async function restore() {
    if (state.ready || (!getAccessToken() && !getRefreshToken())) { state.ready = true; return }
    try { const user = await meApi(); state.user = { ...user, name: user.name ?? user.phone }; window.localStorage.setItem('zedarc-user', JSON.stringify(state.user)); await useWatchlistStore().hydrate() }
    catch { if (!getAccessToken() && !getRefreshToken()) state.user = null }
    finally { state.ready = true }
  }
  async function login(phone: string, code = '123456') { state.loading = true; state.error = ''; try { if (!/^1\d{10}$/.test(phone)) throw new Error('请输入有效的手机号'); const result = await loginApi(phone, code); state.user = { ...result.user, name: result.user.name ?? result.user.phone }; window.localStorage.setItem('zedarc-user', JSON.stringify(state.user)); await useWatchlistStore().hydrate() } catch (error) { state.error = error instanceof Error ? error.message : '登录失败'; throw error } finally { state.loading = false } }
  function setUser(user: { id: string; name?: string; phone: string; avatar?: string }) { state.user = { ...user, name: user.name ?? user.phone }; window.localStorage.setItem('zedarc-user', JSON.stringify(state.user)) }
  function tokenStatus(): TokenStatus { return getTokenStatus() }
  async function revokeOtherSessions() { await revokeOtherSessionsApi() }
  async function logout() { await logoutApi(); state.user = null; window.localStorage.removeItem('zedarc-user') }
  return { user: computed(() => state.user), isAuthenticated: computed(() => Boolean(state.user && (getAccessToken() || getRefreshToken()))), loading: computed(() => state.loading), ready: computed(() => state.ready), error: computed(() => state.error), restore, login, logout, setUser, tokenStatus, revokeOtherSessions }
}
