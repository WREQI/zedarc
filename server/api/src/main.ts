import 'reflect-metadata'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { WsAdapter } from '@nestjs/platform-ws'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module.js'

const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
app.useWebSocketAdapter(new WsAdapter(app))
app.enableCors({ origin: true, credentials: true })
app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
const swagger = new DocumentBuilder().setTitle('Zedarc API').setDescription('行情与投资工作台 API').setVersion('0.1.0').build()
SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swagger))
await app.listen(Number(process.env.PORT ?? 3000), '0.0.0.0')
