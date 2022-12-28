const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                options: { 
                    presets: ['@babel/env','@babel/preset-react'] 
                },
            }
        ]
    },
}