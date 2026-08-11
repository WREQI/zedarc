import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module.js'
import { AlertsModule } from './alerts/alerts.module.js'
import { KlineModule } from './kline/kline.module.js'
import { NotificationsModule } from './notifications/notifications.module.js'
import { DatabaseModule } from './database/database.module.js'
import { FavoritesModule } from './favorites/favorites.module.js'
import { HealthModule } from './health/health.module.js'
import { MarketModule } from './market/market.module.js'
import { NewsModule } from './news/news.module.js'
import { ReportsModule } from './reports/reports.module.js'
import { RealtimeModule } from './realtime/realtime.module.js'
import { TradeModule } from './trade/trade.module.js'
import { WatchlistModule } from './watchlist/watchlist.module.js'
import { SettingsModule } from './settings/settings.module.js'
import { CalendarModule } from './calendar/calendar.module.js'

@Module({ imports: [DatabaseModule, AuthModule, AlertsModule, NotificationsModule, KlineModule, WatchlistModule, FavoritesModule, HealthModule, MarketModule, RealtimeModule, NewsModule, ReportsModule, TradeModule, SettingsModule, CalendarModule] })
export class AppModule {}
