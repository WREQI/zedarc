import { readdir, readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const { Client } = pg
const migrationsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'drizzle')
const client = new Client({ connectionString: process.env.DATABASE_URL ?? 'postgresql://localhost/zedarc' })

try {
  await client.connect()
  await client.query(`CREATE TABLE IF NOT EXISTS __zedarc_migrations (
    id text PRIMARY KEY,
    applied_at timestamptz NOT NULL DEFAULT now()
  )`)
  const files = (await readdir(migrationsDir)).filter((file) => file.endsWith('.sql')).sort()
  for (const file of files) {
    const applied = await client.query('SELECT 1 FROM __zedarc_migrations WHERE id = $1', [file])
    if (applied.rowCount) continue
    await client.query('BEGIN')
    try {
      await client.query(await readFile(join(migrationsDir, file), 'utf8'))
      await client.query('INSERT INTO __zedarc_migrations (id) VALUES ($1)', [file])
      await client.query('COMMIT')
      console.log(`[migration] applied ${file}`)
    } catch (error) {
      await client.query('ROLLBACK')
      throw error
    }
  }
  console.log('[migration] database is up to date')
} catch (error) {
  console.error('[migration] failed:', error instanceof Error ? error.message : error)
  process.exitCode = 1
} finally {
  await client.end().catch(() => undefined)
}
