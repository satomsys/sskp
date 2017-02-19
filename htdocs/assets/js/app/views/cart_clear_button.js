(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'components/modal_confirm01', 'components/balloon01', 'data/balloon_contents', 'data/dialog_contents'], function(require) {
    var $, Backbone, Balloon01, CartClearButton, Confirm01, balloonContents, dialogContents, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    Confirm01 = require('components/modal_confirm01');
    Balloon01 = require('components/balloon01');
    balloonContents = require('data/balloon_contents');
    dialogContents = require('data/dialog_contents');
    CartClearButton = (function(_super) {
      __extends(CartClearButton, _super);

      function CartClearButton() {
        _ref = CartClearButton.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CartClearButton.prototype.events = {
        "click .button-anchor": "onButtonClicked"
      };

      /*
      初期化
      */


      CartClearButton.prototype.initialize = function(o) {
        var _this = this;
        this.cart = o.cart;
        this.$el = o.$el;
        this.confirm = new Confirm01();
        this.confirm.content($(dialogContents['clearCartConfirmStr']));
        this.confirm.$el.find('.button-cancel').on('click', function(e) {
          e.preventDefault();
          return _this.confirm.hide();
        });
        this.confirm.$el.find('.button-clear-cart').on('click', function(e) {
          e.preventDefault();
          _this.confirm.hide();
          return _this.removeAllItems();
        });
        this.$balloonLoadingSrc = $(balloonContents['balloonCartClearLoadingSrc']);
        this.$balloonSuccessSrc = $(balloonContents['balloonCartClearSuccessSrc']);
        this.initializeCartEvents();
        if (this.cart.productQuantity() === 0) {
          return this.disableButton();
        }
      };

      /*
      カートイベントを初期化する
      */


      CartClearButton.prototype.initializeCartEvents = function() {
        this.cart.on('startSync', _.bind(this.onCartStartSync, this));
        return this.cart.on('change', _.bind(this.onCartChange, this));
      };

      /*
      商品を削除する
      */


      CartClearButton.prototype.removeAllItems = function() {
        this.balloon().content(this.$balloonLoadingSrc).constrainedElement(this.$el).show();
        this.isMyAction = true;
        return this.cart.removeAllItems();
      };

      /*
      カートの同期が始まったときに呼び出されるコールバック
      */


      CartClearButton.prototype.onCartStartSync = function() {
        return this.disableButton();
      };

      /*
      カートの内容が変更されたときに呼び出されるコールバック
      */


      CartClearButton.prototype.onCartChange = function() {
        this.enableButton();
        if (this.isMyAction) {
          this.balloon().content(this.$balloonSuccessSrc).show().autohide();
        }
        if (this.cart.productQuantity() === 0) {
          this.disableButton();
        }
        return this.isMyAction = false;
      };

      /*
      ボタンを非表示にする
      */


      CartClearButton.prototype.disableButton = function() {
        return this.$el.addClass('button-disabled');
      };

      /*
      ボタンを表示する
      */


      CartClearButton.prototype.enableButton = function() {
        return this.$el.removeClass('button-disabled');
      };

      /*
      削除するボタンがクリックされた時に呼び出されるコールバック
      */


      CartClearButton.prototype.onButtonClicked = function(e) {
        e.preventDefault();
        if (this.$el.hasClass('button-disabled')) {
          return;
        }
        return this.confirm.show();
      };

      /*
      バルーンインスタンスを返す
      */


      CartClearButton.prototype.balloon = function() {
        if (this._balloon01) {
          return this._balloon01;
        }
        this._balloon01 = new Balloon01();
        return this._balloon01;
      };

      return CartClearButton;

    })(Backbone.View);
    return CartClearButton;
  });

}).call(this);
