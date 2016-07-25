<!-- 本コンポーネントはTimeline以外でも利用される -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div>
    <tabs :active="0">
      <tab header="テキスト">
        <span>{{ text }}</span>
      </tab>
      <tab header="日付">
        <span>{{ dateText }}</span>
      </tab>
      <tab header="three" disabled>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import DateFormat from 'dateformat'
  import tab from 'vue-strap/src/tab'
  import tabs from 'vue-strap/src/tabset'
  // require('style!raw!./node_modules/bootstrap/dist/css/bootstrap.min.css')

  export default {
    components: {
      tab,
      tabs
    },
    props: [
      'text',
      'date'
    ],
    // prop は内部テンプレートで利用でき、
    // そして `this.msg` として設定されます
    // template: '<span>{{ msg }}</span>'
    // WARNING: this が使えるのはこのファイルで Vue.extend したときのみ

    // 算出プロパティはバインド式が肥大化するのを防ぐために使う
    computed: {
      dateText: x => {
        return DateFormat(x.date, 'yyyy/mm/dd')
      }
    }

    // TODO: データバインディングを実際動かしてみる
  }
</script>

<style>
</style>
