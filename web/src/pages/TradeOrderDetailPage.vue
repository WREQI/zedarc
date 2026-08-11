<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getAccessToken } from '@/services/api-client'
import { getMarketStocksSnapshot } from '@/services/market'
import { getTradeOrder, loadDemoAccount, type DemoOrder, type TradeOrder } from '@/services/trade'
import { connectTradeSocket, type TradeSocketStatus } from '@/services/trade-socket'
import type { TradeOrderEventStatus, TradeOrderRealtimeEvent } from '@zedarc/shared'

const route = useRoute()
const order = ref<(TradeOrder & { name?: string }) | (DemoOrder & { id?: string; code?: string }) | null>(null)
const isLoading = ref(true)
const message = ref('')
const stocks = getMarketStocksSnapshot()
const realtimeStatus = ref<TradeSocketStatus>('connecting')
const timeline = ref<Array<{ eventId: string; status: TradeOrderEventStatus; timestamp: number; reason?: string | null }>>([])
let disconnectRealtime: (() => void) | undefined
const statusText = (status?: string) => ({ pending: '待处理', reported: '已报', placed: '已报', partial: '部分成交', filled: '已成', cancelled: '已撤', rejected: '已拒', '已撤': '已撤', '已成': '已成', '已报': '已报' } as Record<string, string>)[status ?? ''] ?? (status || '暂无数据')
const display = (value: unknown) => value === undefined || value === null || value === '' ? '暂无数据' : String(value)

onMounted(async () => {
  const id = String(route.params.id || '')
  try {
    if (getAccessToken()) {
      const item = await getTradeOrder(id)
      order.value = item ? { ...item, name: stocks.find((stock) => stock.code === item.code)?.name } : null
      if (order.value) { seedTimeline(order.value); if ('timeline' in order.value && order.value.timeline?.length) timeline.value = order.value.timeline.map((item) => ({ eventId: item.eventId, status: item.status, timestamp: item.timestamp, reason: item.reason })) }
      if (order.value && 'id' in order.value && order.value.id) disconnectRealtime = connectTradeSocket({ orderId: order.value.id, onEvent: applyRealtimeEvent, onStatus: (status) => { realtimeStatus.value = status } })
    } else {
      const local = loadDemoAccount()?.orders ?? []
      const index = Number(id)
      order.value = local[index] ?? local[0] ?? null
      if (order.value) seedTimeline(order.value)
    }
    if (!order.value) message.value = '未找到对应委托，可能已被清理。'
  } catch { message.value = '委托详情暂时无法加载。' }
  finally { isLoading.value = false }
})

onUnmounted(() => disconnectRealtime?.())

function seedTimeline(value: NonNullable<typeof order.value>) {
  if (!('id' in value) || !value.id) return
  const createdAt = 'createdAt' in value && value.createdAt ? new Date(value.createdAt).getTime() : Date.now()
  timeline.value = [{ eventId: `${value.id}:placed`, status: 'placed', timestamp: createdAt }]
  if (value.status === 'filled' || value.status === '已成') timeline.value.push({ eventId: `${value.id}:filled`, status: 'filled', timestamp: createdAt })
  if (value.status === 'cancelled' || value.status === '已撤') timeline.value.push({ eventId: `${value.id}:cancelled`, status: 'cancelled', timestamp: createdAt })
}

function applyRealtimeEvent(event: TradeOrderRealtimeEvent) {
  if (timeline.value.some((item) => item.eventId === event.eventId)) return
  if (order.value && 'id' in order.value) order.value = { ...event.order, name: stocks.find((stock) => stock.code === event.order.code)?.name }
  timeline.value.push({ eventId: event.eventId, status: event.status, timestamp: event.timestamp })
}

const timelineText = (status: TradeOrderEventStatus) => ({ pending: '待处理', reported: '已报', placed: '已下单', partial: '部分成交', filled: '已成交', cancelled: '已撤单', rejected: '已拒绝' } as Record<string, string>)[status] ?? status
</script>

