<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useWatchlistStore } from '@/stores/watchlist'
import { getMarketStocksSnapshot } from '@/services/market'
import type { StockQuote } from '@/services/market-types'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'

const marketStocks = getMarketStocksSnapshot()
const watchlist = useWatchlistStore()
const selectedCodes = watchlist.selectedCodes
const recentCodes = watchlist.recentCodes
const activeGroup = ref<'自选股' | '最近浏览'>('自选股')
const activeFilter = ref<'全部' | '上涨' | '下跌'>('全部')
const isLoading = ref(true)
const loadError = ref('')

const selectedStocks = computed(() => selectedCodes.value
  .map((code) => marketStocks.find((stock) => stock.code === code))
  .filter((stock): stock is StockQuote => Boolean(stock)))
const recentStocks = computed(() => recentCodes.value
  .map((code) => marketStocks.find((stock) => stock.code === code))
  .filter((stock): stock is StockQuote => Boolean(stock)))
const currentStocks = computed(() => activeGroup.value === '自选股' ? selectedStocks.value : recentStocks.value)
const filteredStocks = computed(() => {
  if (activeFilter.value === '上涨') return currentStocks.value.filter((stock) => stock.trend === 'up')
  if (activeFilter.value === '下跌') return currentStocks.value.filter((stock) => stock.trend === 'down')
  return currentStocks.value
})

async function loadWatchlist() {
  isLoading.value = true
  loadError.value = ''
  try {
    await watchlist.hydrate()
  } catch {
    loadError.value = '自选数据读取失败，请重试。'
  } finally {
    isLoading.value = false
  }
}

onMounted(loadWatchlist)

function removeStock(code: string) {
  watchlist.remove(code)
}

function clearRecent() {
  watchlist.clearRecent()
}

function switchGroup(group: '自选股' | '最近浏览') {
  activeGroup.value = group
  activeFilter.value = '全部'
}
</script>

<template>
  <section class="watchlist-page">
    <header class="watchlist-header">
      <div>
        <p class="eyebrow">MARKET / PERSONAL</p>
        <h1>自选</h1>
      </div>
      <RouterLink class="header-action" to="/market" aria-label="添加自选股票">＋ 添加</RouterLink>
    </header>

    <nav class="watchlist-groups" aria-label="自选分组">
      <button :class="{ selected: activeGroup === '自选股' }" @click="switchGroup('自选股')">
        自选股 <b>{{ selectedStocks.length }}</b>
      </button>
      <button :class="{ selected: activeGroup === '最近浏览' }" @click="switchGroup('最近浏览')">
        最近浏览 <b>{{ recentStocks.length }}</b>
      </button>
    </nav>

    <LoadingState v-if="isLoading" label="正在加载自选数据" />
    <ErrorState v-else-if="loadError" title="自选数据加载失败" :message="loadError" :retry="loadWatchlist" />
    <template v-else>
      <div class="watchlist-toolbar">
        <div class="quote-filters" aria-label="行情筛选">
          <button v-for="filter in ['全部', '上涨', '下跌']" :key="filter" :class="{ active: activeFilter === filter }" @click="activeFilter = filter as typeof activeFilter">
            {{ filter }}
          </button>
        </div>
        <button v-if="activeGroup === '最近浏览' && recentStocks.length" class="clear-button" @click="clearRecent">清空记录</button>
      </div>

      <section v-if="filteredStocks.length" class="quote-board panel" aria-label="股票行情列表">
        <div class="quote-heading"><span>名称 / 代码</span><span>最新价</span><span>涨跌幅</span><span>成交额</span><span /></div>
        <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" class="quote-row" :to="`/stock/${stock.code}`">
          <span class="quote-name"><i>{{ String(index + 1).padStart(2, '0') }}</i><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
          <span class="mono quote-price">{{ stock.price }}</span>
          <span class="quote-change mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'"><b>{{ stock.percent }}</b><small>{{ stock.change }}</small></span>
          <span class="mono quote-volume">{{ stock.volume }}</span>
          <span class="quote-actions">
            <button v-if="activeGroup === '自选股'" class="remove-button" :aria-label="`移除${stock.name}`" @click.prevent.stop="removeStock(stock.code)">×</button>
            <span class="row-arrow">›</span>
          </span>
        </RouterLink>
      </section>

      <section v-else class="watchlist-empty panel">
        <span class="empty-icon">{{ activeGroup === '自选股' ? '☆' : '◷' }}</span>
        <h2>{{ activeGroup === '自选股' ? '还没有自选股票' : '暂无最近浏览' }}</h2>
        <p v-if="activeFilter !== '全部'">当前筛选下暂无标的，换个筛选条件试试。</p>
        <p v-else-if="activeGroup === '自选股'">从行情列表添加股票，建立你的观察列表。</p>
        <p v-else>查看股票详情后，最近浏览的标的会显示在这里。</p>
        <RouterLink class="primary-button" :to="activeGroup === '自选股' ? '/market' : '/market'">去行情列表</RouterLink>
      </section>

      <p v-if="filteredStocks.length" class="watchlist-footer">共 {{ filteredStocks.length }} 个标的 · 行情数据仅供参考</p>
    </template>
  </section>
