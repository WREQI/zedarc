<template>
  <div class="app-shell">
    <header class="topbar">
      <div class="brand-mark"><span class="brand-dot" /> ZEDARC <small>MARKET DESK</small></div>
      <nav class="top-nav" aria-label="全局导航">
        <RouterLink to="/">工作台</RouterLink>
        <RouterLink to="/market">行情</RouterLink>
        <RouterLink to="/watchlist">自选</RouterLink>
        <RouterLink to="/news">资讯</RouterLink>
      </nav>
      <div class="global-search"><span>⌕</span><span>搜索股票、资讯或代码</span></div>
      <div class="top-actions"><span class="market-status"><i /> 交易中</span><button class="icon-button" aria-label="搜索">⌕</button><button class="avatar">研</button></div>
    </header>
    <div class="workspace">
      <aside class="sidebar">
        <div class="side-label">MARKET</div>
        <RouterLink class="side-link" to="/news"><span>▤</span> 新闻</RouterLink>
        <RouterLink class="side-link" to="/watchlist"><span>☆</span> 自选</RouterLink>
        <RouterLink class="side-link" to="/market"><span>◫</span> 行情</RouterLink>
        <RouterLink class="side-link" to="/trade"><span>⇄</span> 交易</RouterLink>
        <RouterLink class="side-link" to="/account"><span>◎</span> 我的</RouterLink>
        <div class="sidebar-footer"><span class="connection-dot" /> 数据连接正常<br /><small>MOCK DATA · v0.1</small></div>
      </aside>
      <main class="main-content"><RouterView /></main>
    </div>
  </div>
</template>
