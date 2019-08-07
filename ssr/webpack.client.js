// 客户端配置。
const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');

// 将客户端同构的代码打包成index.js
const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    module: {
        rules: [{
            test: /\.css?$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
}

module.exports = merge(config, clientConfig);