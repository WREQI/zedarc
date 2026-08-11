import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { TradeService } from './trade.service.js'

@ApiTags('trade') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/trade')
export class TradeController {
  constructor(private readonly service: TradeService) {}
  @Get('account') account(@Req() req: { user: AuthUser }) { return this.service.account(req.user.id) }
  @Get('orders') orders(@Req() req: { user: AuthUser }) { return this.service.listOrders(req.user.id) }
  @Get('orders/:id') order(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.getOrder(req.user.id, id) }
  @Get('positions') positions(@Req() req: { user: AuthUser }) { return this.service.listPositions(req.user.id) }
  @Get('positions/:code') position(@Req() req: { user: AuthUser }, @Param('code') code: string) { return this.service.getPosition(req.user.id, code) }
  @Get('funds') funds(@Req() req: { user: AuthUser }) { return this.service.funds(req.user.id) }
  @Get('transactions') transactions(@Req() req: { user: AuthUser }) { return this.service.listTransactions(req.user.id) }
  @Get('stats') stats(@Req() req: { user: AuthUser }) { return this.service.stats(req.user.id) }
  @Post('orders') place(@Req() req: { user: AuthUser }, @Body() body: { code: string; side?: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }) { return this.service.place(req.user.id, body) }
  @Post('order') placeCompat(@Req() req: { user: AuthUser }, @Body() body: { code: string; side?: 'buy' | 'sell'; quantity: number; price: number; requestId?: string }) { return this.service.place(req.user.id, body) }
  @Delete('orders/:id') cancel(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.cancel(req.user.id, id) }
}
