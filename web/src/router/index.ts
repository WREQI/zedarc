import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/AppLayout.vue'),
      children: [
        { path: '', name: 'home', component: () => import('../pages/HomePage.vue') },
        { path: 'market', name: 'market', component: () => import('../pages/MarketPage.vue') },
        { path: 'sector', name: 'sector', component: () => import('../pages/BoardListPage.vue') },
        { path: 'etf', name: 'etf', component: () => import('../pages/BoardListPage.vue') },
        { path: 'reports', name: 'reports', component: () => import('../pages/ReportsPage.vue') },
        { path: 'reports/:id', name: 'report-detail', component: () => import('../pages/ReportDetailPage.vue') },
        { path: 'alerts', name: 'alerts', component: () => import('../pages/AlertsPage.vue'), meta: { requiresAuth: true } },
        { path: 'stock/:code', name: 'stock-detail', component: () => import('../pages/StockDetailPage.vue') },
        { path: 'watchlist', name: 'watchlist', component: () => import('../pages/WatchlistPage.vue') },
        { path: 'trade', name: 'trade', component: () => import('../pages/TradePage.vue') },
        { path: 'news', name: 'news', component: () => import('../pages/NewsPage.vue') },
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
  if (to.meta.requiresAuth && !window.localStorage.getItem('zedarc-access-token')) return { path: '/account', query: { redirect: to.fullPath } }
})
