import {
    Container,
    Select,
} from 'semantic-ui-react'

import Chart from 'rc-echarts'
import React from 'react'
import fetch from '../../Fetch'

class Datavisualization extends React.Component {
    constructor() {
        super()
        this.state = {
        options: {
            title: {
                text: '饿了么黑心作坊'
            },
            tooltip: {
                trigger: 'axis'
            },
            series: {
            name: '微博条数',
            type: 'line',
            data: [],
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        },
            xAxis: {
                data: []
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 5,
                    color: '#096'
                }, {
                    gt: 5,
                    lte: 10,
                    color: '#ffde33'
                }, {
                    gt: 10,
                    lte: 15,
                    color: '#ff9933'
                }, {
                    gt: 15,
                    lte: 20,
                    color: '#cc0033'
                }, {
                    gt: 20,
                    lte: 25,
                    color: '#660099'
                }, {
                    gt: 25,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            }
        },
        url:'eleme',
        echart:null
    }
    }
    ready = async(echart) => {
        echart.showLoading()
        const {options,url} = this.state,
        rows = await fetch('http://139.224.232.97:3001/'+url+'all', {
            method: 'get'
        }),
        counts = rows[0]
        options.xAxis.data=counts.map(count=>count.days)
        options.series.data=counts.map(count=>count.count)
        this.setState({options:options,echart:echart})
        echart.setOption(options)
        echart.hideLoading()
    }
        handleEvent=async (event,d)=>{
        let data=d.value,
        {url,options,echart}=this.state      
        echart.showLoading()
        switch (data){
        case '黄记煌三汁焖锅再曝丑闻':
        url='stewpot'
        break
        case '胶水牛排':
        url='beef'
        break
        case '饿了么黑心作坊':
        url='eleme'
        break
    } 
        options.title.text=data        
        const rows = await fetch('http://139.224.232.97:3001/'+url+'all', {
            method: 'get'
        }),
        counts = rows[0]
        options.xAxis.data=counts.map(count=>count.days)
        options.series.data=counts.map(count=>count.count)
        this.setState({options:options})
        echart.setOption(options)
        echart.hideLoading()
        }
    render() {
        const {options} = this.state,
        eventList=[
        {text:'饿了么黑心作坊',value:'饿了么黑心作坊'},
        {text:'黄记煌三汁焖锅再曝丑闻',value:'黄记煌三汁焖锅再曝丑闻'},
        {text: '胶水牛排',value:'胶水牛排'}
      ]
        return ( 
        <Container>
        <Select onChange={this.handleEvent} placeholder='选择具体事件' options={eventList}/>
             <Chart ref='charts' options={options}
            onReady = {this.ready}/>
        </Container>
        )
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        })
    }
}

export default Datavisualization