<template>
  <section class="trade-page"><header class="page-header"><RouterLink to="/trade/orders" class="back">‹</RouterLink><div><span class="kicker">ORDER DETAIL</span><h1>委托详情</h1></div></header><div v-if="isLoading" class="state-card">正在加载委托详情…</div><div v-else-if="!order" class="empty-state">{{ message || '暂无数据' }}<RouterLink to="/trade/orders">返回当日委托</RouterLink></div><template v-else><section class="hero-card"><div><strong>{{ 'name' in order ? display(order.name) : display(order.code) }}</strong><small>{{ 'code' in order ? display(order.code) : '暂无代码' }}</small></div><b :class="statusText(order.status) === '已撤' ? 'muted' : 'blue'">{{ statusText(order.status) }}</b></section><section class="list-card"><div class="timeline"><div v-for="item in timeline" :key="item.eventId" class="timeline-item"><i /><div><b>{{ timelineText(item.status) }}</b><small>{{ new Date(item.timestamp).toLocaleString('zh-CN') }}<template v-if="item.reason"> · {{ item.reason }}</template></small></div></div><small class="realtime-note">{{ realtimeStatus === 'connected' ? '实时状态已连接' : realtimeStatus === 'reconnecting' || realtimeStatus === 'connecting' ? '正在同步最新状态…' : '实时连接断开，当前展示 HTTP 快照' }}</small></div><div class="detail-row"><span>买卖方向</span><b>{{ display(order.side) }}</b></div><div class="detail-row"><span>委托价格</span><b>{{ 'price' in order ? `${order.price} 元` : '暂无数据' }}</b></div><div class="detail-row"><span>委托数量</span><b>{{ display(order.quantity) }} 股</b></div><div class="detail-row"><span>委托时间</span><b>{{ 'createdAt' in order ? new Date(order.createdAt).toLocaleString('zh-CN') : display(order.time) }}</b></div><div class="detail-row"><span>委托编号</span><b>{{ 'id' in order ? display(order.id) : '暂无数据' }}</b></div><div class="detail-row"><span>成交数量</span><b>{{ order.status === '已撤' || order.status === 'cancelled' ? '暂无成交' : display(order.quantity) }}{{ order.status === '已撤' || order.status === 'cancelled' ? '' : ' 股' }}</b></div><div class="detail-row"><span>成交均价</span><b>{{ order.status === '已撤' || order.status === 'cancelled' ? '暂无成交' : ('price' in order ? `${order.price} 元` : '暂无数据') }}</b></div><div class="detail-row"><span>手续费</span><b>{{ 'fee' in order ? `¥ ${order.fee.toFixed(2)}` : '暂无数据' }}</b></div><p class="tip">成交与手续费来自服务端成交记录；撤单委托不会被展示为成交。</p></section></template></section>
</template>

<style scoped>
.trade-page{max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.hero-card,.list-card,.state-card,.empty-state{background:#fff;border:1px solid #edf0f4;border-radius:8px;box-shadow:0 2px 10px #26304008}.hero-card{display:flex;justify-content:space-between;align-items:center;padding:19px 16px}.hero-card strong,.hero-card small{display:block}.hero-card strong{font-size:19px}.hero-card small{margin-top:7px;color:#8e99a8;font:11px 'JetBrains Mono',monospace}.hero-card b{padding:6px 9px;background:#edf4ff;color:#2878e5;font-size:11px}.hero-card b.muted{background:#f3f4f6;color:#9aa3b0}.list-card{margin-top:10px;padding:16px}.timeline{padding:0 0 12px;margin-bottom:2px;border-bottom:1px solid #f0f2f5}.timeline-item{display:flex;gap:9px;min-height:38px}.timeline-item i{width:7px;height:7px;margin-top:4px;border-radius:50%;background:#2878e5;box-shadow:0 0 0 3px #edf4ff}.timeline-item b,.timeline-item small{display:block}.timeline-item b{font-size:11px}.timeline-item small,.realtime-note{margin-top:4px;color:#9aa3b1;font-size:10px}.realtime-note{display:block}.detail-row{display:flex;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid #f0f2f5;font-size:12px}.detail-row span{color:#8c97a6}.detail-row b{text-align:right;font:12px 'JetBrains Mono',monospace}.tip{margin:15px 0 0;padding:10px;background:#f8f9fb;color:#9aa4b1;font-size:10px;line-height:1.7}.empty-state{margin-top:10px;padding:38px 16px;text-align:center;color:#99a3b1;font-size:12px}.empty-state a{display:block;margin-top:14px;color:#2878e5;text-decoration:none}.blue{color:#2878e5}.muted{color:#9aa3b0}
</style>