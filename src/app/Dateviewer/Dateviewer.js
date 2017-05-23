import {
  Container,
  Dimmer,
  Icon,
  Loader,
  Segment,
  Select,
  Table,
} from 'semantic-ui-react'

import React from 'react'
import fetch from '../../Fetch'

class Dateviewer extends React.Component {
  constructor() {
    super()
    this.state = {
      someKey: 'someValue'
    }
  }
  render() {
    return <Container><Datatable/></Container>
  }
}

export default Dateviewer

const Row = (props) => {
  const data = props.data
  return (
    <Table.Row>
      <Table.Cell>{data.id}</Table.Cell>
      <Table.Cell>{data.weibo_id}</Table.Cell>
      <Table.Cell positive>{data.weibo_cont}</Table.Cell>
      <Table.Cell>{data.repost_num}</Table.Cell>
      <Table.Cell>{data.comment_num}</Table.Cell>
      <Table.Cell>{data.praise_num}</Table.Cell>
      <Table.Cell>{data.uid}</Table.Cell>
      <Table.Cell>{data.is_origin}</Table.Cell>
      <Table.Cell>{data.weibo_url}</Table.Cell>
      <Table.Cell>{data.create_time}</Table.Cell>
    </Table.Row>
  )
}
class Datatable extends React.Component {
  componentDidMount = async() => {
    this.setState({loading: 1})
    const row = await fetch('http://localhost:3001/getWeiboData?pagenum=1&num=30', {method: 'get'})
    console.log(row)
    this.setState({data: row.rows, loading: 0})

  }
  state = {
    loading: 1,
    data: [],
    count: 0,
    num: 10
  }
  render() {
    const lists = this.state.data,
      heads = [
        '序号',
        '微博id',
        '微博内容',
        '转发次数',
        '评论数',
        '点赞数',
        'uid',
        '是否原创',
        '微博地址',
        '发表时间'
      ]
    let result = false,
      loading = this.state.loading
    if (loading) {
      if (loading === 1) {
        result = (
          <Dimmer active inverted>
            <Loader inverted>等待中</Loader>
          </Dimmer>
        )
      } else {
        result = null
      }
    }
    const options=[
      { key: 10, value: 10,  text: 10 },
      { key: 20, value: 20,  text: 20 },
      { key: 30, value: 30,  text: 30 }]
    return (
      <div>
        <Select placeholder='选择每页页数' options={options}/>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {heads.map(head => (
                <Table.HeaderCell>{head}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {lists.map((list, i) => (<Row key={i} data={list}/>))}
          </Table.Body>
        </Table>
        <Segment.Group horizontal>
          <Segment>Left</Segment>
          <Segment>Middle</Segment>
          <Segment>Right</Segment>
        </Segment.Group>
      </div>
    )
  }
}
