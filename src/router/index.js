import Vue from 'vue'
import Router from 'vue-router'
import Foucs from '@/views/foucs'
import Message from '@/views/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foucs',
      component: Foucs
    },
    {
      path: 'message',
      name: 'message',
      component: Message
    }
  ]
})
