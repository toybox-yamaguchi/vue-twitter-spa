<template>
  <!-- バインディングに失敗すると動かない -->
  <div class="cart">
    <div>
      <button v-on:click="update">Update</button>
    </div>

    <p v-show="tweets.length===0"><i>Please add some tweets to cart.</i></p>

    <div v-show="tweets.length > 0">
      <table class="checkout-table">
        <tbody>
        <tr v-for="(index, t) in tweets">
          <td>
            <!-- 動的な値を渡すときは v-bind:propname (省略して:propname) -->
            <tweet-component
              v-bind:text="t.text"
              v-bind:date="t.date"
              v-bind:num="index"
            ></tweet-component>
          </td>
        </tr>
        </tbody>
      </table>

      <!--
      <table class="checkout-table">
        <thead>
        <tr>
          <th>Text</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="t in tweets">
          <td>{{ t.text }}</td>
          <td>{{ t.date }}</td>
        </tr>
        </tbody>
      </table>
      -->
    </div>

  </div>
</template>

<script>
  import { getTimeline } from '../vuex/timeline/actions'
  import TweetComponent from './components/TweetComponent.vue'

  export default {
    components: {
      TweetComponent
    },
    vuex: {
      // storeへの直接アクセスを防ぐためのもの｡引数に親コンポーネント(App.vue)からstateが注入される
      // getters は pure function でなければならない
      getters: {
        // ここの引数に入るのは store.state
        // route は vue-router-sync 使ってるからある
        tweets: ({ timeline, route }) => {
          var id = parseInt(route.params.id)
          console.log('id: ' + id)
          return timeline.all
        }
      },
      actions: {
        getTimeline
      }
    },
    created () {
      this.getTimeline()
    },
    methods: {
      // アロー関数を使うとthisが束縛されるので使わない
      update: function () {
        this.getTimeline()
      }
    }
  }
</script>

<!--
sassを用いる場合
http://vue-loader.vuejs.org/en/configurations/pre-processors.html
-->
<style lang="sass?outputStyle=expanded">

.cart {
  width: 600px;
}
.checkout-table {
  width: 100%;
}

.checkout-table th {
  text-align: left;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.checkout-table td {
  padding: 8px 0px;
}

.checkout-button {
  float: right;
  width: 120px;
  height: 40px;
  margin-top: 20px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}
</style>
