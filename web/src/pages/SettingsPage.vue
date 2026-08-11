<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import ProfilePage from '@/pages/ProfilePage.vue'
import SecurityPage from '@/pages/SecurityPage.vue'
import DevicesPage from '@/pages/DevicesPage.vue'
import FeedbackPage from '@/pages/FeedbackPage.vue'

const route = useRoute()
const settings = useSettingsStore()
const section = computed(() => typeof route.query.section === 'string' ? route.query.section : '')
const accountEntries = [
  { icon: '◎', title: '个人资料', note: '查看账户信息', section: 'profile' },
  { icon: '◇', title: '安全中心', note: '登录状态与安全设置', section: 'security' },
  { icon: '⌁', title: '登录设备', note: '查看已登录设备', section: 'devices' },
  { icon: '✎', title: '意见反馈', note: '反馈功能使用建议', section: 'feedback' },
]
const isSaving = ref<'notifications' | 'priceAlerts' | ''>('')
const toast = ref('')
let toastTimer: number | undefined

const settingItems = [
  { key: 'notifications' as const, title: '资讯推送', description: '接收市场热点和重要资讯' },
  { key: 'priceAlerts' as const, title: '价格提醒', description: '自选股达到目标价时提醒' },
]

onMounted(() => { void settings.hydrate() })
function valueFor(key: 'notifications' | 'priceAlerts') { return key === 'notifications' ? settings.notifications : settings.priceAlerts }
async function toggle(key: 'notifications' | 'priceAlerts') {
  isSaving.value = key
  const value = !valueFor(key).value
  await settings.set(key, value)
  isSaving.value = ''
  showToast(value ? '已开启' : '已关闭')
}
function showToast(message: string) {
  toast.value = message
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => { toast.value = '' }, 1600)
}
</script>

<template>
  <section v-if="!section" class="settings-page">
    <header class="page-header"><div><p class="eyebrow">ACCOUNT / PREFERENCES</p><h1>设置</h1></div></header>
    <section class="setting-group panel"><h2>账户与安全</h2><RouterLink v-for="entry in accountEntries" :key="entry.section" class="account-entry" :to="`/settings?section=${entry.section}`"><span class="account-entry-icon">{{ entry.icon }}</span><span><strong>{{ entry.title }}</strong><small>{{ entry.note }}</small></span><b>›</b></RouterLink></section>
    <section class="setting-group panel"><h2>消息与提醒</h2><div v-for="item in settingItems" :key="item.key" class="setting-row"><div><strong>{{ item.title }}</strong><small>{{ item.description }}</small></div><button class="switch" :class="{ on: valueFor(item.key).value }" :disabled="isSaving === item.key" :aria-label="`${item.title}${valueFor(item.key).value ? '已开启' : '已关闭'}`" @click="toggle(item.key)"><i /></button></div></section>
    <section class="setting-group panel"><h2>显示</h2><div class="setting-row"><div><strong>主题模式</strong><small>当前使用浅色行情主题</small></div><span class="setting-value">浅色</span></div><div class="setting-row"><div><strong>行情刷新</strong><small>行情数据实时更新</small></div><span class="setting-value active">实时</span></div></section>
    <section class="about-card"><span>◇</span><div><strong>关于 Zedarc</strong><p>资讯、行情与研报一站式浏览<br />专业伴你成长，投资请理性决策</p></div></section>
    <Transition name="toast"><div v-if="toast" class="toast" role="status">{{ toast }}</div></Transition>
  </section>
  <component v-else :is="{ profile: ProfilePage, security: SecurityPage, devices: DevicesPage, feedback: FeedbackPage }[section] ?? ProfilePage" />
</template>

<style scoped>
.settings-page{min-height:calc(100vh - 120px);padding:12px 0 28px}.page-header{padding:0 4px 16px}.page-header h1{margin-top:4px;font-size:22px}.setting-group{margin-bottom:14px;padding:0 15px}.setting-group h2{padding:15px 0 8px;color:var(--muted);font-size:10px;font-weight:500;letter-spacing:.04em}.account-entry{display:flex;align-items:center;gap:11px;min-height:58px;border-top:1px solid var(--border)}.account-entry-icon{display:grid;place-items:center;width:28px;height:28px;border-radius:7px;background:#edf4ff;color:var(--primary);font-size:16px}.account-entry span:nth-child(2){display:flex;flex-direction:column;gap:4px}.account-entry strong{font-size:12px;font-weight:500}.account-entry small{color:var(--muted);font-size:10px}.account-entry b{margin-left:auto;color:#aab4c2;font-size:20px;font-weight:300}.setting-row{display:flex;align-items:center;justify-content:space-between;min-height:65px;border-top:1px solid var(--border)}.setting-row strong,.setting-row small{display:block}.setting-row strong{font-size:12px;font-weight:500}.setting-row small{margin-top:5px;color:var(--muted);font-size:10px}.switch{position:relative;width:38px;height:22px;border:0;border-radius:12px;background:#d9dee7;transition:background .15s}.switch i{position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 3px #58697c30;transition:transform .15s}.switch.on{background:var(--primary)}.switch.on i{transform:translateX(16px)}.switch:disabled{opacity:.65}.setting-value{color:var(--muted);font-size:11px}.setting-value.active{color:#5ca77f}.about-card{display:flex;align-items:center;gap:11px;margin:22px 3px;padding:14px;background:#f8fafc;color:#7c8797}.about-card>span{color:#8eb6e8;font-size:22px}.about-card strong{font-size:11px;font-weight:500}.about-card p{margin-top:5px;font-size:10px;line-height:1.7}.toast{position:fixed;z-index:30;left:50%;bottom:90px;transform:translateX(-50%);padding:10px 16px;border-radius:5px;background:#263449e8;color:#fff;font-size:11px}.toast-enter-active,.toast-leave-active{transition:opacity .15s,transform .15s}.toast-enter-from,.toast-leave-to{opacity:0;transform:translate(-50%,8px)}
</style>
