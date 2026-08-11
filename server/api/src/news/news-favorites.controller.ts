import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { NewsFavoritesService, type NewsFavoriteMetadata } from './news-favorites.service.js'

@ApiTags('news-favorites') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/news/favorites')
export class NewsFavoritesController {
  constructor(private readonly service: NewsFavoritesService) {}
  @Get() list(@Req() req: { user: AuthUser }, @Query('category') category?: string, @Query('tag') tag?: string, @Query('keyword') keyword?: string, @Query('note') note?: string) { return this.service.list(req.user.id, { category, tag, keyword, note }) }
  @Post() add(@Req() req: { user: AuthUser }, @Body() body: { newsId: string; category?: string; tags?: string[]; note?: string }) { return this.service.add(req.user.id, body.newsId, body) }
  @Patch('batch') updateBatch(@Req() req: { user: AuthUser }, @Body() body: { newsIds: string[] } & NewsFavoriteMetadata) { return this.service.updateBatch(req.user.id, body.newsIds, body) }
  @Delete('batch') removeBatch(@Req() req: { user: AuthUser }, @Body() body: { newsIds: string[] }) { return this.service.removeBatch(req.user.id, body.newsIds) }
  @Patch(':newsId') update(@Req() req: { user: AuthUser }, @Param('newsId') newsId: string, @Body() body: NewsFavoriteMetadata) { return this.service.update(req.user.id, newsId, body) }
  @Delete(':newsId') remove(@Req() req: { user: AuthUser }, @Param('newsId') newsId: string) { return this.service.remove(req.user.id, newsId) }
}
