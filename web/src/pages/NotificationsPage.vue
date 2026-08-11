<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getNotifications, markNotificationsRead, type NotificationItem } from '@/services/notifications'
import DataState from '@/components/DataState.vue'
import EmptyState from '@/components/EmptyState.vue'

const messages = ref<NotificationItem[]>([])
const isLoading = ref(true)
const loadError = ref('')
const toast = ref('')
let toastTimer: number | undefined

const unreadCount = () => messages.value.filter((message) => !message.readAt).length
const status = computed<'loading' | 'error' | 'ready'>(() => isLoading.value ? 'loading' : loadError.value ? 'error' : 'ready')

async function loadMessages() {
  isLoading.value = true
  loadError.value = ''
  try {
    messages.value = await getNotifications()
  } catch {
    loadError.value = '消息暂时无法加载，请登录后重试。'
  } finally {
    isLoading.value = false
  }
}

function showToast(message: string) {
  toast.value = message
  window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => { toast.value = '' }, 1800)
}

async function markAllRead() {
  if (!unreadCount()) return
  try {
    await markNotificationsRead()
    messages.value.forEach((message) => { message.readAt = new Date().toISOString() })
    showToast('已全部标记为已读')
  } catch {
    showToast('操作失败，请稍后重试')
  }
}
</script>

<template>
  <section class="notifications-page">
    <header class="page-header">
      <div><p class="eyebrow">ACCOUNT / INBOX</p><h1>消息中心</h1></div>
      <button class="refresh-button" aria-label="刷新消息" @click="loadMessages">↻</button>
    </header>

    <section class="summary panel">
      <div class="summary-icon">▣</div>
      <div><strong>{{ unreadCount() ? `${unreadCount()} 条未读消息` : '消息已读完' }}</strong><p>系统通知和互动消息会在这里集中展示</p></div>
      <button v-if="unreadCount()" class="text-button" @click="markAllRead">全部已读</button>
    </section>

    <DataState :status="status" loading-label="正在加载消息" error-title="消息加载失败" :message="loadError" :retry="loadMessages">
    <section v-if="messages.length" class="message-list panel" aria-label="消息列表">
      <article v-for="message in messages" :key="message.id" class="message-item" :class="{ unread: !message.readAt }">
        <i class="message-dot" />
        <div class="message-content"><div class="message-title"><strong>{{ message.title }}</strong><span v-if="!message.readAt">未读</span></div><p>{{ message.content }}</p><time>{{ new Date(message.createdAt).toLocaleString('zh-CN') }}</time></div>
      </article>
    </section>
    <EmptyState v-else title="暂无消息" message="新的通知和市场动态会显示在这里。" />
    </DataState>
    <Transition name="toast"><div v-if="toast" class="toast" role="status">{{ toast }}</div></Transition>
  </section>
</template>

<style scoped>
.notifications-page{min-height:calc(100vh - 120px);padding:12px 0 28px}.page-header{display:flex;align-items:center;justify-content:space-between;padding:0 4px 16px}.page-header h1{margin-top:4px;font-size:23px;line-height:1.15}.refresh-button{width:32px;height:32px;color:var(--primary);border:1px solid var(--border);border-radius:50%;background:var(--card);font-size:18px}.summary{display:flex;align-items:center;gap:11px;padding:14px 15px}.summary-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:#edf4ff;color:var(--primary);font-size:17px}.summary strong{font-size:12px}.summary p{margin-top:5px;color:var(--muted);font-size:10px}.text-button{margin-left:auto;color:var(--primary);border:0;background:transparent;font-size:10px;white-space:nowrap}.message-list{margin-top:14px;padding:0 15px}.message-item{display:flex;gap:11px;padding:16px 0;border-bottom:1px solid var(--border)}.message-item:last-child{border-bottom:0}.message-dot{width:7px;height:7px;margin-top:5px;border-radius:50%;background:#dce1e8;flex:none}.message-item.unread .message-dot{background:var(--primary);box-shadow:0 0 0 3px #edf4ff}.message-content{min-width:0;flex:1}.message-title{display:flex;align-items:center;gap:7px}.message-title strong{font-size:12px}.message-title span{padding:2px 5px;border-radius:3px;background:#edf4ff;color:var(--primary);font-size:9px}.message-content p{margin-top:6px;color:var(--muted);font-size:11px;line-height:1.7}.message-content time{display:block;margin-top:7px;color:#aab1bd;font:9px 'JetBrains Mono',monospace}.empty-state{display:flex;min-height:260px;flex-direction:column;align-items:center;justify-content:center;margin-top:14px;text-align:center}.empty-state>span{color:#9abce8;font-size:29px}.empty-state h2{margin-top:11px;font-size:15px}.empty-state p{margin-top:7px;color:var(--muted);font-size:11px}.toast{position:fixed;z-index:30;left:50%;bottom:90px;transform:translateX(-50%);padding:10px 16px;border-radius:5px;background:#263449e8;color:#fff;font-size:11px;white-space:nowrap}.toast-enter-active,.toast-leave-active{transition:opacity .15s,transform .15s}.toast-enter-from,.toast-leave-to{opacity:0;transform:translate(-50%,8px)}
</style>
