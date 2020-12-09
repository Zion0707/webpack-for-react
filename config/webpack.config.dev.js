// 开发配置
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, '../src/index.js'),
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].js?=' + Date.parse(new Date()),
    },
    module: {
        rules: [],
    },
    devServer: {
        hot: true,
        proxy: {
            '/api': 'http://localhost:7001',
        },
        contentBase: join(__dirname, '../dist'),
        host: '0.0.0.0',
        port: 8086,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
        }),
    ],
    mode: 'development',
};

console.log('--------------测试开发环境----------------');
