import { getAccessToken } from './api-client'
import type { TradeOrderEventStatus, TradeOrderRealtimeEvent } from '@zedarc/shared'

export type TradeSocketStatus = 'connecting' | 'connected' | 'reconnecting' | 'closed' | 'error'
export type TradeSocketOptions = {
  orderId?: string
  onEvent: (event: TradeOrderRealtimeEvent) => void
  onStatus?: (status: TradeSocketStatus) => void
}

export function connectTradeSocket(options: TradeSocketOptions) {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  const onStatus = options.onStatus ?? (() => undefined)
  let socket: WebSocket | undefined
  let stopped = false
  let reconnectTimer: ReturnType<typeof setTimeout> | undefined
  let reconnectAttempt = 0

  const subscribe = () => {
    if (socket?.readyState !== WebSocket.OPEN) return
    socket.send(JSON.stringify({ event: 'subscribe', data: { types: ['trade'] } }))
  }
  const connect = () => {
    if (stopped) return
    onStatus(reconnectAttempt ? 'reconnecting' : 'connecting')
    const token = getAccessToken()
    if (!token) { onStatus('closed'); return }
    socket = new WebSocket(`${protocol}//${window.location.host}/ws/market?access_token=${encodeURIComponent(token)}`)
    socket.addEventListener('open', () => { reconnectAttempt = 0; onStatus('connected'); subscribe() })
    socket.addEventListener('message', (message) => {
      try {
        const wrapper = JSON.parse(message.data as string) as { type?: string; data?: unknown }
        const event = (wrapper.data && typeof wrapper.data === 'object' ? wrapper.data : wrapper) as Partial<TradeOrderRealtimeEvent>
        if (!event.type?.startsWith('trade.order.') || !event.orderId || !event.order) return
        if (options.orderId && options.orderId !== event.orderId) return
        if (!['placed', 'filled', 'cancelled'].includes(event.status as TradeOrderEventStatus)) return
        options.onEvent(event as TradeOrderRealtimeEvent)
      } catch { /* Ignore malformed or market messages. */ }
    })
    socket.addEventListener('error', () => { onStatus('error'); socket?.close() })
    socket.addEventListener('close', () => {
      if (stopped) { onStatus('closed'); return }
      if (reconnectTimer) return
      onStatus('reconnecting')
      const delay = Math.min(30000, 1000 * 2 ** Math.min(reconnectAttempt++, 5))
      reconnectTimer = setTimeout(() => { reconnectTimer = undefined; connect() }, delay)
    })
  }
  connect()
  return () => {
    stopped = true
    if (reconnectTimer) clearTimeout(reconnectTimer)
    reconnectTimer = undefined
    socket?.close()
    socket = undefined
    onStatus('closed')
  }
}
