<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getIndexQuotes } from '@/services/market'
import type { IndexQuote } from '@/services/market-types'
const indices = ref<IndexQuote[]>([])
const loading = ref(true)
const error = ref('')
async function load() { loading.value = true; error.value = ''; try { indices.value = await getIndexQuotes() } catch { error.value = '全球市场数据暂时无法加载，请稍后重试。' } finally { loading.value = false } }
onMounted(load)
</script>

<template><section class="global-page"><header class="page-heading"><div><p class="eyebrow">MARKET / GLOBAL</p><h1>全球市场</h1><p class="muted">聚合主要地区指数，关注隔夜市场与风险偏好变化。</p></div><button class="secondary-button" @click="load">↻ 刷新</button></header><LoadingState v-if="loading" label="正在加载全球市场" /><ErrorState v-else-if="error" title="全球市场加载失败" :message="error" :retry="load" /><section v-else class="regions"><article v-for="item in indices" :key="item.code" class="panel region-card"><div><strong>{{ item.name }}</strong><small>{{ item.code }}</small></div><b class="mono">{{ item.value }}</b><p class="mono" :class="item.trend === 'up' ? 'text-up' : 'text-down'">{{ item.change }}　{{ item.percent }}</p><i>▁▃▂▅▄▆</i></article><EmptyState v-if="!indices.length" title="暂无全球市场数据" message="当前数据源暂未提供全球指数行情，请稍后重试。" /></section></section></template>

<style scoped>
.global-page{max-width:1100px;margin:0 auto}.regions{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.region-card{position:relative;padding:16px;overflow:hidden}.region-card>div{display:flex;align-items:baseline;gap:7px}.region-card strong{font-size:13px}.region-card small{color:var(--muted);font:10px 'JetBrains Mono',monospace}.region-card>b{display:block;margin:18px 0 5px;font-size:22px}.region-card p{font-size:11px}.region-card i{position:absolute;right:15px;bottom:15px;color:var(--primary);font:17px 'JetBrains Mono',monospace;opacity:.35}@media(max-width:700px){.regions{grid-template-columns:repeat(2,1fr)}.region-card{padding:13px}.region-card>b{font-size:18px;margin-top:14px}}@media(max-width:420px){.regions{grid-template-columns:1fr}}
</style>