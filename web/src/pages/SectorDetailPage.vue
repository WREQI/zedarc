<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import DataState from '@/components/DataState.vue'
import EmptyState from '@/components/EmptyState.vue'
import { getIndexQuotes, getMarketSentiment, getSectorDetail } from '@/services/market'
import type { IndexQuote, MarketSentiment, SectorDetailResponse } from '@/services/market-types'

const route = useRoute()
const code = computed(() => String(route.params.code || ''))
const kind = computed<'industry' | 'concept'>(() => route.query.kind === 'concept' ? 'concept' : 'industry')
const detail = ref<SectorDetailResponse>()
const indices = ref<IndexQuote[]>([])
const sentiment = ref<MarketSentiment>()
const keyword = ref('')
const rank = ref<'全部' | '涨幅榜' | '跌幅榜' | '成交额'>('全部')
const loading = ref(true)
const error = ref('')
const status = computed<'loading' | 'error' | 'empty' | 'ready'>(() => loading.value ? 'loading' : error.value ? 'error' : detail.value?.availability.available === false ? 'empty' : 'ready')
const members = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const source = query ? (detail.value?.members ?? []).filter((item) => item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)) : detail.value?.members ?? []
  return [...source].sort((a, b) => rank.value === '跌幅榜' ? a.changePercent - b.changePercent : rank.value === '涨幅榜' ? b.changePercent - a.changePercent : rank.value === '成交额' ? (b.amount ?? Number.NEGATIVE_INFINITY) - (a.amount ?? Number.NEGATIVE_INFINITY) : 0)
})
const advances = computed(() => detail.value?.membersAvailability.available ? detail.value.members.filter((item) => item.change > 0).length : null)
const declines = computed(() => detail.value?.membersAvailability.available ? detail.value.members.filter((item) => item.change < 0).length : null)
function formatAmount(value?: number) { return value == null ? '--' : value >= 100000000 ? `${(value / 100000000).toFixed(1)}亿` : `${(value / 10000).toFixed(1)}万` }
function metric(metric: MarketSentiment['advances']) { return metric.availability.available && metric.value != null ? String(metric.value) : '--' }
async function load() {
  loading.value = true; error.value = ''
  try { [detail.value, indices.value, sentiment.value] = await Promise.all([getSectorDetail(code.value, kind.value), getIndexQuotes(), getMarketSentiment()]) } catch { error.value = '板块详情暂时无法加载，请稍后重试。' } finally { loading.value = false }
}
watch([code, kind], load, { immediate: true })
</script>

<template>
  <section class="detail-page">
    <header class="detail-header"><div><RouterLink class="back" to="/sector">‹ 板块</RouterLink><p class="eyebrow">MARKET / {{ kind === 'concept' ? 'CONCEPT' : 'INDUSTRY' }} DETAIL</p><h1>{{ detail?.sector.name || code }}</h1><p class="muted">{{ code }} · {{ detail?.sector.source || '数据源待确认' }}</p></div><div v-if="detail" class="sector-change" :class="detail.sector.changePercent >= 0 ? 'text-up' : 'text-down'">{{ detail.availability.available ? `${detail.sector.changePercent >= 0 ? '+' : ''}${detail.sector.changePercent.toFixed(2)}%` : '--' }}</div></header>
    <DataState :status="status" loading-label="正在加载板块详情" error-title="板块详情加载失败" empty-title="暂无板块详情" :message="error || detail?.availability.reason || '当前行情源未提供该板块详情。'" :retry="load">
    <template v-if="detail">
      <section class="index-strip"><article v-for="item in indices" :key="item.code" class="panel index-card"><strong>{{ item.name }}</strong><small>{{ item.code }}</small><b>{{ item.value }}</b><span :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.change }} · {{ item.percent }}</span></article></section>
      <section class="summary-grid"><article class="panel summary"><span>板块成分涨跌</span><strong>{{ advances == null ? '--' : advances }} <i>涨</i> / {{ declines == null ? '--' : declines }} <i>跌</i></strong><small v-if="!detail.membersAvailability.available">{{ detail.membersAvailability.reason }}</small><small v-else>基于 {{ detail.members.length }} 只可用成分快照</small></article><article class="panel summary"><span>全市场涨跌家数</span><strong>{{ sentiment ? metric(sentiment.advances) : '--' }} <i>涨</i> / {{ sentiment ? metric(sentiment.declines) : '--' }} <i>跌</i></strong><small>{{ sentiment?.source || 'market provider' }}</small></article><article class="panel summary"><span>板块资金</span><strong class="unavailable">暂无数据</strong><small>{{ detail.capitalFlowAvailability.reason }}</small></article></section>
      <section class="panel member-panel"><header class="section-heading"><div><p class="eyebrow">CONSTITUENTS</p><h2>成分股 / 领涨领跌</h2></div><div class="actions"><RouterLink class="secondary-button" :to="`/market/rank?keyword=${encodeURIComponent(detail.sector.name)}`">资金排行</RouterLink><RouterLink class="secondary-button" :to="`/news?keyword=${encodeURIComponent(detail.sector.name)}`">相关资讯</RouterLink></div></header><div class="toolbar"><div class="rank-tabs"><button v-for="item in ['全部', '涨幅榜', '跌幅榜', '成交额']" :key="item" :class="{ selected: rank === item }" @click="rank = item as typeof rank">{{ item }}</button></div><label class="search">⌕<input v-model="keyword" type="search" placeholder="搜索成分股名称或代码" /></label></div><div class="member-table header"><span>名称 / 代码</span><span>最新价</span><span>涨跌幅</span><span>成交额</span></div><RouterLink v-for="item in members" :key="item.code" class="member-table member-row" :to="`/stock/${item.code}`"><span><strong>{{ item.name }}</strong><small>{{ item.code }}</small></span><b class="mono">{{ item.price.toFixed(2) }}</b><b class="mono" :class="item.changePercent >= 0 ? 'text-up' : 'text-down'">{{ item.changePercent >= 0 ? '+' : '' }}{{ item.changePercent.toFixed(2) }}%</b><small class="mono muted">{{ formatAmount(item.amount) }}</small></RouterLink><div v-if="!members.length" class="empty"><strong>暂无成分股快照</strong><p>{{ detail.membersAvailability.reason || '请等待行情 provider 发布板块成分数据。' }}</p></div></section>
    </template>
    </DataState>
  </section>
