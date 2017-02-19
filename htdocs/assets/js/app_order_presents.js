/*
app_order_presents
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery', 'lib/adjust_height', 'views/present_item_block01', 'views/presents_block', 'views/point_information', 'views/present_category_filter', 'views/present_sort'], function(require) {
      var $, AdjustHeight, PointInformation, PresentCategoryFilter, PresentItemBlock01, PresentSort, PresentsBlock, cart, main;
      $ = require('jquery');
      PresentItemBlock01 = require('views/present_item_block01');
      PointInformation = require('views/point_information');
      PresentCategoryFilter = require('views/present_category_filter');
      PresentSort = require('views/present_sort');
      PresentsBlock = require('views/presents_block');
      AdjustHeight = require('lib/adjust_height');
      main = require('main');
      cart = main.cart;
      return $(function() {
        var o, presentsBlock;
        $('.present-item-block02').each(function(idx, e) {
          var o;
          o = {
            cart: cart,
            $el: $(e)
          };
          return new PresentItemBlock01(o);
        });
        /*
        ポイント残高を追従ヘッダから取得するために必要
        */

        cart.fetchItemStatus();
        o = {
          cart: cart,
          $el: $('.point-information-block01')
        };
        new PointInformation(o);
        o = {
          cart: cart,
          $el: $('.presents-block')
        };
        presentsBlock = new PresentsBlock(o);
        o = {
          $el: $('.present-filter-block01'),
          presentsBlock: presentsBlock
        };
        new PresentCategoryFilter(o);
        o = {
          $el: $('.present-sort-block01'),
          presentsBlock: presentsBlock
        };
        new PresentSort(o);
        return new AdjustHeight($('.present-item-block02 > .text-area'));
      });
    });
  });

}).call(this);
