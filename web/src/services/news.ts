import { apiFetch } from '@/services/api-client'
import type { NewsArticle } from '@/services/news-types'
export interface NewsPage { items: NewsArticle[]; total: number; page: number; pageSize: number }
function normalize(item: NewsArticle & { publishedAt?: string; codes?: string[] }) { return { ...item, time: item.time || item.publishedAt?.slice(11, 16) || '', tag: item.tag || (item.codes?.length ? '自选动态' : '要闻'), content: item.content || item.summary } }
export async function getNewsPage(options: { page?: number; pageSize?: number; keyword?: string; code?: string } = {}): Promise<NewsPage> { const query = new URLSearchParams(); Object.entries(options).forEach(([key, value]) => value != null && query.set(key, String(value))); try { const result = await apiFetch<{ items: NewsArticle[]; total: number; page: number; pageSize: number }>(`/api/news?${query}`); return { ...result, items: result.items.map(normalize) } } catch { const page = options.page ?? 1; const pageSize = options.pageSize ?? 20; return { items: [], total: 0, page, pageSize } } }
export async function getNewsArticles() { return (await getNewsPage()).items }
export async function getNewsArticle(id: number) { try { return normalize(await apiFetch<NewsArticle & { publishedAt?: string; codes?: string[] }>(`/api/news/${encodeURIComponent(String(id))}`)) } catch { return undefined } }
