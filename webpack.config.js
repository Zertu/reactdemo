const webpack = require('webpack'),
    path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        index: ['./src/main.js']
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.js|jsx$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0']
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};