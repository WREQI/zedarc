<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import EmptyState from '@/components/EmptyState.vue'
import ErrorState from '@/components/ErrorState.vue'
import LoadingState from '@/components/LoadingState.vue'
import { getFinancialCalendar, type FinancialCalendarEvent, type FinancialCalendarEventType } from '@/services/financial-calendar'

const typeOptions: Array<{ value: FinancialCalendarEventType; label: string }> = [
  { value: 'financial-report', label: '财报披露' },
  { value: 'dividend', label: '分红除权' },
  { value: 'ipo-subscription', label: '新股申购' },
  { value: 'macro', label: '宏观事件' },
]
const typeLabels = Object.fromEntries(typeOptions.map((item) => [item.value, item.label])) as Record<FinancialCalendarEventType, string>
const date = ref('')
const startDate = ref('')
const endDate = ref('')
const type = ref<FinancialCalendarEventType | ''>('')
const events = ref<FinancialCalendarEvent[]>([])
const selected = ref<FinancialCalendarEvent>()
const isLoading = ref(true)
const error = ref('')
const source = ref('')
const emptyReason = ref('')
const typeLabel = computed(() => (event: FinancialCalendarEvent) => typeLabels[event.type] ?? event.type)

async function load() {
  isLoading.value = true
  error.value = ''
  try {
    const result = await getFinancialCalendar({ date: date.value || undefined, startDate: startDate.value || undefined, endDate: endDate.value || undefined, type: type.value || undefined })
    events.value = result.items
    selected.value = result.items.find((item) => item.id === selected.value?.id) ?? result.items[0]
    source.value = result.source
    emptyReason.value = result.reason ?? '当前筛选条件下没有事件'
  } catch { error.value = '财经日历暂时无法加载，请稍后重试。' } finally { isLoading.value = false }
}
function resetFilters() { date.value = ''; startDate.value = ''; endDate.value = ''; type.value = '' }
function formatDate(value: string) { return value.replace(/-/g, '.') }
function formatNumber(value: number | null | undefined) { return value == null ? '暂无' : `${value}` }
onMounted(load)
watch([date, startDate, endDate, type], load)
</script>

<template>
  <section class="calendar-page">
    <div class="page-heading">
      <div><p class="eyebrow">MARKET / CALENDAR</p><h1>财经日历</h1><p class="muted">只展示现有行情 provider 已返回的结构化事件，不补造缺失数据。</p></div>
      <button class="secondary-button" type="button" @click="load">刷新</button>
    </div>

    <section class="panel calendar-filters" aria-label="日历筛选">
      <label>指定日期<input v-model="date" type="date" /></label>
      <label>开始日期<input v-model="startDate" type="date" /></label>
      <label>结束日期<input v-model="endDate" type="date" /></label>
      <label>事件类型<select v-model="type"><option value="">全部类型</option><option v-for="option in typeOptions" :key="option.value" :value="option.value">{{ option.label }}</option></select></label>
      <button class="text-button reset-button" type="button" @click="resetFilters">清除筛选</button>
    </section>

    <LoadingState v-if="isLoading" label="正在读取财经日历" />
    <ErrorState v-else-if="error" title="日历加载失败" :message="error" :retry="load" />
    <template v-else>
      <div class="calendar-meta"><span>{{ events.length ? `共 ${events.length} 条事件` : '暂无事件' }}</span><span v-if="source" class="source">数据源：{{ source }}</span></div>
      <section v-if="events.length" class="calendar-layout">
        <div class="event-list panel">
          <button v-for="event in events" :key="event.id" class="event-row" :class="{ selected: selected?.id === event.id }" type="button" @click="selected = event">
            <time>{{ formatDate(event.date) }}</time><span class="event-type">{{ typeLabel(event) }}</span><strong>{{ event.title }}</strong><small>{{ event.stock?.code }} · {{ event.detail }}</small>
          </button>
        </div>
        <article v-if="selected" class="panel event-detail"><p class="eyebrow">EVENT DETAIL</p><div class="detail-title"><h2>{{ selected.title }}</h2><span class="event-type">{{ typeLabel(selected) }}</span></div><p class="detail-date">{{ formatDate(selected.date) }}</p><p class="detail-copy">{{ selected.detail }}</p><div v-if="selected.stock" class="stock-link"><span>关联股票</span><strong>{{ selected.stock.name }}</strong><code>{{ selected.stock.code }}</code></div><dl><template v-if="selected.metadata.exDividendDate"><dt>除权日</dt><dd>{{ selected.metadata.exDividendDate }}</dd></template><template v-if="selected.metadata.equityRecordDate"><dt>股权登记日</dt><dd>{{ selected.metadata.equityRecordDate }}</dd></template><template v-if="selected.metadata.payDate"><dt>派息日</dt><dd>{{ selected.metadata.payDate }}</dd></template><template v-if="selected.metadata.dividendPretax != null"><dt>税前分红</dt><dd>{{ formatNumber(selected.metadata.dividendPretax) }}</dd></template></dl><p class="detail-source">来源：{{ selected.source }}</p></article>
      </section>
      <EmptyState v-else title="暂无财经事件" :message="emptyReason" icon="◷" />
    </template>
  </section>
