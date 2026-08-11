<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getMarketStocksSnapshot } from '@/services/market'
import type { StockQuote } from '@/services/market-types'
import { cancelTrade, getTradeAccount, getTradeOrders, getTradePositions, getTradeStats, loadDemoAccount, placeTrade, saveDemoAccount, type DemoAccount } from '@/services/trade'
import { getAccessToken } from '@/services/api-client'
import TradeConfirmPage from './TradeConfirmPage.vue'
import TradeResultPage from './TradeResultPage.vue'

const marketStocks = getMarketStocksSnapshot()
const fallbackStock: StockQuote = { code: '000001', name: '平安银行', price: '--', change: '--', percent: '--', volume: '--', trend: 'up' }
const availableStocks = marketStocks.length ? marketStocks : [fallbackStock]
const demoMode = ref(false)
const apiMode = ref(false)
const isLoading = ref(true)
const loadError = ref('')
const isSubmitting = ref(false)
const showAccountModal = ref(false)
const accountModalTitle = ref('')
const tradeSide = ref<'buy' | 'sell'>('buy')
const selectedStock = ref<StockQuote>(availableStocks[0])
const stockKeyword = ref('')
const price = ref(availableStocks[0].price.replace(',', '') === '--' ? '0.00' : availableStocks[0].price.replace(',', ''))
const quantity = ref(100)
const toast = ref('')
const holdings = ref([{ ...availableStocks[0], quantity: 600, cost: '176.80', marketValue: '118,920.00' }])
interface PageOrder { id?: string; time: string; name: string; side: string; price: string; quantity: number; status: string }
const orders = ref<PageOrder[]>([
  { time: '14:26:08', name: '宁德时代', side: '买入', price: '196.80', quantity: 200, status: '已报' },
  { time: '10:18:42', name: '比亚迪', side: '卖出', price: '270.20', quantity: 100, status: '已成' },
])
const filteredStocks = computed(() => {
  const keyword = stockKeyword.value.trim()
  return keyword ? availableStocks.filter((item) => item.name.includes(keyword) || item.code.includes(keyword)) : availableStocks.slice(0, 5)
})
const availableCash = ref(286420.56)
const estimatedAmount = computed(() => Number(price.value || 0) * Math.max(0, quantity.value || 0))
const maxBuy = computed(() => Math.floor(availableCash.value / Math.max(0.01, Number(price.value || 0)) / 100) * 100)
const currentHolding = computed(() => holdings.value.find((holding) => holding.code === selectedStock.value.code))
const maxSell = computed(() => currentHolding.value?.quantity ?? 0)
const holdingsMarketValue = computed(() => holdings.value.reduce((sum, holding) => sum + Number(holding.price.replace(',', '')) * holding.quantity, 0))
const totalAssets = computed(() => availableCash.value + holdingsMarketValue.value)
function holdingGain(holding: (typeof holdings.value)[number]) { return (Number(holding.price.replace(',', '')) - Number(holding.cost)) * holding.quantity }
const todayPnL = computed(() => holdings.value.reduce((sum, holding) => sum + holdingGain(holding), 0))
const tradeStats = ref({ orderCount: 0, buyAmount: 0, sellAmount: 0, fees: 0, realizedPnL: 0 })
type TradeFlow = 'form' | 'confirm' | 'result'
interface TradeDraft { name: string; code: string; side: 'buy' | 'sell'; price: number; quantity: number; amount: number }
interface TradeResult { name: string; side: 'buy' | 'sell'; price: number; quantity: number; orderId?: string; message?: string }
const flowStep = ref<TradeFlow>('form')
const pendingTrade = ref<TradeDraft | null>(null)
const tradeSucceeded = ref(false)
const tradeResult = ref<TradeResult>({ name: '', side: 'buy', price: 0, quantity: 0 })

