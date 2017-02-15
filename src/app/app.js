import React from 'react'
import styles from './app.css'

class Welcome extends React.Component {
    constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount() {
    console.log(this)
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
   tick() {
    this.setState({
      date: new Date()
    })
  }
  componentWillUnmount() {
    console.log(12313)
    clearInterval(this.timerID)
  }
  render() {
    return (<h1>Hello, {this.state.date.toLocaleTimeString()}</h1>)
  }
}

export default Welcome