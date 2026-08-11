# 小程序视觉 Token 盘点

> 来源仅限 `__APP__/app.wxss` 及排除依赖目录后的 WXML/WXSS 文件扫描。数值保留源码实际写法；大量 `rem` 值来自编译后的 rpx 换算，因此不要把它们当成设计稿原始 px。

## 1. 主题色 Token

### 浅色主题（`__APP__/app.wxss`）

| Token | 实际值 | 用途/证据 |
|---|---|---|
| `--text-color-0` | `#000` | 最高层级文本 |
| `--text-color-1` | `#262e40` | 主文本/重灰；全仓 WXSS 高频 |
| `--text-color-2` | `#475166` | 次级文本 |
| `--text-color-3` | `#606980` | 次级/说明文本 |
| `--text-color-4` | `#7a8499` | 浅灰文字 |
| `--text-color-5` | `#98a0b3` | 更弱文字 |
| `--text-color-7` | `#dcdfe6` | 弱边界/文本 |
| `--fill-1` | `#f5f6fa` | 页面背景 |
| `--fill-2` / `--fill-3` | `#fff` | 卡片/白色填充 |
| `--border-color-1` / `--border-color-2` | `#e9ebf0` | 边框 |
| `--color-blue` | `#3077ec` | 主色、买入色、链接体系 |
| `--color-red` | `#e63535` | 上涨/风险提示 |
| `--color-green` | `#1caa3c` | 下跌/成功或绿色行情语义 |
| `--color-orange` | `#ff891e` | 卖出/提醒 |
| `--color-link` | `#4774b3` | 链接 |
| `--color-primary-active` | `#2c67c9` | 主色激活态 |
| `--color-rise-bg` | `rgba(230, 53, 53, 0.05)` | 上涨背景 |
| `--color-drop-bg` | `rgba(28, 170, 60, 0.05)` | 下跌背景 |
| `--color-rise-bg-medium` | `rgba(230, 53, 53, 0.1)` | 上涨中等强调背景 |
| `--color-drop-bg-medium` | `rgba(28, 170, 60, 0.1)` | 下跌中等强调背景 |
| `--color-rise-tag-bg` | `#fdefef` | 上涨标签背景 |
| `--color-drop-tag-bg` | `#edf8ef` | 下跌标签背景 |

### 深色主题（`app.wxss` 的 `[data-theme="dark"]`）

| Token | 实际值 |
|---|---|
| `--text-color-0` | `#fff` |
| `--text-color-1` | `#f0f1f5` |
| `--text-color-2` / `--text-color-3` / `--text-color-4` | `#a7b0c4` |
| `--text-color-5` | `#69738c` |
| `--fill-1` | `#000` |
| `--fill-2` | `#12161f` |
| `--fill-3` | `#171d28` |
| `--border-color-1` | `#191e27` |
| `--border-color-2` | `#262e40` |
| `--lable-bg` | `#191e27` |
| `--color-rise-bg` | `rgba(230, 53, 53, 0.08)` |
| `--color-drop-bg` | `rgba(28, 170, 60, 0.08)` |
| `--color-rise-anim` | `#4b2428` |
| `--color-drop-anim` | `#2a5236` |
| `--color-rise-tag-bg` | `rgba(230, 53, 53, 0.12)` |
| `--color-drop-tag-bg` | `rgba(28, 170, 60, 0.12)` |

## 2. 字体与排版

实际 WXSS 中出现频率较高的字体族：

- `PingFang SC`、`PingFangSC-Regular`、`PingFangSC-Medium`、`PingFangSC-Semibold`
- `xcxfont, sans-serif`：图标/小程序字体类引用
- `TencentSansW7`
- `stockFont` 与系统回退：`-apple-system, BlinkMacSystemFont, Roboto, PingFang SC, Hiragino Sans GB, Source Han Sans CN, sans-serif`
- `DFP King Gothic GB` / `DFP King Gothic GB Medium`
- `SourceHanSansCN-Medium` / `SourceHanSansCN-Normal`

扫描到的常用编译尺寸（仅作为迁移核对锚点）：`0.32rem`、`0.37333333333333335rem`、`0.4rem`、`0.4266666666666667rem`、`0.48rem`、`0.5333333333333333rem`、`0.56rem`、`0.64rem`；实际页面需结合对应 WXSS 选择器确认，不能全局替换成同一字号。

## 3. 间距、圆角与布局事实

