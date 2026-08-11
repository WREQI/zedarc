import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { WatchlistService } from './watchlist.service.js'

@ApiTags('watchlist') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/watchlist')
export class WatchlistController {
  constructor(private readonly service: WatchlistService) {}
  @Get('groups') groups(@Req() req: { user: AuthUser }) { return this.service.listGroups(req.user.id) }
  @Post('groups') createGroup(@Req() req: { user: AuthUser }, @Body() body: { name: string }) { return this.service.createGroup(req.user.id, body.name) }
  @Patch('groups/:id') renameGroup(@Req() req: { user: AuthUser }, @Param('id') id: string, @Body() body: { name: string }) { return this.service.renameGroup(req.user.id, id, body.name) }
  @Put('groups/order') reorderGroups(@Req() req: { user: AuthUser }, @Body() body: { ids: string[] }) { return this.service.reorderGroups(req.user.id, body.ids) }
  @Delete('groups/:id') deleteGroup(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.deleteGroup(req.user.id, id) }
  @Get('groups/:id/items') groupItems(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.list(req.user.id, id) }
  @Post('groups/:id/items') addToGroup(@Req() req: { user: AuthUser }, @Param('id') id: string, @Body() body: { code: string; name?: string; sortOrder?: number }) { return this.service.upsert(req.user.id, { ...body, groupId: id }) }
  @Patch('groups/:id/items/:code') updateGroupItem(@Req() req: { user: AuthUser }, @Param('id') id: string, @Param('code') code: string, @Body() body: { name?: string; sortOrder?: number }) { return this.service.update(req.user.id, code, { ...body, groupId: id }) }
  @Delete('groups/:id/items/:code') removeFromGroup(@Req() req: { user: AuthUser }, @Param('id') id: string, @Param('code') code: string) { return this.service.remove(req.user.id, code, id) }

  @Get() list(@Req() req: { user: AuthUser }) { return this.service.list(req.user.id) }
  @Post() add(@Req() req: { user: AuthUser }, @Body() body: { code: string; name?: string; sortOrder?: number; groupId?: string | null }) { return this.service.upsert(req.user.id, body) }
  @Post('move') move(@Req() req: { user: AuthUser }, @Body() body: { code: string; groupId: string | null; sortOrder?: number }) { return this.service.move(req.user.id, body.code, body.groupId, body.sortOrder) }
  @Put('order') reorder(@Req() req: { user: AuthUser }, @Body() body: { groupId: string | null; codes: string[] }) { return this.service.reorder(req.user.id, body.groupId, body.codes) }
  @Delete('batch') removeBatch(@Req() req: { user: AuthUser }, @Body() body: { codes: string[]; groupId?: string }) { return this.service.removeBatch(req.user.id, body.codes, body.groupId) }
  @Patch(':code') update(@Req() req: { user: AuthUser }, @Param('code') code: string, @Body() body: { name?: string; sortOrder?: number; groupId?: string | null }) { return this.service.update(req.user.id, code, body) }
  @Delete(':code') remove(@Req() req: { user: AuthUser }, @Param('code') code: string) { return this.service.remove(req.user.id, code) }
}
