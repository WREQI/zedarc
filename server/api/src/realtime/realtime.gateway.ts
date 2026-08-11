import { Logger, OnModuleDestroy } from '@nestjs/common'
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import type { Server, WebSocket } from 'ws'
import { RealtimeService, type MarketEvent } from './realtime.service.js'

type Subscription = { codes: Set<string>; types: Set<string> }
type LiveSocket = WebSocket & { isAlive?: boolean }
type SubscriptionPayload = { codes?: unknown; types?: unknown; events?: unknown }

const MAX_CODES = 50
const MAX_TYPES = 20
const MAX_VALUE_LENGTH = 64

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
    socket.on('close', () => this.handleDisconnect(socket))
    socket.on('error', (error) => this.logger.debug(`WebSocket error: ${error.message}`))
    this.send(socket, { type: 'connected', channel: 'market', realtime: this.realtime.isEnabled(), subscriptionRequired: true, limits: { maxCodes: MAX_CODES, maxTypes: MAX_TYPES }, timestamp: Date.now() })
  }

  handleDisconnect(client: WebSocket) { this.clients.delete(client); this.subscriptions.delete(client) }

  @SubscribeMessage('subscribe')
  handleSubscribe(client: WebSocket, payload: SubscriptionPayload) { this.updateSubscription(client, payload, false) }

  @SubscribeMessage('unsubscribe')
  handleUnsubscribe(client: WebSocket, payload: SubscriptionPayload) { this.updateSubscription(client, payload, true) }

  @SubscribeMessage('status')
  handleStatus(client: WebSocket) {
    const subscription = this.subscriptions.get(client)
    if (!subscription) return this.sendError(client, 'CONNECTION_NOT_REGISTERED', '连接尚未注册')
    this.send(client, this.subscriptionMessage('status', subscription))
  }

  private updateSubscription(client: WebSocket, payload: SubscriptionPayload, remove: boolean) {
    const subscription = this.subscriptions.get(client)
    if (!subscription) return this.sendError(client, 'CONNECTION_NOT_REGISTERED', '连接尚未注册')
    const parsed = this.parsePayload(payload)
    if (!parsed.ok) return this.sendError(client, 'INVALID_SUBSCRIPTION', parsed.message)
    const values = [...parsed.codes, ...parsed.types]
    const nextCodes = new Set(subscription.codes)
    const nextTypes = new Set(subscription.types)
    for (const code of parsed.codes) remove ? nextCodes.delete(code) : nextCodes.add(code)
    for (const type of parsed.types) remove ? nextTypes.delete(type) : nextTypes.add(type)
    if (!remove && (nextCodes.size > MAX_CODES || nextTypes.size > MAX_TYPES)) {
      return this.sendError(client, 'SUBSCRIPTION_LIMIT', `订阅上限为 ${MAX_CODES} 个代码和 ${MAX_TYPES} 个事件类型`)
    }
    const target = remove ? 'unsubscribed' : 'subscribed'
    for (const code of parsed.codes) remove ? subscription.codes.delete(code) : subscription.codes.add(code)
    for (const type of parsed.types) remove ? subscription.types.delete(type) : subscription.types.add(type)
    this.send(client, { ...this.subscriptionMessage(target, subscription), accepted: values.length })
  }

  private parsePayload(payload: SubscriptionPayload): { ok: true; codes: string[]; types: string[] } | { ok: false; message: string } {
    if (payload == null || typeof payload !== 'object') return { ok: false, message: '订阅参数必须是对象' }
    const codes = this.parseValues(payload.codes, 'codes')
    const types = this.parseValues(payload.types, 'types')
    const events = this.parseValues(payload.events, 'events')
    if (!codes.ok) return codes
    if (!types.ok) return types
    if (!events.ok) return events
    const eventTypes = [...new Set([...types.values, ...events.values])]
    if (!codes.values.length && !eventTypes.length) return { ok: false, message: '至少提供一个代码或事件类型' }
    return { ok: true, codes: codes.values, types: eventTypes }
  }

  private parseValues(value: unknown, name: string): { ok: true; values: string[] } | { ok: false; message: string } {
    if (value === undefined) return { ok: true, values: [] }
    if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || !item.trim() || item.length > MAX_VALUE_LENGTH)) return { ok: false, message: `${name} 必须是非空字符串数组` }
    return { ok: true, values: [...new Set(value.map((item) => item.trim().toLowerCase()))] }
  }

  private subscriptionMessage(type: string, subscription: Subscription) { return { type, channel: 'market', codes: [...subscription.codes], events: [...subscription.types], timestamp: Date.now() } }
  private sendError(client: WebSocket, code: string, message: string) { this.send(client, { type: 'error', channel: 'market', code, message, timestamp: Date.now() }) }
  private broadcast(event: MarketEvent) {
    for (const client of this.clients) { if (client.readyState === 1 && this.matches(event, this.subscriptions.get(client))) this.send(client, event) }
  }
  private matches(event: MarketEvent, subscription?: Subscription) {
    if (!subscription || (!subscription.codes.size && !subscription.types.size)) return false
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
