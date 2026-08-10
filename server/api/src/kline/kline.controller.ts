import { Controller, Get, Query } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'
import { KlineService } from './kline.service.js'
@ApiTags('kline') @Controller('api/kline')
export class KlineController {
  constructor(private readonly service: KlineService) {}
  @Get('indicators') @ApiQuery({ name: 'code' }) indicators(@Query('code') code: string, @Query('period') period?: string, @Query() query?: Record<string, string>) { return this.service.indicators(code, period ?? 'daily', query) }
}
