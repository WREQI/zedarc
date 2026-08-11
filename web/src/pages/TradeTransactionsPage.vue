<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAccessToken } from '@/services/api-client'
import { getMarketStocksSnapshot } from '@/services/market'
import { getTradeTransactions, loadDemoAccount, type DemoOrder, type TradeTransaction } from '@/services/trade'

interface Transaction extends Omit<DemoOrder, 'time'> { time?: string; id?: string; code?: string; createdAt?: string; fee?: number }
const transactions = ref<Transaction[]>([])
const isLoading = ref(true)
const source = ref('模拟账户')
const error = ref('')
const stocks = getMarketStocksSnapshot()
const formatTime = (value?: string) => value ? new Date(value).toLocaleString('zh-CN') : '暂无数据'

onMounted(async () => {
  try {
    if (getAccessToken()) {
      transactions.value = (await getTradeTransactions()).map((item: TradeTransaction) => ({ id: item.id, code: item.code, name: stocks.find((stock) => stock.code === item.code)?.name ?? item.code, side: item.side === 'buy' ? '买入' : '卖出', price: item.price.toFixed(2), quantity: item.quantity, status: '已成', createdAt: item.createdAt, fee: item.fee }))
      source.value = '登录账户'
    } else {
      transactions.value = (loadDemoAccount()?.orders ?? []).map((item, index) => ({
        ...item,
        id: `demo-${index}`,
        code: stocks.find((stock) => stock.name === item.name)?.code,
      }))
    }
  } catch { transactions.value = []; source.value = getAccessToken() ? '登录账户' : '模拟账户'; error.value = getAccessToken() ? '登录账户流水暂时无法加载。' : '模拟账户流水暂时无法加载。' } finally { isLoading.value = false }
})
</script>

<template>
  <section class="trade-page"><header class="page-header"><RouterLink to="/trade" class="back">‹</RouterLink><div><span class="kicker">TRANSACTION HISTORY</span><h1>交易流水</h1></div><span class="account-chip"><i />{{ source }}</span></header><div class="notice">数据来源：{{ source }}。仅展示已由服务端记录的真实成交流水，不根据委托记录推算。</div><div v-if="isLoading" class="state-card">正在加载交易流水…</div><div v-else-if="error" class="state-card error-state">{{ error }}</div><section v-else class="list-card"><div class="section-title"><h2>交易记录</h2><small>{{ transactions.length }} 条</small></div><div v-for="(item, index) in transactions" :key="item.id ?? `${item.time}-${index}`" class="transaction-row"><div><b>{{ item.name }} <em :class="item.side === '买入' ? 'rise' : 'fall'">{{ item.side }}</em></b><small>{{ item.code || '暂无代码' }} · {{ item.createdAt ? formatTime(item.createdAt) : item.time || '暂无时间' }}</small></div><div class="transaction-values"><b>{{ item.price ? `¥ ${item.price}` : '暂无成交价' }}</b><small>{{ item.quantity ? `${item.quantity} 股` : '暂无数量' }}</small><em>{{ item.fee ? `手续费 ¥ ${item.fee.toFixed(2)}` : '手续费暂无数据' }}</em></div></div><p v-if="!transactions.length" class="empty-state">暂无交易流水<br /><small>完成交易后将在这里展示</small></p></section></section>
</template>

<style scoped>
.trade-page{max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.account-chip{padding:6px 9px;border:1px solid #e7ebf1;border-radius:4px;background:#fff;color:#8792a2;font-size:10px}.account-chip i{display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:#20a467}.notice,.list-card,.state-card{background:#fff;border:1px solid #edf0f4;border-radius:8px;box-shadow:0 2px 10px #26304008}.notice{padding:11px 13px;color:#8c97a6;font-size:10px;line-height:1.7}.state-card{margin-top:10px;padding:18px;color:#8994a4;font-size:12px}.list-card{margin-top:10px;padding:16px}.section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.section-title h2{font-size:14px}.section-title small{color:#9aa4b2;font-size:10px}.transaction-row{display:flex;justify-content:space-between;gap:12px;padding:15px 0;border-bottom:1px solid #f0f2f5}.transaction-row:last-of-type{border-bottom:0}.transaction-row b,.transaction-row small,.transaction-row em{display:block}.transaction-row b{font-size:13px}.transaction-row em{margin-left:7px;font-size:10px;font-style:normal}.transaction-row small,.transaction-values em{margin-top:6px;color:#99a3b1;font:10px 'JetBrains Mono',monospace}.transaction-values{text-align:right}.transaction-values b{font:12px 'JetBrains Mono',monospace}.transaction-values em{margin-top:5px;font-style:normal}.empty-state{padding:30px 0 20px;color:#a0a9b6;text-align:center;font-size:12px;line-height:2}.empty-state small{font-size:10px}.rise{color:#e65353}.fall{color:#20a467}
</style>