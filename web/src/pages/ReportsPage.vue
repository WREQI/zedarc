<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getReportsPage, type ResearchReport } from '@/services/reports'

const reports = ref<ResearchReport[]>([])
const keyword = ref('')
const institution = ref('')
const rating = ref('')
const code = ref('')
const tag = ref('')
const page = ref(1)
const pageSize = 20
const total = ref(0)
const totalPages = computed(() => Math.max(1, Math.ceil(total.value / pageSize)))
const isLoading = ref(true)
const error = ref('')
const institutions = computed(() => [...new Set(reports.value.map((report) => report.institution).filter(Boolean))])
const ratings = computed(() => [...new Set(reports.value.map((report) => report.rating).filter(Boolean))])
const codes = computed(() => [...new Set(reports.value.map((report) => report.code).filter(Boolean))])
const tags = computed(() => [...new Set(reports.value.flatMap((report) => report.tags).filter(Boolean))])
const filteredReports = computed(() => {
  const search = keyword.value.trim().toLowerCase()
  return reports.value.filter((report) => (!search || `${report.title} ${report.summary} ${report.institution} ${report.tags.join(' ')} ${report.code ?? ''}`.toLowerCase().includes(search)) && (!institution.value || report.institution === institution.value) && (!rating.value || report.rating === rating.value) && (!code.value || report.code === code.value) && (!tag.value || report.tags.includes(tag.value)))
})
async function load() { isLoading.value = true; error.value = ''; try { const result = await getReportsPage({ keyword: keyword.value.trim() || undefined, institution: institution.value || undefined, rating: rating.value || undefined, code: code.value || undefined, page: page.value, pageSize }); reports.value = result.items; total.value = result.total } catch { reports.value = []; total.value = 0; error.value = '研报暂时无法加载，请稍后重试。' } finally { isLoading.value = false } }
function resetFilters() { keyword.value = ''; institution.value = ''; rating.value = ''; code.value = ''; tag.value = ''; page.value = 1; load() }
function changePage(nextPage: number) { if (nextPage < 1 || nextPage > totalPages.value || nextPage === page.value) return; page.value = nextPage; load() }
onMounted(load)
</script>

<template>
  <section class="reports-page"><div class="page-heading"><div><p class="eyebrow">RESEARCH / REPORTS</p><h1>研报</h1><p class="muted">跟踪机构观点和行业研究，辅助基本面分析。</p></div><label class="report-search">⌕<input v-model="keyword" type="search" placeholder="搜索标题、机构、代码或标签" aria-label="搜索研报" @keyup.enter="page = 1; load()" /></label></div><div class="report-filters"><label>机构<select v-model="institution"><option value="">全部机构</option><option v-for="item in institutions" :key="item" :value="item">{{ item }}</option></select></label><label>股票<select v-model="code"><option value="">全部股票</option><option v-for="item in codes" :key="item" :value="item">{{ item }}</option></select></label><label>评级<select v-model="rating"><option value="">全部评级</option><option v-for="item in ratings" :key="item" :value="item">{{ item }}</option></select></label><label>标签<select v-model="tag"><option value="">全部标签</option><option v-for="item in tags" :key="item" :value="item">{{ item }}</option></select></label><button type="button" @click="page = 1; load()">筛选</button><button type="button" @click="resetFilters">重置筛选</button></div><LoadingState v-if="isLoading" label="正在加载研报" /><ErrorState v-else-if="error" title="研报加载失败" :message="error" :retry="load" /><section v-else class="report-list"><article v-for="report in filteredReports" :key="report.id" class="panel report-card"><RouterLink class="report-card-link" :to="`/reports/${report.id}`" aria-label="查看研报详情"><div class="report-head"><span class="report-rating">{{ report.rating }}</span><time>{{ report.date }}</time></div><h2>{{ report.title }}</h2><p>{{ report.summary }}</p><div class="report-foot"><span>{{ report.institution }}<em v-if="report.code"> · {{ report.code }}</em></span><div><b v-for="tag in report.tags" :key="tag">{{ tag }}</b></div><span class="detail-link">查看详情 →</span></div></RouterLink></article><EmptyState v-if="!filteredReports.length" title="暂无可用研报" message="当前接口未返回符合筛选条件的真实研报内容。" /><nav v-if="filteredReports.length && totalPages > 1" class="pagination" aria-label="研报分页"><button type="button" :disabled="page === 1" @click="changePage(page - 1)">上一页</button><span>第 {{ page }} / {{ totalPages }} 页</span><button type="button" :disabled="page >= totalPages" @click="changePage(page + 1)">下一页</button></nav></section></section>
</template>

<style scoped>
.reports-page { max-width: 920px; margin: 0 auto; }.report-filters { display: flex; align-items: end; gap: 10px; margin: 14px 0; }.report-filters label { display: grid; gap: 5px; color: var(--muted); font-size: 10px; }.report-filters select { min-width: 130px; padding: 8px; border: 1px solid var(--border); background: var(--card); color: var(--text); font-size: 11px; }.report-filters button { padding: 8px 10px; border: 1px solid var(--border); background: transparent; color: var(--primary); font-size: 10px; }.report-search { display: flex; align-items: center; gap: 8px; width: 250px; color: var(--muted); border: 1px solid var(--border); background: var(--card); padding: 9px 11px; }.report-search input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); font-size: 11px; }.report-list { display: grid; gap: 10px; }.report-card { padding: 0; }.report-card-link { display: block; padding: 20px; color: inherit; }.report-card-link:hover { background: var(--card-soft); }.report-head, .report-foot { display: flex; align-items: center; justify-content: space-between; }.report-rating { color: var(--up); background: rgba(230,53,53,.08); padding: 4px 8px; font-size: 10px; }.report-head time { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.report-card h2 { font-size: 16px; margin-top: 14px; }.report-card p { color: var(--muted); font-size: 11px; line-height: 1.7; margin-top: 8px; }.report-foot { color: var(--muted); font-size: 10px; margin-top: 18px; }.report-foot div { display: flex; gap: 5px; }.report-foot b { color: var(--primary); background: #edf4ff; padding: 3px 6px; font-weight: 400; }.report-foot em { font-style: normal; }.detail-link { color: var(--primary); }.pagination { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 16px 0; color: var(--muted); font-size: 11px; }.pagination button { padding: 7px 10px; border: 1px solid var(--border); background: var(--card); color: var(--primary); font-size: 10px; }.pagination button:disabled { cursor: not-allowed; opacity: .45; }@media (max-width: 640px) { .report-search { width: 100%; }.report-filters { align-items: stretch; flex-wrap: wrap; }.report-filters label { flex: 1 1 130px; }.report-filters button { align-self: end; }.report-foot { align-items: flex-start; flex-wrap: wrap; gap: 10px; } }
</style>
