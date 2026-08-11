#!/usr/bin/env node
import { readFile } from 'node:fs/promises'

const templateMode = process.argv.includes('--template')
const source = templateMode ? await readFile(new URL('./production-env.example', import.meta.url), 'utf8') : null
const env = source
  ? Object.fromEntries(source.split(/\r?\n/).filter((line) => line && !line.startsWith('#') && line.includes('=')).map((line) => line.split(/=(.*)/s, 2)))
  : process.env
const required = ['JWT_SECRET', 'POSTGRES_PASSWORD', 'DATABASE_URL', 'REDIS_URL', 'REDIS_PASSWORD', 'CORS_ORIGINS', 'SMS_PROVIDER', 'SMS_PROVIDER_URL', 'SMS_PROVIDER_API_KEY', 'SMS_TEMPLATE_ID', 'MARKET_CODES']
const errors = []
for (const key of required) if (!env[key] || (!templateMode && env[key].includes('CHANGE_ME'))) errors.push(`${key} is required`)
if (env.NODE_ENV === 'production' || templateMode) {
  if (env.SMS_PROVIDER !== 'http') errors.push('SMS_PROVIDER must be http in production; mock SMS is not accepted')
  if (!templateMode && (env.JWT_SECRET?.length < 32 || env.JWT_SECRET?.includes('example'))) errors.push('JWT_SECRET must be a unique value of at least 32 characters')
  if (!templateMode && (env.POSTGRES_PASSWORD?.length < 16 || env.POSTGRES_PASSWORD?.includes('example'))) errors.push('POSTGRES_PASSWORD must be a unique value of at least 16 characters')
  if (!templateMode && (env.REDIS_PASSWORD?.length < 16 || env.REDIS_PASSWORD?.includes('example'))) errors.push('REDIS_PASSWORD must be a unique value of at least 16 characters')
  for (const key of ['DATABASE_URL', 'REDIS_URL', 'SMS_PROVIDER_URL']) {
    try { new URL(env[key]) } catch { errors.push(`${key} must be an absolute URL`) }
  }
  if (env.CORS_ORIGINS === '*') errors.push('CORS_ORIGINS must be an explicit HTTPS origin list')
  if (env.CORS_ORIGINS && env.CORS_ORIGINS.split(',').some((origin) => !origin.trim().startsWith('https://'))) errors.push('CORS_ORIGINS entries must use HTTPS')
}
if (errors.length) {
  console.error(JSON.stringify({ level: 'error', event: 'production.config.invalid', errors }))
  process.exit(1)
}
console.log(JSON.stringify({ level: 'info', event: 'production.config.valid', checked: required }))
