import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import React, {Component} from 'react'
import './animate.css'
class ReactAnimation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ['hello', 'world', 'click', 'me']
        }
        this.handleAdd = this
            .handleAdd
            .bind(this)
    }

    handleAdd() {
        const newItems = this
            .state
            .items
            .concat([prompt('Enter some text')])
        this.setState({items: newItems})
    }

    handleRemove(i) {
        let newItems = this
            .state
            .items
            .slice()
        newItems.splice(i, 1)
        this.setState({items: newItems})
    }

    render() {
        const items = this
            .state
            .items
            .map((item, i) => (
                <div key={item} onClick={() => this.handleRemove(i)}>
                    {item}
                </div>
            ))

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName={{
                    enter: 'enter',
                    enterActive: 'enterActive',
                    leave: 'leave',
                    leaveActive: 'leaveActive',
                    appear: 'appear',
                    appearActive: 'appearActive'
                }}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default ReactAnimation