import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { WatchlistService } from './watchlist.service.js'

@ApiTags('watchlist') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/watchlist')
export class WatchlistController {
  constructor(private readonly service: WatchlistService) {}
  @Get() list(@Req() req: { user: AuthUser }) { return this.service.list(req.user.id) }
  @Post() add(@Req() req: { user: AuthUser }, @Body() body: { code: string; name?: string; sortOrder?: number }) { return this.service.upsert(req.user.id, body) }
  @Patch(':code') update(@Req() req: { user: AuthUser }, @Param('code') code: string, @Body() body: { name?: string; sortOrder?: number }) { return this.service.update(req.user.id, code, body) }
  @Delete(':code') remove(@Req() req: { user: AuthUser }, @Param('code') code: string) { return this.service.remove(req.user.id, code) }
}
