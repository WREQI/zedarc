<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getMarketStocksSnapshot } from '@/services/market'
import { loadDemoAccountPersistent, saveDemoAccountPersistent, type DemoAccount } from '@/services/trade'

const router = useRouter()
const activeTab = ref<'holdings' | 'orders' | 'conditions'>('holdings')
const assetsVisible = ref(true)
const noticeVisible = ref(true)
const toast = ref('')
const marketStocks = getMarketStocksSnapshot()

const account = ref({ total: 397302.86, securities: 396405.40, cash: 897.46, todayProfit: 3999.70, todayPercent: 1.01, holdingProfit: -43445.54 })
const holdings = ref([
  { name: '黄金ETF华安', code: '518880', market: 'SH', cost: '3.42', today: '+2,227.80', todayPercent: '+1.04%', total: '-10,399.79', totalPercent: '-4.60%', quantity: '54,342', up: true, totalUp: false },
  { name: '纳指ETF广发', code: '159941', market: 'SZ', cost: '19.77', today: '+423.90', todayPercent: '+0.54%', total: '+7,096.43', totalPercent: '+9.93%', quantity: '19,717', up: true, totalUp: true },
  { name: '红利低波ETF华泰柏瑞', code: '512890', market: 'SH', cost: '4.82', today: '-66.00', todayPercent: '-0.34%', total: '-999.60', totalPercent: '-4.97%', quantity: '4,820', up: false, totalUp: false },
  { name: '赛力斯', code: '601127', market: 'SH', cost: '42.33', today: '+186.00', todayPercent: '+1.12%', total: '-21,450.72', totalPercent: '-56.15%', quantity: '4,233', up: true, totalUp: false },
])

const holdingsCount = computed(() => holdings.value.length + 6)
const todayProfit = computed(() => `${account.value.todayProfit >= 0 ? '+' : ''}${account.value.todayProfit.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}`)
const holdingProfit = computed(() => `${account.value.holdingProfit >= 0 ? '+' : ''}${account.value.holdingProfit.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}`)

function showToast(message: string) {
  toast.value = message
  window.setTimeout(() => { toast.value = '' }, 1800)
}
function go(path: string) { void router.push(path) }
function quickTrade() { showToast('模拟交易入口已开启，可在持仓页选择标的后下单') }

onMounted(async () => {
  const persisted = await loadDemoAccountPersistent().catch(() => null)
  if (!persisted) {
    const snapshot: DemoAccount = { availableCash: account.value.cash, holdings: [], orders: [] }
    void saveDemoAccountPersistent(snapshot)
  }
  if (!marketStocks.length) showToast('行情快照加载中，当前展示模拟账户数据')
})
</script>

<template>
  <main class="trade-page">
    <header class="trade-topbar">
      <div class="trade-tabs"><button class="avatar" aria-label="模拟账户">模</button><button class="active">沪深</button><button>基金</button><button>模拟</button></div>
      <button class="message-button" aria-label="消息">▱<b>99+</b></button>
    </header>

    <section class="account-overview">
      <div class="broker-line"><span class="broker-logo">招商</span><strong>招商证券</strong><i /> <span>牛牛号：0978950834</span><button aria-label="显示资产" @click="assetsVisible = !assetsVisible">{{ assetsVisible ? '◉' : '◎' }}</button></div>
      <div class="profit-row"><div><small>今日盈亏 ↗</small><strong class="rise">{{ assetsVisible ? todayProfit : '••••••' }}</strong><b class="rise">{{ assetsVisible ? `+${account.todayPercent.toFixed(2)}%` : '••••' }}</b></div><div class="holding-profit"><small>持仓盈亏</small><strong :class="account.holdingProfit >= 0 ? 'rise' : 'fall'">{{ assetsVisible ? holdingProfit : '••••••' }}</strong></div></div>
      <div class="asset-row"><div><small>总资产⌄</small><strong>{{ assetsVisible ? account.total.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) : '••••••' }}</strong></div><div><small><i class="red-dot" />证券及理财</small><strong>{{ assetsVisible ? account.securities.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) : '••••••' }}</strong></div><div><small><i class="gold-dot" />可用资金</small><strong>{{ assetsVisible ? account.cash.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) : '••••••' }}</strong></div></div>
    </section>

    <section class="quick-actions" aria-label="交易快捷功能">
      <button @click="quickTrade"><i>⇄</i><span>快速买卖</span></button><button @click="showToast('模拟账户暂不支持出入金')"><i>¥</i><span>出入金</span></button><button @click="go('/trade/orders')"><i>◷</i><span>交易记录</span></button><button @click="go('/trade/funds')"><i>▣</i><span>资金明细</span></button>
      <button @click="showToast('模拟账户盈亏已统计')"><i>⌁</i><span>盈亏分析</span></button><button @click="showToast('模拟打新功能敬请期待')"><i>IPO</i><span>一键打新</span></button><button @click="showToast('模拟账户暂不支持回购')"><i>▱</i><span>通用回购</span></button><button @click="showToast('全部交易功能已展示')"><i>▦</i><span>全部</span></button>
    </section>

    <button v-if="noticeVisible" class="trade-notice" @click="noticeVisible = false"><span>★</span><b>买一篮子高分红好公司，稳健更安心</b><em>去查看</em><i>×</i></button>

    <section class="portfolio-section">
      <nav class="portfolio-tabs"><button :class="{ active: activeTab === 'holdings' }" @click="activeTab = 'holdings'">持仓分布</button><button :class="{ active: activeTab === 'orders' }" @click="activeTab = 'orders'">今日委托(0/1)</button><button :class="{ active: activeTab === 'conditions' }" @click="activeTab = 'conditions'">条件单(1)</button></nav>
      <template v-if="activeTab === 'holdings'"><div class="holding-head"><span>证券/代码({{ holdingsCount }})</span><span>成本</span><span>今日盈亏↕</span><span>持仓盈亏↕</span><span>仓位</span></div><div v-for="item in holdings" :key="item.code" class="holding-row"><div class="holding-name"><strong>{{ item.name }}</strong><small><i :class="item.market.toLowerCase()">{{ item.market }}</i>{{ item.code }}</small></div><b class="cost">{{ item.cost }}</b><span :class="item.up ? 'rise' : 'fall'">{{ item.today }}<small>{{ item.todayPercent }}</small></span><span :class="item.totalUp ? 'rise' : 'fall'">{{ item.total }}<small>{{ item.totalPercent }}</small></span><b class="quantity">{{ item.quantity }}</b></div></template>
      <section v-else class="empty-panel"><span>{{ activeTab === 'orders' ? '◷' : '◇' }}</span><strong>{{ activeTab === 'orders' ? '暂无今日委托' : '暂无条件单' }}</strong><p>模拟账户的{{ activeTab === 'orders' ? '委托记录' : '条件单任务' }}会显示在这里</p></section>
    </section>

    <footer class="simulation-footer">当前为模拟证券账户 · 交易操作不会产生真实委托</footer>
    <Transition name="toast"><div v-if="toast" class="trade-toast">{{ toast }}</div></Transition>
  </main>
