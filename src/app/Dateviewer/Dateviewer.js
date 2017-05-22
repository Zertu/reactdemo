import {Container, Icon, Table} from 'semantic-ui-react'

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
      <Table.Cell>{data.weibo_id}</Table.Cell>
      <Table.Cell>{data.weibo_cont}</Table.Cell>
      <Table.Cell negative>{data}</Table.Cell>
    </Table.Row>
  )
}
class Datatable extends React.Component {
  componentDidMount() {}
  render() {
    const lists = [
        1, 2, 3
      ],
      heads = [
        '序号',
        '微博id',
        '微博内容',
        '转发次数',
        '评论数',
        '点赞数',
        'uid',
        '是否原创',
        '发表设备',
        '微博地址',
        '发表时间'
      ]
      return (
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
      )
  }
}
