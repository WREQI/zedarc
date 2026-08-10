<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { getNotifications, markNotificationsRead, type NotificationItem } from '@/services/notifications'
import { sendCodeApi } from '@/services/api-client'

const router = useRouter()
const auth = useAuthStore()
const currentUser = auth.user
const isLoggingIn = auth.loading
const showLogin = ref(false)
const phone = ref('')
const code = ref('')
const countdown = ref(0)
const isSendingCode = ref(false)
let countdownTimer: number | undefined
const toast = ref('')
const savedCount = ref(0)
const recentCount = ref(0)
const showSettings = ref(false)
const showMessages = ref(false)
const notifications = ref(true)
const priceAlerts = ref(true)
const unreadMessages = ref(0)
const messages = ref<NotificationItem[]>([])
const menuItems = [
  { icon: '▣', title: '消息中心', subtitle: '查看系统通知和互动消息' },
  { icon: '◷', title: '浏览历史', subtitle: '查看最近浏览的股票和资讯' },
  { icon: '☆', title: '我的收藏', subtitle: '管理收藏的资讯内容' },
  { icon: '◉', title: '价格提醒', subtitle: '管理目标价提醒' },
  { icon: '⚙', title: '设置', subtitle: '通知、主题和隐私设置' },
]

onMounted(async () => {
  savedCount.value = (JSON.parse(window.localStorage.getItem('zedarc-saved-news') ?? '[]') as number[]).length
  recentCount.value = (JSON.parse(window.localStorage.getItem('zedarc-recent-stocks') ?? '[]') as string[]).length
  notifications.value = window.localStorage.getItem('zedarc-setting-notifications') !== 'false'
  priceAlerts.value = window.localStorage.getItem('zedarc-setting-price-alerts') !== 'false'
  if (auth.user) { try { messages.value = await getNotifications(); unreadMessages.value = messages.value.filter((item) => !item.readAt).length } catch { /* anonymous demo keeps local shell */ } }
})

function persistSetting(key: string, value: boolean) {
  window.localStorage.setItem(key, String(value))
}

function stopCountdown() {
  window.clearInterval(countdownTimer)
  countdownTimer = undefined
  countdown.value = 0
}
function closeLogin() {
  showLogin.value = false
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
    window.clearInterval(countdownTimer)
    countdownTimer = window.setInterval(() => {
      countdown.value -= 1
      if (countdown.value <= 0) { window.clearInterval(countdownTimer); countdownTimer = undefined }
    }, 1000)
    showToast('验证码已发送，请注意查收')
  } catch (error) {
    showToast(error instanceof Error ? error.message : '验证码发送失败，请稍后重试')
  } finally {
    isSendingCode.value = false
  }
}
async function submitLogin() {
  if (!/^1\d{10}$/.test(phone.value)) { showToast('请输入有效的手机号'); return }
  if (code.value !== '123456') { showToast('请输入正确的验证码'); return }
  try {
    await auth.login(phone.value, code.value)
  } catch {
    showToast('登录失败，请稍后重试')
    return
  }
  if (auth.error.value) { showToast(auth.error.value); return }
  showLogin.value = false
  phone.value = ''
  code.value = ''
  stopCountdown()
  showToast('登录成功')
}
onUnmounted(stopCountdown)

function handleMenu(title: string) {
  if (title === '浏览历史') { router.push('/watchlist'); return }
  if (title === '我的收藏') { router.push('/news?saved=1'); return }
  if (title === '消息中心') { showMessages.value = true; unreadMessages.value = 0; if (auth.user) void markNotificationsRead().catch(() => undefined); return }
  if (title === '价格提醒') { router.push('/alerts'); return }
  if (title === '设置') { showSettings.value = true; return }
  showToast(`${title}功能即将开放`)
}

function showToast(message: string) {
  toast.value = message
  window.setTimeout(() => { toast.value = '' }, 1600)
}
</script>

