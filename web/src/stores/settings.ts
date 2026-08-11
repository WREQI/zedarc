import { computed, reactive } from 'vue'
import { getAccessToken, getSettingsApi, updateSettingsApi } from '@/services/api-client'

export interface UserSettings {
  notifications: boolean
  priceAlerts: boolean
}

const state = reactive<UserSettings>({ notifications: true, priceAlerts: true })

export function useSettingsStore() {
  async function hydrate() {
    if (!getAccessToken()) return
    try {
      const settings = await getSettingsApi()
      if (typeof settings.notifications === 'boolean') state.notifications = settings.notifications
      if (typeof settings.priceAlerts === 'boolean') state.priceAlerts = settings.priceAlerts
    } catch {
      // Settings are server-owned; keep the in-memory defaults when offline.
    }
  }

  async function set(key: keyof UserSettings, value: boolean) {
    const previous = state[key]
    state[key] = value
    if (!getAccessToken()) return false
    try {
      await updateSettingsApi({ [key]: value })
      return true
    } catch {
      state[key] = previous
      return false
    }
  }

  return {
    notifications: computed(() => state.notifications),
    priceAlerts: computed(() => state.priceAlerts),
    hydrate,
    set,
  }
}
