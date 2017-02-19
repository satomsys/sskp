/*
app_order_cart
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'jquery', 'main', 'views/order_information_table01', 'views/order_subtotal_information_table01', 'views/cart_clear_button', 'lib/restrict_nextbutton', 'components/campaign25'], function(require) {
      var $, Campaign25, CartClearButton, OrderInformationTable01, OrderSubtotalInformationTable01, RestrictNextbutton, cart, main;
      $ = require('jquery');
      OrderInformationTable01 = require('views/order_information_table01');
      OrderSubtotalInformationTable01 = require('views/order_subtotal_information_table01');
      CartClearButton = require('views/cart_clear_button');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      Campaign25 = require('components/campaign25');
      main = require('main');
      cart = main.cart;
      return $(function() {
        var $nextButton, clearButtonOptions, o, restrictNextButton;
        $('table.order-information-table01').each(function(idx, e) {
          var o;
          o = {
            $el: $(e),
            cart: cart,
            pageType: 'cart'
          };
          return new OrderInformationTable01(o);
        });
        /*
        プレゼント品の制限に必要なポイント残高を取得する
        */

        cart.fetchItemStatus();
        clearButtonOptions = {
          $el: $('.button-cart-clear'),
          cart: cart
        };
        new CartClearButton(clearButtonOptions);
        $('table.order-subtotal-information-table01').each(function(idx, e) {
          var o;
          o = {
            $el: $(e),
            cart: cart
          };
          return new OrderSubtotalInformationTable01(o);
        });
        $nextButton = $('.primary .button-next01');
        o = {
          $nextButton: $nextButton,
          isDisabledMode: function() {
            var quantity;
            quantity = cart.productQuantity();
            return quantity <= 0 || (quantity == null);
          }
        };
        restrictNextButton = new RestrictNextbutton(o);
        cart.on('change', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        return new Campaign25({
          cart: cart
        });
      });
    });
  });

}).call(this);
