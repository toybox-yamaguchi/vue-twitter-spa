<!-- 新規ポスト作成ウィンドウ -->
<!-- 本コンポーネントはTimeline以外でも利用される -->
<!-- Storeを持つ必要が無いのでVuexに依存しない -->

<template>
  <!-- バインディングに失敗すると動かない -->
  <div class="card card-block">
    <label class="control-label" for="textarea1">今何してる？</label>
    <div class="text-xs-right">
      <textarea
        id="textarea1"
        v-model="message"
        placeholder="デフォルト文字列"
        class="form-control"
        rows="5"
      ></textarea>
      <button @click="post" class="btn btn-primary">投稿</button>
    </div>
  </div>
</template>

<script>
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
</script>

<style></style>
