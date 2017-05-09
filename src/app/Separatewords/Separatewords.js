import {Button, Checkbox, Container, Form, Header} from 'semantic-ui-react'

import React from 'react'
import ajax from '../../Fetch'

class Separatewords extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '大佬真的好厉害'
    }
  }
  handleChange=event=> {
    this.setState({value: event.target.value})
  }
  Separatewords = async e => {
    const res = await ajax('http://139.224.232.97:3001/fenci', {
      method: 'POST',
      body: {
        sentence: this.state.value
      }
    })
  }
  render() {
    return (

      <Container text>
        <Header as='h2'>Header</Header>
        <Form>
          <Form.Field>
            <label>需要分割的词</label>
            <input value={this.state.value} onChange={this.handleChange} placeholder='大佬真的好厉害'/>
          </Form.Field>
          <Button onClick={this.Separatewords} type='submit'>提交</Button>
        </Form>
      </Container>
    )
  }

  componentDidMount() {
    this.setState({someKey: 'otherValue'})
  }
}

export default Separatewords
