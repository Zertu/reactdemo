import {BreadcrumbDivider, Divider} from 'semantic-ui-react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Topbar from './Topbar/Topbar'
import contextConfig from '../routeConfig/contextConfig'
import styles from './app.css'

const RouteWithSubRoutes = (route) => (
  <Route exact  path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
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
           <Topbar path='' />
        <div>

          {contextConfig.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
          {/*<ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
          </ReactCSSTransitionGroup>*/}
        </div>
      
      </div>
       </Router>
         
    )
  }
}

export default App