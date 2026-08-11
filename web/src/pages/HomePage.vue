<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import EmptyState from '@/components/EmptyState.vue'
import { getIndexQuotes, getMarketStocks } from '@/services/market'
import type { IndexQuote, StockQuote } from '@/services/market-types'
import { useWatchlistStore } from '@/stores/watchlist'

type Group = '自选股' | '最近浏览'
type Filter = '全部' | '上涨' | '下跌'

const watchlist = useWatchlistStore()
const indices = ref<IndexQuote[]>([])
const stocks = ref<StockQuote[]>([])
const activeGroup = ref<Group>('自选股')
const activeFilter = ref<Filter>('全部')
const isEditing = ref(false)
const selectedForDelete = ref<string[]>([])
const isLoading = ref(true)
const isRefreshing = ref(false)
const loadError = ref('')
const updatedAt = ref('—')

const stockMap = computed(() => new Map(stocks.value.map((stock) => [stock.code, stock])))
const selectedStocks = computed(() => watchlist.selectedCodes.value.map((code) => stockMap.value.get(code)).filter((stock): stock is StockQuote => Boolean(stock)))
const recentStocks = computed(() => watchlist.recentCodes.value.map((code) => stockMap.value.get(code)).filter((stock): stock is StockQuote => Boolean(stock)))
const currentStocks = computed(() => activeGroup.value === '自选股' ? selectedStocks.value : recentStocks.value)
const filteredStocks = computed(() => activeFilter.value === '上涨' ? currentStocks.value.filter((stock) => stock.trend === 'up') : activeFilter.value === '下跌' ? currentStocks.value.filter((stock) => stock.trend === 'down') : currentStocks.value)
const featuredIndices = computed(() => indices.value.slice(0, 3))
const marketDirection = computed(() => {
  const rising = indices.value.filter((index) => index.trend === 'up').length
  if (!indices.value.length) return '暂无市场摘要'
  return rising >= Math.ceil(indices.value.length / 2) ? '市场偏强' : '市场偏弱'
})
const allSelected = computed(() => filteredStocks.value.length > 0 && filteredStocks.value.every((stock) => selectedForDelete.value.includes(stock.code)))

async function loadHome() {
  isLoading.value = true
  loadError.value = ''
  try {
    const [indexData, stockData] = await Promise.all([getIndexQuotes(), getMarketStocks(), watchlist.hydrate()])
    indices.value = indexData
    stocks.value = stockData
    updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
  } catch {
    loadError.value = '自选数据读取失败，请重试。'
  } finally {
    isLoading.value = false
  }
}

function refresh() {
  if (isRefreshing.value) return
  isRefreshing.value = true
  loadHome().finally(() => { isRefreshing.value = false })
}

function changeGroup(group: Group) {
  activeGroup.value = group
  activeFilter.value = '全部'
  selectedForDelete.value = []
}
function changeFilter(filter: Filter) {
  activeFilter.value = filter
  selectedForDelete.value = []
}
function toggleEdit() {
  isEditing.value = !isEditing.value
  selectedForDelete.value = []
}
function toggleSelected(code: string) {
  selectedForDelete.value = selectedForDelete.value.includes(code) ? selectedForDelete.value.filter((item) => item !== code) : [...selectedForDelete.value, code]
}
function toggleAll() {
  selectedForDelete.value = allSelected.value ? [] : filteredStocks.value.map((stock) => stock.code)
}
function removeSelected() {
  selectedForDelete.value.forEach((code) => watchlist.remove(code))
  selectedForDelete.value = []
  isEditing.value = false
}
function clearRecent() {
  watchlist.clearRecent()
  selectedForDelete.value = []
}
function quoteClass(stock: StockQuote | IndexQuote) {
  return stock.trend === 'up' ? 'text-up' : 'text-down'
}

onMounted(loadHome)
</script>

