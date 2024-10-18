import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Logo from '@/components/icons/Logo.vue'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})


const app = createApp(App);

app.use(router);

app.mount('#app');