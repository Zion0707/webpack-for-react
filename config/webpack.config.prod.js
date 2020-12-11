// 生产配置
const { resolve } = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = {
    // 输出打包文件
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        publicPath: './', // 或cdn地址 https://cdn.example.com/
    },

    mode: 'production',

    // 引用公共部分
    ...baseConfig,
};

console.log('--------------生产打包环境----------------');
