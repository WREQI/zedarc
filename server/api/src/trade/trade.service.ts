import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import type { TradeCashFlowRealtimeEvent, TradeExecutionRealtimeEvent, TradeOrderEventStatus, TradeOrderRealtimeEvent, TradeOrderStatusEvent, TradeRealtimeEvent } from '@zedarc/shared'
import { and, desc, eq, inArray, ne, sql } from 'drizzle-orm'
import { DatabaseService } from '../database/database.service.js'
import { MarketService } from '../market/market.service.js'
import { tradeAccounts, tradeCashFlows, tradeExecutions, tradeLedgerEntries, tradeOrderEvents, tradeOrders, tradePositions, tradeTransactions } from '../database/schema.js'
import { RealtimeService } from '../realtime/realtime.service.js'

interface Order { id: string; userId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; status: 'pending' | 'reported' | 'partial' | 'filled' | 'cancelled' | 'rejected'; statusReason?: string | null; statusUpdatedAt?: string; requestId?: string | null; createdAt: string; timeline?: TradeOrderStatusEvent[] }
interface Position { code: string; quantity: number; available: number; averagePrice: number }
interface Transaction { id: string; userId: string; orderId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; amount: number; createdAt: string }
interface CashFlow { id: string; orderId: string; transactionId: string; type: 'trade' | 'fee'; amount: number; createdAt: string }
type TradeInput = { code: string; side?: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }
type ExecutionInput = { quantity: number; price?: number; requestId: string }
const TERMINAL_STATUSES = new Set<Order['status']>(['filled', 'cancelled', 'rejected'])
const ALLOWED_TRANSITIONS: Record<Order['status'], Order['status'][]> = {
  pending: ['reported', 'cancelled', 'rejected'], reported: ['partial', 'filled', 'cancelled', 'rejected'], partial: ['partial', 'filled', 'cancelled'], filled: [], cancelled: [], rejected: [],
}
export interface TradePreview { code: string; side: 'buy' | 'sell'; quantity: number; price: number; amount: number; fee: number; total: number; availableCash: number; availablePosition: number; maxBuyQuantity: number; maxSellQuantity: number; tradingSession: { open: boolean; label: string; nextOpen?: string }; limitUp: number | null; limitDown: number | null; valid: boolean; errors: string[]; warnings: string[] }