onMounted(async () => {
  try {
    if (getAccessToken()) {
      const [account, positions, remoteOrders, stats] = await Promise.all([getTradeAccount(), getTradePositions(), getTradeOrders(), getTradeStats()])
      availableCash.value = account.availableCash
      tradeStats.value = stats
      holdings.value = positions.map((position) => {
        const stock = availableStocks.find((item) => item.code === position.code) ?? { code: position.code, name: position.code, price: position.averagePrice.toFixed(2), change: '0.00', percent: '0.00%', volume: '-', trend: 'up' as const }
        return { ...stock, quantity: position.quantity, cost: position.averagePrice.toFixed(2), marketValue: (position.quantity * position.averagePrice).toFixed(2) }
      })
      orders.value = remoteOrders.map((order) => ({ id: order.id, time: new Date(order.createdAt).toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: availableStocks.find((item) => item.code === order.code)?.name ?? order.code, side: order.side === 'buy' ? '买入' : '卖出', price: order.price.toFixed(2), quantity: order.quantity, status: order.status === 'cancelled' ? '已撤' : '已成' }))
      apiMode.value = true
      demoMode.value = true
      return
    }
    const data = loadDemoAccount()
    if (data) {
      if (typeof data.availableCash === 'number') availableCash.value = data.availableCash
      if (data.holdings) holdings.value = data.holdings
      if (data.orders) orders.value = data.orders
    }
  } catch {
    loadError.value = '交易账户暂时无法连接，已为你切换到本地模拟账户。'
    showToast('交易 API 暂不可用，已切换本地模拟')
  } finally {
    isLoading.value = false
  }
})

