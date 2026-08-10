import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import HomePage from '../pages/HomePage.vue'
import MarketPage from '../pages/MarketPage.vue'
import WatchlistPage from '../pages/WatchlistPage.vue'
import TradePage from '../pages/TradePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'market', name: 'market', component: MarketPage },
        { path: 'watchlist', name: 'watchlist', component: WatchlistPage },
        { path: 'trade', name: 'trade', component: TradePage },
        { path: 'news', name: 'news', component: HomePage },
        { path: 'account', name: 'account', component: HomePage },
      ],
    },
  ],
})

export default router
