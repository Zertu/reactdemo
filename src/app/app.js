import {BreadcrumbDivider, Divider} from 'semantic-ui-react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import React from 'react'
import Topbar from './Topbar/Topbar'
import barConfig from '../routeConfig/barConfig'
import contextConfig from '../routeConfig/contextConfig'
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
      {barConfig.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
        <div>
          {contextConfig.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
        </div>
      
      </div>
       </Router>
         
    )
  }
}

export default App