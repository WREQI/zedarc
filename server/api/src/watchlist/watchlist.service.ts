import { Injectable, NotFoundException } from '@nestjs/common'

export interface WatchlistItem { code: string; name?: string; sortOrder: number; createdAt: string }
@Injectable()
export class WatchlistService {
  private readonly items = new Map<string, WatchlistItem[]>()
  list(userId: string) { return this.items.get(userId) ?? [] }
  upsert(userId: string, input: { code: string; name?: string; sortOrder?: number }) {
    const code = input.code.trim().toUpperCase(); if (!code) throw new NotFoundException('股票代码不能为空')
    const list = this.items.get(userId) ?? []; const found = list.find((item) => item.code === code)
    if (found) { found.name = input.name ?? found.name; found.sortOrder = input.sortOrder ?? found.sortOrder; return found }
    const item = { code, name: input.name, sortOrder: input.sortOrder ?? list.length, createdAt: new Date().toISOString() }; list.push(item); this.items.set(userId, list); return item
  }
  update(userId: string, code: string, input: { name?: string; sortOrder?: number }) {
    const item = this.find(userId, code); Object.assign(item, input); return item
  }
  remove(userId: string, code: string) { const list = this.items.get(userId) ?? []; const index = list.findIndex((item) => item.code === code.toUpperCase()); if (index < 0) throw new NotFoundException('自选股不存在'); list.splice(index, 1); return { success: true } }
  private find(userId: string, code: string) { const item = this.list(userId).find((value) => value.code === code.toUpperCase()); if (!item) throw new NotFoundException('自选股不存在'); return item }
}
