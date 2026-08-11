<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getMarketStocksSnapshot } from '@/services/market'
import { getAccessToken } from '@/services/api-client'
import { getTradePositions, loadDemoAccount, type DemoHolding } from '@/services/trade'

const stocks = getMarketStocksSnapshot()
const fallbackHolding: DemoHolding = { code: '000001', name: '平安银行', price: '12.80', change: '+0.32', percent: '+2.56%', volume: '-', trend: 'up', quantity: 600, cost: '11.92', marketValue: '7,680.00' }
const holdings = ref<DemoHolding[]>([{ ...fallbackHolding }])
const isLoading = ref(true)
const apiMode = ref(false)
const loadError = ref('')

const marketValue = computed(() => holdings.value.reduce((sum, item) => sum + Number(item.price.replace(',', '')) * item.quantity, 0))
const totalCost = computed(() => holdings.value.reduce((sum, item) => sum + Number(item.cost.replace(',', '')) * item.quantity, 0))
const totalPnL = computed(() => marketValue.value - totalCost.value)
const pnlRate = computed(() => totalCost.value ? totalPnL.value / totalCost.value * 100 : 0)

function displayPrice(value: string) { return Number(value.replace(',', '')).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
function positionPnL(item: DemoHolding) { return (Number(item.price.replace(',', '')) - Number(item.cost.replace(',', ''))) * item.quantity }
function loadLocal() {
  const data = loadDemoAccount()
  if (data?.holdings) holdings.value = data.holdings
}

onMounted(async () => {
  try {
    if (getAccessToken()) {
      const positions = await getTradePositions()
      holdings.value = positions.map((position) => {
        const stock = stocks.find((item) => item.code === position.code)
        const price = stock?.price.replace(',', '') ?? position.averagePrice.toFixed(2)
        return { ...(stock ?? { code: position.code, name: position.code, price, change: '0.00', percent: '0.00%', volume: '-', trend: 'up' as const }), quantity: position.quantity, cost: position.averagePrice.toFixed(2), marketValue: (position.quantity * Number(price)).toFixed(2) }
      })
      apiMode.value = true
    } else loadLocal()
  } catch {
    loadLocal()
    loadError.value = '持仓数据暂时无法连接，已切换到本地模拟数据。'
  } finally { isLoading.value = false }
})
</script>

<template>
  <section class="trade-page">
    <header class="page-header"><RouterLink to="/trade" class="back">‹</RouterLink><div><span class="kicker">SECURITIES ACCOUNT</span><h1>我的持仓</h1></div><span class="account-chip"><i />{{ apiMode ? '已连接' : '模拟账户' }}</span></header>
    <div v-if="isLoading" class="state-card"><span class="loading-dot" />正在加载持仓…</div>
    <template v-else>
      <div v-if="loadError" class="error-banner"><b>!</b><span>{{ loadError }}</span><button @click="loadError = ''">×</button></div>
      <section class="summary-card"><div><span>持仓市值</span><strong>¥ {{ marketValue.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><div class="summary-pnl" :class="totalPnL >= 0 ? 'text-up' : 'text-down'"><span>持仓盈亏</span><b>{{ totalPnL >= 0 ? '+' : '' }}{{ totalPnL.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</b><small>{{ totalPnL >= 0 ? '+' : '' }}{{ pnlRate.toFixed(2) }}%</small></div></section>
      <section class="list-card"><div class="section-title"><h2>股票持仓</h2><span>{{ holdings.length }} 只</span></div><div v-for="holding in holdings" :key="holding.code" class="holding-row"><RouterLink :to="`/trade/positions/${holding.code}`" class="holding-link"><div class="stock-info"><b>{{ holding.name }}</b><small>{{ holding.code }} · 可用 {{ holding.quantity }} 股</small></div><div class="holding-values"><b>¥ {{ displayPrice(holding.price) }}</b><small>{{ holding.quantity.toLocaleString() }} 股 · 市值 {{ (Number(holding.price.replace(',', '')) * holding.quantity).toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</small><em :class="positionPnL(holding) >= 0 ? 'text-up' : 'text-down'">{{ positionPnL(holding) >= 0 ? '+' : '' }}{{ positionPnL(holding).toFixed(2) }}</em></div></RouterLink></div><p v-if="!holdings.length" class="empty-state">暂无持仓<br /><small>买入股票后将在这里展示</small></p></section>
      <RouterLink to="/trade/orders" class="entry-link">查看当日委托 <span>›</span></RouterLink>
    </template>
  </section>
</template>

<style scoped>
.trade-page{--red:#e65353;--green:#20a467;--blue:#2878e5;max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;background:#f7f8fa;color:#202b3c}.page-header{height:58px;display:flex;align-items:center;gap:10px}.back{color:#536176;font-size:29px;line-height:1;text-decoration:none}.page-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.page-header h1{margin-top:3px;font-size:21px}.account-chip{padding:6px 9px;border:1px solid #e7ebf1;border-radius:4px;background:#fff;color:#8792a2;font-size:10px}.account-chip i{display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:#20a467}.state-card,.summary-card,.list-card,.entry-link{background:#fff;border:1px solid #edf0f4;border-radius:7px;box-shadow:0 2px 10px #26304008}.state-card{display:flex;align-items:center;gap:9px;padding:18px;color:#8a95a5;font-size:12px}.loading-dot{width:8px;height:8px;border-radius:50%;background:var(--blue);animation:pulse 1s infinite}.error-banner{display:flex;gap:8px;align-items:center;margin:8px 0;padding:10px 12px;border:1px solid #f5dfc1;border-radius:5px;background:#fffaf2;color:#9b7644;font-size:11px}.error-banner b{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#eab86f;color:#fff}.error-banner button{margin-left:auto;border:0;background:transparent;color:#aa967c;font-size:17px}.summary-card{display:grid;grid-template-columns:1.15fr .85fr;gap:15px;padding:18px 16px;margin:8px 0 10px}.summary-card span{display:block;color:#8994a4;font-size:10px}.summary-card strong{display:block;margin-top:7px;font:600 24px 'JetBrains Mono',monospace}.summary-pnl{padding-left:15px;border-left:1px solid #f0f2f5}.summary-pnl b{display:block;margin-top:7px;font:600 17px 'JetBrains Mono',monospace}.summary-pnl small{margin-top:4px;font:10px 'JetBrains Mono',monospace}.list-card{padding:16px}.section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:3px}.section-title h2{font-size:14px}.section-title span{color:#9aa4b2;font-size:10px}.holding-row{border-bottom:1px solid #f0f2f5}.holding-row:last-of-type{border-bottom:0}.holding-link{display:flex;justify-content:space-between;gap:12px;padding:15px 0;color:inherit;text-decoration:none}.stock-info b,.stock-info small,.holding-values b,.holding-values small,.holding-values em{display:block}.stock-info b,.holding-values b{font-size:13px}.stock-info small,.holding-values small{margin-top:6px;color:#99a3b1;font:10px 'JetBrains Mono',monospace}.holding-values{text-align:right}.holding-values em{margin-top:5px;font:10px 'JetBrains Mono',monospace;font-style:normal}.empty-state{padding:28px 0 20px;color:#a0a9b6;text-align:center;font-size:12px;line-height:2}.empty-state small{font-size:10px}.entry-link{display:flex;justify-content:space-between;margin-top:10px;padding:14px 16px;color:var(--blue);font-size:12px;text-decoration:none}.entry-link span{font-size:18px}@keyframes pulse{50%{opacity:.35}}.text-up{color:var(--red)!important}.text-down{color:var(--green)!important}
</style>
