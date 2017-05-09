import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import App from './app/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

const render = (Component) => {
  ReactDOM.render(Component, document.getElementById('root'))
}

render(<App/>)
// const element = <Welcome name="Sara" /> ReactDOM.render(   element,
// document.getElementById('root') )