/*
* @Author: zj
* @Date:   2018-09-05 22:39:48
* @Last Modified by:   beat
* @Last Modified time: 2018-09-12 21:18:13
*/
const path        = require('path');
var Ex            = require('extract-text-webpack-plugin');

var webpack       = require('webpack');

// 环境变量的配置 dev /online
var WEBPACK_ENV   = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name){
  return{
      template : './src/view/' + name + '.html',
      filename : 'view/' + name + '.html',
      inject   : true,
      hash     : true,
      chunks   : ['common',name]
  };
};

const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack config
module.exports = {
  entry: {
    'common': ['./src/page/common/index.js'],
    'index' : ['./src/page/index/index.js'],
    'login' : ['./src/page/login/login.js'],
},
  output: {
    filename : 'js/[name].js',
    path : path.resolve(__dirname, 'dist'),
    publicPath : '/dist'
  },
  externals:{
    'jquery':'window.jQuery'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: Ex.extract('style-loader', 'css-loader','less-loader') },
      { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' }
    ]
  },
  plugins:[
    // 独立通用模块到js/base.js
    new webpack.optimize.CommonsChunkPlugin({
        name:'common',
        filename:'js/base.js'
    }),
    // 把cssd单独打包到文件里
    new Ex("css/[name].css"),
    // html模板的处理
    new HtmlWebpackPlugin(getHtmlConfig('index')),
    new HtmlWebpackPlugin(getHtmlConfig('login')),
  ]
};

if(WEBPACK_ENV==='dev'){
  config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}