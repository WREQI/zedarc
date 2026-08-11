import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from './auth.guard.js'
import { AuthService, type AuthUser } from './auth.service.js'

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  @Post('code') sendCode(@Body() body: { phone: string }) { return this.auth.sendCode(body.phone) }
  @Post('login') login(@Body() body: { phone: string; code: string }, @Req() req: { headers: { 'user-agent'?: string }; ip?: string }) { return this.auth.login(body.phone, body.code, { userAgent: req.headers['user-agent'], ipAddress: req.ip }) }
  @Post('refresh') refresh(@Body() body: { refreshToken: string }) { return this.auth.refresh(body.refreshToken) }
  @Post('logout') logout(@Body() body: { refreshToken?: string }) { return this.auth.logout(body.refreshToken) }
  @Get('me') @ApiBearerAuth() @UseGuards(AuthGuard) me(@Req() req: { user: AuthUser }) { return this.auth.me(req.user.id) }
  @Patch('profile') @ApiBearerAuth() @UseGuards(AuthGuard) updateProfile(@Req() req: { user: AuthUser }, @Body() body: { displayName?: string; avatar?: string | null }) { return this.auth.updateProfile(req.user.id, body) }
  @Get('sessions') @ApiBearerAuth() @UseGuards(AuthGuard) sessions(@Req() req: { user: AuthUser }) { return this.auth.sessions(req.user.id, req.user.sessionId) }
  @Delete('sessions/:id') @ApiBearerAuth() @UseGuards(AuthGuard) revokeSession(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.auth.revokeSession(req.user.id, id) }
  @Get('login-history') @ApiBearerAuth() @UseGuards(AuthGuard) history(@Req() req: { user: AuthUser }) { return this.auth.history(req.user.id) }
}
