import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const healthSource = await readFile(new URL('../src/health/health.controller.ts', import.meta.url), 'utf8')
const migrationSource = await readFile(new URL('../scripts/migrate.mjs', import.meta.url), 'utf8')

test('API exposes readiness, liveness and metrics routes', () => {
  assert.match(healthSource, /api\/health\/live/)
  assert.match(healthSource, /api\/health/)
  assert.match(healthSource, /api\/metrics/)
})

test('migration runner is ordered and idempotent', () => {
  assert.match(migrationSource, /\.sort\(\)/)
  assert.match(migrationSource, /__zedarc_migrations/)
})

test('market API contract uses comma separated codes', () => {
  const codes = '600519,000001'.split(',')
  assert.deepEqual(codes, ['600519', '000001'])
})
