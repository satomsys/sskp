/*
header cart button
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'underscore', 'jquery', 'lib/comma'], function(require) {
    var $, Backbone, Comma, HeaderCartButton, _;
    Backbone = require('backbone');
    _ = require('underscore');
    $ = require('jquery');
    Comma = require('lib/comma');
    /*
    ページヘッダのついてくる部分にある、お買い物かご情報兼ボタン
    */

    HeaderCartButton = (function(_super) {
      __extends(HeaderCartButton, _super);

      function HeaderCartButton(obj) {
        if (!obj.cart) {
          throw new Error('cart is not defined');
        }
        if (!obj.$el) {
          throw new Error('$el is not defined');
        }
        this.cart = obj.cart;
        this.$el = obj.$el;
        this.initCartEvents(obj.cart);
        this.cart.headerCartButton(this);
      }

      /*
      カートのイベントを設定する
      */


      HeaderCartButton.prototype.initCartEvents = function() {
        this.cart.on('change', _.bind(this.onCartChanged, this));
        return this;
      };

      /*
      カートの中身が変更されたときに呼び出されるコールバック関数
      */


      HeaderCartButton.prototype.onCartChanged = function() {
        this.updateView();
        return this;
      };

      HeaderCartButton.prototype.putDataInText = function($el, data) {
        if (data === null) {
          return $el.text();
        }
        return $el.text(data).text();
      };

      /*
      カート内の商品個数の合計の取得/設定
      */


      HeaderCartButton.prototype.productQuantity = function(quantity) {
        var $el;
        $el = this.$el.find('.product-quantity');
        return Number(this.putDataInText($el, quantity));
      };

      /*
      カート内のプレゼント品個数の合計の取得/設定
      */


      HeaderCartButton.prototype.presentQuantity = function(quantity) {
        var $el;
        $el = this.$el.find('.present-quantity');
        return Number(this.putDataInText($el, quantity));
      };

      /*
      カート内の商品合計金額の取得/設定
      */


      HeaderCartButton.prototype.grandTotal = function(grandTotal) {
        var $el, val;
        $el = this.$el.find('.all-price .price-amount');
        if (grandTotal) {
          grandTotal = Comma.add(grandTotal);
        }
        val = this.putDataInText($el, grandTotal);
        val = Comma.remove(val);
        return val;
      };

      /*
      カートの利用可能ポイントの取得/設定
      */


      HeaderCartButton.prototype.pointAvailable = function(pointAvailable) {
        var $el, val;
        $el = this.$el.find('.total_point .point-amount');
        if (pointAvailable) {
          pointAvailable = Comma.add(pointAvailable);
        }
        val = this.putDataInText($el, pointAvailable);
        val = Comma.remove(val);
        return val;
      };

      /*
      再描画する
      */


      HeaderCartButton.prototype.updateView = function() {
        this.productQuantity(this.cart.productQuantity());
        this.presentQuantity(this.cart.presentQuantity());
        this.grandTotal(this.cart.grandTotal());
        return this.pointAvailable(this.cart.pointAvailable());
      };

      return HeaderCartButton;

    })(Backbone.View);
    return HeaderCartButton;
  });

}).call(this);
