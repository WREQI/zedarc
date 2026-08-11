import type { DemoAccount } from '@/services/trade'

export interface DemoAccountSummary { id: string; name: string; createdAt: string }
const summariesKey = 'zedarc-demo-accounts'
const defaultId = 'default'
function readSummaries(): DemoAccountSummary[] { try { const value = JSON.parse(localStorage.getItem(summariesKey) ?? '[]'); return Array.isArray(value) ? value : [] } catch { return [] } }
function writeSummaries(value: DemoAccountSummary[]) { localStorage.setItem(summariesKey, JSON.stringify(value)) }
export function listDemoAccounts() {
  const current = readSummaries()
  if (current.length) return current
  const initial = { id: defaultId, name: '主模拟账户', createdAt: new Date().toISOString() }
  writeSummaries([initial]); return [initial]
}
export function createDemoAccount(name: string) { const summaries = listDemoAccounts(); const account = { id: `demo-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: name.trim() || `模拟账户 ${summaries.length + 1}`, createdAt: new Date().toISOString() }; writeSummaries([...summaries, account]); return account }
export function accountStorageKey(id: string) { return `zedarc-demo-trade:${id}` }
export function loadDemoAccountById(id: string): Partial<DemoAccount> | null { try { const raw = localStorage.getItem(accountStorageKey(id)); return raw ? JSON.parse(raw) as Partial<DemoAccount> : null } catch { return null } }
export function saveDemoAccountById(id: string, account: DemoAccount) { localStorage.setItem(accountStorageKey(id), JSON.stringify(account)) }
export function removeDemoAccount(id: string) { if (id === defaultId) return; localStorage.removeItem(accountStorageKey(id)); writeSummaries(readSummaries().filter((item) => item.id !== id)) }
