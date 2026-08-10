import { Module } from '@nestjs/common'
import { MarketModule } from '../market/market.module.js'
import { KlineController } from './kline.controller.js'
import { KlineService } from './kline.service.js'
@Module({ imports: [MarketModule], controllers: [KlineController], providers: [KlineService] })
export class KlineModule {}