<template>
  <section class="home-page">
    <header class="page-head">
      <div>
        <p class="eyebrow">MARKET · 自选</p>
        <h1>自选</h1>
        <p class="subtitle">关注的股票与最近浏览</p>
      </div>
      <div class="head-actions">
        <button class="icon-action" :class="{ spinning: isRefreshing }" :disabled="isRefreshing" aria-label="刷新行情" @click="refresh">↻</button>
        <button class="edit-action" @click="toggleEdit">{{ isEditing ? '完成' : '编辑' }}</button>
      </div>
    </header>

    <LoadingState v-if="isLoading" label="正在加载自选数据" />
    <ErrorState v-else-if="loadError" title="自选数据加载失败" :message="loadError" :retry="loadHome" />
    <template v-else>
      <section class="market-summary" aria-label="行情摘要">
        <div class="summary-top"><span><i /> 今日行情</span><small>更新于 {{ updatedAt }}</small></div>
        <div class="summary-lead"><strong>{{ marketDirection }}</strong><span>主要指数表现</span></div>
        <div class="index-strip">
          <div v-for="index in featuredIndices" :key="index.code" class="index-card">
            <span>{{ index.name }}</span><strong class="mono">{{ index.value }}</strong><b class="mono" :class="quoteClass(index)">{{ index.percent }}</b>
          </div>
          <div v-if="!featuredIndices.length" class="summary-empty">暂无指数数据</div>
        </div>
      </section>

      <nav class="group-tabs" aria-label="自选分组">
        <button :class="{ active: activeGroup === '自选股' }" @click="changeGroup('自选股')">自选股 <b>{{ selectedStocks.length }}</b></button>
        <button :class="{ active: activeGroup === '最近浏览' }" @click="changeGroup('最近浏览')">最近浏览 <b>{{ recentStocks.length }}</b></button>
        <RouterLink to="/market" class="add-link">＋ 添加自选</RouterLink>
      </nav>

      <section class="quote-section">
        <div class="section-bar">
          <div class="filters">
            <button v-for="filter in ['全部', '上涨', '下跌'] as Filter[]" :key="filter" :class="{ active: activeFilter === filter }" @click="changeFilter(filter)">{{ filter }}</button>
          </div>
          <button v-if="activeGroup === '最近浏览' && recentStocks.length" class="clear-link" @click="clearRecent">清空记录</button>
        </div>
        <div v-if="isEditing && filteredStocks.length" class="batch-bar"><button @click="toggleAll">{{ allSelected ? '取消全选' : '全选' }}</button><span>已选 {{ selectedForDelete.length }} 项</span><button class="danger-link" :disabled="!selectedForDelete.length" @click="removeSelected">删除</button></div>
        <div v-if="filteredStocks.length" class="quote-list">
          <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" class="quote-row" :to="`/stock/${stock.code}`">
            <button v-if="isEditing" class="check-button" :class="{ checked: selectedForDelete.includes(stock.code) }" :aria-label="`选择${stock.name}`" @click.prevent.stop="toggleSelected(stock.code)">{{ selectedForDelete.includes(stock.code) ? '✓' : '' }}</button>
            <span class="stock-name"><i>{{ String(index + 1).padStart(2, '0') }}</i><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
            <span class="stock-price mono">{{ stock.price }}</span>
            <span class="stock-change mono" :class="quoteClass(stock)"><b>{{ stock.percent }}</b><small>{{ stock.change }}</small></span>
            <span class="row-arrow">›</span>
          </RouterLink>
        </div>
        <EmptyState v-else :title="activeGroup === '自选股' ? '还没有自选股票' : '暂无最近浏览'" :message="activeGroup === '自选股' ? '从行情列表添加股票，建立你的观察列表。' : '查看股票详情后，最近浏览的标的会显示在这里。'" :icon="activeGroup === '自选股' ? '☆' : '◷'" />
      </section>
      <RouterLink class="market-link" to="/market">去行情列表查看更多股票 <span>›</span></RouterLink>
      <p class="disclaimer">行情数据仅供参考 · 投资有风险，入市需谨慎</p>
    </template>
  </section>
</template>

