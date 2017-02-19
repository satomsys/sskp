/*
cart validator
カートのクライアントバリデーションが必要な場合このクラスを使用する
controlelrs/cart に入れるか lib/cart_ajax に入れるかは内容による
*/


(function() {
  define(['require', 'underscore'], function(require) {
    var CartValidator, _;
    _ = require('underscore');
    CartValidator = (function() {
      function CartValidator() {}

      CartValidator.beforeSyncValidation = function(cart) {
        return null;
      };

      return CartValidator;

    })();
    return CartValidator;
  });

}).call(this);
