export interface NewsArticle {
  id: string
  time: string
  publishedAt?: string
  source: string
  title: string
  summary: string
  tag: string
  codes?: string[]
  url?: string
  featured?: boolean
  video?: boolean
  videoUrl?: string
  content?: string
}

export const newsCategories = ['要闻', '自选动态', '市场', '社区', '视频']
