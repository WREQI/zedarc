import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const root = new URL('../../../', import.meta.url)
const rootPath = fileURLToPath(root)

async function readRoot(relativePath) {
  return readFile(new URL(relativePath, root), 'utf8')
}

test('production compose renders with explicit production secrets and no infrastructure ports', async () => {
  const result = spawnSync('docker', [
    'compose', '-f', 'docker-compose.yml', '-f', 'docker-compose.production.yml', 'config', '--quiet',
  ], {
    cwd: rootPath,
    encoding: 'utf8',
    env: {
      ...process.env,
      SERVER_NAME: 'market.example.test',
      TLS_CERT_DIR: '/etc/letsencrypt/live/market.example.test',
      JWT_SECRET: 'a-production-secret-that-is-longer-than-32-chars',
      SMS_PROVIDER: 'http',
      SMS_PROVIDER_URL: 'https://sms.example.test/send',
      SMS_PROVIDER_API_KEY: 'provided-out-of-band',
      SMS_TEMPLATE_ID: 'login-code',
      POSTGRES_PASSWORD: 'a-production-database-password',
    },
  })

  assert.equal(result.status, 0, result.stderr)

  const rendered = spawnSync('docker', [
    'compose', '-f', 'docker-compose.yml', '-f', 'docker-compose.production.yml', 'config',
  ], {
    cwd: rootPath,
    encoding: 'utf8',
    env: {
      ...process.env,
      SERVER_NAME: 'market.example.test',
      TLS_CERT_DIR: '/etc/letsencrypt/live/market.example.test',
      JWT_SECRET: 'a-production-secret-that-is-longer-than-32-chars',
      SMS_PROVIDER: 'http',
      SMS_PROVIDER_URL: 'https://sms.example.test/send',
      SMS_PROVIDER_API_KEY: 'provided-out-of-band',
      SMS_TEMPLATE_ID: 'login-code',
      POSTGRES_PASSWORD: 'a-production-database-password',
    },
  })
  assert.equal(rendered.status, 0, rendered.stderr)
  assert.match(rendered.stdout, /NODE_ENV: production/)
  assert.match(rendered.stdout, /SMS_PROVIDER: http/)
  assert.match(rendered.stdout, /target: \/etc\/nginx\/tls\/fullchain\.pem/)
  assert.match(rendered.stdout, /read_only: true/)
  assert.doesNotMatch(rendered.stdout, /3000:3000/)
  assert.doesNotMatch(rendered.stdout, /5432:5432/)
  assert.doesNotMatch(rendered.stdout, /6379:6379/)
})

test('production web proxy enforces TLS and baseline browser security headers', async () => {
  const nginx = await readRoot('web/nginx.prod.conf')
  assert.match(nginx, /return 301 https:\/\/\$host\$request_uri/)
  assert.match(nginx, /ssl_protocols TLSv1\.2 TLSv1\.3/)
  assert.match(nginx, /Strict-Transport-Security/)
  assert.match(nginx, /X-Content-Type-Options nosniff/)
  assert.match(nginx, /X-Frame-Options DENY/)
  assert.match(nginx, /Referrer-Policy strict-origin-when-cross-origin/)
  assert.match(nginx, /proxy_set_header Upgrade \$http_upgrade/)
})

test('production runbook documents recoverability and observable operations', async () => {
  const docs = await readRoot('docs/production.md')
  assert.match(docs, /docker compose -f docker-compose\.yml -f docker-compose\.production\.yml up -d --build/)
  assert.match(docs, /postgres-backup\.sh/)
  assert.match(docs, /postgres-restore\.sh/)
  assert.match(docs, /pg_restore --list/)
  assert.match(docs, /appendfsync everysec/)
  assert.match(docs, /docker compose logs --since=10m api web market-worker/)
  assert.match(docs, /备份超过 26 小时未成功/)
})
