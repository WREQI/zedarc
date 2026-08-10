import { Controller, Get, Param, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { NewsService } from './news.service.js'

@ApiTags('news') @Controller('api/news')
export class NewsController {
  constructor(private readonly service: NewsService) {}
  @Get() list(@Query('code') code?: string, @Query('keyword') keyword?: string, @Query('page') page?: string, @Query('pageSize') pageSize?: string) { return this.service.list({ code, keyword, page: Number(page) || 1, pageSize: Number(pageSize) || 20 }) }
  @Get(':id') find(@Param('id') id: string) { return this.service.find(id) }
}
