<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getMarketStocksSnapshot } from '@/services/market'
import type { StockQuote } from '@/mock/market'
import { cancelTrade, getTradeAccount, getTradeOrders, getTradePositions, getTradeStats, loadDemoAccount, placeTrade, saveDemoAccount, type DemoAccount } from '@/services/trade'
import { getAccessToken } from '@/services/api-client'

const marketStocks = getMarketStocksSnapshot()
const demoMode = ref(false)
const apiMode = ref(false)
const showAccountModal = ref(false)
const accountModalTitle = ref('')
const tradeSide = ref<'buy' | 'sell'>('buy')
const selectedStock = ref<StockQuote>(marketStocks[0])
const stockKeyword = ref('')
const price = ref(marketStocks[0].price.replace(',', ''))
const quantity = ref(100)
const toast = ref('')
const holdings = ref([
  { ...marketStocks[0], quantity: 600, cost: '176.80', marketValue: '118,920.00' },
  { ...marketStocks[2], quantity: 200, cost: '251.40', marketValue: '53,700.00' },
])
interface PageOrder { id?: string; time: string; name: string; side: string; price: string; quantity: number; status: string }
const orders = ref<PageOrder[]>([
  { time: '14:26:08', name: '宁德时代', side: '买入', price: '196.80', quantity: 200, status: '已报' },
  { time: '10:18:42', name: '比亚迪', side: '卖出', price: '270.20', quantity: 100, status: '已成' },
])
const filteredStocks = computed(() => {
  const keyword = stockKeyword.value.trim()
  return keyword ? marketStocks.filter((item) => item.name.includes(keyword) || item.code.includes(keyword)) : marketStocks.slice(0, 5)
})
const availableCash = ref(286420.56)
const estimatedAmount = computed(() => Number(price.value || 0) * Math.max(0, quantity.value || 0))
const maxBuy = computed(() => Math.floor(availableCash.value / Math.max(0.01, Number(price.value || 0)) / 100) * 100)
const currentHolding = computed(() => holdings.value.find((holding) => holding.code === selectedStock.value.code))
const holdingsMarketValue = computed(() => holdings.value.reduce((sum, holding) => sum + Number(holding.price.replace(',', '')) * holding.quantity, 0))
const totalAssets = computed(() => availableCash.value + holdingsMarketValue.value)
function holdingGain(holding: (typeof holdings.value)[number]) { return (Number(holding.price.replace(',', '')) - Number(holding.cost)) * holding.quantity }
const todayPnL = computed(() => holdings.value.reduce((sum, holding) => sum + holdingGain(holding), 0))
const tradeStats = ref({ orderCount: 0, buyAmount: 0, sellAmount: 0, fees: 0, realizedPnL: 0 })

onMounted(async () => {
  if (getAccessToken()) {
    try {
      const [account, positions, remoteOrders, stats] = await Promise.all([getTradeAccount(), getTradePositions(), getTradeOrders(), getTradeStats()])
      availableCash.value = account.availableCash
            tradeStats.value = stats
      holdings.value = positions.map((position) => {
        const stock = marketStocks.find((item) => item.code === position.code) ?? { code: position.code, name: position.code, price: position.averagePrice.toFixed(2), change: '0.00', percent: '0.00%', volume: '-', trend: 'up' as const }
        return { ...stock, quantity: position.quantity, cost: position.averagePrice.toFixed(2), marketValue: (position.quantity * position.averagePrice).toFixed(2) }
      })
      orders.value = remoteOrders.map((order) => ({ id: order.id, time: new Date(order.createdAt).toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: marketStocks.find((item) => item.code === order.code)?.name ?? order.code, side: order.side === 'buy' ? '买入' : '卖出', price: order.price.toFixed(2), quantity: order.quantity, status: order.status === 'cancelled' ? '已撤' : '已成' }))
      apiMode.value = true
      demoMode.value = true
      return
    } catch {
      showToast('交易 API 暂不可用，已切换本地模拟')
    }
  }
  const data = loadDemoAccount()
  if (!data) return
  if (typeof data.availableCash === 'number') availableCash.value = data.availableCash
  if (data.holdings) holdings.value = data.holdings
  if (data.orders) orders.value = data.orders
})

