/**
 * Created by miralba on 8/5/17.
 */

const path = require('path');
const webpack = require('webpack');


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './src'),
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    }
};
