import { createRouter, createWebHistory } from 'vue-router'
import HivesList from '../views/HivesList.vue'
import HiveShow from '../views/HiveShow.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HivesList
    },
    {
      path: '/hives/:id',
      name: 'hive',
      component: HiveShow
    }
  ]
})

export default router
