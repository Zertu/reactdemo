import Welcome from './app/app.js'
import React from 'react'
import ReactDOM from 'react-dom'

const render = (Component) => {
  ReactDOM.render(
      Component,
    document.getElementById('root')
  )
}

let now =() =>{
  let time =new Date()
  return time.toLocaleString()
}
const App=()=> {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}
render(<Welcome />)
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
