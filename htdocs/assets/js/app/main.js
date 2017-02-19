/*
main
*/


(function() {
  define(['require', 'jquery', 'lib/adjust_height', 'controllers/device', 'controllers/cart', 'views/header_cart_button'], function(require) {
    var $, AdjustHeight, Cart, Device, HeaderCartButton, expt, is_win;
    if (window.ssk && window.ssk.app) {
      return window.ssk.app;
    }
    $ = require('jquery');
    HeaderCartButton = require('views/header_cart_button');
    $('html').addClass('js-enabled');
    is_win = navigator.userAgent.match(/Windows/);
    if (is_win) {
      $('html').addClass('os-win');
    }
    Cart = require('controllers/cart');
    AdjustHeight = require('lib/adjust_height');
    expt = {};
    expt.cart = new Cart();
    /*
    URL 設定
    */

    expt.cart.cartPageUrl('cart.html');
    expt.cart.productSelectPageUrl('product_list.html');
    window.ssk = window.ssk || {};
    window.ssk.app = expt;
    window.ssk.app.ua = {
      lteIE6: typeof window.addEventListener === 'undefined' && typeof document.documentElement.style.maxHeight === 'undefined',
      lteIE7: typeof window.addEventListener === 'undefined' && typeof document.querySelectorAll === 'undefined',
      lteIE8: typeof window.addEventListener === 'undefined' && typeof document.getElementsByClassName === 'undefined',
      IE: document.uniqueID,
      Firefox: window.sidebar,
      Opera: window.opera,
      Webkit: !document.uniqueID && !window.opera && !window.sidebar && typeof window.localStorage !== "undefined",
      Mobile: typeof window.orientation !== 'undefined'
    };
    Device = require('controllers/device');
    window.ssk.app.device = new Device();
    $(function() {
      var $header_search_btn, adjustHeightGroups, o;
      o = {
        cart: expt.cart,
        $el: $('.header-cart-button')
      };
      new HeaderCartButton(o);
      adjustHeightGroups = [];
      $('[data-adjust-height-group]').each(function(idx, e) {
        return adjustHeightGroups.push($(e).attr('data-adjust-height-group'));
      });
      adjustHeightGroups = _.uniq(adjustHeightGroups);
      _.each(adjustHeightGroups, function(e) {
        var $parent, parent_pre_style, selector, tab_content_block;
        selector = "[data-adjust-height-group=\"" + e + "\"]";
        tab_content_block = $(selector).parents('.tab-content-block');
        if (window.ssk.app.ua.IE) {
          $parent = tab_content_block.parent();
          parent_pre_style = $parent.attr('style');
          $parent.css('posiiton', 'absolute');
        }
        tab_content_block.each(function() {
          return $(this).data('pre_style', $(this).attr('style')).show();
        });
        new AdjustHeight($(selector));
        tab_content_block.each(function() {
          $(this).removeAttr('style');
          if ($(this).data('pre_style')) {
            return $(this).attr('style', $(this).data('pre_style'));
          }
        });
        if (parent_pre_style) {
          return $parent.removeAttr('style').attr('style', parent_pre_style);
        }
      });
      $('.summary-block').each(function(idx, e) {
        return new AdjustHeight($(e).find('.text-information-block, .table-information-block'));
      });
      $header_search_btn = $('.header-middle01 .keyword-search-block input[type=image]');
      if ($header_search_btn.size()) {
        return $header_search_btn.data('base_src', $header_search_btn.attr('src')).data('hover_src', $header_search_btn.attr('src').replace(/\.(gif|jpe?g|png)$/, function($0) {
          return '_o' + $0;
        })).on('mouseenter', function(evt) {
          return $(this).attr('src', $(this).data('hover_src'));
        }).on('mouseleave', function(evt) {
          return $(this).attr('src', $(this).data('base_src'));
        });
      }
    });
    return window.ssk.app;
  });

}).call(this);
