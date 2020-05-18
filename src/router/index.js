import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
