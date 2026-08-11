<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import DataState from '@/components/DataState.vue'
import EmptyState from '@/components/EmptyState.vue'
import PageHeader from '@/components/PageHeader.vue'
import HorizontalTabs from '@/components/HorizontalTabs.vue'
import QuoteRow from '@/components/QuoteRow.vue'
import { getMarketStocks } from '@/services/market'
import type { StockQuote } from '@/services/market-types'
import { useWatchlistStore } from '@/stores/watchlist'
import { connectMarketSocket, type MarketSocketConnection, type MarketSocketEvent } from '@/services/market-socket'
import { stockQuoteFromRealtime } from '@/services/market'
import SyncConflictPanel from '@/components/SyncConflictPanel.vue'

const watchlist = useWatchlistStore()
const stocks = ref<StockQuote[]>([])
const activeGroupId = ref('default')
const activeFilter = ref<'全部' | '上涨' | '下跌'>('全部')
const selected = ref<string[]>([])
const editing = ref(false)
const batchLoading = ref(false)
const loading = ref(true)
const error = ref('')
const updatedAt = ref('—')
const realtimeStatus = ref<'connecting' | 'connected' | 'reconnecting' | 'closed' | 'error'>('closed')
let disconnectRealtime: MarketSocketConnection | undefined
const realtimeSequences = new Map<string, number>()
const stockMap = computed(() => new Map(stocks.value.map((stock) => [stock.code, stock])))
const activeItems = computed(() => activeGroupId.value === 'recent' ? watchlist.recentCodes.value.map((code, sortOrder) => ({ code, sortOrder })) : watchlist.itemsByGroup.value[activeGroupId.value] ?? [])
const currentStocks = computed(() => activeItems.value.map((item) => stockMap.value.get(item.code)).filter((stock): stock is StockQuote => Boolean(stock)))
const filteredStocks = computed(() => activeFilter.value === '上涨' ? currentStocks.value.filter((stock) => stock.trend === 'up') : activeFilter.value === '下跌' ? currentStocks.value.filter((stock) => stock.trend === 'down') : currentStocks.value)
const activeName = computed(() => activeGroupId.value === 'default' ? '默认自选' : activeGroupId.value === 'recent' ? '最近浏览' : watchlist.groups.value.find((group) => group.id === activeGroupId.value)?.name ?? '分组')
const groupList = watchlist.groups
const syncLabel = computed(() => watchlist.syncStatus.value === 'syncing' ? '同步中…' : watchlist.syncStatus.value === 'error' ? '同步失败' : watchlist.syncStatus.value === 'conflict' ? `有 ${watchlist.syncConflicts.value.length} 个冲突` : watchlist.syncStatus.value === 'synced' ? '已同步' : '本地保存')
const syncClass = computed(() => ({ local: watchlist.syncStatus.value === 'local', error: watchlist.syncStatus.value === 'error', conflict: watchlist.syncStatus.value === 'conflict' }))
const defaultCount = computed(() => watchlist.defaultItems.value.length)
const recentCount = computed(() => watchlist.recentCodes.value.length)
function itemCount(id: string) { return (watchlist.itemsByGroup.value[id] ?? []).length }
const selectedAll = computed(() => filteredStocks.value.length > 0 && filteredStocks.value.every((stock) => selected.value.includes(stock.code)))
const summary = computed(() => ({ up: currentStocks.value.filter((stock) => stock.trend === 'up').length, down: currentStocks.value.filter((stock) => stock.trend === 'down').length }))

