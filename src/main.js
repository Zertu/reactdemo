import Calculator from './app/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

const render = (Component) => {
  ReactDOM.render(
      Component,
    document.getElementById('root')
  )
}



const number =[1,2,3,4,5,56,23,632,5623,45,23,2536,2]
render(<Calculator/>)
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
