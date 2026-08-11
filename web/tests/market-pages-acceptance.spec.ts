import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const page = (name: string) => readFileSync(resolve(process.cwd(), 'src/pages', name), 'utf8')
const component = (name: string) => readFileSync(resolve(process.cwd(), 'src/components', name), 'utf8')

describe('第 9/11/13 项页面代码验收', () => {
  it('行情列表和详情页面统一使用 DataState 且不伪造 provider 数据', () => {
    for (const name of ['BoardListPage.vue', 'EtfPage.vue', 'MarketRankPage.vue', 'SectorDetailPage.vue', 'EtfDetailPage.vue']) {
      const source = page(name)
      expect(source).toContain("@/components/DataState.vue")
      expect(source).toMatch(/status = computed<.*loading.*error/)
    }
    expect(page('BoardListPage.vue')).toContain('当前行情 provider 未提供概念板块接口')
    expect(page('SectorDetailPage.vue')).toContain('detail.value?.availability.available === false')
    expect(page('EtfDetailPage.vue')).toContain('数据源没有返回该标的行情')
  })

  it('板块、ETF、排行的核心导航和筛选交互保持可验收', () => {
    const sectors = page('BoardListPage.vue')
    expect(sectors).toContain('`/sector/${item.code}?kind=${activeKind}`')
    expect(sectors).toContain('搜索板块名称或代码')
    expect(sectors).toContain("label: '行业板块'")
        expect(sectors).toContain("label: '概念板块'")

    const etfs = page('EtfPage.vue')
    expect(etfs).toContain('`/etf/${item.code}`')
    expect(etfs).toContain('搜索 ETF 名称或代码')
    expect(etfs).toContain('ETF分类')
    expect(page('EtfDetailPage.vue')).toContain('`/trade?code=${item.code}`')

    const ranks = page('MarketRankPage.vue')
    expect(ranks).toContain('aria-label="市场切换"')
    expect(ranks).toContain('role="tab"')
    expect(ranks).toContain('`/stock/${stock.code}`')
    expect(ranks).toContain("当前市场暂不支持排行")
  })

  it('提醒和消息页面覆盖加载、错误、空态及关键操作', () => {
    const alerts = page('AlertsPage.vue')
    expect(alerts).toContain('新建提醒')
    expect(alerts).toContain('@submit.prevent="create"')
    expect(alerts).toContain('@click="toggle(item)"')
    expect(alerts).toContain('@click="edit(item)"')
    expect(alerts).toContain('@click="remove(item)"')
    expect(alerts).toContain('暂无价格提醒')

    const notifications = page('NotificationsPage.vue')
    expect(notifications).toContain('全部已读')
    expect(notifications).toContain('markNotificationsRead()')
    expect(notifications).toContain('暂无消息')
    expect(notifications).toContain('aria-label="消息列表"')
  })

  it('统一状态组件暴露可访问状态和重试入口', () => {
    const error = component('ErrorState.vue')
    expect(error).toContain('role="alert"')
    expect(error).toContain('重新加载')
    expect(error).toContain('@click="retry"')

    const loading = component('LoadingState.vue')
    expect(loading).toContain('role="status"')
    expect(loading).toContain('aria-busy="true"')
    expect(loading).toContain('aria-live="polite"')
  })
})
