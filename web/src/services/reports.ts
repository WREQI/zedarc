import { apiFetch } from '@/services/api-client'

export interface ResearchReport {
  id: string | number
  title: string
  institution: string
  date: string
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
  return { ...item, date: item.date ?? item.publishedAt?.slice(0, 10) ?? '', tags: item.tags ?? [], content: item.content ?? `${item.summary}\n\n本报告围绕行业景气度、竞争格局与重点公司的经营质量展开分析。以上内容为研究摘要，投资决策请结合公开披露信息并注意风险。` }
}
export async function getReports(keyword?: string): Promise<ResearchReport[]> {
  try { const result = await apiFetch<ResearchReport[]>(`/api/reports${keyword ? `?keyword=${encodeURIComponent(keyword)}` : ''}`); if (result.length) return result.map(normalize) } catch { /* fallback to mock while the research provider is not configured */ }
  await new Promise((resolve) => window.setTimeout(resolve, 180))
  return structuredClone(reports).map(normalize).filter((item) => !keyword || `${item.title}${item.institution}${item.tags.join('')}`.includes(keyword))
}
export async function getReport(id: string | number): Promise<ResearchReport> {
  try { return normalize(await apiFetch<ResearchReport>(`/api/reports/${encodeURIComponent(String(id))}`)) } catch { const item = reports.find((report) => String(report.id) === String(id)); if (!item) throw new Error('研报不存在'); return normalize(structuredClone(item)) }
}
