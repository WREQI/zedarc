import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { AlertsService, type AlertInput } from './alerts.service.js'

@ApiTags('alerts') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/alerts')
export class AlertsController {
  constructor(private readonly service: AlertsService) {}
  @Get() list(@Req() req: { user: AuthUser }) { return this.service.list(req.user.id) }
  @Post() create(@Req() req: { user: AuthUser }, @Body() body: AlertInput) { return this.service.create(req.user.id, body) }
  @Patch(':id') update(@Req() req: { user: AuthUser }, @Param('id') id: string, @Body() body: { enabled: boolean }) { return this.service.update(req.user.id, id, Boolean(body.enabled)) }
  @Delete(':id') remove(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.remove(req.user.id, id) }
}
