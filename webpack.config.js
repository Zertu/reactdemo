const webpack = require('webpack'), {resolve} = require('path'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
    //页面入口文件配置
    entry: [
        'whatwg-fetch',
        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading only- means to only hot reload for
        // successful updates

        './main.js'
    ],
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // enable HMR on the server
        port: 3000,
        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules']
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
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    plugins: [
        new webpack.DllReferencePlugin({context: __dirname, manifest: require('./manifest.json')}),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),

        // 打开浏览器地址
        new OpenBrowserPlugin({url: 'http://localhost:3000'})
    ]
}
