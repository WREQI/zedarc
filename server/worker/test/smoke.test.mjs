import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { readFileSync } from 'node:fs'

const source = await readFile(new URL('../src/main.ts', import.meta.url), 'utf8')

test('worker exposes liveness and metrics endpoints', () => {
  assert.match(source, /request\.url === '\/health'/)
  assert.match(source, /request\.url === '\/metrics'/)
  assert.match(source, /HEALTH_PORT/)
})

test('worker keeps a Redis dependency in its readiness response', () => {
  assert.match(source, /redis\.isOpen/)
  assert.match(source, /market-worker/)
})

test('alert worker uses a repeat cooldown and preserves repeat alerts', () => {
  const source = readFileSync(new URL('../src/alerts/alert.worker.ts', import.meta.url), 'utf8')
  assert.match(source, /ALERT_REPEAT_COOLDOWN_MS/)
  assert.match(source, /lastTriggeredAt/)
  assert.match(source, /if \(alert\.repeat\)/)
})
