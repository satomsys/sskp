/*
商品選択ページカウンター

カートに追加されれば、追加する
*/


(function() {
  define(['require', 'underscore', 'jquery'], function(require) {
    var $, CollectionCounter, sources, _;
    _ = require('underscore');
    $ = require('jquery');
    sources = {};
    sources['reg4ten'] = {
      src: '<div class="reg4-counter-block counter-active"><div class="span ir ir-icon-reg4counter02"></div></div>',
      selector: '.reg4-counter-block.counter-active'
    };
    return CollectionCounter = (function() {
      /*
      初期化
      */

      function CollectionCounter(o) {
        this.$el = o.$el;
        this.parent = o.parent;
        this.cart = o.cart;
        this.type = o.type;
        if (sources[this.type]) {
          this.source = sources[this.type];
          if (!this.isShown()) {
            this.initCartEvents();
            this.onCartChanged();
          }
        }
      }

      /*
      カートのイベントを設定する
      */


      CollectionCounter.prototype.initCartEvents = function() {
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      カートの中身が更新されたら呼び出される
      */


      CollectionCounter.prototype.onCartChanged = function() {
        var item, quantity, shohinCd;
        shohinCd = this.parent.shohinCd();
        item = this.cart.item(shohinCd) || {};
        quantity = item.quantity || 0;
        if (quantity > 0) {
          if (this.isShown()) {
            return this.$el.find(this.source['selector']).show();
          } else {
            return this.$el.find('.img-area').append(this.source['src']);
          }
        } else {
          return this.$el.find(this.source['selector']).hide();
        }
      };

      /*
      表示されているかどうか
      */


      CollectionCounter.prototype.isShown = function() {
        return this.$el.find(this.source['selector']) && this.$el.find(this.source['selector']).length > 0;
      };

      return CollectionCounter;

    })();
  });

}).call(this);