function persistDemo() {
  saveDemoAccount({ availableCash: availableCash.value, holdings: holdings.value, orders: orders.value } as DemoAccount)
}
function resetDemo() {
  availableCash.value = 286420.56
  holdings.value = [
    { ...marketStocks[0], quantity: 600, cost: '176.80', marketValue: '118,920.00' },
    { ...marketStocks[2], quantity: 200, cost: '251.40', marketValue: '53,700.00' },
  ]
  orders.value = [
    { time: '14:26:08', name: '宁德时代', side: '买入', price: '196.80', quantity: 200, status: '已报' },
    { time: '10:18:42', name: '比亚迪', side: '卖出', price: '270.20', quantity: 100, status: '已成' },
  ]
  persistDemo()
  showToast('模拟账户已重置')
}

function openAccount(title: string) { accountModalTitle.value = title; showAccountModal.value = true }
function enterDemo() { showAccountModal.value = false; demoMode.value = true }
function selectStock(stock: StockQuote) { selectedStock.value = stock; price.value = stock.price.replace(',', ''); stockKeyword.value = '' }
function showToast(message: string) { toast.value = message; window.setTimeout(() => { toast.value = '' }, 2200) }
async function cancelOrder(index: number) {
  const order = orders.value[index]
  if (!order || order.status !== '已报') return
  if (apiMode.value && order.id) {
    try {
      await cancelTrade(order.id)
      order.status = '已撤'
      showToast(`${order.name} 委托已撤销`)
      return
    } catch { apiMode.value = false; showToast('API 撤单失败，已切换本地模拟') }
  }
  order.status = '已撤'
  persistDemo()
  showToast(`${order.name} 委托已撤销`)
}
async function submitOrder() {
  if (!selectedStock.value || quantity.value < 100 || quantity.value % 100 !== 0) { showToast('交易数量需为 100 股的整数倍'); return }
  if (tradeSide.value === 'buy' && estimatedAmount.value > availableCash.value) { showToast('可用资金不足'); return }
  if (tradeSide.value === 'sell' && (!currentHolding.value || quantity.value > currentHolding.value.quantity)) { showToast('持仓数量不足'); return }
  if (apiMode.value) {
    try {
      const order = await placeTrade({ code: selectedStock.value.code, side: tradeSide.value, quantity: quantity.value, price: Number(price.value) })
      orders.value.unshift({ id: order.id, time: new Date(order.createdAt).toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: selectedStock.value.name, side: tradeSide.value === 'buy' ? '买入' : '卖出', price: order.price.toFixed(2), quantity: order.quantity, status: order.status === 'cancelled' ? '已撤' : '已成' })
      showToast(`${selectedStock.value.name} ${tradeSide.value === 'buy' ? '买入' : '卖出'}委托已提交`)
      return
    } catch { apiMode.value = false; showToast('API 下单失败，已切换本地模拟') }
  }
  orders.value.unshift({ time: new Date().toLocaleTimeString('zh-CN', { hour12: false }).slice(0, 8), name: selectedStock.value.name, side: tradeSide.value === 'buy' ? '买入' : '卖出', price: Number(price.value).toFixed(2), quantity: quantity.value, status: '已报' })
  if (tradeSide.value === 'buy') {
    availableCash.value -= estimatedAmount.value
    if (currentHolding.value) { currentHolding.value.quantity += quantity.value; currentHolding.value.marketValue = (currentHolding.value.quantity * Number(currentHolding.value.price.replace(',', ''))).toFixed(2) }
    else holdings.value.push({ ...selectedStock.value, quantity: quantity.value, cost: Number(price.value).toFixed(2), marketValue: estimatedAmount.value.toFixed(2) })
  } else {
    availableCash.value += estimatedAmount.value
    if (currentHolding.value) {
      currentHolding.value.quantity -= quantity.value
      currentHolding.value.marketValue = (currentHolding.value.quantity * Number(price.value)).toFixed(2)
    }
  }
  persistDemo()
  showToast(`${selectedStock.value.name} ${tradeSide.value === 'buy' ? '买入' : '卖出'}委托已提交`)
}
</script>

