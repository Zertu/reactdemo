import React, { Component } from 'react'

import {createStore} from 'redux'

const reducer=(state,action)=>{
    console.log(action)
    return state++
}
const store = createStore(reducer,0)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({type:'fuck',payload:1})
class Layout extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Layout