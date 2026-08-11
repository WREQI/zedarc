<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getAccessToken } from '@/services/api-client'
import { getTradeFunds, getTradeStats, loadDemoAccount, type TradeAccount, type TradeStats } from '@/services/trade'

const account = ref<TradeAccount>({ userId: '', cash: 0, marketValue: 0, availableCash: 0 })
const stats = ref<TradeStats>({ orderCount: 0, buyAmount: 0, sellAmount: 0, fees: 0, realizedPnL: 0 })
const isLoading = ref(true)
const source = ref('模拟账户')
const error = ref('')
const money = (value: number) => `¥ ${value.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}`
const totalAssets = computed(() => account.value.availableCash + account.value.marketValue)

onMounted(async () => {
  try {
    if (getAccessToken()) {
      const [remoteFunds, remoteStats] = await Promise.all([getTradeFunds(), getTradeStats()])
      account.value = remoteFunds
      stats.value = remoteStats
      source.value = '登录账户'
    } else {
      const local = loadDemoAccount()
      account.value = { userId: '', cash: local?.availableCash ?? 286420.56, marketValue: local?.holdings?.reduce((sum, item) => sum + Number(item.price.replace(',', '')) * item.quantity, 0) ?? 0, availableCash: local?.availableCash ?? 286420.56 }
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
      <section class="list-card"><div class="section-title"><h2>当日交易概览</h2><small>API 未提供的字段不作推算</small></div><div class="metric-row"><span>委托笔数</span><b>{{ stats.orderCount || '暂无数据' }}</b></div><div class="metric-row"><span>买入金额</span><b>{{ stats.buyAmount ? money(stats.buyAmount) : '暂无数据' }}</b></div><div class="metric-row"><span>卖出金额</span><b>{{ stats.sellAmount ? money(stats.sellAmount) : '暂无数据' }}</b></div><div class="metric-row"><span>手续费</span><b>{{ stats.fees ? money(stats.fees) : '暂无数据' }}</b></div><div class="metric-row"><span>已实现盈亏</span><b>{{ stats.realizedPnL ? money(stats.realizedPnL) : '暂无数据' }}</b></div></section>
      <div class="entry-grid"><RouterLink to="/trade/transactions">交易流水 <span>›</span></RouterLink><RouterLink to="/trade/positions">持仓明细 <span>›</span></RouterLink></div>
    </template>
  </section>
</template>

<style scoped>
.trade-page{--blue:#2878e5;max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.account-chip{padding:6px 9px;border:1px solid #e7ebf1;border-radius:4px;background:#fff;color:#8792a2;font-size:10px}.account-chip i{display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:#20a467}.asset-card,.list-card,.entry-grid a,.state-card{background:#fff;border:1px solid #edf0f4;border-radius:8px;box-shadow:0 2px 10px #26304008}.asset-card{padding:19px 16px}.asset-card>span,.asset-card small,.metric-row span,.section-title small{color:#8d98a7;font-size:10px}.asset-card strong{display:block;margin:8px 0 5px;font:600 27px 'JetBrains Mono',monospace}.asset-card small{display:block}.asset-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px;padding-top:14px;border-top:1px solid #f0f2f5}.asset-grid span{display:block;color:#8d98a7;font-size:10px}.asset-grid b{display:block;margin-top:6px;font:12px 'JetBrains Mono',monospace}.list-card{margin-top:10px;padding:16px}.section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.section-title h2{font-size:14px}.metric-row{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid #f0f2f5;font-size:12px}.metric-row:last-child{border-bottom:0}.metric-row b{font:12px 'JetBrains Mono',monospace}.entry-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.entry-grid a{display:flex;justify-content:space-between;padding:14px 16px;color:var(--blue);font-size:12px;text-decoration:none}.entry-grid span{font-size:18px}.state-card,.error-banner{padding:18px;color:#8994a4;font-size:12px}.error-banner{margin:8px 0;border-color:#f5dfc1;background:#fffaf2;color:#9b7644}@media(max-width:420px){.asset-grid b{font-size:10px}}
</style>