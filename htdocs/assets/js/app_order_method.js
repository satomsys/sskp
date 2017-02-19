/*
app_order_method
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery', 'views/order_information_table01', 'views/order_subtotal_information_table01', 'views/confirm_block01', 'lib/restrict_nextbutton', 'components/order_include_list01'], function(require) {
      var $, ConfirmBlock01, OrderInformationTable01, OrderSubtotalInformationTable01, RestrictNextbutton, cart, main;
      $ = require('jquery');
      OrderInformationTable01 = require('views/order_information_table01');
      OrderSubtotalInformationTable01 = require('views/order_subtotal_information_table01');
      ConfirmBlock01 = require('views/confirm_block01');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      main = require('main');
      cart = main.cart;
      return $(function() {
        var $nextButton, chnageNextButtonLabel, o, productSelectPageUrl, restrictNextButton;
        $('table.order-information-table01').each(function(idx, e) {
          var o;
          o = {
            $el: $(e),
            cart: cart,
            pageType: 'method'
          };
          return new OrderInformationTable01(o);
        });
        cart.fetchItemStatus();
        /*
        カートの商品がなくなったらリダイレクトさせるため、 商品選択ページ(ID437)の URL 設定
        */

        productSelectPageUrl = $('#product-select-page-link').attr('href');
        cart.productSelectPageUrl(productSelectPageUrl);
        cart.backProductSelectPageWhenZeroProduct(true);
        $('table.order-subtotal-information-table01').each(function(idx, e) {
          var o;
          o = {
            $el: $(e),
            cart: cart
          };
          return new OrderSubtotalInformationTable01(o);
        });
        o = {
          $el: $('.confirm-block01'),
          $target: $('.panel-selectable01'),
          'data-selectable-group': 'ordering_method'
        };
        new ConfirmBlock01(o);
        $nextButton = $('.primary .button-next01');
        o = {
          $nextButton: $nextButton,
          isDisabledMode: function() {
            var methodChecked, quantity;
            methodChecked = false;
            $('input[name="ordering_method"]').each(function(idx, e) {
              methodChecked = methodChecked || e.checked || false;
            });
            if (methodChecked === false) {
              return true;
            }
            quantity = cart.productQuantity();
            return quantity <= 0 || (quantity == null);
          }
        };
        restrictNextButton = new RestrictNextbutton(o);
        cart.on('change', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        $('input[name="ordering_method"]').on('change', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        chnageNextButtonLabel = function(e) {
          var $nextPageButton, inputId, label;
          inputId = e.target.id;
          $nextPageButton = $('#next-page-button');
          label = inputId === 'input_order_quick' ? $nextPageButton.attr('data-label-go-confirm') : $nextPageButton.attr('data-label-go-default');
          if ($nextPageButton.get(0).tagName.match(/^input$/i)) {
            $nextPageButton.attr('value', label);
            return;
          }
          return $nextPageButton.innerHTML = label;
        };
        $('input[name="ordering_method"]').on('change', chnageNextButtonLabel);
        return cart.backProductSelectPageWhenZeroProduct(true);
      });
    });
  });

}).call(this);
