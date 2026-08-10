import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module.js'
import { TradeController } from './trade.controller.js'
import { TradeService } from './trade.service.js'
@Module({ imports: [AuthModule], controllers: [TradeController], providers: [TradeService] })
export class TradeModule {}
