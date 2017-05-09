import { Item, Menu } from 'semantic-ui-react'

import React from 'react'

class Topbar extends React.Component {
    constructor(props) {
        super(props)
        const location = this.props.history.location
        if(!location.length){
            this.state={ activeItem: 'fenci' }
        }
    }

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu color='brown'  inverted >
        <Menu.Item>
          <h1>分词器</h1>
        </Menu.Item>
        <Menu.Item 
        color='violet'
        name='fenci'
        active={activeItem === 'fenci'}
         onClick={this.handleItemClick}>
            分词
        </Menu.Item>
      </Menu>
    )
  }
}

export default Topbar
