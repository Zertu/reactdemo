import {combineReducers, createStore} from 'redux'

import Calculator from './app/app.js'
import React from 'react'
import ReactAnimation from './reactanimation/animation'
import ReactDOM from 'react-dom'
import TodoList from './todolist/TodoList'

const userReducer = (state = {}, action) => {
  return state
}
const tweetReducer = (state = [], action) => {
  return state
}
const reducers = combineReducers({user: userReducer, tweets: tweetReducer})
const render = (Component) => {
  ReactDOM.render(Component, document.getElementById('root'))
}

render(<ReactAnimation/>)

const reducer = (state, action) => {
  console.log(action.payload)
  return state
}
const store = createStore(reducer, {
  user: {
    name: 'fuck',
    age: 12
  },
  tweets: []
})
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({type: 'CHANGE_AGE', payload: 222222})
// const element = <Welcome name="Sara" /> ReactDOM.render(   element,
// document.getElementById('root') )