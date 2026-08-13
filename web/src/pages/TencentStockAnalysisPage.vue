<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref('overview')
const sections = [
  { id: 'overview', label: '结论总览' },
  { id: 'product', label: '功能与页面' },
  { id: 'architecture', label: '技术架构' },
  { id: 'data', label: '数据与接口' },
  { id: 'engineering', label: '工程判断' },
]

function scrollToSection(id: string) {
  activeSection.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="analysis-page">
    <header class="analysis-hero">
      <div class="hero-kicker">REVERSE ENGINEERING / PRODUCT ARCHITECTURE</div>
      <h1>腾讯自选股小程序<br /><em>功能 · 页面 · 技术架构</em></h1>
      <p>基于当前工作区中的微信小程序解包产物 <code>__APP__</code> 进行静态逆向梳理，覆盖路由、页面职责、组件边界、数据通道、工程化与风险判断。</p>
      <div class="hero-meta"><span>研究对象：wx4ffb369b6881ee5e</span><span>产物时间：2026-08-10</span><span>证据等级：源码/编译产物交叉验证</span></div>
    </header>

    <nav class="section-nav" aria-label="分析目录">
      <button v-for="section in sections" :key="section.id" :class="{ active: activeSection === section.id }" @click="scrollToSection(section.id)">{{ section.label }}</button>
    </nav>

    <section id="overview" class="analysis-section overview-section">
      <div class="section-heading"><span>01 / EXECUTIVE SUMMARY</span><h2>它不是单一行情页，而是一套交易型金融小程序壳。</h2></div>
      <div class="summary-grid">
        <article><strong>五大入口</strong><b>新闻 · 自选 · 行情 · 交易 · 我的</b><p>运行时 TabBar 在 <code>app-config.json</code> 中配置，首页、行情、交易、账户分别由独立页面承载。</p></article>
        <article><strong>三条核心链路</strong><b>行情 → 详情 → 交易</b><p>行情通过 HQBridge 与行情数据包连接，详情承载 K 线/盘口/基本面，交易再进入券商插件或模拟交易壳。</p></article>
        <article><strong>分包优先</strong><b>按业务域拆包</b><p><code>pages/quote</code>、<code>pages/detailSbg</code>、<code>pages/market</code>、<code>pages/trade</code> 等按需加载，配合 preloadRule 控制首屏包体。</p></article>
        <article><strong>双层状态</strong><b>本地缓存 + 服务端同步</b><p>自选股通过 <code>zxgApi</code> 批量读写，登录态携带 qluin/qlskey；行情则由快照、实时流和桥接层共同驱动。</p></article>
      </div>
      <div class="callout"><span>核心判断</span><p>该产物采用“微信运行时 + Uni/跨端编译页面 + 业务域分包 + Tencent 组件包 + 券商插件适配”的组合架构。它的复杂度主要来自渠道、券商、隐私协议和实时行情的多维条件分支，而不是单纯的页面数量。</p></div>
    </section>

    <section id="product" class="analysis-section">
      <div class="section-heading"><span>02 / PRODUCT MAP</span><h2>功能与页面地图</h2><p>以下按用户主路径归纳页面，不把每一个活动页或券商差异页重复计数。</p></div>
      <div class="flow"><div class="flow-node primary"><small>入口</small><strong>新闻</strong><span>信息流 / 资讯详情 / 搜索 AI</span></div><i>→</i><div class="flow-node primary"><small>入口</small><strong>自选</strong><span>组合、分组、排序、同步</span></div><i>→</i><div class="flow-node primary"><small>入口</small><strong>行情</strong><span>市场、板块、ETF、排行</span></div><i>→</i><div class="flow-node primary"><small>入口</small><strong>交易</strong><span>资产、下单、订单、条件单</span></div><i>→</i><div class="flow-node primary"><small>入口</small><strong>我的</strong><span>账户、设置、消息、设备</span></div></div>
      <div class="table-wrap"><table><thead><tr><th>业务域</th><th>主要页面/能力</th><th>关键交互</th><th>源码证据</th></tr></thead><tbody>
        <tr><td>自选组合</td><td>默认自选、分组、最近浏览、股票篮子</td><td>添加/删除、拖拽排序、批量移动、同步冲突</td><td><code>pages/index/index</code>、<code>api/zxgApi.js</code></td></tr>
        <tr><td>行情中心</td><td>市场首页、板块、ETF、排行、全球/科创/债券</td><td>Tab 切换、筛选排序、下拉刷新、实时订阅</td><td><code>pages/index/market</code>、<code>router/modules/market.js</code>（分包）</td></tr>
        <tr><td>股票详情</td><td>分时/K 线、盘口、资金流向、基本面、研报</td><td>周期/指标/复权、横屏、分享、提醒、买卖</td><td><code>pages/quote</code>、<code>pages/detailSbg</code></td></tr>
        <tr><td>交易</td><td>资产、持仓、下单、委托、成交、条件单、债券</td><td>券商插件路由、权限校验、交易确认、撤单</td><td><code>router/modules/trade.js</code>、<code>pages/trade</code></td></tr>
        <tr><td>投研与分析</td><td>研报、财报、AI 财务、盈亏分析、投资画像、周报</td><td>报告查看、收益拆解、周报历史、资金轨迹</td><td><code>router/modules/analysis.js</code>、<code>pages/report</code></td></tr>
        <tr><td>账户与系统</td><td>账户信息、消息、设置、隐私、协议、券商绑定</td><td>登录绑定、交易设置、设备/银行卡、隐私授权</td><td><code>pages/index/account</code>、<code>router/modules/account.js</code></td></tr>
      </tbody></table></div>
      <div class="note-grid"><div><strong>首屏自选</strong><p>页面由 <code>portfolio</code> 组件承载，外层只负责协议状态、顶部栏、广告/任务、同步弹窗和生命周期。</p></div><div><strong>行情首屏</strong><p><code>pages/index/market</code> 只做页面容器，真正的行情 UI 延迟加载 <code>market/components/hqPage</code>。</p></div><div><strong>账户首屏</strong><p>账户页通过 <code>accountCom</code> 统一渲染用户中心，并支持下拉刷新与券商能力注入。</p></div></div>
    </section>

    <section id="architecture" class="analysis-section dark-section">
      <div class="section-heading"><span>03 / RUNTIME ARCHITECTURE</span><h2>技术架构分层</h2><p>从静态产物可以明确看到以下边界；具体后端服务实现不在本次解包范围内，因此以下对后端仅做接口契约层判断。</p></div>
      <div class="architecture-map">
        <div class="arch-layer"><label>微信宿主层</label><div><b>Page / Component / TabBar</b><span>小程序生命周期、storage、request、WebSocket、分享、隐私 API</span></div></div>
        <div class="arch-arrow">↓</div>
        <div class="arch-layer"><label>跨端运行时</label><div><b>Uni/编译运行时 + vendor.js</b><span>响应式状态、组件解析、异步分包、render 函数与 WXML/WXSS 产物</span></div></div>
        <div class="arch-arrow">↓</div>
        <div class="arch-layer"><label>业务组件层</label><div><b>Portfolio / Market / Quote / Account / Asset</b><span>@tencent 组件包、券商 broker 适配、隐私/协议/活动投放组件</span></div></div>
        <div class="arch-arrow">↓</div>
        <div class="arch-layer"><label>领域服务层</label><div><b>HQBridge · StockBridge · sdkBridge · zxgApi</b><span>行情桥接、自选同步、交易能力、报告/搜索/账户接口与埋点</span></div></div>
        <div class="arch-arrow">↓</div>
        <div class="arch-layer"><label>外部基础设施</label><div><b>行情源 · 自选 CGI · 券商插件 · 活动配置</b><span>HTTP 快照、实时行情流、交易柜台/券商 SDK、Wuji 配置和消息订阅</span></div></div>
      </div>
      <div class="architecture-columns"><article><h3>模块化方式</h3><ul><li><code>pages.js</code> 聚合 <code>router/modules/*.js</code>，按业务生成 pages/subPackages。</li><li>功能页通过懒加载组件和异步模块降低主包压力。</li><li><code>busis</code>、<code>buildPlugin</code>、<code>meta.signature</code> 参与渠道/插件裁剪。</li></ul></article><article><h3>生命周期方式</h3><ul><li>页面负责 onLoad/onShow/onHide/onUnload 与订阅释放。</li><li>页面容器向子组件 provide HQBridge、StockBridge、交易函数。</li><li>协议未同意时，Portfolio/行情区域被替换为隐私浏览态。</li></ul></article></div>
    </section>

    <section id="data" class="analysis-section">
      <div class="section-heading"><span>04 / DATA & SECURITY</span><h2>数据通道、状态和权限</h2></div>
      <div class="data-grid"><article><span class="data-icon">01</span><h3>行情</h3><p>页面创建 <code>HQBridge</code>，通过 <code>StockBridge</code>、行情核心包和 WebSocket 辅助模块获取快照/增量数据；页面只关心订阅、刷新、排序和视图状态。</p><small>可观测证据：<code>pages/index/market.js</code>、<code>stock-hq-data</code>、<code>hqWSHelper</code></small></article><article><span class="data-icon">02</span><h3>自选</h3><p><code>zxgApi</code> 提供 <code>groupInfos</code>、<code>getSyncStatus</code>、<code>setSyncStatus</code>、<code>usersettings/batchget</code> 与批量写入能力；无登录信息时回退到本地/不可同步状态。</p><small>请求参数包含 app、appid、openid、fskey 和 check。</small></article><article><span class="data-icon">03</span><h3>交易</h3><p>交易页并不直接绑定单一券商实现，而是通过 broker 信息、插件路由和 <code>sdkBridge</code> 注入能力。绑定、资产、下单、撤单、条件单均可按券商开关裁剪。</p><small>路由标注 <code>busis: ['trade']</code>，部分页面带 <code>buildPlugin</code>。</small></article><article><span class="data-icon">04</span><h3>隐私与登录</h3><p>多处页面挂载 mp-privacy-dialog、stock-privacy-dialog 和协议组件；登录态使用微信侧 qluin/qlskey，并在请求层拼接业务身份参数。</p><small>重要风险：解包产物中的客户端逻辑不能视为安全边界。</small></article></div>
      <div class="endpoint-panel"><h3>可观测接口契约（非完整后端清单）</h3><div class="endpoint-row"><code>GET</code><span>自选分组</span><b>…/groupInfos</b></div><div class="endpoint-row"><code>GET</code><span>同步状态</span><b>…/getSyncStatus</b></div><div class="endpoint-row"><code>POST</code><span>同步状态</span><b>…/setSyncStatus</b></div><div class="endpoint-row"><code>GET/POST</code><span>用户配置</span><b>…/zxgapi/usersettings/batchget|batchset</b></div></div>
    </section>

    <section id="engineering" class="analysis-section">
      <div class="section-heading"><span>05 / ENGINEERING ASSESSMENT</span><h2>对当前 Web 项目的落地启示</h2></div>
      <div class="assessment-grid"><article class="positive"><h3>可以借鉴</h3><ul><li>使用业务域路由和按需加载，避免把详情/交易/研报全部打入首屏。</li><li>将行情桥接、自选同步、交易能力抽成服务接口，页面只消费稳定模型。</li><li>统一处理隐私状态、登录态、同步冲突和实时连接状态。</li><li>用页面容器 + 领域组件的方式组织复杂页面，而不是让单个页面承担全部请求。</li></ul></article><article class="warning"><h3>需要警惕</h3><ul><li>编译后的 WXML/JS 可读性低，缺少源映射时不适合直接维护。</li><li>券商条件分支和活动投放会使路由/包体矩阵快速膨胀。</li><li>行情与交易属于不同一致性等级，不能共用同一套乐观更新策略。</li><li>客户端暴露的 CGI、参数和模块名只能用于兼容，不能代替服务端鉴权。</li></ul></article></div>
      <div class="recommendation"><strong>本次调研的实施建议</strong><p>当前 ZEDARC Web 已具备行情、自选、股票详情、交易和研报基础能力。后续若要继续靠近腾讯自选股，应优先补齐“领域服务契约 + 实时连接状态 + 自选分组/冲突模型 + 详情指标插件化”，而不是继续堆叠页面视觉。</p></div>
      <footer class="source-footer"><b>调研依据</b><span><code>__APP__/pages/index/*</code></span><span><code>__APP__/router/modules/*</code></span><span><code>__APP__/api/zxgApi.js</code></span><span><code>__APP__/app-config.json</code>（由产物摘要列出）</span><span>静态分析，不代表腾讯官方内部架构全貌</span></footer>
    </section>
  </main>
</template>

<style scoped>
.analysis-page{min-height:100vh;padding:0 0 60px;background:#f5f7fb;color:#263449}.analysis-hero{padding:42px clamp(20px,6vw,76px) 34px;background:linear-gradient(135deg,#17243c,#1e4774 58%,#2877a2);color:#fff}.hero-kicker,.section-heading>span{font:600 10px 'JetBrains Mono',monospace;letter-spacing:.14em;color:#73d6e6}.analysis-hero h1{max-width:760px;margin:16px 0;font-size:clamp(30px,5vw,56px);line-height:1.1;letter-spacing:-.045em}.analysis-hero h1 em{color:#8fe3ed;font-style:normal}.analysis-hero>p{max-width:740px;color:#cad9e7;font-size:14px;line-height:1.8}.analysis-page code{padding:2px 5px;border-radius:3px;background:#eaf1f8;color:#285f8e;font:11px 'JetBrains Mono',monospace}.analysis-hero code{background:#ffffff20;color:#dffcff}.hero-meta{display:flex;flex-wrap:wrap;gap:8px 24px;margin-top:24px;color:#a9bfd2;font:10px 'JetBrains Mono',monospace}.section-nav{position:sticky;top:0;z-index:5;display:flex;gap:6px;overflow:auto;padding:10px clamp(14px,5vw,64px);background:#fff;border-bottom:1px solid #e5eaf1;box-shadow:0 2px 12px #1e35520b}.section-nav button{flex:none;padding:8px 13px;border:0;border-radius:5px;background:transparent;color:#77859a;font-size:12px}.section-nav button.active{background:#eaf3ff;color:#2876df;font-weight:600}.analysis-section{max-width:1180px;margin:0 auto;padding:68px clamp(18px,4vw,54px) 0;scroll-margin-top:55px}.section-heading{margin-bottom:26px}.section-heading h2{margin-top:9px;font-size:clamp(22px,3vw,34px);letter-spacing:-.03em}.section-heading p{margin-top:8px;color:#7e8b9d;font-size:13px}.summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.summary-grid article,.note-grid div,.data-grid article,.assessment-grid article{padding:20px;background:#fff;border:1px solid #e5eaf1;border-radius:8px;box-shadow:0 5px 18px #253d5a08}.summary-grid strong{display:block;color:#2876df;font:10px 'JetBrains Mono',monospace}.summary-grid b{display:block;margin-top:10px;font-size:17px}.summary-grid p{margin-top:10px;color:#7e8b9d;font-size:11px;line-height:1.7}.callout,.recommendation{margin-top:14px;padding:18px 20px;border-left:3px solid #2c85df;background:#eaf4ff}.callout span,.recommendation strong{color:#1f70cf;font-size:12px;font-weight:600}.callout p,.recommendation p{margin-top:7px;color:#52667e;font-size:12px;line-height:1.8}.flow{display:flex;align-items:center;justify-content:center;gap:10px;margin:30px 0}.flow>i{color:#9caabd;font-size:22px}.flow-node{min-width:130px;padding:15px 12px;border:1px solid #dce5ef;border-radius:7px;background:#fff}.flow-node small{color:#8795a7;font:9px 'JetBrains Mono',monospace}.flow-node strong{display:block;margin:7px 0 4px;font-size:15px}.flow-node span{color:#7e8b9d;font-size:10px}.flow-node.primary{border-top:3px solid #3181df}.table-wrap{overflow:auto;background:#fff;border:1px solid #e3e9f1;border-radius:8px}.table-wrap table{width:100%;min-width:760px;border-collapse:collapse}.table-wrap th,.table-wrap td{padding:13px 15px;border-bottom:1px solid #edf0f5;text-align:left;font-size:11px;vertical-align:top}.table-wrap th{color:#75849a;background:#f8fafc;font-weight:500}.table-wrap td:first-child{color:#2674d0;font-weight:600;white-space:nowrap}.table-wrap td:nth-child(2){font-weight:500}.table-wrap td:nth-child(3),.table-wrap td:nth-child(4){color:#7c899a}.note-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}.note-grid strong{font-size:13px}.note-grid p{margin-top:8px;color:#7c899a;font-size:11px;line-height:1.7}.dark-section{max-width:none;padding-right:clamp(18px,7vw,110px);padding-left:clamp(18px,7vw,110px);background:#17243a;color:#e8f0f8}.dark-section .section-heading p{color:#9aadc1}.dark-section :deep(code),.dark-section code{background:#ffffff16;color:#8ee4ed}.architecture-map{max-width:900px;margin:30px auto}.arch-layer{display:grid;grid-template-columns:130px 1fr;gap:18px;align-items:center}.arch-layer label{color:#77d8e3;font:10px 'JetBrains Mono',monospace;text-align:right}.arch-layer>div{padding:17px 20px;border:1px solid #38516e;border-radius:7px;background:#203650}.arch-layer b{display:block;color:#fff;font-size:14px}.arch-layer span{display:block;margin-top:7px;color:#a6bbce;font-size:11px;line-height:1.6}.arch-arrow{margin:5px 0 5px 138px;color:#6c91ae;font-size:20px}.architecture-columns{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:900px;margin:30px auto 0}.architecture-columns article{padding:20px;border:1px solid #38516e;border-radius:7px;background:#1d314a}.architecture-columns h3{color:#8ee4ed;font-size:14px}.architecture-columns ul{margin:12px 0 0;padding-left:18px;color:#a7bbcd;font-size:11px;line-height:2}.data-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.data-icon{display:grid;place-items:center;width:28px;height:28px;border-radius:5px;background:#eaf3ff;color:#2676df;font:10px 'JetBrains Mono',monospace}.data-grid h3{margin-top:12px;font-size:15px}.data-grid p{margin-top:9px;color:#738399;font-size:11px;line-height:1.8}.data-grid small{display:block;margin-top:14px;color:#9aa7b7;font-size:9px;line-height:1.6}.endpoint-panel{margin-top:14px;padding:20px;background:#fff;border:1px solid #e3e9f1;border-radius:8px}.endpoint-panel h3{font-size:14px}.endpoint-row{display:grid;grid-template-columns:75px 110px 1fr;gap:12px;padding:11px 0;border-bottom:1px solid #edf0f5;font-size:11px}.endpoint-row code{color:#2876df}.endpoint-row b{font:11px 'JetBrains Mono',monospace}.assessment-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.assessment-grid h3{font-size:15px}.assessment-grid ul{margin:13px 0;padding-left:18px;font-size:12px;line-height:2;color:#69798d}.assessment-grid .positive{border-top:3px solid #31a36d}.assessment-grid .warning{border-top:3px solid #e19a39}.recommendation{margin-top:14px}.source-footer{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:28px;padding-top:18px;border-top:1px solid #e4e9f0;color:#8a97a8;font-size:10px}.source-footer b{color:#52667e}.source-footer code{background:transparent;padding:0;color:#3674aa}@media(max-width:760px){.summary-grid,.data-grid{grid-template-columns:repeat(2,1fr)}.flow{justify-content:flex-start;overflow:auto;padding-bottom:5px}.flow>i{font-size:17px}.flow-node{min-width:108px}.flow-node span{font-size:9px}.architecture-columns,.assessment-grid{grid-template-columns:1fr}.arch-layer{grid-template-columns:88px 1fr;gap:10px}.arch-layer label{text-align:right;font-size:9px}.arch-arrow{margin-left:95px}.analysis-section{padding-top:45px}.hero-meta{line-height:1.8}}@media(max-width:460px){.summary-grid,.data-grid{grid-template-columns:1fr}.analysis-hero{padding-top:28px}.analysis-hero h1{font-size:32px}.section-nav button{font-size:11px;padding:7px 10px}.arch-layer{grid-template-columns:1fr}.arch-layer label{text-align:left}.arch-arrow{margin-left:8px}.endpoint-row{grid-template-columns:62px 85px 1fr;gap:7px;font-size:10px}.endpoint-row b{font-size:9px}.analysis-page .table-wrap code{font-size:9px}}
</style>
