// 开发配置
const { join } = require('path');
const baseConfig = require('./webpack.config.base.js');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const devConfig = {
    module: {
        rules: [
            // 处理样式资源
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },

    plugins: [
        // 启用 HMR 热加载，记得把devServer中的hot属性设为true
        new webpack.HotModuleReplacementPlugin(),
    ],

    // 设置测试服务器
    devServer: {
        // 找到打包文件文件
        contentBase: join(__dirname, '../dist'),
        // 开启热更新
        hot: true,
        //防止react路由刷新后，找不到资源
        historyApiFallback: true,
        // 一切服务都启用gzip 压缩
        compress: true,
        // 设置代理服务器
        proxy: {
            '/api': 'http://localhost:7001',
        },
        host: '0.0.0.0',
        port: 8086,
    },

    mode: 'development',
};

// 合并配置对象
module.exports = merge(baseConfig, devConfig);

console.log('--------------测试开发环境----------------');
