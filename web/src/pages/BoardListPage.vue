<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import type { MarketBoardQuote } from '@/services/market-types'
import { getBoardQuotes } from '@/services/market'

const route = useRoute()
const boardName = computed(() => route.path.includes('etf') ? 'ETF' : '板块')
const quotes = ref<MarketBoardQuote[]>([])
const keyword = ref('')
const activeRank = ref<'全部' | '涨幅榜' | '跌幅榜'>('全部')
const isLoading = ref(true)
const error = ref('')
const filteredQuotes = computed(() => {
  const query = keyword.value.trim()
  const source = query ? quotes.value.filter((item) => item.name.includes(query) || item.code.includes(query)) : quotes.value
  return [...source].sort((a, b) => activeRank.value === '跌幅榜' ? Number.parseFloat(a.percent) - Number.parseFloat(b.percent) : Number.parseFloat(b.percent) - Number.parseFloat(a.percent))
})
function selectRank(rank: string) { activeRank.value = rank as '全部' | '涨幅榜' | '跌幅榜' }
async function load() {
  isLoading.value = true; error.value = ''
  try { quotes.value = await getBoardQuotes(boardName.value) } catch { error.value = `${boardName.value}数据加载失败，请重试。` } finally { isLoading.value = false }
}
onMounted(load)
</script>

<template>
  <section class="board-page"><div class="page-heading"><div><p class="eyebrow">{{ boardName }} / MARKET BOARD</p><h1>{{ boardName }}行情</h1><p class="muted">按涨跌幅和成交数据快速观察{{ boardName }}市场。</p></div><RouterLink class="secondary-button" to="/market">返回行情</RouterLink></div><section class="board-toolbar panel"><div class="board-tabs"><button v-for="rank in ['全部', '涨幅榜', '跌幅榜']" :key="rank" :class="{ selected: activeRank === rank }" @click="selectRank(rank)">{{ rank }}</button></div><label class="board-search">⌕<input v-model="keyword" :placeholder="`搜索${boardName}名称或代码`" /></label></section><LoadingState v-if="isLoading" :label="`正在加载${boardName}行情`" /><ErrorState v-else-if="error" title="行情加载失败" :message="error" :retry="load" /><section v-else class="panel board-table"><div class="board-row board-header"><span>名称 / 代码</span><span>最新价</span><span>涨跌额</span><span>涨跌幅</span><span>参考数据</span></div><div v-for="quote in filteredQuotes" :key="quote.code" class="board-row"><div><strong>{{ quote.name }}</strong><small>{{ quote.code }}</small></div><span class="mono">{{ quote.price }}</span><span class="mono" :class="quote.trend === 'up' ? 'text-up' : 'text-down'">{{ quote.change }}</span><span class="mono percent" :class="quote.trend === 'up' ? 'text-up' : 'text-down'">{{ quote.percent }}</span><span class="mono muted">{{ quote.extra }}</span></div><EmptyState v-if="!filteredQuotes.length" title="没有匹配标的" message="请尝试其他名称或代码。" /></section></section>
</template>

<style scoped>
.board-page { max-width: 1100px; margin: 0 auto; }.board-toolbar { display: flex; align-items: center; justify-content: space-between; padding: 0 18px; margin-bottom: 10px; }.board-tabs { display: flex; gap: 24px; }.board-tabs button { position: relative; color: var(--muted); border: 0; background: transparent; padding: 13px 0; font-size: 12px; }.board-tabs button.selected { color: var(--primary); font-weight: 600; }.board-tabs button.selected::after { content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--primary); }.board-search { display: flex; align-items: center; gap: 7px; color: var(--muted); background: var(--bg); border: 1px solid var(--border); padding: 7px 10px; width: 220px; }.board-search input { min-width: 0; flex: 1; border: 0; outline: 0; color: var(--text); background: transparent; font-size: 11px; }.board-table { padding: 0 18px; }.board-row { display: grid; grid-template-columns: 1.8fr .9fr .9fr .9fr 1fr; gap: 12px; align-items: center; min-height: 62px; border-bottom: 1px solid var(--border); font-size: 12px; }.board-header { min-height: 42px; color: var(--muted); font-size: 10px; }.board-row strong, .board-row small { display: block; }.board-row strong { font-size: 12px; }.board-row small { color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 4px; }.percent { font-weight: 600; }@media (max-width: 700px) { .board-toolbar { align-items: stretch; flex-direction: column; gap: 9px; padding: 10px 14px; }.board-search { width: 100%; }.board-table { padding: 0 14px; overflow-x: auto; }.board-row { min-width: 600px; } }
</style>
