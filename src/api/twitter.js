// API のシミュレート
const _tweets = [
  {'id': 1, 'text': 'ここにテキストが入ります', 'date': Date.now()},
  {'id': 2, 'text': 'ここにテキストが入ります', 'date': Date.now()},
  {'id': 3, 'text': 'ここにテキストが入ります', 'date': Date.now()}
]

// import Linq from 'linq-es6'
import Enumerable from 'linq'

export default {
  getTimeline (callback, isAsync = true) {
    var stub = Enumerable.range(0, 200)
      // .selectMany(x => _tweets)
      .select(i => {
        let t = Object.assign({}, _tweets[0]) // コピー
        t.id = i
        t.text = Math.round(Math.random() * 10).toString()
        return t
      })
      .toArray()

    // stub.forEach(item => console.log('item: ' + item.id))
    // console.log(JSON.stringify(stub))

    if (isAsync) {
      setTimeout(() => callback(stub), 100)
    }
    else {
      callback(stub)
    }

    // setTimeout(() => {
    //   stub = Enumerable.from(stub).select(x => {
    //     x.text = Date.now().toString()
    //     return x
    //   }).toArray()
    //   callback(stub)
    // }, 2000)
  }
}
