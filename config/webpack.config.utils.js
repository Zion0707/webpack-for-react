// webpack 工具函数放置区
const fs = require('fs');
const path = require('path');

// 删除文件夹
const rmDir = function (filePath, callback) {
    fs.stat(filePath, function (err, stat) {
        if (err) return console.log(err);
        if (stat.isFile()) {
            fs.unlink(filePath, callback);
        } else {
            fs.readdir(filePath, function (err, data) {
                if (err) return console.log(err);
                let dirs = data.map((dir) => path.join(filePath, dir));
                let index = 0;
                !(function next() {
                    // 此处递归删除掉所有子文件 后删除当前 文件夹
                    if (index === dirs.length) {
                        fs.rmdir(filePath, callback);
                    } else {
                        rmDir(dirs[index++], next);
                    }
                })();
            });
        }
    });
};

module.exports = {
    rmDir,
};
