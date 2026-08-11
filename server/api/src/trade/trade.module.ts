import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module.js'
import { RealtimeModule } from '../realtime/realtime.module.js'
import { MarketModule } from '../market/market.module.js'
import { TradeController } from './trade.controller.js'
import { TradeService } from './trade.service.js'
@Module({ imports: [AuthModule, RealtimeModule, MarketModule], controllers: [TradeController], providers: [TradeService] })
export class TradeModule {}
