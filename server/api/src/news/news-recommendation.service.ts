import { Injectable, NotFoundException } from '@nestjs/common'
import { and, asc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { favorites, newsFavorites, newsRecommendationPreferences, watchlistItems } from '../database/schema.js'
import { NewsService, type NewsItem } from './news.service.js'

export type RecommendationPreferenceKind = 'article' | 'keyword'
export type RecommendationAction = 'dislike' | 'block'
export interface NewsRecommendation extends NewsItem { reason: string; score: number }
export interface NewsRecommendationPreference { kind: RecommendationPreferenceKind; value: string; action: RecommendationAction; reason?: string; createdAt: string }
export interface RecommendationQuery { userId?: string; history?: string[]; limit?: number }
export interface RecommendationFeedback { newsId?: string; keyword?: string; action?: RecommendationAction; reason?: string }
interface Signals { codes: Set<string>; keywords: string[] }

@Injectable()
export class NewsRecommendationService {
  private readonly memory = new Map<string, NewsRecommendationPreference[]>()
  constructor(private readonly database: DatabaseService, private readonly news: NewsService) {}

  async list(query: RecommendationQuery = {}) {
    const limit = Math.min(Math.max(query.limit ?? 20, 1), 50)
    const preferences = await this.preferences(query.userId)
    const blockedArticles = new Set(preferences.filter((item) => item.kind === 'article').map((item) => item.value))
    const blockedKeywords = preferences.filter((item) => item.kind === 'keyword').map((item) => item.value)
    const signals = await this.getSignals(query.userId, query.history ?? [])
    const source = (await this.news.list({ page: 1, pageSize: 100 })).items
    const personalized = Boolean(query.userId && (signals.codes.size || signals.keywords.length))
    const recommendations = source
      .filter((article) => !blockedArticles.has(article.id) && !blockedKeywords.some((keyword) => `${article.title} ${article.summary}`.toLowerCase().includes(keyword)))
      .map((article) => this.rank(article, signals, personalized))
      .sort((a, b) => b.score - a.score || b.publishedAt.localeCompare(a.publishedAt) || a.id.localeCompare(b.id))
      .slice(0, limit)
    return { items: recommendations, total: recommendations.length, personalized, signals: { codeCount: signals.codes.size, keywordCount: signals.keywords.length }, blocked: preferences.length }
  }

  async feedback(userId: string | undefined, input: RecommendationFeedback) {
    const action = input.action ?? 'dislike'
    if (!['dislike', 'block'].includes(action)) throw new NotFoundException('不支持的推荐反馈类型')
    const articleValue = input.newsId?.trim()
    const keywordValue = input.keyword?.trim().toLowerCase()
    if ((articleValue ? 1 : 0) + (keywordValue ? 1 : 0) !== 1) throw new NotFoundException('请指定文章或关键词')
    if (articleValue) await this.news.find(articleValue)
    const kind: RecommendationPreferenceKind = articleValue ? 'article' : 'keyword'
    const value = (articleValue ?? keywordValue!).slice(0, 300)
    const preference: NewsRecommendationPreference = { kind, value, action, reason: input.reason?.trim().slice(0, 200) || undefined, createdAt: new Date().toISOString() }
    if (!userId) return { success: true, persisted: false, preference }
    if (this.database.db) {
      try {
        const [row] = await this.database.db.insert(newsRecommendationPreferences).values({ userId, kind, value, action, reason: preference.reason }).onConflictDoUpdate({ target: [newsRecommendationPreferences.userId, newsRecommendationPreferences.kind, newsRecommendationPreferences.value], set: { action, reason: preference.reason } }).returning()
        return { success: true, persisted: true, preference: this.toPreference(row) }
      } catch (error) { this.throwIfProduction(error) }
    }
    this.requireDemoMode()
    const list = this.memory.get(userId) ?? []
    const index = list.findIndex((item) => item.kind === kind && item.value === value)
    if (index >= 0) list[index] = preference; else list.push(preference)
    this.memory.set(userId, list)
    return { success: true, persisted: true, preference }
  }

  async preferences(userId?: string) {
    if (!userId) return []
    if (this.database.db) {
      try { return (await this.database.db.select().from(newsRecommendationPreferences).where(eq(newsRecommendationPreferences.userId, userId)).orderBy(asc(newsRecommendationPreferences.createdAt))).map((row) => this.toPreference(row)) } catch (error) { this.throwIfProduction(error) }
    }
    this.requireDemoMode()
    return [...(this.memory.get(userId) ?? [])]
  }

  async restore(userId: string | undefined, kind: string, value: string) {
    if (!userId) return { success: true, persisted: false }
    if (kind !== 'article' && kind !== 'keyword') throw new NotFoundException('偏好类型无效')
    if (this.database.db) {
      try { await this.database.db.delete(newsRecommendationPreferences).where(and(eq(newsRecommendationPreferences.userId, userId), eq(newsRecommendationPreferences.kind, kind), eq(newsRecommendationPreferences.value, value))); return { success: true, persisted: true } } catch (error) { this.throwIfProduction(error) }
    }
    this.requireDemoMode(); this.memory.set(userId, (this.memory.get(userId) ?? []).filter((item) => !(item.kind === kind && item.value === value))); return { success: true, persisted: true }
  }

  async reset(userId?: string) {
    if (!userId) return { success: true, persisted: false, count: 0 }
    if (this.database.db) {
      try { const rows = await this.database.db.delete(newsRecommendationPreferences).where(eq(newsRecommendationPreferences.userId, userId)).returning({ id: newsRecommendationPreferences.id }); return { success: true, persisted: true, count: rows.length } } catch (error) { this.throwIfProduction(error) }
    }
    this.requireDemoMode(); const count = (this.memory.get(userId) ?? []).length; this.memory.delete(userId); return { success: true, persisted: true, count }
  }

  private rank(article: NewsItem, signals: Signals, personalized: boolean): NewsRecommendation { const matchedCodes = article.codes.filter((code) => signals.codes.has(code.toLowerCase())); const text = `${article.title} ${article.summary}`.toLowerCase(); const matchedKeywords = signals.keywords.filter((keyword) => text.includes(keyword)); const score = matchedCodes.length * 10 + matchedKeywords.length * 3; let reason = '公开资讯'; if (matchedCodes.length) reason = `与你关注的 ${matchedCodes.slice(0, 2).join('、')} 相关`; else if (matchedKeywords.length) reason = `与你搜索过的“${matchedKeywords[0]}”相关`; else if (personalized) reason = '根据你的关注内容精选'; return { ...article, reason, score } }
  private async getSignals(userId: string | undefined, history: string[]): Promise<Signals> { const codes = new Set<string>(); const keywords = [...new Set(history.map((value) => value.trim().toLowerCase()).filter((value) => value.length >= 2).slice(0, 20))]; if (!userId || !this.database.db) return { codes, keywords }; try { const [watchlist, stockFavorites, savedNews] = await Promise.all([this.database.db.select({ code: watchlistItems.code }).from(watchlistItems).where(eq(watchlistItems.userId, userId)), this.database.db.select({ code: favorites.code }).from(favorites).where(eq(favorites.userId, userId)), this.database.db.select({ newsId: newsFavorites.newsId }).from(newsFavorites).where(eq(newsFavorites.userId, userId))]); watchlist.forEach((item) => codes.add(item.code.toLowerCase())); stockFavorites.forEach((item) => codes.add(item.code.toLowerCase())); savedNews.forEach((item) => keywords.push(item.newsId.toLowerCase())) } catch (error) { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error } return { codes, keywords: [...new Set(keywords)] } }
  private toPreference(row: typeof newsRecommendationPreferences.$inferSelect): NewsRecommendationPreference { return { kind: row.kind as RecommendationPreferenceKind, value: row.value, action: row.action as RecommendationAction, reason: row.reason ?? undefined, createdAt: row.createdAt.toISOString() } }
  private throwIfProduction(error: unknown) { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error }
  private requireDemoMode() { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new Error('数据库不可用，推荐偏好暂时无法使用') }
}
