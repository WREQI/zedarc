<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { risingStocks, type StockQuote } from '@/mock/market'

const storageKey = 'zedarc-watchlist'
const selectedCodes = ref<string[]>([])
const activeGroup = ref<'自选股' | '最近浏览'>('自选股')

const selectedStocks = computed(() => risingStocks.filter((stock) => selectedCodes.value.includes(stock.code)))
const availableStocks = computed(() => risingStocks.filter((stock) => !selectedCodes.value.includes(stock.code)))

onMounted(() => {
  const stored = window.localStorage.getItem(storageKey)
  selectedCodes.value = stored ? JSON.parse(stored) : risingStocks.slice(0, 2).map((stock) => stock.code)
})

function persist() {
  window.localStorage.setItem(storageKey, JSON.stringify(selectedCodes.value))
}

function removeStock(code: string) {
  selectedCodes.value = selectedCodes.value.filter((item) => item !== code)
  persist()
}

function addStock(stock: StockQuote) {
  selectedCodes.value = [...selectedCodes.value, stock.code]
  persist()
}

function addNextStock() {
  const next = availableStocks.value[0]
  if (next) addStock(next)
}
</script>

<template>
  <section class="page-heading">
    <div><p class="eyebrow">WATCHLIST / PERSONAL</p><h1>自选股</h1><p class="muted">把重要标的放在一起，持续追踪价格和市场变化。</p></div>
    <button class="primary-button" :disabled="!availableStocks.length" @click="addNextStock">+ 添加股票</button>
  </section>

  <section class="watchlist-tabs"><button :class="{ selected: activeGroup === '自选股' }" @click="activeGroup = '自选股'">自选股 <span>{{ selectedStocks.length }}</span></button><button :class="{ selected: activeGroup === '最近浏览' }" @click="activeGroup = '最近浏览'">最近浏览</button></section>

  <section v-if="activeGroup === '自选股' && selectedStocks.length" class="watchlist-grid">
    <article v-for="stock in selectedStocks" :key="stock.code" class="panel watch-card">
      <div class="watch-card-head"><div><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></div><button class="remove-button" :aria-label="`移除${stock.name}`" @click="removeStock(stock.code)">×</button></div>
      <div class="watch-price mono">{{ stock.price }}</div>
      <div class="watch-change text-up mono"><span>{{ stock.change }}</span><span>{{ stock.percent }}</span></div>
      <div class="watch-chart"><span /><span /><span /><span /><span /><span /><span /></div>
      <div class="watch-card-foot"><span class="muted">成交额</span><span class="mono">{{ stock.volume }}</span><button class="text-button">查看详情 →</button></div>
    </article>
  </section>

  <section v-else-if="activeGroup === '自选股'" class="panel watchlist-empty"><span>☆</span><h2>还没有自选股票</h2><p>从行情列表中添加股票，建立你的观察列表。</p><RouterLink class="primary-button" to="/market">去行情列表</RouterLink></section>
  <section v-else class="panel watchlist-empty"><span>◷</span><h2>暂无最近浏览</h2><p>查看股票详情后，最近浏览的标的会显示在这里。</p></section>

  <section v-if="selectedStocks.length && activeGroup === '自选股'" class="panel available-panel"><div class="panel-heading"><div><p class="eyebrow">QUICK ADD</p><h2>推荐关注</h2></div><span class="muted">mock data</span></div><div class="available-list"><div v-for="stock in availableStocks" :key="stock.code" class="available-row"><div><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></div><span class="mono text-up">{{ stock.percent }}</span><button class="text-button" @click="addStock(stock)">+ 添加</button></div><p v-if="!availableStocks.length" class="muted">暂无更多推荐标的</p></div></section>
</template>

<style scoped>
.watchlist-tabs { display: flex; gap: 22px; border-bottom: 1px solid var(--border); margin-bottom: 18px; }.watchlist-tabs button { color: var(--muted); background: transparent; border: 0; border-bottom: 2px solid transparent; padding: 11px 2px; font-size: 12px; }.watchlist-tabs button.selected { color: var(--text); border-color: var(--primary); }.watchlist-tabs span { color: var(--primary); font: 10px 'JetBrains Mono', monospace; margin-left: 4px; }.watchlist-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 16px; }.watch-card { padding: 19px; }.watch-card-head, .watch-card-foot, .available-row { display: flex; align-items: center; justify-content: space-between; }.watch-card-head strong, .available-row strong { display: block; font-size: 13px; }.watch-card-head small, .available-row small { display: block; color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 5px; }.remove-button { color: var(--muted); background: transparent; border: 0; font-size: 20px; line-height: 1; }.remove-button:hover { color: var(--up); }.watch-price { font-size: 26px; font-weight: 600; margin: 22px 0 8px; }.watch-change { display: flex; gap: 10px; font-size: 12px; }.watch-chart { height: 48px; display: flex; align-items: flex-end; gap: 6px; margin: 20px 0; border-bottom: 1px solid var(--border); }.watch-chart span { display: block; width: 10%; background: var(--up); opacity: .75; }.watch-chart span:nth-child(1) { height: 32%; }.watch-chart span:nth-child(2) { height: 48%; }.watch-chart span:nth-child(3) { height: 40%; }.watch-chart span:nth-child(4) { height: 70%; }.watch-chart span:nth-child(5) { height: 58%; }.watch-chart span:nth-child(6) { height: 82%; }.watch-chart span:nth-child(7) { height: 100%; }.watch-card-foot { font-size: 10px; gap: 10px; }.watch-card-foot .text-button { margin-left: auto; }.watchlist-empty { min-height: 270px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }.watchlist-empty > span { color: var(--gold); font-size: 30px; margin-bottom: 15px; }.watchlist-empty h2 { font-size: 16px; }.watchlist-empty p { color: var(--muted); font-size: 11px; margin: 8px 0 18px; }.available-panel { padding: 20px; }.available-panel .panel-heading { margin-bottom: 12px; }.available-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }.available-row { background: var(--card-soft); padding: 12px; font-size: 11px; }.available-row .text-button { margin-left: 8px; } 
@media (max-width: 820px) { .watchlist-grid { grid-template-columns: 1fr; }.available-list { grid-template-columns: 1fr; } }
</style>
