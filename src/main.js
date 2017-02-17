import Calculator from './app/app.js'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './todolist/TodoStore'
import TodoList from './todolist/TodoList'
const render = (Component) => {
  ReactDOM.render(
      Component,
    document.getElementById('root')
  )
}


console.log(store)
render(<TodoList store={store}/>)
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
