<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSessionsApi, revokeSessionApi, type ApiSession } from '@/services/api-client'
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
const sessions = ref<ApiSession[]>([])
const loading = ref(true)
const error = ref('')
const revoking = ref('')
onMounted(async () => { if (!auth.user.value) return; try { sessions.value = await getSessionsApi() } catch (e) { error.value = e instanceof Error ? e.message : '设备读取失败' } finally { loading.value = false } })
function formatDate(value: string) { return new Date(value).toLocaleString('zh-CN', { hour12: false }) }
async function revoke(session: ApiSession) {
  if (session.current || revoking.value) return
  revoking.value = session.id; error.value = ''
  try { await revokeSessionApi(session.id); sessions.value = sessions.value.filter((item) => item.id !== session.id) }
  catch (e) { error.value = e instanceof Error ? e.message : '注销设备失败' }
  finally { revoking.value = '' }
}
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / DEVICES</p><h1>登录设备</h1><p class="muted">查看账户的登录设备</p></div><RouterLink class="back-link" to="/settings?section=security">‹ 安全中心</RouterLink></header>
    <section v-if="!auth.user.value" class="empty-panel"><span class="empty-icon">◎</span><h2>请先登录</h2><p>登录后才能查看与账户关联的设备。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <section v-else class="panel device-list"><p v-if="loading" class="muted">读取中…</p><p v-else-if="!sessions.length" class="muted">暂无有效登录会话</p><article v-for="session in sessions" :key="session.id" class="device-row"><div class="device-icon">⌁</div><div class="device-info"><strong>{{ session.userAgent }}</strong><small>{{ session.ipAddress || 'IP 未记录' }} · 最近使用 {{ formatDate(session.lastUsedAt) }}</small><small>创建于 {{ formatDate(session.createdAt) }}</small></div><div class="device-action"><span v-if="session.current" class="current">当前设备</span><button v-else class="revoke-button" :disabled="revoking === session.id" @click="revoke(session)">{{ revoking === session.id ? '注销中…' : '注销' }}</button></div></article></section>
    <p v-if="error" class="error">{{ error }}</p><p class="page-note">设备记录来自服务端会话表；注销操作会立即使该 refresh token 失效。</p>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:24px;margin-top:5px}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link{color:var(--primary);font-size:11px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.empty-panel{padding:58px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px}.empty-icon{display:block;color:#9bbbe9;font-size:32px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:290px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}.disabled-action{display:inline-block;padding:9px 18px;border-radius:4px;background:#f0f2f5;color:#a4acb8;font-size:10px}.device-list{padding:0 16px}.device-row{display:flex;align-items:center;gap:10px;padding:15px 0;border-bottom:1px solid var(--border)}.device-row:last-child{border:0}.device-icon{display:grid;place-items:center;width:30px;height:30px;border-radius:6px;background:#edf4ff;color:var(--primary)}.device-info{min-width:0;flex:1}.device-info strong,.device-info small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.device-info strong{font-size:11px;font-weight:500}.device-info small{margin-top:4px;color:var(--muted);font-size:10px}.current{color:#4f9b70;font-size:10px}.revoke-button{border:1px solid #e2a6a6;border-radius:4px;background:transparent;color:#bd6565;padding:6px 9px;font-size:10px;cursor:pointer}.revoke-button:disabled{opacity:.6}.error{color:#c85c5c;font-size:11px;margin:10px 3px}.page-note{margin:16px 3px;color:var(--muted);font-size:10px;line-height:1.7}
</style>
