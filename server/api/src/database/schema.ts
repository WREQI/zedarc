import { pgTable, uuid, varchar, integer, timestamp, uniqueIndex, primaryKey, numeric, boolean, jsonb, index } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  phone: varchar('phone', { length: 32 }).notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const refreshTokens = pgTable('refresh_tokens', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  tokenHash: varchar('token_hash', { length: 128 }).notNull().unique(),
  expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export const watchlistGroups = pgTable('watchlist_groups', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 64 }).notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userName: uniqueIndex('watchlist_groups_user_name_idx').on(table.userId, table.name), userSort: index('watchlist_groups_user_sort_idx').on(table.userId, table.sortOrder, table.createdAt) }))

export const watchlistItems = pgTable('watchlist_items', {
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 32 }).notNull(),
  name: varchar('name', { length: 128 }),
  groupId: uuid('group_id').references(() => watchlistGroups.id, { onDelete: 'set null' }),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ primary: primaryKey({ columns: [table.userId, table.code] }), groupSort: index('watchlist_items_group_sort_idx').on(table.userId, table.groupId, table.sortOrder, table.createdAt) }))

export const favorites = pgTable('favorites', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 32 }).notNull(),
  note: varchar('note', { length: 500 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userCode: uniqueIndex('favorites_user_code_idx').on(table.userId, table.code) }))

export const news = pgTable('news', {
  id: varchar('id', { length: 128 }).primaryKey(),
  title: varchar('title', { length: 300 }).notNull(),
  summary: varchar('summary', { length: 2000 }).notNull(),
  source: varchar('source', { length: 128 }).notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull(),
  codes: jsonb('codes').$type<string[]>().notNull().default([]),
  url: varchar('url', { length: 1000 }),
}, (table) => ({ publishedIdx: index('news_published_at_idx').on(table.publishedAt) }))

export const newsFavorites = pgTable('news_favorites', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  newsId: varchar('news_id', { length: 128 }).notNull().references(() => news.id, { onDelete: 'cascade' }),
  category: varchar('category', { length: 64 }).notNull().default('未分类'),
  tags: jsonb('tags').$type<string[]>().notNull().default([]),
  note: varchar('note', { length: 500 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userNews: uniqueIndex('news_favorites_user_news_idx').on(table.userId, table.newsId), userCreatedIdx: index('news_favorites_user_created_idx').on(table.userId, table.createdAt), userCategoryIdx: index('news_favorites_user_category_idx').on(table.userId, table.category) }))

export const reports = pgTable('reports', {
  id: varchar('id', { length: 128 }).primaryKey(),
  title: varchar('title', { length: 300 }).notNull(),
  institution: varchar('institution', { length: 200 }).notNull(),
  rating: varchar('rating', { length: 64 }).notNull(),
  targetPrice: numeric('target_price', { precision: 18, scale: 4 }),
  publishedAt: timestamp('published_at', { withTimezone: true }).notNull(),
  code: varchar('code', { length: 32 }).notNull(),
  summary: varchar('summary', { length: 4000 }).notNull(),
}, (table) => ({ codeIdx: index('reports_code_idx').on(table.code) }))

export const tradeAccounts = pgTable('trade_accounts', {
  userId: uuid('user_id').primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  cash: numeric('cash', { precision: 20, scale: 4 }).notNull().default('1000000'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export const tradeOrders = pgTable('trade_orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 32 }).notNull(),
  side: varchar('side', { length: 8 }).notNull(),
  quantity: integer('quantity').notNull(),
  price: numeric('price', { precision: 20, scale: 6 }).notNull(),
  fee: numeric('fee', { precision: 20, scale: 6 }).notNull().default('0'),
  status: varchar('status', { length: 16 }).notNull(),
  requestId: varchar('request_id', { length: 128 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userCreatedIdx: index('trade_orders_user_created_idx').on(table.userId, table.createdAt), requestIdIdx: uniqueIndex('trade_orders_user_request_idx').on(table.userId, table.requestId) }))

export const tradeTransactions = pgTable('trade_transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  orderId: uuid('order_id').notNull().references(() => tradeOrders.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 32 }).notNull(),
  side: varchar('side', { length: 8 }).notNull(),
  quantity: integer('quantity').notNull(),
  price: numeric('price', { precision: 20, scale: 6 }).notNull(),
  fee: numeric('fee', { precision: 20, scale: 6 }).notNull().default('0'),
  amount: numeric('amount', { precision: 20, scale: 6 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userCreatedIdx: index('trade_transactions_user_created_idx').on(table.userId, table.createdAt) }))

export const tradeCashFlows = pgTable('trade_cash_flows', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  orderId: uuid('order_id').notNull().references(() => tradeOrders.id, { onDelete: 'cascade' }),
  transactionId: uuid('transaction_id').notNull().references(() => tradeTransactions.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 16 }).notNull(),
  amount: numeric('amount', { precision: 20, scale: 6 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userCreatedIdx: index('trade_cash_flows_user_created_idx').on(table.userId, table.createdAt) }))

export const tradePositions = pgTable('trade_positions', {
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 32 }).notNull(),
  quantity: integer('quantity').notNull().default(0),
  available: integer('available').notNull().default(0),
  averagePrice: numeric('average_price', { precision: 20, scale: 6 }).notNull().default('0'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ primary: primaryKey({ columns: [table.userId, table.code] }) }))

export const userSettings = pgTable('user_settings', {
  userId: uuid('user_id').primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  settings: jsonb('settings').$type<Record<string, unknown>>().notNull().default({}),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

export const priceAlerts = pgTable('price_alerts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  code: varchar('code', { length: 32 }).notNull(),
  targetPrice: numeric('target_price', { precision: 20, scale: 6 }).notNull(),
  direction: varchar('direction', { length: 8 }).notNull(),
  repeat: boolean('repeat').notNull().default(false),
  enabled: boolean('enabled').notNull().default(true),
  lastTriggeredAt: timestamp('last_triggered_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userCodeIdx: index('price_alerts_user_code_idx').on(table.userId, table.code) }))

export const notifications = pgTable('notifications', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 32 }).notNull(),
  title: varchar('title', { length: 200 }).notNull(),
  content: varchar('content', { length: 2000 }).notNull(),
  readAt: timestamp('read_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({ userCreatedIdx: index('notifications_user_created_idx').on(table.userId, table.createdAt) }))

export type User = typeof users.$inferSelect
