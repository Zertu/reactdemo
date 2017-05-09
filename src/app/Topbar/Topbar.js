import { Item, Menu } from 'semantic-ui-react'

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
            分词
        </Menu.Item>
      </Menu>
    )
  }
}

export default Topbar
