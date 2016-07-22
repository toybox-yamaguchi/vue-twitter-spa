<template>
  <p>timeline</p>
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
        <td><a v-link="{name:'tweet', params:{id:t.id}}">{{ t.text }}</a></td>
        <td>{{ t.date }}</td>
      </tr>
      </tbody>
    </table>
    </div>
  </div>
  <p>end</p>
</template>

<script>
  import { getTimeline } from '../vuex/timeline/actions'
  // import { cartProducts } from '../vuex/timeline/getters'

  export default {
    vuex: {
      getters: {

        // ここの引数に入るのは store.state

        // route は vue-router-sync で来るっぽい
        tweetsInternal: ({timeline, route}) => {
          // var id = parseInt(route.params.id)
          // return timeline.all.find((p) => p.id === id) || {}
          console.log(JSON.stringify(timeline))
          return timeline.all
        }
      },
      actions: {
        getTimeline
      }
    },
    computed: {
      // ここの引数に入るのは store.state
      // route は vue-router-sync で来るっぽい
      tweets () {
        return this.tweetsInternal
      }
    },
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
