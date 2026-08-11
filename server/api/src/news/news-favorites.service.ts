import { Injectable, NotFoundException } from '@nestjs/common'
import { and, asc, eq, ilike, sql } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { newsFavorites } from '../database/schema.js'
import { NewsService, type NewsItem } from './news.service.js'

export interface NewsFavorite { id: string; newsId: string; category: string; tags: string[]; note?: string; createdAt: string; article: NewsItem }
export interface NewsFavoriteQuery { category?: string; tag?: string; keyword?: string; note?: string }
export interface NewsFavoriteMetadata { category?: string; tags?: string[]; note?: string }

@Injectable()
export class NewsFavoritesService {
  private readonly memory = new Map<string, Array<{ id: string; newsId: string; category: string; tags: string[]; note?: string; createdAt: string }>>()
  constructor(private readonly database: DatabaseService, private readonly news: NewsService) {}

  async list(userId: string, query: NewsFavoriteQuery = {}) {
    const category = query.category?.trim()
    const tag = query.tag?.trim().toLowerCase()
    const keyword = query.keyword?.trim().toLowerCase()
    const note = query.note?.trim().toLowerCase()
    const matches = (item: NewsFavorite) => (!category || item.category === category) && (!tag || item.tags.some((value) => value.toLowerCase() === tag)) && (!note || (item.note ?? '').toLowerCase().includes(note)) && (!keyword || `${item.article.title}${item.article.summary}`.toLowerCase().includes(keyword))
    if (this.database.db) {
      try {
        const conditions = [eq(newsFavorites.userId, userId)]
        if (category) conditions.push(eq(newsFavorites.category, category))
        if (tag) conditions.push(sql`${newsFavorites.tags} ? ${tag}`)
        if (note) conditions.push(ilike(newsFavorites.note, `%${note}%`))
        const rows = await this.database.db.select().from(newsFavorites).where(and(...conditions)).orderBy(asc(newsFavorites.createdAt))
        const resolved = await Promise.all(rows.map(async (row) => this.withArticle(row.id, row.newsId, row.category, row.tags ?? [], row.note ?? undefined, row.createdAt.toISOString())))
        return resolved.filter((item): item is NewsFavorite => item !== null && matches(item))
      } catch (error) { this.throwIfProduction(error) }
    }
    this.requireDemoMode()
    const resolved = await Promise.all((this.memory.get(userId) ?? []).map((row) => this.withArticle(row.id, row.newsId, row.category, row.tags, row.note, row.createdAt)))
    return resolved.filter((item): item is NewsFavorite => item !== null && matches(item))
  }

  async add(userId: string, newsId: string, metadata: NewsFavoriteMetadata = {}) {
    await this.news.find(newsId)
    const values = { category: this.cleanCategory(metadata.category), tags: this.cleanTags(metadata.tags), note: metadata.note }
    if (this.database.db) {
      try {
        const [row] = await this.database.db.insert(newsFavorites).values({ userId, newsId, ...values }).onConflictDoUpdate({ target: [newsFavorites.userId, newsFavorites.newsId], set: { ...(metadata.category !== undefined ? { category: values.category } : {}), ...(metadata.tags !== undefined ? { tags: values.tags } : {}), ...(metadata.note !== undefined ? { note: metadata.note } : {}) } }).returning()
        return this.withArticle(row.id, row.newsId, row.category, row.tags ?? [], row.note ?? undefined, row.createdAt.toISOString())
      } catch (error) { this.throwIfProduction(error) }
    }
    this.requireDemoMode(); const list = this.memory.get(userId) ?? []; const old = list.find((row) => row.newsId === newsId)
    if (old) { Object.assign(old, values); return this.withArticle(old.id, old.newsId, old.category, old.tags, old.note, old.createdAt) }
    const row = { id: crypto.randomUUID(), newsId, ...values, createdAt: new Date().toISOString() }; list.push(row); this.memory.set(userId, list)
    return this.withArticle(row.id, row.newsId, row.category, row.tags, row.note, row.createdAt)
  }

  async update(userId: string, newsId: string, metadata: NewsFavoriteMetadata) {
    await this.news.find(newsId)
    const values = { ...(metadata.category !== undefined ? { category: this.cleanCategory(metadata.category) } : {}), ...(metadata.tags !== undefined ? { tags: this.cleanTags(metadata.tags) } : {}), ...(metadata.note !== undefined ? { note: metadata.note } : {}) }
    if (this.database.db) {
      try {
        const [row] = await this.database.db.update(newsFavorites).set(values).where(and(eq(newsFavorites.userId, userId), eq(newsFavorites.newsId, newsId))).returning()
        if (!row) throw new NotFoundException('资讯收藏不存在')
        return this.withArticle(row.id, row.newsId, row.category, row.tags ?? [], row.note ?? undefined, row.createdAt.toISOString())
      } catch (error) { this.throwIfProduction(error); if (error instanceof NotFoundException) throw error }
    }
    this.requireDemoMode(); const row = (this.memory.get(userId) ?? []).find((item) => item.newsId === newsId)
    if (!row) throw new NotFoundException('资讯收藏不存在'); Object.assign(row, values); return this.withArticle(row.id, row.newsId, row.category, row.tags, row.note, row.createdAt)
  }

  async remove(userId: string, newsId: string) { return this.removeBatch(userId, [newsId]) }

  async removeBatch(userId: string, newsIds: string[]) {
    const ids = [...new Set(newsIds.filter(Boolean))]
    if (this.database.db) { try { await this.database.db.delete(newsFavorites).where(and(eq(newsFavorites.userId, userId), sql`${newsFavorites.newsId} in ${ids}`)); return { success: true, count: ids.length } } catch (error) { this.throwIfProduction(error) } }
    this.requireDemoMode(); const list = this.memory.get(userId) ?? []; this.memory.set(userId, list.filter((row) => !ids.includes(row.newsId))); return { success: true, count: ids.length }
  }

  async updateBatch(userId: string, newsIds: string[], metadata: NewsFavoriteMetadata) { for (const newsId of [...new Set(newsIds)]) await this.update(userId, newsId, metadata); return this.list(userId) }
  private cleanCategory(value?: string) { return (value?.trim() || '未分类').slice(0, 64) }
  private cleanTags(values?: string[]) { return [...new Set((values ?? []).map((value) => value.trim()).filter(Boolean))].slice(0, 20) }
  private async withArticle(id: string, newsId: string, category: string, tags: string[], note: string | undefined, createdAt: string): Promise<NewsFavorite | null> { try { return { id, newsId, category, tags, note, createdAt, article: await this.news.find(newsId) } } catch { return null } }
  private throwIfProduction(error: unknown) { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error }
  private requireDemoMode() { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new Error('数据库不可用，资讯收藏暂时无法使用') }
}
