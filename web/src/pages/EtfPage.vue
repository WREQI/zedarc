<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getBoardQuotes } from '@/services/market'
import type { MarketBoardQuote } from '@/services/market-types'

type Rank = '热门' | '涨幅榜' | '跌幅榜' | '成交额'
type Category = '全部' | '宽基' | '行业' | '主题' | '其他'

const rows = ref<MarketBoardQuote[]>([])
const keyword = ref('')
const rank = ref<Rank>('热门')
const category = ref<Category>('全部')
const loading = ref(true)
const error = ref('')
const rankOptions: Rank[] = ['热门', '涨幅榜', '跌幅榜', '成交额']
const categoryOptions: Category[] = ['全部', '宽基', '行业', '主题', '其他']

function categoryOf(item: MarketBoardQuote): Exclude<Category, '全部'> {
  if (/沪深|上证|中证|创业板|科创|红利|50|300|500|1000|央企|国企/.test(item.name)) return '宽基'
  if (/消费|医药|医疗|金融|银行|证券|半导体|芯片|能源|军工|地产|新能源|有色|化工/.test(item.name)) return '行业'
  if (/人工智能|AI|机器人|游戏|云计算|光伏|电池|互联网|科技|碳中和|一带一路/.test(item.name)) return '主题'
  return '其他'
}
function percentOf(value: string) { const number = Number.parseFloat(value); return Number.isFinite(number) ? number : null }
function amountOf(value: string) { const number = Number.parseFloat(value.replace(/[^\d.]/g, '')); return Number.isFinite(number) ? number : null }
const filteredRows = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const source = rows.value.filter((item) => {
    const matchesQuery = !query || item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)
    return matchesQuery && (category.value === '全部' || categoryOf(item) === category.value)
  })
  return [...source].sort((a, b) => {
    if (rank.value === '跌幅榜') return (percentOf(a.percent) ?? Infinity) - (percentOf(b.percent) ?? Infinity)
    if (rank.value === '涨幅榜') return (percentOf(b.percent) ?? -Infinity) - (percentOf(a.percent) ?? -Infinity)
    if (rank.value === '成交额') return (amountOf(b.extra) ?? -Infinity) - (amountOf(a.extra) ?? -Infinity)
    return 0
  })
})

async function load() {
  loading.value = true
  error.value = ''
  try { rows.value = await getBoardQuotes('ETF') } catch { error.value = 'ETF 数据暂时无法加载，请稍后重试。' } finally { loading.value = false }
}
onMounted(load)
</script>

<template>
  <section class="etf-page">
    <header class="page-heading"><div><p class="eyebrow">MARKET / ETF</p><h1>ETF行情</h1><p class="muted">搜索 ETF、查看热门与涨跌排行；分类仅基于基金名称推断。</p></div><button class="secondary-button" type="button" @click="load">刷新</button></header>
    <section class="toolbar panel">
      <div class="toolbar-line"><div class="rank-tabs" role="tablist" aria-label="ETF排行"><button v-for="item in rankOptions" :key="item" type="button" :class="{ selected: rank === item }" @click="rank = item">{{ item }}</button></div><label class="search">⌕<input v-model="keyword" type="search" placeholder="搜索 ETF 名称或代码" /></label></div>
      <div class="category-tabs" role="tablist" aria-label="ETF分类"><button v-for="item in categoryOptions" :key="item" type="button" :class="{ selected: category === item }" @click="category = item">{{ item }}</button></div>
    </section>
    <LoadingState v-if="loading" label="正在加载 ETF 行情" />
    <ErrorState v-else-if="error" title="ETF 行情加载失败" :message="error" :retry="load" />
    <section v-else class="panel table">
      <div class="row header"><span>名称 / 代码</span><span>最新净值</span><span>涨跌额</span><span>涨跌幅</span><span>成交额</span></div>
      <RouterLink v-for="(item, index) in filteredRows" :key="item.code" class="row" :to="`/etf/${item.code}`"><div><b class="index">{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ item.name }}</strong><small>{{ item.code }} · {{ categoryOf(item) }}</small></div><span class="mono">{{ item.price }}</span><span class="mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.change }}</span><span class="mono percent" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</span><span class="mono muted">{{ item.extra || '--' }}</span></RouterLink>
      <EmptyState v-if="!filteredRows.length" title="暂无可展示的 ETF" message="数据源暂未返回内容，或当前搜索/分类没有匹配结果。" />
    </section>
    <p class="data-note">成交额、净值历史、跟踪指数和成分股依赖上游 provider；接口未提供时显示“--”或空状态，不使用估算数据。</p>
  </section>
</template>

<style scoped>
.etf-page{max-width:1100px;margin:0 auto}.toolbar{margin-bottom:10px;padding:0 18px}.toolbar-line{display:flex;align-items:center;justify-content:space-between}.rank-tabs,.category-tabs{display:flex;gap:24px}.rank-tabs button,.category-tabs button{position:relative;padding:13px 0;border:0;background:transparent;color:var(--muted);font-size:12px}.rank-tabs button.selected,.category-tabs button.selected{color:var(--primary);font-weight:600}.rank-tabs button.selected:after,.category-tabs button.selected:after{position:absolute;right:0;bottom:-1px;left:0;height:2px;background:var(--primary);content:''}.category-tabs{gap:20px;border-top:1px solid var(--border)}.category-tabs button{padding:10px 0;font-size:11px}.search{display:flex;align-items:center;gap:7px;width:230px;padding:7px 10px;color:var(--muted);background:var(--bg);border:1px solid var(--border)}.search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--text);font-size:11px}.table{padding:0 18px}.row{display:grid;grid-template-columns:1.8fr .9fr .9fr .9fr 1fr;gap:12px;align-items:center;min-height:62px;border-bottom:1px solid var(--border);font-size:12px}.row:last-of-type{border-bottom:0}.row>span{text-align:right}.row.header{min-height:42px;color:var(--muted);font-size:10px}.row>div{display:grid;grid-template-columns:28px 1fr;min-width:0}.row strong,.row small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row strong{font-size:12px}.row small{grid-column:2;margin-top:4px;color:var(--muted);font:10px 'JetBrains Mono',monospace}.index{color:#a8b0bf;font:10px 'JetBrains Mono',monospace}.percent{font-weight:600}.data-note{margin:12px 2px;color:var(--muted);font-size:10px;line-height:1.6}@media(max-width:700px){.toolbar{padding:10px 14px}.toolbar-line{align-items:stretch;flex-direction:column;gap:8px}.rank-tabs,.category-tabs{gap:18px;overflow:auto}.search{width:100%}.table{padding:0 12px;overflow-x:auto}.row{min-width:600px}}
</style>
