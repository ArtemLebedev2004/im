import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import Portfolio from '@/views/HistoryOfProblemsView'
import AdminPortfolioView from '@/views/AdminPortfolioView'
import AdminOrdersView from '@/views/AdminOrdersView'
import DescriptionModelView from '@/views/DescriptionModelView'
import ProfileView from '@/views/ProfileView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/ap3841',
    name: 'adminPortfolio',
    component: AdminPortfolioView
  },
  {
    path: '/ao3841',
    name: 'adminOrders',
    component: AdminOrdersView
  },
  {
    path: '/description/:id',
    name: 'description',
    component: DescriptionModelView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router