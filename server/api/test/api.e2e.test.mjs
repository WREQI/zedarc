import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import WebSocket from 'ws'

const port = 3199
let child
let base

async function request(path, options = {}) {
  const response = await fetch(`${base}${path}`, options)
  const body = await response.json()
  return { response, body }
}

async function waitForServer() {
  const deadline = Date.now() + 15000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${base}/api/health/live`)
      if (response.ok) return
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 150))
  }
  throw new Error('API did not start in time')
}

test.before(async () => {
  child = spawn(process.execPath, ['dist/main.js'], {
    cwd: new URL('..', import.meta.url),
    env: { ...process.env, PORT: String(port), REDIS_URL: 'redis://127.0.0.1:6399', MOCK_LOGIN_CODE: '123456' },
    stdio: 'ignore',
  })
  base = `http://127.0.0.1:${port}`
  await waitForServer()
})

test.after(() => child?.kill('SIGTERM'))

test('health and compatibility-first response contract', async () => {
  const { response, body } = await request('/api/health/live')
  assert.equal(response.status, 200)
  assert.equal(body.status, 'ok')
  assert.equal(response.headers.get('x-api-contract-version'), '1')
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff')
  assert.equal(response.headers.get('x-frame-options'), 'SAMEORIGIN')

  const quotes = await request('/api/market/quotes?codes=600519,000001')
  assert.equal(quotes.response.status, 200)
  assert.ok(Array.isArray(quotes.body))
  assert.equal(quotes.body.length, 2)
})

test('limit board rankings use explicit limit status and prices', async () => {
  const up = await request('/api/market/rankings?type=limit-up&limit=100')
  const down = await request('/api/market/rankings?type=limit-down&limit=100')
  assert.equal(up.response.status, 200)
  assert.equal(down.response.status, 200)
  assert.ok(Array.isArray(up.body))
  assert.ok(Array.isArray(down.body))
  for (const row of up.body) {
    assert.equal(row.limitStatus, 'up')
    assert.ok(row.limitUp === null || typeof row.limitUp === 'number')
    assert.ok(row.limitDown === null || typeof row.limitDown === 'number')
  }
  for (const row of down.body) {
    assert.equal(row.limitStatus, 'down')
    assert.ok(row.limitUp === null || typeof row.limitUp === 'number')
    assert.ok(row.limitDown === null || typeof row.limitDown === 'number')
  }
})

test('auth, watchlist and trade contracts', async () => {
  const login = await request('/api/auth/login', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ phone: '13800138000', code: '123456' }),
  })
  assert.equal(login.response.status, 201)
  assert.ok(login.body.accessToken)
  const auth = { authorization: `Bearer ${login.body.accessToken}`, 'content-type': 'application/json' }

  const me = await request('/api/auth/me', { headers: auth })
  assert.equal(me.body.phone, '13800138000')

  const profile = await request('/api/auth/profile', { method: 'PATCH', headers: auth, body: JSON.stringify({ displayName: '测试用户' }) })
  assert.equal(profile.response.status, 200)
  assert.equal(profile.body.name, '测试用户')
  const sessions = await request('/api/auth/sessions', { headers: auth })
  assert.equal(sessions.response.status, 200)
  assert.ok(Array.isArray(sessions.body))
  assert.ok(sessions.body.some((session) => session.current === true))
  const history = await request('/api/auth/login-history', { headers: auth })
  assert.equal(history.response.status, 200)
  assert.ok(Array.isArray(history.body))
  assert.ok(history.body.some((item) => item.action === 'login'))
  const settings = await request('/api/settings', { headers: auth })
  assert.equal(settings.response.status, 200)
  const updatedSettings = await request('/api/settings', { method: 'PATCH', headers: auth, body: JSON.stringify({ pushNotifications: false, privacyMode: true }) })
  assert.equal(updatedSettings.body.pushNotifications, false)
  assert.equal(updatedSettings.body.privacyMode, true)
  const otherSession = await request('/api/auth/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ phone: '13800138000', code: '123456' }) })
  assert.equal(otherSession.response.status, 201)
  const sessionsBeforeRevoke = await request('/api/auth/sessions', { headers: { authorization: `Bearer ${otherSession.body.accessToken}` } })
  assert.ok(sessionsBeforeRevoke.body.length >= 2)
  const revoked = await request('/api/auth/sessions/revoke-others', { method: 'POST', headers: { authorization: `Bearer ${otherSession.body.accessToken}` } })
  assert.equal(revoked.body.success, true)
  const sessionsAfterRevoke = await request('/api/auth/sessions', { headers: { authorization: `Bearer ${otherSession.body.accessToken}` } })
  assert.ok(sessionsAfterRevoke.body.every((session) => session.current))

  const added = await request('/api/watchlist', { method: 'POST', headers: auth, body: JSON.stringify({ code: '600519', name: '贵州茅台' }) })
  assert.equal(added.response.status, 201)
  assert.equal(added.body.code, '600519')
  const list = await request('/api/watchlist', { headers: auth })
  assert.ok(Array.isArray(list.body))

  const preview = await request('/api/trade/orders/preview', { method: 'POST', headers: auth, body: JSON.stringify({ code: '600519', side: 'buy', quantity: 100, price: 10 }) })
  assert.equal(preview.response.status, 201)
  assert.equal(preview.body.valid, true)
  assert.equal(typeof preview.body.fee, 'number')
  assert.equal(typeof preview.body.tradingSession.open, 'boolean')

  const requestId = 'trade-contract-idempotency-1'
  const order = await request('/api/trade/orders', { method: 'POST', headers: auth, body: JSON.stringify({ code: '600519', quantity: 100, price: 10, requestId }) })
  assert.equal(order.response.status, 201)
  assert.equal(order.body.status, 'filled')
  const duplicate = await request('/api/trade/orders', { method: 'POST', headers: auth, body: JSON.stringify({ code: '600519', quantity: 100, price: 10, requestId }) })
  assert.equal(duplicate.response.status, 201)
  assert.equal(duplicate.body.id, order.body.id)
  const account = await request('/api/trade/account', { headers: auth })
  assert.equal(account.body.userId, login.body.user.id)
})

