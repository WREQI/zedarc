<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useWatchlistStore } from '@/stores/watchlist'
import { getMarketStocksSnapshot } from '@/services/market'
import type { StockQuote } from '@/services/market-types'

const watchlist = useWatchlistStore()
const marketStocks = getMarketStocksSnapshot()
const isLoading = ref(true)
const history = computed(() => watchlist.recentCodes.value.map((code) => marketStocks.find((stock) => stock.code === code)).filter((stock): stock is StockQuote => Boolean(stock)))

async function loadHistory() {
  isLoading.value = true
  await watchlist.hydrate()
  isLoading.value = false
}
function clearHistory() { watchlist.clearRecent() }
onMounted(loadHistory)
</script>

<template>
  <section class="history-page">
    <header class="page-header"><div><p class="eyebrow">ACCOUNT / ACTIVITY</p><h1>浏览历史</h1></div><button v-if="history.length" class="clear-button" @click="clearHistory">清空记录</button></header>
    <div class="history-tip panel"><span>◷</span><p>最近查看过的股票会保存在这里<br /><small>仅保存在当前设备，不影响你的自选列表</small></p></div>
    <div v-if="isLoading" class="history-loading">正在读取浏览记录…</div>
    <section v-else-if="history.length" class="history-list panel" aria-label="浏览历史列表">
      <RouterLink v-for="(stock, index) in history" :key="stock.code" class="history-row" :to="`/stock/${stock.code}`">
        <i>{{ String(index + 1).padStart(2, '0') }}</i><span class="stock-copy"><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span><span class="stock-price mono">{{ stock.price }}</span><span class="stock-change mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'"><b>{{ stock.percent }}</b><small>{{ stock.change }}</small></span><span class="arrow">›</span>
      </RouterLink>
    </section>
    <section v-else class="empty-state panel"><span>◷</span><h2>暂无浏览记录</h2><p>查看股票详情后，最近浏览的标的会显示在这里。</p><RouterLink class="primary-button" to="/market">去行情列表</RouterLink></section>
  </section>
</template>

<style scoped>
.history-page{min-height:calc(100vh - 120px);padding:12px 0 28px}.page-header{display:flex;align-items:center;justify-content:space-between;padding:0 4px 16px}.page-header h1{margin-top:4px;font-size:23px;line-height:1.15}.clear-button{padding:6px 0;color:var(--muted);border:0;background:transparent;font-size:11px}.history-tip{display:flex;align-items:center;gap:11px;padding:14px 15px}.history-tip>span{color:#65aa88;font-size:22px}.history-tip p{color:var(--text);font-size:11px;line-height:1.7}.history-tip small{color:var(--muted);font-size:9px}.history-loading{padding:70px 0;color:var(--muted);text-align:center;font-size:11px}.history-list{margin-top:14px;padding:0 14px}.history-row{display:grid;grid-template-columns:22px minmax(100px,1fr) .75fr .8fr 17px;gap:7px;align-items:center;min-height:70px;color:var(--text);border-bottom:1px solid var(--border)}.history-row:last-child{border-bottom:0}.history-row>i{color:#b3bac7;font:normal 9px 'JetBrains Mono',monospace}.stock-copy{display:grid;gap:4px;min-width:0}.stock-copy strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}.stock-copy small,.stock-change small{color:var(--muted);font:9px 'JetBrains Mono',monospace}.stock-price,.stock-change{text-align:right;font-size:11px}.stock-change b,.stock-change small{display:block;font-weight:500}.arrow{color:#aeb5c1;font-size:19px}.empty-state{display:flex;min-height:280px;flex-direction:column;align-items:center;justify-content:center;margin-top:14px;padding:30px 20px;text-align:center}.empty-state>span{color:var(--primary);font-size:30px}.empty-state h2{margin-top:12px;font-size:15px}.empty-state p{max-width:250px;margin:8px 0 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{padding:9px 18px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}
@media (max-width:480px){.history-page{padding-top:0}.history-list{padding:0 10px}.history-row{grid-template-columns:19px minmax(90px,1fr) .7fr .8fr 14px;gap:5px}}
</style>
