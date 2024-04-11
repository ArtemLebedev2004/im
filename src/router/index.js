import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'
import HistoryOfProblemsView from '@/views/HistoryOfProblemsView'
import AdminView from '@/views/AdminView'
import DescriptionModelView from '@/views/DescriptionModelView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/history_of_problems',
    name: 'historyOfProblems',
    component: HistoryOfProblemsView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/description',
    name: 'description',
    component: DescriptionModelView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router