import { Controller, Get, Header, ServiceUnavailableException } from '@nestjs/common'
import { DatabaseService } from '../database/database.service.js'

@Controller()
export class HealthController {
  constructor(private readonly database: DatabaseService) {}

  @Get('api/health/live')
  getLiveness() {
    return { status: 'ok', service: 'zedarc-api', timestamp: new Date().toISOString() }
  }

  @Get('api/health')
  async getReadiness() {
    try {
      if (!this.database.pool) throw new Error('DATABASE_URL is not configured')
      await this.database.pool.query('SELECT 1')
      return { status: 'ok', service: 'zedarc-api', dependencies: { postgres: 'ok' }, timestamp: new Date().toISOString() }
    } catch (error) {
      throw new ServiceUnavailableException({ status: 'degraded', service: 'zedarc-api', dependencies: { postgres: 'unavailable' }, error: error instanceof Error ? error.message : 'database unavailable' })
    }
  }

  @Get('api/metrics')
  @Header('content-type', 'text/plain; version=0.0.4')
  getMetrics() {
    return [
      '# HELP zedarc_api_uptime_seconds API process uptime in seconds',
      '# TYPE zedarc_api_uptime_seconds gauge',
      `zedarc_api_uptime_seconds ${process.uptime()}`,
    ].join('\\n') + '\\n'
  }
}
