import { beforeEach, describe, expect, it, vi } from 'vitest'
import { setAccessToken } from '@/services/api-client'
import { connectTradeSocket } from '@/services/trade-socket'

class FakeWebSocket {
  static OPEN = 1
  static instances: FakeWebSocket[] = []
  readyState = 0
  private listeners = new Map<string, Array<(event: { data?: string }) => void>>()

  constructor(public readonly url: string) { FakeWebSocket.instances.push(this) }
  addEventListener(type: string, listener: (event: { data?: string }) => void) { this.listeners.set(type, [...(this.listeners.get(type) ?? []), listener]) }
  send = vi.fn()
  close() { this.readyState = 3; this.emit('close') }
  open() { this.readyState = FakeWebSocket.OPEN; this.emit('open') }
  message(value: unknown) { this.emit('message', { data: JSON.stringify(value) }) }
  private emit(type: string, event: { data?: string } = {}) { for (const listener of this.listeners.get(type) ?? []) listener(event) }
}

describe('trade socket', () => {
  beforeEach(() => {
    FakeWebSocket.instances = []
    window.localStorage.clear()
    setAccessToken('test-token')
    vi.stubGlobal('WebSocket', FakeWebSocket)
  })

  it('subscribes after connect, routes all trade events, and deduplicates event ids', () => {
    const orders: unknown[] = []
    const executions: unknown[] = []
    const cashFlows: unknown[] = []
    const stop = connectTradeSocket({ onEvent: (event) => orders.push(event), onExecution: (event) => executions.push(event), onCashFlow: (event) => cashFlows.push(event) })
    const socket = FakeWebSocket.instances[0]
    socket.open()

    expect(socket.send).toHaveBeenCalledWith(JSON.stringify({ event: 'subscribe', data: { types: ['trade'] } }))
    const base = { userId: 'user-1', orderId: 'order-1', timestamp: 1 }
    socket.message({ ...base, eventId: 'order:event', type: 'trade.order.filled', status: 'filled', order: { id: 'order-1' } })
    socket.message({ ...base, eventId: 'order:event', type: 'trade.order.filled', status: 'filled', order: { id: 'order-1' } })
    socket.message({ ...base, eventId: 'execution:1', type: 'trade.execution', transaction: { id: 'tx-1' } })
    socket.message({ ...base, eventId: 'flow:1', type: 'trade.cash-flow', flow: { id: 'flow-1' } })

    expect(orders).toHaveLength(1)
    expect(executions).toHaveLength(1)
    expect(cashFlows).toHaveLength(1)
    stop()
  })
})
