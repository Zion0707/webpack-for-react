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
        ],
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
        // 打包html模板
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
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

    mode: 'development',
};

console.log('--------------测试开发环境----------------');
