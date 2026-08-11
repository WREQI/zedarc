import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { and, asc, eq, isNull } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { watchlistGroups, watchlistItems } from '../database/schema.js'

export interface WatchlistItem { code: string; name?: string; groupId?: string; sortOrder: number; createdAt: string }
export interface WatchlistGroup { id: string; name: string; sortOrder: number; itemCount: number; upCount: number; downCount: number; createdAt: string }

type MemoryGroup = WatchlistGroup

@Injectable()
export class WatchlistService {
  private readonly memory = new Map<string, WatchlistItem[]>()
  private readonly groups = new Map<string, MemoryGroup[]>()
  constructor(private readonly database: DatabaseService) {}

  async list(userId: string, groupId?: string) {
    if (this.database.db) {
      const condition = groupId ? and(eq(watchlistItems.userId, userId), eq(watchlistItems.groupId, groupId)) : and(eq(watchlistItems.userId, userId), isNull(watchlistItems.groupId))
      const rows = await this.database.db.select().from(watchlistItems).where(condition).orderBy(asc(watchlistItems.sortOrder), asc(watchlistItems.createdAt))
      return rows.map(this.toItem)
    }
    return (this.memory.get(userId) ?? []).filter((item) => (groupId ? item.groupId === groupId : !item.groupId)).sort((a, b) => a.sortOrder - b.sortOrder)
  }

  async upsert(userId: string, input: { code: string; name?: string; sortOrder?: number; groupId?: string | null }) {
    const code = this.normalize(input.code)
    await this.ensureGroup(userId, input.groupId)
    if (this.database.db) {
      const [row] = await this.database.db.insert(watchlistItems).values({ userId, code, name: input.name, groupId: input.groupId ?? null, sortOrder: input.sortOrder ?? 0 }).onConflictDoUpdate({ target: [watchlistItems.userId, watchlistItems.code], set: { ...(input.name === undefined ? {} : { name: input.name }), ...(input.groupId === undefined ? {} : { groupId: input.groupId }), ...(input.sortOrder === undefined ? {} : { sortOrder: input.sortOrder }) } }).returning()
      return this.toItem(row)
    }
    const list = this.memory.get(userId) ?? []; const found = list.find((item) => item.code === code)
    if (found) { if (input.name !== undefined) found.name = input.name; if (input.groupId !== undefined) found.groupId = input.groupId ?? undefined; if (input.sortOrder !== undefined) found.sortOrder = input.sortOrder; return found }
    const item = { code, name: input.name, groupId: input.groupId ?? undefined, sortOrder: input.sortOrder ?? list.length, createdAt: new Date().toISOString() }; list.push(item); this.memory.set(userId, list); return item
  }

  async update(userId: string, code: string, input: { name?: string; sortOrder?: number; groupId?: string | null }) {
    const normalized = this.normalize(code); await this.ensureGroup(userId, input.groupId)
    if (this.database.db) {
      const [row] = await this.database.db.update(watchlistItems).set({ ...input, ...(input.groupId !== undefined ? { groupId: input.groupId } : {}) }).where(and(eq(watchlistItems.userId, userId), eq(watchlistItems.code, normalized))).returning()
      if (!row) throw new NotFoundException('自选股不存在')
      return this.toItem(row)
    }
    const item = this.find(userId, normalized); Object.assign(item, input, input.groupId !== undefined ? { groupId: input.groupId ?? undefined } : {}); return item
  }

  async remove(userId: string, code: string, groupId?: string) {
    const normalized = this.normalize(code)
    if (this.database.db) {
      const condition = groupId ? and(eq(watchlistItems.userId, userId), eq(watchlistItems.code, normalized), eq(watchlistItems.groupId, groupId)) : and(eq(watchlistItems.userId, userId), eq(watchlistItems.code, normalized), isNull(watchlistItems.groupId))
      const result = await this.database.db.delete(watchlistItems).where(condition).returning({ code: watchlistItems.code })
      if (!result.length) throw new NotFoundException('自选股不存在')
      return { success: true }
    }
    const list = this.memory.get(userId) ?? []; const index = list.findIndex((item) => item.code === normalized && (groupId ? item.groupId === groupId : !item.groupId)); if (index < 0) throw new NotFoundException('自选股不存在'); list.splice(index, 1); return { success: true }
  }

  async removeBatch(userId: string, codes: string[], groupId?: string) { for (const code of codes) await this.remove(userId, code, groupId); return { success: true, count: codes.length } }

  async move(userId: string, code: string, groupId: string | null, sortOrder?: number) { return this.update(userId, code, { groupId, ...(sortOrder === undefined ? {} : { sortOrder }) }) }

  async reorder(userId: string, groupId: string | null, codes: string[]) {
    const items = await this.list(userId, groupId ?? undefined); const known = new Set(items.map((item) => item.code));
    for (const [index, code] of codes.map((value) => this.normalize(value)).filter((value) => known.has(value)).entries()) await this.update(userId, code, { sortOrder: index, groupId })
    return this.list(userId, groupId ?? undefined)
  }

