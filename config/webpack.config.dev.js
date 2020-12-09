// 开发配置
const { resolve, join } = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = {
    devServer: {
        hot: true,
        proxy: {
            '/api': 'http://localhost:7001',
        },
        contentBase: join(__dirname, '../dist'),
        host: '0.0.0.0',
        port: 8086,
    },

    mode: 'development',

    // 引用公共部分
    ...baseConfig,
};

console.log('--------------测试开发环境----------------');
