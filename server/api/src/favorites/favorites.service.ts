import { Injectable, NotFoundException } from '@nestjs/common'

export interface Favorite { id: string; code: string; note?: string; createdAt: string }
@Injectable()
export class FavoritesService {
  private readonly items = new Map<string, Favorite[]>()
  list(userId: string) { return this.items.get(userId) ?? [] }
  upsert(userId: string, input: { code: string; note?: string }) { const code = input.code.trim().toUpperCase(); if (!code) throw new NotFoundException('股票代码不能为空'); const list = this.items.get(userId) ?? []; const old = list.find((item) => item.code === code); if (old) { old.note = input.note ?? old.note; return old }; const item = { id: crypto.randomUUID(), code, note: input.note, createdAt: new Date().toISOString() }; list.push(item); this.items.set(userId, list); return item }
  update(userId: string, id: string, note?: string) { const item = this.find(userId, id); item.note = note; return item }
  remove(userId: string, id: string) { const list = this.items.get(userId) ?? []; const index = list.findIndex((item) => item.id === id || item.code === id.toUpperCase()); if (index < 0) throw new NotFoundException('收藏不存在'); list.splice(index, 1); return { success: true } }
  private find(userId: string, id: string) { const item = this.list(userId).find((value) => value.id === id); if (!item) throw new NotFoundException('收藏不存在'); return item }
}
