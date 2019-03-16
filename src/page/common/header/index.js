/*
* @Author: beat
* @Date:   2018-09-18 10:41:27
* @Last Modified by:   beat
* @Last Modified time: 2018-09-23 11:35:23
*/
require('./index.css');
var _mm   = require('util/mm.js');
// 通用页面头部
var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        var keyword=_mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if (keyword) {
            $('#search-input').val(keyword);
        };
    },
    bindEvent : function(){
        var _this=this;
        // 点击搜索按钮后，做搜索提交
        $('#search-btn').click(function(){
            _this.seachSubmit();
        });
        // 输入回车后，做搜索提交
        $('#search-input').keyup(function(e){
            // 13是回车的keyCode
            if (e.keyCode ===13) {
                _this.seachSubmit();
            }
        });
    },
    // 搜索的提交
    seachSubmit : function(){
        var keyword =  $.trim($('#search-input').val());
        // 提交有keyword，正常跳转到list页
        if (keyword) {
            window.location.href = './list.html?keyword=' + keyword;
        // 如果keywor为空，直接返回首页
        }else{
            _mm.goHome();
        }
    }
};

header.init();