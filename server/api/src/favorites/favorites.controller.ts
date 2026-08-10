import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard.js'
import type { AuthUser } from '../auth/auth.service.js'
import { FavoritesService } from './favorites.service.js'

@ApiTags('favorites') @ApiBearerAuth() @UseGuards(AuthGuard) @Controller('api/favorites')
export class FavoritesController {
  constructor(private readonly service: FavoritesService) {}
  @Get() list(@Req() req: { user: AuthUser }) { return this.service.list(req.user.id) }
  @Post() add(@Req() req: { user: AuthUser }, @Body() body: { code: string; note?: string }) { return this.service.upsert(req.user.id, body) }
  @Patch(':id') update(@Req() req: { user: AuthUser }, @Param('id') id: string, @Body() body: { note?: string }) { return this.service.update(req.user.id, id, body.note) }
  @Delete(':id') remove(@Req() req: { user: AuthUser }, @Param('id') id: string) { return this.service.remove(req.user.id, id) }
}