<template>
  <section class="trade-page">
    <div class="trade-heading"><div><p class="eyebrow">TRADE / ACCOUNT</p><h1>交易</h1><p class="muted">连接证券账户，进行资产查看和交易操作。</p></div><span class="account-state"><i /> 未登录</span></div>

    <template v-if="!demoMode">
      <section class="panel account-hero">
        <div class="account-icon">◈</div>
        <div class="account-copy"><p class="eyebrow">SECURITIES ACCOUNT</p><h2>开通证券账户，开启交易</h2><p>当前未检测到已绑定的证券账户。完成开户后，可查看资产、持仓并进行交易。</p><div class="account-actions"><button class="primary-button" @click="openAccount('在线开户')">立即开户</button><button class="secondary-button" @click="openAccount('绑定已有账户')">绑定已有账户</button><button class="demo-button" @click="enterDemo">体验模拟交易</button></div></div>
      </section>
      <section class="trade-grid">
        <article class="panel trade-card" @click="openAccount('资产总览')"><span class="trade-card-icon blue">▣</span><div><h3>资产总览</h3><p>查看账户总资产、可用资金和持仓市值</p></div><span class="arrow">→</span></article>
        <article class="panel trade-card" @click="enterDemo"><span class="trade-card-icon orange">↗</span><div><h3>买入 / 卖出</h3><p>使用模拟账户体验股票交易</p></div><span class="arrow">→</span></article>
        <article class="panel trade-card" @click="openAccount('持仓与委托')"><span class="trade-card-icon green">▤</span><div><h3>持仓与委托</h3><p>查看当前持仓和历史委托记录</p></div><span class="arrow">→</span></article>
      </section>
    </template>

    <template v-else>
      <section class="panel assets-card"><div><p class="eyebrow">SIMULATION ACCOUNT</p><h2>模拟账户资产</h2><strong class="assets-total mono">{{ totalAssets.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><div class="asset-stats"><div><small>可用资金</small><strong class="mono">{{ availableCash.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><div><small>持仓市值</small><strong class="mono">{{ holdingsMarketValue.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><div><small>今日盈亏</small><strong class="mono" :class="todayPnL >= 0 ? 'text-up' : 'text-down'">{{ todayPnL >= 0 ? '+' : '' }}{{ todayPnL.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><div><small>累计手续费</small><strong class="mono">{{ tradeStats.fees.toFixed(2) }}</strong></div></div><div class="asset-actions"><button class="reset-button" @click="resetDemo">重置数据</button><button class="secondary-button" @click="demoMode = false">退出模拟</button></div></section>
      <section class="trade-workbench"><article class="panel order-form"><div class="trade-side-tabs"><button :class="{ selected: tradeSide === 'buy' }" @click="tradeSide = 'buy'">买入</button><button :class="{ selected: tradeSide === 'sell' }" @click="tradeSide = 'sell'">卖出</button></div><label class="form-label">股票</label><div class="stock-picker"><input v-model="stockKeyword" placeholder="输入名称或代码" /><span v-if="selectedStock">{{ selectedStock.name }} {{ selectedStock.code }}</span></div><div v-if="stockKeyword" class="stock-suggestions"><button v-for="stock in filteredStocks" :key="stock.code" @click="selectStock(stock)">{{ stock.name }} <small>{{ stock.code }}</small><b>{{ stock.price }}</b></button></div><label class="form-label">价格</label><div class="number-input"><input v-model="price" inputmode="decimal" /><span>元</span></div><div class="price-hints"><button v-for="value in [selectedStock.price, (Number(price) - .1).toFixed(2), (Number(price) + .1).toFixed(2)]" :key="value" @click="price = value">{{ value }}</button></div><label class="form-label">数量</label><div class="number-input"><input v-model.number="quantity" type="number" min="100" step="100" /><span>股</span></div><div class="quantity-hints"><button @click="quantity = 100">100</button><button @click="quantity = 500">500</button><button @click="quantity = maxBuy">最大</button></div><div class="order-estimate"><span>预计金额</span><strong class="mono">{{ estimatedAmount.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div><button class="submit-order" :class="tradeSide" @click="submitOrder">{{ tradeSide === 'buy' ? '买入' : '卖出' }} {{ selectedStock.name }}</button></article><article class="panel holdings-panel"><div class="block-title"><h2>我的持仓</h2><span class="muted">{{ apiMode ? 'API 数据' : '本地模拟数据' }}</span></div><div v-for="holding in holdings" :key="holding.code" class="holding-row"><div><strong>{{ holding.name }}</strong><small>{{ holding.code }} · {{ holding.quantity }} 股</small></div><div class="holding-value"><strong class="mono">{{ (Number(holding.price.replace(',', '')) * holding.quantity).toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong><span class="mono" :class="holdingGain(holding) >= 0 ? 'text-up' : 'text-down'">{{ holdingGain(holding) >= 0 ? '+' : '' }}{{ holdingGain(holding).toFixed(2) }}</span></div></div></article></section>
      <section class="panel orders-panel"><div class="block-title"><h2>当日委托</h2><span class="muted">{{ orders.length }} 条记录</span></div><div class="orders-table"><div class="orders-header"><span>时间</span><span>股票</span><span>方向</span><span>价格 / 数量</span><span>状态</span><span>操作</span></div><div v-for="(order, index) in orders" :key="order.time + order.name + index" class="orders-row"><span class="mono muted">{{ order.time }}</span><strong>{{ order.name }}</strong><span :class="order.side === '买入' ? 'text-up' : 'text-down'">{{ order.side }}</span><span class="mono">{{ order.price }} / {{ order.quantity }}</span><span class="order-status" :class="{ cancelled: order.status === '已撤' }">{{ order.status }}</span><button v-if="order.status === '已报'" class="cancel-order" @click="cancelOrder(index)">撤单</button><span v-else class="order-action-muted">—</span></div></div></section>
    </template>

    <section class="panel trade-notice"><span>ⓘ</span><div><strong>模拟交易规则</strong><p>工作日 09:30-11:30、13:00-15:00可交易；每笔数量须为100股整数倍。手续费按成交额万三计，最低5元，卖出另收千一印花税。</p><strong>交易能力迁移说明</strong><p>当前为演示交易，优先调用服务端模拟交易 API；API 不可用时自动回退到浏览器本地数据，不会产生真实券商委托。</p></div></section>
    <div v-if="showAccountModal" class="account-modal-mask" @click.self="showAccountModal = false"><div class="account-modal panel"><button class="modal-close" @click="showAccountModal = false">×</button><span class="account-icon">◈</span><h2>{{ accountModalTitle }}</h2><p>Web 版本将通过券商 H5 或 OAuth 方式完成账户接入，当前可以先体验模拟交易。</p><button class="primary-button" @click="enterDemo">使用模拟账户</button></div></div><div v-if="toast" class="trade-toast">{{ toast }}</div>
  </section>
</template>

<style scoped>
.trade-page { max-width: 900px; margin: 0 auto; }.trade-heading { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 30px; }.trade-heading h1 { font-size: 28px; }.account-state { color: var(--muted); font-size: 11px; background: var(--card); border: 1px solid var(--border); padding: 7px 10px; }.account-state i { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--muted); margin-right: 6px; }.account-hero { display: flex; align-items: center; gap: 26px; padding: 36px; background: linear-gradient(105deg, #fff 0%, #f8fbff 100%); }.account-icon { width: 72px; height: 72px; display: grid; place-items: center; background: #edf4ff; color: var(--primary); border-radius: 50%; font-size: 30px; flex-shrink: 0; }.account-copy h2 { font-size: 20px; color: var(--text); }.account-copy > p:not(.eyebrow) { color: var(--muted); font-size: 12px; line-height: 1.8; margin-top: 10px; }.account-actions { display: flex; gap: 10px; margin-top: 22px; }.trade-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0; }.trade-card { display: flex; align-items: center; gap: 12px; padding: 18px 15px; min-height: 104px; }.trade-card h3 { font-size: 13px; }.trade-card p { color: var(--muted); font-size: 10px; line-height: 1.6; margin-top: 7px; }.trade-card-icon { width: 32px; height: 32px; border-radius: 6px; display: grid; place-items: center; font-size: 16px; flex-shrink: 0; }.trade-card-icon.blue { color: var(--primary); background: #edf4ff; }.trade-card-icon.orange { color: var(--gold); background: #fff4e9; }.trade-card-icon.green { color: var(--down); background: #edf8ef; }.arrow { color: var(--muted); margin-left: auto; }.trade-notice { display: flex; gap: 12px; padding: 16px 18px; background: #fffaf3; border-color: #f8e3c8; }.trade-notice > span { color: var(--gold); font-size: 16px; }.trade-notice strong { font-size: 12px; }.trade-notice p { color: var(--muted); font-size: 11px; line-height: 1.7; margin-top: 5px; }
.demo-button { color: var(--primary); border: 0; background: transparent; padding: 9px 3px; font-size: 12px; }.trade-card { cursor: pointer; transition: border-color .15s, background .15s; }.trade-card:hover { border-color: var(--primary); background: #fbfdff; }.assets-card { display: flex; align-items: center; gap: 28px; padding: 24px; margin-bottom: 14px; }.assets-card h2 { font-size: 15px; }.assets-total { display: block; color: var(--text); font-size: 28px; margin-top: 9px; }.asset-stats { display: flex; gap: 28px; margin-left: auto; }.asset-actions { display: flex; align-items: center; gap: 8px; }.reset-button { color: var(--muted); border: 0; background: transparent; padding: 9px 4px; font-size: 10px; }.asset-stats small, .asset-stats strong { display: block; }.asset-stats small { color: var(--muted); font-size: 10px; margin-bottom: 7px; }.asset-stats strong { font-size: 12px; }.trade-workbench { display: grid; grid-template-columns: 1fr 1.1fr; gap: 14px; margin-bottom: 14px; }.order-form, .holdings-panel, .orders-panel { padding: 20px; }.trade-side-tabs { display: flex; border-bottom: 1px solid var(--border); margin: -20px -20px 20px; }.trade-side-tabs button { flex: 1; color: var(--muted); border: 0; border-bottom: 2px solid transparent; background: transparent; padding: 13px; font-size: 13px; }.trade-side-tabs button.selected { color: var(--up); border-color: var(--up); font-weight: 600; }.trade-side-tabs button:last-child.selected { color: var(--down); border-color: var(--down); }.form-label { display: block; color: var(--muted); font-size: 10px; margin: 13px 0 7px; }.stock-picker, .number-input { position: relative; display: flex; align-items: center; border: 1px solid var(--border); background: var(--bg); padding: 0 10px; }.stock-picker input, .number-input input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; color: var(--text); padding: 10px 0; font: 12px 'JetBrains Mono', monospace; }.stock-picker span { color: var(--text); font-size: 11px; }.number-input span { color: var(--muted); font-size: 11px; }.stock-suggestions { position: relative; z-index: 2; border: 1px solid var(--border); border-top: 0; background: var(--card); }.stock-suggestions button { display: grid; grid-template-columns: 1fr auto auto; gap: 12px; width: 100%; border: 0; border-bottom: 1px solid var(--border); background: transparent; color: var(--text); padding: 9px; text-align: left; font-size: 11px; }.stock-suggestions small { color: var(--muted); }.stock-suggestions b { font: 11px 'JetBrains Mono', monospace; }.price-hints, .quantity-hints { display: flex; gap: 6px; margin-top: 6px; }.price-hints button, .quantity-hints button { flex: 1; color: var(--muted); border: 1px solid var(--border); background: var(--card); padding: 5px; font: 10px 'JetBrains Mono', monospace; }.order-estimate { display: flex; justify-content: space-between; color: var(--muted); font-size: 10px; padding: 17px 0 12px; }.order-estimate strong { color: var(--text); }.submit-order { width: 100%; color: #fff; border: 0; padding: 11px; border-radius: 3px; font-size: 12px; }.submit-order.buy { background: var(--up); }.submit-order.sell { background: var(--down); }.block-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }.block-title h2 { font-size: 14px; }.holding-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid var(--border); }.holding-row:last-child { border-bottom: 0; }.holding-row strong, .holding-row small { display: block; }.holding-row strong { font-size: 12px; }.holding-row small { color: var(--muted); font: 10px 'JetBrains Mono', monospace; margin-top: 5px; }.holding-value { text-align: right; }.holding-value span { display: block; font-size: 10px; margin-top: 5px; }.orders-table { overflow-x: auto; }.orders-header, .orders-row { display: grid; grid-template-columns: 1fr 1fr .7fr 1.2fr .7fr .5fr; gap: 10px; align-items: center; min-width: 560px; }.orders-header { color: var(--muted); font-size: 10px; padding-bottom: 9px; border-bottom: 1px solid var(--border); }.orders-row { padding: 12px 0; border-bottom: 1px solid var(--border); font-size: 11px; }.orders-row strong { font-size: 11px; }.order-status { color: var(--primary); background: #edf4ff; padding: 4px 6px; width: fit-content; font-size: 10px; }.order-status.cancelled { color: var(--muted); background: var(--bg); }.cancel-order { color: var(--primary); border: 0; background: transparent; font-size: 10px; padding: 0; }.order-action-muted { color: #b3bac7; font-size: 10px; }.account-modal-mask { position: fixed; inset: 0; z-index: 20; display: grid; place-items: center; padding: 20px; background: rgba(38,46,64,.25); }.account-modal { position: relative; width: min(390px, 100%); padding: 30px; text-align: center; }.account-modal .account-icon { margin: 0 auto 15px; }.account-modal h2 { font-size: 18px; }.account-modal p { color: var(--muted); font-size: 11px; line-height: 1.7; margin: 12px 0 20px; }.account-modal .primary-button { width: 100%; }.modal-close { position: absolute; right: 14px; top: 10px; border: 0; background: transparent; color: var(--muted); font-size: 21px; }.trade-toast { position: fixed; z-index: 30; left: 50%; bottom: 92px; transform: translateX(-50%); color: #fff; background: rgba(38,46,64,.9); border-radius: 3px; padding: 10px 16px; font-size: 11px; white-space: nowrap; }
@media (max-width: 720px) { .trade-heading { margin-bottom: 22px; }.account-hero { align-items: flex-start; flex-direction: column; padding: 24px 20px; gap: 17px; }.account-copy h2 { font-size: 18px; }.account-actions { flex-wrap: wrap; }.trade-grid { grid-template-columns: 1fr; }.trade-card { min-height: 80px; }.assets-card { align-items: flex-start; flex-wrap: wrap; gap: 16px; }.asset-actions { margin-left: auto; }.asset-stats { order: 3; width: 100%; justify-content: space-between; gap: 8px; margin-left: 0; }.trade-workbench { grid-template-columns: 1fr; }.orders-panel { padding: 15px; } }
</style>
