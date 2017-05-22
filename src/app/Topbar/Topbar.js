import {Item, Menu} from 'semantic-ui-react'

import {NavLink} from 'react-router-dom'
import React from 'react'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    const location = this.props.path
    console.log(this)
    this.state = {
      activeItem: location
    }
  }
  state = {}
  handleItemClick = (e, {name}) => this.setState({activeItem: name})
  render() {
    const {activeItem} = this.state
    // if(activeItem=='Separatewords')

    return (
      <Menu size='huge' color='brown'  inverted>
        <Menu.Item>
          <h1>分词器</h1>
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          color='violet'
          name='Separatewords'
          active={activeItem === 'Separatewords'}
          as={NavLink}
          to="/splitWords">
          分词
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          color='violet'
          name='analysis'
          active={activeItem === 'analysis'}
          as={NavLink}
          to="/analysis">
          情感分析
        </Menu.Item>
        <Menu.Item
          onClick={this.handleItemClick}
          color='violet'
          name='viewData'
          active={activeItem === 'viewData'}
          as={NavLink}
          to="/viewData">数据展示
        </Menu.Item>
      </Menu>
    )
  }
}

export default Topbar
