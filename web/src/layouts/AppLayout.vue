<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiFetch } from '@/services/api-client'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const providerLabel = ref('连接检查中')
const providerTone = ref('pending')

const pageTitle = computed(() => {
  const path = route.path
  if (path === '/') return '自选'
  if (path.startsWith('/market') || path.startsWith('/stock') || path.startsWith('/sector') || path.startsWith('/etf') || path.startsWith('/bond') || path.startsWith('/star-market')) return '行情'
  if (path === '/market/calendar') return '行情'
  if (path.startsWith('/watchlist')) return '自选'
  if (path.startsWith('/news') || path === '/flash') return '资讯'
  if (path.startsWith('/trade')) return '交易'
  if (path.startsWith('/account') || path === '/notifications' || path === '/settings' || path === '/history' || path === '/profile' || path === '/security' || path === '/devices' || path === '/feedback') return '我的'
  if (path.startsWith('/reports')) return '研报'
  if (path.startsWith('/search')) return '搜索'
  return 'ZEDARC'
})

const tabs = [
  { label: '资讯', to: '/news', icon: '/nav/info.png', inactiveIcon: '/nav/info1.png', key: 'news' },
  { label: '自选', to: '/watchlist', icon: '/nav/zx.png', inactiveIcon: '/nav/zx1.png', key: 'watchlist' },
  { label: '行情', to: '/market', icon: '/nav/hq.png', inactiveIcon: '/nav/hq1.png', key: 'market' },
  { label: '交易', to: '/trade', icon: '/nav/kh.png', inactiveIcon: '/nav/kh1.png', key: 'trade' },
  { label: '我的', to: '/account', icon: '/nav/me.png', inactiveIcon: '/nav/me1.png', key: 'account' },
]

function isSectionActive(section: string) {
  const path = route.path
  if (section === 'news') return path.startsWith('/news') || path === '/flash'
  if (section === 'watchlist') return path === '/' || path.startsWith('/watchlist')
  if (section === 'market') return path.startsWith('/market') || path.startsWith('/stock') || path.startsWith('/sector') || path.startsWith('/etf') || path.startsWith('/bond') || path.startsWith('/star-market')
  if (section === 'trade') return path.startsWith('/trade')
  if (section === 'account') return path.startsWith('/account') || path === '/notifications' || path === '/settings' || path === '/history' || path === '/profile' || path === '/security' || path === '/devices' || path === '/feedback'
  return false
}

async function loadProviderStatus() {
  try {
    const status = await apiFetch<{ provider: string; providerOk: boolean; redis: boolean }>('/api/market/status')
    providerLabel.value = status.providerOk ? status.provider.toUpperCase() : status.redis ? 'CACHE' : 'MOCK'
    providerTone.value = status.providerOk ? 'live' : status.redis ? 'cache' : 'mock'
  } catch { providerLabel.value = 'MOCK'; providerTone.value = 'mock' }
}

function onGlobalShortcut(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    void router.push('/search')
  }
}

onMounted(() => { window.addEventListener('keydown', onGlobalShortcut); void loadProviderStatus() })
onUnmounted(() => window.removeEventListener('keydown', onGlobalShortcut))
</script>

<template>
  <div class="app-stage">
    <div class="app-shell">
      <header class="topbar">
        <button v-if="route.path !== '/'" class="back-button" type="button" aria-label="返回" @click="router.back()">‹</button>
        <div class="brand-mark"><span class="brand-dot" /> <strong>{{ pageTitle }}</strong><small>ZEDARC</small></div>
        <nav class="top-nav" aria-label="快捷导航">
          <RouterLink to="/">自选</RouterLink>
          <RouterLink to="/reports">研报</RouterLink>
        </nav>
        <RouterLink class="global-search" to="/search" aria-label="搜索"><span>⌕</span><span>搜索股票、资讯或代码</span><kbd>⌘K</kbd></RouterLink>
        <div class="top-actions">
          <span class="market-status" :class="`status-${providerTone}`" aria-live="polite"><i />{{ providerLabel }}</span>
          <RouterLink class="icon-button" to="/search" aria-label="搜索">⌕</RouterLink>
          <button class="avatar" aria-label="打开账户" @click="router.push('/account')">{{ auth.user.value?.name?.slice(0, 1) ?? '登' }}</button>
        </div>
      </header>

      <div class="workspace">
        <aside class="sidebar" aria-label="主导航">
          <div class="side-label">MARKET</div>
          <RouterLink v-for="tab in tabs" :key="tab.key" class="side-link" :class="{ 'section-active': isSectionActive(tab.key) }" :to="tab.to">
            <span class="nav-icon"><img class="nav-icon-active" :src="tab.icon" alt="" /><img class="nav-icon-inactive" :src="tab.inactiveIcon" alt="" /></span>{{ tab.label }}
          </RouterLink>
          <div class="sidebar-footer"><span class="connection-dot" :class="providerTone" /> {{ providerTone === 'live' ? '实时数据' : providerTone === 'cache' ? '缓存数据' : '演示数据' }}</div>
        </aside>
        <main class="main-content"><RouterView /></main>
      </div>

      <nav class="tabbar" aria-label="底部导航">
        <RouterLink v-for="tab in tabs" :key="tab.key" class="tabbar-item" :class="{ active: isSectionActive(tab.key) }" :to="tab.to">
          <span class="tabbar-icon"><img :src="isSectionActive(tab.key) ? tab.icon : tab.inactiveIcon" alt="" /></span><span>{{ tab.label }}</span>
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
