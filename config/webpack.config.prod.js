// 生产配置
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, '../src/index.js'),
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name][chunkhash:8].js',
        publicPath: './', // 或cdn地址 https://cdn.example.com/
    },
    module: {
        rules: [],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../public/index.html'),
        }),
    ],
    mode: 'production',
};

console.log('--------------生产打包环境----------------');
