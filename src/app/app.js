import React,{Component} from 'react'
import cssModule from 'react-css-modules'
import styles from './app.css'
import {observer} from 'mobx-react'

@observer class TodoView extends React.Component {
    render() {
        return <div>{this.props.todo.title}</div>
    }
}
export default TodoView
export const TodoViews = observer(({todo}) => <div>{todo.title}</div>)
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