<template>
  <section class="account-page">
    <div class="account-title"><div><p class="eyebrow">ACCOUNT / PROFILE</p><h1>我的</h1></div><button class="account-settings" aria-label="打开设置" @click="showSettings = true">⚙</button></div>
    <section class="account-guide panel"><div class="guide-decoration">◌</div><div class="guide-copy"><h2 v-if="!currentUser">投资股市先开户<br />快人一步</h2><h2 v-else>欢迎回来，{{ currentUser.name }}</h2><p>开通证券账户，享受行情、资讯和交易服务。</p><div class="guide-actions"><button class="primary-button" @click="showToast('开户流程即将开放')">在线开户</button><button class="login-link" @click="currentUser ? auth.logout() : showLogin = true">已有账户，<b>{{ currentUser ? '退出登录' : '去登录' }}</b></button></div></div></section>
    <section class="account-quick"><div class="quick-card"><span class="quick-icon blue">◫</span><strong>我的自选</strong><small>追踪关注标的</small><RouterLink to="/watchlist">→</RouterLink></div><div class="quick-card"><span class="quick-icon orange">▣</span><strong>交易账户</strong><small>开户或绑定账户</small><RouterLink to="/trade">→</RouterLink></div></section>
    <section class="account-menu panel"><div v-for="item in menuItems" :key="item.title" class="account-menu-item" @click="handleMenu(item.title)"><span class="menu-icon">{{ item.icon }}</span><div><strong>{{ item.title }}</strong><b v-if="item.title === '消息中心' && unreadMessages" class="unread-badge">{{ unreadMessages }}</b><p>{{ item.title === '浏览历史' ? `${item.subtitle} · ${recentCount} 条` : item.title === '我的收藏' ? `${item.subtitle} · ${savedCount} 条` : item.subtitle }}</p></div><span class="menu-arrow">›</span></div></section>
    <p class="account-version">腾讯自选股 Web · MVP 预览版</p>
    <div v-if="showSettings" class="account-overlay" @click.self="showSettings = false"><section class="account-sheet panel"><div class="sheet-head"><h2>设置</h2><button @click="showSettings = false">×</button></div><div class="setting-row"><div><strong>资讯推送</strong><small>接收市场热点和重要资讯</small></div><button class="switch" :class="{ on: notifications }" @click="notifications = !notifications; persistSetting('zedarc-setting-notifications', notifications)"><i /></button></div><div class="setting-row"><div><strong>价格提醒</strong><small>自选股涨跌幅达到阈值时提醒</small></div><button class="switch" :class="{ on: priceAlerts }" @click="priceAlerts = !priceAlerts; persistSetting('zedarc-setting-price-alerts', priceAlerts)"><i /></button></div><div class="setting-row"><div><strong>主题模式</strong><small>当前使用浅色行情主题</small></div><span class="setting-value">浅色</span></div><button class="sheet-done" @click="showSettings = false">完成</button></section></div>
    <div v-if="showLogin" class="account-overlay" @click.self="closeLogin"><section class="account-sheet panel login-sheet"><div class="sheet-head"><h2>登录账户</h2><button aria-label="关闭登录窗口" @click="closeLogin">×</button></div><p class="login-description">登录后可以同步自选股、收藏和交易偏好。</p><label class="login-input"><span>+86</span><input v-model="phone" inputmode="tel" maxlength="11" autocomplete="tel" placeholder="请输入手机号" @keyup.enter="sendCode" /></label><label class="login-input"><span>验证码</span><input v-model="code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="请输入 6 位验证码" @keyup.enter="submitLogin" /><button class="code-button" :disabled="countdown > 0 || isSendingCode" @click="sendCode">{{ isSendingCode ? '发送中…' : countdown > 0 ? `${countdown}s 后重发` : '获取验证码' }}</button></label><button class="sheet-done" :disabled="isLoggingIn" @click="submitLogin">{{ isLoggingIn ? '登录中…' : '登录' }}</button></section></div>
    <div v-if="showMessages" class="account-overlay" @click.self="showMessages = false"><section class="account-sheet panel message-sheet"><div class="sheet-head"><h2>消息中心</h2><button @click="showMessages = false">×</button></div><div v-for="message in messages" :key="message.id" class="message-item"><span class="message-dot" /><div><strong>{{ message.title }}</strong><p>{{ message.content }}</p><small>{{ new Date(message.createdAt).toLocaleString('zh-CN') }}</small></div></div><div v-if="!messages.length" class="message-empty">暂无消息</div></section></div>
    <Transition name="toast"><div v-if="toast" class="toast-message">{{ toast }}</div></Transition>
  </section>
</template>

