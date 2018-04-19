import Vue from 'vue'
import Router from 'vue-router'

// Import the components here
import settings from '@/components/settings'
import login from '@/components/login'
import home from '@/components/home'
import big_component from '@/components/large_component/big_component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/big_component',
      name: 'big_component',
      component: big_component
    }
  ]
})
