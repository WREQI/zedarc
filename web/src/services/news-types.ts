export interface NewsArticle {
  id: string
  time: string
  source: string
  title: string
  summary: string
  tag: string
  featured?: boolean
  video?: boolean
  content?: string
}

export const newsCategories = ['要闻', '自选动态', '市场', '社区', '视频']
