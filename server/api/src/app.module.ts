import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module.js'
import { DatabaseModule } from './database/database.module.js'
import { FavoritesModule } from './favorites/favorites.module.js'
import { HealthModule } from './health/health.module.js'
import { MarketModule } from './market/market.module.js'
import { NewsModule } from './news/news.module.js'
import { ReportsModule } from './reports/reports.module.js'
import { RealtimeModule } from './realtime/realtime.module.js'
import { TradeModule } from './trade/trade.module.js'
import { WatchlistModule } from './watchlist/watchlist.module.js'

@Module({ imports: [DatabaseModule, AuthModule, WatchlistModule, FavoritesModule, HealthModule, MarketModule, RealtimeModule, NewsModule, ReportsModule, TradeModule] })
export class AppModule {}
