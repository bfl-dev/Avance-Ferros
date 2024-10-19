import Home from '@/pages/HomeView.vue'
import HomeBody from '@/components/HomeBody.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: Home,
    children:
      [
        {
          path: '',
          component: HomeBody,
        }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
