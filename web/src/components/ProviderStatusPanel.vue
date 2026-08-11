<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { getProviderStatus, type ProviderStatus } from '@/services/provider-status'

const status = ref<ProviderStatus | null>(null)
const loading = ref(true)
const error = ref('')
let timer: number | undefined
async function refresh() {
  loading.value = true; error.value = ''
  try { status.value = await getProviderStatus() } catch { error.value = '行情状态暂时无法获取' }
  finally { loading.value = false }
}
onMounted(() => { void refresh(); timer = window.setInterval(refresh, 30_000) })
onUnmounted(() => { if (timer) window.clearInterval(timer) })
</script>
<template>
  <section class="provider-status panel" aria-label="行情数据源状态">
    <div class="status-heading"><div><p class="eyebrow">MARKET DATA</p><h2>行情源状态</h2></div><button type="button" @click="refresh">刷新</button></div>
    <p v-if="loading" class="status-muted">正在检查行情源…</p>
    <p v-else-if="error" class="status-error">{{ error }}</p>
    <div v-else-if="status" class="status-grid"><div><small>当前 Provider</small><strong>{{ status.provider }}</strong></div><div><small>状态</small><strong :class="status.providerOk ? 'ok' : 'bad'">{{ status.providerOk ? '正常' : '不可用' }}</strong></div><div><small>Redis 缓存</small><strong :class="status.redis ? 'ok' : 'bad'">{{ status.redis ? '已连接' : '不可用' }}</strong></div><div><small>最近成功</small><strong>{{ status.lastSuccess ? new Date(status.lastSuccess).toLocaleTimeString('zh-CN', { hour12: false }) : '暂无' }}</strong></div></div>
    <p v-if="status && !status.providerOk" class="status-note">当前没有可验证的实时行情快照，页面不会使用模拟值替代。</p>
  </section>
</template>
<style scoped>.provider-status{padding:15px;margin-bottom:14px}.status-heading{display:flex;align-items:flex-start;justify-content:space-between}.status-heading h2{margin-top:4px;font-size:14px}.status-heading button{border:1px solid var(--border);border-radius:4px;background:var(--card-soft);color:var(--primary);font-size:10px;padding:6px 10px}.eyebrow{margin:0;color:var(--primary);font:10px 'JetBrains Mono',monospace}.status-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px}.status-grid div{display:flex;flex-direction:column;gap:5px}.status-grid small,.status-muted,.status-note{color:var(--muted);font-size:10px}.status-grid strong{font:12px 'JetBrains Mono',monospace}.ok{color:var(--down)}.bad,.status-error{color:var(--up)}.status-note{margin-top:12px;line-height:1.5}@media(max-width:560px){.status-grid{grid-template-columns:repeat(2,1fr);row-gap:14px}}</style>
