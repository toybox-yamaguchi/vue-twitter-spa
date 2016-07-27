<!-- 本コンポーネントはTimeline以外でも利用される -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div class="card card-block list-item" :class="{ 'is-active': isActive }">
    <ul class="scroller">
      <li class="item">
        <div header="テキスト">
          <span>{{ text }}</span>
        </div>
        <div header="日付">
          <span>{{ dateText }}</span>
        </div>
      </li>
      <li class="item">
        <img src="/static/assets/logo.png">
      </li>
    </ul>

  </div>
</template>

<script>
  import DateFormat from 'dateformat'
  // import tab from 'vue-strap/src/tab'
  // import tabs from 'vue-strap/src/tabset'
  // require('style!raw!./node_modules/bootstrap/dist/css/bootstrap.min.css')

  // jQuery
  var $ = window.jQuery = require('jquery')

  // velocity
  window.velocity = require('../lib/velocity.min')

  // slick
  window.slick = require('slick')
  require('../lib/slick.css')

  // loading test
  console.log('$', $)
  console.log('window', $('body').velocity)
  console.log('slick', $('body').slick)

  export default {
    // components: {
    // tab,
    // tabs
    // },
    props: {
      text: {
        type: String,
        default: 'defalut text'
      },
      date: {
        type: Number
      },
      'num': { type: Number }, // 自身の番号
      'isActive': { type: Boolean }
    },
    // prop は内部テンプレートで利用でき、
    // そして `this.msg` として設定されます
    // template: '<span>{{ msg }}</span>'
    // WARNING: this が使えるのはこのファイルで Vue.extend したときのみ

    // 算出プロパティはバインド式が肥大化するのを防ぐために使う
    computed: {
      dateText: x => {
        return DateFormat(x.date, 'yyyy/mm/dd')
      }
    },
    // TODO: 投稿機能作る

    // TODO: データバインディングを実際動かしてみる
    // ライフサイクルイベント
    // created () { console.log('created') },
    // こうも書ける
    created: () => {
      console.log('tweet-component created')
    },
    ready () {
      console.log('tweet-component ready')
    },
    destroyed () {
      console.log('tweet-component destroyed')
    }
  }
</script>

<style lang="scss">
  .scroller{
    list-style: none;
    padding-left: 0;

    .item {

    }
  }
</style>
