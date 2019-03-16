/*
* @Author: beat
* @Date:   2018-09-23 11:28:41
* @Last Modified by:   beat
* @Last Modified time: 2018-09-26 17:22:44
*/
var _mm = require('util/mm.js');

var _product ={
    // 获取产品列表
    getProductList : function(listParam,resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId,resolve,reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;