- 全局 WXSS 高频使用 flex 工具类：`.flex`、`.flex-row`、`.flex-column`、`.flex-center`、`.flex-hcenter`、`.flex-vcenter`、`.flex-end`。
- 高频间距/尺寸来自 `0.053333...rem`、`0.106666...rem`、`0.16rem`、`0.213333...rem`、`0.266666...rem`、`0.32rem`、`0.4rem`、`0.64rem`、`0.8rem`、`0.96rem`、`1.173333...rem`、`1.6rem`。
- `0.106666...rem` 是扫描中高频圆角值之一；具体组件还使用更大的卡片/弹窗圆角，迁移时按组件 WXSS 核对。
- 小程序全局存在 `--with-external-bar: 0.653333rem`，说明外部/底部系统栏预留是主题布局的一部分。
- `app.wxss` 将页面默认背景分别设为浅色 `#f5f6fa` 和深色 `#000`；卡片层在浅色通常为 `#fff`，深色为 `#12161f` / `#171d28`。

## 4. 组件级视觉锚点

| 组件/页面 | 视觉事实 | 来源 |
|---|---|---|
| 全局页面 | CSS 变量、亮/暗主题、flex 与通用文字工具类 | `__APP__/app.wxss` |
| 自选首页 | 页面背景使用 `var(--fill-1)`，另有远程底部背景图；黑色皮肤切换另一远程图 | `__APP__/pages/index/index.wxss` |
| 顶部栏 | 公共 top-bar，页面通过 `bindgetBarHeight`、`bindgetTitleHeight` 获取布局高度 | `__APP__/components/topbar/index.*`、`__APP__/pages/index/index.wxml` |
| TabBar | `app.json` 五项：新闻、自选、行情、交易、我的；选中色 `#262E40` | `__APP__/app.json` |
| 行情语义 | 蓝/红/绿/橙分别在全局变量中承担主色、涨、跌、卖出等语义；不要按 Web 常见“红跌绿涨”擅自反转 | `__APP__/app.wxss` |
| 弹层/隐私 | Modal、LayerModal、PrivacyDialog、StockPrivacyDialog 共享遮罩/弹层类视觉，但实现分散 | `__APP__/components/{Modal,LayerModal,PrivacyDialog,StockPrivacyDialog}/*` |

## 5. Web 迁移状态与可执行清单

当前 Web 的视觉外壳已存在：`web/src/layouts/AppLayout.vue` 提供桌面侧栏、顶部栏、底部 TabBar；`web/src/App.vue`/`web/src/styles`（如存在）及页面组件承载 Web 样式。它已引用小程序导航图标，但尚未证明完整复刻小程序的亮/暗主题和行情色语义。

- [ ] 在 Web 建立一份语义化 CSS Token 层，逐项对应 `app.wxss` 的浅色/深色变量；不要直接把 `#e63535` 等散落到页面。
- [ ] 核对 Web 行情的涨跌色：小程序事实是 `--color-rise: #e63535`、`--color-drop: #1caa3c`，交易/卖出另有 `--color-sell: #ff891e`。
- [ ] 将 `top-bar` 高度、页面背景、卡片层级、底部外部栏预留作为布局验收项；来源分别为公共 topbar WXSS、`app.wxss` 与页面 WXSS。
- [ ] 核对小程序 rem/rpx 换算，不把编译后小数 rem 直接当成 Web 的设计 token；先按页面实际视觉截图验收。
- [ ] 对 `xcxfont`、`stockFont`、`TencentSansW7` 等字体确认 Web 是否有字体文件/许可；没有真实字体文件时使用已批准的系统回退，不伪造资源。
- [ ] 迁移远程背景图与 data URI 前确认资源可用性、版权和离线构建策略；当前它们不属于本地资产清单。

## 6. 验证命令

```bash
# 查看全局 Token 原始定义
sed -n '72,173p' __APP__/app.wxss

# 统计高频颜色/字体/尺寸（排除依赖目录）
python3 - <<'PY'
import glob, re, collections
files = [p for p in glob.glob('__APP__/**/*.wxss', recursive=True)
         if not any(x in p for x in ('/@babel/', '/node_modules/', '/miniprogram_npm/'))]
colors = collections.Counter()
for p in files:
    colors.update(re.findall(r'#[0-9a-fA-F]{3,8}\\b', open(p, errors='ignore').read()))
print(colors.most_common(20))
PY
```
