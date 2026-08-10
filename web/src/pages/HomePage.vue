<script setup lang="ts">
import { indexQuotes, marketNews, risingStocks } from '@/mock/market'
</script>

<template>
  <section class="page-heading">
    <div><p class="eyebrow">MARKET OVERVIEW / 2026.08.10</p><h1>市场总览</h1><p class="muted">捕捉盘面变化，快速定位值得关注的信号。</p></div>
    <div class="heading-actions"><button class="secondary-button">刷新数据 ↻</button><button class="primary-button">+ 添加自选</button></div>
  </section>

  <section class="index-grid">
    <article v-for="index in indexQuotes" :key="index.code" class="panel index-card">
      <div class="card-top"><span>{{ index.name }}</span><span class="code">{{ index.code }}</span></div>
      <strong>{{ index.value }}</strong>
      <div class="quote-change" :class="index.trend"><span>{{ index.change }}</span><span>{{ index.percent }}</span><span class="sparkline">⌁⌁⌁</span></div>
    </article>
  </section>

  <section class="dashboard-grid">
    <article class="panel table-panel">
      <div class="panel-heading"><div><p class="eyebrow">TOP MOVERS</p><h2>涨幅榜</h2></div><button class="text-button">查看全部 →</button></div>
      <div class="table-header"><span>股票</span><span>最新价</span><span>涨跌幅</span><span>成交额</span></div>
      <div v-for="(stock, index) in risingStocks" :key="stock.code" class="stock-row"><span class="stock-name"><b>{{ String(index + 1).padStart(2, '0') }}</b><strong>{{ stock.name }}</strong><small>{{ stock.code }}</small></span><span class="mono">{{ stock.price }}</span><span class="mono text-up">{{ stock.percent }}</span><span class="mono muted">{{ stock.volume }}</span></div>
    </article>

    <article class="panel news-panel">
      <div class="panel-heading"><div><p class="eyebrow">LIVE FEED</p><h2>盘面资讯</h2></div><button class="text-button">更多 →</button></div>
      <div v-for="news in marketNews" :key="news.time" class="news-row"><time>{{ news.time }}</time><div><span class="news-tag">{{ news.tag }}</span><p>{{ news.title }}</p></div></div>
      <div class="signal-box"><span class="signal-icon">◆</span><div><strong>市场信号</strong><p>短线情绪偏强，关注成交量变化</p></div><span class="text-up mono">+0.72</span></div>
    </article>
  </section>

  <section class="panel watch-preview"><div class="panel-heading"><div><p class="eyebrow">WATCHLIST</p><h2>自选股摘要</h2></div><RouterLink class="text-button" to="/watchlist">进入自选 →</RouterLink></div><div class="watch-empty"><span>☆</span><div><strong>建立你的观察列表</strong><p>添加股票后，在这里追踪实时变化。</p></div><button class="secondary-button">添加股票</button></div></section>
</template>
