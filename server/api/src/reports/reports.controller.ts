import { Controller, Get, Param, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ReportsService } from './reports.service.js'
@ApiTags('reports') @Controller('api/reports')
export class ReportsController {
  constructor(private readonly service: ReportsService) {}
  @Get() list(@Query('code') code?: string, @Query('keyword') keyword?: string) { return this.service.list(code, keyword) }
  @Get(':id') find(@Param('id') id: string) { return this.service.find(id) }
}
