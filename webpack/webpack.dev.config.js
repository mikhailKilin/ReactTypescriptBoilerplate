'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')

module.config = {
    entry: '../client/index.tsx',
    output:{
        path: __dirname + '/out',
        filename: [name].js
    },
    module:{
        loaders:[
            {test:'js|jsx' }
        ]
    }
    watch: true,
    watchOptions:{
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'source-map' : null,
    plugins:[

    ]
}