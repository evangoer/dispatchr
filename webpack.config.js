'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './utils/index.js',
    output: {
        library: 'Dispatchr',
        libraryTarget: 'var',
        path: './dist',
        filename: 'dispatchr.min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: require.resolve('babel-loader') }
        ]
    },
    stats: {
        colors: true
    }
};
