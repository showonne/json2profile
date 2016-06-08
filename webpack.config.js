var WebpackBrowserPlugin = require('webpack-browser-plugin')

module.exports = {

    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules'/,
                loaders: ['babel']
            },
            {
                test: /\.vue$/,
                loaders: ['vue']
            },
            {
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.styl$/,
                loaders: ['style', 'css', 'stylus']
            },
            {
                test: /\.(eot|svg|ttf|woff)$/,
                loaders: ['url']
            },
            {
                test: /\.(png|gif|jpg)$/,
                loaders: ['file']
            },{
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!stylus'
        }
    },
    babel: {
        presets: ['es2015', 'stage-0']
    },
    plugins: [new WebpackBrowserPlugin()]

}