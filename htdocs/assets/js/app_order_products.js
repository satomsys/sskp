/*
app_order_products
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery', 'views/product_item_block01', 'lib/restrict_nextbutton', 'components/campaign25'], function(require) {
      var $, Campaign25, ProductItemBlock01, RestrictNextbutton, cart, main;
      ProductItemBlock01 = require('views/product_item_block01');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      Campaign25 = require('components/campaign25');
      $ = require('jquery');
      main = require('main');
      cart = main.cart;
      return $(function() {
        var $nextButton, o, restrictNextButton;
        $('.product-item-block02, .set-item').each(function(idx, e) {
          var o;
          o = {
            cart: cart,
            $el: $(e)
          };
          return new ProductItemBlock01(o);
        });
        cart.fetchItemStatus();
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
