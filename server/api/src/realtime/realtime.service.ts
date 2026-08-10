import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { createClient, type RedisClientType } from 'redis'
import { Subject } from 'rxjs'

export interface MarketEvent { type: string; channel: string; data: unknown; timestamp: number }

@Injectable()
export class RealtimeService implements OnModuleInit, OnModuleDestroy {
  private readonly subscriber: RedisClientType = createClient({ url: process.env.REDIS_URL ?? 'redis://localhost:6379', socket: { connectTimeout: 500, reconnectStrategy: false } })
  private readonly eventsSubject = new Subject<MarketEvent>()
  private readonly logger = new Logger(RealtimeService.name)
  readonly events$ = this.eventsSubject.asObservable()
  private enabled = false
  private reconnectTimer?: ReturnType<typeof setTimeout>
  private connectPromise?: Promise<void>
  private reconnectAttempt = 0
  private stopping = false

  constructor() {
    this.subscriber.on('error', (error) => this.handleDisconnect(error))
    this.subscriber.on('end', () => this.handleDisconnect())
  }

  async onModuleInit() { await this.connect() }
  async onModuleDestroy() {
    this.stopping = true
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer)
    this.eventsSubject.complete()
    if (this.subscriber.isOpen) await this.subscriber.quit()
  }
  isEnabled() { return this.enabled && this.subscriber.isOpen }

  private async connect() {
    if (this.stopping || this.subscriber.isOpen) return
    if (this.connectPromise) return this.connectPromise
    this.connectPromise = this.openSubscription().finally(() => { this.connectPromise = undefined })
    return this.connectPromise
  }

  private async openSubscription() {
    try {
      await this.subscriber.connect()
      await this.subscriber.pSubscribe('market:*', (message, channel) => {
        try {
          const event = JSON.parse(message) as Partial<MarketEvent>
          this.eventsSubject.next({ type: event.type ?? channel.replace(/^market:/, ''), channel: event.channel ?? channel, data: event.data ?? event, timestamp: event.timestamp ?? Date.now() })
        } catch { this.eventsSubject.next({ type: 'market', channel, data: message, timestamp: Date.now() }) }
      })
      this.enabled = true
      this.reconnectAttempt = 0
    } catch (error) {
      this.handleDisconnect(error)
    }
  }
  private handleDisconnect(error?: unknown) {
    this.enabled = false
    if (error) this.logger.warn(`Redis realtime disconnected: ${error instanceof Error ? error.message : String(error)}`)
    if (!this.stopping && !this.reconnectTimer) {
      const delay = Math.min(30000, 1000 * 2 ** Math.min(this.reconnectAttempt++, 5))
      this.reconnectTimer = setTimeout(() => { this.reconnectTimer = undefined; void this.connect() }, delay)
    }
  }
}