</template>

<style scoped>
.detail-page{max-width:1100px;margin:0 auto}.detail-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:15px}.back{display:inline-block;margin-bottom:14px;color:var(--primary);font-size:11px}.detail-header h1{margin:4px 0;font-size:24px}.detail-header .muted{font:10px 'JetBrains Mono',monospace}.eyebrow{margin:0;color:var(--primary);font:10px 'JetBrains Mono',monospace;letter-spacing:.08em}.sector-change{font:600 25px 'JetBrains Mono',monospace}.index-strip{display:flex;gap:8px;overflow:auto;margin-bottom:10px}.index-card{min-width:170px;padding:12px}.index-card strong{font-size:12px}.index-card small{margin-left:6px;color:var(--muted);font:9px 'JetBrains Mono',monospace}.index-card b{display:block;margin:10px 0 4px;font:600 18px 'JetBrains Mono',monospace}.index-card span{font:10px 'JetBrains Mono',monospace}.summary-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px}.summary{padding:14px}.summary>span{color:var(--muted);font-size:10px}.summary strong{display:block;margin:10px 0 5px;font:600 17px 'JetBrains Mono',monospace}.summary i{color:var(--muted);font:normal 10px system-ui}.summary small{display:block;color:var(--muted);font-size:9px;line-height:1.5}.unavailable{color:var(--muted)!important;font-size:14px!important}.member-panel{padding:15px 18px}.section-heading{display:flex;align-items:flex-start;justify-content:space-between}.section-heading h2{margin-top:4px;font-size:17px}.actions{display:flex;gap:7px}.secondary-button{padding:7px 9px;border:1px solid var(--border);color:var(--primary);font-size:10px}.toolbar{display:flex;align-items:center;justify-content:space-between;margin-top:14px;border-bottom:1px solid var(--border)}.rank-tabs{display:flex;gap:22px}.rank-tabs button{position:relative;padding:10px 0;border:0;background:transparent;color:var(--muted);font-size:11px}.rank-tabs button.selected{color:var(--primary);font-weight:600}.search{display:flex;align-items:center;gap:6px;width:220px;padding:6px 9px;color:var(--muted);background:var(--bg);border:1px solid var(--border)}.search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--text);font-size:10px}.member-table{display:grid;grid-template-columns:1.7fr .8fr .8fr .9fr;gap:12px;align-items:center}.member-table:not(:first-child)>:not(:first-child){text-align:right}.header{padding:11px 0;color:var(--muted);font-size:10px}.member-row{min-height:57px;border-top:1px solid var(--border);color:inherit}.member-row span{display:grid;gap:4px}.member-row strong{font-size:12px}.member-row small{color:var(--muted);font:9px 'JetBrains Mono',monospace}.member-row b{font-size:11px}.empty{padding:42px 10px;color:var(--muted);text-align:center}.empty strong{color:var(--text);font-size:12px}.empty p{margin-top:6px;font-size:10px}@media(max-width:700px){.detail-header{align-items:flex-start}.sector-change{font-size:19px}.summary-grid{grid-template-columns:1fr}.member-panel{padding:12px}.section-heading{gap:8px;flex-direction:column}.actions{margin-top:5px}.toolbar{align-items:stretch;flex-direction:column}.search{width:auto;margin:9px 0}.member-table{grid-template-columns:1.5fr .7fr .8fr .8fr;gap:6px}.member-table.header{font-size:9px}}
</style>