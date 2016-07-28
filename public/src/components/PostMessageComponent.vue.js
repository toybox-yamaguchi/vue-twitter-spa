





















export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 投稿に使用するアクションは外部から挿入される
    post: function () {
      this.$dispatch('event-post', this.message)
    }
  }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<!-- バインディングに失敗すると動かない -->\n<div class=\"card card-block\">\n  <label class=\"control-label\" for=\"textarea1\">今何してる？</label>\n  <div class=\"text-xs-right\">\n    <textarea id=\"textarea1\" v-model=\"message\" placeholder=\"デフォルト文字列\" class=\"form-control\" rows=\"5\"></textarea>\n    <button @click=\"post\" class=\"btn btn-primary\">投稿</button>\n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-5be40b45", module.exports)
  } else {
    hotAPI.update("_v-5be40b45", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}