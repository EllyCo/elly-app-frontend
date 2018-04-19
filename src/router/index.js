import Vue from 'vue'
import Router from 'vue-router'

// Import the components here
import settings from '@/components/settings'
import login from '@/components/login'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  history: true,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: home
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    }
  ]
})
