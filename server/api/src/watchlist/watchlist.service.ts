import { NotFoundException, Injectable } from '@nestjs/common'
import { asc, and, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { watchlistItems } from '../database/schema.js'

export interface WatchlistItem { code: string; name?: string; sortOrder: number; createdAt: string }

@Injectable()
export class WatchlistService {
  private readonly memory = new Map<string, WatchlistItem[]>()
  constructor(private readonly database: DatabaseService) {}

  async list(userId: string) {
    if (this.database.db) {
      const rows = await this.database.db.select().from(watchlistItems).where(eq(watchlistItems.userId, userId)).orderBy(asc(watchlistItems.sortOrder), asc(watchlistItems.createdAt))
      return rows.map((row) => ({ code: row.code, name: row.name ?? undefined, sortOrder: row.sortOrder, createdAt: row.createdAt.toISOString() }))
    }
    return this.memory.get(userId) ?? []
  }

  async upsert(userId: string, input: { code: string; name?: string; sortOrder?: number }) {
    const code = input.code.trim().toUpperCase()
    if (!code) throw new NotFoundException('股票代码不能为空')
    if (this.database.db) {
      const [row] = await this.database.db.insert(watchlistItems).values({ userId, code, name: input.name, sortOrder: input.sortOrder ?? 0 }).onConflictDoUpdate({ target: [watchlistItems.userId, watchlistItems.code], set: { ...(input.name === undefined ? {} : { name: input.name }), ...(input.sortOrder === undefined ? {} : { sortOrder: input.sortOrder }) } }).returning()
      return { code: row.code, name: row.name ?? undefined, sortOrder: row.sortOrder, createdAt: row.createdAt.toISOString() }
    }
    const list = this.memory.get(userId) ?? []; const found = list.find((item) => item.code === code)
    if (found) { found.name = input.name ?? found.name; found.sortOrder = input.sortOrder ?? found.sortOrder; return found }
    const item = { code, name: input.name, sortOrder: input.sortOrder ?? list.length, createdAt: new Date().toISOString() }; list.push(item); this.memory.set(userId, list); return item
  }

  async update(userId: string, code: string, input: { name?: string; sortOrder?: number }) {
    const normalized = code.trim().toUpperCase()
    if (this.database.db) {
      const [row] = await this.database.db.update(watchlistItems).set(input).where(and(eq(watchlistItems.userId, userId), eq(watchlistItems.code, normalized))).returning()
      if (!row) throw new NotFoundException('自选股不存在')
      return { code: row.code, name: row.name ?? undefined, sortOrder: row.sortOrder, createdAt: row.createdAt.toISOString() }
    }
    const item = this.find(userId, normalized); Object.assign(item, input); return item
  }

  async remove(userId: string, code: string) {
    const normalized = code.trim().toUpperCase()
    if (this.database.db) {
      const result = await this.database.db.delete(watchlistItems).where(and(eq(watchlistItems.userId, userId), eq(watchlistItems.code, normalized))).returning({ code: watchlistItems.code })
      if (!result.length) throw new NotFoundException('自选股不存在')
      return { success: true }
    }
    const list = this.memory.get(userId) ?? []; const index = list.findIndex((item) => item.code === normalized); if (index < 0) throw new NotFoundException('自选股不存在'); list.splice(index, 1); return { success: true }
  }
  private find(userId: string, code: string) { const item = (this.memory.get(userId) ?? []).find((value) => value.code === code); if (!item) throw new NotFoundException('自选股不存在'); return item }
}
