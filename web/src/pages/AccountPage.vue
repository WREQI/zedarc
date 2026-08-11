<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { useAuthStore } from '@/stores/auth'

import { sendCodeApi } from '@/services/api-client'
import { useFavoritesStore } from '@/stores/favorites'
import { useWatchlistStore } from '@/stores/watchlist'



const auth = useAuthStore()
const currentUser = auth.user
const isLoggingIn = auth.loading
const favorites = useFavoritesStore()
const watchlist = useWatchlistStore()
const showLogin = ref(false)
const phone = ref('')
const code = ref('')
const countdown = ref(0)
const isSendingCode = ref(false)
const toast = ref('')
const savedCount = ref(0)
const recentCount = ref(0)

let countdownTimer: number | undefined
let toastTimer: number | undefined

const quickEntries = [
  { icon: '☆', title: '我的自选', note: '关注的股票', to: '/watchlist', tone: 'blue' },
  { icon: '▣', title: '交易账户', note: '开户 / 绑定', to: '/trade', tone: 'orange' },
  { icon: '▤', title: '我的研报', note: '机构观点', to: '/reports', tone: 'purple' },
  { icon: '◷', title: '浏览历史', note: '最近浏览', to: '/history', tone: 'green' },
]

const serviceEntries = [
  { icon: '▣', title: '消息中心', note: '系统通知和互动消息', to: '/notifications' },
  { icon: '◉', title: '价格提醒', note: '管理目标价提醒', to: '/alerts' },
  { icon: '⚙', title: '设置', note: '通知、主题和隐私', to: '/settings' },
]

onMounted(() => {
  savedCount.value = favorites.count.value
  recentCount.value = watchlist.recentCodes.value.length
})

function showToast(message: string) {
  toast.value = message
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => { toast.value = '' }, 1800)
}


function stopCountdown() {
  window.clearInterval(countdownTimer)
  countdownTimer = undefined
  countdown.value = 0
}
function closeLogin() {
  showLogin.value = false
  phone.value = ''
  code.value = ''
  stopCountdown()
}
async function sendCode() {
  if (countdown.value > 0 || isSendingCode.value) return
  if (!/^1\d{10}$/.test(phone.value)) { showToast('请输入有效的手机号'); return }
  isSendingCode.value = true
  try {
    const result = await sendCodeApi(phone.value)
    countdown.value = result.expiresIn > 0 ? Math.min(result.expiresIn, 60) : 60
    countdownTimer = window.setInterval(() => {
      countdown.value -= 1
      if (countdown.value <= 0) stopCountdown()
    }, 1000)
    showToast('验证码已发送，请注意查收')
  } catch (error) {
    showToast(error instanceof Error ? error.message : '验证码发送失败，请稍后重试')
  } finally { isSendingCode.value = false }
}
async function submitLogin() {
  if (!/^1\d{10}$/.test(phone.value)) { showToast('请输入有效的手机号'); return }
  if (!/^\d{6}$/.test(code.value)) { showToast('请输入 6 位验证码'); return }
  try { await auth.login(phone.value, code.value) } catch { showToast('登录失败，请稍后重试'); return }
  if (auth.error.value) { showToast(auth.error.value); return }
  closeLogin()
  showToast('登录成功')
}

function logout() {
  auth.logout()

  showToast('已退出登录')
}
onUnmounted(() => { stopCountdown(); window.clearTimeout(toastTimer) })
</script>

