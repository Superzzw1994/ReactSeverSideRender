const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')
const severconfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()]
} 
module.exports = merge(config, severconfig)