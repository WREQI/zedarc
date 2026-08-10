import { newsArticles, type NewsArticle } from '@/mock/news'
import { apiFetch } from '@/services/api-client'

export async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    const result = await apiFetch<{ items: NewsArticle[] }>('/api/news')
    if (result.items?.length) return result.items
  } catch { /* fallback to mock while the content provider is not configured */ }
  await new Promise((resolve) => window.setTimeout(resolve, 180))
  return structuredClone(newsArticles)
}

export async function getNewsArticle(id: number): Promise<NewsArticle | undefined> {
  const articles = await getNewsArticles()
  return articles.find((article) => article.id === id)
}