<template>
  <main class="account-page">
    <header class="page-header"><div><p class="header-kicker">自选股 · 账户中心</p><h1>我的</h1></div><RouterLink class="header-action" to="/settings" aria-label="打开设置">⚙</RouterLink></header>

    <section class="profile-card">
      <div class="profile-orb"><span>{{ currentUser ? currentUser.name.slice(0, 1) : '我' }}</span></div>
      <div class="profile-copy"><template v-if="currentUser"><h2>{{ currentUser.name }}</h2><p>账号已登录 · 自选与偏好已同步</p></template><template v-else><h2>登录自选股</h2><p>登录后同步自选、收藏与提醒</p></template></div>
      <button v-if="currentUser" class="profile-status" @click="logout">退出</button><button v-else class="profile-status login-status" @click="showLogin = true">登录 <span>›</span></button>
    </section>

    <section class="quick-grid" aria-label="常用功能">
      <RouterLink v-for="entry in quickEntries" :key="entry.title" :to="entry.to" class="quick-entry"><span class="entry-icon" :class="entry.tone">{{ entry.icon }}</span><strong>{{ entry.title }}</strong><small>{{ entry.note }}<b v-if="entry.title === '我的自选' && savedCount"> · {{ savedCount }}</b><b v-if="entry.title === '浏览历史' && recentCount"> · {{ recentCount }}</b></small></RouterLink>
    </section>

    <section class="service-section"><h2 class="section-title">我的服务</h2><div class="service-list">
      <RouterLink v-for="entry in serviceEntries" :key="entry.title" class="service-row" :to="entry.to"><span class="service-icon">{{ entry.icon }}</span><span class="service-copy"><strong>{{ entry.title }}</strong><small>{{ entry.note }}</small></span><span class="chevron">›</span></RouterLink>
    </div></section>

    <section class="account-note"><span>◇</span><p>行情、资讯与研报持续更新<br /><small>专业伴你成长，投资请理性决策</small></p></section>
    <p class="account-version">腾讯自选股 Web · MVP 预览版</p>


    <div v-if="showLogin" class="account-overlay" @click.self="closeLogin"><section class="account-sheet login-sheet"><div class="sheet-head"><h2>登录账户</h2><button aria-label="关闭登录" @click="closeLogin">×</button></div><p class="login-description">使用手机号登录，开启同步服务。</p><label class="login-input"><span>+86</span><input v-model="phone" inputmode="tel" maxlength="11" autocomplete="tel" placeholder="请输入手机号" @keyup.enter="sendCode" /></label><label class="login-input"><span>验证码</span><input v-model="code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="请输入 6 位验证码" @keyup.enter="submitLogin" /><button class="code-button" :disabled="countdown > 0 || isSendingCode" @click="sendCode">{{ isSendingCode ? '发送中…' : countdown > 0 ? `${countdown}s` : '获取验证码' }}</button></label><button class="sheet-done" :disabled="isLoggingIn" @click="submitLogin">{{ isLoggingIn ? '登录中…' : '登录' }}</button></section></div>


    <Transition name="toast"><div v-if="toast" class="toast-message" role="status">{{ toast }}</div></Transition>
  </main>
</template>

