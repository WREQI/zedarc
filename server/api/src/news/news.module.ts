import { Module } from '@nestjs/common'
import { NewsController } from './news.controller.js'
import { NewsService } from './news.service.js'
import { NewsFavoritesController } from './news-favorites.controller.js'
import { NewsFavoritesService } from './news-favorites.service.js'
import { NewsRecommendationService } from './news-recommendation.service.js'
import { AuthModule } from '../auth/auth.module.js'
@Module({ imports: [AuthModule], controllers: [NewsController, NewsFavoritesController], providers: [NewsService, NewsFavoritesService, NewsRecommendationService] })
export class NewsModule {}
