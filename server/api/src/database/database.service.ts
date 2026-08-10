import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema.js'

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  readonly pool: Pool | null
  readonly db: NodePgDatabase<typeof schema> | null

  constructor() {
    this.pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null
    this.db = this.pool ? drizzle(this.pool, { schema }) : null
  }

  async onModuleDestroy() { if (this.pool) await this.pool.end() }
}