<style scoped>
.account-page { max-width: 720px; margin: 0 auto; }.account-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 23px; }.account-title h1 { font-size: 25px; }.account-settings { color: var(--muted); border: 0; background: transparent; font-size: 20px; }.account-guide { position: relative; overflow: hidden; display: flex; align-items: center; min-height: 205px; padding: 28px 32px; background: linear-gradient(115deg, #fff 0%, #f7fbff 65%, #edf5ff 100%); }.guide-decoration { position: absolute; right: 45px; top: 18px; color: #e4efff; font-size: 118px; line-height: 1; }.guide-copy { position: relative; z-index: 1; }.guide-copy h2 { color: var(--text); font-size: 20px; line-height: 1.5; }.guide-copy p { color: var(--muted); font-size: 11px; margin-top: 8px; }.guide-actions { display: flex; align-items: center; gap: 17px; margin-top: 18px; }.guide-actions .primary-button { min-width: 120px; }.login-link { color: var(--muted); border: 0; background: transparent; font-size: 11px; }.login-link b { color: #4774b3; font-weight: 500; }.account-quick { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 14px 0; }.quick-card { position: relative; display: grid; grid-template-columns: 34px 1fr; align-items: center; column-gap: 11px; background: var(--card); border: 1px solid var(--border); padding: 16px; }.quick-card strong { font-size: 13px; }.quick-card small { color: var(--muted); font-size: 10px; margin-top: 5px; }.quick-card a { position: absolute; right: 15px; top: 28px; color: var(--muted); font-size: 18px; }.quick-icon { grid-row: span 2; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 6px; }.quick-icon.blue { color: var(--primary); background: #edf4ff; }.quick-icon.orange { color: var(--gold); background: #fff4e9; }.account-menu { padding: 4px 18px; }.account-menu-item { display: flex; align-items: center; gap: 13px; min-height: 70px; border-bottom: 1px solid var(--border); cursor: pointer; }.account-menu-item:last-child { border: 0; }.account-menu-item:hover strong { color: var(--primary); }.menu-icon { display: grid; place-items: center; width: 29px; color: var(--primary); font-size: 17px; }.account-menu-item strong { display: block; color: var(--text); font-size: 12px; }.account-menu-item p { color: var(--muted); font-size: 10px; margin-top: 5px; }.menu-arrow { color: var(--muted); font-size: 22px; margin-left: auto; }.account-menu-item > div { position: relative; }.unread-badge { position: absolute; top: -2px; right: -23px; min-width: 16px; height: 16px; display: grid; place-items: center; color: #fff; background: var(--up); border-radius: 9px; font: 9px 'JetBrains Mono', monospace; }.account-version { color: #aab1bd; text-align: center; font-size: 10px; margin-top: 25px; }.toast-message { position: fixed; z-index: 20; left: 50%; bottom: 92px; transform: translateX(-50%); color: #fff; background: rgba(38, 46, 64, .86); border-radius: 4px; padding: 10px 16px; font-size: 11px; }.toast-enter-active, .toast-leave-active { transition: opacity .15s, transform .15s; }.toast-enter-from, .toast-leave-to { opacity: 0; transform: translate(-50%, 8px); }.account-overlay { position: fixed; z-index: 25; inset: 0; display: flex; align-items: flex-end; justify-content: center; background: rgba(38,46,64,.25); }.account-sheet { width: min(520px, 100%); padding: 20px 22px 24px; border-radius: 10px 10px 0 0; }.sheet-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }.sheet-head h2 { font-size: 16px; }.sheet-head button { border: 0; background: transparent; color: var(--muted); font-size: 22px; }.setting-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid var(--border); }.setting-row strong, .setting-row small { display: block; }.setting-row strong { font-size: 12px; }.setting-row small { color: var(--muted); font-size: 10px; margin-top: 5px; }.switch { position: relative; width: 36px; height: 21px; border: 0; border-radius: 12px; background: #d9dee7; }.switch i { position: absolute; left: 2px; top: 2px; width: 17px; height: 17px; border-radius: 50%; background: #fff; transition: transform .15s; }.switch.on { background: var(--primary); }.switch.on i { transform: translateX(15px); }.setting-value { color: var(--muted); font-size: 11px; }.sheet-done { width: 100%; margin-top: 19px; padding: 11px; color: #fff; border: 0; border-radius: 4px; background: var(--primary); font-size: 12px; }.message-item { display: flex; gap: 11px; padding: 15px 0; border-bottom: 1px solid var(--border); }.message-dot { width: 8px; height: 8px; margin-top: 4px; border-radius: 50%; background: var(--primary); flex-shrink: 0; }.orange-dot { background: var(--gold); }.message-item strong { display: block; font-size: 12px; }.message-item p { color: var(--muted); font-size: 11px; margin-top: 6px; }.message-item small { display: block; color: #aab1bd; font: 10px 'JetBrains Mono', monospace; margin-top: 7px; }.message-empty { color: var(--muted); text-align: center; font-size: 10px; padding: 18px 0 4px; }.login-description { color: var(--muted); font-size: 11px; line-height: 1.7; margin: 8px 0 15px; }.login-input { display: flex; align-items: center; gap: 10px; border: 1px solid var(--border); background: var(--bg); padding: 0 12px; }.login-input span { color: var(--muted); font: 11px 'JetBrains Mono', monospace; border-right: 1px solid var(--border); padding-right: 10px; }.login-input input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: var(--text); padding: 11px 0; font: 12px 'JetBrains Mono', monospace; }.login-sheet .sheet-done { margin-top: 15px; }.code-button { flex-shrink: 0; color: var(--primary); background: transparent; border: 0; border-left: 1px solid var(--border); padding-left: 10px; font-size: 10px; }.code-button:disabled { color: var(--muted); cursor: wait; }.sheet-done:disabled { opacity: .6; cursor: not-allowed; }
@media (max-width: 640px) { .account-guide { padding: 24px 20px; min-height: 215px; }.guide-decoration { right: 12px; }.guide-copy h2 { font-size: 18px; }.account-quick { gap: 8px; }.quick-card { padding: 12px; }.quick-card a { right: 10px; } }
</style>
