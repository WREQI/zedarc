import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { SettingsService, type Settings } from './settings.service.js'

@ApiTags('settings') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}
  @Get() get(@Req() req: { user: AuthUser }) { return this.service.get(req.user.id) }
  @Patch() update(@Req() req: { user: AuthUser }, @Body() body: Settings) { return this.service.update(req.user.id, body) }
}