</template>

<style scoped>
.trade-page{--red:#df4d49;--green:#55ad61;--blue:#3e7ee6;max-width:720px;margin:0 auto;padding:0 0 36px;background:#fff;color:#2d3442;min-height:calc(100vh - 100px)}button{font:inherit}.trade-topbar{display:flex;align-items:center;justify-content:space-between;height:70px;padding:0 21px;border-bottom:1px solid #f2f3f5;background:#fff}.trade-tabs{display:flex;align-items:center;gap:30px}.trade-tabs button{border:0;background:transparent;color:#414957;font-size:20px}.trade-tabs .active{color:var(--blue);font-size:28px;font-weight:600}.avatar{display:grid;place-items:center;width:45px;height:45px;border-radius:50%!important;background:linear-gradient(145deg,#785738,#d0a36e)!important;color:#fff!important;font-size:13px!important}.message-button{position:relative;border:0;background:transparent;color:#1f2732;font-size:31px;line-height:1}.message-button b{position:absolute;top:-8px;right:-13px;padding:2px 5px;border-radius:10px;background:#e75b55;color:#fff;font-size:10px}.account-overview{padding:18px 28px 24px;background:#fff}.broker-line{display:flex;align-items:center;gap:8px;color:#969daa;font-size:15px}.broker-line strong{color:#353b48;font-size:20px}.broker-line>i{width:1px;height:16px;background:#dfe2e7}.broker-logo{display:grid;place-items:center;width:27px;height:27px;border-radius:50%;background:#bf3a37;color:#fff;font-size:8px;font-weight:600}.broker-line button{margin-left:auto;border:0;background:transparent;color:#4d5867;font-size:22px}.profit-row{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:34px}.profit-row small,.asset-row small{display:block;color:#969eab;font-size:16px}.profit-row strong{display:inline-block;margin-top:10px;font:600 40px/1 'JetBrains Mono',monospace;letter-spacing:-.06em}.profit-row b{margin-left:10px;font:600 24px 'JetBrains Mono',monospace}.holding-profit{text-align:right}.holding-profit strong{font-size:31px}.rise{color:var(--red)!important}.fall{color:var(--green)!important}.asset-row{display:grid;grid-template-columns:1.08fr 1.35fr 1fr;gap:14px;margin-top:34px;padding-top:22px;border-top:1px solid #edf0f3}.asset-row strong{display:block;margin-top:8px;font:600 28px 'JetBrains Mono',monospace;letter-spacing:-.04em}.asset-row small i{display:inline-block;width:11px;height:11px;margin-right:7px;border-radius:3px}.red-dot{background:#db4d48}.gold-dot{background:#e7b64e}.quick-actions{display:grid;grid-template-columns:repeat(4,1fr);row-gap:22px;padding:27px 20px 25px;border-top:8px solid #f6f7fa;border-bottom:8px solid #f6f7fa;background:#fff}.quick-actions button{display:flex;align-items:center;flex-direction:column;gap:8px;border:0;background:transparent;color:#424b58;font-size:16px}.quick-actions i{display:grid;place-items:center;width:42px;height:42px;border:2px solid #252e3b;border-radius:50%;color:#2d3543;font-size:23px;font-style:normal;line-height:1}.quick-actions button:nth-child(4) i,.quick-actions button:nth-child(7) i{border-radius:5px}.quick-actions button:nth-child(6) i{font-size:12px;font-weight:700}.trade-notice{display:flex;align-items:center;gap:12px;width:100%;padding:14px 29px;border:0;background:linear-gradient(90deg,#eaf3ff,#fff);color:#495466;text-align:left}.trade-notice>span{display:grid;place-items:center;width:25px;height:25px;background:#4d87e5;color:#fff;font-size:13px}.trade-notice b{flex:1;font-size:16px;font-weight:400}.trade-notice em{padding:5px 11px;border:1px solid #4b83db;border-radius:5px;color:#3977d6;font-size:15px;font-style:normal}.trade-notice i{margin-left:8px;color:#aab2be;font-size:25px;font-style:normal}.portfolio-section{background:#fff}.portfolio-tabs{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid #edf0f3}.portfolio-tabs button{position:relative;padding:17px 4px;border:0;background:#fff;color:#4b5564;font-size:21px}.portfolio-tabs button.active{color:#273140;font-weight:600}.portfolio-tabs button.active:after{position:absolute;right:50%;bottom:-1px;width:28px;height:4px;border-radius:4px;background:#4b83df;content:'';transform:translateX(50%)}.holding-head,.holding-row{display:grid;grid-template-columns:1.45fr .54fr 1.18fr 1.2fr .65fr;gap:7px;align-items:center;padding:0 20px}.holding-head{min-height:48px;color:#98a1ae;font-size:14px;white-space:nowrap}.holding-head span:not(:first-child),.holding-row>span,.cost,.quantity{text-align:right}.holding-row{min-height:96px;border-top:1px solid #edf0f3}.holding-name{display:flex;min-width:0;flex-direction:column;gap:8px}.holding-name strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:18px;font-weight:500}.holding-name small{color:#9ca4b0;font-size:14px}.holding-name i{display:inline-grid;place-items:center;min-width:23px;height:17px;margin-right:5px;border-radius:2px;background:#e85858;color:#fff;font-size:9px;font-style:normal}.holding-name i.sz{background:#e85858}.cost,.quantity{font:20px 'JetBrains Mono',monospace;font-weight:500}.holding-row>span{display:flex;flex-direction:column;font:21px 'JetBrains Mono',monospace;white-space:nowrap}.holding-row>span small{margin-top:7px;font-size:16px}.empty-panel{display:flex;align-items:center;flex-direction:column;padding:65px 20px;color:#98a2b0}.empty-panel span{font-size:36px}.empty-panel strong{margin-top:12px;color:#536174;font-size:17px}.empty-panel p{margin-top:7px;font-size:13px}.simulation-footer{padding:24px;color:#a2abb7;font-size:12px;text-align:center}.trade-toast{position:fixed;z-index:30;bottom:82px;left:50%;padding:10px 16px;border-radius:5px;background:#263040e8;color:#fff;font-size:12px;transform:translateX(-50%);white-space:nowrap}.toast-enter-active,.toast-leave-active{transition:opacity .18s,transform .18s}.toast-enter-from,.toast-leave-to{opacity:0;transform:translate(-50%,8px)}@media(max-width:520px){.trade-page{margin:0 -2px;min-height:calc(100vh - 120px)}.trade-topbar{height:60px;padding:0 14px}.trade-tabs{gap:23px}.trade-tabs button{font-size:17px}.trade-tabs .active{font-size:24px}.avatar{width:38px;height:38px}.account-overview{padding:16px 18px 21px}.broker-line{font-size:13px}.broker-line strong{font-size:17px}.profit-row{margin-top:28px}.profit-row small,.asset-row small{font-size:13px}.profit-row strong{font-size:31px}.profit-row b{font-size:19px}.holding-profit strong{font-size:25px}.asset-row{margin-top:27px;padding-top:18px}.asset-row strong{font-size:20px}.quick-actions{row-gap:20px;padding:22px 12px}.quick-actions button{font-size:14px}.quick-actions i{width:36px;height:36px;font-size:19px}.trade-notice{gap:8px;padding:12px 17px}.trade-notice b{font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.trade-notice em{padding:4px 8px;font-size:13px}.portfolio-tabs button{font-size:16px}.holding-head,.holding-row{grid-template-columns:1.36fr .44fr .95fr 1.05fr .46fr;gap:4px;padding:0 13px}.holding-head{min-height:44px;font-size:11px}.holding-name strong{font-size:15px}.holding-name small{font-size:12px}.cost,.quantity{font-size:15px}.holding-row>span{font-size:15px}.holding-row>span small{font-size:12px}.holding-row{min-height:84px}}
</style>
