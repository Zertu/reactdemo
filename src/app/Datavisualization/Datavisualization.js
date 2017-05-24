import Chart from 'rc-echarts'
import React from 'react'

class Datavisualization extends React.Component {
    constructor() {
        super()
        this.state = {
            someKey: 'someValue'
        }
    }
    ready(echart) {
        console.log(echart)
    }
    render() {
        const options = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: [
                    '衬衫',
                    '羊毛衫',
                    '雪纺衫',
                    '裤子',
                    '高跟鞋',
                    '袜子'
                ]
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [
                        5,
                        20,
                        36,
                        10,
                        10,
                        20
                    ]
                }
            ]
        }
        return (<div><Chart options={options} onReady={this.ready}/><Sb /></div>)
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'})
    }
}

export default Datavisualization
