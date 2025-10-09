import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Setting from '@/components/pages/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ],
})

export default router
