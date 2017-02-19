/*
app_order_payment
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery', 'views/confirm_block01', 'lib/restrict_nextbutton'], function(require) {
      var $, ConfirmBlock01, RestrictNextbutton, cart, main;
      $ = require('jquery');
      ConfirmBlock01 = require('views/confirm_block01');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      main = require('main');
      cart = main.cart;
      return $(function() {
        var $nextButton, changeCard, o, restrictNextButton, setCreditcardForm;
        o = {
          $el: $('.confirm-block01'),
          $target: $('.panel-selectable01'),
          'data-selectable-group': 'pay_type'
        };
        new ConfirmBlock01(o);
        $nextButton = $('.primary .button-next01');
        o = {
          $nextButton: $nextButton,
          isDisabledMode: function() {
            var methodChecked;
            methodChecked = false;
            $('input[name="pay_type1"]').each(function(idx, e) {
              methodChecked = methodChecked || e.checked || false;
            });
            if (methodChecked === false) {
              return true;
            }
          }
        };
        restrictNextButton = new RestrictNextbutton(o);
        $('input[name="pay_type1"]').on('change', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        setCreditcardForm = function(str) {
          if (str === 'card_registered') {
            $('.card-radio01-row').show();
            return $('.card-radio02-row').hide();
          } else if (str === 'card_new') {
            $('.card-radio01-row').hide();
            return $('.card-radio02-row').show();
          }
        };
        changeCard = function(e) {
          return setCreditcardForm(e.target.value);
        };
        $('input[name="creditcard_select"]').on('change', changeCard);
        return $('input[name="creditcard_select"]').each(function(idx, e) {
          if (e.checked) {
            setCreditcardForm(e.value);
          }
        });
      });
    });
  });

}).call(this);
