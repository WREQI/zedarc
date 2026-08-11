<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getAccessToken } from '@/services/api-client'
import { getMarketStocksSnapshot } from '@/services/market'
import { getTradePosition, getTradeTransactions, loadDemoAccount, type DemoHolding, type TradePosition, type TradeTransaction } from '@/services/trade'

const route = useRoute()
const position = ref<(TradePosition & { name?: string; currentPrice?: number }) | DemoHolding | null>(null)
const isLoading = ref(true)
const transactions = ref<TradeTransaction[]>([])
const stocks = getMarketStocksSnapshot()
const price = computed(() => 'currentPrice' in (position.value || {}) ? Number((position.value as TradePosition & { currentPrice?: number }).currentPrice) : Number((position.value as DemoHolding | null)?.price?.replace(',', '') || 0))
const cost = computed(() => 'averagePrice' in (position.value || {}) ? Number((position.value as TradePosition).averagePrice) : Number((position.value as DemoHolding | null)?.cost?.replace(',', '') || 0))
const quantity = computed(() => position.value?.quantity || 0)
const pnl = computed(() => (price.value - cost.value) * quantity.value)
const format = (value: number) => value ? `¥ ${value.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}` : '暂无数据'

onMounted(async () => {
  const code = String(route.params.code || '')
  try {
    if (getAccessToken()) {
      const [item, allTransactions] = await Promise.all([getTradePosition(code), getTradeTransactions()])
      transactions.value = allTransactions.filter((transaction) => transaction.code === code)
      if (item) position.value = { ...item, name: stocks.find((stock) => stock.code === item.code)?.name ?? item.code, currentPrice: Number(stocks.find((stock) => stock.code === item.code)?.price.replace(',', '') || item.averagePrice) }
    } else {
      const local = loadDemoAccount()?.holdings ?? []
      position.value = local.find((item) => item.code === code) ?? local[0] ?? null
    }
  } finally { isLoading.value = false }
})
</script>

<template>
  <section class="trade-page"><header class="page-header"><RouterLink to="/trade/positions" class="back">‹</RouterLink><div><span class="kicker">POSITION DETAIL</span><h1>持仓详情</h1></div></header><div v-if="isLoading" class="state-card">正在加载持仓详情…</div><div v-else-if="!position" class="empty-state">暂无该股票的持仓数据<RouterLink to="/trade/positions">返回持仓</RouterLink></div><template v-else><section class="hero-card"><div><strong>{{ 'name' in position ? position.name : position.name }}</strong><small>{{ position.code }}</small></div><b :class="pnl >= 0 ? 'rise' : 'fall'">{{ pnl >= 0 ? '+' : '' }}{{ format(pnl) }}</b></section><section class="list-card"><div class="detail-row"><span>持仓数量</span><b>{{ quantity.toLocaleString() }} 股</b></div><div class="detail-row"><span>可用数量</span><b>{{ 'available' in position ? `${position.available} 股` : '暂无数据' }}</b></div><div class="detail-row"><span>成本价</span><b>{{ format(cost) }}</b></div><div class="detail-row"><span>最新价</span><b>{{ format(price) }}</b></div><div class="detail-row"><span>持仓市值</span><b>{{ format(price * quantity) }}</b></div><div class="detail-row"><span>浮动盈亏</span><b :class="pnl >= 0 ? 'rise' : 'fall'">{{ pnl ? `${pnl >= 0 ? '+' : ''}${format(pnl)}` : '暂无数据' }}</b></div><div v-if="transactions.length" class="linked-records"><b>关联成交（{{ transactions.length }} 笔）</b><RouterLink v-for="transaction in transactions.slice(0, 5)" :key="transaction.id" :to="`/trade/orders/${transaction.orderId}`">{{ transaction.side === 'buy' ? '买入' : '卖出' }} {{ transaction.quantity }} 股 · {{ transaction.price.toFixed(2) }} 元 · {{ new Date(transaction.createdAt).toLocaleString('zh-CN') }} ›</RouterLink></div><p class="tip">持仓数量、可用数量和成本价来自服务端持仓记录；最新价仅用于展示实时估值。</p></section></template></section>
</template>

<style scoped>
.trade-page{max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.hero-card,.list-card,.state-card,.empty-state{background:#fff;border:1px solid #edf0f4;border-radius:8px;box-shadow:0 2px 10px #26304008}.hero-card{display:flex;justify-content:space-between;align-items:center;padding:19px 16px}.hero-card strong,.hero-card small{display:block}.hero-card strong{font-size:19px}.hero-card small{margin-top:7px;color:#8e99a8;font:11px 'JetBrains Mono',monospace}.hero-card b{font:600 15px 'JetBrains Mono',monospace}.list-card{margin-top:10px;padding:16px}.detail-row{display:flex;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid #f0f2f5;font-size:12px}.detail-row span{color:#8c97a6}.detail-row b{text-align:right;font:12px 'JetBrains Mono',monospace}.linked-records{margin-top:13px;padding-top:12px;border-top:1px solid #f0f2f5}.linked-records>b,.linked-records a{display:block}.linked-records>b{margin-bottom:8px;font-size:11px}.linked-records a{padding:7px 0;color:#2878e5;font-size:10px;text-decoration:none}.tip{margin:15px 0 0;padding:10px;background:#f8f9fb;color:#9aa4b1;font-size:10px;line-height:1.7}.empty-state{margin-top:10px;padding:38px 16px;text-align:center;color:#99a3b1;font-size:12px}.empty-state a{display:block;margin-top:14px;color:#2878e5;text-decoration:none}.rise{color:#e65353}.fall{color:#20a467}
</style>