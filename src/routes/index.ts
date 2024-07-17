import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import JoinPage from '@/views/JoinPage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/join',
    name: 'JoinPage',
    component: JoinPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
