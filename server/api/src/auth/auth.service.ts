import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { and, desc, eq, ne } from 'drizzle-orm'
import { createHash, createHmac, randomBytes, randomUUID, timingSafeEqual } from 'node:crypto'
import { DatabaseService } from '../database/database.service.js'
import { loginHistory, refreshTokens, users } from '../database/schema.js'
import { createSmsProvider, type SmsProvider } from './sms.provider.js'

export interface AuthUser { id: string; phone: string; displayName?: string; avatar?: string; sessionId?: string }
export interface AuthContext { userAgent?: string; ipAddress?: string }
interface Session { id: string; user: AuthUser; refreshExpiresAt: number; createdAt: Date; lastUsedAt: Date; userAgent?: string; ipAddress?: string }
interface MemoryLoginHistory { id: string; userId: string; action: string; userAgent?: string; ipAddress?: string; createdAt: Date }
interface Verification { hash: string; expiresAt: number; attempts: number; sentAt: number }

@Injectable()
export class AuthService {
  private readonly users = new Map<string, AuthUser>()
  private readonly memorySessions = new Map<string, Session>()
  private readonly memoryHistory = new Map<string, MemoryLoginHistory[]>()
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

  async login(phone: string, code: string, context: AuthContext = {}) {
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
        return await this.issue({ id: row.id, phone: row.phone }, context)
      } catch { /* The in-memory store keeps local development usable without PostgreSQL. */ }
    }
    if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') throw new UnauthorizedException('账户服务暂时不可用')
    let user = this.users.get(phone)
    if (!user) { user = { id: randomUUID(), phone }; this.users.set(phone, user) }
    return await this.issue(user, context)
  }

  async refresh(refreshToken: string) {
    if (!refreshToken || refreshToken.length > 200) throw new UnauthorizedException('refresh token 无效')
    const tokenHash = this.hash(refreshToken)
    if (this.database.db) {
      try {
        const [row] = await this.database.db.select({ token: refreshTokens, user: users }).from(refreshTokens).innerJoin(users, eq(refreshTokens.userId, users.id)).where(eq(refreshTokens.tokenHash, tokenHash)).limit(1)
        if (!row || row.token.expiresAt.getTime() <= Date.now()) throw new UnauthorizedException('refresh token 已失效')
        await this.database.db.delete(refreshTokens).where(eq(refreshTokens.tokenHash, tokenHash))
        return await this.issue({ id: row.user.id, phone: row.user.phone }, { userAgent: row.token.userAgent ?? undefined, ipAddress: row.token.ipAddress ?? undefined })
      } catch (error) {
        if (error instanceof UnauthorizedException) throw error
        throw new UnauthorizedException('refresh token 暂不可用')
      }
    }
    const session = this.memorySessions.get(tokenHash)
    if (!session || session.refreshExpiresAt <= Date.now()) throw new UnauthorizedException('refresh token 已失效')
    this.memorySessions.delete(tokenHash)
    return await this.issue(session.user, session)
  }

  async logout(refreshToken?: string) {
    if (refreshToken) {
      const tokenHash = this.hash(refreshToken)
      this.memorySessions.delete(tokenHash)
      if (this.database.db) await this.database.db.delete(refreshTokens).where(eq(refreshTokens.tokenHash, tokenHash)).catch(() => undefined)
    }
    return { success: true }
  }

  async me(userId: string) {
    if (this.database.db) {
      try { const [user] = await this.database.db.select().from(users).where(eq(users.id, userId)).limit(1); if (user) return { id: user.id, phone: user.phone, name: user.displayName ?? user.phone, avatar: user.avatar ?? undefined } } catch { /* fall through */ }
    }
    const user = [...this.users.values()].find((item) => item.id === userId)
    if (!user) throw new UnauthorizedException()
    return { ...user, name: user.phone }
  }

  async updateProfile(userId: string, patch: { displayName?: string; avatar?: string | null }) {
    const displayName = patch.displayName?.trim()
    if (displayName !== undefined && (displayName.length < 1 || displayName.length > 80)) throw new HttpException('昵称长度须为 1-80 个字符', HttpStatus.BAD_REQUEST)
    if (patch.avatar !== undefined && patch.avatar !== null && patch.avatar.length > 1000) throw new HttpException('头像地址过长', HttpStatus.BAD_REQUEST)
    if (this.database.db) {
      const [user] = await this.database.db.update(users).set({ ...(displayName !== undefined ? { displayName } : {}), ...(patch.avatar !== undefined ? { avatar: patch.avatar } : {}) }).where(eq(users.id, userId)).returning()
      if (!user) throw new UnauthorizedException()
      return { id: user.id, phone: user.phone, name: user.displayName ?? user.phone, avatar: user.avatar ?? undefined }
    }
    const user = [...this.users.values()].find((item) => item.id === userId)
    if (!user) throw new UnauthorizedException()
    user.displayName = displayName ?? user.displayName
    user.avatar = patch.avatar === undefined ? user.avatar : (patch.avatar ?? undefined)
    return { id: user.id, phone: user.phone, name: user.displayName ?? user.phone, avatar: user.avatar }
  }

  async sessions(userId: string, currentSessionId?: string) {
    if (!this.database.db) return [...this.memorySessions.values()].filter((item) => item.user.id === userId).map((item) => ({ id: item.id, current: item.id === currentSessionId, userAgent: item.userAgent ?? '未知设备', ipAddress: item.ipAddress, createdAt: item.createdAt, lastUsedAt: item.lastUsedAt, expiresAt: new Date(item.refreshExpiresAt) }))
    const rows = await this.database.db.select().from(refreshTokens).where(eq(refreshTokens.userId, userId))
    return rows.filter((row) => row.expiresAt.getTime() > Date.now()).map((row) => ({ id: row.id, current: row.id === currentSessionId, userAgent: row.userAgent ?? '未知设备', ipAddress: row.ipAddress, createdAt: row.createdAt, lastUsedAt: row.lastUsedAt, expiresAt: row.expiresAt }))
  }

  async revokeSession(userId: string, sessionId: string) {
    if (!sessionId) throw new HttpException('会话 ID 不能为空', HttpStatus.BAD_REQUEST)
    if (this.database.db) {
      const result = await this.database.db.delete(refreshTokens).where(eq(refreshTokens.id, sessionId)).returning({ id: refreshTokens.id, userId: refreshTokens.userId })
      if (!result[0] || result[0].userId !== userId) throw new HttpException('会话不存在', HttpStatus.NOT_FOUND)
    } else {
      const entry = [...this.memorySessions.entries()].find(([, item]) => item.id === sessionId && item.user.id === userId)
      if (!entry) throw new HttpException('会话不存在', HttpStatus.NOT_FOUND)
      this.memorySessions.delete(entry[0])
    }
    return { success: true }
  }

  async revokeOtherSessions(userId: string, currentSessionId?: string) {
    if (!currentSessionId) throw new UnauthorizedException('当前会话无效')
    if (this.database.db) {
      await this.database.db.delete(refreshTokens).where(and(eq(refreshTokens.userId, userId), ne(refreshTokens.id, currentSessionId)))
    } else {
      for (const [hash, session] of this.memorySessions) if (session.user.id === userId && session.id !== currentSessionId) this.memorySessions.delete(hash)
    }
    return { success: true }
  }

  async history(userId: string) {
    if (!this.database.db) return (this.memoryHistory.get(userId) ?? []).slice(0, 50)
    return this.database.db.select().from(loginHistory).where(eq(loginHistory.userId, userId)).orderBy(desc(loginHistory.createdAt)).limit(50)
  }

  verifyAccess(token: string): AuthUser {
    const [header, body, signature] = token.split('.')
    const encoded = header && body ? `${header}.${body}` : ''
    if (!encoded || !signature || !this.safeEqual(signature, this.sign(encoded))) throw new UnauthorizedException('无效的访问令牌')
    try {
      const payload = JSON.parse(Buffer.from(body, 'base64url').toString()) as { sub?: string; phone?: string; exp?: number }
      if (!payload.sub || !payload.phone || !payload.exp) throw new Error('invalid claims')
      if (payload.exp <= Math.floor(Date.now() / 1000)) throw new UnauthorizedException('访问令牌已过期')
      return { id: payload.sub, phone: payload.phone, sessionId: typeof (payload as { sid?: unknown }).sid === 'string' ? (payload as { sid: string }).sid : undefined }
    } catch (error) { if (error instanceof UnauthorizedException) throw error; throw new UnauthorizedException('无效的访问令牌') }
  }

  private async issue(user: AuthUser, context: AuthContext = {}) {
    const now = Math.floor(Date.now() / 1000)
    const sessionId = randomUUID()
    const access = this.jwt({ sub: user.id, phone: user.phone, sid: sessionId, iat: now, exp: now + this.envNumber('ACCESS_TOKEN_TTL_SECONDS', 900) })
    const refresh = randomBytes(48).toString('base64url')
    const refreshHash = this.hash(refresh)
    const expiresAt = Date.now() + this.envNumber('REFRESH_TOKEN_TTL_SECONDS', 30 * 86400) * 1000
    const nowDate = new Date()
    this.memorySessions.set(refreshHash, { id: sessionId, user: { ...user, sessionId }, refreshExpiresAt: expiresAt, createdAt: nowDate, lastUsedAt: nowDate, ...context })
    const memoryEntry = { id: randomUUID(), userId: user.id, action: 'login', userAgent: context.userAgent, ipAddress: context.ipAddress, createdAt: nowDate }
    this.memoryHistory.set(user.id, [memoryEntry, ...(this.memoryHistory.get(user.id) ?? [])].slice(0, 50))
    if (this.database.db) {
      const write = this.database.db.insert(refreshTokens).values({ id: sessionId, userId: user.id, tokenHash: refreshHash, userAgent: context.userAgent?.slice(0, 500), ipAddress: context.ipAddress?.slice(0, 64), expiresAt: new Date(expiresAt) })
      if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') await write
      else void write.catch(() => undefined)
      void this.database.db.insert(loginHistory).values({ userId: user.id, action: 'login', userAgent: context.userAgent?.slice(0, 500), ipAddress: context.ipAddress?.slice(0, 64) }).catch(() => undefined)
    } else if (process.env.NODE_ENV === 'production' && process.env.DEMO_MODE !== 'true') {
      throw new UnauthorizedException('账户服务暂时不可用')
    }
    return { accessToken: access, refreshToken: refresh, user: { ...user, sessionId } }
  }

  private validatePhone(phone: string) { if (!/^1\d{10}$/.test(phone)) throw new UnauthorizedException('手机号格式错误') }
  private envNumber(name: string, fallback: number) { const value = Number(process.env[name]); return Number.isFinite(value) && value > 0 ? value : fallback }
  private jwt(payload: object) { const head = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url'); const body = Buffer.from(JSON.stringify(payload)).toString('base64url'); const value = `${head}.${body}`; return `${value}.${this.sign(value)}` }
  private sign(value: string) { return createHmac('sha256', this.secret).update(value).digest('base64url') }
  private hash(value: string) { return createHash('sha256').update(value).digest('hex') }
  private safeEqual(a: string, b: string) { const left = Buffer.from(a); const right = Buffer.from(b); return left.length === right.length && timingSafeEqual(left, right) }
}
