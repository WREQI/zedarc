import { Injectable } from '@nestjs/common'
import { eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { userSettings } from '../database/schema.js'

export type Settings = Record<string, boolean | string | number>

@Injectable()
export class SettingsService {
  private readonly memory = new Map<string, Settings>()
  constructor(private readonly database: DatabaseService) {}

  async get(userId: string): Promise<Settings> {
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select().from(userSettings).where(eq(userSettings.userId, userId)).limit(1)
        if (row) return (row.settings ?? {}) as Settings
      } catch { /* use the local store when the database is unavailable */ }
    }
    return this.memory.get(userId) ?? {}
  }

  async update(userId: string, patch: Settings) {
    const current = { ...(await this.get(userId)), ...patch }
    this.memory.set(userId, current)
    if (this.database.db) {
      try {
        const [row] = await this.database.db.insert(userSettings).values({ userId, settings: current }).onConflictDoUpdate({ target: userSettings.userId, set: { settings: current, updatedAt: new Date() } }).returning()
        return row.settings as Settings
      } catch { /* preserve the in-memory result for degraded local deployments */ }
    }
    return current
  }
}
