<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DataState from '@/components/DataState.vue'
import EmptyState from '@/components/EmptyState.vue'
import PageHeader from '@/components/PageHeader.vue'
import HorizontalTabs from '@/components/HorizontalTabs.vue'
import { getEtfs } from '@/services/market'
import type { MarketEtf } from '@/services/market-types'

type Sort = '热门' | '涨幅榜' | '跌幅榜' | '成交额'
type Category = '全部' | '宽基' | '行业' | '主题' | '其他'
const rows = ref<MarketEtf[]>([]); const keyword = ref(''); const sort = ref<Sort>('热门'); const category = ref<Category>('全部'); const loading = ref(true); const error = ref('')
const sortOptions: Sort[] = ['热门', '涨幅榜', '跌幅榜', '成交额']; const categoryOptions: Category[] = ['全部', '宽基', '行业', '主题', '其他']
function categoryOf(item: MarketEtf): Exclude<Category, '全部'> { if (/沪深|上证|中证|创业板|科创|红利|50|300|500|1000|央企|国企/.test(item.name)) return '宽基'; if (/消费|医药|医疗|金融|银行|证券|半导体|芯片|能源|军工|地产|新能源|有色|化工/.test(item.name)) return '行业'; if (/人工智能|AI|机器人|游戏|云计算|光伏|电池|互联网|科技|碳中和|一带一路/.test(item.name)) return '主题'; return '其他' }
const status = computed<'loading' | 'error' | 'ready'>(() => loading.value ? 'loading' : error.value ? 'error' : 'ready')
const filteredRows = computed(() => { const q = keyword.value.trim().toLowerCase(); const source = rows.value.filter((item) => (!q || item.name.toLowerCase().includes(q) || item.code.toLowerCase().includes(q)) && (category.value === '全部' || categoryOf(item) === category.value)); return [...source].sort((a, b) => sort.value === '涨幅榜' ? b.changePercent - a.changePercent : sort.value === '跌幅榜' ? a.changePercent - b.changePercent : sort.value === '成交额' ? (b.amount ?? Number.NEGATIVE_INFINITY) - (a.amount ?? Number.NEGATIVE_INFINITY) : 0) })
function amount(item: MarketEtf) { const value = item.amount ?? 0; return value > 0 ? (value >= 100000000 ? `${(value / 100000000).toFixed(1)}亿` : `${(value / 10000).toFixed(1)}万`) : '不可用' }
async function load() { loading.value = true; error.value = ''; try { rows.value = await getEtfs(100) } catch { error.value = 'ETF 数据暂时无法加载，请稍后重试。' } finally { loading.value = false } }
onMounted(load)
</script>
<template>
  <section class="etf-page"><PageHeader eyebrow="MARKET / ETF" title="ETF行情" description="按名称、代码和分类筛选，排序仅使用 provider 已返回的字段。"><template #actions><button class="secondary-button" type="button" @click="load">刷新</button></template></PageHeader>
    <section class="toolbar panel"><div class="toolbar-line"><HorizontalTabs :items="sortOptions.map((item) => ({ label: item, value: item }))" :model-value="sort" aria-label="ETF排序" @update:model-value="sort = $event as Sort" /><label class="search">⌕<input v-model="keyword" type="search" placeholder="搜索 ETF 名称或代码" /></label></div><HorizontalTabs :items="categoryOptions.map((item) => ({ label: item, value: item }))" :model-value="category" aria-label="ETF分类" @update:model-value="category = $event as Category" /></section>
    <DataState :status="status" loading-label="正在加载 ETF 行情" error-title="ETF 行情加载失败" :message="error" :retry="load">
    <section class="panel table"><div class="row header"><span>名称 / 代码</span><span>最新价</span><span>涨跌幅</span><span>成交额</span></div><RouterLink v-for="(item, index) in filteredRows" :key="item.code" class="row" :to="`/etf/${item.code}`"><div><b class="index">{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ item.name }}</strong><small>{{ item.code }} · {{ categoryOf(item) }}</small></div><span class="mono">{{ item.price.toFixed(3) }}</span><span class="mono percent" :class="item.changePercent >= 0 ? 'text-up' : 'text-down'">{{ item.changePercent >= 0 ? '+' : '' }}{{ item.changePercent.toFixed(2) }}%</span><span class="mono muted">{{ amount(item) }}</span></RouterLink><EmptyState v-if="!filteredRows.length" title="暂无可展示的 ETF" message="数据源暂未返回内容，或当前筛选没有匹配结果。" /></section>
    </DataState>
    <p class="data-note">规模、折溢价、跟踪指数和持仓不在当前 ETF 列表接口中，详情页仅在数据源提供时展示。</p>
  </section>
</template>
<style scoped>.etf-page{max-width:1100px;margin:0 auto}.toolbar{margin-bottom:10px;padding:0 18px}.toolbar-line{display:flex;align-items:center;justify-content:space-between}.rank-tabs,.category-tabs{display:flex;gap:24px}.rank-tabs button,.category-tabs button{position:relative;padding:13px 0;border:0;background:transparent;color:var(--muted);font-size:12px}.rank-tabs button.selected,.category-tabs button.selected{color:var(--primary);font-weight:600}.rank-tabs button.selected:after,.category-tabs button.selected:after{position:absolute;right:0;bottom:-1px;left:0;height:2px;background:var(--primary);content:''}.category-tabs{gap:20px;border-top:1px solid var(--border)}.category-tabs button{padding:10px 0;font-size:11px}.search{display:flex;align-items:center;gap:7px;width:230px;padding:7px 10px;color:var(--muted);background:var(--bg);border:1px solid var(--border)}.search input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--text);font-size:11px}.table{padding:0 18px}.row{display:grid;grid-template-columns:1.8fr 1fr 1fr 1fr;gap:12px;align-items:center;min-height:62px;border-bottom:1px solid var(--border);font-size:12px}.row>span{text-align:right}.header{min-height:42px;color:var(--muted);font-size:10px}.row>div{display:grid;grid-template-columns:28px 1fr;min-width:0}.row strong,.row small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.row small{grid-column:2;margin-top:4px;color:var(--muted);font:10px 'JetBrains Mono',monospace}.index{color:#a8b0bf;font:10px 'JetBrains Mono',monospace}.percent{font-weight:600}.data-note{margin:12px 2px;color:var(--muted);font-size:10px;line-height:1.6}@media(max-width:700px){.toolbar{padding:10px 14px}.toolbar-line{align-items:stretch;flex-direction:column;gap:8px}.rank-tabs,.category-tabs{gap:18px;overflow:auto}.search{width:100%}.table{padding:0 12px;overflow-x:auto}.row{min-width:560px}}</style>
