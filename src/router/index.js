import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../pages/detail/Detail') // 异步加载，当项目较庞大的时候使用
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
