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

  const quotes = await request('/api/market/quotes?codes=600519,000001')
  assert.equal(quotes.response.status, 200)
  assert.ok(Array.isArray(quotes.body))
  assert.equal(quotes.body.length, 2)
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

test('unauthorized and malformed token errors are stable', async () => {
  const missing = await request('/api/auth/me')
  assert.equal(missing.response.status, 401)
  assert.equal(missing.body.error.status, 401)
  assert.equal(missing.body.error.code, 'UNAUTHORIZED')

  const malformed = await request('/api/auth/me', { headers: { authorization: 'Bearer a.b.not-json' } })
  assert.equal(malformed.response.status, 401)
  assert.equal(malformed.body.error.code, 'UNAUTHORIZED')
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
  assert.deepEqual(messages.at(-1).codes, ['600519'])
  socket.close()
})
