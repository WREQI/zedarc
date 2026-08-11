import { computed, reactive, ref } from 'vue'
import { ApiError, getAccessToken, getSettingsApi, onAuthStateChange, updateSettingsApi } from '@/services/api-client'
import { drainSyncQueue, enqueueSync } from '@/services/offline-sync'

export interface UserSettings { notifications: boolean; priceAlerts: boolean; pushNotifications: boolean; privacyMode: boolean }
export type SyncStatus = 'local' | 'syncing' | 'synced' | 'error' | 'conflict'

const defaults: UserSettings = { notifications: true, priceAlerts: true, pushNotifications: true, privacyMode: false }
const state = reactive<UserSettings>({ ...defaults })
const syncStatus = ref<SyncStatus>('local')
const syncError = ref('')
const lastSyncedAt = ref<string | null>(null)
let version: string | undefined
let initializedToken: string | null | undefined

function resetForAuth(token: string | null) {
  initializedToken = token
  Object.assign(state, defaults)
  version = undefined
  syncStatus.value = token ? 'local' : 'local'
  syncError.value = ''
  lastSyncedAt.value = null
}
onAuthStateChange(resetForAuth)

export function useSettingsStore() {
  async function hydrate() {
    const token = getAccessToken()
    if (initializedToken !== token) resetForAuth(token)
    if (!token) { syncStatus.value = 'local'; return }
    syncStatus.value = 'syncing'; syncError.value = ''
    try {
      const settings = await getSettingsApi()
      for (const key of Object.keys(defaults) as (keyof UserSettings)[]) if (typeof settings[key] === 'boolean') state[key] = settings[key] as boolean
      version = settings._sync?.version
      lastSyncedAt.value = settings._sync?.updatedAt ?? new Date().toISOString()
      syncStatus.value = 'synced'
    } catch (error) { syncStatus.value = 'error'; syncError.value = error instanceof Error ? error.message : '设置同步失败' }
  }

  async function set(key: keyof UserSettings, value: boolean) {
    const previous = state[key]; const previousVersion = version
    state[key] = value
    if (!getAccessToken()) { syncStatus.value = 'local'; return true }
    syncStatus.value = 'syncing'; syncError.value = ''
    try {
      const result = await updateSettingsApi({ [key]: value, ...(version ? { version } : {}) })
      version = result._sync?.version ?? version; lastSyncedAt.value = result._sync?.updatedAt ?? new Date().toISOString(); syncStatus.value = 'synced'; return true
    } catch (error) {
      state[key] = previous; version = previousVersion
      syncStatus.value = error instanceof ApiError && error.status === 409 ? 'conflict' : 'error'
      syncError.value = error instanceof Error ? error.message : '设置同步失败'
            if (!(error instanceof ApiError && error.status === 409)) {
              enqueueSync({ key: `settings:${key}`, resource: 'settings', url: '/api/settings', method: 'PATCH', body: JSON.stringify({ [key]: value }) })
              void drainSyncQueue(async (operation) => { await updateSettingsApi(JSON.parse(operation.body ?? '{}')) })
            }
            return false
    }
  }

  return { notifications: computed(() => state.notifications), priceAlerts: computed(() => state.priceAlerts), pushNotifications: computed(() => state.pushNotifications), privacyMode: computed(() => state.privacyMode), syncStatus, syncError, lastSyncedAt, hydrate, set }
}
