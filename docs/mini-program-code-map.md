# 小程序到 Web 代码地图

> 盘点范围：`__APP__`；页面注册以 `__APP__/app.json` 的 `pages`、`subPackages[].pages` 为准。文件统计排除了 `@babel`、`node_modules`、`miniprogram_npm`，并将根目录 `.easytool_summary.json` 视为工具摘要而非源码 JSON。本文只记录仓库内可定位的真实文件；Web 状态以 `web/src/router/index.ts` 和实际 `.vue` 文件为准。

## 1. 盘点结论

- 主包页面：6 个；分包：53 个；分包注册页面：551 个；`app.json` 注册页面合计：557 个。
- 排除依赖目录后：WXML 1,994 个、WXSS 2,048 个、JS 4,522 个、JSON 1,909 个；图片类资源 257 个。
- 小程序页面不是单一“一个目录四文件”的结构：很多页面是编译后的 WXML/JS，业务依赖分包组件、`@tencent` 包、插件页面或 WebView。
- Web 已有 Vue Router 与页面组件，但当前多数页面仍是 Web 侧重建/接口或 mock 适配，不能据此宣称完成了原页面行为迁移。

状态定义：

- **已迁移**：当前 Web 有明确对应路由和页面组件，且本次扫描未发现明显依赖小程序专属插件的必要行为。仅表示页面入口已存在，不表示视觉/业务完全等价。
- **部分迁移**：Web 有对应入口或同业务页面，但数据源、交互、登录、行情图表、交易、微信能力等仍有差异。
- **待迁移**：未在 `web/src/router/index.ts` 找到对应入口，或原页面主要依赖微信插件/小程序专属能力。

## 2. 核心页面映射

