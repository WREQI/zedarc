<script setup lang="ts">
import type { TradePreview } from '@/services/trade'

interface TradeDraft {
  name: string
  code: string
  side: 'buy' | 'sell'
  price: number
  quantity: number
  amount: number
}

const props = defineProps<{ draft: TradeDraft; preview?: TradePreview | null; submitting?: boolean }>()
const total = () => props.preview?.total ?? props.draft.amount
const fee = () => props.preview?.fee ?? 0
const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <section class="trade-flow-page">
    <header class="flow-header">
      <button class="back-button" type="button" @click="emit('cancel')">‹</button>
      <div><span class="kicker">ORDER CONFIRMATION</span><h1>确认下单</h1></div>
      <span class="step">2 / 2</span>
    </header>

    <div class="notice"><span>ⓘ</span><p>请核对以下委托信息，确认后将提交至交易服务。</p></div>
    <section class="summary-card">
      <div class="stock-title"><div><strong>{{ props.draft.name }}</strong><small>{{ props.draft.code }}</small></div><b :class="props.draft.side">{{ props.draft.side === 'buy' ? '买入' : '卖出' }}</b></div>
      <div class="detail-list">
        <div><span>委托价格</span><strong>¥ {{ props.draft.price.toFixed(2) }} <small>元</small></strong></div>
        <div><span>委托数量</span><strong>{{ props.draft.quantity.toLocaleString() }} <small>股</small></strong></div>
        <div><span>订单金额</span><strong>¥ {{ props.draft.amount.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div>
        <div v-if="props.preview"><span>预估手续费</span><strong>¥ {{ fee().toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div>
        <div class="amount-row"><span>{{ props.draft.side === 'buy' ? '预计扣款' : '预计到账' }}</span><strong>¥ {{ total().toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</strong></div>
      </div>
    </section>
    <div v-if="props.preview?.warnings?.length" class="warning-list"><span>风险提示</span><p v-for="warning in props.preview.warnings" :key="warning">{{ warning }}</p></div>
        <p class="session-tip" v-if="props.preview">{{ props.preview.tradingSession.label }}</p>
        <p class="safe-tip">交易提交后不可随意撤回，请确认股票、价格和数量无误。</p>
    <div class="action-bar">
      <button class="cancel-button" type="button" :disabled="props.submitting" @click="emit('cancel')">返回修改</button>
      <button class="confirm-button" type="button" :disabled="props.submitting" @click="emit('confirm')">{{ props.submitting ? '提交中…' : '确认下单' }}</button>
    </div>
  </section>
</template>

<style scoped>
.trade-flow-page{--blue:#2878e5;max-width:680px;min-height:100vh;margin:0 auto;padding:0 14px 32px;box-sizing:border-box;background:#f7f8fa;color:#202b3c}.flow-header{height:58px;display:flex;align-items:center;gap:10px}.back-button{padding:0 6px 0 0;border:0;background:transparent;color:#536176;font-size:30px;line-height:1}.flow-header>div{flex:1}.kicker{display:block;color:#a1a9b6;font-size:9px;letter-spacing:1.5px}.flow-header h1{margin-top:3px;font-size:21px}.step{color:#a1a9b6;font-size:10px}.notice{display:flex;gap:9px;align-items:flex-start;margin:8px 0 10px;padding:12px 13px;border:1px solid #dce9fb;border-radius:7px;background:#f0f6ff;color:#5b7fae;font-size:11px;line-height:1.6}.notice span{color:var(--blue);font-size:14px}.notice p{margin:0}.summary-card{padding:19px 16px;background:#fff;border:1px solid #edf0f4;border-radius:8px;box-shadow:0 2px 10px #26304008}.stock-title{display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid #f0f2f5}.stock-title strong,.stock-title small{display:block}.stock-title strong{font-size:19px}.stock-title small{margin-top:6px;color:#8e99a8;font:11px 'JetBrains Mono',monospace}.stock-title b{padding:6px 10px;font-size:11px}.stock-title b.buy{background:#fff0f0;color:#e65353}.stock-title b.sell{background:#eaf8f1;color:#20a467}.detail-list>div{display:flex;justify-content:space-between;padding:15px 0;border-bottom:1px solid #f0f2f5;font-size:12px}.detail-list>div:last-child{border-bottom:0}.detail-list span{color:#8c97a6}.detail-list strong{font:13px 'JetBrains Mono',monospace}.detail-list small{color:#8c97a6;font:11px sans-serif}.detail-list .amount-row{padding-top:19px}.amount-row strong{font-size:17px}.safe-tip,.session-tip{margin:13px 0;color:#a0a9b6;text-align:center;font-size:10px}.session-tip{color:#5b7fae}.warning-list{margin-top:14px;padding:10px 12px;border-radius:5px;background:#fffaf2;color:#9b7644;font-size:10px;line-height:1.6}.warning-list span{font-weight:600}.warning-list p{margin-top:3px}.action-bar{display:flex;gap:10px;margin-top:18px}.action-bar button{flex:1;padding:12px;border-radius:5px;font-size:13px}.cancel-button{border:1px solid #dce5f2;background:#fff;color:#5d6b80}.confirm-button{border:0;background:var(--blue);color:#fff}.action-bar button:disabled{opacity:.6}
</style>
