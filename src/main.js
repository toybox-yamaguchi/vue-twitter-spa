import App from './pages/App'
import router from './router'
import store from './vuex/store' // vuex store instance
import { sync } from 'vuex-router-sync'

sync(store, router)

console.log('app',App)
console.log('router',router)
console.log('store',store)
console.log('sync',sync)

router.start(App, '#app')