| 原始页面 | 原始来源（真实文件） | WXML 结构/公共组件线索 | 核心行为线索（JS/WXML） | Web 映射 | 状态 |
|---|---|---|---|---|---|
| 自选/组合首页 | `__APP__/pages/index/index.{wxml,wxss,js,json}` | `top-bar`、`portfolio`、`broker-asset-hold-stock`、`tab-bar-place-holder`、隐私/同步/任务/广告组件；`index.wxml` | `onLoad`、`onShow`、`onRefreshTabStatusForTrade`、`onPortfolioPackageReady`、协议/隐私、组合刷新 | `/watchlist` → `web/src/pages/WatchlistPage.vue`；全局壳 `web/src/layouts/AppLayout.vue` | 部分迁移 |
| 行情首页 | `__APP__/pages/index/market.{wxml,wxss,js,json}` | 页面级 `top-bar`、行情子包内容；全局 tabBar 来自 `app.json` | `fetchData`、`onPullDownRefresh`、`onTabItemTap`、隐私同意、横竖屏/PC 调整 | `/market` → `MarketPage.vue`；`/market/rank`、`/market/sentiment`、`/market/limit-up`、`/market/limit-down` 等 | 部分迁移 |
| 资讯首页 | `__APP__/pages/index/information/main.{wxml,wxss,js,json}` | `top-bar`、`information`、`st-status` | `onMpScroll`、`onMpPageShow/Hide`、下拉/网络状态、分享 | `/news` → `NewsPage.vue`；`/flash`、`/news/topics` | 部分迁移 |
| 交易首页 | `__APP__/pages/index/trade.{wxml,wxss,js,json}` | 交易插件/券商组件，见 `__APP__/components/brokerPlugin.*`、`brokerPassword.*` | `fetchData`、下拉刷新、触底、预加载行情、插件子包加载、路由完成/错误重试 | `/trade` → `TradePage.vue`；`/trade/positions`、`/trade/orders`、`/trade/funds` 等 | 部分迁移 |
| 账户首页 | `__APP__/pages/index/account/main.{wxml,wxss,js,json}` | 账户卡片、`top-bar`、TabBar/资产组件由页面及组件配置引用 | `refreshUserCenterData`、`onPullDownRefresh`、`onTabItemTap` | `/account` → `AccountPage.vue` | 部分迁移 |
| 股票详情/行情图 | `__APP__/pages/quote/quote.{wxml,wxss,js,json}`、`__APP__/pages/detailSbg/index.*` | `detail-kline`：`__APP__/bizs/analysis/components/detail-kline.*`；行情/交易/提醒/AI/分享组件 | `fetchData`、切换图表/市场、价格点击、提醒状态、横屏、嵌入交易、AI 波动 | `/stock/:code` → `StockDetailPage.vue` | 部分迁移 |
| 市场板块/ETF/债券 | `__APP__/pages/market/pages/index.*`、`PlateList.*`、`ETFPage.*`、`NationalDebtDetail.*` | 市场页面组件与行情图/列表组件分布在 `__APP__/pages/market`、`__APP__/bizs` | 页面 JS 为编译产物，实际交互由 tab、列表、行情数据组件共同完成 | `/sector`、`/etf`、`/bond`、`/market/global`、`/star-market` | 部分迁移 |
| 资讯详情 | `__APP__/pages/newsCon/newsDetail/main.*` | 文章内容、评论、分享、半屏编辑器、用户资料弹层等，具体组件见同目录和 `comment` 分包 | `loadData`、`loadText`、评论更新、分享、滚动、更多菜单、收藏/互动 | `/news/:id` → `NewsDetailPage.vue` | 部分迁移 |
| 研报首页/详情 | `__APP__/pages/reportSbg/index.*`、`__APP__/pages/report/morning/main.*`、`daily/main.*`、`AIFinancial/*` | `report` 分包及 `reportFinancialSbg`；列表/详情/AI 财报多个入口 | 原页面 JS/WXML 为编译产物；页面注册可追溯到 `app.json` | `/reports`、`/reports/:id` → `ReportsPage.vue`、`ReportDetailPage.vue` | 部分迁移 |
| 搜索 | `__APP__/pages/additional/search/main.*`、`stockSelect.*`、`__APP__/pages/searchAi/main.*` | 搜索结果、股票选择、热搜、AI 搜索组件；第三方组件位于 `pages/additional/@tencent` | 页面显示/隐藏、隐私、搜索/选择；AI 语音能力由 `QCloudAIVoice` 插件声明 | `/search` → `SearchPage.vue` | 部分迁移 |
| 账户设置/个人资料 | `__APP__/pages/account/setting.*`、`__APP__/pages/account/skin/main.*`、`__APP__/pages/profileCom/*` | `Tabbar`、确认弹窗、协议、表单组件；公共表单也在 `bizs/account/personal` | 设置弹窗/取消、协议状态、个人资料与历史展示 | `/settings`、`/profile`、`/history`、`/security` | 部分迁移 |
| 浏览历史 | `__APP__/pages/profileCom/history.*`、`__APP__/pages/account/@tencent/st-browsing-history/page/mp.*` | `history-tab`、股票/资讯/组合历史块；支持多个 `scroll-view` | tab 切换、下拉刷新、触底加载 | `/history` → `HistoryPage.vue` | 部分迁移 |
| 股票篮子/组合广场 | `__APP__/pages/stockBasket/square.*`、`stock-basket-list.*`、`detail.*` | 组合列表、详情、更新历史；组件来源在 `pages/stockBasket` | 显示/隐藏、分享、生命周期；具体事件由分包组件实现 | `/watchlist/groups` 仅覆盖自选分组语义 | 待迁移 |
| 登录/绑定/开户 | `__APP__/pages/account/bind.*`、`__APP__/pages/apply/*`、`__APP__/pages/broker/*` | 短信输入、密码、协议、身份证/人脸/视频、券商插件 | `bindinput`、`bindfocus`、短信按钮、协议勾选、登录、忘记密码、插件路由 | Web 只有账户入口与登录占位/鉴权守卫；无等价开户链路 | 待迁移 |

## 3. 原始来源规则与公共入口

### 页面四件套

注册页面通常可按 `__APP__/<app.json route>.wxml`、`.wxss`、`.js`、`.json` 定位。例如 `pages/index/index` 的四个文件均存在。部分插件注册页只有 JSON，WXML/JS 位于插件目录或未随源码提供，不能将其当作可直接迁移的页面源码。

