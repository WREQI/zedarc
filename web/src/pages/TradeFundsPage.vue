<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getAccessToken } from '@/services/api-client'
import { getTradeFunds, getTradeStats, getTradeTransactions, loadDemoAccount, type TradeCashFlow, type TradeFunds, type TradeStats, type TradeTransaction } from '@/services/trade'

const route = useRoute()
const funds = ref<TradeFunds>({ userId: '', cash: 0, marketValue: 0, availableCash: 0, flows: [] })
const transactions = ref<TradeTransaction[]>([])
const stats = ref<TradeStats>({ orderCount: 0, buyAmount: 0, sellAmount: 0, fees: 0, realizedPnL: 0 })
const isLoading = ref(true)
const source = ref('模拟账户')
const error = ref('')
const money = (value: number) => `¥ ${value.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}`
const account = computed(() => funds.value)
const totalAssets = computed(() => account.value.availableCash + account.value.marketValue)
const transactionById = computed(() => new Map(transactions.value.map((item) => [item.id, item])))
const flowFilter = ref<'all' | 'trade' | 'fee' | 'inflow' | 'outflow'>('all')
const flowFilters = [{ value: 'all', label: '全部' }, { value: 'trade', label: '成交' }, { value: 'fee', label: '手续费' }, { value: 'inflow', label: '入账' }, { value: 'outflow', label: '出账' }] as const
const flowRows = computed(() => funds.value.flows
  .map((flow: TradeCashFlow) => ({ ...flow, transaction: transactionById.value.get(flow.transactionId) }))
  .filter((flow) => flowFilter.value === 'all' || flow.type === flowFilter.value || (flowFilter.value === 'inflow' && flow.amount > 0) || (flowFilter.value === 'outflow' && flow.amount < 0)))
const formatTime = (value: string) => new Date(value).toLocaleString('zh-CN')
const flowLabel = (flow: TradeCashFlow) => flow.type === 'fee' ? '手续费' : flow.amount < 0 ? '买入支出' : '卖出回款'
const flowClass = (flow: TradeCashFlow) => flow.amount < 0 ? 'outflow' : 'inflow'
const orderLink = (orderId: string) => `/trade/orders/${encodeURIComponent(orderId)}`
const transactionLink = (transactionId: string) => `/trade/transactions?transaction=${encodeURIComponent(transactionId)}`

onMounted(async () => {
  const requestedType = String(route.query.type || '')
  if (flowFilters.some((item) => item.value === requestedType)) flowFilter.value = requestedType as typeof flowFilter.value
  try {
    if (getAccessToken()) {
      const [remoteFunds, remoteStats, remoteTransactions] = await Promise.all([getTradeFunds(), getTradeStats(), getTradeTransactions()])
      funds.value = remoteFunds
      stats.value = remoteStats
      transactions.value = remoteTransactions
      source.value = '登录账户'
    } else {
      const local = loadDemoAccount()
      funds.value = { userId: '', cash: local?.availableCash ?? 286420.56, marketValue: local?.holdings?.reduce((sum, item) => sum + Number(item.price.replace(',', '')) * item.quantity, 0) ?? 0, availableCash: local?.availableCash ?? 286420.56, flows: [] }
      stats.value.orderCount = local?.orders?.length ?? 0
    }
  } catch { error.value = getAccessToken() ? '登录账户资金数据暂时无法加载，请稍后重试。' : '模拟账户数据暂时无法加载。' }
  finally { isLoading.value = false }
})
</script>

