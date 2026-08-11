<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { getPriceAlerts, createPriceAlert, setPriceAlertEnabled, updatePriceAlert, deletePriceAlert, type PriceAlert } from '@/services/alerts'
import DataState from '@/components/DataState.vue'
import EmptyState from '@/components/EmptyState.vue'

const alerts = ref<PriceAlert[]>([])
const loading = ref(true)
const error = ref('')
const busy = ref<string | null>(null)
const toast = ref('')
const showCreate = ref(false)
const createCode = ref('')
const createTarget = ref('')
const createDirection = ref<'above' | 'below'>('above')
const createRepeat = ref(false)
const creating = ref(false)
const enabledCount = computed(() => alerts.value.filter((item) => item.enabled).length)
const status = computed<'loading' | 'error' | 'ready'>(() => loading.value ? 'loading' : error.value ? 'error' : 'ready')

async function load() {
  loading.value = true; error.value = ''
  try { alerts.value = await getPriceAlerts() } catch { error.value = '请先登录后管理价格提醒。' }
  finally { loading.value = false }
}
async function create() {
  const code = createCode.value.trim().toUpperCase()
  const targetPrice = Number(createTarget.value)
  if (!code || !Number.isFinite(targetPrice) || targetPrice <= 0) { toast.value = '请输入股票代码和有效目标价格'; return }
  creating.value = true
  try {
    const alert = await createPriceAlert({ code, targetPrice, direction: createDirection.value, repeat: createRepeat.value })
    alerts.value = [alert, ...alerts.value]
    createCode.value = ''; createTarget.value = ''; createDirection.value = 'above'; createRepeat.value = false; showCreate.value = false; toast.value = '提醒已创建'
  } catch { toast.value = '创建失败，请稍后重试' }
  finally { creating.value = false }
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
    <div class="page-heading"><div><p class="eyebrow">MARKET / ALERTS</p><h1>价格提醒</h1><p class="muted">到达目标价后接收站内通知，支持一键暂停和恢复。</p></div><div class="heading-actions"><button class="secondary-button create-button" :disabled="busy !== null || creating" @click="showCreate = !showCreate">{{ showCreate ? '取消创建' : '新建提醒' }}</button><button v-if="alerts.length" class="secondary-button" :disabled="busy !== null" @click="toggleAll">{{ enabledCount === alerts.length ? '暂停全部' : '开启全部' }}</button><button class="secondary-button" :disabled="loading || busy !== null" @click="load">刷新</button></div></div>
    <form v-if="showCreate && !loading && !error" class="panel create-alert" @submit.prevent="create"><label>股票代码<input v-model="createCode" maxlength="32" placeholder="例如 600519" autocomplete="off" /></label><label>目标价格<input v-model="createTarget" type="number" min="0.01" step="0.01" placeholder="请输入价格" /></label><label>触发条件<select v-model="createDirection"><option value="above">价格高于目标价</option><option value="below">价格低于目标价</option></select></label><label class="create-check"><input v-model="createRepeat" type="checkbox" /> 每次达到条件都提醒</label><button class="primary-button" type="submit" :disabled="creating">{{ creating ? '创建中…' : '创建提醒' }}</button></form>
    <DataState :status="status" loading-label="正在加载提醒" error-title="提醒暂不可用" :message="error" :retry="load">
    <section class="alert-list">
      <article v-for="item in alerts" :key="item.id" class="panel alert-card" :class="{ disabled: !item.enabled }">
        <div><strong>{{ item.code }}</strong><p>价格{{ item.direction === 'above' ? '高于' : '低于' }} <b class="mono">{{ item.targetPrice.toFixed(2) }}</b><small>{{ item.repeat ? ' · 重复提醒' : ' · 提醒一次' }}{{ item.enabled ? '' : ' · 已暂停' }}</small></p></div>
        <div class="alert-actions"><button class="switch" :class="{ on: item.enabled }" :disabled="busy !== null" :aria-label="item.enabled ? `暂停 ${item.code} 提醒` : `开启 ${item.code} 提醒`" @click="toggle(item)"><i /></button><button class="edit-button" :disabled="busy !== null" @click="edit(item)">编辑</button><button class="delete-button" :disabled="busy !== null" @click="remove(item)">删除</button></div>
      </article>
      <EmptyState v-if="!alerts.length" title="暂无价格提醒" message="可在股票详情页或此处新建目标价提醒。" />
    </section>
    </DataState>
    <Transition name="toast"><div v-if="toast" class="toast" role="status">{{ toast }}</div></Transition>
  </section>
</template>
<style scoped>
.alerts-page { max-width: 820px; margin: 0 auto; }.create-alert { display:grid; grid-template-columns:1fr 1fr 1.2fr auto; align-items:end; gap:12px; margin:14px 0; padding:16px 18px; }.create-alert label { display:grid; gap:6px; color:var(--muted); font-size:10px; }.create-alert input,.create-alert select { min-width:0; padding:8px; border:1px solid var(--border); border-radius:4px; background:var(--bg); color:var(--text); font-size:11px; }.create-alert .primary-button { padding:8px 12px; border:0; border-radius:4px; background:var(--primary); color:#fff; font-size:11px; }.create-check { display:flex!important; align-items:center; gap:6px; white-space:nowrap; }.create-check input { accent-color:var(--primary); }.alert-list { display: grid; gap: 10px; }.alert-card { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; transition: opacity .15s; }.alert-card.disabled { opacity: .62; }.alert-card strong { font-size: 15px; }.alert-card p { color: var(--muted); font-size: 11px; margin-top: 8px; }.alert-card p b { color: var(--text); margin-left: 5px; }.alert-card small { color: var(--muted); }.alert-actions { display: flex; align-items: center; gap: 16px; }.switch { position: relative; width: 36px; height: 21px; border: 0; border-radius: 12px; background: #d9dee7; }.switch i { position: absolute; left: 2px; top: 2px; width: 17px; height: 17px; border-radius: 50%; background: #fff; transition: transform .15s; }.switch.on { background: var(--primary); }.switch.on i { transform: translateX(15px); }.delete-button { color: var(--up); border: 0; background: transparent; font-size: 11px; }.edit-button { color: var(--primary); border: 0; background: transparent; font-size: 11px; }.switch:disabled, .edit-button:disabled, .delete-button:disabled, .secondary-button:disabled { cursor: wait; opacity: .55; }.empty-alert { color: var(--muted); padding: 35px; text-align: center; font-size: 12px; }.toast { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); color: #fff; background: rgba(38,46,64,.88); padding: 10px 15px; font-size: 11px; }
@media (max-width: 700px) { .create-alert { grid-template-columns:1fr 1fr; }.create-alert .primary-button { grid-column:2; } } @media (max-width: 560px) { .alert-card { align-items: flex-start; gap: 12px; flex-direction: column; }.alert-actions { width: 100%; justify-content: flex-end; gap: 13px; }.heading-actions { width: 100%; }.heading-actions button { flex: 1; } }
</style>
