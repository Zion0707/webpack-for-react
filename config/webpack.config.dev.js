// 开发配置
const { resolve, join } = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = {
    // 设置测试服务器
    devServer: {
        contentBase: join(__dirname, '../dist'),
        hot: true,
        historyApiFallback: true, //防止react路由刷新后，找不到资源
        proxy: {
            '/api': 'http://localhost:7001',
        },
        host: '0.0.0.0',
        port: 8086,
    },

    mode: 'development',

    // 引用公共部分
    ...baseConfig,
};

console.log('--------------测试开发环境----------------');
