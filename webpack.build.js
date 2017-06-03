const webpack = require('webpack'), {resolve} = require('path'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
    //页面入口文件配置
    entry: ['./main.js'],
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',
    module: {
        //加载器配置
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            }, {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({context: __dirname, manifest: require('./manifest.json')}),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin({sourceMap: false})
    ]
}
