<template>
  <div class="cart">
    <p v-show="tweets.length===0"><i>Please add some tweets to cart.</i></p>
    <div v-show="tweets.length > 0">
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
    </div>
  </div>
</template>

<script>
  import { getTimeline } from '../vuex/timeline/actions'
  // import { cartProducts } from '../vuex/timeline/getters'

  export default {
    vuex: {
      // storeへの直接アクセスを防ぐためのもの｡引数に親コンポーネント(App.vue)からstateが注入される
      // getters は pure function でなければならない
      getters: {
        // ここの引数に入るのは store.state
        // route は vue-router-sync 使ってるからある
        tweets: ({timeline}) => {
          // var id = parseInt(route.params.id)
          // return timeline.all.find((p) => p.id === id) || {}
          // console.log(JSON.stringify(timeline))
          // var stab = [
          //   {'id': 1, 'text': 'ここにテキストが入ります', 'date': 0},
          //   {'id': 2, 'text': 'ここにテキストが入ります', 'date': 0},
          //   {'id': 3, 'text': 'ここにテキストが入ります', 'date': 0}
          // ]
          return timeline.all
          // return stab
        }
      },
      actions: {
        getTimeline
      }
    },
    // computed: {
    //   // ここの引数に入るのは store.state
    //   tweets () {
    //     return this.tweetsInternal
    //   }
    // },
    created () {
      this.getTimeline()
    }
  }
</script>

<style>

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
