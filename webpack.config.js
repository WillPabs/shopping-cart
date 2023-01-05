const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
    },    
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
        }),
        new webpack.ProvidePlugin({
            'React':     'react'
          })
      ],
    module:{
        rules:[
            {
                test: /\.(avif|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                options: { 
                    presets: [
                        '@babel/env',
                        ['@babel/preset-react', {'runtime': 'automatic'}]
                    ] 
                },
            }
        ]
    },
}