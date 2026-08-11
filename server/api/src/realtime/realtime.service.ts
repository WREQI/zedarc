import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import { Subject } from 'rxjs'
import type { TradeRealtimeEvent } from '@zedarc/shared'

export interface MarketEvent { type: string; channel: string; data: unknown; timestamp: number; userId?: string }

@Injectable()
export class RealtimeService implements OnModuleInit, OnModuleDestroy {
  private readonly subscriber: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  private readonly publisher: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  private readonly eventsSubject = new Subject<MarketEvent>()
  private readonly logger = new Logger(RealtimeService.name)
  readonly events$ = this.eventsSubject.asObservable()
  private enabled = false
  private reconnectTimer?: ReturnType<typeof setTimeout>
  private connectPromise?: Promise<void>
  private reconnectAttempt = 0
  private stopping = false
  private publisherPromise?: Promise<void>

  constructor() {
    this.subscriber.on('error', (error) => this.handleDisconnect(error))
    this.publisher.on('error', (error) => this.logger.debug(`Redis trade publisher unavailable: ${error.message}`))
    this.subscriber.on('end', () => this.handleDisconnect())
  }

  async onModuleInit() { await this.connect() }
  async onModuleDestroy() {
    this.stopping = true
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer)
    this.eventsSubject.complete()
    if (this.subscriber.isOpen) await this.subscriber.quit()
    if (this.publisher.isOpen) await this.publisher.quit()
  }
  isEnabled() { return this.enabled && this.subscriber.isOpen }

  async publishTradeEvent(event: TradeRealtimeEvent) {
    if (this.stopping) return
    try {
      if (!this.publisher.isOpen) {
        this.publisherPromise ??= this.publisher.connect().then(() => undefined).finally(() => { this.publisherPromise = undefined })
        await this.publisherPromise
      }
      await this.publisher.publish(`trade:orders:${event.userId}`, JSON.stringify(event))
    } catch (error) {
      this.logger.debug(`Redis trade event skipped: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  private async connect() {
    if (this.stopping || this.subscriber.isOpen) return
    if (this.connectPromise) return this.connectPromise
    this.connectPromise = this.openSubscription().finally(() => { this.connectPromise = undefined })
    return this.connectPromise
  }

  private async openSubscription() {
    try {
      await this.subscriber.connect()
      const onMessage = (message: string, channel: string) => {
        try {
          const event = JSON.parse(message) as Partial<MarketEvent>
          this.eventsSubject.next({ type: event.type ?? channel.replace(/^(market|trade):/, ''), channel: event.channel ?? channel, data: event.data ?? event, userId: typeof event.userId === 'string' ? event.userId : undefined, timestamp: event.timestamp ?? Date.now() })
        } catch { this.eventsSubject.next({ type: 'market', channel, data: message, timestamp: Date.now() }) }
      }
      await this.subscriber.pSubscribe('market:*', onMessage)
      await this.subscriber.pSubscribe('trade:*', onMessage)
      this.enabled = true
      this.reconnectAttempt = 0
    } catch (error) {
      this.handleDisconnect(error)
    }
  }
  private handleDisconnect(error?: unknown) {
    this.enabled = false
    // Redis can still report isOpen briefly after an error; release that socket so the retry can connect.
    if (this.subscriber.isOpen && !this.stopping) { try { this.subscriber.disconnect() } catch { /* already closed */ } }
    if (error) this.logger.warn(`Redis realtime disconnected: ${error instanceof Error ? error.message : String(error)}`)
    if (!this.stopping && !this.reconnectTimer) {
      const delay = Math.min(30000, 1000 * 2 ** Math.min(this.reconnectAttempt++, 5))
      this.reconnectTimer = setTimeout(() => { this.reconnectTimer = undefined; void this.connect() }, delay)
    }
  }
}
