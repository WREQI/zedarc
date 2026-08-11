import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { eq } from 'drizzle-orm'
import { createHash, createHmac, randomBytes, randomUUID, timingSafeEqual } from 'node:crypto'
import { DatabaseService } from '../database/database.service.js'
import { refreshTokens, users } from '../database/schema.js'
import { createSmsProvider, type SmsProvider } from './sms.provider.js'

export interface AuthUser { id: string; phone: string }
interface Session { user: AuthUser; refreshExpiresAt: number }
interface Verification { hash: string; expiresAt: number; attempts: number; sentAt: number }

@Injectable()
export class AuthService {
  private readonly users = new Map<string, AuthUser>()
  private readonly sessions = new Map<string, Session>()
  private readonly verifications = new Map<string, Verification>()
  private readonly secret = process.env.JWT_SECRET ?? 'zedarc-development-secret'
  private readonly codeTtlMs = this.envNumber('SMS_CODE_TTL_SECONDS', 300) * 1000
  private readonly sendIntervalMs = this.envNumber('SMS_SEND_INTERVAL_SECONDS', 60) * 1000
  private readonly maxAttempts = this.envNumber('SMS_MAX_ATTEMPTS', 5)
  private readonly provider: SmsProvider = createSmsProvider()

  constructor(private readonly database: DatabaseService) {
    if (process.env.NODE_ENV === 'production' && (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32)) {
      throw new Error('JWT_SECRET must be at least 32 characters in production')
    }
    if (process.env.NODE_ENV === 'production' && process.env.SMS_PROVIDER !== 'http') {
      throw new Error('SMS_PROVIDER=http is required in production')
    }
  }

  async sendCode(phone: string) {
    this.validatePhone(phone)
    const previous = this.verifications.get(phone)
    if (previous && Date.now() - previous.sentAt < this.sendIntervalMs) throw new HttpException('验证码发送过于频繁', HttpStatus.TOO_MANY_REQUESTS)
    const code = process.env.NODE_ENV !== 'production' && process.env.MOCK_LOGIN_CODE
      ? process.env.MOCK_LOGIN_CODE
      : String(Math.floor(100000 + Math.random() * 900000))
    this.verifications.set(phone, { hash: this.hash(code), expiresAt: Date.now() + this.codeTtlMs, attempts: 0, sentAt: Date.now() })
    try {
      await this.provider.sendVerificationCode(phone, code)
    } catch (error) {
      this.verifications.delete(phone)
      throw new Error(`验证码发送失败: ${error instanceof Error ? error.message : 'provider error'}`)
    }
    return { success: true, expiresIn: this.codeTtlMs / 1000 }
  }

  async login(phone: string, code: string) {
    this.validatePhone(phone)
    const verification = this.verifications.get(phone)
    const mockCode = process.env.NODE_ENV !== 'production' ? process.env.MOCK_LOGIN_CODE : undefined
    const validMock = mockCode && code === mockCode
    if (!validMock) {
      if (!verification || verification.expiresAt <= Date.now()) throw new UnauthorizedException('验证码已过期或不存在')
      verification.attempts += 1
      if (verification.attempts > this.maxAttempts) { this.verifications.delete(phone); throw new UnauthorizedException('验证码尝试次数过多') }
      if (!this.safeEqual(verification.hash, this.hash(code))) throw new UnauthorizedException('手机号或验证码错误')
      this.verifications.delete(phone)
    }
    if (this.database.db) {
      try {
        const [row] = await this.database.db.insert(users).values({ phone }).onConflictDoUpdate({ target: users.phone, set: { phone } }).returning()
        return await this.issue({ id: row.id, phone: row.phone })
      } catch { /* The in-memory store keeps local development usable without PostgreSQL. */ }
    }
    if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new UnauthorizedException('账户服务暂时不可用')
    let user = this.users.get(phone)
    if (!user) { user = { id: randomUUID(), phone }; this.users.set(phone, user) }
    return await this.issue(user)
  }

