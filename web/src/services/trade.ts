import type { StockQuote } from '@/mock/market'

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