@Injectable()
export class TradeService {
  private readonly orders = new Map<string, Order[]>()
  private readonly positions = new Map<string, Position[]>()
  private readonly balances = new Map<string, number>()
  private readonly transactions = new Map<string, Transaction[]>()
  private readonly cashFlows = new Map<string, CashFlow[]>()
  private readonly executionRequests = new Map<string, string>()

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
    if (!this.database.db) return { ...account, flows: this.cashFlows.get(userId) ?? [] }
    const rows = await this.database.db.select().from(tradeCashFlows).where(eq(tradeCashFlows.userId, userId)).orderBy(desc(tradeCashFlows.createdAt))
    return { ...account, flows: rows.map((row): CashFlow => ({ id: row.id, orderId: row.orderId, transactionId: row.transactionId, type: row.type as CashFlow['type'], amount: Number(row.amount), createdAt: row.createdAt.toISOString() })) }
  }

  async listTransactions(userId: string): Promise<Transaction[]> {
    if (this.database.db) {
      const rows = await this.database.db.select().from(tradeTransactions).where(eq(tradeTransactions.userId, userId)).orderBy(desc(tradeTransactions.createdAt))
      return rows.map((row): Transaction => ({ id: row.id, userId: row.userId, orderId: row.orderId, code: row.code, side: row.side as Transaction['side'], quantity: row.quantity, price: Number(row.price), fee: Number(row.fee), amount: Number(row.amount), createdAt: row.createdAt.toISOString() }))
    }
    return this.transactions.get(userId) ?? []
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
    if (!this.database.db) {
      const order = (this.orders.get(userId) ?? []).find((item) => item.id === orderId)
      return order?.timeline ?? []
    }
    const rows = await this.database.db.select().from(tradeOrderEvents).where(and(eq(tradeOrderEvents.userId, userId), eq(tradeOrderEvents.orderId, orderId))).orderBy(tradeOrderEvents.createdAt)
    return rows.map((row) => ({ eventId: row.id, orderId: row.orderId, status: row.status as TradeOrderEventStatus, reason: row.reason, timestamp: row.createdAt.getTime() }))
  }

  async getOrderLedger(userId: string, orderId: string) {
    const order = await this.getOrder(userId, orderId)
    const [transactions, flows] = await Promise.all([
      (await this.listTransactions(userId)).filter((item) => item.orderId === orderId),
      (await this.funds(userId)).flows.filter((item) => item.orderId === orderId),
    ])
    return { order, timeline: await this.getOrderTimeline(userId, orderId), transactions, cashFlows: flows, balanced: isLedgerBalanced(transactions, flows) }
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
    const transactions = await this.listTransactions(userId)
    const fees = transactions.reduce((sum, transaction) => sum + transaction.fee, 0)
    const buys = transactions.filter((transaction) => transaction.side === 'buy').reduce((sum, transaction) => sum + transaction.amount, 0)
    const sells = transactions.filter((transaction) => transaction.side === 'sell').reduce((sum, transaction) => sum + transaction.amount, 0)
    return { orderCount: new Set(transactions.map((transaction) => transaction.orderId)).size, buyAmount: buys, sellAmount: sells, fees, realizedPnL: sells - buys - fees }
  }

  async listPositions(userId: string) {
    if (this.database.db) {
      try { return await this.dbPositions(userId) } catch (error) { if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error }
    }
    return this.positions.get(userId) ?? []
  }

  async preview(userId: string, input: Omit<TradeInput, 'requestId'>): Promise<TradePreview> {
    const quantity = Number(input.quantity); const price = Number(input.price); const side = input.side ?? 'buy'; const code = input.code?.trim().toUpperCase() ?? ''
    const account = await this.account(userId)
    const position = (await this.listPositions(userId)).find((item) => item.code === code)
    const quote = code ? await this.market.getQuote(code) : null
    const amount = Number.isFinite(quantity) && Number.isFinite(price) ? quantity * price : 0
    const fee = Number.isFinite(amount) && amount > 0 ? calculateFee(side, amount) : 0
    const maxBuyQuantity = maxAffordableQuantity(account.availableCash, price)
    const maxSellQuantity = position?.available ?? 0
    const errors: string[] = []
    try { await this.validateOrderInput({ code, side, quantity, price }) } catch (error) { errors.push(error instanceof BadRequestException ? error.message : '当前行情或交易服务不可用') }
    if (side === 'buy' && Number.isFinite(amount) && amount + fee > account.availableCash) errors.push('可用资金不足（含手续费）')
    if (side === 'sell' && (!position || quantity > maxSellQuantity)) errors.push('可用持仓不足')
    const session = tradingSession(new Date())
    return { code, side, quantity, price, amount, fee, total: side === 'buy' ? amount + fee : amount - fee, availableCash: account.availableCash, availablePosition: maxSellQuantity, maxBuyQuantity, maxSellQuantity, tradingSession: session, limitUp: quote?.limitUp ?? null, limitDown: quote?.limitDown ?? null, valid: errors.length === 0, errors, warnings: ['模拟交易仅用于流程演示，不会产生真实券商委托。', ...(quote?.limitUp == null || quote?.limitDown == null ? ['当前行情未提供涨跌停价，最终委托仍以服务端风控为准。'] : [])] }
  }

  async place(userId: string, input: TradeInput) {
    const quantity = Number(input.quantity); const price = Number(input.price); const side = input.side ?? 'buy'; const code = input.code?.trim().toUpperCase()
    if (input.requestId) {
      const existing = await this.findByRequestId(userId, input.requestId)
      if (existing) return existing
    }
    await this.validateOrderInput({ code, side, quantity, price })
    if (this.database.db) {
      try {
        const order = await this.placeInDatabase(userId, { code, side, quantity, price, requestId: input.requestId })
        await this.publishTradeEvents(order)
        return order
      } catch (error) {
        if (error instanceof BadRequestException || (error instanceof Error && (error.message === '可用资金不足' || error.message === '可用持仓不足'))) throw error
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    const order = this.placeInMemory(userId, { code, side, quantity, price, requestId: input.requestId })
    await this.publishTradeEvents(order)
    return order
  }

  async cancel(userId: string, id: string) {
    if (this.database.db) {
      try {
        const [order] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
        if (!order) throw new NotFoundException('订单不存在')
        if (!canTransition(order.status as Order['status'], 'cancelled')) throw new BadRequestException(`订单状态 ${order.status} 不允许撤单`)
        const statusUpdatedAt = new Date()
        await this.database.db.update(tradeOrders).set({ status: 'cancelled', statusUpdatedAt }).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId)))
        await this.database.db.insert(tradeOrderEvents).values({ userId, orderId: id, status: 'cancelled', createdAt: statusUpdatedAt })
        const [cancelled] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.id, id), eq(tradeOrders.userId, userId))).limit(1)
        const result = { ...this.toOrder(cancelled ?? order), timeline: await this.getOrderTimeline(userId, id) }
        await this.publishOrderEvent(result, 'cancelled')
        return result
      } catch (error) {
        if (error instanceof NotFoundException) throw error
        if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw error
      }
    }
    if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new Error('数据库不可用，订单暂时无法撤销')
    const order = (this.orders.get(userId) ?? []).find((item) => item.id === id)
    if (!order) throw new NotFoundException('订单不存在')
    if (canTransition(order.status, 'cancelled')) {
      order.status = 'cancelled'
      order.statusUpdatedAt = new Date().toISOString()
      order.timeline = [...(order.timeline ?? []), { eventId: `trade.order:${order.id}:cancelled`, orderId: order.id, status: 'cancelled', timestamp: Date.now() }]
      void this.publishOrderEvent(order, 'cancelled')
    } else if (order.status !== 'cancelled') throw new BadRequestException(`订单状态 ${order.status} 不允许撤单`)
    return order
  }

  private async publishTradeEvents(order: Order) {
    await this.publishOrderEvent(order, 'reported')
    if (order.status === 'filled') {
      await this.publishOrderEvent(order, 'filled')
      const transaction = (await this.listTransactions(order.userId)).find((item) => item.orderId === order.id)
      if (transaction) {
        const execution: TradeExecutionRealtimeEvent = { eventId: `trade.execution:${transaction.id}`, type: 'trade.execution', channel: 'trade.executions', userId: order.userId, orderId: order.id, requestId: order.requestId, transaction, timestamp: Date.now() }
        await this.realtime.publishTradeEvent(execution)
        const flows = (await this.funds(order.userId)).flows.filter((item) => item.orderId === order.id)
        for (const flow of flows) {
          const event: TradeCashFlowRealtimeEvent = { eventId: `trade.cash-flow:${flow.id}`, type: 'trade.cash-flow', channel: 'trade.cash-flows', userId: order.userId, orderId: order.id, requestId: order.requestId, flow: { ...flow, userId: order.userId }, timestamp: Date.now() }
          await this.realtime.publishTradeEvent(event)
        }
      }
    }
  }

  private async publishOrderEvent(order: Order, status: TradeOrderEventStatus) {
    const event: TradeOrderRealtimeEvent = { eventId: `trade.order:${order.id}:${status}`, type: `trade.order.${status}`, channel: 'trade.orders', userId: order.userId, orderId: order.id, requestId: order.requestId, status, reason: order.statusReason, order, timestamp: Date.now() }
    await this.realtime.publishTradeEvent(event)
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
      const openOrders = await tx.select().from(tradeOrders).where(and(eq(tradeOrders.userId, userId), ne(tradeOrders.status, 'filled'), ne(tradeOrders.status, 'cancelled'), ne(tradeOrders.status, 'rejected')))
      const reservedCash = openOrders.filter((item) => item.side === 'buy').reduce((sum, item) => sum + Number(item.quantity) * Number(item.price) + Number(item.fee), 0)
      const reservedPosition = openOrders.filter((item) => item.side === 'sell' && item.code === input.code).reduce((sum, item) => sum + item.quantity, 0)
      if (input.side === 'buy' && cash - reservedCash < input.quantity * input.price + fee) throw new BadRequestException('可用资金不足（含未成交委托占用）')
      if (input.side === 'sell' && (!position || position.available - reservedPosition < input.quantity)) throw new BadRequestException('可用持仓不足（含未成交委托占用）')
      const statusUpdatedAt = new Date()
      const [row] = await tx.insert(tradeOrders).values({ userId, code: input.code, side: input.side, quantity: input.quantity, price: String(input.price), fee: String(fee), status: 'pending', statusUpdatedAt, requestId: input.requestId }).returning()
      await tx.insert(tradeOrderEvents).values({ userId, orderId: row.id, status: 'reported', reason: '委托已接收，等待成交', createdAt: statusUpdatedAt })
      return this.toOrder(row)
    })
  }

  private toOrder(row: typeof tradeOrders.$inferSelect): Order { return { ...row, side: row.side as Order['side'], status: row.status as Order['status'], quantity: Number(row.quantity), price: Number(row.price), fee: Number(row.fee ?? 0), statusUpdatedAt: row.statusUpdatedAt?.toISOString(), createdAt: row.createdAt.toISOString() } }

  private async findByRequestId(userId: string, requestId: string): Promise<Order | null> {
    if (this.database.db) {
      const [row] = await this.database.db.select().from(tradeOrders).where(and(eq(tradeOrders.userId, userId), eq(tradeOrders.requestId, requestId))).limit(1)
      if (row) return this.toOrder(row)
    }
    return (this.orders.get(userId) ?? []).find((item) => item.requestId === requestId) ?? null
  }

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
    const now = new Date().toISOString()
    const order: Order = { id: crypto.randomUUID(), userId, ...input, fee, status: 'filled', createdAt: now }
    const transaction: Transaction = { id: crypto.randomUUID(), userId, orderId: order.id, code: input.code, side: input.side, quantity: input.quantity, price: input.price, fee, amount: input.quantity * input.price, createdAt: now }
    const flows: CashFlow[] = [
      { id: crypto.randomUUID(), orderId: order.id, transactionId: transaction.id, type: 'trade', amount: input.side === 'buy' ? -transaction.amount : transaction.amount, createdAt: now },
      { id: crypto.randomUUID(), orderId: order.id, transactionId: transaction.id, type: 'fee', amount: -fee, createdAt: now },
    ]
    const orderList = this.orders.get(userId) ?? []; orderList.unshift(order); this.orders.set(userId, orderList)
    this.transactions.set(userId, [transaction, ...(this.transactions.get(userId) ?? [])])
    this.cashFlows.set(userId, [...flows, ...(this.cashFlows.get(userId) ?? [])])
    return order
  }
}

