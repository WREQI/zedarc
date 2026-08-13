<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import DataState from '@/components/DataState.vue'
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
const groupList = watchlist.groups

async function load() { disconnectRealtime?.(); disconnectRealtime = undefined; loading.value = true; error.value = ''; try { await Promise.all([watchlist.hydrate(), getMarketStocks().then((data) => { stocks.value = data })]); updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }); startRealtime() } catch { error.value = '自选数据读取失败，请重试。' } finally { loading.value = false } }
function realtimeCodes() { return [...new Set([...Object.values(watchlist.itemsByGroup.value).flat().map((item) => item.code), ...watchlist.recentCodes.value])] }
function startRealtime() { disconnectRealtime?.(); const codes = realtimeCodes(); if (!codes.length) { disconnectRealtime = undefined; realtimeStatus.value = 'closed'; return }; disconnectRealtime = connectMarketSocket(codes, applyRealtimeEvent, { types: ['quote'], onStatus: (status) => { realtimeStatus.value = status } }) }
function applyRealtimeEvent(event: MarketSocketEvent) { const quote = stockQuoteFromRealtime(event.data); if (!quote) return; const sequence = typeof event.data === 'object' && event.data !== null && typeof (event.data as { sequence?: unknown }).sequence === 'number' ? (event.data as { sequence: number }).sequence : 0; if (sequence && sequence <= (realtimeSequences.get(quote.code) ?? 0)) return; realtimeSequences.set(quote.code, sequence); const index = stocks.value.findIndex((stock) => stock.code === quote.code); if (index < 0) return; stocks.value = stocks.value.map((stock, itemIndex) => itemIndex === index ? { ...stock, ...quote } : stock); updatedAt.value = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }
function toggle(code: string) { selected.value = selected.value.includes(code) ? selected.value.filter((item) => item !== code) : [...selected.value, code] }
function quoteClass(stock: StockQuote) { return stock.trend === 'up' ? 'text-up' : 'text-down' }
function sparkPath(index: number, trend: StockQuote['trend']) {
  const paths = ['M2 28 L8 20 L14 24 L20 10 L26 17 L32 7 L38 9', 'M2 26 L8 22 L14 24 L20 12 L26 18 L32 8 L38 5', 'M2 27 L8 25 L14 15 L20 20 L26 11 L32 13 L38 4', 'M2 25 L8 19 L14 21 L20 14 L26 17 L32 6 L38 10']
  return trend === 'up' ? paths[index % paths.length] : paths[(index + 2) % paths.length].replace(/(\d+) (\d+)/g, (_, x, y) => `${x} ${35 - Number(y)}`)
}
watch(() => realtimeCodes().sort().join(','), () => { if (disconnectRealtime) disconnectRealtime.setCodes(realtimeCodes()) })
onMounted(load)
onUnmounted(() => disconnectRealtime?.())
</script>

<template>
  <section class="watchlist-page">

    <SyncConflictPanel :conflicts="watchlist.syncConflicts.value" :pending="watchlist.syncPending.value" @resolve="watchlist.resolveConflict" />
    <DataState :status="loading ? 'loading' : error ? 'error' : 'ready'" loading-label="正在加载自选数据" error-title="自选数据加载失败" :message="error" :retry="load">
      <section class="watchlist-content">
        <template v-if="filteredStocks.length">
          <div class="list-toolbar"><span>股票 <b>({{ filteredStocks.length }})</b></span><button aria-label="筛选">▽</button><span class="sort-label">最新价 <b>↕</b></span><span>涨跌幅 <b>↕</b></span></div>
          <div class="stock-list">
            <RouterLink v-for="(stock, index) in filteredStocks" :key="stock.code" :to="`/stock/${stock.code}`" class="stock-row">
              <span class="stock-info"><strong>{{ stock.name }}</strong><small><i :class="stock.code.startsWith('6') ? 'sh' : stock.code.startsWith('0') ? 'sz' : 'fund'">{{ stock.code.startsWith('6') ? 'SH' : stock.code.startsWith('0') ? 'SZ' : '基' }}</i>{{ stock.code }}</small></span>
              <svg class="sparkline" viewBox="0 0 40 35" aria-hidden="true"><path :class="stock.trend" :d="sparkPath(index, stock.trend)" /></svg>
              <strong class="stock-price">{{ stock.price }}</strong>
              <span class="stock-percent" :class="stock.trend">{{ stock.percent }}</span>
            </RouterLink>
          </div>
        </template>
        <section v-else class="empty-watchlist">
          <div class="empty-cube" aria-hidden="true">◇</div>
          <p>添加自选，随时帮你智能盯盘</p>
          <RouterLink to="/market">＋ 添加股票</RouterLink>
          <RouterLink class="hot-link" to="/market">查看热搜榜单 ›</RouterLink>
        </section>
      </section>
    </DataState>
  </section>
