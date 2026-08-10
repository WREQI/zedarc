export const corsOrigins = () => {
  const configured = process.env.CORS_ORIGINS?.split(',').map((value) => value.trim()).filter(Boolean)
  return configured?.length ? configured : true
}

export const rateLimitConfig = {
  max: Number(process.env.RATE_LIMIT_MAX ?? 120),
  timeWindow: process.env.RATE_LIMIT_WINDOW ?? '1 minute',
  errorResponseBuilder: (_request: unknown, context: { max: number; after: string }) => ({
    error: { code: 'RATE_LIMITED', status: 429, message: `请求过于频繁，请在 ${context.after} 后重试`, retryAfter: context.after },
  }),
}
