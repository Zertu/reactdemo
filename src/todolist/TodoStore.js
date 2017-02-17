import {observable, computed} from 'mobx'

class Todo {
    @observable value
    @observable id
    @observable complete
    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}

class stores {
    @observable todos = [new Todo('milk')]
    @observable filter = ''
    @computed get filteredTodos() {
        const matchesFilter = new RegExp(this.filter, 'i')
        return this
            .todos
            .filter(todo => !this.filter || matchesFilter.test(todo.value))
    }
    createTodo(val) {
        this
            .todos
            .push(new Todo(val))
    }
    clearComplete = () => {
        const todos = this
            .todos
            .filter(todo => !todo.complete)
        this
            .todos
            .replace(todos)
    }
}
let store = new stores()
window.store = store
export default store
