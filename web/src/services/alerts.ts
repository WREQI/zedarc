import { apiFetch } from './api-client'
export interface PriceAlert { id: string; code: string; targetPrice: number; direction: 'above' | 'below'; repeat: boolean; enabled: boolean; createdAt: string }
export function getPriceAlerts() { return apiFetch<PriceAlert[]>('/api/alerts') }
export function createPriceAlert(input: Omit<PriceAlert, 'id' | 'enabled' | 'createdAt'>) { return apiFetch<PriceAlert>('/api/alerts', { method: 'POST', body: JSON.stringify(input) }) }
export function setPriceAlertEnabled(id: string, enabled: boolean) { return apiFetch<PriceAlert>(`/api/alerts/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify({ enabled }) }) }
export function deletePriceAlert(id: string) { return apiFetch(`/api/alerts/${encodeURIComponent(id)}`, { method: 'DELETE' }) }
