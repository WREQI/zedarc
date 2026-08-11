import type { StockQuote } from '@/services/market-types'

export interface DemoHolding extends StockQuote {
  quantity: number
  cost: string
  marketValue: string
}

export interface DemoOrder {
  time: string
  name: string
  side: string
  price: string
  quantity: number
  status: string
}

export interface DemoAccount {
  availableCash: number
  holdings: DemoHolding[]
  orders: DemoOrder[]
}

export const demoTradeKey = 'zedarc-demo-trade'

export function loadDemoAccount(): Partial<DemoAccount> | null {
  const raw = window.localStorage.getItem(demoTradeKey)
  return raw ? JSON.parse(raw) as Partial<DemoAccount> : null
}

export function saveDemoAccount(account: DemoAccount) {
  window.localStorage.setItem(demoTradeKey, JSON.stringify(account))
}

export function clearDemoAccount() {
  window.localStorage.removeItem(demoTradeKey)
}

export interface TradeAccount { userId: string; cash: number; marketValue: number; availableCash: number }
export interface TradePosition { code: string; quantity: number; available: number; averagePrice: number }
export type TradeOrderStatus = 'pending' | 'reported' | 'partial' | 'filled' | 'cancelled' | 'rejected'
export interface TradeOrderStatusEvent { eventId: string; orderId: string; status: TradeOrderStatus | 'placed'; reason?: string | null; timestamp: number }
export interface TradeOrder { id: string; userId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; status: TradeOrderStatus; statusReason?: string | null; statusUpdatedAt?: string; requestId?: string | null; createdAt: string; timeline?: TradeOrderStatusEvent[] }
export interface TradeTransaction { id: string; userId: string; orderId: string; code: string; side: 'buy' | 'sell'; quantity: number; price: number; fee: number; amount: number; createdAt: string }
export interface TradeCashFlow { id: string; orderId: string; transactionId: string; type: 'trade' | 'fee'; amount: number; createdAt: string }
export interface TradeFunds extends TradeAccount { flows: TradeCashFlow[] }
export interface TradeStats { orderCount: number; buyAmount: number; sellAmount: number; fees: number; realizedPnL: number }

import { apiFetch } from './api-client'

export function getTradeAccount() { return apiFetch<TradeAccount>('/api/trade/account') }
export function getTradeFunds() { return apiFetch<TradeFunds>('/api/trade/funds') }
export function getTradePositions() { return apiFetch<TradePosition[]>('/api/trade/positions') }
export function getTradeOrders() { return apiFetch<TradeOrder[]>('/api/trade/orders') }
export function getTradeOrder(orderId: string) { return apiFetch<TradeOrder>(`/api/trade/orders/${encodeURIComponent(orderId)}`) }
export function getTradeTransactions() { return apiFetch<TradeTransaction[]>('/api/trade/transactions') }
export function getTradePosition(code: string) { return apiFetch<TradePosition>(`/api/trade/positions/${encodeURIComponent(code)}`) }
export function getTradeStats() { return apiFetch<TradeStats>('/api/trade/stats') }
export function placeTrade(input: { code: string; side: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }) {
  return apiFetch<TradeOrder>('/api/trade/orders', { method: 'POST', body: JSON.stringify(input) })
}
export function cancelTrade(orderId: string) {
  return apiFetch<TradeOrder>(`/api/trade/orders/${encodeURIComponent(orderId)}`, { method: 'DELETE' })
}
