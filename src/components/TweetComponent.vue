<!-- 本コンポーネントはTimeline以外でも利用される -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div class="list-item" :class="{ 'is-active': isActive }">
    <tabs :active="0">
      <tab header="テキスト">
        <span>{{ text }}</span>
      </tab>
      <tab header="日付">
        <span>{{ dateText }}</span>
      </tab>
      <tab header="無効化されたタブ" disabled>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import DateFormat from 'dateformat'
  import tab from 'vue-strap/src/tab'
  import tabs from 'vue-strap/src/tabset'
  // require('style!raw!./node_modules/bootstrap/dist/css/bootstrap.min.css')
  // require('//cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js')

  export default {
    components: {
      tab,
      tabs
    },
    props: {
      text: {
        type: String,
        default: 'defalut text'
      },
      date: {
        type: Number
      },
      'num': { type: Number },
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

    // TODO: データバインディングを実際動かしてみる

    // ライフサイクルイベント
    created () { console.log('created') },
    ready () {
      console.log('ready', this.isActive)
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => { this.isActive = true }, this.num * 100)
    },
    destroyed () { console.log('destroyed') }
    // TODO: 投稿機能作る
  }
</script>

<style>
  .list-item{
    opacity: 0;
    transition: all 500ms linear;
  }
  .list-item.is-active{
    opacity: 1;
  }
</style>
