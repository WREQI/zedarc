import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import type { TradeOrderEventStatus, TradeOrderRealtimeEvent, TradeOrderStatusEvent } from '@zedarc/shared'
import { and, desc, eq } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { MarketService } from '../market/market.service.js'
import { tradeAccounts, tradeCashFlows, tradeOrderEvents, tradeOrders, tradePositions, tradeTransactions } from '../database/schema.js'
import { RealtimeService } from '../realtime/realtime.service.js'

interface Order { id: string; userId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; status: 'pending' | 'reported' | 'partial' | 'filled' | 'cancelled' | 'rejected'; statusReason?: string | null; statusUpdatedAt?: string; requestId?: string | null; createdAt: string; timeline?: TradeOrderStatusEvent[] }
interface Position { code: string; quantity: number; available: number; averagePrice: number }
interface Transaction { id: string; userId: string; orderId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; amount: number; createdAt: string }
interface CashFlow { id: string; orderId: string; transactionId: string; type: 'trade' | 'fee'; amount: number; createdAt: string }
type TradeInput = { code: string; side?: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }

@Injectable()
export class TradeService {
  private readonly orders = new Map<string, Order[]>()
  private readonly positions = new Map<string, Position[]>()
  private readonly balances = new Map<string, number>()

  constructor(private readonly database: DatabaseService, private readonly realtime: RealtimeService, private readonly market: MarketService) {}

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
        return rows.map((row): Order => ({ ...row, side: row.side as Order['side'], status: row.status as Order['status'], quantity: Number(row.quantity), price: Number(row.price), fee: Number(row.fee ?? 0), statusUpdatedAt: row.statusUpdatedAt?.toISOString(), createdAt: row.createdAt.toISOString() }))
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
      if (row) return { ...this.toOrder(row), timeline: await this.getOrderTimeline(userId, row.id) }
    } else {
      const row = (this.orders.get(userId) ?? []).find((item) => item.id === id)
      if (row) return row
    }
    throw new NotFoundException('订单不存在')
  }

  async getOrderTimeline(userId: string, orderId: string): Promise<TradeOrderStatusEvent[]> {
    if (!this.database.db) return []
    const rows = await this.database.db.select().from(tradeOrderEvents).where(and(eq(tradeOrderEvents.userId, userId), eq(tradeOrderEvents.orderId, orderId))).orderBy(tradeOrderEvents.createdAt)
    return rows.map((row) => ({ eventId: row.id, orderId: row.orderId, status: row.status as TradeOrderEventStatus, reason: row.reason, timestamp: row.createdAt.getTime() }))
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
    await this.validateOrderInput({ code, side, quantity, price })
    if (this.database.db) {
      try {
        const order = await this.placeInDatabase(userId, { code, side, quantity, price, requestId: input.requestId })
        this.publishOrderEvents(order)
        return order
      } catch (error) {
        if (error instanceof BadRequestException || (error instanceof Error && (error.message === '可用资金不足' || error.message === '可用持仓不足'))) throw error
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
        const statusUpdatedAt = new Date()
        await this.database.db.update(tradeOrders).set({ status: 'cancelled', statusUpdatedAt }).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId)))
        await this.database.db.insert(tradeOrderEvents).values({ userId, orderId: id, status: 'cancelled', createdAt: statusUpdatedAt })
        const [cancelled] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
        const result = { ...this.toOrder(cancelled ?? order), timeline: await this.getOrderTimeline(userId, id) }
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
    this.publishOrderEvent(order, 'reported')
    if (order.status === 'filled') this.publishOrderEvent(order, 'filled')
  }

  private publishOrderEvent(order: Order, status: TradeOrderEventStatus) {
    const event: TradeOrderRealtimeEvent = { eventId: `${order.id}:${status}`, type: `trade.order.${status}`, channel: 'trade.orders', userId: order.userId, orderId: order.id, requestId: order.requestId, status, reason: order.statusReason, order, timestamp: Date.now() }
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
      if (input.side === 'buy' && cash < input.quantity * input.price + fee) throw new BadRequestException('可用资金不足（含手续费）')
      if (input.side === 'sell' && (!position || position.available < input.quantity)) throw new BadRequestException('可用持仓不足')
      const nextCash = input.side === 'buy' ? cash - input.quantity * input.price - fee : cash + input.quantity * input.price - fee
      await tx.insert(tradeAccounts).values({ userId, cash: String(nextCash) }).onConflictDoUpdate({ target: tradeAccounts.userId, set: { cash: String(nextCash), updatedAt: new Date() } })
      if (input.side === 'buy') {
        const nextQuantity = (position?.quantity ?? 0) + input.quantity
        const nextAverage = ((position?.averagePrice ? Number(position.averagePrice) * position.quantity : 0) + input.price * input.quantity) / nextQuantity
        await tx.insert(tradePositions).values({ userId, code: input.code, quantity: nextQuantity, available: (position?.available ?? 0) + input.quantity, averagePrice: String(nextAverage), updatedAt: new Date() }).onConflictDoUpdate({ target: [tradePositions.userId, tradePositions.code], set: { quantity: nextQuantity, available: (position?.available ?? 0) + input.quantity, averagePrice: String(nextAverage), updatedAt: new Date() } })
      } else if (position) {
        await tx.update(tradePositions).set({ quantity: position.quantity - input.quantity, available: position.available - input.quantity, updatedAt: new Date() }).where(and(eq(tradePositions.userId, userId), eq(tradePositions.code, input.code)))
      }
      const statusUpdatedAt = new Date()
      const [row] = await tx.insert(tradeOrders).values({ userId, code: input.code, side: input.side, quantity: input.quantity, price: String(input.price), fee: String(fee), status: 'filled', statusUpdatedAt, requestId: input.requestId }).returning()
      await tx.insert(tradeOrderEvents).values([
        { userId, orderId: row.id, status: 'reported', createdAt: statusUpdatedAt },
        { userId, orderId: row.id, status: 'filled', createdAt: new Date(statusUpdatedAt.getTime() + 1) },
      ])
      const [transaction] = await tx.insert(tradeTransactions).values({ userId, orderId: row.id, code: input.code, side: input.side, quantity: input.quantity, price: String(input.price), fee: String(fee), amount: String(input.quantity * input.price) }).returning()
      const tradeAmount = input.side === 'buy' ? -(input.quantity * input.price) : input.quantity * input.price
      await tx.insert(tradeCashFlows).values([
        { userId, orderId: row.id, transactionId: transaction.id, type: 'trade', amount: String(tradeAmount) },
        { userId, orderId: row.id, transactionId: transaction.id, type: 'fee', amount: String(-fee) },
      ])
      return this.toOrder(row)
    })
  }

  private toOrder(row: typeof tradeOrders.$inferSelect): Order { return { ...row, side: row.side as Order['side'], status: row.status as Order['status'], quantity: Number(row.quantity), price: Number(row.price), fee: Number(row.fee ?? 0), statusUpdatedAt: row.statusUpdatedAt?.toISOString(), createdAt: row.createdAt.toISOString() } }

  private async validateOrderInput(input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number }) {
    const maxQuantity = Number(process.env.MAX_TRADE_QUANTITY ?? 1000000)
    if (!input.code || !Number.isFinite(input.quantity) || input.quantity <= 0 || input.quantity % 100 !== 0) throw new BadRequestException('代码或数量无效：数量必须是100股的整数倍')
    if (input.quantity > maxQuantity) throw new BadRequestException(`委托数量超过上限：最多${maxQuantity.toLocaleString()}股`)
    if (!Number.isFinite(input.price) || input.price <= 0) throw new BadRequestException('委托价格必须大于0')
    if (!isTradingTime(new Date())) throw new BadRequestException('当前不在A股交易时间（工作日 09:30-11:30、13:00-15:00）')
    const quote = await this.market.getQuote(input.code)
    if (!quote || !Number.isFinite(quote.prevClose) || quote.prevClose <= 0) throw new BadRequestException('暂无该股票有效行情，暂不能交易')
    if (quote.limitUp !== null && input.price > quote.limitUp + 0.000001) throw new BadRequestException(`委托价格超过涨停价 ${quote.limitUp.toFixed(2)} 元`)
    if (quote.limitDown !== null && input.price < quote.limitDown - 0.000001) throw new BadRequestException(`委托价格低于跌停价 ${quote.limitDown.toFixed(2)} 元`)
    if (Math.abs(input.price * 100 - Math.round(input.price * 100)) > 0.000001) throw new BadRequestException('委托价格最小变动单位为0.01元')
  }

  private placeInMemory(userId: string, input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }): Order {
    if (input.requestId) {
      const existing = (this.orders.get(userId) ?? []).find((item) => item.requestId === input.requestId)
      if (existing) return existing
    }
    const cash = this.balances.get(userId) ?? 1000000; const list = this.positions.get(userId) ?? []; const position = list.find((item) => item.code === input.code); const fee = calculateFee(input.side, input.quantity * input.price)
    if (input.side === 'buy' && cash < input.quantity * input.price + fee) throw new BadRequestException('可用资金不足（含手续费）')
    if (input.side === 'sell' && (!position || position.available < input.quantity)) throw new BadRequestException('可用持仓不足')
    this.balances.set(userId, input.side === 'buy' ? cash - input.quantity * input.price - fee : cash + input.quantity * input.price - fee)
    if (input.side === 'buy') { if (position) { position.averagePrice = (position.averagePrice * position.quantity + input.price * input.quantity) / (position.quantity + input.quantity); position.quantity += input.quantity; position.available += input.quantity } else list.push({ code: input.code, quantity: input.quantity, available: input.quantity, averagePrice: input.price }); this.positions.set(userId, list) }
    if (input.side === 'sell' && position) { position.quantity -= input.quantity; position.available -= input.quantity }
    const order: Order = { id: crypto.randomUUID(), userId, ...input, fee, status: 'filled', createdAt: new Date().toISOString() }; const orderList = this.orders.get(userId) ?? []; orderList.unshift(order); this.orders.set(userId, orderList); return order
  }
}

export function calculateFee(side: 'buy' | 'sell', amount: number) { return Number(Math.max(5, amount * 0.0003 + (side === 'sell' ? amount * 0.001 : 0)).toFixed(2)) }
export function isTradingTime(date: Date) { if (process.env.ALLOW_OUT_OF_SESSION === 'true') return true; const day = date.getDay(); if (day === 0 || day === 6) return false; const minutes = date.getHours() * 60 + date.getMinutes(); return (minutes >= 570 && minutes <= 690) || (minutes >= 780 && minutes <= 900) }