test('watchlist groups and price alerts support sync and lifecycle operations', async () => {
  const login = await request('/api/auth/login', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ phone: '13800138001', code: '123456' }) })
  assert.equal(login.response.status, 201)
  const auth = { authorization: `Bearer ${login.body.accessToken}`, 'content-type': 'application/json' }
  const group = await request('/api/watchlist/groups', { method: 'POST', headers: auth, body: JSON.stringify({ name: '价格提醒测试' }) })
  assert.equal(group.response.status, 201)
  const item = await request(`/api/watchlist/groups/${group.body.id}/items`, { method: 'POST', headers: auth, body: JSON.stringify({ code: '000001' }) })
  assert.equal(item.response.status, 201)
  const grouped = await request(`/api/watchlist/groups/${group.body.id}/items`, { headers: auth })
  assert.equal(grouped.body[0].code, '000001')
  const alert = await request('/api/alerts', { method: 'POST', headers: auth, body: JSON.stringify({ code: '000001', targetPrice: 12.5, direction: 'above', repeat: true }) })
  assert.equal(alert.response.status, 201)
  assert.equal(alert.body.enabled, true)
  assert.equal(alert.body.targetPrice, 12.5)
  const paused = await request(`/api/alerts/${alert.body.id}`, { method: 'PATCH', headers: auth, body: JSON.stringify({ enabled: false }) })
  assert.equal(paused.body.enabled, false)
  const removed = await request(`/api/alerts/${alert.body.id}`, { method: 'DELETE', headers: { authorization: auth.authorization } })
  assert.equal(removed.body.deleted, true)
  const deletedGroup = await request(`/api/watchlist/groups/${group.body.id}`, { method: 'DELETE', headers: { authorization: auth.authorization } })
  assert.equal(deletedGroup.body.success, true)
})

test('authentication rejects malformed credentials with a stable error', async () => {
  const response = await request('/api/auth/login', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ phone: 'not-a-phone', code: '123456' }),
  })
  assert.equal(response.response.status, 401)
  assert.equal(response.body.error.status, 401)
})

test('unauthorized and malformed token errors are stable', async () => {
  const missing = await request('/api/auth/me')
  assert.equal(missing.response.status, 401)
  assert.equal(missing.body.error.status, 401)
  assert.equal(missing.body.error.code, 'UNAUTHORIZED')

  const malformed = await request('/api/auth/me', { headers: { authorization: 'Bearer a.b.not-json' } })
  assert.equal(malformed.response.status, 401)
  assert.equal(malformed.body.error.code, 'UNAUTHORIZED')
})

