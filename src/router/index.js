import HomePage from '@/views/HomePage.vue'
import {createRouter,createWebHistory} from "vue-router/dist/vue-router";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
        path:'/evade',
        name:'evade',
        component:()=>import('@/views/EvadeLayout.vue')
  },
  {
    path:'/anti',
    name:'anti',
    component:()=>import('@/views/AntiLayout.vue')
  },
  {
    path:'/Auth',
    name:'AuthPage',
    component:()=>import('@/components/User/main/AuthPage.vue')
  },
  {
    path:'/Base',
    name:'BaseSearch',
    component:()=>import('@/views/BaseSearchPage.vue')
  },
  {
    path:'/Admin',
    name:'AdminMain',
    component:()=>import('@/views/AdminMain.vue')
  },
  {
    path:'/AdminBase',
    name:'AdminBase',
    component:()=>import('@/views/AdminBase.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