function canTransition(from: Order['status'], to: Order['status']) {
  if (from === to) return true
  const transitions: Record<Order['status'], Order['status'][]> = {
    pending: ['reported', 'cancelled', 'rejected'],
    reported: ['partial', 'filled', 'cancelled', 'rejected'],
    partial: ['partial', 'filled', 'cancelled', 'rejected'],
    filled: [],
    cancelled: [],
    rejected: [],
  }
  return transitions[from].includes(to)
}

function isLedgerBalanced(transactions: Transaction[], flows: CashFlow[]) {
  if (!transactions.length) return flows.length === 0
  const transactionIds = new Set(transactions.map((item) => item.id))
  if (flows.some((flow) => !transactionIds.has(flow.transactionId))) return false
  return transactions.every((transaction) => {
    const related = flows.filter((flow) => flow.transactionId === transaction.id)
    const trade = related.find((flow) => flow.type === 'trade')
    const fee = related.find((flow) => flow.type === 'fee')
    const expectedTrade = transaction.side === 'buy' ? -transaction.amount : transaction.amount
    return Boolean(trade && fee && Math.abs(trade.amount - expectedTrade) < 0.005 && Math.abs(fee.amount + transaction.fee) < 0.005)
  })
}

export function calculateFee(side: 'buy' | 'sell', amount: number) { return Number(Math.max(5, amount * 0.0003 + (side === 'sell' ? amount * 0.001 : 0)).toFixed(2)) }
export function isTradingTime(date: Date) { return tradingSession(date).open }

export function tradingSession(date: Date) {
  if (process.env.ALLOW_OUT_OF_SESSION === 'true') return { open: true, label: '交易时段（测试/模拟）' }
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Shanghai', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(date)
  const day = parts.find((part) => part.type === 'weekday')?.value
  const minutes = Number(parts.find((part) => part.type === 'hour')?.value ?? 0) * 60 + Number(parts.find((part) => part.type === 'minute')?.value ?? 0)
  const weekday = day !== 'Sat' && day !== 'Sun'
  const open = weekday && ((minutes >= 570 && minutes <= 690) || (minutes >= 780 && minutes <= 900))
  return { open, label: open ? '交易中 · 09:30-11:30 / 13:00-15:00' : '非交易时段 · 09:30-11:30 / 13:00-15:00', nextOpen: '下一个工作日 09:30' }
}

function maxAffordableQuantity(cash: number, price: number) {
  if (!Number.isFinite(cash) || !Number.isFinite(price) || price <= 0) return 0
  let quantity = Math.floor(cash / price / 100) * 100
  while (quantity >= 100 && quantity * price + calculateFee('buy', quantity * price) > cash) quantity -= 100
  return Math.max(0, quantity)
}
