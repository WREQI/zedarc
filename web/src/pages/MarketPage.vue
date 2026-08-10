<script setup lang="ts">
import { computed, ref } from 'vue'
import { risingStocks, type StockQuote } from '@/mock/market'

const activeTab = ref<'all' | 'rising' | 'watchlist'>('all')
const search = ref('')
const sortDescending = ref(true)

const stocks = computed<StockQuote[]>(() => {
  const source = activeTab.value === 'watchlist' ? risingStocks.slice(0, 2) : risingStocks
  const keyword = search.value.trim().toLowerCase()
  const filtered = keyword
    ? source.filter((stock) => stock.name.toLowerCase().includes(keyword) || stock.code.includes(keyword))
    : source

  return [...filtered].sort((a, b) => {
    const first = Number.parseFloat(a.percent)
    const second = Number.parseFloat(b.percent)
    return sortDescending.value ? second - first : first - second
  })
})

function toggleSort() {
  sortDescending.value = !sortDescending.value
}
</script>

<template>
  <section class="page-heading">
    <div><p class="eyebrow">MARKET / QUOTES</p><h1>行情列表</h1><p class="muted">按市场和涨跌幅筛选关注标的。</p></div>
    <button class="secondary-button">刷新行情 ↻</button>
  </section>

  <section class="panel market-toolbar">
    <div class="market-tabs" role="tablist" aria-label="行情分类">
      <button :class="{ selected: activeTab === 'all' }" @click="activeTab = 'all'">全部股票</button>
      <button :class="{ selected: activeTab === 'rising' }" @click="activeTab = 'rising'">涨幅榜</button>
      <button :class="{ selected: activeTab === 'watchlist' }" @click="activeTab = 'watchlist'">我的自选</button>
    </div>
    <label class="search-field"><span>⌕</span><input v-model="search" type="search" placeholder="搜索股票名称或代码" /></label>
  </section>

  <section class="panel market-table-panel">
    <div class="market-table-head"><div><p class="eyebrow">A-SHARE / MOCK QUOTES</p><h2>{{ activeTab === 'watchlist' ? '我的自选' : '沪深市场' }} <small>{{ stocks.length }} 个标的</small></h2></div><button class="text-button" @click="toggleSort">涨跌幅 {{ sortDescending ? '↓' : '↑' }}</button></div>
    <div class="market-table-grid market-table-labels"><span>股票</span><span>最新价</span><span>涨跌额</span><span>涨跌幅</span><span>成交额</span><span>操作</span></div>
    <div v-for="stock in stocks" :key="stock.code" class="market-table-grid market-table-row"><span class="market-stock"><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span><span class="mono">{{ stock.price }}</span><span class="mono text-up">{{ stock.change }}</span><span class="mono text-up percent-chip">{{ stock.percent }}</span><span class="mono muted">{{ stock.volume }}</span><button class="row-action">详情 →</button></div>
    <div v-if="!stocks.length" class="empty-state"><span>⌕</span><strong>没有找到匹配股票</strong><p>试试其他名称或股票代码。</p></div>
  </section>
</template>

<style scoped>
.market-toolbar { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; margin-bottom: 16px; gap: 16px; }
.market-tabs { display: flex; gap: 4px; }
.market-tabs button { color: var(--muted); border: 0; background: transparent; padding: 9px 13px; font-size: 12px; border-bottom: 2px solid transparent; }
.market-tabs button:hover, .market-tabs button.selected { color: var(--text); border-color: var(--primary); }
.search-field { display: flex; align-items: center; gap: 8px; border: 1px solid var(--border); background: var(--bg); padding: 7px 10px; width: 230px; color: var(--muted); }
.search-field input { border: 0; outline: 0; color: var(--text); background: transparent; width: 100%; font-size: 11px; }
.market-table-panel { padding: 22px; }
.market-table-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
.market-table-head h2 { font-size: 16px; }.market-table-head h2 small { color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-left: 8px; }
.market-table-grid { display: grid; grid-template-columns: 1.7fr .9fr .9fr .9fr .9fr .7fr; gap: 14px; align-items: center; }
.market-table-labels { color: var(--muted); font-size: 10px; padding-bottom: 10px; border-bottom: 1px solid var(--border); }.market-table-row { min-height: 64px; border-bottom: 1px solid hsl(220 15% 17%); font-size: 12px; }.market-table-row:last-of-type { border-bottom: 0; }
.market-stock { display: grid; gap: 5px; }.market-stock small { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.percent-chip { background: hsl(0 75% 55% / .1); padding: 5px 7px; width: fit-content; }.row-action { background: transparent; border: 0; color: var(--primary); font-size: 11px; text-align: left; }.empty-state { padding: 70px 20px; text-align: center; color: var(--muted); }.empty-state span { display: block; color: var(--primary); font-size: 28px; margin-bottom: 12px; }.empty-state strong { color: var(--text); font-size: 13px; }.empty-state p { font-size: 11px; margin-top: 7px; }
@media (max-width: 720px) { .market-toolbar { align-items: stretch; flex-direction: column; }.search-field { width: 100%; }.market-table-panel { padding: 16px; overflow-x: auto; }.market-table-grid { min-width: 680px; } }
</style>
