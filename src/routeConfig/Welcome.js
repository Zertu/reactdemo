import {Container, Header, Icon} from 'semantic-ui-react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <Container text>
                    <Header as='h1'>欢迎</Header>
                    <Header as='h3'>本网站用于食品安全数据可视化。</Header>
                    <p>食品安全的数据可视化研究尚不多见，通过研究这方面的内容，可以更方便的让研究人员研究食品安全方面的问题，让民众以合理的方式对待和处理食品安全问题。</p>
                    <p>本网站源代码地址<Icon name='github' size='large'/>
                        <a href="https://github.com/Zertu/reactdemo">Github</a>
                    </p>
                    <p>如果发现bug或不足之处，请联系我<a href='mailto:aa7864548@gmail.com'><Icon name='mail outline' size='large'/></a>
                    </p>
                    <p>或者去Github提Issue或者PR <a href="https://github.com/Zertu/reactdemo/issues"><Icon name='comments' size='large'/></a> </p>
                    <p>感谢</p>
                </Container>
            </div>
        )
    }
}

export default Welcome