async function load() { disconnectRealtime?.(); disconnectRealtime = undefined; loading.value = true; error.value = ''; try { await Promise.all([watchlist.hydrate(), getMarketStocks().then((data) => { stocks.value = data })]); updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }); startRealtime() } catch { error.value = '自选数据读取失败，请重试。' } finally { loading.value = false } }
function realtimeCodes() { return [...new Set([...Object.values(watchlist.itemsByGroup.value).flat().map((item) => item.code), ...watchlist.recentCodes.value])] }
function startRealtime() { disconnectRealtime?.(); const codes = realtimeCodes(); if (!codes.length) { disconnectRealtime = undefined; realtimeStatus.value = 'closed'; return }; disconnectRealtime = connectMarketSocket(codes, applyRealtimeEvent, { types: ['quote'], onStatus: (status) => { realtimeStatus.value = status } }) }
function applyRealtimeEvent(event: MarketSocketEvent) { const quote = stockQuoteFromRealtime(event.data); if (!quote) return; const sequence = typeof event.data === 'object' && event.data !== null && typeof (event.data as { sequence?: unknown }).sequence === 'number' ? (event.data as { sequence: number }).sequence : 0; if (sequence && sequence <= (realtimeSequences.get(quote.code) ?? 0)) return; realtimeSequences.set(quote.code, sequence); const index = stocks.value.findIndex((stock) => stock.code === quote.code); if (index < 0) return; stocks.value = stocks.value.map((stock, itemIndex) => itemIndex === index ? { ...stock, ...quote } : stock); updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }
function selectGroup(id: string) { activeGroupId.value = id; selected.value = []; activeFilter.value = '全部'; editing.value = false }
function exitBatchMode() { editing.value = false; selected.value = [] }
async function createGroup() { const name = window.prompt('请输入分组名称'); if (name?.trim()) { const group = await watchlist.createGroup(name); selectGroup(group.id) } }
async function renameGroup() { if (!watchlist.groups.value.some((group) => group.id === activeGroupId.value)) return; const name = window.prompt('请输入新的分组名称', activeName.value); if (name?.trim()) await watchlist.renameGroup(activeGroupId.value, name) }
async function deleteGroup() { if (!window.confirm(`删除“${activeName.value}”？其中股票会回到默认自选。`)) return; await watchlist.deleteGroup(activeGroupId.value); selectGroup('default') }
function toggle(code: string) { selected.value = selected.value.includes(code) ? selected.value.filter((item) => item !== code) : [...selected.value, code] }
function toggleAll() { selected.value = selectedAll.value ? [] : filteredStocks.value.map((stock) => stock.code) }
async function removeSelected() {
  if (!selected.value.length || batchLoading.value) return
  batchLoading.value = true
  try {
    if (activeGroupId.value === 'recent') watchlist.removeRecentBatch(selected.value)
    else await watchlist.removeBatch(selected.value, activeGroupId.value === 'default' ? null : activeGroupId.value)
    exitBatchMode()
  } finally { batchLoading.value = false }
}
async function moveSelected(event: Event) {
  const select = event.target as HTMLSelectElement
  const groupId = select.value
  if (!groupId || !selected.value.length || batchLoading.value || activeGroupId.value === 'recent') return
  batchLoading.value = true
  try { for (const code of selected.value) await watchlist.move(code, groupId === 'default' ? null : groupId); exitBatchMode() }
  finally { batchLoading.value = false; select.value = '' }
}
function clearRecent() { watchlist.clearRecent(); selected.value = [] }
function quoteClass(stock: StockQuote) { return stock.trend === 'up' ? 'text-up' : 'text-down' }
watch(() => realtimeCodes().sort().join(','), () => { if (disconnectRealtime) disconnectRealtime.setCodes(realtimeCodes()) })
onMounted(load)
onUnmounted(() => disconnectRealtime?.())
</script>

