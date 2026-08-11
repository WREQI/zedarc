<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getMarketStocksSnapshot } from '@/services/market'
import { getAccessToken } from '@/services/api-client'
import { cancelTrade, getTradeOrders, loadDemoAccount, saveDemoAccount, type DemoOrder } from '@/services/trade'
import { connectTradeSocket, type TradeSocketStatus } from '@/services/trade-socket'
import type { TradeOrderRealtimeEvent } from '@zedarc/shared'

interface PageOrder extends DemoOrder { id?: string }
const stocks = getMarketStocksSnapshot()
const orders = ref<PageOrder[]>([
  { time: '14:26:08', name: '宁德时代', side: '买入', price: '196.80', quantity: 200, status: '已报' },
  { time: '10:18:42', name: '比亚迪', side: '卖出', price: '270.20', quantity: 100, status: '已成' },
])
const isLoading = ref(true)
const apiMode = ref(false)
const loadError = ref('')
const toast = ref('')
const realtimeStatus = ref<TradeSocketStatus>('connecting')
let disconnectRealtime: (() => void) | undefined
const activeFilter = ref('全部')
const filters = ['全部', '已报', '已成', '已撤']
const filteredOrders = computed(() => activeFilter.value === '全部' ? orders.value : orders.value.filter((order) => order.status === activeFilter.value))

function showToast(message: string) { toast.value = message; window.setTimeout(() => { toast.value = '' }, 2200) }
function persist() { const data = loadDemoAccount(); saveDemoAccount({ availableCash: data?.availableCash ?? 286420.56, holdings: data?.holdings ?? [], orders: orders.value }) }
function loadLocal() { const data = loadDemoAccount(); if (data?.orders) orders.value = data.orders }

onMounted(async () => {
  try {
    if (getAccessToken()) {
      const remoteOrders = await getTradeOrders()
      orders.value = remoteOrders.map(toPageOrder)
      apiMode.value = true
      disconnectRealtime = connectTradeSocket({ onEvent: applyRealtimeEvent, onStatus: (status) => { realtimeStatus.value = status } })
    } else loadLocal()
  } catch {
    loadLocal()
    loadError.value = '委托数据暂时无法连接，已切换到本地模拟数据。'
  } finally { isLoading.value = false }
})

onUnmounted(() => disconnectRealtime?.())

function toPageOrder(order: { id: string; code: string; side: 'buy' | 'sell'; price: number; quantity: number; status: string; createdAt: string }): PageOrder {
  return { id: order.id, time: new Date(order.createdAt).toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: stocks.find((stock) => stock.code === order.code)?.name ?? order.code, side: order.side === 'buy' ? '买入' : '卖出', price: order.price.toFixed(2), quantity: order.quantity, status: order.status === 'cancelled' ? '已撤' : '已成' }
}

function applyRealtimeEvent(event: TradeOrderRealtimeEvent) {
  const existing = orders.value.find((item) => item.id === event.orderId || (event.requestId && 'requestId' in item && item.requestId === event.requestId))
  if (existing) { existing.status = event.status === 'cancelled' ? '已撤' : event.status === 'filled' ? '已成' : '已报'; return }
  orders.value.unshift(toPageOrder(event.order))
}

async function cancelOrder(order: PageOrder) {
  if (order.status !== '已报') return
  if (apiMode.value && order.id) {
    try { await cancelTrade(order.id); order.status = '已撤'; showToast(`${order.name} 委托已撤销`); return } catch { apiMode.value = false; showToast('API 撤单失败，已切换本地模拟') }
  }
  order.status = '已撤'
  persist()
  showToast(`${order.name} 委托已撤销`)
}
</script>

<template>
  <section class="trade-page">
    <header class="page-header"><RouterLink to="/trade" class="back">‹</RouterLink><div><span class="kicker">SECURITIES ACCOUNT</span><h1>当日委托</h1></div><span class="account-chip"><i />{{ apiMode ? '已连接' : '模拟账户' }}</span></header>
    <div v-if="isLoading" class="state-card"><span class="loading-dot" />正在加载委托…</div>
    <template v-else>
      <div v-if="loadError" class="error-banner"><b>!</b><span>{{ loadError }}</span><button @click="loadError = ''">×</button></div><div v-if="apiMode" class="realtime-banner"><i />{{ realtimeStatus === 'connected' ? '订单状态实时同步' : realtimeStatus === 'reconnecting' || realtimeStatus === 'connecting' ? '正在恢复实时连接…' : '实时连接已断开，HTTP 快照仍可用' }}</div>
      <section class="list-card"><div class="section-title"><div><h2>今日委托</h2><small>交易日 · 实时状态</small></div><span>{{ orders.length }} 条</span></div><div class="filter-tabs"><button v-for="filter in filters" :key="filter" :class="{ active: activeFilter === filter }" @click="activeFilter = filter">{{ filter }}</button></div><div v-for="(order, index) in filteredOrders" :key="order.id ?? `${order.time}-${order.name}-${index}`" class="order-row"><div><RouterLink :to="`/trade/orders/${order.id ?? index}`" class="detail-link"><b>{{ order.name }} <em :class="order.side === '买入' ? 'text-up' : 'text-down'">{{ order.side }}</em></b><small>{{ order.time }} · {{ order.price }} 元 × {{ order.quantity }} 股</small></RouterLink></div><div class="order-actions"><span class="status" :class="{ cancelled: order.status === '已撤', done: order.status === '已成' }">{{ order.status }}</span><button v-if="order.status === '已报'" @click="cancelOrder(order)">撤单</button><RouterLink :to="`/trade/orders/${order.id ?? index}`" class="detail-action">详情 ›</RouterLink></div></div><p v-if="!filteredOrders.length" class="empty-state">暂无{{ activeFilter === '全部' ? '' : activeFilter }}委托<br /><small>提交交易后将在这里展示</small></p></section>
      <RouterLink to="/trade/positions" class="entry-link">查看我的持仓 <span>›</span></RouterLink>
    </template>
    <div v-if="toast" class="trade-toast">{{ toast }}</div>
  </section>
