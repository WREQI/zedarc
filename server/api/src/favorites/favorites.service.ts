import { Injectable, NotFoundException } from '@nestjs/common'
import { and, asc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { favorites } from '../database/schema.js'

export interface Favorite { id: string; code: string; note?: string; createdAt: string }
@Injectable()
export class FavoritesService {
  private readonly items = new Map<string, Favorite[]>()
  constructor(private readonly database: DatabaseService) {}
  async list(userId: string) {
    if (this.database.db) return (await this.database.db.select().from(favorites).where(eq(favorites.userId, userId)).orderBy(asc(favorites.createdAt))).map(this.toFavorite)
    this.requireDemoMode(); return this.items.get(userId) ?? []
  }
  async upsert(userId: string, input: { code: string; note?: string }) {
    const code = input.code.trim().toUpperCase(); if (!code) throw new NotFoundException('股票代码不能为空')
    if (this.database.db) { const [row] = await this.database.db.insert(favorites).values({ userId, code, note: input.note }).onConflictDoUpdate({ target: [favorites.userId, favorites.code], set: { ...(input.note === undefined ? {} : { note: input.note }) } }).returning(); return this.toFavorite(row) }
    this.requireDemoMode(); const list = this.items.get(userId) ?? []; const old = list.find((item) => item.code === code); if (old) { old.note = input.note ?? old.note; return old }; const item = { id: crypto.randomUUID(), code, note: input.note, createdAt: new Date().toISOString() }; list.push(item); this.items.set(userId, list); return item
  }
  async update(userId: string, id: string, note?: string) {
    if (this.database.db) { const [row] = await this.database.db.update(favorites).set({ note }).where(and(eq(favorites.userId, userId), eq(favorites.id, id))).returning(); if (!row) throw new NotFoundException('收藏不存在'); return this.toFavorite(row) }
    this.requireDemoMode(); const item = this.find(userId, id); item.note = note; return item
  }
  async remove(userId: string, id: string) {
    if (this.database.db) { const result = await this.database.db.delete(favorites).where(and(eq(favorites.userId, userId), eq(favorites.id, id))).returning({ id: favorites.id }); if (!result.length) throw new NotFoundException('收藏不存在'); return { success: true } }
    this.requireDemoMode(); const list = this.items.get(userId) ?? []; const index = list.findIndex((item) => item.id === id || item.code === id.toUpperCase()); if (index < 0) throw new NotFoundException('收藏不存在'); list.splice(index, 1); return { success: true }
  }
  private toFavorite = (row: typeof favorites.$inferSelect): Favorite => ({ id: row.id, code: row.code, note: row.note ?? undefined, createdAt: row.createdAt.toISOString() })
  private requireDemoMode() { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new Error('数据库不可用，收藏暂时无法使用') }
  private find(userId: string, id: string) { const item = (this.items.get(userId) ?? []).find((value) => value.id === id); if (!item) throw new NotFoundException('收藏不存在'); return item }
}
