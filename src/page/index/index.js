/*
* @Author: zj
* @Date:   2018-09-05 20:57:45
* @Last Modified by:   beat
* @Last Modified time: 2018-09-22 21:26:23
*/
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide         = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
var _mm = require('util/mm.js');

$(function(){
    // 渲染banner的html
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev')? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    })
});