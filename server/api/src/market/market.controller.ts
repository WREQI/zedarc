import { Controller, Get, Query } from '@nestjs/common'
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger'
import { MarketService } from './market.service.js'

@ApiTags('market')
@Controller('api/market')
export class MarketController {
  constructor(private readonly market: MarketService) {}
  @Get('quotes') @ApiOperation({ summary: '获取行情快照' }) @ApiQuery({ name: 'codes', required: false }) getQuotes(@Query('codes') codes?: string) { return this.market.getQuotes((codes ?? '').split(',').map((code) => code.trim()).filter(Boolean)) }
  @Get('sentiment') getSentiment() { return this.market.getSentiment() }
  @Get('indices') getIndices() { return this.market.getIndices() }
  @Get('rankings') @ApiQuery({ name: 'type', required: false }) @ApiQuery({ name: 'field', required: false }) @ApiQuery({ name: 'limit', required: false }) @ApiQuery({ name: 'keyword', required: false }) @ApiQuery({ name: 'status', required: false }) getRankings(@Query('type') type?: string, @Query('field') field?: string, @Query('limit') limit?: string, @Query('keyword') keyword?: string, @Query('q') q?: string, @Query('status') status?: 'up' | 'down') { return this.market.getRankings({ type, field, limit: Number(limit) || 20, keyword: (keyword ?? q)?.trim().slice(0, 64), status }) }
  @Get('sectors') getSectors() { return this.market.getSectors() }
  @Get('etf') getEtfs(@Query('limit') limit?: string) { return this.market.getEtfs(Number(limit) || 20) }
  @Get('etfs') getEtfsCompat(@Query('limit') limit?: string) { return this.market.getEtfs(Number(limit) || 20) }
  @Get('search') @ApiQuery({ name: 'q', required: false }) @ApiQuery({ name: 'keyword', required: false }) search(@Query('q') q?: string, @Query('keyword') keyword?: string) { return this.market.search((q ?? keyword ?? '').trim().slice(0, 64)) }
  @Get('status') status() { return this.market.status() }
  @Get('kline') @ApiQuery({ name: 'code', required: true }) @ApiQuery({ name: 'period', required: false }) @ApiQuery({ name: 'start', required: false }) @ApiQuery({ name: 'count', required: false }) @ApiQuery({ name: 'adjust', required: false }) getKline(@Query('code') code: string, @Query('period') period?: string, @Query('start') start?: string, @Query('count') count?: string) { return this.market.getKline(code, period ?? 'daily', Number(start) || 0, count == null ? undefined : Number(count)) }
  @Get('intraday') getIntraday(@Query('code') code: string) { return this.market.getIntraday(code) }
  @Get('timeline') getTimeline(@Query('code') code: string) { return this.market.getIntraday(code) }
  @Get('orderbook') getOrderBook(@Query('code') code: string) { return this.market.getOrderBook(code) }
  @Get('depth') getDepth(@Query('code') code: string) { return this.market.getOrderBook(code) }
  @Get('trades') getTrades(@Query('code') code: string, @Query('count') count?: string) { return this.market.getTrades(code, Number(count) || 100) }
  @Get('capital-flow') getCapitalFlow(@Query('code') code: string) { return this.market.getCapitalFlow(code) }
  @Get('detail') getDetail(@Query('code') code: string) { return this.market.getStockDetail(code) }
}