function persistDemo() { saveDemoAccount({ availableCash: availableCash.value, holdings: holdings.value, orders: orders.value } as DemoAccount) }
function resetDemo() { availableCash.value = 286420.56; holdings.value = [{ ...availableStocks[0], quantity: 600, cost: '176.80', marketValue: '118,920.00' }]; orders.value = [{ time: '14:26:08', name: '宁德时代', side: '买入', price: '196.80', quantity: 200, status: '已报' }, { time: '10:18:42', name: '比亚迪', side: '卖出', price: '270.20', quantity: 100, status: '已成' }]; persistDemo(); showToast('模拟账户已重置') }
function openAccount(title: string) { accountModalTitle.value = title; showAccountModal.value = true }
function enterDemo() { showAccountModal.value = false; demoMode.value = true; loadError.value = '' }
function selectStock(stock: StockQuote) { selectedStock.value = stock; price.value = stock.price.replace(',', ''); stockKeyword.value = '' }
function showToast(message: string) { toast.value = message; window.setTimeout(() => { toast.value = '' }, 2200) }
function validateOrder() {
  if (!selectedStock.value || Number(price.value) <= 0 || !Number.isFinite(Number(price.value)) || quantity.value < 100 || quantity.value % 100 !== 0) { showToast('请输入有效价格，数量需为 100 股的整数倍'); return false }
  if (tradeSide.value === 'buy' && estimatedAmount.value > availableCash.value) { showToast('可用资金不足'); return false }
  if (tradeSide.value === 'sell' && (!currentHolding.value || quantity.value > currentHolding.value.quantity)) { showToast('持仓数量不足'); return false }
  return true
}
function openConfirm() {
  if (isSubmitting.value || !validateOrder()) return
  pendingTrade.value = { name: selectedStock.value.name, code: selectedStock.value.code, side: tradeSide.value, price: Number(price.value), quantity: quantity.value, amount: estimatedAmount.value }
  flowStep.value = 'confirm'
}
function leaveConfirm() { if (!isSubmitting.value) { flowStep.value = 'form'; pendingTrade.value = null } }
function showTradeResult(success: boolean, message?: string, orderId?: string) {
  const draft = pendingTrade.value
  if (!draft) return
  tradeSucceeded.value = success
  tradeResult.value = { ...draft, orderId, message }
  flowStep.value = 'result'
}
function backToTrade() { flowStep.value = 'form'; pendingTrade.value = null }
function retryTrade() { flowStep.value = 'form' }
function requestId() { return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}` }
async function cancelOrder(index: number) {
  const order = orders.value[index]
  if (!order || order.status !== '已报') return
  if (apiMode.value && order.id) {
    try { await cancelTrade(order.id); order.status = '已撤'; showToast(`${order.name} 委托已撤销`); return } catch { apiMode.value = false; showToast('API 撤单失败，已切换本地模拟') }
  }
  order.status = '已撤'; persistDemo(); showToast(`${order.name} 委托已撤销`)
}
async function submitOrder() {
  if (isSubmitting.value || !pendingTrade.value) return
  const draft = pendingTrade.value
  isSubmitting.value = true
  try {
    if (apiMode.value) {
      try {
        const order = await placeTrade({ code: draft.code, side: draft.side, quantity: draft.quantity, price: draft.price, requestId: requestId() } as Parameters<typeof placeTrade>[0] & { requestId: string })
        orders.value.unshift({ id: order.id, time: new Date(order.createdAt).toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: draft.name, side: draft.side === 'buy' ? '买入' : '卖出', price: order.price.toFixed(2), quantity: order.quantity, status: order.status === 'cancelled' ? '已撤' : '已成' })
        showTradeResult(true, undefined, order.id)
        return
      } catch {
        showTradeResult(false, '交易服务未能完成本次委托，订单未提交。请检查网络后重试。')
        return
      }
    }
    orders.value.unshift({ time: new Date().toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: draft.name, side: draft.side === 'buy' ? '买入' : '卖出', price: draft.price.toFixed(2), quantity: draft.quantity, status: '已报' })
    if (draft.side === 'buy') {
      availableCash.value -= draft.amount
      if (currentHolding.value) { currentHolding.value.quantity += draft.quantity; currentHolding.value.marketValue = (currentHolding.value.quantity * Number(currentHolding.value.price.replace(',', ''))).toFixed(2) }
      else holdings.value.push({ ...selectedStock.value, quantity: draft.quantity, cost: draft.price.toFixed(2), marketValue: draft.amount.toFixed(2) })
    } else if (currentHolding.value) { availableCash.value += draft.amount; currentHolding.value.quantity -= draft.quantity; currentHolding.value.marketValue = (currentHolding.value.quantity * draft.price).toFixed(2) }
    persistDemo()
    showTradeResult(true)
  } catch {
    showTradeResult(false, '下单过程中发生未知错误，请稍后重试。')
  } finally { isSubmitting.value = false }
}
</script>

<template>
  <section class="trade-page">
    <TradeConfirmPage v-if="flowStep === 'confirm' && pendingTrade" :draft="pendingTrade" :submitting="isSubmitting" @confirm="submitOrder" @cancel="leaveConfirm" />
    <TradeResultPage v-else-if="flowStep === 'result'" :success="tradeSucceeded" :result="tradeResult" @retry="retryTrade" @back="backToTrade" @orders="$router.push('/trade/orders')" />
    <template v-else>
    <header class="trade-header"><div><span class="header-kicker">SECURITIES ACCOUNT</span><h1>交易</h1></div><span class="account-chip"><i />{{ apiMode ? '已连接' : demoMode ? '模拟账户' : '未登录' }}</span></header>
    <div v-if="isLoading" class="state-card"><span class="loading-dot" />正在加载账户信息…</div>
    <div v-else-if="!demoMode" class="welcome-card"><div class="welcome-icon">▣</div><div><h2>开通证券账户，开启交易</h2><p>绑定账户后，可查看资产、持仓并进行交易。</p><div class="welcome-actions"><button class="primary-button" @click="openAccount('在线开户')">立即开户</button><button class="outline-button" @click="openAccount('绑定已有账户')">绑定账户</button><button class="text-button" @click="enterDemo">体验模拟交易</button></div></div></div>
    <template v-else>
      <div v-if="loadError" class="error-banner"><b>!</b><span>{{ loadError }}</span><button @click="loadError = ''">×</button></div>
      <section class="asset-card"><div class="asset-main"><span>总资产（元）</span><strong>{{ totalAssets.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong><small>{{ apiMode ? '实时账户数据' : '本地模拟数据' }}</small></div><div class="asset-grid"><div><span>可用资金</span><b>{{ availableCash.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</b></div><div><span>持仓市值</span><b>{{ holdingsMarketValue.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</b></div><div><span>今日盈亏</span><b :class="todayPnL >= 0 ? 'text-up' : 'text-down'">{{ todayPnL >= 0 ? '+' : '' }}{{ todayPnL.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</b></div></div><button class="asset-link" @click="resetDemo">资产明细 ›</button></section>
      <section class="trade-entry-grid"><RouterLink to="/trade/positions"><b>我的持仓</b><small>查看持仓与盈亏</small><span>›</span></RouterLink><RouterLink to="/trade/orders"><b>当日委托</b><small>查看订单与撤单</small><span>›</span></RouterLink></section>
      <section class="order-card"><div class="side-switch"><button :class="{ active: tradeSide === 'buy' }" @click="tradeSide = 'buy'">买入</button><button :class="{ active: tradeSide === 'sell' }" @click="tradeSide = 'sell'">卖出</button></div><div class="selected-quote"><span>股票</span><div class="stock-input"><input v-model="stockKeyword" placeholder="输入名称或代码" /><b v-if="!stockKeyword">{{ selectedStock.name }}</b><small v-if="!stockKeyword">{{ selectedStock.code }}</small></div></div><div v-if="stockKeyword" class="suggestions"><button v-for="stock in filteredStocks" :key="stock.code" @click="selectStock(stock)"><span>{{ stock.name }} <small>{{ stock.code }}</small></span><b>{{ stock.price }}</b></button></div><label class="field-row"><span>价格</span><div><input v-model="price" inputmode="decimal" /><em>元</em></div></label><div class="quick-row"><button v-for="value in [selectedStock.price, (Number(price) - .1).toFixed(2), (Number(price) + .1).toFixed(2)]" :key="value" @click="price = value">{{ value }}</button></div><label class="field-row"><span>数量</span><div><input v-model.number="quantity" type="number" min="100" step="100" /><em>股</em></div></label><div class="quick-row"><button @click="quantity = 100">100</button><button @click="quantity = 500">500</button><button @click="quantity = tradeSide === 'buy' ? maxBuy : maxSell">最大</button></div><div class="trade-summary"><span>订单金额</span><strong>¥ {{ estimatedAmount.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><div class="available-row"><span>{{ tradeSide === 'buy' ? '最大可买' : '最大可卖' }}</span><b>{{ (tradeSide === 'buy' ? maxBuy : maxSell).toLocaleString() }} 股</b><small>可用资金 {{ availableCash.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }} 元</small></div><button class="submit-button" :class="tradeSide" :disabled="isSubmitting" @click="openConfirm">{{ isSubmitting ? '提交中…' : `确认${tradeSide === 'buy' ? '买入' : '卖出'}` }}</button><p class="safe-tip">ⓘ 交易提交后不可随意撤回，请确认股票、价格和数量</p></section>
      <section class="list-card"><div class="section-title"><h2>我的持仓</h2><span>{{ holdings.length }} 只 · {{ apiMode ? 'API' : '模拟' }}</span></div><div v-for="holding in holdings" :key="holding.code" class="holding-row"><div><b>{{ holding.name }}</b><small>{{ holding.code }} · {{ holding.quantity }} 股</small></div><div><b>{{ (Number(holding.price.replace(',', '')) * holding.quantity).toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</b><small :class="holdingGain(holding) >= 0 ? 'text-up' : 'text-down'">{{ holdingGain(holding) >= 0 ? '+' : '' }}{{ holdingGain(holding).toFixed(2) }}</small></div></div><p v-if="!holdings.length" class="empty-state">暂无持仓</p></section>
      <section class="list-card orders-card"><div class="section-title"><h2>当日委托</h2><span>{{ orders.length }} 条</span></div><div v-for="(order, index) in orders" :key="order.time + order.name + index" class="order-row"><div><b>{{ order.name }} <em :class="order.side === '买入' ? 'text-up' : 'text-down'">{{ order.side }}</em></b><small>{{ order.time }} · {{ order.price }} 元 × {{ order.quantity }} 股</small></div><div><span class="status" :class="{ cancelled: order.status === '已撤' }">{{ order.status }}</span><button v-if="order.status === '已报'" @click="cancelOrder(index)">撤单</button></div></div></section>
    </template>
    <section v-if="!isLoading" class="security-card"><b>安全提示</b><p>本页面仅用于演示交易流程，当前优先调用服务端模拟交易 API；API 不可用时自动使用本地数据，不会产生真实券商委托。</p></section>
    <div v-if="showAccountModal" class="modal-mask" @click.self="showAccountModal = false"><div class="account-modal"><button class="close-button" @click="showAccountModal = false">×</button><div class="modal-icon">◈</div><h2>{{ accountModalTitle }}</h2><p>Web 版本将通过券商 H5 或 OAuth 完成账户接入，当前可以先体验模拟交易。</p><button class="primary-button full" @click="enterDemo">使用模拟账户</button></div></div><div v-if="toast" class="trade-toast">{{ toast }}</div>
    </template>
  </section>
</template>

<style scoped>
.trade-page{--red:#e65353;--green:#20a467;--blue:#2878e5;max-width:680px;margin:0 auto;padding:0 14px 32px;color:#202b3c}.trade-header{height:58px;display:flex;align-items:center;justify-content:space-between}.header-kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.trade-header h1{margin-top:3px;font-size:22px}.account-chip{padding:6px 9px;border:1px solid #e7ebf1;border-radius:4px;background:#fff;color:#8792a2;font-size:10px}.account-chip i{display:inline-block;width:6px;height:6px;margin-right:5px;border-radius:50%;background:#b7c0cc}.welcome-card,.asset-card,.order-card,.list-card,.security-card,.state-card{background:#fff;border:1px solid #edf0f4;border-radius:7px;box-shadow:0 2px 10px #26304008}.welcome-card{display:flex;gap:16px;padding:25px 20px;margin-top:8px}.welcome-icon,.modal-icon{display:grid;place-items:center;flex:0 0 48px;height:48px;border-radius:50%;background:#edf4ff;color:var(--blue);font-size:22px}.welcome-card h2{font-size:17px}.welcome-card p{margin:8px 0 17px;color:#8a95a5;font-size:12px}.welcome-actions{display:flex;align-items:center;gap:9px;flex-wrap:wrap}.primary-button,.outline-button,.text-button{border:0;border-radius:4px;padding:9px 13px;font-size:11px}.primary-button{background:var(--blue);color:#fff}.outline-button{border:1px solid #dce5f2;background:#fff;color:var(--blue)}.text-button{padding-left:2px;background:transparent;color:var(--blue)}.state-card{display:flex;align-items:center;gap:9px;padding:18px;color:#8a95a5;font-size:12px}.loading-dot{width:8px;height:8px;border-radius:50%;background:var(--blue);animation:pulse 1s infinite}.error-banner{display:flex;gap:8px;align-items:center;margin:8px 0;padding:10px 12px;border:1px solid #f5dfc1;border-radius:5px;background:#fffaf2;color:#9b7644;font-size:11px}.error-banner b{display:grid;place-items:center;width:16px;height:16px;border-radius:50%;background:#eab86f;color:#fff}.error-banner button{margin-left:auto;border:0;background:transparent;color:#aa967c;font-size:17px}.asset-card{position:relative;padding:18px 16px;margin:8px 0 10px}.asset-main>span,.asset-grid span{display:block;color:#8994a4;font-size:10px}.asset-main strong{display:block;margin:6px 0 4px;font:600 27px 'JetBrains Mono',monospace}.asset-main small{color:#aab2bf;font-size:9px}.asset-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding-top:16px;margin-top:14px;border-top:1px solid #f0f2f5}.asset-grid b{display:block;margin-top:6px;font:12px 'JetBrains Mono',monospace}.asset-link{position:absolute;right:15px;top:19px;border:0;background:transparent;color:var(--blue);font-size:10px}.trade-entry-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:8px 0 10px}.trade-entry-grid a{position:relative;padding:13px 14px;border:1px solid #edf0f4;border-radius:7px;background:#fff;color:#263143;text-decoration:none;box-shadow:0 2px 10px #26304008}.trade-entry-grid b,.trade-entry-grid small{display:block}.trade-entry-grid b{font-size:12px}.trade-entry-grid small{margin-top:6px;color:#99a3b1;font-size:10px}.trade-entry-grid span{position:absolute;right:13px;top:20px;color:var(--blue);font-size:17px}.order-card{padding:0 16px 17px}.side-switch{display:flex;margin:0 -16px 20px;border-bottom:1px solid #edf0f4}.side-switch button{position:relative;flex:1;padding:14px 5px 12px;border:0;background:#fff;color:#929cab;font-size:14px}.side-switch button.active{color:var(--red);font-weight:600}.side-switch button.active:after{content:'';position:absolute;bottom:-1px;left:50%;width:35px;height:2px;background:currentColor;transform:translateX(-50%)}.side-switch button:last-child.active{color:var(--green)}.selected-quote,.field-row{display:flex;align-items:center;justify-content:space-between;min-height:48px;border-bottom:1px solid #edf0f4}.selected-quote>span,.field-row>span{color:#697587;font-size:12px}.stock-input{display:flex;align-items:center;gap:8px;flex:1;justify-content:flex-end}.stock-input input{width:105px;border:0;outline:0;text-align:right;color:#536176;font-size:12px}.stock-input b{font-size:13px}.stock-input small{color:#9aa4b2;font:10px 'JetBrains Mono',monospace}.suggestions{border:1px solid #e2e7ee;border-top:0}.suggestions button{display:flex;justify-content:space-between;width:100%;padding:10px;border:0;border-bottom:1px solid #f0f2f5;background:#fff;text-align:left;font-size:12px}.suggestions small{color:#9aa4b2;font-size:10px}.suggestions b{font:11px 'JetBrains Mono',monospace}.field-row>div{display:flex;align-items:center;gap:8px}.field-row input{width:150px;padding:11px 0;border:0;outline:0;text-align:right;color:#202b3c;font:18px 'JetBrains Mono',monospace}.field-row em{color:#8e98a7;font-style:normal;font-size:11px}.quick-row{display:flex;gap:7px;margin:8px 0 3px}.quick-row button{flex:1;padding:6px;border:1px solid #e6eaf0;border-radius:3px;background:#fbfcfd;color:#788496;font:10px 'JetBrains Mono',monospace}.trade-summary,.available-row{display:flex;align-items:center;justify-content:space-between}.trade-summary{padding:18px 0 7px;color:#7e8999;font-size:12px}.trade-summary strong{color:#263143;font:600 16px 'JetBrains Mono',monospace}.available-row{padding:5px 0 15px;color:#9aa4b2;font-size:10px}.available-row b{margin-left:auto;margin-right:8px;color:#6c7889;font:10px 'JetBrains Mono',monospace}.submit-button{width:100%;padding:12px;border:0;border-radius:4px;color:#fff;font-size:13px}.submit-button.buy{background:var(--red)}.submit-button.sell{background:var(--green)}.submit-button:disabled{opacity:.6}.safe-tip{margin:12px 0 0;color:#a0a9b6;text-align:center;font-size:10px}.list-card{margin-top:10px;padding:16px}.section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:3px}.section-title h2{font-size:14px}.section-title span{color:#9aa4b2;font-size:10px}.holding-row,.order-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid #f0f2f5}.holding-row:last-child,.order-row:last-child{border-bottom:0}.holding-row b,.holding-row small,.order-row b,.order-row small{display:block}.holding-row b,.order-row b{font-size:12px}.holding-row small,.order-row small{margin-top:5px;color:#99a3b1;font:10px 'JetBrains Mono',monospace}.holding-row>div:last-child{text-align:right}.order-row em{margin-left:7px;font-size:10px;font-style:normal}.order-row>div:last-child{text-align:right}.status{display:inline-block;padding:4px 6px;background:#edf4ff;color:var(--blue);font-size:10px}.status.cancelled{background:#f5f6f8;color:#9ca5b2}.order-row button{display:block;margin:6px 0 0 auto;padding:0;border:0;background:transparent;color:var(--blue);font-size:10px}.empty-state{padding:20px 0;color:#a0a9b6;text-align:center;font-size:11px}.security-card{padding:14px 16px;margin-top:10px;background:#fffaf2;border-color:#f4e5d0}.security-card b{font-size:11px;color:#986e37}.security-card p{margin-top:6px;color:#9a8a73;font-size:10px;line-height:1.7}.modal-mask{position:fixed;inset:0;z-index:20;display:grid;place-items:center;padding:20px;background:#26304040}.account-modal{position:relative;width:min(360px,100%);box-sizing:border-box;padding:28px 23px;border-radius:9px;background:#fff;text-align:center}.modal-icon{margin:0 auto 13px}.account-modal h2{font-size:18px}.account-modal p{margin:12px 0 20px;color:#8994a4;font-size:11px;line-height:1.7}.full{width:100%}.close-button{position:absolute;right:12px;top:8px;border:0;background:transparent;color:#9ca5b2;font-size:22px}.trade-toast{position:fixed;z-index:30;bottom:76px;left:50%;padding:10px 16px;transform:translateX(-50%);border-radius:4px;background:#263040e8;color:#fff;font-size:11px;white-space:nowrap}.text-up{color:var(--red)!important}.text-down{color:var(--green)!important}@keyframes pulse{50%{opacity:.35}}@media(min-width:681px){.trade-page{padding-top:8px}.asset-grid{display:flex;gap:36px}.asset-grid>div{min-width:120px}}@media(max-width:420px){.welcome-card{padding:20px 15px}.field-row input{width:125px}.asset-main strong{font-size:24px}}
</style>
