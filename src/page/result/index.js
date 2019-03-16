/*
* @Author: beat
* @Date:   2018-09-18 15:04:49
* @Last Modified by:   beat
* @Last Modified time: 2018-10-25 11:17:21
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type     = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    if (type === 'payment') {
        var orderNumber     = _mm.getUrlParam('orderNumber'),
            $orderNumber    = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
})