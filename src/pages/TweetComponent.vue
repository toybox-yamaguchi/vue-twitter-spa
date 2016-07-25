<!-- 本コンポーネントはTimeline以外でも利用される -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div>
    <span>* </span>
    <span>{{ text }}</span>
    <span>{{ dateText }}</span>
  </div>
</template>

<script>
  import DateFormat from 'dateformat'

  export default {
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
  }
</script>

<style></style>
