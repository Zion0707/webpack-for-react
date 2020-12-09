// 生产配置
const { resolve } = require('path');
const { rmDir } = require('./webpack.config.utils.js');
const baseConfig = require('./webpack.config.base.js');

// 清空dist的旧文件
rmDir(resolve(__dirname, '../dist'), function () {});

module.exports = {
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
