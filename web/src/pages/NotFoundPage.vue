<template>
  <section class="not-found-page panel">
    <span class="not-found-code">404</span>
    <h1>页面暂时不存在</h1>
    <p>这个页面可能正在迁移，或者地址已经发生变化。</p>
    <div class="not-found-actions"><RouterLink class="primary-button" to="/">返回首页</RouterLink><RouterLink class="secondary-button" to="/market">查看行情</RouterLink></div>
  </section>
</template>

<style scoped>
.not-found-page { max-width: 620px; min-height: 390px; margin: 70px auto 0; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; padding: 30px; }.not-found-code { color: var(--primary); font: 600 58px 'JetBrains Mono', monospace; letter-spacing: -.08em; }.not-found-page h1 { font-size: 18px; margin-top: 14px; }.not-found-page p { color: var(--muted); font-size: 11px; margin-top: 9px; }.not-found-actions { display: flex; gap: 10px; margin-top: 24px; }.not-found-actions a { display: inline-block; }@media (max-width: 640px) { .not-found-page { min-height: 320px; margin-top: 25px; } }
</style>