<template>
  <section class="watchlist-page">
    <PageHeader eyebrow="MARKET · PERSONAL" title="自选" description="管理关注标的，掌握实时行情"><template #actions><div class="head-actions"><span class="sync-badge" :class="syncClass">{{ syncLabel }}</span><button class="refresh-action" :disabled="loading" @click="load">↻</button><button class="edit-action" :disabled="batchLoading" @click="editing ? exitBatchMode() : editing = true">{{ editing ? '完成' : '批量管理' }}</button></div></template></PageHeader>
    <SyncConflictPanel :conflicts="watchlist.syncConflicts.value" :pending="watchlist.syncPending.value" @resolve="watchlist.resolveConflict" />
    <nav class="watchlist-group-navigation" aria-label="自选分组"><HorizontalTabs class="group-tabs" :items="[{ label: '默认自选', value: 'default', count: defaultCount }, ...groupList.map((group) => ({ label: group.name, value: group.id, count: itemCount(group.id) })), { label: '最近浏览', value: 'recent', count: recentCount }]" :model-value="activeGroupId" aria-label="自选分组" @update:model-value="selectGroup($event)"><button class="add-group" @click="createGroup">＋ 新建分组</button><RouterLink class="manage-link" to="/watchlist/groups">管理分组</RouterLink><RouterLink class="add-link" to="/market">＋ 添加自选</RouterLink></HorizontalTabs></nav>
    <DataState :status="loading ? 'loading' : error ? 'error' : !filteredStocks.length ? 'empty' : 'ready'" loading-label="正在加载自选数据" error-title="自选数据加载失败" empty-title="分组里还没有股票" message="从行情列表添加股票，或在编辑模式中移动已有自选。" empty-icon="☆" :retry="load">
    <template #default><section class="quote-section"><div class="section-intro"><div><h2>{{ activeName }}</h2><p>{{ currentStocks.length }} 个标的 · <span class="text-up">{{ summary.up }} 上涨</span> · <span class="text-down">{{ summary.down }} 下跌</span></p></div><div class="group-actions"><button v-if="activeGroupId !== 'default' && activeGroupId !== 'recent'" @click="renameGroup">重命名</button><button v-if="activeGroupId !== 'default' && activeGroupId !== 'recent'" class="danger-link" @click="deleteGroup">删除分组</button><small>更新于 {{ updatedAt }}</small></div></div><div class="section-bar"><div class="filters"><button v-for="filter in ['全部', '上涨', '下跌']" :key="filter" :class="{ active: activeFilter === filter }" @click="activeFilter = filter as '全部' | '上涨' | '下跌'; selected = []">{{ filter }}</button></div><button v-if="activeGroupId === 'recent' && currentStocks.length" class="clear-link" @click="clearRecent">清空记录</button></div><div v-if="editing && filteredStocks.length" class="batch-bar"><button :disabled="batchLoading" @click="toggleAll">{{ selectedAll ? '取消全选' : '全选' }}</button><span>已选 {{ selected.length }} 项</span><select :disabled="!selected.length || activeGroupId === 'recent' || batchLoading" @change="moveSelected"><option value="">移动到…</option><option value="default">默认自选</option><option v-for="group in groupList" :key="group.id" :value="group.id">{{ group.name }}</option></select><button class="danger-link" :disabled="!selected.length || batchLoading" @click="removeSelected">{{ batchLoading ? '处理中…' : activeGroupId === 'recent' ? '批量清除' : '批量删除' }}</button></div><div v-if="filteredStocks.length" class="quote-list"><div class="quote-heading"><span>名称 / 代码</span><span>最新价</span><span>涨跌幅</span><span>成交额</span><span /></div><QuoteRow v-for="(stock, index) in filteredStocks" :key="stock.code" :stock="stock" :index="index" :editable="editing" :selected="selected.includes(stock.code)" show-volume @toggle="toggle(stock.code)" /></div><EmptyState v-if="activeGroupId === 'recent'" title="暂无最近浏览" message="查看股票详情后，最近浏览的标的会显示在这里。" icon="◷" /></section><p v-if="filteredStocks.length" class="footer-note">共 {{ filteredStocks.length }} 个标的 · 行情数据仅供参考</p></template>
    </DataState>
  </section>
</template>

