<!-- 本コンポーネントはTimeline以外でも利用される -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div>
    子コンポーネント
    <span>{{ text }}</span>
    <span>{{ date }}</span>
  </div>
</template>

<script>
  export default {
    props: [
      'text',
      'date'
    ]
    // prop は内部テンプレートで利用でき、
    // そして `this.msg` として設定されます
    // template: '<span>{{ msg }}</span>'
  }
</script>

<style></style>