<style scoped>
.home-page{width:min(760px,100%);margin:0 auto;padding:0 0 28px}.page-head{display:flex;align-items:flex-start;justify-content:space-between;padding:2px 2px 16px}.eyebrow{color:var(--primary);font:10px 'JetBrains Mono',monospace;letter-spacing:.12em}.page-head h1{margin-top:5px;font-size:23px}.subtitle{margin-top:6px;color:var(--muted);font-size:11px}.head-actions{display:flex;align-items:center;gap:8px}.icon-action,.edit-action{border:1px solid var(--border);background:var(--card);color:var(--primary);border-radius:5px}.icon-action{width:32px;height:32px;font-size:20px}.edit-action{padding:8px 12px;font-size:11px}.icon-action:disabled{opacity:.55}.spinning{animation:rotate .7s linear infinite}.market-summary{padding:15px;border:1px solid #e1eafa;border-radius:8px;background:linear-gradient(135deg,#f0f6ff,#fff)}.summary-top,.summary-lead{display:flex;align-items:center;justify-content:space-between}.summary-top{color:var(--muted);font-size:11px}.summary-top i{display:inline-block;width:6px;height:6px;margin-right:6px;border-radius:50%;background:var(--up)}.summary-top small{font:9px 'JetBrains Mono',monospace}.summary-lead{align-items:flex-end;padding:16px 0 13px}.summary-lead strong{font-size:19px}.summary-lead span{color:var(--muted);font-size:10px}.index-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.index-card{padding:10px;background:#fff;border-radius:5px}.index-card span{display:block;overflow:hidden;color:var(--text);font-size:11px;text-overflow:ellipsis;white-space:nowrap}.index-card strong{display:block;margin:7px 0 4px;font-size:14px}.index-card b{font-size:10px;font-weight:500}.summary-empty{grid-column:1/-1;padding:12px;color:var(--muted);font-size:11px;text-align:center}.group-tabs{display:flex;align-items:center;gap:25px;margin-top:17px;border-bottom:1px solid var(--border)}.group-tabs button{position:relative;padding:11px 2px 10px;border:0;background:transparent;color:var(--muted);font-size:13px}.group-tabs button.active{color:var(--text);font-weight:600}.group-tabs button.active:after{position:absolute;right:0;bottom:-1px;left:0;height:2px;border-radius:2px;background:var(--primary);content:''}.group-tabs b{margin-left:4px;color:var(--primary);font:10px 'JetBrains Mono',monospace}.add-link{margin-left:auto;color:var(--primary);font-size:10px}.quote-section{margin-top:0}.section-bar{display:flex;align-items:center;justify-content:space-between;min-height:48px}.filters{display:flex;gap:4px}.filters button{padding:6px 10px;border:0;border-radius:4px;background:transparent;color:var(--muted);font-size:11px}.filters button.active{color:var(--primary);background:#edf4ff;font-weight:600}.clear-link,.batch-bar button{border:0;background:transparent;color:var(--muted);font-size:10px}.batch-bar{display:flex;align-items:center;gap:12px;padding:8px 12px;background:#f7f9fc;border:1px solid var(--border);border-bottom:0;color:var(--muted);font-size:10px}.batch-bar span{flex:1}.batch-bar button:first-child,.danger-link{color:var(--primary)}.danger-link:disabled{opacity:.45}.quote-list{overflow:hidden;padding:0 13px;border:1px solid var(--border);border-radius:7px;background:var(--card)}.quote-row{display:flex;align-items:center;gap:9px;min-height:67px;border-bottom:1px solid var(--border)}.quote-row:last-child{border-bottom:0}.check-button{flex:none;width:18px;height:18px;padding:0;border:1px solid #cfd7e4;border-radius:50%;background:#fff;color:#fff;font-size:11px;line-height:16px}.check-button.checked{border-color:var(--primary);background:var(--primary)}.stock-name{display:grid;grid-template-columns:24px 1fr;flex:1;min-width:0}.stock-name i{grid-row:span 2;color:#b3bac7;font:normal 9px 'JetBrains Mono',monospace}.stock-name strong{overflow:hidden;font-size:12px;text-overflow:ellipsis;white-space:nowrap}.stock-name small{color:var(--muted);font:9px 'JetBrains Mono',monospace;margin-top:4px}.stock-price{width:65px;color:var(--text);font-size:12px;text-align:right}.stock-change{width:62px;text-align:right;font-size:11px}.stock-change b,.stock-change small{display:block}.stock-change b{font-weight:500}.stock-change small{margin-top:4px;font-size:9px;opacity:.8}.row-arrow{color:#b4bdca;font-size:18px}.text-up{color:var(--up)}.text-down{color:var(--down)}.market-link{display:block;margin:15px 0;color:var(--primary);font-size:10px;text-align:center}.market-link span{font-size:16px;vertical-align:-1px}.disclaimer{color:var(--muted);font-size:9px;text-align:center}@keyframes rotate{to{transform:rotate(360deg)}}@media(max-width:560px){.home-page{padding-bottom:22px}.page-head{padding-top:0}.market-summary{margin:0 -12px;border-radius:0;padding:14px 12px}.index-card{padding:9px 7px}.group-tabs{gap:20px}.quote-list{margin:0 -1px;padding:0 10px}.stock-price{width:58px}.stock-change{width:58px}}@media(prefers-reduced-motion:reduce){.spinning{animation:none}}
</style>
