import twitter from '../../api/twitter'
import * as types from '../mutation-types'

// 元から来た引数の dispatch フィールドを取得するオブジェクト分割代入
export const getTimeline = ({ dispatch }) => {
  // 非同期API
  twitter.getTimeline(tweet => {
    dispatch(types.RECEIVE_TIMELINE, tweet)
  }, true)
}

// export const updateTimeline = ({ dispatch }) => {
//   // 非同期API
//   setTimeout(() => {
//     twitter.getTimeline(tweet => {
//       dispatch(types.RECEIVE_TIMELINE, tweet)
//     })
//   }, 5000)
// }
