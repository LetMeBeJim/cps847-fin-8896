import {createRouter,createWebHistory} from 'vue-router'

import Home from '../components/MainPage.vue'
import ForecastPage from '../components/ForecastPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: Home
  },
  {
    path: '/forecast',
    name: 'Forecast',
    component: ForecastPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router