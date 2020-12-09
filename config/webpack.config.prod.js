// 生产配置
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { rmDir } = require('./webpack.config.utils.js');

// 清空dist的旧文件
rmDir(resolve(__dirname, '../dist'), function () {});

module.exports = {
    entry: resolve(__dirname, '../src/index.js'),

    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        publicPath: './', // 或cdn地址 https://cdn.example.com/
    },

    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    // 8kb 以下采用base64方式
                    limit: 8 * 1024,
                },
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    plugins: [
        // 打包html模板
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            favicon: resolve(__dirname, '../src/statics/imgs/favicon.ico'),
        }),
    ],

    resolve: {
        // 省略编写文件后缀名
        extensions: ['.js', '.jsx', '.css', '.less'],
        // 使用别名，简化引用路径
        alias: {
            _less: resolve(__dirname, '../src/less'),
        },
    },

    mode: 'production',
};

console.log('--------------生产打包环境----------------');
