import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import type { KlineBar, NormalizedQuote } from '@zedarc/shared'

export interface MarketIndex { code: string; name: string; value: number; change: number; changePercent: number; timestamp: number }
export interface MarketRank { code: string; name: string; price: number; changePercent: number; volume: number; amount: number }
export interface Sector { code: string; name: string; changePercent: number; leadingStock?: string; leadingChangePercent?: number }
export interface OrderBook { code: string; timestamp: number; bids: [number, number][]; asks: [number, number][] }

const fallback: NormalizedQuote[] = [
  { code: '600519', name: '贵州茅台', price: 1684, prevClose: 1618, change: 66, changePercent: 4.08, volume: 197000000, amount: 1970000000, timestamp: Date.now(), source: 'mock' },
  { code: '000001', name: '平安银行', price: 12.86, prevClose: 13.02, change: -0.16, changePercent: -1.23, volume: 86000000, amount: 1100000000, timestamp: Date.now(), source: 'mock' },
]
const fallbackIndices: MarketIndex[] = [
  { code: '000001', name: '上证指数', value: 3126.45, change: 18.2, changePercent: 0.59, timestamp: Date.now() },
  { code: '399001', name: '深证成指', value: 9654.12, change: 42.1, changePercent: 0.44, timestamp: Date.now() },
  { code: '399006', name: '创业板指', value: 1876.23, change: -6.3, changePercent: -0.34, timestamp: Date.now() },
]

@Injectable()
export class MarketService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379' })
  private redisAvailable = false
  private lastSuccessfulProvider = 'mock'
  private lastSuccessAt = 0

  async onModuleInit() { try { await this.redis.connect(); this.redisAvailable = true } catch { /* Redis is optional for local/demo API startup. */ } }
  async onModuleDestroy() { if (this.redis.isOpen) await this.redis.quit() }

  async getQuotes(codes: string[]) {
    const requested = codes.length ? codes : fallback.map((item) => item.code)
    const values = await this.readMany<NormalizedQuote>(requested.map((code) => `quote:${code}`))
    if (values.length) { this.markSuccess(values[0].source); return values }
    return fallback.filter((item) => requested.includes(item.code))
  }
  async getQuote(code: string) { return (await this.getQuotes([code]))[0] ?? null }
  async getKline(code: string, period = 'daily'): Promise<KlineBar[]> { return (await this.read<KlineBar[]>(`kline:${period}:${code}`)) ?? [] }
  async getIntraday(code: string) { return (await this.read<unknown[]>(`intraday:${code}`)) ?? [] }
  async getOrderBook(code: string): Promise<OrderBook> {
    const quote = await this.getQuote(code); const price = quote?.price ?? 0
    return (await this.read<OrderBook>(`orderbook:${code}`)) ?? { code, timestamp: Date.now(), bids: price ? [[price - 0.01, 100], [price - 0.02, 200]] : [], asks: price ? [[price + 0.01, 100], [price + 0.02, 200]] : [] }
  }
  async getIndices(): Promise<MarketIndex[]> { return (await this.read<MarketIndex[]>('market:indices')) ?? fallbackIndices }
  async getRankings(type = 'gainers', limit = 20): Promise<MarketRank[]> {
    const cachedQuotes = await this.read<NormalizedQuote[]>('market:quotes')
    const values = cachedQuotes ?? await this.readMany<NormalizedQuote>(codesForRanking())
    const quotes = values.length ? values : await this.getQuotes([])
    return [...quotes].sort((a, b) => type === 'losers' ? a.changePercent - b.changePercent : b.changePercent - a.changePercent).slice(0, Math.max(1, Math.min(limit, 100))).map(({ code, name, price, changePercent, volume, amount }) => ({ code, name, price, changePercent, volume, amount }))
  }
  async getSectors(): Promise<Sector[]> { return (await this.read<Sector[]>('market:sectors')) ?? [] }
  async getEtfs(limit = 20) { return (await this.read<MarketRank[]>('market:etfs'))?.slice(0, Math.max(1, Math.min(limit, 100))) ?? [] }
  async search(keyword: string) {
    const query = keyword.trim().toLowerCase()
    if (!query) return []
    const cached = await this.read<NormalizedQuote[]>(`market:search:${query}`)
    return (cached ?? fallback).filter((item) => item.code.toLowerCase().includes(query) || item.name.toLowerCase().includes(query))
  }
  async status() {
    const provider = await this.read<{ provider: string; ok: boolean; lastSuccess: number; checkedAt: number; error?: string }>('market:provider:status')
    return { redis: this.redisAvailable && this.redis.isOpen, provider: provider?.provider ?? this.lastSuccessfulProvider, providerOk: provider?.ok ?? this.lastSuccessfulProvider !== 'mock', lastSuccess: provider?.lastSuccess ?? (this.lastSuccessAt || null), checkedAt: provider?.checkedAt ?? null, timestamp: Date.now(), source: provider ? 'provider-cache' : 'mock' }
  }
  private markSuccess(source: NormalizedQuote['source']) { this.lastSuccessfulProvider = source; this.lastSuccessAt = Date.now() }
  private async read<T>(key: string): Promise<T | null> { if (!this.redisAvailable || !this.redis.isOpen) return null; try { const value = await this.redis.get(key); return value ? JSON.parse(value) as T : null } catch { return null } }
  private async readMany<T>(keys: string[]) { const values: T[] = []; for (const key of keys) { const value = await this.read<T>(key); if (value) values.push(value) } return values }
}
function codesForRanking() { return fallback.map((item) => `quote:${item.code}`) }
