import Vue from 'vue'
import Router from 'vue-router'


const home = () => import('../views/tabbar/home')
const category = () => import('../views/tabbar/category')
const profile = () => import('../views/tabbar/profile')
const shopcart = () => import('../views/tabbar/shopcart')

Vue.use(Router)

const tabbar = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component: home
  },
  {
    path:'/category',
    component: category
  },
  {
    path:'/profile',
    component: profile
  },
  {
    path:'/shopcart',
    component: shopcart
  },
]
export default new Router({
  mode: 'history',
  routes: tabbar
})
