import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
import map from '@/pages/map'
import other from '@/pages/other'
import team from '@/pages/team'
import user from '@/pages/user'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
export default router
