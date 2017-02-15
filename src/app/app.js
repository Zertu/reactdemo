import React from 'react'
import styles from './app.css'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  tick() {
    this.setState({date: new Date()})
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    const fuck = this.props.fuck? 'fuck': 'fucked'
    const numbers =  this.props.number
    const num = numbers.map((n,el)=>{
      return   <div key={el}>{n=n++}</div>
    })

    if (this.props.fuck) {
      return (
        <h1 >
          Hello, {this
            .state
            .date
            .toLocaleTimeString()}{fuck}   {num}
         
        </h1>
      )
    } else {
      return (
        <div>fuck</div>
      )
    }
  }
} 
export default Welcome