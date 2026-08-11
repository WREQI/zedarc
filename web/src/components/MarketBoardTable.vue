<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import type { MarketBoardQuote } from '@/services/market-types'

const props = withDefaults(defineProps<{ title: string; eyebrow?: string; description?: string; loader: () => Promise<MarketBoardQuote[]>; searchPlaceholder?: string }>(), { eyebrow: 'MARKET / QUOTE BOARD', description: '', searchPlaceholder: '搜索名称或代码' })
const rows = ref<MarketBoardQuote[]>([])
const keyword = ref('')
const rank = ref<'全部' | '涨幅榜' | '跌幅榜' | '成交额'>('全部')
const loading = ref(true)
const error = ref('')
const filteredRows = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const source = query ? rows.value.filter((item) => item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)) : rows.value
  return [...source].sort((a, b) => rank.value === '跌幅榜' ? Number.parseFloat(a.percent) - Number.parseFloat(b.percent) : rank.value === '成交额' ? b.extra.localeCompare(a.extra) : Number.parseFloat(b.percent) - Number.parseFloat(a.percent))
})
async function load() {
  loading.value = true
  error.value = ''
  try { rows.value = await props.loader() } catch { error.value = '行情数据暂时无法加载，请稍后重试。' } finally { loading.value = false }
}
onMounted(load)
</script>

<template>
  <section class="market-board-page">
    <header class="page-heading"><div><p class="eyebrow">{{ eyebrow }}</p><h1>{{ title }}</h1><p v-if="description" class="muted">{{ description }}</p></div><RouterLink class="secondary-button" to="/market">返回行情</RouterLink></header>
    <section class="toolbar panel"><div class="rank-tabs"><button v-for="item in ['全部', '涨幅榜', '跌幅榜', '成交额']" :key="item" :class="{ selected: rank === item }" @click="rank = item as typeof rank">{{ item }}</button></div><label class="search">⌕<input v-model="keyword" type="search" :placeholder="searchPlaceholder" /></label></section>
    <LoadingState v-if="loading" :label="`正在加载${title}`" />
    <ErrorState v-else-if="error" title="行情加载失败" :message="error" :retry="load" />
    <section v-else class="panel table"><div class="row header"><span>名称 / 代码</span><span>最新价</span><span>涨跌额</span><span>涨跌幅</span><span>参考数据</span></div><div v-for="(item, index) in filteredRows" :key="item.code" class="row"><div><b class="index">{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ item.name }}</strong><small>{{ item.code }}</small></div><span class="mono">{{ item.price }}</span><span class="mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.change }}</span><span class="mono percent" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</span><span class="mono muted">{{ item.extra || '--' }}</span></div><EmptyState v-if="!filteredRows.length" title="暂无可展示的数据" message="数据源暂未返回内容，请稍后重试或换个关键词。" /></section>
  </section>
</template>

<style scoped>
.market-board-page{max-width:1100px;margin:0 auto}.toolbar{display:flex;align-items:center;justify-content:space-between;padding:0 18px;margin-bottom:10px}.rank-tabs{display:flex;gap:24px}.rank-tabs button{position:relative;padding:13px 0;border:0;background:transparent;color:var(--muted);font-size:12px}.rank-tabs button.selected{color:var(--primary);font-weight:600}.rank-tabs button.selected:after{position:absolute;right:0;bottom:-1px;left:0;height:2px;background:var(--primary);content:''}.search{display:flex;align-items:center;gap:7px;width:220px;padding:7px 10px;color:var(--muted);background:var(--bg);border:1px solid var(--border)}.search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--text);font-size:11px}.table{padding:0 18px}.row{display:grid;grid-template-columns:1.8fr .9fr .9fr .9fr 1fr;gap:12px;align-items:center;min-height:62px;border-bottom:1px solid var(--border);font-size:12px}.row>span{text-align:right}.header{min-height:42px;color:var(--muted);font-size:10px}.row>div{display:grid;grid-template-columns:28px 1fr;min-width:0}.row strong,.row small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row strong{font-size:12px}.row small{grid-column:2;margin-top:4px;color:var(--muted);font:10px 'JetBrains Mono',monospace}.index{color:#a8b0bf;font:10px 'JetBrains Mono',monospace}.percent{font-weight:600}@media(max-width:700px){.market-board-page{margin:0}.toolbar{align-items:stretch;flex-direction:column;gap:8px;padding:10px 14px}.rank-tabs{gap:18px;overflow:auto}.search{width:100%}.table{padding:0 12px;overflow-x:auto}.row{min-width:600px}}
</style>