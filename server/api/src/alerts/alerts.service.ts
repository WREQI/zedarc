import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { and, desc, eq } from 'drizzle-orm'
import { createClient, type RedisClientType } from 'redis'
import { DatabaseService } from '../database/database.service.js'
import { priceAlerts } from '../database/schema.js'

export type AlertInput = { code: string; targetPrice: number; direction: 'above' | 'below'; repeat?: boolean }

@Injectable()
export class AlertsService {
  private readonly redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  private readonly memory = new Map<string, Array<{ id: string; userId: string; code: string; targetPrice: number; direction: 'above' | 'below'; repeat: boolean; enabled: boolean; createdAt: string }>>()
  constructor(private readonly database: DatabaseService) { void this.redis.connect().catch(() => undefined) }
  async list(userId: string) {
    if (this.database.db) try { return (await this.database.db.select().from(priceAlerts).where(eq(priceAlerts.userId, userId)).orderBy(desc(priceAlerts.createdAt))).map(this.toDto) } catch { /* local fallback */ }
    return this.memory.get(userId) ?? []
  }
  async create(userId: string, input: AlertInput) {
    this.validate(input)
    const code = input.code.trim().toUpperCase()
    if (this.database.db) try {
      const [row] = await this.database.db.insert(priceAlerts).values({ userId, code, targetPrice: String(input.targetPrice), direction: input.direction, repeat: input.repeat ?? false }).returning()
      await this.syncWorker()
      return this.toDto(row)
    } catch { /* local fallback */ }
    const row = { id: crypto.randomUUID(), userId, code, targetPrice: input.targetPrice, direction: input.direction, repeat: input.repeat ?? false, enabled: true, createdAt: new Date().toISOString() }
    this.memory.set(userId, [row, ...(this.memory.get(userId) ?? [])]); await this.syncWorker(); return row
  }
  async update(userId: string, id: string, enabled: boolean) {
    if (this.database.db) try {
      const [row] = await this.database.db.update(priceAlerts).set({ enabled }).where(and(eq(priceAlerts.id, id), eq(priceAlerts.userId, userId))).returning()
      if (!row) throw new NotFoundException('提醒不存在'); await this.syncWorker(); return this.toDto(row)
    } catch (error) { if (error instanceof NotFoundException) throw error }
    const row = (this.memory.get(userId) ?? []).find((item) => item.id === id); if (!row) throw new NotFoundException('提醒不存在'); row.enabled = enabled; await this.syncWorker(); return row
  }
  async remove(userId: string, id: string) {
    if (this.database.db) try { await this.database.db.delete(priceAlerts).where(and(eq(priceAlerts.id, id), eq(priceAlerts.userId, userId))); await this.syncWorker(); return { deleted: true } } catch { /* fallback */ }
    this.memory.set(userId, (this.memory.get(userId) ?? []).filter((item) => item.id !== id)); await this.syncWorker(); return { deleted: true }
  }
  private validate(input: AlertInput) { if (!input.code?.trim() || !Number.isFinite(Number(input.targetPrice)) || Number(input.targetPrice) <= 0 || !['above', 'below'].includes(input.direction)) throw new BadRequestException('提醒参数无效') }
  private toDto(row: typeof priceAlerts.$inferSelect) { return { ...row, targetPrice: Number(row.targetPrice), createdAt: row.createdAt.toISOString() } }
  private async syncWorker() { if (!this.redis.isOpen) return; const all = this.database.db ? await this.database.db.select().from(priceAlerts).where(eq(priceAlerts.enabled, true)).catch(() => []) : [...this.memory.values()].flat().filter((item) => item.enabled); await this.redis.set('alerts:active', JSON.stringify(all.map((row) => ({ id: row.id, userId: row.userId, code: row.code, targetPrice: Number(row.targetPrice), direction: row.direction, repeat: row.repeat ?? false })))) }
}
