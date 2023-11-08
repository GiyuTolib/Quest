import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/solve',
      name: 'solve',
      component: () => import('../views/solveTest.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/create.vue')
    }
  ]
})

export default router
