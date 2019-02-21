import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/view/register/Register'
import Center from '@/view/center/Center'
import Home from '@/view/home/Home'
import Intro from '@/view/intro/Intro'
import Schedule from '@/view/schedule/Schedule'
import Guest from '@/view/guest/Guest'
import MeetingArrangement from '@/view/meetingarrangement/MeetingArrangement'
import communityCommunication from '@/view/communication/commuityCommunication'
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/intro',
      name: 'Intro',
      component: Intro
    }, {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    }, {
      path: '/guest',
      name: 'Guest',
      component: Guest
    }, {
      path: '/arrangement',
      name: 'MeetingArrangement',
      component: MeetingArrangement
    }, {
      path: '/communityCommunication',
      name: 'communityCommunication',
      component: communityCommunication
    }
  ]
})
