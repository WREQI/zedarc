import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/AppLayout.vue'),
      children: [
        { path: '', name: 'home', redirect: '/watchlist' },
        { path: 'market', name: 'market', component: () => import('../pages/MarketPage.vue') },
        { path: 'market/rank', name: 'market-rank', component: () => import('../pages/MarketRankPage.vue') },
        { path: 'market/sentiment', name: 'market-sentiment', component: () => import('../pages/MarketSentimentPage.vue') },
        { path: 'market/limit-up', name: 'limit-up', component: () => import('../pages/LimitUpPage.vue') },
        { path: 'market/limit-down', name: 'limit-down', component: () => import('../pages/LimitDownPage.vue') },
        { path: 'market/calendar', name: 'financial-calendar', component: () => import('../pages/FinancialCalendarPage.vue') },
        { path: 'sector', name: 'sector', component: () => import('../pages/BoardListPage.vue') },
        { path: 'sector/:code', name: 'sector-detail', component: () => import('../pages/SectorDetailPage.vue') },
        { path: 'etf', name: 'etf', component: () => import('../pages/EtfPage.vue') },
        { path: 'etf/:code', name: 'etf-detail', component: () => import('../pages/EtfDetailPage.vue') },
        { path: 'market/global', name: 'global-market', component: () => import('../pages/GlobalMarketPage.vue') },
        { path: 'bond', name: 'bond', component: () => import('../pages/BondPage.vue') },
        { path: 'star-market', name: 'star-market', component: () => import('../pages/StarMarketPage.vue') },
        { path: 'reports', name: 'reports', component: () => import('../pages/ReportsPage.vue') },
        { path: 'reports/:id', name: 'report-detail', component: () => import('../pages/ReportDetailPage.vue') },
        { path: 'alerts', name: 'alerts', component: () => import('../pages/AlertsPage.vue'), meta: { requiresAuth: true } },
        { path: 'flash', name: 'flash-news', component: () => import('../pages/FlashNewsPage.vue') },
        { path: 'notifications', name: 'notifications', component: () => import('../pages/NotificationsPage.vue'), meta: { requiresAuth: true } },
        { path: 'history', name: 'history', component: () => import('../pages/HistoryPage.vue') },
        { path: 'settings', name: 'settings', component: () => import('../pages/SettingsPage.vue'), meta: { requiresAuth: true } },
        { path: 'profile', name: 'profile', component: () => import('../pages/ProfilePage.vue'), meta: { requiresAuth: true } },
        { path: 'security', name: 'security', component: () => import('../pages/SecurityPage.vue'), meta: { requiresAuth: true } },
        { path: 'devices', name: 'devices', component: () => import('../pages/DevicesPage.vue'), meta: { requiresAuth: true } },
        { path: 'feedback', name: 'feedback', component: () => import('../pages/FeedbackPage.vue') },
        { path: 'stock/:code', name: 'stock-detail', component: () => import('../pages/StockDetailPage.vue') },
        { path: 'watchlist', name: 'watchlist', component: () => import('../pages/WatchlistPage.vue') },
        { path: 'watchlist/groups', name: 'watchlist-groups', component: () => import('../pages/WatchlistGroupsPage.vue') },
        { path: 'trade', name: 'trade', component: () => import('../pages/TradePage.vue') },
        { path: 'trade/positions', name: 'trade-positions', component: () => import('../pages/TradePositionsPage.vue') },
        { path: 'trade/positions/:code', name: 'trade-position-detail', component: () => import('../pages/TradePositionDetailPage.vue') },
        { path: 'trade/orders', name: 'trade-orders', component: () => import('../pages/TradeOrdersPage.vue') },
        { path: 'trade/orders/:id', name: 'trade-order-detail', component: () => import('../pages/TradeOrderDetailPage.vue') },
        { path: 'trade/funds', name: 'trade-funds', component: () => import('../pages/TradeFundsPage.vue') },
        { path: 'trade/transactions', name: 'trade-transactions', component: () => import('../pages/TradeTransactionsPage.vue') },
        { path: 'news', name: 'news', component: () => import('../pages/NewsPage.vue') },
        { path: 'news/favorites', name: 'news-favorites', component: () => import('../pages/NewsFavoritesPage.vue'), meta: { requiresAuth: true } },
        { path: 'news/topics', name: 'news-topics', component: () => import('../pages/NewsTopicsPage.vue') },
        { path: 'news/topics/:id', name: 'news-topic-detail', component: () => import('../pages/NewsTopicDetailPage.vue') },
        { path: 'news/:id', name: 'news-detail', component: () => import('../pages/NewsDetailPage.vue') },
        { path: 'account', name: 'account', component: () => import('../pages/AccountPage.vue') },
        { path: 'search', name: 'search', component: () => import('../pages/SearchPage.vue') },
        { path: ':pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFoundPage.vue') },
      ],
    },
  ],
})

export default router

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.localStorage.getItem('zedarc-access-token') && !window.localStorage.getItem('zedarc-user')) return { path: '/account', query: { redirect: to.fullPath } }
})
