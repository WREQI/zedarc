import { Injectable, NotFoundException } from '@nestjs/common'
import { desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { reports } from '../database/schema.js'

export interface Report { id: string; title: string; institution: string; rating: string; targetPrice?: number; publishedAt: string; code: string; summary: string }

@Injectable()
export class ReportsService {
  private readonly items: Report[] = [{ id: 'report-1', title: '行业与公司研究摘要', institution: 'Zedarc Research', rating: '增持', targetPrice: 1800, publishedAt: new Date().toISOString(), code: '600519', summary: '示例研报摘要，实际数据由接入的数据源更新。' }]

  constructor(private readonly database: DatabaseService) {}

  async list(code?: string, keyword?: string) {
    if (this.database.db) {
      try {
        const rows = await this.database.db.select().from(reports).orderBy(desc(reports.publishedAt))
        return rows.map(this.toReport).filter((item) => this.matches(item, code, keyword))
      } catch { /* Database is optional in local/demo deployments. */ }
    }
    return this.items.filter((item) => this.matches(item, code, keyword))
  }

  async find(id: string) {
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select().from(reports).where(eq(reports.id, id)).limit(1)
        if (row) return this.toReport(row)
      } catch { /* fall through to the in-memory store */ }
    }
    const item = this.items.find((value) => value.id === id)
    if (!item) throw new NotFoundException('研报不存在')
    return item
  }

  private readonly toReport = (row: typeof reports.$inferSelect): Report => ({ ...row, targetPrice: row.targetPrice == null ? undefined : Number(row.targetPrice), publishedAt: row.publishedAt.toISOString() })
  private matches(item: Report, code?: string, keyword?: string) { const q = (keyword ?? '').toLowerCase(); return (!code || item.code === code) && (!q || item.title.toLowerCase().includes(q)) }
}
