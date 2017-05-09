import React from 'react'
import styles from './app.css'

class App extends React.Component {  
  constructor(props) {
    super(props)
  }

  handleChange=(e)=> {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div><h1>分词器</h1></div>
    )
  }
}

export default App