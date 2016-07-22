// API のシミュレート
const _tweets = [
  {'id': 1, 'text': 'ここにテキストが入ります', 'date': 0},
  {'id': 2, 'text': 'ここにテキストが入ります', 'date': 0},
  {'id': 3, 'text': 'ここにテキストが入ります', 'date': 0}
]

export default {
  getTimeline (cb) {
    cb(_tweets)
    // setTimeout(() => cb(_tweets), 100)
  }
}
