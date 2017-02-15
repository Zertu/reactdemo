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

const number =[1,2,3,4,5,56,23,632,5623,45,23,2536,2]
render(<Welcome number={number}  fuck={true}/>)
// const element = <Welcome name="Sara" />
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
