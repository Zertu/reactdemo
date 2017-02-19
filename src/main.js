import Calculator from './app/app.js'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './todolist/TodoStore'
import TodoList from './todolist/TodoList'
import ReactAnimation from './reactanimation/animation'
const render = (Component) => {
  ReactDOM.render(
      Component,
    document.getElementById('root')
  )
}

render(<ReactAnimation />)
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