<style scoped>
.watchlist-page{width:min(1100px,100%);margin:0 auto;padding:0 0 28px;color:var(--text);font-size:12px;line-height:1.45}:deep(.page-header){padding:2px 0 24px}:deep(.page-header-description){font-size:12px;line-height:1.5}.page-head{display:flex;justify-content:space-between;padding:2px 2px 16px}.eyebrow{color:var(--primary);font:10px 'JetBrains Mono',monospace;letter-spacing:.12em}.page-head h1{margin-top:5px;font-size:23px}.subtitle,.section-intro p,.section-intro small{color:var(--muted);font-size:11px}.subtitle{margin-top:6px}.head-actions,.group-actions{display:flex;align-items:center;gap:10px}.sync-badge{display:inline-flex;align-items:center;min-height:32px;padding:0 2px;color:var(--muted);font-size:12px;white-space:nowrap}.sync-badge.local{color:var(--muted)}.sync-badge.error,.sync-badge.conflict{padding:6px 9px;border-radius:5px;color:var(--down);background:#fff1f0}.refresh-action,.edit-action,.group-actions button{border:1px solid var(--border);background:var(--card);color:var(--primary);border-radius:5px}.refresh-action{width:36px;height:36px;font-size:19px}.edit-action,.group-actions button{padding:9px 13px;font-size:12px}.group-tabs{display:flex;align-items:center;gap:24px;overflow:auto;border-bottom:1px solid var(--border)}.group-tabs button{position:relative;flex:none;padding:12px 2px 11px;border:0;background:transparent;color:var(--muted);font-size:12px;line-height:1.2}.group-tabs button.active{color:var(--text);font-weight:600}.group-tabs button.active:after{position:absolute;right:0;bottom:-1px;left:0;height:2px;background:var(--primary);content:''}.group-tabs b{margin-left:3px;color:var(--primary);font:10px 'JetBrains Mono',monospace}.add-group,.manage-link,.add-link{color:var(--primary)!important;font-size:10px!important}.manage-link{white-space:nowrap}.add-link{margin-left:auto;white-space:nowrap}.quote-section{margin-top:12px}.section-intro{display:flex;justify-content:space-between;align-items:flex-end;padding:5px 2px 8px}.section-intro h2{font-size:16px}.section-intro small{font:9px 'JetBrains Mono',monospace}.group-actions small{margin-left:4px}.section-bar{display:flex;justify-content:space-between;min-height:42px}.filters{display:flex;gap:4px}.filters button,.clear-link{padding:6px 10px;border:0;border-radius:4px;background:transparent;color:var(--muted);font-size:11px}.filters button.active{color:var(--primary);background:#edf4ff;font-weight:600}.batch-bar{display:flex;align-items:center;gap:12px;min-width:0;padding:8px 12px;background:#f7f9fc;border:1px solid var(--border);color:var(--muted);font-size:10px}.batch-bar span{flex:1;min-width:0}.batch-bar button{border:0;background:transparent;color:var(--primary);font-size:10px;white-space:nowrap}.batch-bar select{min-width:0;max-width:150px;padding:5px;border:1px solid var(--border);border-radius:4px;color:var(--muted);font-size:10px}.danger-link{color:var(--down)!important}.danger-link:disabled{opacity:.45}.quote-list{overflow:hidden;padding:0 14px;border:1px solid var(--border);border-radius:7px;background:var(--card)}.quote-heading,.quote-row{display:grid;grid-template-columns:minmax(150px,1.6fr) .85fr .85fr .85fr 28px;gap:8px;align-items:center}.quote-heading{min-height:42px;color:var(--muted);border-bottom:1px solid var(--border);font-size:11px;line-height:1.2}.quote-row{min-height:72px;border-bottom:1px solid var(--border);font-size:12px;text-decoration:none;color:inherit}.quote-row:last-child{border:0}.check-button{width:18px;height:18px;position:absolute;margin-left:0;border:1px solid #cfd7e4;border-radius:50%;background:#fff;color:#fff}.quote-row:has(.check-button){padding-left:25px}.check-button.checked{border-color:var(--primary);background:var(--primary)}.stock-name{display:grid;grid-template-columns:25px 1fr}.stock-name i{grid-row:span 2;color:#b3bac7;font:normal 9px 'JetBrains Mono',monospace}.stock-name strong{font-size:12px}.stock-name small,.quote-change small{color:var(--muted);font:9px 'JetBrains Mono',monospace}.stock-name small{margin-top:4px}.quote-price,.quote-volume,.quote-change{text-align:right;font-size:11px}.quote-change b,.quote-change small{display:block}.quote-change small{margin-top:4px}.row-actions{text-align:right;color:#b0bac7;font-size:18px}.text-up{color:var(--up)}.text-down{color:var(--down)}.footer-note{margin-top:16px;color:var(--muted);font-size:11px;text-align:center}@media(max-width:620px){.group-tabs{gap:12px}.manage-link{display:none}.add-link{display:none}.quote-list{padding:0 10px}.quote-heading,.quote-row{grid-template-columns:minmax(112px,1.45fr) .8fr .8fr 25px;gap:5px}.quote-heading span:nth-child(4),.quote-volume{display:none}.section-intro small{display:none}.group-actions button{padding:6px;font-size:10px}.batch-bar{gap:7px;padding-right:8px;padding-left:8px}.batch-bar span{flex-basis:58px}.batch-bar select{flex:1;max-width:none}.batch-bar button{font-size:9px}}
</style>