### 全局来源

- `__APP__/app.json`：主包、分包、tabBar、插件、预加载规则、账户卡片注册。
- `__APP__/app.js`：小程序全局生命周期与全局数据入口。
- `__APP__/app.wxss`：全局颜色变量、亮/暗主题、通用 flex/文字等工具样式。
- `__APP__/components/topbar/index.*`：顶部栏公共组件。
- `__APP__/components/TabBar/TabBar.*`、`__APP__/components/TabBar/TabBar.json`：TabBar 公共组件；另有 `__APP__/components/custom-tabbar/*` 页面入口。
- `__APP__/components/PrivacyDialog/index.*`、`StockPrivacyDialog/index.*`、`ChoosePrivacyModal.*`、`PortfolioSyncModal.*`：隐私、股票隐私与组合同步公共流程。
- `__APP__/components/Modal/Modal.*`、`LayerModal/index.*`、`Empty/Empty.*`、`CommonResult/CommonResult.*`：弹层与空/结果状态。
- `__APP__/components/StockLogo/StockLogo.*`、`MarketLabel/MarketLabel.*`、`DetailCard/*`、`DetailHeader/*`、`DetailRow/*`：行情/详情基础展示。
- `__APP__/components/brokerPlugin.*`、`brokerPassword.*`、`brokerAssetHoldStock.*`、`webView.*`：券商插件与 WebView 桥接，不可当作普通 Vue 组件直接复用。

## 4. Web 当前覆盖与缺口

### 已有 Web 页面入口（按 Router 实际文件）

`/watchlist`、`/market`、`/market/rank`、`/market/sentiment`、`/market/limit-up`、`/market/limit-down`、`/market/calendar`、`/sector`、`/sector/:code`、`/etf`、`/etf/:code`、`/market/global`、`/bond`、`/star-market`、`/reports`、`/reports/:id`、`/alerts`、`/flash`、`/notifications`、`/history`、`/settings`、`/profile`、`/security`、`/devices`、`/feedback`、`/stock/:code`、`/watchlist/groups`、`/trade`、`/trade/positions`、`/trade/positions/:code`、`/trade/orders`、`/trade/orders/:id`、`/trade/funds`、`/trade/transactions`、`/news`、`/news/favorites`、`/news/topics`、`/news/topics/:id`、`/news/:id`、`/account`、`/search`。

### 可执行迁移清单

- [ ] 以本文件核心映射表为验收顺序，先逐页核对 WXML 结构与 Web 页面结构，不按 557 个注册路由直接铺开。
- [ ] 为每个 Web 页面补一列“原始来源文件”和“行为验收项”，避免只有同名路由而没有行为对应。
- [ ] 将 `top-bar`、TabBar、隐私弹窗、空/错/加载状态统一落到 Web 布局/公共组件；目前 Web 对应组件见 `web/src/components` 和 `web/src/layouts/AppLayout.vue`，需逐项比对。
- [ ] 股票详情补齐 K 线、提醒、横屏/触摸、AI/分享等小程序行为；当前 `StockDetailPage.vue` 已有图表交互状态，但数据源仍可能为 API/SDK/mock。
- [ ] 交易、开户、券商插件、验证码、人脸/视频、WebView 走 Web 替代方案评审，不直接复制微信 API。
- [ ] 对 `@tencent`、`__plugin__`、`plugin_gen_assets_` 目录建立“依赖/插件/编译产物”边界；确认供应方源码或产品替代方案后再迁移。
- [ ] 对剩余分包页面按访问量分批归档：资讯互动、组合/社区、市场细分、账户/开户、活动、插件与 WebView。

## 5. 验证命令

```bash
# 统计 app.json 页面注册量
python3 -c "import json; d=json.load(open('__APP__/app.json')); print(len(d.get('pages',[])), len(d.get('subPackages',[])), sum(len(x.get('pages',[])) for x in d.get('subPackages',[])))"

# 查看 Web 路由与页面组件
sed -n '1,180p' web/src/router/index.ts
find web/src/pages -maxdepth 1 -type f -name '*.vue' | sort
```
