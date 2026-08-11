import 'reflect-metadata'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { WsAdapter } from '@nestjs/platform-ws'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module.js'
import { ApiExceptionFilter } from './common/api-exception.filter.js'
import { ApiResponseInterceptor } from './common/api-response.interceptor.js'
import { corsOrigins, rateLimitConfig } from './common/security.js'
import { log, requestId } from './common/structured-logger.js'

export async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ bodyLimit: 1024 * 1024 }))
  const fastify = app.getHttpAdapter().getInstance()
  fastify.register((await import('@fastify/helmet')).default)
  fastify.register((await import('@fastify/rate-limit')).default, rateLimitConfig)
  fastify.addHook('onRequest', async (request, reply) => {
    const id = requestId(request.headers['x-request-id'])
    reply.header('x-request-id', id)
    ;(request as typeof request & { zedarcRequestId?: string }).zedarcRequestId = id
    ;(request as typeof request & { zedarcStartedAt?: number }).zedarcStartedAt = Date.now()
  })
  fastify.addHook('onResponse', async (request, reply) => {
    log('info', 'http.request', {
      requestId: (request as typeof request & { zedarcRequestId?: string }).zedarcRequestId,
      method: request.method,
      path: request.url,
      statusCode: reply.statusCode,
      durationMs: Date.now() - ((request as typeof request & { zedarcStartedAt?: number }).zedarcStartedAt ?? Date.now()),
    })
  })
  app.useWebSocketAdapter(new WsAdapter(app))
  app.enableCors({ origin: corsOrigins(), credentials: true })
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }))
  app.useGlobalFilters(new ApiExceptionFilter())
  app.useGlobalInterceptors(new ApiResponseInterceptor())
  const swagger = new DocumentBuilder().setTitle('Zedarc API').setDescription('行情与投资工作台 API').setVersion('0.1.0').build()
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swagger))
  await app.listen(Number(process.env.PORT ?? 3000), '0.0.0.0')
  return app
}

if (process.argv[1]?.endsWith('/main.js') || process.argv[1]?.endsWith('\\\\main.js')) await bootstrap()
