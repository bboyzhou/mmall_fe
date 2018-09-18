/*
* @Author: beat
* @Date:   2018-09-18 15:04:49
* @Last Modified by:   beat
* @Last Modified time: 2018-09-18 15:48:54
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type     = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})