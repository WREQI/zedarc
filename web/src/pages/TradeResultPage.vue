<script setup lang="ts">
interface TradeResult {
  name: string
  side: 'buy' | 'sell'
  price: number
  quantity: number
  orderId?: string
  message?: string
}

defineProps<{ success: boolean; result: TradeResult }>()
const emit = defineEmits<{
  retry: []
  back: []
  orders: []
}>()
</script>

<template>
  <section class="trade-flow-page result-page">
    <header class="flow-header"><div><span class="kicker">TRADE RESULT</span><h1>{{ success ? '下单成功' : '下单失败' }}</h1></div><span class="status-dot" :class="{ failed: !success }" /></header>
    <section class="result-card" :class="{ failed: !success }">
      <div class="result-icon">{{ success ? '✓' : '!' }}</div>
      <h2>{{ success ? `${result.name} 委托已提交` : '委托未提交' }}</h2>
      <p class="result-message">{{ result.message || (success ? '交易服务已收到你的委托，请留意订单状态。' : '交易服务暂时不可用，请稍后重试。') }}</p>
      <div class="result-summary"><span>{{ result.side === 'buy' ? '买入' : '卖出' }} {{ result.quantity.toLocaleString() }} 股</span><b>¥ {{ result.price.toFixed(2) }}</b></div>
      <div v-if="success && result.orderId" class="order-id">委托编号：{{ result.orderId }}</div>
    </section>
    <div class="result-actions">
      <button v-if="!success" class="primary-button" type="button" @click="emit('retry')">返回修改</button>
      <RouterLink v-if="success && result.orderId" class="primary-button detail-button" :to="`/trade/orders/${encodeURIComponent(result.orderId)}`">查看订单详情</RouterLink><button class="primary-button" type="button" @click="emit('orders')">查看当日委托</button>
      <button class="text-button" type="button" @click="emit('back')">{{ success ? '继续交易' : '返回交易' }}</button>
    </div>
  </section>
</template>

<style scoped>
.trade-flow-page{--blue:#2878e5;max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;box-sizing:border-box;background:#f7f8fa;color:#202b3c}.flow-header{height:58px;display:flex;align-items:center;justify-content:space-between}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.flow-header h1{margin-top:3px;font-size:21px}.status-dot{width:9px;height:9px;border-radius:50%;background:#20a467}.status-dot.failed{background:#e65353}.result-card{margin-top:8px;padding:31px 20px 23px;background:#fff;border:1px solid #edf0f4;border-radius:8px;text-align:center;box-shadow:0 2px 10px #26304008}.result-icon{display:grid;place-items:center;width:54px;height:54px;margin:0 auto 16px;border-radius:50%;background:#eaf8f1;color:#20a467;font-size:30px;font-weight:700}.result-card.failed .result-icon{background:#fff0f0;color:#e65353}.result-card h2{font-size:18px}.result-card p{margin:11px auto 20px;max-width:310px;color:#8994a4;font-size:12px;line-height:1.7}.result-summary{display:flex;justify-content:space-between;margin-top:15px;padding:13px 14px;background:#f8f9fb;color:#697587;font-size:12px}.result-summary b{font:12px 'JetBrains Mono',monospace;color:#263143}.order-id{margin-top:14px;color:#9aa4b1;font:10px 'JetBrains Mono',monospace}.result-actions{display:flex;flex-direction:column;gap:10px;margin-top:18px}.primary-button{padding:12px;border:0;border-radius:5px;background:var(--blue);color:#fff;font-size:13px;text-align:center;text-decoration:none}.detail-button{background:#edf4ff;color:var(--blue);border:1px solid #dce5f2}.text-button{padding:8px;border:0;background:transparent;color:var(--blue);font-size:12px}
</style>
