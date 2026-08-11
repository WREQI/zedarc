import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ReportsService, type ReportsListQuery } from './reports.service.js'

@ApiTags('reports')
@Controller('api/reports')
export class ReportsController {
  constructor(private readonly service: ReportsService) {}

  @Get()
  list(@Query('code') code?: string, @Query('keyword') keyword?: string, @Query('institution') institution?: string, @Query('rating') rating?: string, @Query('page') page?: string, @Query('pageSize') pageSize?: string) {
    return this.service.list({ code, keyword, institution, rating, ...this.parsePagination(page, pageSize) })
  }

  @Get(':id')
  find(@Param('id') id: string) { return this.service.find(id) }

  private parsePagination(page?: string, pageSize?: string): Pick<ReportsListQuery, 'page' | 'pageSize'> {
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
