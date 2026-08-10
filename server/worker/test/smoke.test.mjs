import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

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
