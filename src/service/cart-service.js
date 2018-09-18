/*
* @Author: beat
* @Date:   2018-09-17 17:32:48
* @Last Modified by:   beat
* @Last Modified time: 2018-09-17 17:42:29
*/
var _mm = require('util/mm.js');

var _cart ={
    // 获取购物车数量
    getCartCount : function(resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('./cart/get_cart_product.do'),
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _cart;