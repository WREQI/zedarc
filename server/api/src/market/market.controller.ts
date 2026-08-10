import { Controller, Get, Query } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger'
import { MarketService } from './market.service.js'

@ApiTags('market')
@Controller('api/market')
export class MarketController {
  constructor(private readonly market: MarketService) {}
  @Get('quotes') @ApiOperation({ summary: '获取行情快照' }) @ApiQuery({ name: 'codes', required: false }) getQuotes(@Query('codes') codes?: string) { return this.market.getQuotes((codes ?? '').split(',').map((code) => code.trim()).filter(Boolean)) }
  @Get('indices') getIndices() { return this.market.getIndices() }
  @Get('rankings') getRankings(@Query('type') type?: string, @Query('limit') limit?: string) { return this.market.getRankings(type, Number(limit) || 20) }
  @Get('sectors') getSectors() { return this.market.getSectors() }
  @Get('etf') getEtfs(@Query('limit') limit?: string) { return this.market.getEtfs(Number(limit) || 20) }
  @Get('etfs') getEtfsCompat(@Query('limit') limit?: string) { return this.market.getEtfs(Number(limit) || 20) }
  @Get('search') search(@Query('q') q?: string, @Query('keyword') keyword?: string) { return this.market.search(q ?? keyword ?? '') }
  @Get('status') status() { return this.market.status() }
  @Get('kline') @ApiQuery({ name: 'code', required: true }) getKline(@Query('code') code: string, @Query('period') period?: string) { return this.market.getKline(code, period ?? 'daily') }
  @Get('intraday') getIntraday(@Query('code') code: string) { return this.market.getIntraday(code) }
  @Get('timeline') getTimeline(@Query('code') code: string) { return this.market.getIntraday(code) }
  @Get('orderbook') getOrderBook(@Query('code') code: string) { return this.market.getOrderBook(code) }
  @Get('depth') getDepth(@Query('code') code: string) { return this.market.getOrderBook(code) }
}
