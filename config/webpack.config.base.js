// 公共配置
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, '../src/index.js'),

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
            _pages: resolve(__dirname, '../src/pages'),
        },
    },
};