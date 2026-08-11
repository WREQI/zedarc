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

  const added = await request('/api/watchlist', { method: 'POST', headers: auth, body: JSON.stringify({ code: '600519', name: '贵州茅台' }) })
  assert.equal(added.response.status, 201)
  assert.equal(added.body.code, '600519')
  const list = await request('/api/watchlist', { headers: auth })
  assert.ok(Array.isArray(list.body))

  const order = await request('/api/trade/orders', { method: 'POST', headers: auth, body: JSON.stringify({ code: '600519', quantity: 100, price: 10 }) })
  assert.equal(order.response.status, 201)
  assert.equal(order.body.status, 'filled')
  const account = await request('/api/trade/account', { headers: auth })
  assert.equal(account.body.userId, login.body.user.id)
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
