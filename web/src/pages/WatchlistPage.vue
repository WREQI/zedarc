<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useWatchlistStore } from '@/stores/watchlist'
import { getMarketStocksSnapshot } from '@/services/market'
import type { StockQuote } from '@/mock/market'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'

const marketStocks = getMarketStocksSnapshot()
const watchlist = useWatchlistStore()
const selectedCodes = watchlist.selectedCodes
const recentCodes = watchlist.recentCodes
const activeGroup = ref<'自选股' | '最近浏览'>('自选股')
const isLoading = ref(true)
const loadError = ref('')

const selectedStocks = computed(() => marketStocks.filter((stock) => selectedCodes.value.includes(stock.code)))
const availableStocks = computed(() => marketStocks.filter((stock) => !selectedCodes.value.includes(stock.code)))
const recentStocks = computed(() => recentCodes.value.map((code) => marketStocks.find((stock) => stock.code === code)).filter((stock): stock is StockQuote => Boolean(stock)))

async function loadWatchlist() {
  isLoading.value = true
  loadError.value = ''
  try {
    await watchlist.hydrate()
    if (!selectedCodes.value.length) marketStocks.slice(0, 2).forEach((stock) => watchlist.toggle(stock.code))
  } catch { loadError.value = '自选数据读取失败，请重试。' } finally { isLoading.value = false }
}
onMounted(loadWatchlist)

function removeStock(code: string) { watchlist.remove(code) }

function addStock(stock: StockQuote) { if (!watchlist.has(stock.code)) watchlist.toggle(stock.code) }

function addNextStock() {
  const next = availableStocks.value[0]
  if (next) addStock(next)
}
function clearRecent() {
  watchlist.clearRecent()
}
</script>

<template>
  <section class="page-heading">
    <div><p class="eyebrow">WATCHLIST / PERSONAL</p><h1>自选股</h1><p class="muted">把重要标的放在一起，持续追踪价格和市场变化。</p></div>
    <button class="primary-button" :disabled="!availableStocks.length" @click="addNextStock">+ 添加股票</button>
  </section>

  <section class="watchlist-tabs"><button :class="{ selected: activeGroup === '自选股' }" @click="activeGroup = '自选股'">自选股 <span>{{ selectedStocks.length }}</span></button><button :class="{ selected: activeGroup === '最近浏览' }" @click="activeGroup = '最近浏览'">最近浏览</button></section>

  <LoadingState v-if="isLoading" label="正在加载自选数据" />
  <ErrorState v-else-if="loadError" title="自选数据加载失败" :message="loadError" :retry="loadWatchlist" />
  <template v-else>
  <section v-if="activeGroup === '自选股' && selectedStocks.length" class="watchlist-grid">
    <article v-for="stock in selectedStocks" :key="stock.code" class="panel watch-card">
      <div class="watch-card-head"><div><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></div><button class="remove-button" :aria-label="`移除${stock.name}`" @click="removeStock(stock.code)">×</button></div>
      <div class="watch-price mono">{{ stock.price }}</div>
      <div class="watch-change mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'"><span>{{ stock.change }}</span><span>{{ stock.percent }}</span></div>
      <div class="watch-chart"><span /><span /><span /><span /><span /><span /><span /></div>
      <div class="watch-card-foot"><span class="muted">成交额</span><span class="mono">{{ stock.volume }}</span><RouterLink class="text-button" :to="`/stock/${stock.code}`">查看详情 →</RouterLink></div>
    </article>
  </section>

  <section v-else-if="activeGroup === '自选股'" class="panel watchlist-empty"><span>☆</span><h2>还没有自选股票</h2><p>从行情列表中添加股票，建立你的观察列表。</p><RouterLink class="primary-button" to="/market">去行情列表</RouterLink></section>
  <section v-else-if="recentStocks.length" class="recent-section"><div class="recent-heading"><h2>最近浏览</h2><button @click="clearRecent">清空</button></div><div class="recent-list"><RouterLink v-for="stock in recentStocks" :key="stock.code" class="panel recent-row" :to="`/stock/${stock.code}`"><span class="recent-icon">◷</span><span><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span><span class="mono recent-price">{{ stock.price }}</span><span class="mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.percent }}</span><span class="result-arrow">›</span></RouterLink></div></section><section v-else class="panel watchlist-empty"><span>◷</span><h2>暂无最近浏览</h2><p>查看股票详情后，最近浏览的标的会显示在这里。</p><RouterLink class="primary-button" to="/market">去行情列表</RouterLink></section>

  <section v-if="selectedStocks.length && activeGroup === '自选股'" class="panel available-panel"><div class="panel-heading"><div><p class="eyebrow">QUICK ADD</p><h2>推荐关注</h2></div><span class="muted">mock data</span></div><div class="available-list"><div v-for="stock in availableStocks" :key="stock.code" class="available-row"><div><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></div><span class="mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.percent }}</span><button class="text-button" @click="addStock(stock)">+ 添加</button></div><p v-if="!availableStocks.length" class="muted">暂无更多推荐标的</p></div></section>
  </template>
