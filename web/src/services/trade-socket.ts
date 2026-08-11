import { getAccessToken } from './api-client'
import type { TradeCashFlowRealtimeEvent, TradeExecutionRealtimeEvent, TradeOrderEventStatus, TradeOrderRealtimeEvent, TradeRealtimeEvent } from '@zedarc/shared'

export type TradeSocketStatus = 'connecting' | 'connected' | 'reconnecting' | 'closed' | 'error'
export type TradeSocketOptions = {
  orderId?: string
  onEvent: (event: TradeOrderRealtimeEvent) => void
  onExecution?: (event: TradeExecutionRealtimeEvent) => void
  onCashFlow?: (event: TradeCashFlowRealtimeEvent) => void
  onStatus?: (status: TradeSocketStatus) => void
  dedupeLimit?: number
}

export function connectTradeSocket(options: TradeSocketOptions) {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  const onStatus = options.onStatus ?? (() => undefined)
  let socket: WebSocket | undefined
  let stopped = false
  let reconnectTimer: ReturnType<typeof setTimeout> | undefined
  let reconnectAttempt = 0
  const seen = new Set<string>()
  const dedupeLimit = Math.max(50, options.dedupeLimit ?? 500)

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
        const tradeEvent = event as Partial<TradeRealtimeEvent>
        if (!tradeEvent.type?.startsWith('trade.') || !tradeEvent.eventId || !tradeEvent.orderId || typeof tradeEvent.userId !== 'string') return
        if (options.orderId && options.orderId !== tradeEvent.orderId) return
        if (seen.has(tradeEvent.eventId)) return
        seen.add(tradeEvent.eventId)
        if (seen.size > dedupeLimit) seen.delete(seen.values().next().value as string)
        if (tradeEvent.type === 'trade.execution') { if ('transaction' in tradeEvent && tradeEvent.transaction) options.onExecution?.(tradeEvent as TradeExecutionRealtimeEvent); return }
        if (tradeEvent.type === 'trade.cash-flow') { if ('flow' in tradeEvent && tradeEvent.flow) options.onCashFlow?.(tradeEvent as TradeCashFlowRealtimeEvent); return }
        if (!tradeEvent.type.startsWith('trade.order.') || !('order' in tradeEvent) || !tradeEvent.order) return
        if (!['pending', 'reported', 'partial', 'filled', 'cancelled', 'rejected', 'placed'].includes(tradeEvent.status as TradeOrderEventStatus)) return
        options.onEvent(tradeEvent as TradeOrderRealtimeEvent)
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
