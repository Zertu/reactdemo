import {
  Button,
  Checkbox,
  Container,
  Dimmer,
  Divider,
  Header,
  Loader,
  Message,
  Segment,
  Step,
  TextArea,
} from 'semantic-ui-react'

import React from 'react'
import ajax from '../../Fetch'

class Separatewords extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '大佬真的好厉害',
      loading: 0
    }
  }
  handleChange = event => {
    this.setState({value: event.target.value})
  }
  focus = () => {
    this
      .inputRef
      .focus()
  }
  Separatewords = async e => {
    this.setState({loading: 1})
    const res = await ajax('http://139.224.232.97:3001/fenci', {
      method: 'POST',
      body: {
        sentence: this.state.value
      }
    })
    this.setState({
      loading: res.map(r => {
        let temp = ''
        for (let i in r) {
          temp += i + ':' + r[i]
        }
        return temp
      })
    })
  }
  handleRef = c => {
    this.inputRef = c
  }
  render() {
    let result = '',
      loading = this.state.loading
    if (loading) {
      if (loading === 1) {
        result = (
          <Dimmer active inverted>
            <Loader inverted>等待中</Loader>
          </Dimmer>
        )
      } else {
        result = (
          <Message>
            <Segment.Group raised>{loading.map((result, i) => (
                <Segment key={i}>{result}</Segment>
              ))}
            </Segment.Group>
          </Message>
        )
      }
    }
    return (
      <Container text>
        <Header as='h2'>Header</Header>
        <Step.Group>
          <Step>
            <label>需要分割的词</label>
          </Step>
          <Step>
            <TextArea
              autoHeight
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='大佬真的好厉害'/>
          </Step>
        </Step.Group>
        <div>
          <Button onClick={this.Separatewords}>提交</Button>
        </div>
        {result}
      </Container>
    )
  }

}

export default Separatewords
