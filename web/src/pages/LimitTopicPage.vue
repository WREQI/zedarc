<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getLimitBoard } from '@/services/market'
import type { LimitBoardResponse, MarketRankQuote } from '@/services/market-types'

const props = defineProps<{ direction: 'up' | 'down' }>()
const stocks = ref<MarketRankQuote[]>([])
const board = ref<LimitBoardResponse | null>(null)
const keyword = ref('')
const loading = ref(true)
const refreshing = ref(false)
const error = ref('')
const updatedAt = ref('--:--:--')

const isUp = computed(() => props.direction === 'up')
const title = computed(() => isUp.value ? '涨停专题' : '跌停专题')
const ladderTitle = computed(() => isUp.value ? '涨停梯队' : '跌停梯队')
const subtitle = computed(() => isUp.value ? '跟踪当日真实涨停标的与涨停价' : '跟踪当日真实跌停标的与跌停价')
const emptyMessage = computed(() => keyword.value.trim() ? '请尝试其他名称或代码。' : `当前行情源未返回${isUp.value ? '涨停' : '跌停'}数据，不使用估算结果。`)
const filteredStocks = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  return query ? stocks.value.filter((stock) => stock.code.includes(query) || stock.name.toLowerCase().includes(query)) : stocks.value
})

function updateTime() { updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour12: false }) }
async function load(isRefresh = false) {
  if (isRefresh) refreshing.value = true
  else loading.value = true
  error.value = ''
  try {
    board.value = await getLimitBoard(isUp.value ? 'up' : 'down')
    stocks.value = board.value.items
    updateTime()
  } catch {
    error.value = '行情数据暂时无法加载，请稍后重试。'
  } finally {
    loading.value = false
    refreshing.value = false
  }
}
function price(value: number | null) { return value == null ? '—' : value.toFixed(2) }
function metricLabel(metric: { value: number | string | null; available: boolean; reason?: string }) { return metric.available && metric.value != null ? String(metric.value) : 'unavailable' }

function refresh() { if (!refreshing.value) void load(true) }
onMounted(() => void load())
</script>

<template>
  <section class="limit-page" :class="{ down: !isUp }">
    <header class="topic-header">
      <div>
        <p class="eyebrow">MARKET / LIMIT BOARD</p>
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <button class="refresh" type="button" :disabled="refreshing" @click="refresh"><span :class="{ spinning: refreshing }">↻</span>刷新</button>
    </header>

    <section class="summary-card">
      <div class="summary-icon">{{ isUp ? '↑' : '↓' }}</div>
      <div><strong>{{ filteredStocks.length }}</strong><span>只</span><p>更新于 {{ updatedAt }}</p></div>
      <small>实时行情<br />{{ isUp ? 'LIMIT UP' : 'LIMIT DOWN' }}</small>
    </section>

    <label class="search"><span>⌕</span><input v-model="keyword" type="search" placeholder="搜索名称或代码" aria-label="搜索名称或代码" /></label>

    <section class="board-card">
      <div class="section-heading"><h2>今日{{ isUp ? '涨停' : '跌停' }}</h2><span>共 {{ filteredStocks.length }} 只</span></div>
      <LoadingState v-if="loading" :label="`正在加载${title}`" />
      <ErrorState v-else-if="error" title="行情加载失败" :message="error" :retry="() => load()" />
      <template v-else-if="filteredStocks.length">
        <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" :to="`/stock/${stock.code}`" class="stock-row">
          <b class="rank">{{ String(index + 1).padStart(2, '0') }}</b>
          <span class="stock-copy"><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span>
          <span class="quote"><b>{{ stock.price }}</b><small>{{ stock.percent }}</small></span>
          <span class="limit-price"><small>{{ isUp ? '涨停价' : '跌停价' }}</small><b>{{ price(isUp ? stock.limitUp : stock.limitDown) }}</b></span>
          <span class="trade-amount"><small>成交额</small><b>{{ stock.amount }}</b></span>
          <span class="arrow">›</span>
        </RouterLink>
      </template>
      <EmptyState v-else :title="keyword.trim() ? '没有找到匹配标的' : `暂无${isUp ? '涨停' : '跌停'}数据`" :message="emptyMessage" icon="—" />
    </section>

    <section class="metrics-card">
      <div class="section-heading"><h2>{{ ladderTitle }}</h2><span>仅使用 provider 原始字段</span></div>
      <div class="metric-grid">
        <div><span>首板</span><strong>{{ metricLabel(board?.ladder.firstBoard ?? { value: null, available: false }) }}</strong></div>
        <div><span>二板</span><strong>{{ metricLabel(board?.ladder.secondBoard ?? { value: null, available: false }) }}</strong></div>
        <div><span>三板以上</span><strong>{{ metricLabel(board?.ladder.aboveThirdBoard ?? { value: null, available: false }) }}</strong></div>
        <div><span>连板高度</span><strong>{{ metricLabel(board?.ladder.maxStreak ?? { value: null, available: false }) }}</strong></div>
      </div>
      <div class="data-note">{{ board?.ladder.firstBoard.reason ?? '连板字段 unavailable' }}</div>
    </section>

    <section class="metrics-card detail-metrics">
      <div class="section-heading"><h2>{{ isUp ? '炸板' : '跌停开板' }} / 封板信息</h2><span>不可推算</span></div>
      <div class="detail-grid">
        <div><span>{{ isUp ? '炸板' : '开板' }}</span><strong>{{ board?.brokenBoard.available ? board.brokenBoard.items.length : 'unavailable' }}</strong></div>
        <div><span>封板时间</span><strong>{{ metricLabel(board?.sealTime ?? { value: null, available: false }) }}</strong></div>
        <div><span>封单金额</span><strong>{{ metricLabel(board?.sealAmount ?? { value: null, available: false }) }}</strong></div>
      </div>
      <div class="data-note">{{ board?.brokenBoard.reason ?? board?.sealTime.reason ?? '字段 unavailable' }}</div>
    </section>
    <footer>数据来自当前行情服务 · limitStatus={{ isUp ? 'up' : 'down' }}；成交额为行情成交额，非封单金额</footer>
  </section>
