import { Injectable, NotFoundException } from '@nestjs/common'
import { desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { news } from '../database/schema.js'

export interface NewsItem { id: string; title: string; summary: string; source: string; publishedAt: string; codes: string[]; url?: string }

@Injectable()
export class NewsService {
  private readonly items: NewsItem[] = [{ id: 'news-1', title: 'A股市场盘中快讯', summary: '市场热点与主要指数实时动态。', source: 'Zedarc', publishedAt: new Date().toISOString(), codes: ['000001'] }]

  constructor(private readonly database: DatabaseService) {}

  async list(query?: { code?: string; keyword?: string; page?: number; pageSize?: number }) {
    const page = Math.max(1, query?.page ?? 1)
    const pageSize = Math.min(100, Math.max(1, query?.pageSize ?? 20))
    if (this.database.db) {
      try {
        const rows = await this.database.db.select().from(news).orderBy(desc(news.publishedAt))
        const filtered = rows.map(this.toItem).filter((item) => this.matches(item, query))
        return { items: filtered.slice((page - 1) * pageSize, page * pageSize), total: filtered.length, page, pageSize }
      } catch { /* Database is optional in local/demo deployments. */ }
    }
    const filtered = this.items.filter((item) => this.matches(item, query))
    return { items: filtered.slice((page - 1) * pageSize, page * pageSize), total: filtered.length, page, pageSize }
  }

  async find(id: string) {
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select().from(news).where(eq(news.id, id)).limit(1)
        if (row) return this.toItem(row)
      } catch { /* fall through to the in-memory store */ }
    }
    const item = this.items.find((value) => value.id === id)
    if (!item) throw new NotFoundException('资讯不存在')
    return item
  }

  private readonly toItem = (row: typeof news.$inferSelect): NewsItem => ({ id: row.id, title: row.title, summary: row.summary, source: row.source, publishedAt: row.publishedAt.toISOString(), codes: row.codes ?? [], ...(row.url ? { url: row.url } : {}) })
  private matches(item: NewsItem, query?: { code?: string; keyword?: string }) { const q = (query?.keyword ?? '').toLowerCase(); return (!query?.code || item.codes.includes(query.code)) && (!q || `${item.title}${item.summary}`.toLowerCase().includes(q)) }
}
