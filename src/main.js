import app from './app/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

const render = (Component) => {
  ReactDOM.render(
      <Component/>,
    document.getElementById('root')
  )
}

render(app)
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
