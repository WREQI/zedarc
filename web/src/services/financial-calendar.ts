import { apiFetch } from '@/services/api-client'

export type FinancialCalendarEventType = 'financial-report' | 'dividend' | 'ipo-subscription' | 'macro'
export interface FinancialCalendarEvent {
  id: string
  date: string
  type: FinancialCalendarEventType
  title: string
  detail: string
  source: string
  stock?: { code: string; name: string }
  metadata: { reportDate?: string | null; disclosureDate?: string | null; equityRecordDate?: string | null; exDividendDate?: string | null; payDate?: string | null; dividendPretax?: number | null; dividendDesc?: string | null }
}
export interface FinancialCalendarAvailability { available: boolean; source: string; reason?: string }
export interface FinancialCalendarResult { items: FinancialCalendarEvent[]; total: number; available: boolean; source: string; reason?: string; availability: Record<FinancialCalendarEventType, FinancialCalendarAvailability> }

export function getFinancialCalendar(options: { date?: string; startDate?: string; endDate?: string; type?: FinancialCalendarEventType; limit?: number } = {}) {
  const query = new URLSearchParams()
  Object.entries(options).forEach(([key, value]) => value !== undefined && value !== '' && query.set(key, String(value)))
  const suffix = query.toString() ? `?${query}` : ''
  return apiFetch<FinancialCalendarResult>(`/api/financial-calendar${suffix}`)
}
