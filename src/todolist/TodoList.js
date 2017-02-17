import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class TodoList extends Component {
    constructor(prop) {
        super(prop)
    }
    filter = e => {
        this.props.store.filter = e.target.value
    }
    createnew=e=>{
        if(e.which===13){
            this.props.store.createTodo(e.target.value)
            e.target.value=''
        }
    }
    toggle(todo){
        todo.complete=!todo.complete
    }
    render() {
        const {clearComplete,filter,filteredTodos, todos} = this.props.store
        const todoLis = filteredTodos.map(todo => (
            <li key={todo.id}>
                <input type="checkbox" onChange={this.toggle.bind(this,todo)} value={todo.complete}/>
                {todo.value}</li>
        ))
        return (
            <div>
                <h1>todos</h1>
                <input className="create" onKeyPress={this.createnew}/>
                <input className='filter' value={filter} onChange={this.filter}/>
                <ul>{todoLis}</ul>
                <a href="#" onClick={clearComplete}>清除已完成</a>
            </div>
        )
    }
}

export default TodoList