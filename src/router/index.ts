import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PostView from '../views/PostContainerView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PostView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { 
    path: '/counter',
  name: 'counter',
  component: () => import( '../views/CounterOption.vue')
  },
  { 
    path: '/counterc',
  name: 'counterc',
  component: () => import( '../views/CounterCompositionView.vue')
  },
  { 
    path: '/directivaSelect',
  name: 'directivas',
  component: () => import( '../views/EjemploselectiveView.vue')
  },
  { 
    path: '/directivavfor',
    name: 'directivafor',
    component: () => import( '../views/DirectivaVforView.vue')
  },
  { 
    path: '/directivabind',
    name: 'directivabind',
    component: () => import( '../views/ClassBindView.vue')
  },
  { 
    path: '/directivaon',
    name: 'directivaon',
    component: () => import( '../views/DirectivaOnView.vue')
  },
  { 
    path: '/modelform',
    name: 'modelform',
    component: () => import( '../views/ModelFormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
