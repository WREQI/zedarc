import { apiFetch } from '@/services/api-client'

export interface ProviderStatus { redis: boolean; provider: string; providerOk: boolean; lastSuccess: number | null; checkedAt: number | null; timestamp: number; source: string }
export function getProviderStatus() { return apiFetch<ProviderStatus>('/api/market/status') }
