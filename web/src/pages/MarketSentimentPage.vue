<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getMarketSentiment } from '@/services/market'
import type { MarketSentiment, MarketSentimentMetric } from '@/services/market-types'

const sentiment = ref<MarketSentiment | null>(null)
const loading = ref(true)
const refreshing = ref(false)
const error = ref('')
const updatedAt = ref('--:--:--')

const cards = computed(() => sentiment.value ? [
  { label: '上涨家数', metric: sentiment.value.advances, tone: 'rise', suffix: ' 家' },
  { label: '下跌家数', metric: sentiment.value.declines, tone: 'fall', suffix: ' 家' },
  { label: '平盘家数', metric: sentiment.value.unchanged, tone: 'flat', suffix: ' 家' },
  { label: '成交额', metric: sentiment.value.amount, tone: 'normal', suffix: '' },
  { label: '涨停家数', metric: sentiment.value.limitUp, tone: 'rise', suffix: ' 家' },
  { label: '跌停家数', metric: sentiment.value.limitDown, tone: 'fall', suffix: ' 家' },
] : [])

function value(metric: MarketSentimentMetric, suffix = '') {
  if (!metric.availability.available || metric.value == null) return 'unavailable'
  if (suffix === ' 家') return `${metric.value}${suffix}`
  if (metric === sentiment.value?.amount) return formatAmount(metric.value)
  return metric.value.toFixed(1)
}
function formatAmount(amount: number) { return amount >= 100000000 ? `${(amount / 100000000).toFixed(2)} 亿` : `${(amount / 10000).toFixed(2)} 万` }
function reason(metric: MarketSentimentMetric) { return metric.availability.available ? '' : (metric.availability.reason ?? '当前数据源未提供该字段') }
function strengthClass() { return (sentiment.value?.strength.value ?? 0) >= 0 ? 'rise' : 'fall' }

async function load(refresh = false) {
  refresh ? refreshing.value = true : loading.value = true
  error.value = ''
  try {
    sentiment.value = await getMarketSentiment()
    updatedAt.value = new Date(sentiment.value.timestamp).toLocaleTimeString('zh-CN', { hour12: false })
  } catch {
    error.value = '市场情绪数据暂时无法加载，请稍后重试。'
  } finally {
    loading.value = false
    refreshing.value = false
  }
}

onMounted(() => void load())
</script>

<template>
  <section class="sentiment-page">
    <header class="page-header">
      <div>
        <p class="eyebrow">MARKET / SENTIMENT CENTER</p>
        <h1>市场情绪中心</h1>
        <p class="subtitle">基于当前行情快照计算涨跌结构、成交额与市场强弱，不对缺失字段进行估算。</p>
      </div>
      <button class="refresh" type="button" :disabled="refreshing" @click="load(true)"><span :class="{ spinning: refreshing }">↻</span> 刷新</button>
    </header>

    <LoadingState v-if="loading" label="正在计算市场情绪" />
    <ErrorState v-else-if="error" title="情绪数据加载失败" :message="error" :retry="() => load()" />
    <template v-else-if="sentiment">
      <section class="overview panel">
        <div class="overview-title"><span class="status-dot" /> 当前市场强弱</div>
        <div class="strength" :class="strengthClass()">
          <strong v-if="sentiment.strength.availability.available">{{ sentiment.strength.value?.toFixed(1) }}%</strong>
          <strong v-else>unavailable</strong>
          <span>{{ sentiment.strength.availability.available ? '涨跌家数差 / 总家数' : reason(sentiment.strength) }}</span>
        </div>
        <div class="bar" v-if="sentiment.total.availability.available && sentiment.total.value">
          <i class="rise" :style="{ width: `${(sentiment.advances.value ?? 0) / sentiment.total.value * 100}%` }" />
          <i class="flat" :style="{ width: `${(sentiment.unchanged.value ?? 0) / sentiment.total.value * 100}%` }" />
          <i class="fall" :style="{ width: `${(sentiment.declines.value ?? 0) / sentiment.total.value * 100}%` }" />
        </div>
        <p class="meta">统计 {{ sentiment.universe.count }} 个行情标的 · 更新于 {{ updatedAt }}</p>
      </section>

      <section class="metric-grid">
        <article v-for="card in cards" :key="card.label" class="metric panel" :class="card.tone">
          <span>{{ card.label }}</span>
          <strong>{{ value(card.metric, card.suffix) }}</strong>
          <small v-if="!card.metric.availability.available">{{ reason(card.metric) }}</small>
          <small v-else>来自行情快照</small>
        </article>
      </section>
      <p class="notice">数据范围由 worker 当前采集的行情代码决定；涨跌停统计仅在所有快照均提供有效 <code>limitStatus</code> 时展示。</p>
    </template>
  </section>
</template>

<style scoped>
.sentiment-page { width: min(1080px, 100%); margin: 0 auto; color: var(--text); }
.page-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 22px; }.eyebrow { margin: 0; color: var(--primary); font: 500 10px 'JetBrains Mono', monospace; letter-spacing: .12em; }.page-header h1 { margin: 6px 0 0; font-size: 23px; letter-spacing: -.02em; }.subtitle { margin-top: 9px; color: var(--muted); font-size: 12px; }.refresh { padding: 8px 12px; color: var(--primary); background: var(--card); border: 1px solid var(--border); border-radius: 5px; font-size: 12px; }.refresh span { display: inline-block; margin-right: 4px; font-size: 17px; }.spinning { animation: rotate .7s linear infinite; }
.panel { background: var(--card); border: 1px solid var(--border); border-radius: 6px; }.overview { padding: 20px; }.overview-title { color: var(--muted); font-size: 12px; }.status-dot { display: inline-block; width: 7px; height: 7px; margin-right: 6px; background: var(--primary); border-radius: 50%; }.strength { display: flex; align-items: baseline; gap: 12px; margin: 17px 0 13px; }.strength strong { font: 600 32px 'JetBrains Mono', monospace; }.strength span { color: var(--muted); font-size: 11px; }.bar { display: flex; height: 8px; overflow: hidden; background: var(--border); border-radius: 4px; }.bar i { display: block; min-width: 0; }.rise { color: var(--up); background: rgba(230,53,53,.8); }.fall { color: var(--down); background: rgba(28,170,60,.8); }.flat { background: #b5bdca; }.meta { margin: 12px 0 0; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.metric-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px; }.metric { min-height: 116px; padding: 17px; }.metric > span { color: var(--muted); font-size: 11px; }.metric strong { display: block; margin-top: 12px; font: 600 22px 'JetBrains Mono', monospace; }.metric small { display: block; margin-top: 9px; color: var(--muted); font-size: 10px; line-height: 1.4; }.metric.rise strong { color: var(--up); }.metric.fall strong { color: var(--down); }.metric.flat strong { color: #7b8492; }.notice { margin: 14px 2px; color: var(--muted); font-size: 11px; line-height: 1.6; }code { color: var(--primary); font-family: 'JetBrains Mono', monospace; }
@keyframes rotate { to { transform: rotate(360deg); } }@media (max-width: 620px) { .page-header { align-items: flex-start; }.page-header h1 { font-size: 21px; }.subtitle { max-width: 280px; line-height: 1.5; }.metric-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }.metric { min-height: 105px; padding: 13px; }.metric strong { font-size: 17px; }.overview { padding: 15px; } }
</style>
