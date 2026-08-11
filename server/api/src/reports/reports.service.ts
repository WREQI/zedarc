import { Injectable, NotFoundException } from '@nestjs/common'
import { desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { reports } from '../database/schema.js'

export interface Report { id: string; title: string; institution: string; rating: string; targetPrice?: number; publishedAt: string; code: string; summary: string }
export interface ReportsListQuery { code?: string; keyword?: string; institution?: string; rating?: string; page?: number; pageSize?: number }

@Injectable()
export class ReportsService {
  private readonly items: Report[] = [{ id: 'report-1', title: '行业与公司研究摘要', institution: 'Zedarc Research', rating: '增持', targetPrice: 1800, publishedAt: new Date().toISOString(), code: '600519', summary: '示例研报摘要，实际数据由接入的数据源更新。' }]

  constructor(private readonly database: DatabaseService) {}

  async list(query: ReportsListQuery = {}) {
    const page = query.page ?? 1
    const pageSize = query.pageSize ?? 20
    let filtered: Report[]
    if (this.database.db) {
      try {
        const rows = await this.database.db.select().from(reports).orderBy(desc(reports.publishedAt), desc(reports.id))
        filtered = rows.map(this.toReport).filter((item) => this.matches(item, query))
      } catch (error) {
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
        filtered = this.items.filter((item) => this.matches(item, query))
      }
    } else filtered = this.items.filter((item) => this.matches(item, query))
    const start = (page - 1) * pageSize
    return { items: filtered.slice(start, start + pageSize), total: filtered.length, page, pageSize, totalPages: Math.ceil(filtered.length / pageSize), hasNext: start + pageSize < filtered.length }
  }

  async find(id: string) {
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select().from(reports).where(eq(reports.id, id)).limit(1)
        if (row) return this.toReport(row)
      } catch (error) {
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    const item = this.items.find((value) => value.id === id)
    if (!item) throw new NotFoundException('研报不存在')
    return item
  }

  private readonly toReport = (row: typeof reports.$inferSelect): Report => ({ ...row, targetPrice: row.targetPrice == null ? undefined : Number(row.targetPrice), publishedAt: row.publishedAt.toISOString() })
  private matches(item: Report, query: ReportsListQuery) {
    const keyword = query.keyword?.trim().toLowerCase()
    const code = query.code?.trim().toLowerCase()
    const institution = query.institution?.trim().toLowerCase()
    const rating = query.rating?.trim().toLowerCase()
    return (!code || item.code.toLowerCase() === code) && (!institution || item.institution.toLowerCase() === institution) && (!rating || item.rating.toLowerCase() === rating) && (!keyword || `${item.title}${item.summary}`.toLowerCase().includes(keyword))
  }
}