</template>

<style scoped>
.trade-page{--red:#e65353;--green:#20a467;--blue:#2878e5;max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;line-height:1;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.account-chip{padding:6px 9px;border:1px solid #e7ebf1;border-radius:4px;background:#fff;color:#8792a2;font-size:10px}.account-chip i{display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:#20a467}.state-card,.list-card,.entry-link{background:#fff;border:1px solid #edf0f4;border-radius:7px;box-shadow:0 2px 10px #26304008}.state-card{display:flex;align-items:center;gap:9px;padding:18px;color:#8a95a5;font-size:12px}.loading-dot{width:8px;height:8px;border-radius:50%;background:var(--blue);animation:pulse 1s infinite}.error-banner{display:flex;gap:8px;align-items:center;margin:8px 0;padding:10px 12px;border:1px solid #f5dfc1;border-radius:5px;background:#fffaf2;color:#9b7644;font-size:11px}.error-banner b{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#eab86f;color:#fff}.error-banner button{margin-left:auto;border:0;background:transparent;color:#aa967c;font-size:17px}.list-card{padding:16px}.section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.section-title h2{font-size:14px}.section-title small{display:block;margin-top:5px;color:#9aa4b2;font-size:10px}.section-title>span{color:#9aa4b2;font-size:10px}.filter-tabs{display:flex;gap:18px;margin:12px -16px 0;padding:0 16px;border-bottom:1px solid #f0f2f5}.filter-tabs button{position:relative;padding:10px 0 9px;border:0;background:#fff;color:#929cab;font-size:12px}.filter-tabs button.active{color:var(--blue);font-weight:600}.filter-tabs button.active:after{content:'';position:absolute;bottom:-1px;left:50%;width:22px;height:2px;background:var(--blue);transform:translateX(-50%)}.order-row{display:flex;justify-content:space-between;gap:12px;padding:15px 0;border-bottom:1px solid #f0f2f5}.order-row:last-of-type{border-bottom:0}.order-row b,.order-row small{display:block}.order-row b{font-size:13px}.detail-link{color:inherit;text-decoration:none}.detail-action{display:block;margin-top:7px;color:var(--blue);font-size:10px;text-decoration:none}.order-row em{margin-left:7px;font-size:10px;font-style:normal}.order-row small{margin-top:6px;color:#99a3b1;font:10px 'JetBrains Mono',monospace}.order-actions{text-align:right}.status{display:inline-block;padding:4px 6px;background:#edf4ff;color:var(--blue);font-size:10px}.status.done{background:#edf8f2;color:var(--green)}.status.cancelled{background:#f5f6f8;color:#9ca5b2}.order-actions button{display:block;margin:7px 0 0 auto;padding:0;border:0;background:transparent;color:var(--blue);font-size:10px}.empty-state{padding:30px 0 20px;color:#a0a9b6;text-align:center;font-size:12px;line-height:2}.empty-state small{font-size:10px}.entry-link{display:flex;justify-content:space-between;margin-top:10px;padding:14px 16px;color:var(--blue);font-size:12px;text-decoration:none}.entry-link span{font-size:18px}.realtime-banner{display:flex;align-items:center;gap:6px;margin:8px 0;color:#788698;font-size:10px}.realtime-banner i{width:6px;height:6px;border-radius:50%;background:#20a467}.trade-toast{position:fixed;z-index:30;bottom:25px;left:50%;padding:10px 16px;transform:translateX(-50%);border-radius:4px;background:#263040e8;color:#fff;font-size:11px;white-space:nowrap}.text-up{color:var(--red)!important}.text-down{color:var(--green)!important}@keyframes pulse{50%{opacity:.35}}
</style>
