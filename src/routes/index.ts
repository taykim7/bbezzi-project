import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import JoinPage from '@/views/JoinPage.vue'
import JoinSuccessPage from '@/views/JoinSuccessPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'

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
  },
  {
    path: '/join-success',
    name: 'JoinSuccessPage',
    component: JoinSuccessPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
