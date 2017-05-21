import { Container, Header } from 'semantic-ui-react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <Container text>
                <Header as='h2'>欢迎</Header>
                </Container>
            </div>
        )
    }
}



export default Welcome