export interface MarketSocketEvent { type: string; channel: string; data?: unknown; timestamp: number }
export type MarketSocketStatus = 'connecting' | 'connected' | 'reconnecting' | 'closed' | 'error'

export interface MarketSocketOptions {
  codes?: string[]
  types?: string[]
  events?: string[]
  onStatus?: (status: MarketSocketStatus) => void
}

export type MarketSocketConnection = (() => void) & { setCodes: (codes: string[]) => void }

export function connectMarketSocket(codes: string[], onEvent: (event: MarketSocketEvent) => void, options: Omit<MarketSocketOptions, 'codes'> = {}): MarketSocketConnection {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  let subscribedCodes = [...new Set(codes.map((code) => code.trim().toLowerCase()).filter(Boolean))]
  const types = options.types ?? ['quote', 'kline', 'intraday', 'orderbook']
  const events = options.events ?? []
  const onStatus = options.onStatus ?? (() => undefined)
  let socket: WebSocket | undefined
  let stopped = false
  let reconnectTimer: ReturnType<typeof setTimeout> | undefined
  let reconnectAttempt = 0

  const subscribe = () => {
    if (socket?.readyState !== WebSocket.OPEN) return
    socket.send(JSON.stringify({ event: 'subscribe', data: { codes: subscribedCodes, types, events } }))
  }

  const connect = () => {
    if (stopped) return
    onStatus(reconnectAttempt ? 'reconnecting' : 'connecting')
    socket = new WebSocket(`${protocol}//${window.location.host}/ws/market`)
    socket.addEventListener('open', () => { reconnectAttempt = 0; onStatus('connected'); subscribe() })
    socket.addEventListener('message', (message) => {
      try {
        const event = JSON.parse(message.data as string) as MarketSocketEvent
        if (event.type === 'error') onStatus('error')
        if (event.type !== 'connected' && event.type !== 'subscribed' && event.type !== 'unsubscribed') onEvent(event)
      } catch { /* ignore malformed provider events */ }
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
  const disconnect = (() => {
    stopped = true
    if (reconnectTimer) clearTimeout(reconnectTimer)
    reconnectTimer = undefined
    if (socket?.readyState === WebSocket.OPEN && subscribedCodes.length) {
      socket.send(JSON.stringify({ event: 'unsubscribe', data: { codes: subscribedCodes, types, events } }))
    }
    socket?.close()
    socket = undefined
    onStatus('closed')
  }) as MarketSocketConnection
  disconnect.setCodes = (nextCodes: string[]) => {
    const next = [...new Set(nextCodes.map((code) => code.trim().toLowerCase()).filter(Boolean))]
    if (socket?.readyState === WebSocket.OPEN) {
      const removed = subscribedCodes.filter((code) => !next.includes(code))
      const added = next.filter((code) => !subscribedCodes.includes(code))
      if (removed.length) socket.send(JSON.stringify({ event: 'unsubscribe', data: { codes: removed } }))
      if (added.length) socket.send(JSON.stringify({ event: 'subscribe', data: { codes: added, types, events } }))
    }
    subscribedCodes = next
  }
  return disconnect
}
