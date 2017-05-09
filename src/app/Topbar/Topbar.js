import { Item, Menu } from 'semantic-ui-react'

import {NavLink} from 'react-router-dom';
import React from 'react'

class Topbar extends React.Component {
    constructor(props) {
        super(props)
        const location = this.props.history.location
        if(!location.length){
            this.state={ activeItem: 'Separatewords' }
        }
    }

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      
      <Menu size='huge' color='brown'  inverted >
        <Menu.Item>
          <h1>分词器</h1>
        </Menu.Item>
        <Menu.Item 
        color='violet'
        name='Separatewords'
        active={activeItem === 'Separatewords'}
         onClick={this.handleItemClick}>
         <NavLink to="/">分词</NavLink>  
        </Menu.Item>
        <Menu.Item 
        color='violet'
        name='analysis'
        active={activeItem === 'analysis'}
         onClick={this.handleItemClick}>
            <NavLink to="/analysis">情感分析</NavLink>   
        </Menu.Item>
      </Menu>
    )
  }
}

export default Topbar
