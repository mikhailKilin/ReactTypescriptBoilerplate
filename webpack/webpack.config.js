'use strict'
const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')
const validate = require('webpack-validator')
var path = require("path");
module.exports = validate({
    entry: ['webpack-dev-server/client?http://0.0.0.0:2992',
        'webpack/hot/only-dev-server',
        './client/index.tsx'],
    output: {
        path: __dirname + '/out',
        filename: "[name].js"
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ["", ".web.js", ".js", ".§", ".ts", ".tsx"]
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
    debug: true,
    module: {
        loaders: [
            {
                test: /\.(ts|tsx)(\?.*)?$/,
                exclude: /\/node_modules\//,
                loaders: ['react-hot', 'ts-loader']
            },
            {
                test: /\.(js|jsx)(\?.*)?$/,
                exclude: /\/node_modules\//,
                loaders: ['react-hot', 'babel-loader?cacheDirectory'],
                include: path.join(__dirname, "..", "client")
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)(\?.*)?$/,
                exclude: /\/node_modules\//,
                loaders: ['url-loader?limit=100000']
            },
            {
                test: /\.(css)(\?.*)?$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(scss)(\?.*)?$/,
                loader: 'style-loader!css-loader!sass-loader'
            }]
    },

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? "cheap-module-eval-source-map" : "source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()]
})