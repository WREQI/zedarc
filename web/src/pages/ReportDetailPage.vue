<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import EmptyState from '@/components/EmptyState.vue'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import { getReport, getReportsPage, type ResearchReport } from '@/services/reports'

const route = useRoute()
const report = ref<ResearchReport | null>(null)
const loading = ref(true)
const error = ref('')
const relatedReports = ref<ResearchReport[]>([])
async function load() { loading.value = true; error.value = ''; try { report.value = await getReport(String(route.params.id)); relatedReports.value = report.value.code ? (await getReportsPage({ code: report.value.code, page: 1, pageSize: 5 })).items.filter((item) => String(item.id) !== String(report.value?.id)) : [] } catch { error.value = '研报不存在或暂时无法加载。' } finally { loading.value = false } }
onMounted(() => void load())
</script>
<template>
  <section class="report-detail-page"><RouterLink class="back-link" to="/reports">‹ 返回研报</RouterLink><LoadingState v-if="loading" label="正在加载研报" /><ErrorState v-else-if="error" title="研报加载失败" :message="error" :retry="load" /><article v-else-if="report" class="panel report-detail"><header><div class="report-meta"><span class="report-rating">{{ report.rating }}</span><time>{{ report.date }}</time><span>{{ report.institution }}</span></div><h1>{{ report.title }}</h1><div class="report-tags"><b v-for="tag in report.tags" :key="tag">{{ tag }}</b></div></header><section class="report-summary"><strong>核心摘要</strong><p>{{ report.summary }}</p></section><section class="report-content"><p v-if="report.content" v-for="(paragraph, index) in report.content.split('\n\n')" :key="index">{{ paragraph }}</p><EmptyState v-else title="研报正文暂不可用" message="当前接口仅返回摘要，未返回可展示的真实正文内容。" /></section><footer><span v-if="report.code">关联标的：{{ report.code }}</span><span v-if="report.targetPrice">目标价：{{ report.targetPrice }}</span><small>免责声明：本文仅作信息展示，不构成投资建议。</small></footer></article><section v-if="relatedReports.length" class="panel related-reports"><h2>同标的研报</h2><RouterLink v-for="item in relatedReports" :key="item.id" :to="`/reports/${item.id}`"><strong>{{ item.title }}</strong><span>{{ item.institution }} · {{ item.date }} ›</span></RouterLink></section><EmptyState v-else-if="report?.code" title="暂无同标的研报" message="当前研报接口未返回该标的的其他真实研报。" /></section>
</template>
<style scoped>
.report-detail-page { max-width: 920px; margin: 0 auto; }.related-reports { margin-top: 12px; padding: 18px 22px; }.related-reports h2 { font-size: 14px; }.related-reports a { display: flex; justify-content: space-between; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); color: var(--text); font-size: 11px; }.related-reports span { color: var(--muted); white-space: nowrap; }.back-link { display: inline-block; color: var(--primary); font-size: 12px; margin-bottom: 14px; }.report-detail { padding: clamp(20px, 5vw, 42px); }.report-meta { display: flex; align-items: center; gap: 14px; color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.report-rating { color: var(--up); background: rgba(230,53,53,.08); padding: 5px 9px; font-family: inherit; }.report-detail h1 { max-width: 700px; font-size: clamp(22px, 4vw, 32px); line-height: 1.45; margin-top: 19px; }.report-tags { display: flex; gap: 7px; margin-top: 16px; }.report-tags b { color: var(--primary); background: #edf4ff; padding: 5px 9px; font-size: 10px; font-weight: 400; }.report-summary { margin-top: 32px; padding: 17px 19px; border-left: 3px solid var(--primary); background: var(--bg); }.report-summary strong { font-size: 12px; }.report-summary p, .report-content p { color: var(--muted); font-size: 13px; line-height: 2; margin-top: 9px; }.report-content { padding-top: 22px; }.report-content p + p { margin-top: 17px; }.report-detail footer { display: flex; flex-wrap: wrap; gap: 15px; align-items: center; border-top: 1px solid var(--border); margin-top: 30px; padding-top: 17px; color: var(--primary); font-size: 11px; }.report-detail footer small { width: 100%; color: var(--muted); font-size: 10px; }
</style>