</template>

<style scoped>
.calendar-page { max-width: 1040px; margin: 0 auto; }.calendar-filters { display: flex; align-items: end; flex-wrap: wrap; gap: 12px; padding: 16px; margin-bottom: 16px; }.calendar-filters label { display: grid; gap: 6px; color: var(--muted); font-size: 10px; }.calendar-filters input, .calendar-filters select { min-width: 145px; padding: 8px 9px; border: 1px solid var(--border); border-radius: 3px; color: var(--text); background: var(--card-soft); font-size: 11px; }.reset-button { margin-left: auto; padding: 8px 2px; }.calendar-meta { display: flex; justify-content: space-between; color: var(--muted); font-size: 11px; margin: 10px 0; }.source { font-family: 'JetBrains Mono', monospace; font-size: 10px; }.calendar-layout { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr); gap: 14px; align-items: start; }.event-list { overflow: hidden; }.event-row { display: grid; grid-template-columns: 92px 72px 1fr; gap: 8px; align-items: center; width: 100%; padding: 15px 17px; text-align: left; color: var(--text); background: var(--card); border: 0; border-bottom: 1px solid var(--border); }.event-row:last-child { border-bottom: 0; }.event-row:hover, .event-row.selected { background: var(--card-soft); }.event-row time { color: var(--muted); font: 10px 'JetBrains Mono', monospace; }.event-type { color: var(--primary); background: rgba(48,119,236,.08); padding: 4px 6px; font-size: 10px; white-space: nowrap; }.event-row strong { font-size: 12px; }.event-row small { grid-column: 3; color: var(--muted); font-size: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }.event-detail { min-height: 270px; padding: 22px; }.detail-title { display: flex; gap: 10px; align-items: center; justify-content: space-between; margin-top: 14px; }.detail-title h2 { font-size: 17px; }.detail-date { color: var(--primary); font: 12px 'JetBrains Mono', monospace; margin-top: 10px; }.detail-copy { color: var(--muted); font-size: 12px; line-height: 1.7; margin-top: 20px; }.stock-link { display: grid; grid-template-columns: 1fr auto; gap: 4px 10px; padding: 13px 0; margin-top: 18px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }.stock-link span { color: var(--muted); font-size: 10px; grid-column: 1 / -1; }.stock-link strong { font-size: 12px; }.stock-link code { color: var(--muted); font-size: 10px; }.event-detail dl { display: grid; grid-template-columns: 1fr auto; gap: 8px; margin: 16px 0 0; font-size: 10px; }.event-detail dt { color: var(--muted); }.event-detail dd { margin: 0; font-family: 'JetBrains Mono', monospace; }.detail-source { color: var(--muted); font-size: 10px; margin-top: 22px; }@media (max-width: 720px) { .calendar-filters { align-items: stretch; }.calendar-filters label { flex: 1 1 140px; }.reset-button { margin-left: 0; }.calendar-layout { grid-template-columns: 1fr; }.event-row { grid-template-columns: 82px 68px 1fr; padding: 13px 12px; }.event-detail { min-height: 0; } }
</style>
