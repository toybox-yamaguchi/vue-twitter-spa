import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import TimelinePage from './pages/TimelinePage.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
  history: false
})

router.map({
  '/': {
    component: TimelinePage
  },
  '/home': {
    component: HomePage
  },
  '/product/:id': {
    name: 'product',
    component: ProductPage
  },
  '/cart': {
    component: CartPage
  },
  '/timeline': {
    component: TimelinePage
  },
  '/timeline/:id': {
    component: TimelinePage
  }

})

export default router
