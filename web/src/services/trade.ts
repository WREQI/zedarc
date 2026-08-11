import type { StockQuote } from '@/services/market-types'
import { getLocalRecord, setLocalRecord, removeLocalRecord } from '@/services/local-db'

export interface DemoHolding extends StockQuote {
  quantity: number
  cost: string
  marketValue: string
}

export interface DemoOrder {
  id?: string
  code?: string
  time: string
  createdAt?: string
  name: string
  side: string
  price: string
  quantity: number
  status: string
  statusReason?: string | null
  timeline?: TradeOrderStatusEvent[]
}

export interface DemoAccount {
  availableCash: number
  holdings: DemoHolding[]
  orders: DemoOrder[]
}

export const demoTradeKey = 'zedarc-demo-trade'

export function loadDemoAccount(): Partial<DemoAccount> | null {
  try {
    const raw = window.localStorage.getItem(demoTradeKey)
    return raw ? JSON.parse(raw) as Partial<DemoAccount> : null
  } catch {
    return null
  }
}

export function saveDemoAccount(account: DemoAccount) {
  window.localStorage.setItem(demoTradeKey, JSON.stringify(account))
}
export async function loadDemoAccountPersistent(): Promise<Partial<DemoAccount> | null> {
  try { const stored = await getLocalRecord<Partial<DemoAccount>>(demoTradeKey); if (stored) return stored; const local = loadDemoAccount(); if (local) await setLocalRecord(demoTradeKey, local); return local } catch { return loadDemoAccount() }
}
export async function saveDemoAccountPersistent(account: DemoAccount) {
  saveDemoAccount(account)
  try { await setLocalRecord(demoTradeKey, account) } catch { /* localStorage remains the fallback */ }
}

export function clearDemoAccount() {
  window.localStorage.removeItem(demoTradeKey)
  void removeLocalRecord(demoTradeKey).catch(() => undefined)
}

export interface TradeAccount { userId: string; cash: number; marketValue: number; availableCash: number }
export interface TradePosition { code: string; quantity: number; available: number; averagePrice: number }
export type TradeOrderStatus = 'pending' | 'reported' | 'partial' | 'filled' | 'cancelled' | 'rejected'

export function tradeStatusText(status?: string) {
  return ({ pending: '待处理', reported: '已报', placed: '已报', partial: '部分成交', filled: '已成', cancelled: '已撤', rejected: '已拒', '待处理': '待处理', '已报': '已报', '部分成交': '部分成交', '已成': '已成', '已撤': '已撤', '已拒': '已拒' } as Record<string, string>)[status ?? ''] ?? status ?? '暂无状态'
}

export function isTradeOrderCancellable(status?: string) {
  return ['pending', 'reported', 'placed', 'partial', '待处理', '已报', '部分成交'].includes(status ?? '')
}

export interface TradeOrderStatusEvent { eventId: string; orderId: string; status: TradeOrderStatus | 'placed'; reason?: string | null; timestamp: number }
export interface TradeOrder { id: string; userId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; status: TradeOrderStatus; statusReason?: string | null; statusUpdatedAt?: string; requestId?: string | null; createdAt: string; timeline?: TradeOrderStatusEvent[] }
export interface TradeTransaction { id: string; userId: string; orderId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; amount: number; createdAt: string }
export interface TradeCashFlow { id: string; orderId: string; transactionId: string; type: 'trade' | 'fee'; amount: number; createdAt: string }
export interface TradeFunds extends TradeAccount { flows: TradeCashFlow[] }
export interface TradeStats { orderCount: number; buyAmount: number; sellAmount: number; fees: number; realizedPnL: number }
export interface TradePreview { code: string; side: 'buy' | 'sell'; quantity: number; price: number; amount: number; fee: number; total: number; availableCash: number; availablePosition: number; maxBuyQuantity: number; maxSellQuantity: number; tradingSession: { open: boolean; label: string; nextOpen?: string }; limitUp: number | null; limitDown: number | null; valid: boolean; errors: string[]; warnings: string[] }

import { apiFetch } from './api-client'

export function getTradeAccount() { return apiFetch<TradeAccount>('/api/trade/account') }
export function getTradeFunds() { return apiFetch<TradeFunds>('/api/trade/funds') }
export function getTradePositions() { return apiFetch<TradePosition[]>('/api/trade/positions') }
export function getTradeOrders() { return apiFetch<TradeOrder[]>('/api/trade/orders') }
export function getTradeOrder(orderId: string) { return apiFetch<TradeOrder>(`/api/trade/orders/${encodeURIComponent(orderId)}`) }
export function getTradeTransactions() { return apiFetch<TradeTransaction[]>('/api/trade/transactions') }
export function getTradePosition(code: string) { return apiFetch<TradePosition>(`/api/trade/positions/${encodeURIComponent(code)}`) }
export function getTradeStats() { return apiFetch<TradeStats>('/api/trade/stats') }
export function previewTrade(input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number }) {
  return apiFetch<TradePreview>('/api/trade/orders/preview', { method: 'POST', body: JSON.stringify(input) })
}
export function placeTrade(input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }) {
  return apiFetch<TradeOrder>('/api/trade/orders', { method: 'POST', body: JSON.stringify(input) })
}
export function cancelTrade(orderId: string) {
  return apiFetch<TradeOrder>(`/api/trade/orders/${encodeURIComponent(orderId)}`, { method: 'DELETE' })
}
