import { Injectable, NotFoundException } from '@nestjs/common'
import type { TradeOrderEventStatus, TradeOrderRealtimeEvent } from '@zedarc/shared'
import { and, desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { tradeAccounts, tradeCashFlows, tradeOrders, tradePositions, tradeTransactions } from '../database/schema.js'
import { RealtimeService } from '../realtime/realtime.service.js'

interface Order { id: string; userId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; status: 'filled' | 'cancelled'; requestId?: string | null; createdAt: string }
interface Position { code: string; quantity: number; available: number; averagePrice: number }
interface Transaction { id: string; userId: string; orderId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; amount: number; createdAt: string }
interface CashFlow { id: string; orderId: string; transactionId: string; type: 'trade' | 'fee'; amount: number; createdAt: string }
type TradeInput = { code: string; side?: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }

@Injectable()
export class TradeService {
  private readonly orders = new Map<string, Order[]>()
  private readonly positions = new Map<string, Position[]>()
  private readonly balances = new Map<string, number>()

  constructor(private readonly database: DatabaseService, private readonly realtime: RealtimeService) {}

  async account(userId: string) {
    if (this.database.db) {
      try {
        const [account] = await this.database.db.select().from(tradeAccounts).where(eq(tradeAccounts.userId, userId)).limit(1)
        const positions = await this.dbPositions(userId)
        const cash = account ? Number(account.cash) : 1000000
        return { userId, cash, marketValue: positions.reduce((sum, item) => sum + item.quantity * item.averagePrice, 0), availableCash: cash }
      } catch (error) {
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
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
      } catch (error) {
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    return this.orders.get(userId) ?? []
  }

  async funds(userId: string) {
    const account = await this.account(userId)
    if (!this.database.db) return { ...account, flows: [] as CashFlow[] }
    const rows = await this.database.db.select().from(tradeCashFlows).where(eq(tradeCashFlows.userId, userId)).orderBy(desc(tradeCashFlows.createdAt))
    return { ...account, flows: rows.map((row): CashFlow => ({ id: row.id, orderId: row.orderId, transactionId: row.transactionId, type: row.type as CashFlow['type'], amount: Number(row.amount), createdAt: row.createdAt.toISOString() })) }
  }

  async listTransactions(userId: string): Promise<Transaction[]> {
    if (this.database.db) {
      const rows = await this.database.db.select().from(tradeTransactions).where(eq(tradeTransactions.userId, userId)).orderBy(desc(tradeTransactions.createdAt))
      return rows.map((row): Transaction => ({ id: row.id, userId: row.userId, orderId: row.orderId, code: row.code, side: row.side as Transaction['side'], quantity: row.quantity, price: Number(row.price), fee: Number(row.fee), amount: Number(row.amount), createdAt: row.createdAt.toISOString() }))
    }
    return []
  }

  async getOrder(userId: string, id: string) {
    if (this.database.db) {
      const [row] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
      if (row) return this.toOrder(row)
    } else {
      const row = (this.orders.get(userId) ?? []).find((item) => item.id === id)
      if (row) return row
    }
    throw new NotFoundException('订单不存在')
  }

  async getPosition(userId: string, code: string) {
    const normalized = code.trim().toUpperCase()
    if (this.database.db) {
      const [row] = await this.database.db.select().from(tradePositions).where(and(eq(tradePositions.userId, userId), eq(tradePositions.code, normalized))).limit(1)
      if (row) return { code: row.code, quantity: row.quantity, available: row.available, averagePrice: Number(row.averagePrice) }
    } else {
      const row = (this.positions.get(userId) ?? []).find((item) => item.code === normalized)
      if (row) return row
    }
    throw new NotFoundException('持仓不存在')
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
      try { return await this.dbPositions(userId) } catch (error) { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error }
    }
    return this.positions.get(userId) ?? []
  }

  async place(userId: string, input: TradeInput) {
    const quantity = Number(input.quantity); const price = Number(input.price); const side = input.side ?? 'buy'; const code = input.code?.trim().toUpperCase()
    if (!code || !Number.isFinite(quantity) || quantity <= 0 || quantity % 100 !== 0 || !Number.isFinite(price) || price <= 0) throw new Error('代码、价格或数量无效（数量须为100的整数倍）')
    if (!isTradingTime(new Date())) throw new Error('当前不在A股交易时间（工作日 09:30-11:30、13:00-15:00）')
    if (this.database.db) {
      try {
        const order = await this.placeInDatabase(userId, { code, side, quantity, price, requestId: input.requestId })
        this.publishOrderEvents(order)
        return order
      } catch (error) {
        if (error instanceof Error && (error.message === '可用资金不足' || error.message === '可用持仓不足')) throw error
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    const order = this.placeInMemory(userId, { code, side, quantity, price, requestId: input.requestId })
    this.publishOrderEvents(order)
    return order
  }

  async cancel(userId: string, id: string) {
    if (this.database.db) {
      try {
        const [order] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
        if (!order) throw new NotFoundException('订单不存在')
        if (order.status === 'filled') return this.toOrder(order)
        await this.database.db.update(tradeOrders).set({ status: 'cancelled' }).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId)))
        const [cancelled] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
        const result = this.toOrder(cancelled ?? order)
        this.publishOrderEvent(result, 'cancelled')
        return result
      } catch (error) {
        if (error instanceof NotFoundException) throw error
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new Error('数据库不可用，订单暂时无法撤销')
    const order = (this.orders.get(userId) ?? []).find((item) => item.id === id)
    if (!order) throw new NotFoundException('订单不存在')
    if (order.status !== 'filled') {
      order.status = 'cancelled'
      this.publishOrderEvent(order, 'cancelled')
    }
    return order
  }

  private publishOrderEvents(order: Order) {
    this.publishOrderEvent(order, 'placed')
    if (order.status === 'filled') this.publishOrderEvent(order, 'filled')
  }

  private publishOrderEvent(order: Order, status: TradeOrderEventStatus) {
    const event: TradeOrderRealtimeEvent = { eventId: `${order.id}:${status}`, type: `trade.order.${status}`, channel: 'trade.orders', userId: order.userId, orderId: order.id, requestId: order.requestId, status, order, timestamp: Date.now() }
    void this.realtime.publishTradeEvent(event)
  }

  private async dbPositions(userId: string): Promise<Position[]> {
    const rows = await this.database.db!.select().from(tradePositions).where(eq(tradePositions.userId, userId))
    return rows.map((row) => ({ code: row.code, quantity: row.quantity, available: row.available, averagePrice: Number(row.averagePrice) }))
  }

  private async placeInDatabase(userId: string, input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }): Promise<Order> {
    const db = this.database.db!
    return db.transaction(async (tx) => {
      if (input.requestId) {
        const [existing] = await tx.select().from(tradeOrders).where(and(eq(tradeOrders.userId, userId), eq(tradeOrders.requestId, input.requestId))).limit(1)
        if (existing) return this.toOrder(existing)
      }
      const [account] = await tx.select().from(tradeAccounts).where(eq(tradeAccounts.userId, userId)).limit(1)
      const cash = account ? Number(account.cash) : 1000000
      const fee = calculateFee(input.side, input.quantity * input.price)
      const [position] = await tx.select().from(tradePositions).where(and(eq(tradePositions.userId, userId), eq(tradePositions.code, input.code))).limit(1)
      if (input.side === 'buy' && cash < input.quantity * input.price + fee) throw new Error('可用资金不足')
      if (input.side === 'sell' && (!position || position.available < input.quantity)) throw new Error('可用持仓不足')
      const nextCash = input.side === 'buy' ? cash - input.quantity * input.price - fee : cash + input.quantity * input.price - fee
      await tx.insert(tradeAccounts).values({ userId, cash: String(nextCash) }).onConflictDoUpdate({ target: tradeAccounts.userId, set: { cash: String(nextCash), updatedAt: new Date() } })
      if (input.side === 'buy') {
        const nextQuantity = (position?.quantity ?? 0) + input.quantity
        const nextAverage = ((position?.averagePrice ? Number(position.averagePrice) * position.quantity : 0) + input.price * input.quantity) / nextQuantity
        await tx.insert(tradePositions).values({ userId, code: input.code, quantity: nextQuantity, available: (position?.available ?? 0) + input.quantity, averagePrice: String(nextAverage), updatedAt: new Date() }).onConflictDoUpdate({ target: [tradePositions.userId, tradePositions.code], set: { quantity: nextQuantity, available: (position?.available ?? 0) + input.quantity, averagePrice: String(nextAverage), updatedAt: new Date() } })
      } else if (position) {
        await tx.update(tradePositions).set({ quantity: position.quantity - input.quantity, available: position.available - input.quantity, updatedAt: new Date() }).where(and(eq(tradePositions.userId, userId), eq(tradePositions.code, input.code)))
      }
      const [row] = await tx.insert(tradeOrders).values({ userId, code: input.code, side: input.side, quantity: input.quantity, price: String(input.price), fee: String(fee), status: 'filled', requestId: input.requestId }).returning()
      const [transaction] = await tx.insert(tradeTransactions).values({ userId, orderId: row.id, code: input.code, side: input.side, quantity: input.quantity, price: String(input.price), fee: String(fee), amount: String(input.quantity * input.price) }).returning()
      const tradeAmount = input.side === 'buy' ? -(input.quantity * input.price) : input.quantity * input.price
      await tx.insert(tradeCashFlows).values([
        { userId, orderId: row.id, transactionId: transaction.id, type: 'trade', amount: String(tradeAmount) },
        { userId, orderId: row.id, transactionId: transaction.id, type: 'fee', amount: String(-fee) },
      ])
      return this.toOrder(row)
    })
  }

  private toOrder(row: typeof tradeOrders.$inferSelect): Order { return { ...row, side: row.side as Order['side'], status: row.status as Order['status'], quantity: Number(row.quantity), price: Number(row.price), fee: Number(row.fee ?? 0), createdAt: row.createdAt.toISOString() } }

  private placeInMemory(userId: string, input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }): Order {
    if (input.requestId) {
      const existing = (this.orders.get(userId) ?? []).find((item) => item.requestId === input.requestId)
      if (existing) return existing
    }
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