</template>

<style scoped>
.watchlist-page{min-height:100vh;background:#f7f8fb;color:#303b4d;font-size:14px}.watchlist-header{display:flex;align-items:center;gap:16px;padding:8px 16px;background:#fff}.search-box{display:flex;align-items:center;gap:10px;min-width:0;flex:1;height:38px;padding:0 13px;border-radius:4px;background:#f3f5f9;color:#909aaa;text-decoration:none;font-size:16px;white-space:nowrap;overflow:hidden}.search-box span:last-child{overflow:hidden;text-overflow:ellipsis}.search-box span:first-child{font-size:25px;line-height:1}.yuanbao{color:#f0443c;font-size:20px;white-space:nowrap}.strategy-tabs{display:flex;align-items:center;gap:27px;height:60px;padding:0 20px;background:#fff;border-bottom:1px solid #eef0f4;white-space:nowrap;overflow:hidden}.strategy-tabs button{position:relative;flex:none;padding:17px 0 15px;border:0;background:transparent;color:#465162;font-size:18px}.strategy-tabs button.active{color:#202b3c;font-weight:600}.strategy-tabs button.active i{position:absolute;right:50%;bottom:7px;width:20px;height:3px;border-radius:2px;background:#3279e8;transform:translateX(50%)}.more-button{font-size:23px!important;margin-left:auto}.menu-button{font-size:26px!important}.watchlist-content{min-height:calc(100vh - 106px);background:#f7f8fb}.list-toolbar{display:grid;grid-template-columns:1fr 28px 90px 90px;align-items:center;gap:8px;padding:14px 18px 10px;color:#8993a2;font-size:14px}.list-toolbar b{font-weight:400;color:#9aa3b0}.list-toolbar button{border:0;background:transparent;color:#9aa3b0;font-size:20px;text-align:left}.list-toolbar span:nth-last-child(-n+2){text-align:right}.sort-label{margin-left:auto}.stock-list{background:#fff}.stock-row{display:grid;grid-template-columns:minmax(0,1fr) 58px 82px 123px;align-items:center;gap:10px;min-height:70px;padding:7px 18px;border-bottom:1px solid #edf0f3;color:inherit;text-decoration:none}.stock-info{display:flex;min-width:0;flex-direction:column;gap:5px}.stock-info strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:18px;font-weight:500}.stock-info small{display:flex;align-items:center;gap:5px;color:#9ca5b3;font-size:14px}.stock-info i{display:inline-grid;place-items:center;width:19px;height:16px;border-radius:2px;color:#fff;font-size:9px;font-style:normal}.stock-info i.sh,.stock-info i.sz{background:#ed5260}.stock-info i.fund{background:#ef5965}.sparkline{width:52px;height:42px}.sparkline path{fill:none;stroke-width:1.5}.sparkline path.up{stroke:#34af62}.sparkline path.down{stroke:#ed6568}.stock-price{font-size:22px;font-weight:400;text-align:right}.stock-percent{display:block;padding:9px 8px;color:#fff;font-size:19px;text-align:center}.stock-percent.up{background:#1da447}.stock-percent.down{background:#ed343b}@media(max-width:620px){.watchlist-header{gap:12px;padding:7px 16px}.search-box{height:38px;font-size:16px}.yuanbao{font-size:20px}.strategy-tabs{gap:25px;height:60px;padding:0 20px}.strategy-tabs button{font-size:17px}.more-button{margin-left:auto}.list-toolbar{grid-template-columns:1fr 24px 76px 78px;padding:13px 18px 9px;font-size:14px}.stock-row{grid-template-columns:minmax(0,1fr) 48px 70px 116px;gap:7px;padding:7px 18px}.stock-info strong{font-size:17px}.stock-info small{font-size:13px}.stock-price{font-size:21px}.stock-percent{font-size:18px;padding:9px 5px}}@media(min-width:621px){.watchlist-page{max-width:720px;margin:0 auto;box-shadow:0 0 25px #22345212}.watchlist-content{min-height:calc(100vh - 106px)} }
.empty-watchlist{display:flex;align-items:center;flex-direction:column;padding-top:170px;color:#a5adba;text-align:center}.empty-cube{width:76px;height:76px;color:#c9d6ed;font-size:76px;line-height:66px;transform:rotate(0deg)}.empty-watchlist p{margin:19px 0 20px;font-size:18px}.empty-watchlist>a:not(.hot-link){display:flex;align-items:center;justify-content:center;width:272px;height:68px;border-radius:6px;background:#347ce8;color:#fff;font-size:22px;text-decoration:none}.empty-watchlist .hot-link{margin-top:25px;color:#8993a2;font-size:18px;text-decoration:none}.data-state-loading,.data-state-error{padding:40px 18px;background:#f7f8fb}
</style>
