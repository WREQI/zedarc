import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service.js'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<{ headers: { authorization?: string }; user?: unknown }>()
    const value = request.headers.authorization?.replace(/^Bearer\s+/i, '')
    if (!value) throw new UnauthorizedException('需要登录')
    request.user = this.auth.verifyAccess(value)
    return true
  }
}
