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
const activeTab = ref<'quote' | 'nav' | 'holdings'>('quote')
const tabs = [{ key: 'quote', label: '行情概览' }, { key: 'nav', label: '净值 / 跟踪指数' }, { key: 'holdings', label: '成分股' }] as const

async function load() {
  loading.value = true; error.value = ''
  try { item.value = (await getBoardQuotes('ETF')).find((row) => !code.value || row.code === code.value) } catch { error.value = 'ETF 详情暂时无法加载，请稍后重试。' } finally { loading.value = false }
}
onMounted(load)
</script>

<template>
  <section class="etf-detail">
    <header class="detail-nav"><RouterLink to="/etf">‹</RouterLink><span>ETF详情</span><button type="button" aria-label="刷新" @click="load">↻</button></header>
    <LoadingState v-if="loading" label="正在加载 ETF 详情" />
    <ErrorState v-else-if="error" title="详情加载失败" :message="error" :retry="load" />
    <EmptyState v-else-if="!item" title="暂未找到该 ETF" message="请返回 ETF 列表选择其他标的。" />
    <template v-else>
      <section class="overview"><p class="eyebrow">ETF / FUND PROFILE</p><div class="name-line"><div><h1>{{ item.name }}</h1><span>{{ item.code }}</span></div><strong :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.price }}</strong></div><div class="change" :class="item.trend === 'up' ? 'text-up' : 'text-down'"><span>{{ item.change }}</span><span>{{ item.percent }}</span></div></section>
      <nav class="detail-tabs panel" role="tablist" aria-label="ETF详情栏目"><button v-for="tab in tabs" :key="tab.key" type="button" role="tab" :aria-selected="activeTab === tab.key" :class="{ active: activeTab === tab.key }" @click="activeTab = tab.key">{{ tab.label }}</button></nav>
      <section v-if="activeTab === 'quote'" class="metrics panel"><div><small>最新价 / 净值</small><b>{{ item.price }}</b></div><div><small>涨跌幅</small><b :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.percent }}</b></div><div><small>成交额</small><b>{{ item.extra || '--' }}</b></div><div><small>基金类型</small><b>场内 ETF</b></div></section>
      <section v-else-if="activeTab === 'nav'" class="panel placeholder"><h2>净值与跟踪指数</h2><p>当前 API 仅返回行情快照，未提供净值历史、估算净值或跟踪指数字段。</p><EmptyState title="暂无净值 / 指数数据" message="待上游 provider 提供对应字段后展示。" /></section>
      <section v-else class="panel placeholder"><h2>ETF 成分股</h2><p>当前 API 未提供持仓明细、权重和更新时间。</p><EmptyState title="暂无成分股数据" message="为避免误导，当前不展示估算或静态成分股。" /></section>
    </template>
  </section>
</template>

<style scoped>
.etf-detail{max-width:720px;min-height:100vh;margin:0 auto;background:var(--bg)}.detail-nav{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 14px;background:var(--card);border-bottom:1px solid var(--border);font-size:15px;font-weight:600}.detail-nav a,.detail-nav button{border:0;background:transparent;color:var(--muted);font-size:25px}.overview{padding:18px 14px;background:var(--card)}.name-line{display:flex;align-items:flex-end;justify-content:space-between;gap:15px}.name-line h1{font-size:20px}.name-line span{display:block;margin-top:5px;color:var(--muted);font:10px 'JetBrains Mono',monospace}.name-line strong{font:600 30px 'JetBrains Mono',monospace}.change{display:flex;gap:14px;margin-top:7px;font:13px 'JetBrains Mono',monospace}.detail-tabs{display:flex;margin-top:8px;padding:0 14px;overflow:auto}.detail-tabs button{position:relative;flex:1;min-width:120px;padding:13px 4px;border:0;background:transparent;color:var(--muted);font-size:12px}.detail-tabs button.active{color:var(--primary);font-weight:600}.detail-tabs button.active:after{position:absolute;right:18%;bottom:-1px;left:18%;height:2px;background:var(--primary);content:''}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:8px;padding:15px 14px}.metrics div{display:flex;flex-direction:column;gap:6px}.metrics small{color:var(--muted);font-size:10px}.metrics b{font:12px 'JetBrains Mono',monospace}.placeholder{margin-top:8px;padding:16px 14px}.placeholder h2{font-size:15px}.placeholder>p{margin-top:7px;color:var(--muted);font-size:11px;line-height:1.6}@media(max-width:520px){.metrics{grid-template-columns:repeat(2,1fr);row-gap:15px}}
</style>
