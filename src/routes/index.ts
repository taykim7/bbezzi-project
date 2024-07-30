import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import JoinPage from '@/views/JoinPage.vue'
import JoinSuccessPage from '@/views/JoinSuccessPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'
import AnalyzePage from '@/views/AnalyzePage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    meta: {
      bnb: false
    },
    component: LandingPage
  },
  {
    path: '/join',
    name: 'JoinPage',
    meta: {
      bnb: false
    },
    component: JoinPage
  },
  {
    path: '/join-success',
    name: 'JoinSuccessPage',
    meta: {
      bnb: false
    },
    component: JoinSuccessPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
      bnb: false
    },
    component: LoginPage
  },
  {
    path: '/main',
    name: 'MainPage',
    meta: {
      bnb: true
    },
    component: MainPage
  },
  {
    path: '/analyze',
    name: 'AnalyzePage',
    meta: {
      bnb: true
    },
    component: AnalyzePage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
