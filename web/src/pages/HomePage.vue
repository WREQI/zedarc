<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getMarketStocksSnapshot } from '@/services/market'
import type { StockQuote } from '@/mock/market'

const router = useRouter()
const marketStocks = getMarketStocksSnapshot()
const groups = ['自选股', '我的组合', '行业观察']
const watchlistKey = 'zedarc-watchlist'
const activeGroup = ref('自选股')
const sortDescending = ref(false)
const isRefreshing = ref(false)
const managing = ref(false)
const stocks = ref<StockQuote[]>(marketStocks.slice(0, 3))
const groupStocks: Record<string, StockQuote[]> = {
  我的组合: marketStocks.filter((stock) => ['300750', '002594', '600519'].includes(stock.code)),
  行业观察: marketStocks.filter((stock) => ['601012', '688981', '601318'].includes(stock.code)),
}

const visibleStocks = computed(() => {
  const source = activeGroup.value === '自选股' ? stocks.value : groupStocks[activeGroup.value] ?? []
  return [...source].sort((a, b) => {
  const first = Number.parseFloat(a.percent)
  const second = Number.parseFloat(b.percent)
    return sortDescending.value ? second - first : first - second
  })
})

function toggleSort() {
  sortDescending.value = !sortDescending.value
}
function selectGroup(group: string) {
  activeGroup.value = group
  managing.value = false
}

onMounted(() => loadWatchlist())

function loadWatchlist() {
  const stored = window.localStorage.getItem(watchlistKey)
  const codes = stored ? JSON.parse(stored) as string[] : marketStocks.slice(0, 3).map((stock) => stock.code)
  stocks.value = codes.map((code) => marketStocks.find((stock) => stock.code === code)).filter((stock): stock is StockQuote => Boolean(stock))
}
function persistWatchlist() { window.localStorage.setItem(watchlistKey, JSON.stringify(stocks.value.map((stock) => stock.code))) }
function refreshList() {
  if (isRefreshing.value) return
  loadWatchlist()
  isRefreshing.value = true
  window.setTimeout(() => { isRefreshing.value = false }, 500)
}

function removeStock(code: string) {
  stocks.value = stocks.value.filter((stock) => stock.code !== code)
  persistWatchlist()
}
function addStock() {
  const next = marketStocks.find((stock) => !stocks.value.some((item) => item.code === stock.code))
  if (next) { stocks.value = [...stocks.value, next]; persistWatchlist() }
}
function openStock(code: string) { router.push(`/stock/${code}`) }
</script>

<template>
  <section class="portfolio-page">
    <div class="portfolio-header">
      <div class="portfolio-tabs" role="tablist" aria-label="自选组合">
        <button v-for="group in groups" :key="group" :class="{ selected: activeGroup === group }" role="tab" :aria-selected="activeGroup === group" @click="selectGroup(group)">{{ group }}<i v-if="group === '自选股'" /></button>
      </div>
      <div class="portfolio-actions"><button v-if="activeGroup === '自选股'" class="portfolio-action" :class="{ active: managing }" aria-label="管理组合" @click="managing = !managing">{{ managing ? '完成' : '☷' }}</button><button class="portfolio-action refresh-action" :class="{ loading: isRefreshing }" aria-label="刷新" @click="refreshList">↻</button></div>
    </div>

    <section class="portfolio-body">
      <div class="portfolio-caption"><button class="caption-name" @click="toggleSort">股票 <span class="filter-icon">⌄</span></button><div class="caption-columns"><button @click="toggleSort">最新价</button><button class="sort-active" @click="toggleSort">涨跌幅 {{ sortDescending ? '↓' : '↑' }}</button></div></div>
      <div v-if="visibleStocks.length" class="portfolio-list">
        <article v-for="(stock, index) in visibleStocks" :key="stock.code" class="portfolio-row" @click="managing ? undefined : openStock(stock.code)"><button v-if="managing" class="remove-stock" :aria-label="`移除${stock.name}`" @click.stop="removeStock(stock.code)">−</button><div v-else class="row-index">{{ String(index + 1).padStart(2, '0') }}</div><div class="stock-identity" :class="{ 'managed-identity': managing }"><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></div><div class="stock-quote mono"><strong>{{ stock.price }}</strong><small>{{ stock.change }}</small></div><div class="stock-percent mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.percent }}</div><div class="stock-trend"><span v-for="bar in 7" :key="bar" :class="stock.trend === 'up' ? 'trend-up' : 'trend-down'" :style="{ height: `${26 + ((index + bar) % 5) * 13}%` }" /></div></article>
      </div>
      <div v-else class="portfolio-empty"><span>☆</span><strong>暂无自选股票</strong><p>添加股票后，它们会显示在这里。</p></div>
      <button v-if="activeGroup === '自选股'" class="add-stock-row" @click="addStock"><span>＋</span> 添加股票</button>
    </section>

    <div class="portfolio-footer"><span>共 {{ visibleStocks.length }} 只股票</span><span class="refresh-tip">{{ isRefreshing ? '正在刷新…' : '下拉刷新行情' }}</span></div>
  </section>
