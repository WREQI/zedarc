<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getMarketRankings } from '@/services/market'
import type { MarketRankQuote } from '@/services/market-types'

type RankTab = '涨幅榜' | '跌幅榜' | '成交额' | '换手率' | '振幅' | '量比' | '涨停' | '跌停'

const markets = ['沪深市场', '沪深港通', '美股']
const rankTabs: RankTab[] = ['涨幅榜', '跌幅榜', '成交额', '换手率', '振幅', '量比', '涨停', '跌停']
const supportedRanks: RankTab[] = rankTabs

const activeMarket = ref(markets[0])
const activeRank = ref<RankTab>('涨幅榜')
const keyword = ref('')
const stocks = ref<MarketRankQuote[]>([])
const loading = ref(true)
const refreshing = ref(false)
const error = ref('')
const updatedAt = ref('--:--:--')

function numeric(value: string) {
  const parsed = Number.parseFloat(value.replace(/[,%+亿万]/g, ''))
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed
}
function apiRankType(rank: RankTab) { return ({ '涨幅榜': 'gainers', '跌幅榜': 'losers', '成交额': 'amount', '换手率': 'turnoverRate', '振幅': 'amplitude', '量比': 'volumeRatio', '涨停': 'limitUp', '跌停': 'limitDown' })[rank] }

const isRankSupported = computed(() => supportedRanks.includes(activeRank.value))

const filteredStocks = computed(() => stocks.value)

const emptyTitle = computed(() => keyword.value.trim() ? '没有找到匹配标的' : '暂无排行数据')
const emptyMessage = computed(() => keyword.value.trim() ? '请尝试其他名称或代码。' : '当前数据源暂未返回内容，请稍后重试。')

function updateTime() {
  updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour12: false })
}

async function loadQuotes(isRefresh = false) {
  if (isRefresh) refreshing.value = true
  else loading.value = true
  error.value = ''

  try {
    stocks.value = await getMarketRankings(apiRankType(activeRank.value), keyword.value)
    updateTime()
  } catch {
    error.value = '行情数据暂时无法加载，请稍后重试。'
  } finally {
    loading.value = false
    refreshing.value = false
  }
}

function switchMarket(market: string) {
  activeMarket.value = market
  keyword.value = ''
  void loadQuotes()
}
function switchRank(rank: RankTab) {
  activeRank.value = rank
  void loadQuotes()
}

function refresh() {
  if (!refreshing.value) void loadQuotes(true)
}

onMounted(() => void loadQuotes())
</script>

<template>
  <section class="market-rank-page">
    <header class="rank-header">
      <div>
        <p class="eyebrow">MARKET / RANKING CENTER</p>
        <h1>行情排行中心</h1>
        <p class="rank-subtitle">实时筛选市场热门标的，快速发现涨跌与成交活跃度。</p>
      </div>
      <button class="refresh-button" :class="{ spinning: refreshing }" :disabled="refreshing" type="button" @click="refresh">
        <span aria-hidden="true">↻</span> 刷新
      </button>
    </header>

    <section class="market-switcher" aria-label="市场切换">
      <span class="switcher-label">市场</span>
      <div class="market-options">
        <button v-for="market in markets" :key="market" type="button" :class="{ active: activeMarket === market }" @click="switchMarket(market)">
          {{ market }}
        </button>
      </div>
      <span class="data-time">更新于 {{ updatedAt }}</span>
    </section>

    <section class="rank-panel panel">
      <div class="panel-top">
        <div>
          <p class="eyebrow">{{ activeMarket }} / QUOTE BOARD</p>
          <h2>排行榜</h2>
        </div>
        <label class="search-box">
          <span aria-hidden="true">⌕</span>
          <input v-model="keyword" type="search" placeholder="搜索名称或代码" aria-label="搜索名称或代码" />
        </label>
      </div>

      <nav class="rank-tabs" aria-label="排行类型" role="tablist">
        <button v-for="tab in rankTabs" :key="tab" type="button" role="tab" :aria-selected="activeRank === tab" :class="{ active: activeRank === tab }" @click="switchRank(tab)">
          {{ tab }}
        </button>
      </nav>

      <LoadingState v-if="loading" label="正在加载行情排行" />
      <ErrorState v-else-if="error" title="行情加载失败" :message="error" :retry="() => loadQuotes()" />
      <template v-else-if="isRankSupported">
        <div class="table-wrap">
          <div class="quote-row quote-head">
            <span>排名 / 名称</span><span>最新价</span><span>涨跌额</span><span>涨跌幅</span><span>{{ activeRank === '成交额' ? '成交额' : activeRank === '换手率' ? '换手率' : activeRank === '振幅' ? '振幅' : activeRank === '量比' ? '量比' : activeRank === '涨停' || activeRank === '跌停' ? '状态' : '成交量' }}</span>
          </div>
          <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" class="quote-row quote-item" :to="`/stock/${stock.code}`">
            <span class="stock-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
            <span class="mono">{{ stock.price }}</span>
            <span class="mono" :class="stock.trend === 'up' ? 'text-up' : 'text-down'">{{ stock.change }}</span>
            <span class="mono change-pill" :class="stock.trend === 'up' ? 'rise' : 'fall'">{{ stock.percent }}</span>
            <span class="mono volume">{{ activeRank === '成交额' ? stock.amount : activeRank === '换手率' ? stock.turnoverRate : activeRank === '振幅' ? stock.amplitude : activeRank === '量比' ? stock.volumeRatio : activeRank === '涨停' || activeRank === '跌停' ? (stock.limitStatus === 'unsupported' ? '不支持' : stock.limitStatus === 'up' ? '涨停' : stock.limitStatus === 'down' ? '跌停' : '—') : stock.volume }}</span>
          </RouterLink>
        </div>
        <EmptyState v-if="!filteredStocks.length" :title="emptyTitle" :message="emptyMessage" />
      </template>
      <EmptyState v-else title="当前数据源暂未提供该指标" message="该字段由上游行情源提供；无法提供时 API 返回 null/unsupported，不会使用估算值。" icon="—" />
    </section>

    <footer class="rank-footer"><span class="mono">{{ isRankSupported ? filteredStocks.length : 0 }}</span> 个标的 · 数据来自当前行情服务</footer>
  </section>
