import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import JoinPage from '@/views/JoinPage.vue'
import JoinSuccessPage from '@/views/JoinSuccessPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import MainPage from '@/views/MainPage.vue'

import GramView from '@/views/gram/GramView.vue'
import AnalyzeView from '@/views/analyze/AnalyzeView.vue'

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
      bnb: false,
      back: true
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
      bnb: false,
      back: true
    },
    component: LoginPage
  },
  {
    path: '/main',
    name: 'MainPage',
    meta: {
      bnb: true
    },
    component: MainPage,
    children: [
      {
        path: 'gram',
        component: GramView,
        meta: {
          logout: true
        }
      },
      {
        path: 'analyze',
        component: AnalyzeView,
        meta: {
          back: true,
          logout: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
