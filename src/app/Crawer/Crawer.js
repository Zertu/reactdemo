import {
  Button,
  Contain,
} from 'semantic-ui-react'

import React from 'react'

class Crawer extends React.Component {
  constructor() {
    super()
    this.state = { someKey: 'someValue' }
  }

  render() {
    return <Container>{this.state.someKey}</Container>
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' })
  }
}

export default Crawer
