// 开发配置
const { join } = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = {
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
        proxy: {
            '/api': 'http://localhost:7001',
        },
        host: '0.0.0.0',
        port: 8086,
    },

    mode: 'development',

    // 开启 source-map 调试模式
    devtool: 'source-map',

    // 引用公共部分
    ...baseConfig,
};

console.log('--------------测试开发环境----------------');
