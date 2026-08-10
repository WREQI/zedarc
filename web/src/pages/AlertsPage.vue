<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { getPriceAlerts, setPriceAlertEnabled, updatePriceAlert, deletePriceAlert, type PriceAlert } from '@/services/alerts'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'

const alerts = ref<PriceAlert[]>([])
const loading = ref(true)
const error = ref('')
const busy = ref<string | null>(null)
const toast = ref('')
const enabledCount = computed(() => alerts.value.filter((item) => item.enabled).length)

async function load() {
  loading.value = true; error.value = ''
  try { alerts.value = await getPriceAlerts() } catch { error.value = '请先登录后管理价格提醒。' }
  finally { loading.value = false }
}
async function toggle(item: PriceAlert) {
  busy.value = item.id
  try { const updated = await setPriceAlertEnabled(item.id, !item.enabled); item.enabled = updated.enabled }
  catch { toast.value = '更新失败，请稍后重试' }
  finally { busy.value = null }
}
async function toggleAll() {
  if (!alerts.value.length) return
  const enabled = enabledCount.value !== alerts.value.length
  busy.value = 'all'
  try {
    const updated = await Promise.all(alerts.value.map((item) => setPriceAlertEnabled(item.id, enabled)))
    updated.forEach((item, index) => { alerts.value[index].enabled = item.enabled })
    toast.value = enabled ? '已开启全部提醒' : '已暂停全部提醒'
  } catch { await load(); toast.value = '批量更新失败，已恢复最新状态' }
  finally { busy.value = null }
}
async function edit(item: PriceAlert) {
  const value = window.prompt('请输入新的目标价格', String(item.targetPrice))
  if (value == null) return
  const targetPrice = Number(value)
  if (!Number.isFinite(targetPrice) || targetPrice <= 0) { toast.value = '目标价格无效'; return }
  busy.value = item.id
  try { Object.assign(item, await updatePriceAlert(item.id, { targetPrice })); toast.value = '提醒已更新' }
  catch { toast.value = '更新失败，请稍后重试' }
  finally { busy.value = null }
}
async function remove(item: PriceAlert) {
  if (!window.confirm(`确定删除 ${item.code} 的价格提醒吗？`)) return
  busy.value = item.id
  try { await deletePriceAlert(item.id); alerts.value = alerts.value.filter((value) => value.id !== item.id); toast.value = '提醒已删除' }
  catch { toast.value = '删除失败，请稍后重试' }
  finally { busy.value = null }
}
onMounted(() => void load())
</script>
<template>
  <section class="alerts-page">
    <div class="page-heading"><div><p class="eyebrow">MARKET / ALERTS</p><h1>价格提醒</h1><p class="muted">到达目标价后接收站内通知，支持一键暂停和恢复。</p></div><div class="heading-actions"><button v-if="alerts.length" class="secondary-button" :disabled="busy !== null" @click="toggleAll">{{ enabledCount === alerts.length ? '暂停全部' : '开启全部' }}</button><button class="secondary-button" :disabled="loading || busy !== null" @click="load">刷新</button></div></div>
    <LoadingState v-if="loading" label="正在加载提醒" />
    <ErrorState v-else-if="error" title="提醒暂不可用" :message="error" :retry="load" />
    <section v-else class="alert-list">
      <article v-for="item in alerts" :key="item.id" class="panel alert-card" :class="{ disabled: !item.enabled }">
        <div><strong>{{ item.code }}</strong><p>价格{{ item.direction === 'above' ? '高于' : '低于' }} <b class="mono">{{ item.targetPrice.toFixed(2) }}</b><small>{{ item.repeat ? ' · 重复提醒' : ' · 提醒一次' }}{{ item.enabled ? '' : ' · 已暂停' }}</small></p></div>
        <div class="alert-actions"><button class="switch" :class="{ on: item.enabled }" :disabled="busy !== null" :aria-label="item.enabled ? `暂停 ${item.code} 提醒` : `开启 ${item.code} 提醒`" @click="toggle(item)"><i /></button><button class="edit-button" :disabled="busy !== null" @click="edit(item)">编辑</button><button class="delete-button" :disabled="busy !== null" @click="remove(item)">删除</button></div>
      </article>
      <div v-if="!alerts.length" class="panel empty-alert">还没有价格提醒，可在股票详情页添加。</div>
    </section>
    <Transition name="toast"><div v-if="toast" class="toast" role="status">{{ toast }}</div></Transition>
  </section>
</template>
<style scoped>
.alerts-page { max-width: 820px; margin: 0 auto; }.alert-list { display: grid; gap: 10px; }.alert-card { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; transition: opacity .15s; }.alert-card.disabled { opacity: .62; }.alert-card strong { font-size: 15px; }.alert-card p { color: var(--muted); font-size: 11px; margin-top: 8px; }.alert-card p b { color: var(--text); margin-left: 5px; }.alert-card small { color: var(--muted); }.alert-actions { display: flex; align-items: center; gap: 16px; }.switch { position: relative; width: 36px; height: 21px; border: 0; border-radius: 12px; background: #d9dee7; }.switch i { position: absolute; left: 2px; top: 2px; width: 17px; height: 17px; border-radius: 50%; background: #fff; transition: transform .15s; }.switch.on { background: var(--primary); }.switch.on i { transform: translateX(15px); }.delete-button { color: var(--up); border: 0; background: transparent; font-size: 11px; }.edit-button { color: var(--primary); border: 0; background: transparent; font-size: 11px; }.switch:disabled, .edit-button:disabled, .delete-button:disabled, .secondary-button:disabled { cursor: wait; opacity: .55; }.empty-alert { color: var(--muted); padding: 35px; text-align: center; font-size: 12px; }.toast { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); color: #fff; background: rgba(38,46,64,.88); padding: 10px 15px; font-size: 11px; }
@media (max-width: 560px) { .alert-card { align-items: flex-start; gap: 12px; flex-direction: column; }.alert-actions { width: 100%; justify-content: flex-end; gap: 13px; }.heading-actions { width: 100%; }.heading-actions button { flex: 1; } }
</style>
