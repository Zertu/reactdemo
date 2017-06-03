import {
  Button,
  Container,
  Input,
} from 'semantic-ui-react'

import React from 'react'

class Crawer extends React.Component {
  constructor() {
    super()
    this.state = { someKey: 'someValue' }
  }

  render() {
    return <Container><Input label='http://' placeholder='bbs.tech-food.com/showtopic-124651.html' /><Button >爬取论坛</Button>
    <br /><br /><br /><br />
    <Input placeholder='僵尸肉'/><Button >爬取微博</Button>
    </Container>
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' })
  }
}

export default Crawer
