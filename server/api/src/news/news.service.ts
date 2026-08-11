import { Injectable, NotFoundException } from '@nestjs/common'
import { desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { news } from '../database/schema.js'

export interface NewsItem { id: string; title: string; summary: string; source: string; publishedAt: string; codes: string[]; url?: string }
export interface NewsListQuery { code?: string; keyword?: string; source?: string; page?: number; pageSize?: number }

@Injectable()
export class NewsService {
  private readonly items: NewsItem[] = [{ id: 'news-1', title: 'A股市场盘中快讯', summary: '市场热点与主要指数实时动态。', source: 'Zedarc', publishedAt: new Date().toISOString(), codes: ['000001'] }]

  constructor(private readonly database: DatabaseService) {}

  async list(query: NewsListQuery = {}) {
    const page = query.page ?? 1
    const pageSize = query.pageSize ?? 20
    const source = query.source?.trim().toLowerCase()
    const filter = (item: NewsItem) => this.matches(item, query) && (!source || item.source.toLowerCase() === source)
    let filtered: NewsItem[]
    if (this.database.db) {
      try {
        const rows = await this.database.db.select().from(news).orderBy(desc(news.publishedAt), desc(news.id))
        filtered = rows.map(this.toItem).filter(filter)
      } catch (error) {
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
        filtered = this.items.filter(filter)
      }
    } else filtered = this.items.filter(filter)
    const start = (page - 1) * pageSize
    return { items: filtered.slice(start, start + pageSize), total: filtered.length, page, pageSize, totalPages: Math.ceil(filtered.length / pageSize), hasNext: start + pageSize < filtered.length }
  }

  async find(id: string) {
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select().from(news).where(eq(news.id, id)).limit(1)
        if (row) return this.toItem(row)
      } catch (error) {
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    const item = this.items.find((value) => value.id === id)
    if (!item) throw new NotFoundException('资讯不存在')
    return item
  }

  private readonly toItem = (row: typeof news.$inferSelect): NewsItem => ({ id: row.id, title: row.title, summary: row.summary, source: row.source, publishedAt: row.publishedAt.toISOString(), codes: row.codes ?? [], ...(row.url ? { url: row.url } : {}) })
  private matches(item: NewsItem, query: Pick<NewsListQuery, 'code' | 'keyword'>) { const q = (query.keyword ?? '').trim().toLowerCase(); const code = query.code?.trim().toLowerCase(); return (!code || item.codes.some((value) => value.toLowerCase() === code)) && (!q || `${item.title}${item.summary}`.toLowerCase().includes(q)) }
}
