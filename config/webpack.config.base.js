// 公共配置
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: resolve(__dirname, '../src/index.js'),

    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 8kb 以下采用base64方式
                            limit: 8 * 1024,
                        },
                    },
                ],
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
                test: /\.(ttf|eot|woff|woff2|svg)/,
                loader: 'file-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['syntax-dynamic-import'],
                },
            },
        ],
    },

    plugins: [
        // // 查看打包大小
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 3001,
        // }),
        // 清除已打包的生产文件
        new CleanWebpackPlugin(),
        // 打包html模板
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            favicon: resolve(__dirname, '../src/statics/icons/favicon.ico'),
        }),
    ],

    resolve: {
        // 省略编写文件后缀名
        extensions: ['.js', '.jsx', '.css', '.less'],
        // 使用别名，简化引用路径
        alias: {
            _const: resolve(__dirname, '../src/const'),
            _less: resolve(__dirname, '../src/less'),
            _statics: resolve(__dirname, '../src/statics'),
            _pages: resolve(__dirname, '../src/pages'),
            _components: resolve(__dirname, '../src/components'),
        },
    },
};
