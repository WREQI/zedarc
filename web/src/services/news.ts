import { apiFetch, ApiError } from '@/services/api-client'
import type { NewsArticle } from '@/services/news-types'

export interface NewsPage { items: NewsArticle[]; total: number; page: number; pageSize: number; totalPages?: number; hasNext?: boolean }
export interface NewsFavorite { id: string; newsId: string; category: string; tags: string[]; note?: string; createdAt: string; article: NewsArticle }
export type NewsFavoriteMetadata = { category?: string; tags?: string[]; note?: string }
export function isNewsFavoriteAuthError(error: unknown) { return error instanceof ApiError && error.status === 401 }
export interface NewsRecommendation extends NewsArticle { reason: string; score: number }
export interface NewsRecommendationResult { items: NewsRecommendation[]; total: number; personalized: boolean; signals: { codeCount: number; keywordCount: number }; blocked?: number }
export type RecommendationPreference = { kind: 'article' | 'keyword'; value: string; action: 'dislike' | 'block'; reason?: string; createdAt: string }
export interface NewsTopicTimelineGroup { date: string; articles: NewsArticle[] }
export interface NewsTopic { id: string; code: string; title: string; count: number; earliestAt: string; latestAt: string; metadata: { code: string; title: string; count: number; earliestAt: string; latestAt: string }; articles: NewsArticle[]; timeline: NewsTopicTimelineGroup[] }

function normalize(item: NewsArticle & { id: string | number; publishedAt?: string; codes?: string[] }) { return { ...item, id: String(item.id), publishedAt: item.publishedAt, time: item.time || item.publishedAt?.slice(11, 16) || '', tag: item.tag || (item.codes?.length ? '自选动态' : '要闻'), content: item.content || item.summary } }
export async function getNewsPage(options: { page?: number; pageSize?: number; keyword?: string; code?: string } = {}): Promise<NewsPage> { const query = new URLSearchParams(); Object.entries(options).forEach(([key, value]) => value != null && query.set(key, String(value))); const result = await apiFetch<{ items: NewsArticle[]; total: number; page: number; pageSize: number; totalPages?: number; hasNext?: boolean }>(`/api/news?${query}`); return { ...result, items: result.items.map(normalize) } }
export async function getNewsArticles(options: { keyword?: string; code?: string; source?: string; page?: number; pageSize?: number } = {}) { return (await getNewsPage(options)).items }
export async function getNewsRecommendationPreferences() { return apiFetch<RecommendationPreference[]>('/api/news/recommendations/preferences') }
export function sendNewsRecommendationFeedback(input: { newsId?: string; keyword?: string; action?: 'dislike' | 'block'; reason?: string }) { return apiFetch<{ success: boolean; persisted: boolean; preference: RecommendationPreference }>('/api/news/recommendations/feedback', { method: 'POST', body: JSON.stringify(input) }) }
export function restoreNewsRecommendationPreference(kind: RecommendationPreference['kind'], value: string) { return apiFetch<{ success: boolean; persisted: boolean }>(`/api/news/recommendations/preferences/${kind}/${encodeURIComponent(value)}`, { method: 'DELETE' }) }
export function resetNewsRecommendationPreferences() { return apiFetch<{ success: boolean; persisted: boolean; count: number }>('/api/news/recommendations/preferences/reset', { method: 'POST' }) }
export async function getNewsRecommendations(history: string[] = [], limit = 20) {
  const query = new URLSearchParams({ limit: String(limit) })
  if (history.length) query.set('history', history.join(','))
  const result = await apiFetch<NewsRecommendationResult>(`/api/news/recommendations?${query}`)
  return { ...result, items: result.items.map((item) => ({ ...normalize(item as NewsRecommendation & { publishedAt?: string; codes?: string[] }), reason: item.reason, score: item.score })) }
}
export async function getNewsArticle(id: string) { try { return normalize(await apiFetch<NewsArticle & { publishedAt?: string; codes?: string[] }>(`/api/news/${encodeURIComponent(id)}`)) } catch { return undefined } }
export async function getNewsFavorites(options: { category?: string; tag?: string; keyword?: string; note?: string } = {}) { const query = new URLSearchParams(); Object.entries(options).forEach(([key, value]) => value && query.set(key, value)); const suffix = query.toString() ? `?${query}` : ''; return (await apiFetch<NewsFavorite[]>(`/api/news/favorites${suffix}`)).map((item) => ({ ...item, category: item.category || '未分类', tags: item.tags || [], article: normalize(item.article as NewsArticle & { id: string }) })) }
export function addNewsFavorite(newsId: string, metadata: NewsFavoriteMetadata = {}) { return apiFetch<NewsFavorite>('/api/news/favorites', { method: 'POST', body: JSON.stringify({ newsId, ...metadata }) }) }
export function updateNewsFavorite(newsId: string, metadata: NewsFavoriteMetadata = {}) { return apiFetch<NewsFavorite>(`/api/news/favorites/${encodeURIComponent(newsId)}`, { method: 'PATCH', body: JSON.stringify(metadata) }) }
export function updateNewsFavorites(newsIds: string[], metadata: NewsFavoriteMetadata = {}) { return apiFetch<NewsFavorite[]>('/api/news/favorites/batch', { method: 'PATCH', body: JSON.stringify({ newsIds, ...metadata }) }) }
export function removeNewsFavorite(newsId: string) { return apiFetch<{ success: boolean }>(`/api/news/favorites/${encodeURIComponent(newsId)}`, { method: 'DELETE' }) }
export function removeNewsFavorites(newsIds: string[]) { return apiFetch<{ success: boolean; count: number }>('/api/news/favorites/batch', { method: 'DELETE', body: JSON.stringify({ newsIds }) }) }
function normalizeTopic(topic: NewsTopic) {
  const articles = topic.articles.map((item) => normalize(item as NewsArticle & { id: string | number; publishedAt?: string; codes?: string[] }))
  return { ...topic, articles, timeline: topic.timeline.map((group) => ({ ...group, articles: group.articles.map((item) => normalize(item as NewsArticle & { id: string | number; publishedAt?: string; codes?: string[] })) })) }
}
export async function getNewsTopics() { return (await apiFetch<NewsTopic[]>('/api/news/topics')).map(normalizeTopic) }
export async function getNewsTopic(id: string) { return normalizeTopic(await apiFetch<NewsTopic>(`/api/news/topics/${encodeURIComponent(id)}`)) }
