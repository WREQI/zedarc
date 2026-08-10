import type { RedisClientType } from 'redis'

type ActiveAlert = { id: string; userId: string; code: string; targetPrice: number; direction: 'above' | 'below'; repeat?: boolean; lastTriggeredAt?: number | null }
type Quote = { code: string; price: number; name?: string }

/** Evaluate the worker's Redis snapshot and publish each newly-triggered alert once. */
export async function checkPriceAlerts(redis: RedisClientType, now = Date.now(), cooldownMs = Number(process.env.ALERT_REPEAT_COOLDOWN_MS ?? 300000)) {
  if (!redis.isOpen) return 0
  const raw = await redis.get('alerts:active'); if (!raw) return 0
  const alerts = JSON.parse(raw) as ActiveAlert[]; const triggered: string[] = []; const remaining: ActiveAlert[] = []
  for (const alert of alerts) {
    const quoteRaw = await redis.get(`quote:${alert.code}`); const quote = quoteRaw ? JSON.parse(quoteRaw) as Quote : null
    if (!quote || !Number.isFinite(quote.price)) { remaining.push(alert); continue }
    const hit = alert.direction === 'above' ? quote.price >= alert.targetPrice : quote.price <= alert.targetPrice
    if (!hit) { remaining.push(alert); continue }
    if (alert.repeat && alert.lastTriggeredAt && now - alert.lastTriggeredAt < cooldownMs) { remaining.push(alert); continue }
    triggered.push(alert.id)
    await redis.publish(`notification:${alert.userId}`, JSON.stringify({ type: 'price-alert', userId: alert.userId, alertId: alert.id, title: `${alert.code} 价格提醒`, content: `${alert.code} 当前价 ${quote.price.toFixed(2)}，已${alert.direction === 'above' ? '达到' : '跌至'} ${alert.targetPrice.toFixed(2)}`, timestamp: now }))
    if (alert.repeat) remaining.push({ ...alert, lastTriggeredAt: now })
  }
  if (triggered.length) await redis.set('alerts:active', JSON.stringify(remaining))
  return triggered.length
}
