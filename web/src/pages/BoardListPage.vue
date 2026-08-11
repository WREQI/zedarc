<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DataState from '@/components/DataState.vue'
import EmptyState from '@/components/EmptyState.vue'
import PageHeader from '@/components/PageHeader.vue'
import HorizontalTabs from '@/components/HorizontalTabs.vue'
import { getBoardQuotes } from '@/services/market'
import type { MarketBoardQuote } from '@/services/market-types'

const kinds = [{ key: 'industry', label: '行业板块' }, { key: 'concept', label: '概念板块' }] as const
const activeKind = ref<typeof kinds[number]['key']>('industry')
const rows = ref<MarketBoardQuote[]>([])
const keyword = ref('')
const loading = ref(true)
const error = ref('')
const rank = ref<'全部' | '涨幅榜' | '跌幅榜' | '成交额'>('全部')
const status = computed<'loading' | 'error' | 'ready'>(() => loading.value ? 'loading' : error.value ? 'error' : 'ready')
const filteredRows = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const source = query ? rows.value.filter((item) => item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)) : rows.value
  if (rank.value === '全部') return source
  return [...source].sort((a, b) => rank.value === '跌幅榜'
    ? (a.changePercent ?? Number.NEGATIVE_INFINITY) - (b.changePercent ?? Number.NEGATIVE_INFINITY)
    : rank.value === '成交额'
      ? (b.amount ?? Number.NEGATIVE_INFINITY) - (a.amount ?? Number.NEGATIVE_INFINITY)
      : (b.changePercent ?? Number.NEGATIVE_INFINITY) - (a.changePercent ?? Number.NEGATIVE_INFINITY))
})
async function load() {
  loading.value = true; error.value = ''
  try { rows.value = await getBoardQuotes('板块', activeKind.value) } catch { error.value = '板块数据暂时无法加载，请稍后重试。' } finally { loading.value = false }
}
function selectKind(kind: typeof activeKind.value) { activeKind.value = kind; keyword.value = ''; rank.value = '全部'; void load() }
onMounted(load)
</script>

<template>
  <section class="sector-page">
    <PageHeader eyebrow="MARKET / SECTORS" title="行业 / 概念板块" description="使用行情 provider 的实时板块快照；无数据时不会以 mock 结果代替。">
      <template #actions><RouterLink class="secondary-button" to="/market">返回行情</RouterLink></template>
    </PageHeader>
    <HorizontalTabs :items="kinds.map((item) => ({ label: item.label, value: item.key }))" :model-value="activeKind" aria-label="板块类型" @update:model-value="selectKind($event as 'industry' | 'concept')" />
    <section class="toolbar panel"><HorizontalTabs :items="['全部', '涨幅榜', '跌幅榜', '成交额'].map((item) => ({ label: item, value: item }))" :model-value="rank" aria-label="板块排行" @update:model-value="rank = $event as '全部' | '涨幅榜' | '跌幅榜' | '成交额'" /><label class="search">⌕<input v-model="keyword" type="search" placeholder="搜索板块名称或代码" /></label></section>
    <DataState :status="status" loading-label="正在加载板块" error-title="板块加载失败" :message="error" :retry="load">
      <section class="panel table"><div class="row header"><span>板块名称 / 代码</span><span>涨跌幅</span><span>领涨股</span></div><RouterLink v-for="(item, index) in filteredRows" :key="item.code" class="row" :to="`/sector/${item.code}?kind=${activeKind}`"><div><b class="index">{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ item.name }}</strong><small>{{ item.code }}</small></div><span class="mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</span><span class="muted">{{ item.extra || '--' }}</span></RouterLink><EmptyState v-if="!filteredRows.length" :title="activeKind === 'concept' ? '暂无概念板块数据' : '暂无可展示的行业板块'" :message="activeKind === 'concept' ? '当前行情 provider 未提供概念板块接口，未使用行业数据代替。' : '数据源暂未返回内容，请稍后重试。'" /></section>
    </DataState>
  </section>
</template>

<style scoped>
.sector-page{max-width:1100px;margin:0 auto}.kind-tabs{display:flex;gap:25px;margin:15px 0 10px;border-bottom:1px solid var(--border)}.kind-tabs button,.rank-tabs button{position:relative;padding:10px 0;border:0;background:transparent;color:var(--muted);font-size:12px}.kind-tabs button.selected,.rank-tabs button.selected{color:var(--primary);font-weight:600}.kind-tabs button.selected:after{position:absolute;right:0;bottom:-1px;left:0;height:2px;background:var(--primary);content:''}.toolbar{display:flex;align-items:center;justify-content:space-between;padding:0 18px;margin-bottom:10px}.rank-tabs{display:flex;gap:24px}.search{display:flex;align-items:center;gap:7px;width:220px;padding:7px 10px;color:var(--muted);background:var(--bg);border:1px solid var(--border)}.search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--text);font-size:11px}.table{padding:0 18px}.row{display:grid;grid-template-columns:1.8fr .8fr 1fr;gap:12px;align-items:center;min-height:62px;border-bottom:1px solid var(--border);font-size:12px;color:inherit}.row>span{text-align:right}.header{min-height:42px;color:var(--muted);font-size:10px}.row>div{display:grid;grid-template-columns:28px 1fr;min-width:0}.row strong,.row small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row small{grid-column:2;margin-top:4px;color:var(--muted);font:10px 'JetBrains Mono',monospace}.index{color:#a8b0bf;font:10px 'JetBrains Mono',monospace}@media(max-width:700px){.toolbar{align-items:stretch;flex-direction:column;gap:8px;padding:10px 14px}.search{width:100%}.table{padding:0 12px}.row{grid-template-columns:1.5fr .7fr .9fr;gap:8px}}
</style>