import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import BasicExample from './react-router/basicexample'
import Calculator from './app/app.js'
import React from 'react'
import ReactAnimation from './reactanimation/animation'
import ReactDOM from 'react-dom'
import TodoList from './todolist/TodoList'
import store from './todolist/TodoStore'

const render = (Component) => {
  ReactDOM.render(Component, document.getElementById('root'))
}

render(<BasicExample/>)
// const element = <Welcome name="Sara" /> ReactDOM.render(   element,
// document.getElementById('root') )