  async refresh(refreshToken: string) {
    if (!refreshToken || refreshToken.length > 200) throw new UnauthorizedException('refresh token 无效')
    const tokenHash = this.hash(refreshToken)
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select({ token: refreshTokens, user: users }).from(refreshTokens).innerJoin(users, eq(refreshTokens.userId, users.id)).where(eq(refreshTokens.tokenHash, tokenHash)).limit(1)
        if (!row || row.token.expiresAt.getTime() <= Date.now()) throw new UnauthorizedException('refresh token 已失效')
        await this.database.db.delete(refreshTokens).where(eq(refreshTokens.tokenHash, tokenHash))
        return await this.issue({ id: row.user.id, phone: row.user.phone })
      } catch (error) {
        if (error instanceof UnauthorizedException) throw error
        throw new UnauthorizedException('refresh token 暂不可用')
      }
    }
    const session = this.sessions.get(tokenHash)
    if (!session || session.refreshExpiresAt <= Date.now()) throw new UnauthorizedException('refresh token 已失效')
    this.sessions.delete(tokenHash)
    return await this.issue(session.user)
  }

  async logout(refreshToken?: string) {
    if (refreshToken) {
      const tokenHash = this.hash(refreshToken)
      this.sessions.delete(tokenHash)
      if (this.database.db) await this.database.db.delete(refreshTokens).where(eq(refreshTokens.tokenHash, tokenHash)).catch(() => undefined)
    }
    return { success: true }
  }

  async me(userId: string) {
    if (this.database.db) {
      try { const [user] = await this.database.db.select().from(users).where(eq(users.id, userId)).limit(1); if (user) return { id: user.id, phone: user.phone } } catch { /* fall through */ }
    }
    const user = [...this.users.values()].find((item) => item.id === userId)
    if (!user) throw new UnauthorizedException()
    return user
  }

  verifyAccess(token: string): AuthUser {
    const [header, body, signature] = token.split('.')
    const encoded = header && body ? `${header}.${body}` : ''
    if (!encoded || !signature || !this.safeEqual(signature, this.sign(encoded))) throw new UnauthorizedException('无效的访问令牌')
    try {
      const payload = JSON.parse(Buffer.from(body, 'base64url').toString()) as { sub?: string; phone?: string; exp?: number }
      if (!payload.sub || !payload.phone || !payload.exp) throw new Error('invalid claims')
      if (payload.exp <= Math.floor(Date.now() / 1000)) throw new UnauthorizedException('访问令牌已过期')
      return { id: payload.sub, phone: payload.phone }
    } catch (error) { if (error instanceof UnauthorizedException) throw error; throw new UnauthorizedException('无效的访问令牌') }
  }

  private async issue(user: AuthUser) {
    const now = Math.floor(Date.now() / 1000)
    const access = this.jwt({ sub: user.id, phone: user.phone, iat: now, exp: now + this.envNumber('ACCESS_TOKEN_TTL_SECONDS', 900) })
    const refresh = randomBytes(48).toString('base64url')
    const refreshHash = this.hash(refresh)
    const expiresAt = Date.now() + this.envNumber('REFRESH_TOKEN_TTL_SECONDS', 30 * 86400) * 1000
    this.sessions.set(refreshHash, { user, refreshExpiresAt: expiresAt })
    if (this.database.db) {
      const write = this.database.db.insert(refreshTokens).values({ userId: user.id, tokenHash: refreshHash, expiresAt: new Date(expiresAt) })
      if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') await write
      else void write.catch(() => undefined)
    } else if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') {
      throw new UnauthorizedException('账户服务暂时不可用')
    }
    return { accessToken: access, refreshToken: refresh, user }
  }

  private validatePhone(phone: string) { if (!/^1\d{10}$/.test(phone)) throw new UnauthorizedException('手机号格式错误') }
  private envNumber(name: string, fallback: number) { const value = Number(process.env[name]); return Number.isFinite(value) && value > 0 ? value : fallback }
  private jwt(payload: object) { const head = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url'); const body = Buffer.from(JSON.stringify(payload)).toString('base64url'); const value = `${head}.${body}`; return `${value}.${this.sign(value)}` }
  private sign(value: string) { return createHmac('sha256', this.secret).update(value).digest('base64url') }
  private hash(value: string) { return createHash('sha256').update(value).digest('hex') }
  private safeEqual(a: string, b: string) { const left = Buffer.from(a); const right = Buffer.from(b); return left.length === right.length && timingSafeEqual(left, right) }
}
