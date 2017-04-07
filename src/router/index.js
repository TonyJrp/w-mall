import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import CartPage from '../pages/CartPage/CartPage'
import Classify from '../pages/Classify/Classify'
import Mine from '../pages/Mine/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/cartPage',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
