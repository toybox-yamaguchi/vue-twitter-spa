import App from './pages/App'
import router from './router'
import store from './vuex/store' // vuex store instance

// プラグイン追加
import Vue from 'vue'
import VueAnimatedList from 'vue-animated-list'
Vue.use(VueAnimatedList)

import VueTouch from 'vue-touch'
Vue.use(VueTouch)
VueTouch.config.swipe = {
  threshold: 10
}

import { sync } from 'vuex-router-sync'
sync(store, router)
router.start(App, '#app')