</template>

<style scoped>
.watchlist-tabs { display: flex; gap: 22px; border-bottom: 1px solid var(--border); margin-bottom: 18px; }.recent-section { display: grid; gap: 10px; }.recent-heading { display: flex; align-items: center; justify-content: space-between; }.recent-heading h2 { font-size: 14px; }.recent-heading button { color: var(--muted); border: 0; background: transparent; font-size: 10px; }.recent-list { display: grid; gap: 8px; }.recent-row { display: grid; grid-template-columns: 30px 1fr auto auto 18px; gap: 12px; align-items: center; padding: 15px 17px; }.recent-icon { display: grid; place-items: center; width: 26px; height: 26px; color: var(--primary); background: #edf4ff; border-radius: 4px; }.recent-row strong, .recent-row small { display: block; }.recent-row strong { font-size: 12px; }.recent-row small { color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 4px; }.recent-price { font-size: 12px; }.watchlist-tabs button { color: var(--muted); background: transparent; border: 0; border-bottom: 2px solid transparent; padding: 11px 2px; font-size: 12px; }.watchlist-tabs button.selected { color: var(--text); border-color: var(--primary); }.watchlist-tabs span { color: var(--primary); font: 10px 'JetBrains Mono', monospace; margin-left: 4px; }.watchlist-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }.watch-card { padding: 19px; }.watch-card-head, .watch-card-foot, .available-row { display: flex; align-items: center; justify-content: space-between; }.watch-card-head strong, .available-row strong { display: block; font-size: 13px; }.watch-card-head small, .available-row small { display: block; color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 5px; }.remove-button { color: var(--muted); background: transparent; border: 0; font-size: 20px; line-height: 1; }.remove-button:hover { color: var(--up); }.watch-price { font-size: 26px; font-weight: 600; margin: 22px 0 8px; }.watch-change { display: flex; gap: 10px; font-size: 12px; }.watch-chart { height: 48px; display: flex; align-items: flex-end; gap: 6px; margin: 20px 0; border-bottom: 1px solid var(--border); }.watch-chart span { display: block; width: 10%; background: var(--up); opacity: .75; }.watch-chart span:nth-child(1) { height: 32%; }.watch-chart span:nth-child(2) { height: 48%; }.watch-chart span:nth-child(3) { height: 40%; }.watch-chart span:nth-child(4) { height: 70%; }.watch-chart span:nth-child(5) { height: 58%; }.watch-chart span:nth-child(6) { height: 82%; }.watch-chart span:nth-child(7) { height: 100%; }.watch-card-foot { font-size: 10px; gap: 10px; }.watch-card-foot .text-button { margin-left: auto; }.watchlist-empty { min-height: 270px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }.watchlist-empty > span { color: var(--gold); font-size: 30px; margin-bottom: 15px; }.watchlist-empty h2 { font-size: 16px; }.watchlist-empty p { color: var(--muted); font-size: 11px; margin: 8px 0 18px; }.available-panel { padding: 20px; }.available-panel .panel-heading { margin-bottom: 12px; }.available-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }.available-row { background: var(--card-soft); padding: 12px; font-size: 11px; }.available-row .text-button { margin-left: 8px; } 
@media (max-width: 820px) { .watchlist-grid { grid-template-columns: 1fr; }.available-list { grid-template-columns: 1fr; }.recent-row { grid-template-columns: 28px 1fr auto 18px; }.recent-row .recent-price { display: none; } }
</style>