</template>

<style scoped>
.limit-page{width:min(720px,100%);margin:0 auto;color:var(--text);padding-bottom:24px}.topic-header{display:flex;align-items:flex-start;justify-content:space-between;padding:3px 14px 15px}.eyebrow{margin:0 0 5px;color:var(--primary);font:10px 'JetBrains Mono',monospace;letter-spacing:.12em}.topic-header h1{font-size:23px;font-weight:600}.subtitle{margin-top:6px;color:var(--muted);font-size:10px}.refresh{display:flex;align-items:center;gap:4px;padding:7px 0;border:0;background:transparent;color:var(--primary);font-size:11px}.refresh span{font-size:20px;line-height:1}.spinning{animation:rotate .7s linear infinite}.summary-card{display:flex;align-items:center;gap:12px;margin:0 14px;padding:16px;border:1px solid #e1eafa;border-radius:9px;background:linear-gradient(135deg,#f0f6ff,#fff)}.down .summary-card{background:linear-gradient(135deg,#fff3f1,#fff);border-color:#f3e1df}.summary-icon{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:#eaf2ff;color:var(--up);font-size:25px}.down .summary-icon{background:#fff0ee;color:var(--down)}.summary-card strong{font:600 23px 'JetBrains Mono',monospace}.summary-card>div>span{margin-left:3px;color:var(--muted);font-size:10px}.summary-card p{margin-top:4px;color:var(--muted);font:9px 'JetBrains Mono',monospace}.summary-card>small{margin-left:auto;color:var(--muted);font:9px/1.6 'JetBrains Mono',monospace;text-align:right}.search{display:flex;align-items:center;gap:7px;height:36px;margin:12px 14px;padding:0 10px;border:1px solid #e1e9f5;border-radius:5px;background:#f7f9fc;color:var(--primary);font-size:18px}.search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--text);font-size:11px}.board-card{overflow:hidden;margin:0 0 10px;background:var(--card);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}.section-heading{display:flex;align-items:baseline;justify-content:space-between;padding:15px 14px 10px}.section-heading h2{font-size:15px}.section-heading span{color:var(--muted);font-size:10px}.stock-row{display:flex;align-items:center;gap:9px;min-height:68px;margin:0 14px;border-top:1px solid var(--border);color:inherit}.rank{width:20px;color:#b3bac7;font:10px 'JetBrains Mono',monospace;font-weight:400}.stock-copy{display:grid;min-width:0;flex:1;gap:4px}.stock-copy strong{overflow:hidden;font-size:12px;text-overflow:ellipsis;white-space:nowrap}.stock-copy small,.quote small,.limit-price small,.trade-amount small{color:var(--muted);font:9px 'JetBrains Mono',monospace}.quote{text-align:right}.quote b,.limit-price b,.trade-amount b{display:block;font:11px 'JetBrains Mono',monospace}.quote small{display:block;margin-top:4px;color:var(--up)}.down .quote small{color:var(--down)}.limit-price,.trade-amount{width:65px;text-align:right}.limit-price b,.trade-amount b{margin-top:4px;color:var(--primary)}.trade-amount{display:none}.arrow{color:#b4bdca;font-size:20px}.metrics-card{margin:0 14px 10px;border:1px solid var(--border);border-radius:7px;background:var(--card)}.metric-grid,.detail-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin:0 14px 12px}.detail-grid{grid-template-columns:repeat(3,1fr)}.metric-grid div,.detail-grid div{display:grid;gap:6px;padding:10px 7px;background:#fafbfd}.metric-grid span,.detail-grid span{color:var(--muted);font-size:9px}.metric-grid strong,.detail-grid strong{overflow:hidden;font:11px 'JetBrains Mono',monospace;text-overflow:ellipsis}.data-note{padding:0 14px 12px;color:var(--muted);font-size:9px}.unavailable-card{display:flex;align-items:center;justify-content:space-between;margin:0 14px;padding:13px 14px;border:1px dashed var(--border);border-radius:7px;background:#fafbfd}.unavailable-card strong{font-size:11px}.unavailable-card p{margin-top:5px;color:var(--muted);font-size:9px}.unavailable-card span{color:#aab4c2;font-size:10px}footer{padding:14px;color:var(--muted);font-size:9px;text-align:center}@keyframes rotate{to{transform:rotate(360deg)}}@media(max-width:480px){.topic-header{padding-left:12px;padding-right:12px}.summary-card{margin:0 12px}.search{margin-left:12px;margin-right:12px}.stock-row{margin-left:12px;margin-right:12px}.unavailable-card{margin-left:12px;margin-right:12px}}
</style>
