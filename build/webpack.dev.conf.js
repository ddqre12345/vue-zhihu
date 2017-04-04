const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {
  module: {
    //通过传入一些配置来获取rules配置，此处传入了sourceMap: false,表示不生成sourceMap
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({ // 编译时配置的全局变量
      'process.env': config.dev.env //当前环境为开发环境
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(), //热更新插件
    new webpack.NoEmitOnErrorsPlugin(), //不触发错误,即编译后运行的包正常运行
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({  //自动生成html文件,比如编译后文件的引入
      filename: 'index.html', //生成的文件名
      template: 'index.html', //模板
      inject: true
    }),
    new FriendlyErrorsPlugin() //友好的错误提示
  ]
});