</template>

<style scoped>
.portfolio-page { min-height: calc(100vh - 164px); background: linear-gradient(180deg, rgba(255, 255, 255, .72), transparent 230px); padding: 16px 0 30px; }.portfolio-header { background: var(--card); border-radius: 8px 8px 0 0; display: flex; align-items: center; justify-content: space-between; padding-right: 16px; border-bottom: 1px solid var(--border); }.portfolio-tabs { display: flex; overflow-x: auto; }.portfolio-tabs::-webkit-scrollbar { display: none; }.portfolio-tabs button { position: relative; flex: none; color: var(--muted); background: transparent; border: 0; padding: 16px 18px; font-size: 14px; }.portfolio-tabs button:first-child { padding-left: 20px; }.portfolio-tabs button.selected { color: var(--text); font-weight: 600; }.portfolio-tabs button.selected::after { content: ''; position: absolute; bottom: 5px; left: 50%; width: 18px; height: 3px; border-radius: 3px; background: var(--primary); transform: translateX(-50%); }.portfolio-tabs button i { position: absolute; width: 5px; height: 5px; top: 12px; right: 10px; border-radius: 50%; background: var(--up); }.portfolio-actions { display: flex; gap: 13px; }.portfolio-action { background: transparent; border: 0; color: var(--muted); font-size: 20px; }.portfolio-action:hover, .portfolio-action.active { color: var(--primary); }.refresh-action.loading { animation: rotate .7s linear infinite; color: var(--primary); }.portfolio-body { background: var(--card); padding: 0 20px 12px; }.portfolio-caption { display: flex; align-items: center; justify-content: space-between; height: 42px; border-bottom: 1px solid var(--border); color: var(--muted); font-size: 11px; }.caption-name, .caption-columns button { color: var(--muted); background: transparent; border: 0; font-size: 11px; }.caption-name { padding: 0; }.filter-icon { color: var(--primary); font-size: 15px; margin-left: 3px; }.caption-columns { display: grid; grid-template-columns: 80px 76px; gap: 0; }.caption-columns button { text-align: right; }.caption-columns .sort-active { color: var(--primary); }.portfolio-row { display: grid; cursor: pointer; grid-template-columns: 28px 1.3fr .8fr .7fr 82px; align-items: center; min-height: 68px; border-bottom: 1px solid var(--border); }.row-index { color: #b3bac7; font: 10px 'JetBrains Mono', monospace; }.remove-stock { width: 20px; height: 20px; display: grid; place-items: center; color: var(--up); border: 0; border-radius: 50%; background: rgba(230,53,53,.09); font-size: 17px; line-height: 1; }.stock-identity strong, .stock-quote strong { display: block; font-size: 13px; }.stock-identity small, .stock-quote small { display: block; color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 5px; }.stock-quote { text-align: right; }.stock-quote strong { font-size: 12px; }.stock-percent { text-align: right; font-size: 12px; }.managed-identity { grid-column: span 1; }.stock-trend { height: 28px; display: flex; justify-content: flex-end; align-items: flex-end; gap: 3px; margin-left: 16px; }.stock-trend span { width: 5px; background: rgba(230, 53, 53, .6); }.stock-trend span.trend-down { background: rgba(28, 170, 60, .6); }.add-stock-row { width: 100%; background: transparent; border: 0; color: var(--primary); font-size: 12px; padding: 16px 0 6px; text-align: left; }.add-stock-row span { font-size: 18px; vertical-align: -1px; margin-right: 4px; }.portfolio-empty { min-height: 230px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--muted); }.portfolio-empty span { color: var(--primary); font-size: 28px; }.portfolio-empty strong { color: var(--text); font-size: 13px; margin-top: 10px; }.portfolio-empty p { font-size: 11px; margin-top: 6px; }.portfolio-footer { display: flex; justify-content: space-between; color: var(--muted); font-size: 10px; padding: 13px 4px; }.refresh-tip { color: #a6adba; }@keyframes rotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }
@media (max-width: 640px) { .portfolio-page { padding-top: 0; }.portfolio-body { padding: 0 14px 12px; }.portfolio-row { grid-template-columns: 22px 1.2fr .75fr .7fr 52px; }.stock-trend { margin-left: 8px; }.portfolio-tabs button { padding-left: 14px; padding-right: 14px; }.caption-columns { grid-template-columns: 66px 64px; } }
</style>
