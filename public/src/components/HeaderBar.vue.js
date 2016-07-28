var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.menu-links a {\n  display: inline-block;\n  text-decoration: none;\n  color: #555;\n  margin-right: 30px;\n}\n")








import { cartCount } from '../vuex/cart/getters'
export default {
  vuex: {
    getters: {
      count: cartCount
    }
  }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"menu-links\">\n  <a v-link=\"{path:'/timeline'}\">タイムライン</a>\n  <a v-link=\"{path:'/cart'}\">返信 ({{ count }})</a>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.menu-links a {\n  display: inline-block;\n  text-decoration: none;\n  color: #555;\n  margin-right: 30px;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-938177f2", module.exports)
  } else {
    hotAPI.update("_v-938177f2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}