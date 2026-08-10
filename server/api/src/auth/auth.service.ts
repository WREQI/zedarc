import { Injectable, UnauthorizedException } from '@nestjs/common'
import { createHash, createHmac, randomUUID } from 'node:crypto'

export interface AuthUser { id: string; phone: string }
interface Session { user: AuthUser; refreshHash: string; refreshExpiresAt: number }

@Injectable()
export class AuthService {
  private readonly users = new Map<string, AuthUser>()
  private readonly sessions = new Map<string, Session>()
  private readonly secret = process.env.JWT_SECRET ?? 'zedarc-development-secret'

  login(phone: string, code: string) {
    if (!/^1\d{10}$/.test(phone) || code !== (process.env.MOCK_LOGIN_CODE ?? '123456')) {
      throw new UnauthorizedException('手机号或验证码错误')
    }
    let user = this.users.get(phone)
    if (!user) { user = { id: randomUUID(), phone }; this.users.set(phone, user) }
    return this.issue(user)
  }

  refresh(refreshToken: string) {
    const session = this.sessions.get(this.hash(refreshToken))
    if (!session || session.refreshExpiresAt < Date.now()) throw new UnauthorizedException('refresh token 已失效')
    return this.issue(session.user)
  }

  logout(refreshToken?: string) { if (refreshToken) this.sessions.delete(this.hash(refreshToken)); return { success: true } }
  me(userId: string) { const user = [...this.users.values()].find((item) => item.id === userId); if (!user) throw new UnauthorizedException(); return user }

  verifyAccess(token: string): AuthUser {
    const [encoded, signature] = token.split('.')
    if (!encoded || !signature || !this.safeEqual(signature, this.sign(encoded))) throw new UnauthorizedException('无效的访问令牌')
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString()) as { sub: string; phone: string; exp: number }
    if (payload.exp < Math.floor(Date.now() / 1000)) throw new UnauthorizedException('访问令牌已过期')
    return { id: payload.sub, phone: payload.phone }
  }

  private issue(user: AuthUser) {
    const now = Math.floor(Date.now() / 1000)
    const access = this.jwt({ sub: user.id, phone: user.phone, iat: now, exp: now + 900 })
    const refresh = `${randomUUID()}.${randomUUID()}`
    this.sessions.set(this.hash(refresh), { user, refreshHash: this.hash(refresh), refreshExpiresAt: Date.now() + 30 * 86400000 })
    return { accessToken: access, refreshToken: refresh, user }
  }
  private jwt(payload: object) { const head = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url'); const body = Buffer.from(JSON.stringify(payload)).toString('base64url'); const value = `${head}.${body}`; return `${value}.${this.sign(value)}` }
  private sign(value: string) { return createHmac('sha256', this.secret).update(value).digest('base64url') }
  private hash(value: string) { return createHash('sha256').update(value).digest('hex') }
  private safeEqual(a: string, b: string) { return a.length === b.length && createHash('sha256').update(a).digest('hex') === createHash('sha256').update(b).digest('hex') }
}
