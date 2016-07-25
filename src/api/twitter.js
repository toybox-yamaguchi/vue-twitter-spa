// API のシミュレート
const _tweets = [
  {'id': 1, 'text': 'ここにテキストが入ります', 'date': Date.now()},
  {'id': 2, 'text': 'ここにテキストが入ります', 'date': Date.now()},
  {'id': 3, 'text': 'ここにテキストが入ります', 'date': Date.now()}
]

// import Linq from 'linq-es6'
import Enumerable from 'linq'

export default {
  getTimeline (cb) {
    var stub = Enumerable.range(0, 2000)
      // .selectMany(x => _tweets)
      .select(i => {
        let t = Object.assign({}, _tweets[0]) // コピー
        t.id = i
        return t
      })
      .toArray()

    // stub.forEach(item => console.log('item: ' + item.id))
    // console.log(JSON.stringify(stub))

    // cb(_tweets)
    setTimeout(() => cb(stub), 100)
  }
}
