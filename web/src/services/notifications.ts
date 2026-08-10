import { apiFetch } from './api-client'
export interface NotificationItem { id: string; type: string; title: string; content: string; readAt: string | null; createdAt: string }
export function getNotifications(unread = false) { return apiFetch<NotificationItem[]>(`/api/notifications${unread ? '?unread=true' : ''}`) }
export function markNotificationsRead(id?: string) { return apiFetch<{ updated: boolean }>(id ? `/api/notifications/${id}/read` : '/api/notifications/read-all', { method: 'PATCH' }) }
