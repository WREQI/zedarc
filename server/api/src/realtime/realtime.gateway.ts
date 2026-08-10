import { Logger, OnModuleDestroy } from '@nestjs/common'
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import type { Server, WebSocket } from 'ws'
import { RealtimeService, type MarketEvent } from './realtime.service.js'

type Subscription = { codes: Set<string>; types: Set<string> }
type LiveSocket = WebSocket & { isAlive?: boolean }
@WebSocketGateway({ path: '/ws/market' })
export class RealtimeGateway implements OnModuleDestroy {
  @WebSocketServer() server!: Server
  private readonly logger = new Logger(RealtimeGateway.name)
  private readonly clients = new Set<WebSocket>()
  private readonly subscriptions = new Map<WebSocket, Subscription>()
  private readonly heartbeat = setInterval(() => this.checkConnections(), 30000)

  constructor(private readonly realtime: RealtimeService) { this.realtime.events$.subscribe((event) => this.broadcast(event)) }
  onModuleDestroy() { clearInterval(this.heartbeat); for (const client of this.clients) client.close(); this.clients.clear(); this.subscriptions.clear() }
  handleConnection(client: WebSocket) {
    const socket = client as LiveSocket
    socket.isAlive = true
    this.clients.add(socket)
    this.subscriptions.set(socket, { codes: new Set(), types: new Set() })
    socket.on('pong', () => { socket.isAlive = true })
    socket.on('error', (error) => this.logger.debug(`WebSocket error: ${error.message}`))
    this.send(socket, { type: 'connected', channel: 'market', realtime: this.realtime.isEnabled(), timestamp: Date.now() })
  }
  handleDisconnect(client: WebSocket) { this.clients.delete(client); this.subscriptions.delete(client) }
  @SubscribeMessage('subscribe') handleSubscribe(client: WebSocket, payload: { codes?: string[]; types?: string[]; events?: string[] }) {
    const subscription = this.subscriptions.get(client) ?? { codes: new Set<string>(), types: new Set<string>() }
    for (const code of payload?.codes ?? []) subscription.codes.add(code.trim().toLowerCase())
    for (const type of [...(payload?.types ?? []), ...(payload?.events ?? [])]) subscription.types.add(type.trim().toLowerCase())
    this.subscriptions.set(client, subscription)
    this.send(client, { type: 'subscribed', channel: 'market', codes: [...subscription.codes], events: [...subscription.types], timestamp: Date.now() })
  }
  @SubscribeMessage('unsubscribe') handleUnsubscribe(client: WebSocket, payload: { codes?: string[]; types?: string[]; events?: string[] }) {
    const subscription = this.subscriptions.get(client); if (!subscription) return
    for (const code of payload?.codes ?? []) subscription.codes.delete(code.trim().toLowerCase())
    for (const type of [...(payload?.types ?? []), ...(payload?.events ?? [])]) subscription.types.delete(type.trim().toLowerCase())
    this.send(client, { type: 'unsubscribed', channel: 'market', codes: [...subscription.codes], events: [...subscription.types], timestamp: Date.now() })
  }
  private broadcast(event: MarketEvent) {
    for (const client of this.clients) { if (client.readyState === 1 && this.matches(event, this.subscriptions.get(client))) this.send(client, event) }
  }
  private matches(event: MarketEvent, subscription?: Subscription) {
    if (!subscription) return false
    const code = typeof event.data === 'object' && event.data !== null && 'code' in event.data ? String(event.data.code).toLowerCase() : event.channel.split(':').pop()?.toLowerCase()
    const type = event.type.toLowerCase().split(':', 1)[0]
    const channel = event.channel.toLowerCase()
    return (!subscription.codes.size || (code ? subscription.codes.has(code) : false)) && (!subscription.types.size || subscription.types.has(type) || subscription.types.has(channel))
  }
  private send(client: WebSocket, value: unknown) { try { if (client.readyState === 1) client.send(JSON.stringify(value)) } catch { this.handleDisconnect(client) } }
  private checkConnections() {
    for (const client of this.clients) {
      const socket = client as LiveSocket
      if (socket.readyState !== 1 || socket.isAlive === false) { this.handleDisconnect(socket); socket.terminate(); continue }
      socket.isAlive = false
      socket.ping()
    }
  }
}
