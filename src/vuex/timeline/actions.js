import twitter from '../../api/twitter'
import * as types from '../mutation-types'

// 元から来た引数の dispatch フィールドを取得するオブジェクト分割代入
export const getTimeline = ({ dispatch }) => {
  // 非同期API
  twitter.getTimeline(tweet => {
    dispatch(types.RECEIVE_TIMELINE, tweet)
  })
}
