import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import type { StockDividendRecord } from '@zedarc/shared'

export const calendarTypes = ['financial-report', 'dividend', 'ipo-subscription', 'macro'] as const
export type CalendarEventType = typeof calendarTypes[number]
export interface CalendarQuery { date?: string; startDate?: string; endDate?: string; type?: CalendarEventType; limit?: number }
export interface CalendarAvailability { available: boolean; source: string; reason?: string }
export interface CalendarEvent {
  id: string
  date: string
  type: CalendarEventType
  title: string
  detail: string
  source: string
  stock?: { code: string; name: string }
  metadata: { reportDate?: string | null; disclosureDate?: string | null; equityRecordDate?: string | null; exDividendDate?: string | null; payDate?: string | null; dividendPretax?: number | null; dividendDesc?: string | null }
}

const unavailableReasons: Record<CalendarEventType, string> = {
  'financial-report': '当前 provider 未提供可验证的财报披露日历',
  dividend: '当前 provider 未返回分红除权记录',
  'ipo-subscription': '当前 provider 未提供可验证的新股申购日历',
  macro: '当前 provider 未提供可验证的宏观事件日历',
}

@Injectable()
export class CalendarService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  private redisAvailable = false

  async onModuleInit() {
    try { await this.redis.connect(); this.redisAvailable = true } catch { /* Redis is optional; an unavailable provider is an explicit empty state. */ }
  }

  async onModuleDestroy() { if (this.redis.isOpen) await this.redis.quit() }

  async list(query: CalendarQuery = {}) {
    const availability: Record<CalendarEventType, CalendarAvailability> = Object.fromEntries(calendarTypes.map((calendarType) => [calendarType, { available: false, source: 'stock-sdk', reason: unavailableReasons[calendarType] }])) as Record<CalendarEventType, CalendarAvailability>
    const empty = (reason: string) => ({ items: [] as CalendarEvent[], total: 0, available: false, source: 'stock-sdk', reason, availability })
    if (!this.redisAvailable || !this.redis.isOpen) return empty('当前行情 provider 未连接，暂无可用日历数据')

    const events: CalendarEvent[] = []
    try {
      if (!query.type || query.type === 'dividend') for await (const key of this.redis.scanIterator({ MATCH: 'stock-detail:dividends:*', COUNT: 100 })) {
        const raw = await this.redis.get(key)
        if (!raw) continue
        let records: unknown
        try { records = JSON.parse(raw) } catch { continue }
        if (!Array.isArray(records)) continue
        for (const record of records) {
          const event = this.toDividendEvent(record)
          if (event && this.matches(event, query)) events.push(event)
        }
      }
    } catch (error) {
      return empty(`读取行情 provider 日历数据失败：${error instanceof Error ? error.message : '未知错误'}`)
    }

    const unique = [...new Map(events.map((event) => [event.id, event])).values()]
      .sort((left, right) => `${left.date}${left.id}`.localeCompare(`${right.date}${right.id}`))
      .slice(0, query.limit ?? 500)
    if (unique.length) availability.dividend = { available: true, source: unique[0].source }
    const selectedAvailability = query.type ? availability[query.type] : undefined
    return { items: unique, total: unique.length, available: unique.length > 0, source: unique[0]?.source ?? 'stock-sdk', availability, ...(unique.length ? {} : { reason: selectedAvailability?.reason ?? '现有 provider 未提供符合筛选条件的结构化事件' }) }
  }

  private toDividendEvent(value: unknown): CalendarEvent | null {
    if (!value || typeof value !== 'object') return null
    const row = value as Partial<StockDividendRecord>
    if (typeof row.code !== 'string' || typeof row.name !== 'string' || row.source !== 'stock-sdk') return null
    const date = [row.exDividendDate, row.equityRecordDate, row.payDate, row.disclosureDate].find((item): item is string => Boolean(item && /^\d{4}-\d{2}-\d{2}/.test(item)))
    if (!date) return null
    const dateOnly = date.slice(0, 10)
    return {
      id: `dividend:${row.code}:${dateOnly}:${row.dividendDesc ?? ''}`,
      date: dateOnly,
      type: 'dividend',
      title: `${row.name} 分红除权`,
      detail: row.dividendDesc || '分红除权安排',
      source: row.source,
      stock: { code: row.code, name: row.name },
      metadata: { reportDate: row.reportDate, disclosureDate: row.disclosureDate, equityRecordDate: row.equityRecordDate, exDividendDate: row.exDividendDate, payDate: row.payDate, dividendPretax: row.dividendPretax, dividendDesc: row.dividendDesc },
    }
  }

  private matches(event: CalendarEvent, query: CalendarQuery) {
    if (query.type && event.type !== query.type) return false
    if (query.date && event.date !== query.date) return false
    if (query.startDate && event.date < query.startDate) return false
    if (query.endDate && event.date > query.endDate) return false
    return true
  }
}
