import { computed, ref } from 'vue'
import { getAccessToken } from '@/services/api-client'
import { getNewsRecommendationPreferences, resetNewsRecommendationPreferences, restoreNewsRecommendationPreference, sendNewsRecommendationFeedback, type RecommendationPreference } from '@/services/news'

const storageKey = 'zedarc-news-recommendation-preferences'
const preferences = ref<RecommendationPreference[]>([])
let initialized = false
function readLocal() { if (typeof window === 'undefined') return []; try { const value = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]'); return Array.isArray(value) ? value as RecommendationPreference[] : [] } catch { return [] } }
function persistLocal() { if (typeof window !== 'undefined') window.localStorage.setItem(storageKey, JSON.stringify(preferences.value)) }
function init() { if (!initialized) { preferences.value = readLocal(); initialized = true } }

export function useNewsRecommendationsStore() {
  init()
  const blockedArticleIds = computed(() => new Set(preferences.value.filter((item) => item.kind === 'article').map((item) => item.value)))
  const blockedKeywords = computed(() => preferences.value.filter((item) => item.kind === 'keyword').map((item) => item.value))
  async function hydrate() {
    if (!getAccessToken()) return
    try { preferences.value = await getNewsRecommendationPreferences() } catch { /* local anonymous preferences remain private and usable offline */ }
  }
  function isBlocked(article: { id: string; title: string; summary: string }) { const text = `${article.title} ${article.summary}`.toLowerCase(); return blockedArticleIds.value.has(article.id) || blockedKeywords.value.some((keyword) => text.includes(keyword)) }
  async function feedback(input: { newsId?: string; keyword?: string; action?: 'dislike' | 'block'; reason?: string }) {
    const value = input.newsId ?? input.keyword?.trim().toLowerCase()
    const kind = input.newsId ? 'article' : 'keyword'
    if (!value) return
    const item: RecommendationPreference = { kind, value, action: input.action ?? 'dislike', reason: input.reason, createdAt: new Date().toISOString() }
    preferences.value = [...preferences.value.filter((old) => !(old.kind === kind && old.value === value)), item]
    if (!getAccessToken()) persistLocal(); else await sendNewsRecommendationFeedback(input)
  }
  async function restore(item: RecommendationPreference) { preferences.value = preferences.value.filter((old) => old !== item && !(old.kind === item.kind && old.value === item.value)); if (!getAccessToken()) persistLocal(); else await restoreNewsRecommendationPreference(item.kind, item.value) }
  async function reset() { preferences.value = []; if (!getAccessToken()) persistLocal(); else await resetNewsRecommendationPreferences() }
  return { preferences, blockedArticleIds, isBlocked, hydrate, feedback, restore, reset, count: computed(() => preferences.value.length) }
}