test('kline indicators expose the data source contract', async () => {
  const kline = await request('/api/kline/indicators?code=600519&period=daily')
  assert.equal(kline.response.status, 200)
  assert.ok(['api', 'mock', 'unknown'].includes(kline.body.dataSource))
  assert.equal(typeof kline.body.source, 'string')
  assert.ok(Array.isArray(kline.body.indicators))
})

test('sector and ETF collections expose availability without fabricated snapshots', async () => {
  const sectors = await request('/api/market/sectors?kind=industry')
  assert.equal(sectors.response.status, 200)
  assert.ok(Array.isArray(sectors.body.items))
  assert.equal(sectors.body.total, sectors.body.items.length)
  assert.equal(typeof sectors.body.availability.available, 'boolean')

  const etfs = await request('/api/market/etfs?limit=10')
  assert.equal(etfs.response.status, 200)
  assert.ok(Array.isArray(etfs.body.items))
  assert.equal(etfs.body.total, etfs.body.items.length)
  assert.equal(typeof etfs.body.availability.available, 'boolean')
  if (!etfs.body.availability.available) assert.equal(etfs.body.items.length, 0)
})

test('stock detail exposes stable market contracts and explicit pre-market unavailability', async () => {
  const detail = await request('/api/market/detail?code=600519')
  assert.equal(detail.response.status, 200)
  assert.equal(detail.body.code, '600519')
  assert.ok(Array.isArray(detail.body.orderBook.bids))
  assert.ok(Array.isArray(detail.body.orderBook.asks))
  assert.ok(Array.isArray(detail.body.trades.items))
  assert.ok(Array.isArray(detail.body.capitalFlow.items))
  assert.ok(Array.isArray(detail.body.capitalFlow.series))
  assert.ok(detail.body.financials && Array.isArray(detail.body.financials.items))
  assert.equal(detail.body.preMarket.quote, null)
  assert.equal(detail.body.preMarket.availability.available, false)

  const intraday = await request('/api/market/intraday?code=600519')
  assert.equal(intraday.response.status, 200)
  assert.ok(Array.isArray(intraday.body))
})

test('news and reports expose bounded pagination and filter contracts', async () => {
  const news = await request('/api/news?page=1&pageSize=1&code=000001')
  assert.equal(news.response.status, 200)
  assert.equal(news.body.page, 1)
  assert.equal(news.body.pageSize, 1)
  assert.equal(news.body.totalPages, 1)
  assert.equal(news.body.hasNext, false)
  assert.ok(Array.isArray(news.body.items))

  const reports = await request('/api/reports?rating=%E5%A2%9E%E6%8C%81&institution=Zedarc%20Research')
  assert.equal(reports.response.status, 200)
  assert.equal(reports.body.items[0].rating, '增持')

  const invalid = await request('/api/news?page=0&pageSize=101')
  assert.equal(invalid.response.status, 400)
  assert.equal(invalid.body.error.code, 'BADREQUEST')
})

test('realtime contract exposes market websocket subscriptions', async () => {
  const socket = new WebSocket(`ws://127.0.0.1:${port}/ws/market`)
  const messages = []
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('WebSocket handshake timed out')), 5000)
    socket.on('message', (value) => {
      const message = JSON.parse(value.toString())
      messages.push(message)
      if (message.type === 'connected') socket.send(JSON.stringify({ event: 'subscribe', data: { codes: ['600519'], types: ['quote'] } }))
      if (message.type === 'subscribed') { clearTimeout(timer); resolve() }
    })
    socket.on('error', reject)
  })
  assert.equal(messages[0].type, 'connected')
  assert.equal(messages[0].subscriptionRequired, true)
  assert.deepEqual(messages.at(-1).codes, ['600519'])

  socket.send(JSON.stringify({ event: 'status', data: {} }))
  const status = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('WebSocket status timed out')), 5000)
    socket.on('message', (value) => {
      const message = JSON.parse(value.toString())
      if (message.type === 'status') { clearTimeout(timer); resolve(message) }
    })
  })
  assert.deepEqual(status.codes, ['600519'])

  socket.send(JSON.stringify({ event: 'subscribe', data: { codes: [] } }))
  const error = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('WebSocket validation timed out')), 5000)
    socket.on('message', (value) => {
      const message = JSON.parse(value.toString())
      if (message.type === 'error') { clearTimeout(timer); resolve(message) }
    })
  })
  assert.equal(error.code, 'INVALID_SUBSCRIPTION')
  socket.close()
})