</template>

<style scoped>
.watchlist-page { min-height: calc(100vh - 120px); padding: 12px 0 24px; }
.watchlist-header { display: flex; align-items: center; justify-content: space-between; padding: 0 4px 14px; }
.watchlist-header h1 { margin-top: 3px; font-size: 22px; letter-spacing: .02em; }
.header-action { color: var(--primary); font-size: 12px; font-weight: 600; }
.watchlist-groups { display: flex; gap: 26px; border-bottom: 1px solid var(--border); }
.watchlist-groups button { position: relative; padding: 12px 2px 11px; color: var(--muted); border: 0; background: transparent; font-size: 13px; }
.watchlist-groups button.selected { color: var(--text); font-weight: 600; }
.watchlist-groups button.selected::after { position: absolute; right: 0; bottom: -1px; left: 0; height: 2px; border-radius: 2px; background: var(--primary); content: ''; }
.watchlist-groups b { margin-left: 4px; color: var(--primary); font: 10px 'JetBrains Mono', monospace; }
.watchlist-toolbar { display: flex; align-items: center; justify-content: space-between; min-height: 48px; }
.quote-filters { display: flex; gap: 5px; }
.quote-filters button { padding: 6px 11px; color: var(--muted); border: 0; border-radius: 3px; background: transparent; font-size: 11px; }
.quote-filters button.active { color: var(--primary); background: #edf4ff; font-weight: 600; }
.clear-button { padding: 6px 0; color: var(--muted); border: 0; background: transparent; font-size: 11px; }
.quote-board { overflow: hidden; padding: 0 14px; border-radius: 4px; }
.quote-heading, .quote-row { display: grid; grid-template-columns: minmax(130px, 1.6fr) .85fr .85fr .85fr 24px; gap: 8px; align-items: center; }
.quote-heading { min-height: 34px; color: var(--muted); border-bottom: 1px solid var(--border); font-size: 10px; }
.quote-heading span:not(:first-child) { text-align: right; }
.quote-row { min-height: 68px; color: var(--text); border-bottom: 1px solid var(--border); font-size: 12px; }
.quote-row:last-child { border-bottom: 0; }
.quote-name { display: grid; grid-template-columns: 22px 1fr; gap: 1px 0; align-items: center; min-width: 0; }
.quote-name i { grid-row: span 2; color: #b3bac7; font: normal 9px 'JetBrains Mono', monospace; }
.quote-name strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
.quote-name small, .quote-change small { color: var(--muted); font: 9px 'JetBrains Mono', monospace; }
.quote-price, .quote-volume, .quote-change { text-align: right; font-size: 11px; }
.quote-change b, .quote-change small { display: block; font-weight: 500; }
.quote-actions { display: flex; align-items: center; justify-content: flex-end; gap: 3px; }
.remove-button { padding: 3px; color: var(--muted); border: 0; background: transparent; font-size: 18px; line-height: 1; }
.remove-button:hover { color: var(--down); }
.row-arrow { color: #aeb5c1; font-size: 18px; }
.watchlist-empty { display: flex; min-height: 280px; flex-direction: column; align-items: center; justify-content: center; padding: 30px 20px; text-align: center; }
.empty-icon { color: var(--primary); font-size: 30px; }
.watchlist-empty h2 { margin-top: 12px; font-size: 15px; }
.watchlist-empty p { max-width: 250px; margin: 8px 0 18px; color: var(--muted); font-size: 11px; line-height: 1.7; }
.watchlist-footer { margin: 13px 0; color: var(--muted); text-align: center; font-size: 10px; }
@media (max-width: 560px) {
  .watchlist-page { padding-top: 0; }
  .quote-board { margin: 0 -1px; padding: 0 10px; }
  .quote-heading, .quote-row { grid-template-columns: minmax(112px, 1.4fr) .8fr .8fr 22px; gap: 5px; }
  .quote-heading span:nth-child(4), .quote-volume { display: none; }
  .quote-row { min-height: 64px; }
  .quote-price { font-size: 12px; }
  .quote-change { font-size: 11px; }
}
</style>