<style scoped>
.account-page{max-width:720px;margin:0 auto;padding:4px 0 32px;color:var(--text)}.page-header{display:flex;align-items:center;justify-content:space-between;padding:4px 2px 18px}.header-kicker{color:var(--muted);font-size:10px;letter-spacing:.06em;margin-bottom:5px}.page-header h1{font-size:25px;line-height:1.1}.header-action{width:34px;height:34px;border:1px solid var(--border);border-radius:50%;background:var(--card);color:var(--muted);font-size:17px}.profile-card{position:relative;display:flex;align-items:center;min-height:112px;padding:22px 18px;border-radius:10px;background:linear-gradient(125deg,#eef6ff 0%,#f8fbff 52%,#fff 100%);border:1px solid #e0ebfa;overflow:hidden}.profile-card:after{content:'';position:absolute;right:-34px;top:-55px;width:160px;height:160px;border:1px solid #d7e8fc;border-radius:50%;box-shadow:0 0 0 18px #edf5ff80,0 0 0 38px #f3f8ff80}.profile-orb{position:relative;z-index:1;display:grid;place-items:center;width:58px;height:58px;border-radius:50%;background:linear-gradient(145deg,#477fd0,#77a8e7);box-shadow:0 5px 14px #4c84ca35;color:#fff;font-size:22px}.profile-copy{position:relative;z-index:1;margin-left:13px}.profile-copy h2{font-size:16px}.profile-copy p{color:var(--muted);font-size:10px;margin-top:7px}.profile-status{position:relative;z-index:1;margin-left:auto;padding:6px 0 6px 10px;border:0;background:transparent;color:var(--muted);font-size:10px}.login-status{color:var(--primary);font-weight:600}.login-status span{font-size:18px;vertical-align:-1px;margin-left:3px}.quick-grid{display:grid;grid-template-columns:repeat(4,1fr);margin:14px 0;border:1px solid var(--border);border-radius:9px;background:var(--card)}.quick-entry{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 4px 13px;text-align:center;border-right:1px solid var(--border)}.quick-entry:last-child{border:0}.entry-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;font-size:18px}.entry-icon.blue{color:#477fd0;background:#edf4ff}.entry-icon.orange{color:#e08b3c;background:#fff3e6}.entry-icon.purple{color:#8368c5;background:#f2efff}.entry-icon.green{color:#52a37b;background:#eaf8f1}.quick-entry strong{font-size:11px;font-weight:500}.quick-entry small{color:var(--muted);font-size:9px;white-space:nowrap}.quick-entry small b{font-weight:400;color:var(--primary)}.section-title{font-size:14px;margin:22px 2px 9px}.service-list{padding:0 15px;border-radius:9px;background:var(--card);border:1px solid var(--border)}.service-row{display:flex;align-items:center;width:100%;min-height:62px;padding:0;border:0;border-bottom:1px solid var(--border);background:transparent;text-align:left}.service-row:last-child{border:0}.service-icon{display:grid;place-items:center;width:30px;color:var(--primary);font-size:17px}.service-copy{display:flex;flex-direction:column;gap:5px;margin-left:12px}.service-copy strong{font-size:12px;font-weight:500}.service-copy small{color:var(--muted);font-size:10px}.chevron{margin-left:auto;color:#aab4c2;font-size:22px;font-weight:300}.badge{display:grid;place-items:center;min-width:18px;height:18px;padding:0 4px;margin-left:auto;margin-right:8px;border-radius:10px;background:var(--up);color:#fff;font-size:9px;font-weight:500}.badge+.chevron{margin-left:0}.account-note{display:flex;align-items:center;gap:10px;margin:21px 3px 0;padding:12px 14px;border-radius:7px;background:#f8fafc;color:#7c8797}.account-note>span{color:#8eb6e8;font-size:22px}.account-note p{font-size:10px;line-height:1.7}.account-note small{color:#aab3bf;font-size:9px}.account-version{color:#aab1bd;text-align:center;font-size:9px;margin-top:22px}.account-overlay{position:fixed;z-index:25;inset:0;display:flex;align-items:flex-end;justify-content:center;background:#1f2c3d40}.account-sheet{width:min(520px,100%);padding:20px 22px 24px;border-radius:13px 13px 0 0;background:var(--card);box-shadow:0 -5px 24px #20334d18}.sheet-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.sheet-head h2{font-size:16px}.sheet-head button{border:0;background:transparent;color:var(--muted);font-size:23px}.setting-row{display:flex;align-items:center;justify-content:space-between;padding:15px 0;border-bottom:1px solid var(--border)}.setting-row strong,.setting-row small{display:block}.setting-row strong{font-size:12px}.setting-row small{color:var(--muted);font-size:10px;margin-top:5px}.switch{position:relative;width:36px;height:21px;border:0;border-radius:12px;background:#d9dee7}.switch i{position:absolute;left:2px;top:2px;width:17px;height:17px;border-radius:50%;background:#fff;transition:transform .15s}.switch.on{background:var(--primary)}.switch.on i{transform:translateX(15px)}.setting-value{color:var(--muted);font-size:11px}.sheet-done{width:100%;margin-top:19px;padding:11px;color:#fff;border:0;border-radius:5px;background:var(--primary);font-size:12px}.sheet-done:disabled{opacity:.6}.login-description{color:var(--muted);font-size:11px;line-height:1.7;margin:7px 0 14px}.login-input{display:flex;align-items:center;gap:10px;margin-top:9px;border:1px solid var(--border);background:var(--bg);padding:0 12px}.login-input>span{color:var(--muted);font:11px 'JetBrains Mono',monospace;border-right:1px solid var(--border);padding-right:10px}.login-input input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--text);padding:11px 0;font:12px 'JetBrains Mono',monospace}.code-button{flex-shrink:0;color:var(--primary);background:transparent;border:0;border-left:1px solid var(--border);padding-left:10px;font-size:10px}.message-actions{display:flex;justify-content:space-between;padding:5px 0 10px;border-bottom:1px solid var(--border);color:var(--muted);font-size:10px}.text-button{color:var(--primary);border:0;background:transparent;font-size:10px}.message-item{display:flex;gap:10px;padding:14px 0;border-bottom:1px solid var(--border)}.message-item>i{width:7px;height:7px;margin-top:5px;border-radius:50%;background:var(--border);flex:none}.message-item.unread>i{background:var(--primary)}.message-item strong{font-size:12px}.message-item p{color:var(--muted);font-size:10px;line-height:1.6;margin-top:5px}.message-item small{display:block;color:#aab1bd;font:9px 'JetBrains Mono',monospace;margin-top:5px}.message-state{color:var(--muted);text-align:center;font-size:11px;padding:24px 0 8px}.error-state{color:var(--down)}.error-state button{color:var(--primary);border:0;background:transparent;font-size:11px}.toast-message{position:fixed;z-index:30;left:50%;bottom:90px;transform:translateX(-50%);padding:10px 16px;border-radius:5px;color:#fff;background:#263449e8;font-size:11px;white-space:nowrap}.toast-enter-active,.toast-leave-active{transition:opacity .15s,transform .15s}.toast-enter-from,.toast-leave-to{opacity:0;transform:translate(-50%,8px)}
@media (max-width:480px){.account-page{padding-left:0;padding-right:0}.profile-card{min-height:106px;padding:20px 15px}.quick-entry{padding-left:1px;padding-right:1px}.quick-entry strong{font-size:10px}.quick-entry small{font-size:8px}.service-list{padding:0 13px}}
</style>
