import {
  RECEIVE_TIMELINE
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_TIMELINE] (state, tweets) {
    state.all = tweets
  }

  // [ADD_TO_CART] (state, productId) {
  //   state.all.find(p => p.id === productId).inventory--
  // }
}

export default {
  state,
  mutations
}
