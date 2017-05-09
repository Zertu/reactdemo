import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import React from 'react'
import Topbar from './Topbar/Topbar'
import styles from './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (e) => {
    this
      .props
      .onChange(e.target.value)
  }
  render() {
    // const r = routes.map((route, i) => {
    //     console.log(route)
    //     return        <Route key={i} path={route.path} component={route.component} />
    // })
    return (
      <Router>
         <Route exact path="/" component={Topbar}/>
         </Router>
    )
  }
}

export default App