</template>

<style scoped>
.market-rank-page { width: min(1080px, 100%); margin: 0 auto; color: var(--text); }
.rank-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 22px; }
.rank-header h1 { margin: 5px 0 0; font-size: 26px; letter-spacing: -.04em; }
.rank-subtitle { margin-top: 9px; color: var(--muted); font-size: 12px; }
.eyebrow { margin: 0; color: var(--primary); font: 500 10px 'JetBrains Mono', monospace; letter-spacing: .12em; }
.refresh-button { display: inline-flex; align-items: center; gap: 5px; padding: 8px 12px; color: var(--primary); background: var(--card); border: 1px solid var(--border); border-radius: 5px; font-size: 12px; }
.refresh-button span { font-size: 17px; line-height: 1; }.refresh-button.spinning span { animation: rotate .7s linear infinite; }
.market-switcher { display: flex; align-items: center; gap: 12px; min-height: 50px; padding: 6px 14px; background: var(--card); border: 1px solid var(--border); border-radius: 6px; }
.switcher-label { color: var(--muted); font-size: 11px; }.market-options { display: flex; gap: 4px; }.market-options button { padding: 7px 12px; color: var(--muted); background: transparent; border: 0; border-radius: 4px; font-size: 12px; }.market-options button.active { color: var(--primary); background: #edf4ff; font-weight: 600; }.data-time { margin-left: auto; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }
.rank-panel { margin-top: 12px; padding: 18px 20px 6px; overflow: hidden; }.panel-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; }.panel-top h2 { margin-top: 5px; font-size: 17px; }.search-box { display: flex; align-items: center; gap: 7px; width: 220px; height: 34px; padding: 0 10px; color: var(--muted); background: var(--bg); border: 1px solid var(--border); border-radius: 5px; }.search-box input { width: 100%; min-width: 0; color: var(--text); background: transparent; border: 0; outline: 0; font-size: 11px; }
.rank-tabs { display: flex; gap: 25px; margin-top: 16px; overflow-x: auto; border-bottom: 1px solid var(--border); scrollbar-width: none; }.rank-tabs::-webkit-scrollbar { display: none; }.rank-tabs button { position: relative; flex: 0 0 auto; padding: 10px 0 9px; color: var(--muted); background: transparent; border: 0; font-size: 12px; }.rank-tabs button.active { color: var(--text); font-weight: 600; }.rank-tabs button.active::after { position: absolute; right: 0; bottom: -1px; left: 0; height: 2px; background: var(--primary); content: ''; }
.table-wrap { overflow-x: auto; }.quote-row { display: grid; grid-template-columns: minmax(170px, 1.7fr) .8fr .8fr .85fr .8fr; gap: 12px; align-items: center; min-width: 620px; }.quote-head { min-height: 42px; color: var(--muted); border-bottom: 1px solid var(--border); font-size: 10px; }.quote-head span:not(:first-child), .quote-item > span:not(:first-child) { text-align: right; }.quote-item { min-height: 62px; border-bottom: 1px solid var(--border); font-size: 11px; transition: background-color .15s ease; }.quote-item:hover { background: #f8faff; }.stock-name { display: grid; grid-template-columns: 30px 1fr; min-width: 0; }.stock-name b { grid-row: span 2; color: #b5bdca; font: 10px 'JetBrains Mono', monospace; }.stock-name strong, .stock-name small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.stock-name strong { font-size: 12px; }.stock-name small { grid-column: 2; margin-top: 4px; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.change-pill { justify-self: end; padding: 4px 5px; font-weight: 600; }.rise { color: var(--up); background: rgba(230, 53, 53, .07); }.fall { color: var(--down); background: rgba(28, 170, 60, .08); }.text-up { color: var(--up); }.text-down { color: var(--down); }.volume { color: var(--muted); }.rank-footer { padding: 12px 0 2px; color: var(--muted); text-align: center; font-size: 10px; }.rank-footer .mono { color: var(--primary); }
@keyframes rotate { to { transform: rotate(360deg); } }
@media (max-width: 620px) { .market-rank-page { width: 100%; }.rank-header { align-items: flex-start; margin-bottom: 16px; }.rank-header h1 { font-size: 21px; }.rank-subtitle { max-width: 260px; line-height: 1.5; }.refresh-button { flex: 0 0 auto; }.market-switcher { align-items: flex-start; flex-wrap: wrap; gap: 7px 10px; padding: 9px 11px; }.market-options { width: 100%; order: 2; overflow-x: auto; }.market-options button { padding: 7px 10px; }.data-time { margin-left: auto; }.rank-panel { margin-top: 10px; padding: 13px 11px 4px; }.panel-top { align-items: stretch; flex-direction: column; gap: 10px; }.search-box { width: 100%; }.rank-tabs { gap: 20px; margin-top: 12px; }.rank-tabs button { font-size: 11px; }.quote-row { grid-template-columns: minmax(145px, 1.7fr) .72fr .76fr .8fr .7fr; gap: 7px; }.quote-item { min-height: 56px; }.quote-head { min-height: 38px; font-size: 9px; }.stock-name { grid-template-columns: 25px 1fr; }.stock-name strong { font-size: 11px; }.stock-name small { font-size: 9px; }.change-pill { padding: 3px 4px; } }
</style>
