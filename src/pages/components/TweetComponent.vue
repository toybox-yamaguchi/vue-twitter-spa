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
  // jQuery
  import $ from '../../lib/jquery-2.2.4.min'
  // velocity
  import velocity from '../../lib/velocity.min'

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
      // タイマーでシンプルにフェードインさせる
      // props内にてフラグを管理する
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.isActive = true
        $(this.$el).on('oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend', () => {
          this.$dispatch('app-animation-complete', this.num)
          velocity
        })
      }, this.num * 100)
    },
    destroyed () {
      console.log('tweet-component destroyed')
      clearTimeout(this.timeoutId)
    }
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
