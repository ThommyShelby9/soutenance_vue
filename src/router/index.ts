import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Layout from '../views/Layout/Layout.vue'
import AsideBar from '@/components/AsideBar.vue'
import Exposition from '@/views/Layout/Expositions.vue'
import Oeuvre from '@/views/Layout/Oeuvre.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      component: AsideBar,
      children:[
        {
          path: 'expo',
          component: Exposition
        },
        {
          path: 'oeuvre',
          component: Oeuvre
        }
      ]
    }

  ]
})

export default router