<template>
  <section class="trade-page">
    <header class="page-header"><RouterLink to="/trade" class="back">‹</RouterLink><div><span class="kicker">SECURITIES ACCOUNT</span><h1>资金明细</h1></div><span class="account-chip"><i />{{ source }}</span></header>
    <div v-if="isLoading" class="state-card">正在加载资金数据…</div>
    <template v-else>
      <div v-if="error" class="error-banner">{{ error }}</div>
      <section class="asset-card"><span>总资产</span><strong>{{ money(totalAssets) }}</strong><small>数据来源：{{ source }}</small><div class="asset-grid"><div><span>可用资金</span><b>{{ money(account.availableCash) }}</b></div><div><span>持仓市值</span><b>{{ money(account.marketValue) }}</b></div><div><span>账户现金</span><b>{{ money(account.cash) }}</b></div></div></section>
      <section class="list-card"><div class="section-title"><h2>当日交易概览</h2><small>以服务端成交和资金流水为准</small></div><div class="metric-row"><span>成交委托</span><b>{{ stats.orderCount }}</b></div><div class="metric-row"><span>买入金额</span><b>{{ money(stats.buyAmount) }}</b></div><div class="metric-row"><span>卖出金额</span><b>{{ money(stats.sellAmount) }}</b></div><div class="metric-row"><span>手续费</span><b>{{ money(stats.fees) }}</b></div><div class="metric-row"><span>已实现盈亏</span><b>{{ money(stats.realizedPnL) }}</b></div></section><section class="list-card flow-card"><div class="section-title"><h2>资金流水</h2><small>{{ flowRows.length }} / {{ funds.flows.length }} 条</small></div><div class="filter-tabs"><button v-for="filter in flowFilters" :key="filter.value" :class="{ active: flowFilter === filter.value }" @click="flowFilter = filter.value">{{ filter.label }}</button></div><div v-for="flow in flowRows" :key="flow.id" class="flow-row"><div><b>{{ flowLabel(flow) }}</b><small v-if="flow.transaction"><RouterLink :to="transactionLink(flow.transaction.id)" class="inline-link">{{ flow.transaction.code }} · {{ flow.transaction.side === 'buy' ? '买入' : '卖出' }} {{ flow.transaction.quantity }} 股</RouterLink></small><small v-else>关联成交已清理</small><small>{{ formatTime(flow.createdAt) }} · <RouterLink :to="orderLink(flow.orderId)" class="inline-link">订单 {{ flow.orderId.slice(0, 8) }}</RouterLink></small></div><strong :class="flowClass(flow)">{{ flow.amount > 0 ? '+' : '' }}{{ money(flow.amount) }}</strong></div><p v-if="!flowRows.length" class="empty-state">暂无资金流水<br /><small>成交后资金变动将在这里展示</small></p></section>
      <div class="entry-grid"><RouterLink to="/trade/transactions">交易流水 <span>›</span></RouterLink><RouterLink to="/trade/positions">持仓明细 <span>›</span></RouterLink></div>
    </template>
  </section>
</template>

<style scoped>
.trade-page{--blue:#2878e5;max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.account-chip{padding:6px 9px;border:1px solid #e7ebf1;border-radius:4px;background:#fff;color:#8792a2;font-size:10px}.account-chip i{display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:#20a467}.asset-card,.list-card,.entry-grid a,.state-card{background:#fff;border:1px solid #edf0f4;border-radius:8px;box-shadow:0 2px 10px #26304008}.asset-card{padding:19px 16px}.asset-card>span,.asset-card small,.metric-row span,.section-title small{color:#8d98a7;font-size:10px}.asset-card strong{display:block;margin:8px 0 5px;font:600 27px 'JetBrains Mono',monospace}.asset-card small{display:block}.asset-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px;padding-top:14px;border-top:1px solid #f0f2f5}.asset-grid span{display:block;color:#8d98a7;font-size:10px}.asset-grid b{display:block;margin-top:6px;font:12px 'JetBrains Mono',monospace}.list-card{margin-top:10px;padding:16px}.section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.section-title h2{font-size:14px}.filter-tabs{display:flex;gap:18px;margin:12px -16px 0;padding:0 16px;border-bottom:1px solid #f0f2f5;overflow-x:auto;scrollbar-width:none}.filter-tabs::-webkit-scrollbar{display:none}.filter-tabs button{position:relative;padding:9px 0;border:0;background:#fff;color:#929cab;font-size:12px}.filter-tabs button.active{color:#2878e5;font-weight:600}.filter-tabs button.active:after{content:'';position:absolute;bottom:-1px;left:50%;width:22px;height:2px;background:#2878e5;transform:translateX(-50%)}.inline-link{color:inherit;text-decoration:none}.metric-row{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid #f0f2f5;font-size:12px}.metric-row:last-child{border-bottom:0}.metric-row b{font:12px 'JetBrains Mono',monospace}.entry-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.entry-grid a{display:flex;justify-content:space-between;padding:14px 16px;color:var(--blue);font-size:12px;text-decoration:none}.entry-grid span{font-size:18px}.state-card,.error-banner{padding:18px;color:#8994a4;font-size:12px}.error-banner{margin:8px 0;border-color:#f5dfc1;background:#fffaf2;color:#9b7644}.flow-card{margin-top:10px}.flow-row{display:flex;justify-content:space-between;gap:12px;padding:14px 0;border-bottom:1px solid #f0f2f5}.flow-row>div{min-width:0}.flow-row>strong{flex-shrink:0}.flow-row:last-of-type{border-bottom:0}.flow-row b,.flow-row small{display:block}.flow-row b{font-size:12px}.flow-row small{margin-top:5px;color:#99a3b1;font:10px 'JetBrains Mono',monospace}.flow-row strong{font:12px 'JetBrains Mono',monospace;white-space:nowrap}.inflow{color:#20a467}.outflow{color:#e65353}.empty-state{padding:24px 0 10px;color:#a0a9b6;text-align:center;font-size:12px;line-height:2}.empty-state small{font-size:10px}@media(max-width:420px){.asset-grid b{font-size:10px}}
</style>