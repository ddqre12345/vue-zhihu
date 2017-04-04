require('./check-versions')();

process.env.NODE_ENV = 'production'; //设置当前环境为production

const ora = require('ora'); //终端显示的转轮loading
const rm = require('rimraf');  //node环境下rm -rf的命令库
const path = require('path');  //文件路径处理库
const chalk = require('chalk');  //终端显示带颜色的文字
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf'); //生产环境下的webpack配置


// 在终端显示ora库的loading效果
const spinner = ora('building for production...');
spinner.start();

// 删除已编译文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  //在删除完成的回调函数中开始编译
  webpack(webpackConfig, function (err, stats) {
    spinner.stop(); //停止loading
    if (err) throw err;
    // 在编译完成的回调函数中,在终端输出编译的文件
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
});
