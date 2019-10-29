// change state
// create a new presentation with a template
// render
// listen for changes
//
import createStore from './state-manager.js'

const store = createStore(function (state, action) {
  if (action.type === 'INC') {
    state = Object.assign({}, state, { count: state.count + action.payload })
  }
  if (action.type === 'DEC') {
    state = Object.assign({}, state, { count: state.count - action.payload })
  }
  return state  
},  { title: 'Awesome Counter', count: 0 })


function render(state = {}) {
  const html = counter(state)
  const el = document.getElementById('app')
  el.innerHTML = html
  document.getElementById('increment').addEventListener('click', handleClick)
  document.getElementById('decrement').addEventListener('click', handleDEC)
}

store.subscribe(render)
store.dispatch({type: 'init'})

function counter(state) {
  return `
    <h1>${state.title}</h1>
    <p>Count: ${state.count}</p>
    <button id="increment">INC</button>
    <button id="decrement">DEC</button>
  `
}
function handleDEC() {
  store.dispatch({type: 'DEC', payload: 1})
}
function handleClick() {
  store.dispatch({type: 'INC', payload: 1})
}
