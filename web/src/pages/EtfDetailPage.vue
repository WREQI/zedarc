<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getBoardQuotes } from '@/services/market'
import type { MarketBoardQuote } from '@/services/market-types'

const route = useRoute()
const code = computed(() => String(route.params.code || ''))
const item = ref<MarketBoardQuote>()
const loading = ref(true)
const error = ref('')
async function load() {
  loading.value = true; error.value = ''
  try { item.value = (await getBoardQuotes('ETF')).find((row) => !code.value || row.code === code.value) } catch { error.value = 'ETF详情暂时无法加载，请稍后重试。' } finally { loading.value = false }
}
onMounted(load)
</script>

<template>
  <section class="etf-detail"><header class="detail-nav"><RouterLink to="/etf">‹</RouterLink><span>ETF详情</span><button @click="load">↻</button></header><LoadingState v-if="loading" label="正在加载 ETF 详情" /><ErrorState v-else-if="error" title="详情加载失败" :message="error" :retry="load" /><EmptyState v-else-if="!item" title="暂未找到该 ETF" message="请返回 ETF 列表选择其他标的。" /><template v-else><section class="overview"><p class="eyebrow">ETF / FUND PROFILE</p><div class="name-line"><div><h1>{{ item.name }}</h1><span>{{ item.code }}</span></div><strong :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.price }}</strong></div><div class="change" :class="item.trend === 'up' ? 'text-up' : 'text-down'"><span>{{ item.change }}</span><span>{{ item.percent }}</span></div></section><section class="metrics panel"><div><small>最新价</small><b>{{ item.price }}</b></div><div><small>涨跌幅</small><b :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</b></div><div><small>成交/参考</small><b>{{ item.extra || '--' }}</b></div><div><small>基金类型</small><b>场内 ETF</b></div></section><section class="panel placeholder"><h2>净值与持仓</h2><p>更多净值、规模和持仓数据将在数据源恢复后展示。</p><EmptyState title="暂无扩展数据" message="当前接口只返回行情快照。" /></section></template></section>
</template>

<style scoped>
.etf-detail{max-width:720px;min-height:100vh;margin:0 auto;background:#f5f6f8}.detail-nav{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 14px;background:#fff;border-bottom:1px solid #edf0f4;font-size:15px;font-weight:600}.detail-nav a,.detail-nav button{border:0;background:transparent;color:#526075;font-size:25px}.overview{padding:18px 14px;background:#fff}.name-line{display:flex;align-items:flex-end;justify-content:space-between;gap:15px}.name-line h1{font-size:20px}.name-line span{display:block;margin-top:5px;color:#98a1af;font:10px 'JetBrains Mono',monospace}.name-line strong{font:600 30px 'JetBrains Mono',monospace}.change{display:flex;gap:14px;margin-top:7px;font:13px 'JetBrains Mono',monospace}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:8px;padding:15px 14px}.metrics div{display:flex;flex-direction:column;gap:6px}.metrics small{color:#98a1af;font-size:10px}.metrics b{font:12px 'JetBrains Mono',monospace}.placeholder{margin-top:8px;padding:16px 14px}.placeholder h2{font-size:15px}.placeholder>p{margin-top:7px;color:#8c96a5;font-size:11px}@media(max-width:520px){.metrics{grid-template-columns:repeat(2,1fr);row-gap:15px}}
</style>