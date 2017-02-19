(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'components/balloon01'], function(require) {
    var $, Backbone, Balloon01, ItemBlock01, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    Balloon01 = require('components/balloon01');
    ItemBlock01 = (function(_super) {
      __extends(ItemBlock01, _super);

      function ItemBlock01() {
        _ref = ItemBlock01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ItemBlock01.prototype.events = {
        "click .add-to-cart-button01 .button-anchor": "addToCart"
      };

      /*
      初期化
      */


      ItemBlock01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.cart = o.cart;
        this.initCartEvents();
        o.cart.addItemBlock(this.shohinCd(), this);
        if (this.isDisabled()) {
          return this.disable();
        }
      };

      /*
      カートのイベントを設定する
      */


      ItemBlock01.prototype.initCartEvents = function() {
        var $cartInfoArea;
        this.cart.on('change', _.bind(this.onCartChanged, this));
        this.cart.on('startSync', _.bind(this.onCartStartSync, this));
        $cartInfoArea = this.$el.find('.cart-info-area');
        return $cartInfoArea.find('.remove-from-cart').on('click', _.bind(this.removeFromCart, this));
      };

      ItemBlock01.prototype.updateElement = function() {
        this.undelegateEvents();
        this.delegateEvents();
        return this.initCartEvents();
      };

      /*
      カートに1点追加する
      */


      ItemBlock01.prototype.addToCart = function() {
        throw new Error('implement it');
      };

      /*
      カートから削除する
      */


      ItemBlock01.prototype.removeFromCart = function() {
        throw new Error('implement it');
      };

      /*
      shohin-cd を取得する
      */


      ItemBlock01.prototype.shohinCd = function() {
        return this.$el.find('.add-to-cart-button01 .button-anchor').attr('data-shohin-cd');
      };

      /*
      個数を取得する
      */


      ItemBlock01.prototype.quantity = function() {
        if (!this.$el.hasClass(this.inCartCssClass)) {
          return 0;
        }
        return Number(this.$el.find('.cart-info-area .amount').text());
      };

      /*
      ポイントを取得する
      */


      ItemBlock01.prototype.point = function() {
        var point;
        point = this.$el.find('.point-area .point-change .after .point-amount').text();
        if (point) {
          return Number(point);
        }
        point = this.$el.find('.point-area .point-normal .point-amount').text();
        if (point) {
          return Number(point);
        }
        return null;
      };

      /*
      カートに入っている場合はその表示を出す。無い場合は消す
      */


      ItemBlock01.prototype.showSelectedIndicator = function() {
        var $cartInfoArea, $el, html, item, quantity, shohinCd;
        $el = this.$el;
        shohinCd = this.shohinCd();
        item = this.cart.item(shohinCd) || {};
        quantity = item.quantity || 0;
        $cartInfoArea = $el.find('.cart-info-area');
        if (quantity <= 0) {
          $cartInfoArea.find('.remove-from-cart').off('click');
          $cartInfoArea.html('');
          $el.removeClass(this.inCartCssClass);
          return;
        }
        $el.addClass(this.inCartCssClass);
        if ($cartInfoArea.find('.amount').length > 0) {
          $cartInfoArea.find('.amount').text(quantity);
          return;
        }
        html = "<div class=\"info\">\n    <span class=\"amount\">" + quantity + "</span><span class=\"amount-text\">点入ってます</span>\n    <a href=\"#\" class=\"remove-from-cart\" data-shohin-cd=\"" + shohinCd + "\">取消</a>\n</div>";
        $cartInfoArea.html(html);
        return $cartInfoArea.find('.remove-from-cart').on('click', _.bind(this.removeFromCart, this));
      };

      /*
      ビューを更新する
      */


      ItemBlock01.prototype.updateView = function() {
        return this.showSelectedIndicator();
      };

      /*
      パネルを有効にする
      */


      ItemBlock01.prototype.enable = function() {
        if (!this.isDisabled()) {
          return;
        }
        return this.$el.removeClass(this.disabledCssClass);
      };

      /*
      パネルを無効にする
      */


      ItemBlock01.prototype.disable = function() {
        if (this.isDisabled()) {
          return;
        }
        return this.$el.addClass(this.disabledCssClass);
      };

      ItemBlock01.prototype.isDisabled = function() {
        return this.$el.hasClass(this.disabledCssClass);
      };

      /*
      ボタンが無効なときに true
      */


      ItemBlock01.prototype.isButtonDisabled = function() {
        var buttonDisabled;
        buttonDisabled = !!(this.$('.add-to-cart-button01').hasClass('button-disabled'));
        return this.isDisabled() || buttonDisabled;
      };

      /*
      ボタンを無効にする
      */


      ItemBlock01.prototype.disableButtons = function() {
        this.$el.find('.add-to-cart-button01').addClass('button-disabled');
        return this.$el.find('.remove-from-cart').addClass('button-disabled');
      };

      /*
      ボタンを有効にする
      */


      ItemBlock01.prototype.enableButtons = function() {
        this.$('.add-to-cart-button01').removeClass('button-disabled');
        return this.$('.remove-from-cart').removeClass('button-disabled');
      };

      /*
      カートの中身が更新されたら呼び出される
      */


      ItemBlock01.prototype.onCartChanged = function() {
        this.updateView();
        return this.enableButtons();
      };

      ItemBlock01.prototype.onCartStartSync = function() {
        return this.disableButtons();
      };

      ItemBlock01.prototype.balloon = function() {
        if (this._balloon01) {
          return this._balloon01;
        }
        this._balloon01 = new Balloon01();
        return this._balloon01;
      };

      return ItemBlock01;

    })(Backbone.View);
    return ItemBlock01;
  });

}).call(this);
