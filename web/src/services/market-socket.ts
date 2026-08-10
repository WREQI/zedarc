export interface MarketSocketEvent { type: string; channel: string; data?: unknown; timestamp: number }

export interface MarketSocketOptions {
  codes?: string[]
  types?: string[]
  events?: string[]
}

export function connectMarketSocket(codes: string[], onEvent: (event: MarketSocketEvent) => void, options: Omit<MarketSocketOptions, 'codes'> = {}) {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  const subscribedCodes = [...new Set(codes.map((code) => code.trim().toLowerCase()).filter(Boolean))]
  const types = options.types ?? ['quote', 'kline', 'intraday', 'orderbook']
  const events = options.events ?? []
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
    socket = new WebSocket(`${protocol}//${window.location.host}/ws/market`)
    socket.addEventListener('open', () => { reconnectAttempt = 0; subscribe() })
    socket.addEventListener('message', (message) => {
      try {
        const event = JSON.parse(message.data as string) as MarketSocketEvent
        if (event.type !== 'connected' && event.type !== 'subscribed' && event.type !== 'unsubscribed') onEvent(event)
      } catch { /* ignore malformed provider events */ }
    })
    socket.addEventListener('error', () => socket?.close())
    socket.addEventListener('close', () => {
      if (stopped || reconnectTimer) return
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
  }
}
