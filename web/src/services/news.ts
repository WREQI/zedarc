import { newsArticles, type NewsArticle } from '@/mock/news'

export async function getNewsArticles(): Promise<NewsArticle[]> {
  await new Promise((resolve) => window.setTimeout(resolve, 180))
  return structuredClone(newsArticles)
}

export async function getNewsArticle(id: number): Promise<NewsArticle | undefined> {
  const articles = await getNewsArticles()
  return articles.find((article) => article.id === id)
}
