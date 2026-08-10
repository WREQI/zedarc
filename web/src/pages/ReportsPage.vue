<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getReports, type ResearchReport } from '@/services/reports'

const reports = ref<ResearchReport[]>([])
const keyword = ref('')
const isLoading = ref(true)
const error = ref('')
const filteredReports = computed(() => keyword.value.trim() ? reports.value.filter((report) => `${report.title}${report.institution}${report.tags.join('')}`.includes(keyword.value.trim())) : reports.value)
async function load() { isLoading.value = true; error.value = ''; try { reports.value = await getReports() } catch { error.value = '研报暂时无法加载，请稍后重试。' } finally { isLoading.value = false } }
onMounted(load)
</script>

<template>
  <section class="reports-page"><div class="page-heading"><div><p class="eyebrow">RESEARCH / REPORTS</p><h1>研报</h1><p class="muted">跟踪机构观点和行业研究，辅助基本面分析。</p></div><label class="report-search">⌕<input v-model="keyword" placeholder="搜索标题、机构或标签" /></label></div><LoadingState v-if="isLoading" label="正在加载研报" /><ErrorState v-else-if="error" title="研报加载失败" :message="error" :retry="load" /><section v-else class="report-list"><article v-for="report in filteredReports" :key="report.id" class="panel report-card"><div class="report-head"><span class="report-rating">{{ report.rating }}</span><time>{{ report.date }}</time></div><h2>{{ report.title }}</h2><p>{{ report.summary }}</p><div class="report-foot"><span>{{ report.institution }}</span><div><b v-for="tag in report.tags" :key="tag">{{ tag }}</b></div><button>查看详情 →</button></div></article><EmptyState v-if="!filteredReports.length" title="没有匹配研报" message="请尝试其他关键词。" /></section></section>
</template>

<style scoped>
.reports-page { max-width: 920px; margin: 0 auto; }.report-search { display: flex; align-items: center; gap: 8px; width: 250px; color: var(--muted); border: 1px solid var(--border); background: var(--card); padding: 9px 11px; }.report-search input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 11px; }.report-list { display: grid; gap: 10px; }.report-card { padding: 20px; }.report-head, .report-foot { display: flex; align-items: center; justify-content: space-between; }.report-rating { color: var(--up); background: rgba(230,53,53,.08); padding: 4px 8px; font-size: 10px; }.report-head time { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.report-card h2 { font-size: 16px; margin-top: 14px; }.report-card p { color: var(--muted); font-size: 11px; line-height: 1.7; margin-top: 8px; }.report-foot { color: var(--muted); font-size: 10px; margin-top: 18px; }.report-foot div { display: flex; gap: 5px; }.report-foot b { color: var(--primary); background: #edf4ff; padding: 3px 6px; font-weight: 400; }.report-foot button { color: var(--primary); border: 0; background: transparent; font-size: 10px; }@media (max-width: 640px) { .report-search { width: 100%; }.report-foot { align-items: flex-start; flex-wrap: wrap; gap: 10px; }.report-foot button { margin-left: auto; } }
</style>
