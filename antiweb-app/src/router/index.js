import HomePage from '@/views/HomePage.vue'
import {createRouter,createWebHistory} from "vue-router/dist/vue-router";


const routes = [
  {
    path: '/',
    name: 'home',
    meta:{layout:'Main'},
    component: HomePage
  },
  {
        path:'/evade',
        name:'evade',
        meta:{layout:'Main'},

        component:()=>import('@/views/EvadeLayout.vue')
  },
  {
    path:'/anti',
    name:'anti',
    meta:{layout:'Main'},
    component:()=>import('@/views/AntiLayout.vue')
  },
  {
    path:'/Auth',
    name:'AuthPage',
    meta:{layout:'Empty'},
    component:()=>import('@/components/User/main/AuthPage.vue')
  },
  {
    path:'/Base',
    name:'BaseSearch',
    meta:{layout:'Main'},
    component:()=>import('@/views/BaseSearchPage.vue')
  },
  {
    path:'/Admin',
    name:'AdminMain',
    meta:{layout:'Admin'},
    component:()=>import('@/views/AdminMain.vue')
  },
  {
    path:'/AdminBase',
    name:'AdminBase',
    meta:{layout:'Admin'},
    component:()=>import('@/views/AdminBase.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
