import Home from '@/pages/HomeView.vue'
import HomeBody from '@/components/HomeBody.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Logo from '@/components/icons/Logo.vue'
import TravelTracker from '@/components/TravelTracker.vue'



const homePaths = {
  path: '/',
  component: Home,
  children:
    [
      {
        path: '',
        components: {content: HomeBody}
      },
      {
        path: 'kkk',
        components: {content: Logo}
      },
      {
        path: 'tracker',
        components: {content: TravelTracker}
      }
    ]
};

const flowPaths = {
  path: '/flow',
  component: Home,
  children: [
    {
      path: 'register',
      components: { overlay: Register, content: HomeBody },
    },
    {
      path: 'login',
      components: {overlay: Login, content: HomeBody }
    }
  ]
}; //todo: ver como hace q aparezca el overlay y no interfiera con el contenido

const routes =
  [
    homePaths,
    flowPaths
  ]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
