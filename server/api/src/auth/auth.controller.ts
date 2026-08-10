import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from './auth.guard.js'
import { AuthService, type AuthUser } from './auth.service.js'

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  @Post('code') sendCode(@Body() body: { phone: string }) { return this.auth.sendCode(body.phone) }
  @Post('login') login(@Body() body: { phone: string; code: string }) { return this.auth.login(body.phone, body.code) }
  @Post('refresh') refresh(@Body() body: { refreshToken: string }) { return this.auth.refresh(body.refreshToken) }
  @Post('logout') logout(@Body() body: { refreshToken?: string }) { return this.auth.logout(body.refreshToken) }
  @Get('me') @ApiBearerAuth() @UseGuards(AuthGuard) me(@Req() req: { user: AuthUser }) { return this.auth.me(req.user.id) }
}
