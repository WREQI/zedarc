import { Controller, Get, Patch, Param, Query, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { NotificationsService } from './notifications.service.js'
@ApiTags('notifications') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}
  @Get() list(@Req() req: { user: AuthUser }, @Query('unread') unread?: string) { return this.service.list(req.user.id, unread === 'true') }
  @Get('unread-count') count(@Req() req: { user: AuthUser }) { return this.service.unreadCount(req.user.id) }
  @Patch('read-all') readAll(@Req() req: { user: AuthUser }) { return this.service.markRead(req.user.id) }
  @Patch(':id/read') read(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.markRead(req.user.id, id) }
}
