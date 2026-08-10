import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import HomePage from '../pages/HomePage.vue'
import MarketPage from '../pages/MarketPage.vue'
import WatchlistPage from '../pages/WatchlistPage.vue'
import TradePage from '../pages/TradePage.vue'
import NewsPage from '../pages/NewsPage.vue'
import AccountPage from '../pages/AccountPage.vue'
import StockDetailPage from '../pages/StockDetailPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import NewsDetailPage from '../pages/NewsDetailPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import BoardListPage from '../pages/BoardListPage.vue'
import ReportsPage from '../pages/ReportsPage.vue'
import ReportDetailPage from '../pages/ReportDetailPage.vue'
import AlertsPage from '../pages/AlertsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'market', name: 'market', component: MarketPage },
        { path: 'sector', name: 'sector', component: BoardListPage },
        { path: 'etf', name: 'etf', component: BoardListPage },
        { path: 'reports', name: 'reports', component: ReportsPage },
        { path: 'reports/:id', name: 'report-detail', component: ReportDetailPage },
        { path: 'alerts', name: 'alerts', component: AlertsPage },
        { path: 'stock/:code', name: 'stock-detail', component: StockDetailPage },
        { path: 'watchlist', name: 'watchlist', component: WatchlistPage },
        { path: 'trade', name: 'trade', component: TradePage },
        { path: 'news', name: 'news', component: NewsPage },
        { path: 'news/:id', name: 'news-detail', component: NewsDetailPage },
        { path: 'account', name: 'account', component: AccountPage },
        { path: 'search', name: 'search', component: SearchPage },
        { path: ':pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
      ],
    },
  ],
})

export default router
