import {
  Container,
  Dimmer,
  Icon,
  Segment,
  Select,
  Table,
} from 'semantic-ui-react'

import Pagination from 'rc-pagination'
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
  constructor(props){
    super(props)
    this.state = {
    data: [],
    totalNumber: 10,
    pageSize: 10,
    currentPage: 1,
    url:'stewpot'
  }
  }
  componentDidMount = async() => {
    this.setState({loading: 1})
    const {pageSize,url}=this.state,
    row = await fetch('http://localhost:3001/'+url+'?pagenum=1&num=10', {method: 'get'}),
    num = Math.ceil(row.count/pageSize)
    this.setState({data: row.rows, totalNumber:Math.ceil(row.count/num)})

  }
  handleChange = async(idx) => {    
    const {pageSize,url}=this.state,
    row = await fetch('http://localhost:3001/'+url+'?pagenum='+idx+'&num='+pageSize, {method: 'get'})
    this.setState({data: row.rows, currentPage:idx})
  }
  handlePage = async (event)=>{
    const data=event.target.children[0].innerHTML-0,
    {currentPage,url} = this.state,
    row = await fetch('http://localhost:3001/'+url+'?pagenum='+currentPage+'&num='+data, {method: 'get'})
    this.setState({data: row.rows, pageSize:data,totalNumber:Math.ceil(row.count/data)})
  }
  handleEvent=async (event)=>{
    let data=event.target.children[0].innerHTML,
    {pageSize, currentPage,url} = this.state
    switch (data){
    case '黄记煌三汁焖锅再曝丑闻':
    url='stewpot'
    break
    case '胶水牛排':
    url='beef'
    break
    case '饿了么黑心作坊':
    url='eleme'
    break
}
    const row = await fetch('http://localhost:3001/'+url+'?pagenum='+currentPage+'&num='+pageSize, {method: 'get'})
    this.setState({data: row.rows, currentPage: 1,url:url})
  }
  onChange = (page) => {
    this.setState({current: page})
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
      ],
     options = [
        {
          text: 10
        }, {
          text: 20
        }, {
          text: 30
        }
      ],eventList=[
        {text:'黄记煌三汁焖锅再曝丑闻'},
        {text: '胶水牛排'},
        {text:'饿了么黑心作坊'}
      ] ,{totalNumber, pageSize, currentPage} = this.state
      console.log(this.state)
    return (
      <div>
        <Select onChange={this.handlePage} placeholder='选择每页页数' options={options}/>
        <Select onChange={this.handleEvent} placeholder='选择具体事件' options={eventList}/>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {heads.map((head, i) => (
                <Table.HeaderCell key={i}>{head}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {lists.map((list, i) => (<Row key={i} data={list}/>))}
          </Table.Body>
        </Table>
        <Pagination
          onChange={this.handleChange}
          current={this.state.currentPage}
          total={totalNumber*pageSize}
          pageSize={pageSize}
          showLessItems
        />
      </div>
    )
  }
}
