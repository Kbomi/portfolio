import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chuncheon-festival',
      name: 'chuncheon',
      // lazy-loaded
      component: () => import('../views/ChuncheonView.vue')
    },
    {
      path: '/jeju-festival',
      name: 'jeju',
      // lazy-loaded
      component: () => import('../views/JejuView.vue')
    }
  ]
})

export default router
