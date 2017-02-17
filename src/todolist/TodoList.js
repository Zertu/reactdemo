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
    render() {
        const {filter,filteredTodos, todos} = this.props.store
        const todoLis = todos.map(todo => (
            <li key={todo.id}>
                {todo.value}</li>
        ))
        return (
            <div>
                <h1>todos</h1>
                <input className="create" onKeyPress={this.createnew}/>
                <input className='filter' value={filter} onChange={this.filter}/>
                <ul>{todoLis}</ul>
            </div>
        )
    }
}

export default TodoList