export default function (reducer, initialState = {}) {
  let subscriptions = []
  let state = initialState

  function notify() {
    subscriptions.map(fn => fn(state))
  }

  function subscribe(fn) {
    subscriptions = subscriptions.concat(fn)
  }

  function dispatch(action={type: '', payload: ''}) {
    const prevState = state
    // run the action through reducer
    state = [action].reduce(reducer, prevState)
    // call notify to let all subscribed function know about the state change
    notify()
  }

  return {
    subscribe,
    dispatch
  }
}
