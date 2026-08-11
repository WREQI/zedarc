import { Injectable } from '@nestjs/common'
import { eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { favorites, newsFavorites, watchlistItems } from '../database/schema.js'
import { NewsService, type NewsItem } from './news.service.js'

export interface NewsRecommendation extends NewsItem {
  reason: string
  score: number
}

export interface RecommendationQuery {
  userId?: string
  history?: string[]
  limit?: number
}

interface Signals {
  codes: Set<string>
  keywords: string[]
}

@Injectable()
export class NewsRecommendationService {
  constructor(private readonly database: DatabaseService, private readonly news: NewsService) {}

  async list(query: RecommendationQuery = {}) {
    const limit = Math.min(Math.max(query.limit ?? 20, 1), 50)
    const signals = await this.getSignals(query.userId, query.history ?? [])
    const source = (await this.news.list({ page: 1, pageSize: 100 })).items
    const personalized = Boolean(query.userId && (signals.codes.size || signals.keywords.length))

    const recommendations = source
      .map((article) => this.rank(article, signals, personalized))
      .sort((a, b) => b.score - a.score || b.publishedAt.localeCompare(a.publishedAt) || a.id.localeCompare(b.id))
      .slice(0, limit)

    return {
      items: recommendations,
      total: recommendations.length,
      personalized,
      signals: { codeCount: signals.codes.size, keywordCount: signals.keywords.length },
    }
  }

  private rank(article: NewsItem, signals: Signals, personalized: boolean): NewsRecommendation {
    const matchedCodes = article.codes.filter((code) => signals.codes.has(code.toLowerCase()))
    const text = `${article.title} ${article.summary}`.toLowerCase()
    const matchedKeywords = signals.keywords.filter((keyword) => text.includes(keyword))
    const score = matchedCodes.length * 10 + matchedKeywords.length * 3
    let reason = '公开资讯'
    if (matchedCodes.length) reason = `与你关注的 ${matchedCodes.slice(0, 2).join('、')} 相关`
    else if (matchedKeywords.length) reason = `与你搜索过的“${matchedKeywords[0]}”相关`
    else if (personalized) reason = '根据你的关注内容精选'
    return { ...article, reason, score }
  }

  private async getSignals(userId: string | undefined, history: string[]): Promise<Signals> {
    const codes = new Set<string>()
    const keywords = [...new Set(history.map((value) => value.trim().toLowerCase()).filter((value) => value.length >= 2).slice(0, 20))]
    if (!userId || !this.database.db) return { codes, keywords }

    try {
      const [watchlist, stockFavorites, savedNews] = await Promise.all([
        this.database.db.select({ code: watchlistItems.code }).from(watchlistItems).where(eq(watchlistItems.userId, userId)),
        this.database.db.select({ code: favorites.code }).from(favorites).where(eq(favorites.userId, userId)),
        this.database.db.select({ newsId: newsFavorites.newsId }).from(newsFavorites).where(eq(newsFavorites.userId, userId)),
      ])
      watchlist.forEach((item) => codes.add(item.code.toLowerCase()))
      stockFavorites.forEach((item) => codes.add(item.code.toLowerCase()))
      // A saved article is a strong signal even when its stock code is unavailable.
      savedNews.forEach((item) => keywords.push(item.newsId.toLowerCase()))
    } catch (error) {
      if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
    }
    return { codes, keywords: [...new Set(keywords)] }
  }
}
