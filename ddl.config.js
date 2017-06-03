const webpack = require('webpack'),
    path = require('path')

const vendors = [
    'react',
    'react-dom',
    'mobx',
    'mobx-react',
    'semantic-ui-react'
]

module.exports = {
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].js',
        library: '[name]'
    },
    entry: {
        'lib': vendors
    },
    plugins: [

        new webpack
            .optimize
            .UglifyJsPlugin({sourceMap: false}),
        new webpack.DllPlugin({path: 'manifest.json', name: '[name]', context: __dirname})
    ]
}