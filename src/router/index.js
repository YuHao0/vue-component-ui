import Vue from 'vue'
import Router from 'vue-router'
import button from '@/pages/button/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'button',
      component: button
    },
    {
      path: '/button',
      name: 'button',
      component: button
    }
  ]
})
