<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getLoginHistoryApi, getSessionsApi, type ApiSession, type LoginHistoryItem } from '@/services/api-client'
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
const sessions = ref<ApiSession[]>([])
const history = ref<LoginHistoryItem[]>([])
const loading = ref(true)
const error = ref('')
onMounted(async () => {
  if (!auth.user.value) return
  try { [sessions.value, history.value] = await Promise.all([getSessionsApi(), getLoginHistoryApi()]) }
  catch (e) { error.value = e instanceof Error ? e.message : '安全信息读取失败' }
  finally { loading.value = false }
})
function deviceName(session: ApiSession) { return session.userAgent || '未知设备' }
function formatDate(value: string) { return new Date(value).toLocaleString('zh-CN', { hour12: false }) }
</script>

<template>
  <section class="account-subpage">
    <header class="subpage-heading"><div><p class="eyebrow">ACCOUNT / SECURITY</p><h1>安全中心</h1><p class="muted">管理登录状态与账户安全</p></div><RouterLink class="back-link" to="/settings">‹ 设置</RouterLink></header>
    <section v-if="auth.user.value" class="panel status-card"><span class="status-dot" /><div><strong>当前账户已登录</strong><p>登录凭证由现有认证服务管理。</p></div></section>
    <section v-else class="empty-panel"><span class="empty-icon">◇</span><h2>未登录</h2><p>登录后才能查看安全状态。请先完成手机号登录。</p><RouterLink class="primary-button" to="/account">去登录</RouterLink></section>
    <section v-if="auth.user.value" class="panel security-list">
      <div class="security-row"><div><strong>登录凭证</strong><small>当前账户采用手机号验证码登录，无密码可修改。</small></div><span class="available">验证码登录</span></div>
      <div class="security-row"><div><strong>登录会话</strong><small>服务端真实记录设备、IP 和最后使用时间（{{ sessions.length }} 个有效会话）</small></div><RouterLink class="row-link" to="/settings?section=devices">管理 ›</RouterLink></div>
    </section>
    <p v-if="error" class="error">{{ error }}</p>
    <section v-if="auth.user.value" class="panel history-panel"><h2>最近登录历史</h2><p v-if="loading" class="muted">读取中…</p><p v-else-if="!history.length" class="muted">暂无登录历史</p><div v-for="item in history" :key="item.id" class="history-row"><div><strong>{{ item.action === 'login' ? '登录成功' : item.action }}</strong><small>{{ item.userAgent || '未知设备' }}</small></div><time>{{ formatDate(item.createdAt) }}</time></div></section>
    <p class="page-note">修改手机号仍需通过验证码登录流程完成；会话注销需要当前登录凭证认证。</p>
  </section>
</template>

<style scoped>
.account-subpage{max-width:720px;margin:0 auto}.subpage-heading{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:22px}.subpage-heading h1{font-size:24px;margin-top:5px}.eyebrow{color:var(--primary);font:500 10px 'JetBrains Mono',monospace;letter-spacing:.12em}.back-link,.row-link{color:var(--primary);font-size:11px}.muted{color:var(--muted);font-size:11px;margin-top:7px}.panel{background:var(--card);border:1px solid var(--border);border-radius:6px}.status-card{display:flex;align-items:center;gap:12px;padding:16px;margin-bottom:12px;background:#f2f8f3;border-color:#dcefe0}.status-dot{width:9px;height:9px;border-radius:50%;background:var(--down)}.status-card strong{font-size:12px}.status-card p{color:var(--muted);font-size:10px;margin-top:5px}.security-list{padding:0 16px}.security-row{display:flex;align-items:center;justify-content:space-between;min-height:66px;border-bottom:1px solid var(--border)}.security-row:last-child{border:0}.security-row strong,.security-row small{display:block}.security-row strong{font-size:12px;font-weight:500}.security-row small{margin-top:5px;color:var(--muted);font-size:10px}.unavailable,.available{color:#a8afbb;font-size:10px}.available{color:#4f9b70}.history-panel{margin-top:12px;padding:0 16px}.history-panel h2{padding:15px 0 8px;font-size:11px}.history-row{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid var(--border)}.history-row strong,.history-row small{display:block}.history-row strong{font-size:11px;font-weight:500}.history-row small,.history-row time{color:var(--muted);font-size:10px;margin-top:4px}.error{color:#c85c5c;font-size:11px;margin:10px 3px}.empty-panel{padding:50px 24px;text-align:center;background:var(--card);border:1px dashed var(--border);border-radius:6px;margin-bottom:12px}.empty-icon{display:block;color:#9bbbe9;font-size:31px;margin-bottom:12px}.empty-panel h2{font-size:15px}.empty-panel p{max-width:260px;margin:8px auto 18px;color:var(--muted);font-size:11px;line-height:1.7}.primary-button{display:inline-block;padding:10px 24px;border-radius:4px;background:var(--primary);color:#fff;font-size:11px}.page-note{margin:16px 3px;color:var(--muted);font-size:10px;line-height:1.7}
</style>
