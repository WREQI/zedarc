import { Injectable, NotFoundException } from '@nestjs/common'
import { and, desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { tradeAccounts, tradeOrders, tradePositions } from '../database/schema.js'

interface Order { id: string; userId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; status: 'filled' | 'cancelled'; createdAt: string }
interface Position { code: string; quantity: number; available: number; averagePrice: number }
type TradeInput = { code: string; side?: 'buy' | 'sell'; quantity: number; price: number }

@Injectable()
export class TradeService {
  private readonly orders = new Map<string, Order[]>()
  private readonly positions = new Map<string, Position[]>()
  private readonly balances = new Map<string, number>()

  constructor(private readonly database: DatabaseService) {}

  async account(userId: string) {
    if (this.database.db) {
      try {
        const [account] = await this.database.db.select().from(tradeAccounts).where(eq(tradeAccounts.userId, userId)).limit(1)
        const positions = await this.dbPositions(userId)
        const cash = account ? Number(account.cash) : 1000000
        return { userId, cash, marketValue: positions.reduce((sum, item) => sum + item.quantity * item.averagePrice, 0), availableCash: cash }
      } catch { /* fall through to the in-memory store */ }
    }
    const positions = this.positions.get(userId) ?? []
    const cash = this.balances.get(userId) ?? 1000000
    return { userId, cash, marketValue: positions.reduce((sum, item) => sum + item.quantity * item.averagePrice, 0), availableCash: cash }
  }

  async listOrders(userId: string) {
    if (this.database.db) {
      try {
        const rows = await this.database.db.select().from(tradeOrders).where(eq(tradeOrders.userId, userId)).orderBy(desc(tradeOrders.createdAt))
        return rows.map((row): Order => ({ ...row, side: row.side as Order['side'], status: row.status as Order['status'], quantity: Number(row.quantity), price: Number(row.price), fee: Number(row.fee ?? 0), createdAt: row.createdAt.toISOString() }))
      } catch { /* fall through to the in-memory store */ }
    }
    return this.orders.get(userId) ?? []
  }

  async stats(userId: string) {
    const orders = await this.listOrders(userId)
    const filled = orders.filter((order) => order.status === 'filled')
    const fees = filled.reduce((sum, order) => sum + order.fee, 0)
    const buys = filled.filter((order) => order.side === 'buy').reduce((sum, order) => sum + order.price * order.quantity, 0)
    const sells = filled.filter((order) => order.side === 'sell').reduce((sum, order) => sum + order.price * order.quantity, 0)
    return { orderCount: filled.length, buyAmount: buys, sellAmount: sells, fees, realizedPnL: sells - buys - fees }
  }

  async listPositions(userId: string) {
    if (this.database.db) {
      try { return await this.dbPositions(userId) } catch { /* fall through to the in-memory store */ }
    }
    return this.positions.get(userId) ?? []
  }

  async place(userId: string, input: TradeInput) {
    const quantity = Number(input.quantity); const price = Number(input.price); const side = input.side ?? 'buy'; const code = input.code?.trim().toUpperCase()
    if (!code || !Number.isFinite(quantity) || quantity <= 0 || quantity % 100 !== 0 || !Number.isFinite(price) || price <= 0) throw new Error('代码、价格或数量无效（数量须为100的整数倍）')
    if (!isTradingTime(new Date())) throw new Error('当前不在A股交易时间（工作日 09:30-11:30、13:00-15:00）')
    if (this.database.db) {
      try { return await this.placeInDatabase(userId, { code, side, quantity, price }) } catch (error) {
        if (error instanceof Error && (error.message === '可用资金不足' || error.message === '可用持仓不足')) throw error
        // Database connectivity is optional for the local demo fallback.
      }
    }
    return this.placeInMemory(userId, { code, side, quantity, price })
  }

  async cancel(userId: string, id: string) {
    if (this.database.db) {
      try {
        const [order] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
        if (!order) throw new NotFoundException('订单不存在')
        if (order.status !== 'filled') await this.database.db.update(tradeOrders).set({ status: 'cancelled' }).where(eq(tradeOrders.id, id))
        return { ...order, side: order.side as Order['side'], status: order.status as Order['status'], quantity: Number(order.quantity), price: Number(order.price), fee: Number(order.fee ?? 0), createdAt: order.createdAt.toISOString() }
      } catch (error) { if (error instanceof NotFoundException) throw error /* fallback below */ }
    }
    const order = (this.orders.get(userId) ?? []).find((item) => item.id === id)
    if (!order) throw new NotFoundException('订单不存在')
    if (order.status !== 'filled') order.status = 'cancelled'
    return order
  }

  private async dbPositions(userId: string): Promise<Position[]> {
    const rows = await this.database.db!.select().from(tradePositions).where(eq(tradePositions.userId, userId))
    return rows.map((row) => ({ code: row.code, quantity: row.quantity, available: row.available, averagePrice: Number(row.averagePrice) }))
  }

  private async placeInDatabase(userId: string, input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number }): Promise<Order> {
    const db = this.database.db!
    const [account] = await db.select().from(tradeAccounts).where(eq(tradeAccounts.userId, userId)).limit(1)
    const cash = account ? Number(account.cash) : 1000000
    const fee = calculateFee(input.side, input.quantity * input.price)
    const [position] = await db.select().from(tradePositions).where(and(eq(tradePositions.userId, userId), eq(tradePositions.code, input.code))).limit(1)
    if (input.side === 'buy' && cash < input.quantity * input.price + fee) throw new Error('可用资金不足')
    if (input.side === 'sell' && (!position || position.available < input.quantity)) throw new Error('可用持仓不足')
    const nextCash = input.side === 'buy' ? cash - input.quantity * input.price - fee : cash + input.quantity * input.price - fee
    await db.insert(tradeAccounts).values({ userId, cash: String(nextCash) }).onConflictDoUpdate({ target: tradeAccounts.userId, set: { cash: String(nextCash), updatedAt: new Date() } })
    if (input.side === 'buy') {
      const nextQuantity = (position?.quantity ?? 0) + input.quantity
      const nextAverage = ((position?.averagePrice ? Number(position.averagePrice) * (position.quantity) : 0) + input.price * input.quantity) / nextQuantity
      await db.insert(tradePositions).values({ userId, code: input.code, quantity: nextQuantity, available: (position?.available ?? 0) + input.quantity, averagePrice: String(nextAverage), updatedAt: new Date() }).onConflictDoUpdate({ target: [tradePositions.userId, tradePositions.code], set: { quantity: nextQuantity, available: (position?.available ?? 0) + input.quantity, averagePrice: String(nextAverage), updatedAt: new Date() } })
    } else if (position) {
      await db.update(tradePositions).set({ quantity: position.quantity - input.quantity, available: position.available - input.quantity, updatedAt: new Date() }).where(and(eq(tradePositions.userId, userId), eq(tradePositions.code, input.code)))
    }
    const [row] = await db.insert(tradeOrders).values({ userId, code: input.code, side: input.side, quantity: input.quantity, price: String(input.price), fee: String(fee), status: 'filled' }).returning()
    return { ...row, side: row.side as Order['side'], status: row.status as Order['status'], quantity: Number(row.quantity), price: Number(row.price), fee: Number(row.fee ?? 0), createdAt: row.createdAt.toISOString() }
  }

  private placeInMemory(userId: string, input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number }): Order {
    const cash = this.balances.get(userId) ?? 1000000; const list = this.positions.get(userId) ?? []; const position = list.find((item) => item.code === input.code); const fee = calculateFee(input.side, input.quantity * input.price)
    if (input.side === 'buy' && cash < input.quantity * input.price + fee) throw new Error('可用资金不足')
    if (input.side === 'sell' && (!position || position.available < input.quantity)) throw new Error('可用持仓不足')
    this.balances.set(userId, input.side === 'buy' ? cash - input.quantity * input.price - fee : cash + input.quantity * input.price - fee)
    if (input.side === 'buy') { if (position) { position.averagePrice = (position.averagePrice * position.quantity + input.price * input.quantity) / (position.quantity + input.quantity); position.quantity += input.quantity; position.available += input.quantity } else list.push({ code: input.code, quantity: input.quantity, available: input.quantity, averagePrice: input.price }); this.positions.set(userId, list) }
    if (input.side === 'sell' && position) { position.quantity -= input.quantity; position.available -= input.quantity }
    const order: Order = { id: crypto.randomUUID(), userId, ...input, fee, status: 'filled', createdAt: new Date().toISOString() }; const orderList = this.orders.get(userId) ?? []; orderList.unshift(order); this.orders.set(userId, orderList); return order
  }
}

export function calculateFee(side: 'buy' | 'sell', amount: number) { return Number(Math.max(5, amount * 0.0003 + (side === 'sell' ? amount * 0.001 : 0)).toFixed(2)) }
export function isTradingTime(date: Date) { if (process.env.ALLOW_OUT_OF_SESSION === 'true') return true; const day = date.getDay(); if (day === 0 || day === 6) return false; const minutes = date.getHours() * 60 + date.getMinutes(); return (minutes >= 570 && minutes <= 690) || (minutes >= 780 && minutes <= 900) }
