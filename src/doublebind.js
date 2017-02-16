import React from 'react'

class Doublebind extends React.Component{
    constructor(prop){
        super(prop)
        this.state={
            fuck:'fuck'
        }
    }
    handlechange=(val)=>{
        console.log(val)
        this.setState({fuck:val})
    }
    render(){
        return (
        <div> <Fuck val={this.state.fuck} onChange={this.handlechange} /> {this.state.fuck} </div>
        )
    }
}



class Fuck extends React.Component {
    constructor(prop){
        super(prop)
    }
    handlechange=(e)=>{
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div>
                <input value={this.props.val} onChange={this.handlechange} type='text' />
            </div>
        )
    }
}



export default Doublebind