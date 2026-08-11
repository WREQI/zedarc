import { BadRequestException, Controller, Get, Param, Query, Req } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { NewsService, type NewsListQuery } from './news.service.js'
import { NewsRecommendationService } from './news-recommendation.service.js'
import { AuthService } from '../auth/auth.service.js'

@ApiTags('news')
@Controller('api/news')
export class NewsController {
  constructor(private readonly service: NewsService, private readonly recommendations: NewsRecommendationService, private readonly auth: AuthService) {}

  @Get()
  list(@Query('code') code?: string, @Query('keyword') keyword?: string, @Query('source') source?: string, @Query('page') page?: string, @Query('pageSize') pageSize?: string) {
    return this.service.list({ code, keyword, source, ...this.parsePagination(page, pageSize) })
  }

  @Get('recommendations')
  recommendationsList(@Query('history') history?: string, @Query('limit') limit?: string, @Req() request?: { headers: { authorization?: string } }) {
    const token = request?.headers.authorization?.replace(/^Bearer\s+/i, '')
    let userId: string | undefined
    if (token) {
      try { userId = this.auth.verifyAccess(token).id } catch { userId = undefined }
    }
    const parsedLimit = limit === undefined || limit === '' ? 20 : this.parsePositiveInteger(limit, 'limit', 20, 50)
    return this.recommendations.list({ userId, history: (history ?? '').split(',').map((value) => value.trim()).filter(Boolean), limit: parsedLimit })
  }

  @Get('topics')
  topics() { return this.service.topics() }

  @Get('topics/:id')
  topic(@Param('id') id: string) { return this.service.topic(id) }

  @Get(':id')
  find(@Param('id') id: string) { return this.service.find(id) }

  private parsePagination(page?: string, pageSize?: string): Pick<NewsListQuery, 'page' | 'pageSize'> {
    return { page: this.parsePositiveInteger(page, 'page', 1), pageSize: this.parsePositiveInteger(pageSize, 'pageSize', 20, 100) }
  }

  private parsePositiveInteger(value: string | undefined, name: string, fallback: number, max = Number.MAX_SAFE_INTEGER) {
    if (value === undefined || value === '') return fallback
    if (!/^\d+$/.test(value)) throw new BadRequestException(`${name} 必须是正整数`)
    const parsed = Number(value)
    if (!Number.isSafeInteger(parsed) || parsed < 1 || parsed > max) throw new BadRequestException(`${name} 必须在 1-${max} 之间`)
    return parsed
  }
}