  async listGroups(userId: string) {
    if (this.database.db) {
      const groups = await this.database.db.select().from(watchlistGroups).where(eq(watchlistGroups.userId, userId)).orderBy(asc(watchlistGroups.sortOrder), asc(watchlistGroups.createdAt))
      const items = await this.database.db.select({ groupId: watchlistItems.groupId }).from(watchlistItems).where(eq(watchlistItems.userId, userId))
      return groups.map((group) => ({ ...this.toGroup(group), itemCount: items.filter((item) => item.groupId === group.id).length }))
    }
    return this.groups.get(userId) ?? []
  }

  async createGroup(userId: string, name: string) {
    const normalized = this.groupName(name)
    if (this.database.db) { try { const [row] = await this.database.db.insert(watchlistGroups).values({ userId, name: normalized, sortOrder: (await this.listGroups(userId)).length }).returning(); return { ...this.toGroup(row), itemCount: 0 } } catch { throw new ConflictException('分组名称已存在') } }
    const list = this.groups.get(userId) ?? []; if (list.some((group) => group.name === normalized)) throw new ConflictException('分组名称已存在'); const group = { id: crypto.randomUUID(), name: normalized, sortOrder: list.length, itemCount: 0, upCount: 0, downCount: 0, createdAt: new Date().toISOString() }; list.push(group); this.groups.set(userId, list); return group
  }

  async renameGroup(userId: string, id: string, name: string) { const normalized = this.groupName(name); await this.getGroup(userId, id); if (this.database.db) { try { const [row] = await this.database.db.update(watchlistGroups).set({ name: normalized }).where(and(eq(watchlistGroups.userId, userId), eq(watchlistGroups.id, id))).returning(); return { ...this.toGroup(row), itemCount: (await this.list(userId, id)).length } } catch { throw new ConflictException('分组名称已存在') } } const group = (this.groups.get(userId) ?? []).find((value) => value.id === id)!; group.name = normalized; return group }

  async deleteGroup(userId: string, id: string) { await this.getGroup(userId, id); if (this.database.db) { await this.database.db.update(watchlistItems).set({ groupId: null }).where(and(eq(watchlistItems.userId, userId), eq(watchlistItems.groupId, id))); await this.database.db.delete(watchlistGroups).where(and(eq(watchlistGroups.userId, userId), eq(watchlistGroups.id, id))); return { success: true } } const group = this.groups.get(userId) ?? []; this.groups.set(userId, group.filter((value) => value.id !== id)); for (const item of this.memory.get(userId) ?? []) if (item.groupId === id) item.groupId = undefined; return { success: true } }
  async reorderGroups(userId: string, ids: string[]) { const existing = await this.listGroups(userId); const known = new Map(existing.map((group) => [group.id, group])); const ordered = ids.map((id) => known.get(id)).filter((group): group is WatchlistGroup => Boolean(group)); if (this.database.db) { for (const [sortOrder, group] of ordered.entries()) await this.database.db.update(watchlistGroups).set({ sortOrder }).where(and(eq(watchlistGroups.userId, userId), eq(watchlistGroups.id, group.id))) } else { this.groups.set(userId, ordered.map((group, sortOrder) => ({ ...group, sortOrder }))) }; return this.listGroups(userId) }

  private async ensureGroup(userId: string, groupId?: string | null) { if (groupId !== undefined && groupId !== null) await this.getGroup(userId, groupId) }
  private async getGroup(userId: string, id: string) { const group = this.database.db ? (await this.database.db.select().from(watchlistGroups).where(and(eq(watchlistGroups.userId, userId), eq(watchlistGroups.id, id))))[0] : (this.groups.get(userId) ?? []).find((value) => value.id === id); if (!group) throw new NotFoundException('分组不存在'); return group }
  private normalize(code: string) { const value = code.trim().toUpperCase(); if (!value) throw new BadRequestException('股票代码不能为空'); return value }
  private groupName(name: string) { const value = name.trim(); if (!value || value.length > 64) throw new BadRequestException('分组名称长度需为 1-64 个字符'); return value }
  private find(userId: string, code: string) { const item = (this.memory.get(userId) ?? []).find((value) => value.code === code); if (!item) throw new NotFoundException('自选股不存在'); return item }
  private toItem = (row: typeof watchlistItems.$inferSelect): WatchlistItem => ({ code: row.code, name: row.name ?? undefined, groupId: row.groupId ?? undefined, sortOrder: row.sortOrder, createdAt: row.createdAt.toISOString() })
  private toGroup = (row: typeof watchlistGroups.$inferSelect): WatchlistGroup => ({ id: row.id, name: row.name, sortOrder: row.sortOrder, itemCount: 0, upCount: 0, downCount: 0, createdAt: row.createdAt.toISOString() })
}
