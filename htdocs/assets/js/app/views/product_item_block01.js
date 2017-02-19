(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'views/item_block01', 'data/balloon_contents', 'lib/collection_counter'], function(require) {
    var $, Backbone, CollectionCounter, ItemBlock01, ProductItemBlock01, balloonContents, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    ItemBlock01 = require('views/item_block01');
    balloonContents = require('data/balloon_contents');
    CollectionCounter = require('lib/collection_counter');
    /*
    商品選択ブロック
    */

    ProductItemBlock01 = (function(_super) {
      __extends(ProductItemBlock01, _super);

      function ProductItemBlock01() {
        _ref = ProductItemBlock01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      ProductItemBlock01.prototype.initialize = function(o) {
        this.inCartCssClass = 'product-item-in-cart';
        this.disabledCssClass = 'product-panel-disabled';
        this.$balloonAddLoadingSrc = $(balloonContents['balloonAddLoadingSrc']);
        this.$balloonRemoveLoadingSrc = $(balloonContents['balloonRemoveLoadingSrc']);
        this.$balloonSuccessSrc = $(balloonContents['balloonSuccessSrc']);
        this.$balloonSetItemSuccessSrc = $(balloonContents['balloonSetItemSuccessSrc']);
        this.$balloonRemoveSuccessSrc = $(balloonContents['balloonRemoveSuccessSrc']);
        this.currentActionType = null;
        ProductItemBlock01.__super__.initialize.call(this, o);
        this.collectionCounter = null;
        if (o.$el.attr('data-collection-counter')) {
          return this.collectionCounter = new CollectionCounter({
            $el: o.$el,
            parent: this,
            cart: o.cart,
            type: o.$el.attr('data-collection-counter')
          });
        }
      };

      /*
      カートに追加
      */


      ProductItemBlock01.prototype.addToCart = function(e) {
        var $button;
        e.preventDefault();
        if (this.isButtonDisabled()) {
          return;
        }
        this.currentActionType = 'add';
        this.cart.addProduct(this.shohinCd(), 1);
        $button = this.$el.find('.add-to-cart-button01');
        return this.balloon().content(this.$balloonAddLoadingSrc).constrainedElement($button).show();
      };

      /*
      カートから削除
      */


      ProductItemBlock01.prototype.removeFromCart = function(e) {
        var $button;
        e.preventDefault();
        if (this.isButtonDisabled()) {
          return;
        }
        this.currentActionType = 'remove';
        this.cart.removeProduct(this.shohinCd());
        $button = this.$el.find('.remove-from-cart');
        return this.balloon().content(this.$balloonRemoveLoadingSrc).constrainedElement($button).show();
      };

      /*
      ビューを更新する
      */


      ProductItemBlock01.prototype.updateView = function() {
        if (this.currentActionType === 'remove') {
          this.showRemoveCompleteBalloon();
        }
        if (this.currentActionType === 'add') {
          this.showCompleteBalloon();
        }
        this.currentActionType = null;
        return ProductItemBlock01.__super__.updateView.call(this);
      };

      /*
      カートに追加完了したときのバルーン表示
      */


      ProductItemBlock01.prototype.showCompleteBalloon = function() {
        var $successSrc, isSetItem;
        if (!this._balloon01) {
          return;
        }
        if (this._balloon01.isActive() === false) {
          return;
        }
        if (this.currentActionType === 'remove') {
          this._balloon01.hide();
          return;
        }
        if (this.currentActionType === 'add') {
          isSetItem = this.cart.cartItem(this.shohinCd()).isSetItem();
          if (isSetItem === false && this.quantity() === this.cart.cartItem(this.shohinCd()).quantity) {
            this._balloon01.hide();
            return;
          }
          $successSrc = isSetItem ? this.$balloonSetItemSuccessSrc : this.$balloonSuccessSrc;
          return this._balloon01.content($successSrc).show().autohide();
        }
      };

      /*
      カートから商品を削除したときのバルーン表示
      */


      ProductItemBlock01.prototype.showRemoveCompleteBalloon = function() {
        var $button, item;
        $button = this.$el.find('.add-to-cart-button01');
        item = this.cart.item(this.shohinCd());
        if (item && item.quantity > 0) {
          this.balloon().hide();
          return;
        }
        return this.balloon().content(this.$balloonRemoveSuccessSrc).constrainedElement($button).show().autohide();
      };

      return ProductItemBlock01;

    })(ItemBlock01);
    return ProductItemBlock01;
  });

}).call(this);
