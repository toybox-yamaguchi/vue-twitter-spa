<!-- 本コンポーネントはTimeline以外でも利用される -->
<!-- Storeを持つ必要が無いのでVuexに依存しない -->

<template>
  <!-- バインディングに失敗すると動かない -->

  <div class="card card-block">
    <div header="テキスト">
      <span>{{ text }}</span>
    </div>
    <div header="日付">
      <span>{{ dateText }}</span>
    </div>
    <div header="無効化されたタブ" disabled></div>
  </div>

</template>

<script>
  import DateFormat from 'dateformat'
  // import tab from 'vue-strap/src/tab'
  // import tabs from 'vue-strap/src/tabset'
  // require('style!raw!./node_modules/bootstrap/dist/css/bootstrap.min.css')

  export default {
    // components: {
    //   tab,
    //   tabs
    // },
    props: {
      text: {
        type: String,
        default: 'defalut text'
      },
      date: {
        type: Number
      }
    },
    // prop は内部テンプレートで利用でき、
    // そして `this.msg` として設定されます
    // template: '<span>{{ msg }}</span>'
    // WARNING: this が使えるのはこのファイルで Vue.extend したときのみ

    // 算出プロパティはバインド式が肥大化するのを防ぐために使う
    computed: {
      dateText: x => {
        return DateFormat(x.date, 'yyyy/mm/dd HH:MM:ss')
      }
    }

    // TODO: 投稿機能作る
  }
</script>

<style>
</style>
