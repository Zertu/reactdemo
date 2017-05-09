import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import {Divider} from 'semantic-ui-react';
import React from 'react'
import Topbar from './Topbar/Topbar'
import routeConfig from '../routeConfig'
import styles from './app.css'

const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

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
    return (
       <Router>
         <div>
      {routeConfig.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}</div>
       </Router>
         
    )
  }
}

export default App