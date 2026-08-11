import { Injectable, NotFoundException } from '@nestjs/common'
import { desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { news } from '../database/schema.js'

export interface NewsItem { id: string; title: string; summary: string; source: string; publishedAt: string; codes: string[]; url?: string }
export interface NewsListQuery { code?: string; keyword?: string; source?: string; page?: number; pageSize?: number }
export interface NewsTopicTimelineGroup { date: string; articles: NewsItem[] }
export interface NewsTopic { id: string; code: string; title: string; count: number; earliestAt: string; latestAt: string; metadata: { code: string; title: string; count: number; earliestAt: string; latestAt: string }; articles: NewsItem[]; timeline: NewsTopicTimelineGroup[] }

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

  async topics() {
    const rows = (await this.list({ page: 1, pageSize: 100 })).items
    const grouped = new Map<string, NewsItem[]>()
    rows.forEach((item) => item.codes.forEach((code) => grouped.set(code, [...(grouped.get(code) ?? []), item])))
    return [...grouped.entries()].map(([code, articles]) => this.toTopic(code, articles)).sort((a, b) => b.latestAt.localeCompare(a.latestAt))
  }

  async topic(id: string) {
    const code = id.startsWith('code:') ? decodeURIComponent(id.slice(5)) : decodeURIComponent(id)
    const topic = (await this.topics()).find((item) => item.code === code)
    if (!topic) throw new NotFoundException('专题不存在')
    return topic
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

  private toTopic(code: string, articles: NewsItem[]): NewsTopic { const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)); const grouped = new Map<string, NewsItem[]>(); sorted.forEach((article) => { const date = article.publishedAt.slice(0, 10); grouped.set(date, [...(grouped.get(date) ?? []), article]) }); const earliestAt = sorted[sorted.length - 1].publishedAt; const latestAt = sorted[0].publishedAt; const title = `${code} 相关资讯`; return { id: `code:${encodeURIComponent(code)}`, code, title, count: sorted.length, earliestAt, latestAt, metadata: { code, title, count: sorted.length, earliestAt, latestAt }, articles: sorted, timeline: [...grouped.entries()].map(([date, group]) => ({ date, articles: group })) } }
  private readonly toItem = (row: typeof news.$inferSelect): NewsItem => ({ id: row.id, title: row.title, summary: row.summary, source: row.source, publishedAt: row.publishedAt.toISOString(), codes: row.codes ?? [], ...(row.url ? { url: row.url } : {}) })
  private matches(item: NewsItem, query: Pick<NewsListQuery, 'code' | 'keyword'>) { const q = (query.keyword ?? '').trim().toLowerCase(); const code = query.code?.trim().toLowerCase(); return (!code || item.codes.some((value) => value.toLowerCase() === code)) && (!q || `${item.title}${item.summary}`.toLowerCase().includes(q)) }
}
