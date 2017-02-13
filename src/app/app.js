import React,{Component} from 'react';
import cssModule from 'react-css-modules';
import styles from './app.css';

class RepeatArray extends Component{
  constructor() {
    super();
    console.log(this)
  }
  render(){
    const arr = [
      <h1>Hello world!</h1>,
      <h2>React is awesome</h2>,
    ];
    const names = ['Alice', 'Emily', 'Kate'];
    return (
      <div>
      {arr}
      {
        names.map((name) =>{return <div>Hello, {name}!</div>;} )
      }
      </div>
    );
  }
}
export default RepeatArray;
/*
const app = () => (
  <div>
    hello world
  </div>
);
console.log(app.propTypes)
app.propTypes = {

};

export default cssModule(app, styles);*/
