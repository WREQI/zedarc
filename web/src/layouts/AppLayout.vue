<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
function onGlobalShortcut(event: KeyboardEvent) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    router.push('/search')
  }
}
onMounted(() => window.addEventListener('keydown', onGlobalShortcut))
onUnmounted(() => window.removeEventListener('keydown', onGlobalShortcut))

function isSectionActive(section: string) {
  const path = route.path
  if (section === 'news') return path.startsWith('/news')
  if (section === 'watchlist') return path === '/watchlist'
  if (section === 'market') return path.startsWith('/market') || path.startsWith('/stock')
  if (section === 'trade') return path.startsWith('/trade')
  if (section === 'account') return path.startsWith('/account')
  return false
}
</script>

<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand-mark"><span class="brand-dot" /> ZEDARC <small>MARKET DESK</small></div>
      <nav class="top-nav" aria-label="全局导航">
        <RouterLink to="/">工作台</RouterLink>
        <RouterLink :class="{ 'nav-section-active': isSectionActive('market') }" to="/market">行情</RouterLink>
        <RouterLink :class="{ 'nav-section-active': isSectionActive('watchlist') }" to="/watchlist">自选</RouterLink>
        <RouterLink :class="{ 'nav-section-active': isSectionActive('news') }" to="/news">资讯</RouterLink>
                <RouterLink :class="{ 'nav-section-active': route.path.startsWith('/reports') }" to="/reports">研报</RouterLink>
      </nav>
      <RouterLink class="global-search" to="/search"><span>⌕</span><span>搜索股票、资讯或代码</span><kbd>⌘K</kbd></RouterLink>
      <div class="top-actions"><span class="market-status"><i /> 交易中</span><RouterLink class="icon-button" to="/search" aria-label="搜索">⌕</RouterLink><button class="avatar">研</button></div>
    </header>
    <div class="workspace">
      <aside class="sidebar">
        <div class="side-label">MARKET</div>
        <RouterLink class="side-link" :class="{ 'section-active': isSectionActive('news') }" to="/news"><span class="nav-icon"><img class="nav-icon-active" src="/nav/info.png" alt="" /><img class="nav-icon-inactive" src="/nav/info1.png" alt="" /></span> 新闻</RouterLink>
        <RouterLink class="side-link" :class="{ 'section-active': isSectionActive('watchlist') }" to="/watchlist"><span class="nav-icon"><img class="nav-icon-active" src="/nav/zx.png" alt="" /><img class="nav-icon-inactive" src="/nav/zx1.png" alt="" /></span> 自选</RouterLink>
        <RouterLink class="side-link" :class="{ 'section-active': isSectionActive('market') }" to="/market"><span class="nav-icon"><img class="nav-icon-active" src="/nav/hq.png" alt="" /><img class="nav-icon-inactive" src="/nav/hq1.png" alt="" /></span> 行情</RouterLink>
        <RouterLink class="side-link" :class="{ 'section-active': isSectionActive('trade') }" to="/trade"><span class="nav-icon"><img class="nav-icon-active" src="/nav/kh.png" alt="" /><img class="nav-icon-inactive" src="/nav/kh1.png" alt="" /></span> 交易</RouterLink>
        <RouterLink class="side-link" :class="{ 'section-active': isSectionActive('account') }" to="/account"><span class="nav-icon"><img class="nav-icon-active" src="/nav/me.png" alt="" /><img class="nav-icon-inactive" src="/nav/me1.png" alt="" /></span> 我的</RouterLink>
        <div class="sidebar-footer"><span class="connection-dot" /> 数据连接正常<br /><small>MOCK DATA · v0.1</small></div>
      </aside>
      <main class="main-content"><RouterView /></main>
    </div>
  </div>
</template>
