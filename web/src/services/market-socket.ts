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
  const onStatus = options.onStatus ?? (() => undefined)
  if (typeof window === 'undefined' || typeof WebSocket === 'undefined') {
    const unavailable = (() => onStatus('closed')) as MarketSocketConnection
    unavailable.setCodes = () => undefined
    return unavailable
  }
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  let subscribedCodes = [...new Set(codes.map((code) => code.trim().toLowerCase()).filter(Boolean))]
  const types = options.types ?? ['quote', 'kline', 'intraday', 'orderbook']
  const events = options.events ?? []
  let socket: WebSocket | undefined
  let stopped = false
  let connectionId = 0
  let reconnectTimer: ReturnType<typeof setTimeout> | undefined
  let reconnectAttempt = 0

  const subscribe = () => {
    if (socket?.readyState !== WebSocket.OPEN) return
    socket.send(JSON.stringify({ event: 'subscribe', data: { codes: subscribedCodes, types, events } }))
  }

  const connect = () => {
    if (stopped) return
    onStatus(reconnectAttempt ? 'reconnecting' : 'connecting')
    const currentConnection = ++connectionId
    let nextSocket: WebSocket
    try { nextSocket = new WebSocket(`${protocol}//${window.location.host}/ws/market`) } catch {
      onStatus('error')
      if (!stopped) {
        reconnectTimer = setTimeout(() => { reconnectTimer = undefined; connect() }, Math.min(30000, 1000 * 2 ** Math.min(reconnectAttempt++, 5)))
      }
      return
    }
    socket = nextSocket
    nextSocket.addEventListener('open', () => {
      if (stopped || currentConnection !== connectionId) return
      reconnectAttempt = 0; onStatus('connected'); subscribe()
    })
    nextSocket.addEventListener('message', (message) => {
      if (stopped || currentConnection !== connectionId) return
      try {
        const event = JSON.parse(message.data as string) as MarketSocketEvent
        if (event.type === 'error') onStatus('error')
        if (event.type !== 'connected' && event.type !== 'subscribed' && event.type !== 'unsubscribed') onEvent(event)
      } catch { /* ignore malformed provider events */ }
    })
    nextSocket.addEventListener('error', () => {
      if (currentConnection !== connectionId) return
      onStatus('error'); nextSocket.close()
    })
    nextSocket.addEventListener('close', () => {
      if (currentConnection !== connectionId) return
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
    connectionId += 1
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
    if (stopped) return
    const next = [...new Set(nextCodes.map((code) => code.trim().toLowerCase()).filter(Boolean))]
    if (socket?.readyState === WebSocket.OPEN) {
      const removed = subscribedCodes.filter((code) => !next.includes(code))
      const added = next.filter((code) => !subscribedCodes.includes(code))
      if (removed.length) socket.send(JSON.stringify({ event: 'unsubscribe', data: { codes: removed, types, events } }))
      if (added.length) socket.send(JSON.stringify({ event: 'subscribe', data: { codes: added, types, events } }))
    }
    subscribedCodes = next
  }
  return disconnect
}
