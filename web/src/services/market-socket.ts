export interface MarketSocketEvent { type: string; channel: string; data?: unknown; timestamp: number }

export function connectMarketSocket(codes: string[], onEvent: (event: MarketSocketEvent) => void) {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  const socket = new WebSocket(`${protocol}//${window.location.host}/ws/market`)
  socket.addEventListener('open', () => socket.send(JSON.stringify({ event: 'subscribe', data: { codes } })))
  socket.addEventListener('message', (message) => {
    try { onEvent(JSON.parse(message.data as string) as MarketSocketEvent) } catch { /* ignore malformed provider events */ }
  })
  return () => socket.close()
}
