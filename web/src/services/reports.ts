import { apiFetch } from '@/services/api-client'

export interface ResearchReport {
  id: string | number
  title: string
  institution: string
  date: string
  publishedAt?: string
  rating: string
  summary: string
  tags: string[]
  targetPrice?: number
  code?: string
  content?: string
}

const reports: ResearchReport[] = [
  { id: 1, title: '新能源产业链盈利修复与竞争格局展望', institution: '国泰海通', date: '2026-08-10', rating: '推荐', summary: '产业链价格趋稳，重点关注订单兑现和盈利改善的龙头公司。', tags: ['新能源', '深度'], code: '300750', targetPrice: 230 },
  { id: 2, title: '科技成长板块中期策略：寻找景气度拐点', institution: '中信研究', date: '2026-08-09', rating: '增持', summary: '科技成长交易活跃度回升，建议关注研发投入与现金流改善。', tags: ['科技', '策略'], code: '688981' },
  { id: 3, title: '电力设备行业月度跟踪报告', institution: '华泰证券', date: '2026-08-08', rating: '推荐', summary: '海外需求和国内更新周期共同支撑行业景气，关注细分设备龙头。', tags: ['电力设备', '行业'], code: '601012' },
  { id: 4, title: '消费龙头估值与盈利质量观察', institution: '招商证券', date: '2026-08-07', rating: '中性', summary: '消费板块估值处于历史中位，等待需求和利润率进一步改善。', tags: ['消费', '估值'], code: '600519' },
]

function normalize(item: ResearchReport & { publishedAt?: string; date?: string; content?: string }) {
  return { ...item, id: String(item.id), publishedAt: item.publishedAt, date: item.date ?? item.publishedAt?.slice(0, 10) ?? '', tags: item.tags ?? [], content: item.content ?? '' }
}
export interface ReportsPage { items: ResearchReport[]; total: number; page: number; pageSize: number; totalPages?: number; hasNext?: boolean }
export async function getReportsPage(options: { keyword?: string; code?: string; institution?: string; rating?: string; page?: number; pageSize?: number } = {}): Promise<ReportsPage> {
  const query = new URLSearchParams(Object.entries(options).filter(([, value]) => value != null && value !== '').map(([key, value]) => [key, String(value)]))
  const result = await apiFetch<ResearchReport[] | ReportsPage>(`/api/reports?${query}`)
  const page = Array.isArray(result) ? { items: result, total: result.length, page: options.page ?? 1, pageSize: options.pageSize ?? result.length } : result
  return { ...page, items: page.items.map(normalize) }
}
export async function getReports(keyword?: string): Promise<ResearchReport[]> {
  const result = await getReportsPage(keyword ? { keyword } : {})
  return result.items
}
export async function getReport(id: string | number): Promise<ResearchReport> {
  return normalize(await apiFetch<ResearchReport>(`/api/reports/${encodeURIComponent(String(id))}`))
}
