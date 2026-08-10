<template>
  <section class="trade-page">
    <div class="trade-heading"><div><p class="eyebrow">TRADE / ACCOUNT</p><h1>交易</h1><p class="muted">连接证券账户，进行资产查看和交易操作。</p></div><span class="account-state"><i /> 未登录</span></div>

    <section class="panel account-hero">
      <div class="account-icon">◈</div>
      <div class="account-copy"><p class="eyebrow">SECURITIES ACCOUNT</p><h2>开通证券账户，开启交易</h2><p>当前未检测到已绑定的证券账户。完成开户后，可查看资产、持仓并进行交易。</p><div class="account-actions"><button class="primary-button">立即开户</button><button class="secondary-button">绑定已有账户</button></div></div>
    </section>

    <section class="trade-grid">
      <article class="panel trade-card"><span class="trade-card-icon blue">▣</span><div><h3>资产总览</h3><p>查看账户总资产、可用资金和持仓市值</p></div><span class="arrow">→</span></article>
      <article class="panel trade-card"><span class="trade-card-icon orange">↗</span><div><h3>买入 / 卖出</h3><p>登录证券账户后进行股票交易</p></div><span class="arrow">→</span></article>
      <article class="panel trade-card"><span class="trade-card-icon green">▤</span><div><h3>持仓与委托</h3><p>查看当前持仓和历史委托记录</p></div><span class="arrow">→</span></article>
    </section>

    <section class="panel trade-notice"><span>ⓘ</span><div><strong>交易能力迁移说明</strong><p>小程序中的券商插件属于微信专属能力。Web 版本第一阶段先保留交易入口和开户引导，后续将根据券商能力接入 H5 交易或跳转券商 App。</p></div></section>
  </section>
</template>

<style scoped>
.trade-page { max-width: 900px; margin: 0 auto; }.trade-heading { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 30px; }.trade-heading h1 { font-size: 28px; }.account-state { color: var(--muted); font-size: 11px; background: var(--card); border: 1px solid var(--border); padding: 7px 10px; }.account-state i { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--muted); margin-right: 6px; }.account-hero { display: flex; align-items: center; gap: 26px; padding: 36px; background: linear-gradient(105deg, #fff 0%, #f8fbff 100%); }.account-icon { width: 72px; height: 72px; display: grid; place-items: center; background: #edf4ff; color: var(--primary); border-radius: 50%; font-size: 30px; flex-shrink: 0; }.account-copy h2 { font-size: 20px; color: var(--text); }.account-copy > p:not(.eyebrow) { color: var(--muted); font-size: 12px; line-height: 1.8; margin-top: 10px; }.account-actions { display: flex; gap: 10px; margin-top: 22px; }.trade-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0; }.trade-card { display: flex; align-items: center; gap: 12px; padding: 18px 15px; min-height: 104px; }.trade-card h3 { font-size: 13px; }.trade-card p { color: var(--muted); font-size: 10px; line-height: 1.6; margin-top: 7px; }.trade-card-icon { width: 32px; height: 32px; border-radius: 6px; display: grid; place-items: center; font-size: 16px; flex-shrink: 0; }.trade-card-icon.blue { color: var(--primary); background: #edf4ff; }.trade-card-icon.orange { color: var(--gold); background: #fff4e9; }.trade-card-icon.green { color: var(--down); background: #edf8ef; }.arrow { color: var(--muted); margin-left: auto; }.trade-notice { display: flex; gap: 12px; padding: 16px 18px; background: #fffaf3; border-color: #f8e3c8; }.trade-notice > span { color: var(--gold); font-size: 16px; }.trade-notice strong { font-size: 12px; }.trade-notice p { color: var(--muted); font-size: 11px; line-height: 1.7; margin-top: 5px; }
@media (max-width: 720px) { .trade-heading { margin-bottom: 22px; }.account-hero { align-items: flex-start; flex-direction: column; padding: 24px 20px; gap: 17px; }.account-copy h2 { font-size: 18px; }.trade-grid { grid-template-columns: 1fr; }.trade-card { min-height: 80px; } }
</style>
