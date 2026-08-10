import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import { and, desc, eq, isNull } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { notifications } from '../database/schema.js'

@Injectable()
export class NotificationsService implements OnModuleInit, OnModuleDestroy {
  private readonly memory = new Map<string, Array<{ id: string; userId: string; type: string; title: string; content: string; readAt: string | null; createdAt: string }>>()
  private readonly redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  constructor(private readonly database: DatabaseService) {}
  async onModuleInit() { try { await this.redis.connect(); await this.redis.pSubscribe('notification:*', (message) => { try { const event = JSON.parse(message) as { userId: string; type: string; title: string; content: string }; void this.add(event.userId, { type: event.type, title: event.title, content: event.content }) } catch { /* ignore malformed worker event */ } }) } catch { /* Redis is optional for local/demo API startup. */ } }
  async onModuleDestroy() { if (this.redis.isOpen) await this.redis.quit() }
  async list(userId: string, unreadOnly = false) {
    if (this.database.db) try { const query = this.database.db.select().from(notifications).where(unreadOnly ? and(eq(notifications.userId, userId), isNull(notifications.readAt)) : eq(notifications.userId, userId)).orderBy(desc(notifications.createdAt)); return (await query).map((row) => ({ ...row, createdAt: row.createdAt.toISOString(), readAt: row.readAt?.toISOString() ?? null })) } catch { /* fallback */ }
    return (this.memory.get(userId) ?? []).filter((row) => !unreadOnly || !row.readAt)
  }
  async unreadCount(userId: string) { return (await this.list(userId, true)).length }
  async markRead(userId: string, id?: string) {
    if (this.database.db) try { await this.database.db.update(notifications).set({ readAt: new Date() }).where(id ? and(eq(notifications.userId, userId), eq(notifications.id, id)) : eq(notifications.userId, userId)); return { updated: true } } catch { /* fallback */ }
    const rows = this.memory.get(userId) ?? []; rows.filter((row) => !id || row.id === id).forEach((row) => { row.readAt = new Date().toISOString() }); return { updated: true }
  }
  async add(userId: string, input: { type: string; title: string; content: string }) {
    if (this.database.db) try { const [row] = await this.database.db.insert(notifications).values({ userId, ...input }).returning(); return { ...row, createdAt: row.createdAt.toISOString(), readAt: null } } catch { /* fallback */ }
    const row = { id: crypto.randomUUID(), userId, ...input, readAt: null, createdAt: new Date().toISOString() }; this.memory.set(userId, [row, ...(this.memory.get(userId) ?? [])]); return row
  }
}
