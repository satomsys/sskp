(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'views/item_block01', 'data/balloon_contents', 'components/modal_dialog01'], function(require) {
    var $, Backbone, ItemBlock01, ModalDialog01, PresentItemBlock01, balloonContents, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    ItemBlock01 = require('views/item_block01');
    balloonContents = require('data/balloon_contents');
    ModalDialog01 = require('components/modal_dialog01');
    /*
    プレゼント選択ブロック
    */

    PresentItemBlock01 = (function(_super) {
      __extends(PresentItemBlock01, _super);

      function PresentItemBlock01() {
        _ref = PresentItemBlock01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      PresentItemBlock01.prototype.initialize = function(o) {
        this.inCartCssClass = 'present-item-in-cart';
        this.disabledCssClass = 'present-panel-disabled';
        this.$balloonAddLoadingSrc = $(balloonContents['balloonAddLoadingSrc']);
        this.$balloonRemoveLoadingSrc = $(balloonContents['balloonRemoveLoadingSrc']);
        this.$balloonSuccessSrc = $(balloonContents['balloonSuccessSrc']);
        this.$balloonRemoveSuccessSrc = $(balloonContents['balloonRemoveSuccessSrc']);
        this.currentActionType = null;
        return PresentItemBlock01.__super__.initialize.call(this, o);
      };

      PresentItemBlock01.prototype.updateElement = function() {
        this.balloon().hide();
        if (this._dialog01 && this._dialog01.undelegateEvents) {
          this._dialog01.undelegateEvents();
        }
        this._dialog01 = new ModalDialog01({
          $el: this.$el.find('.link-for-dialog')
        });
        return PresentItemBlock01.__super__.updateElement.call(this);
      };

      /*
      カートに追加
      */


      PresentItemBlock01.prototype.addToCart = function(e) {
        var $button;
        e.preventDefault();
        if (this.isButtonDisabled()) {
          return;
        }
        this.currentActionType = 'add';
        this.cart.addPresent(this.shohinCd(), 1);
        $button = this.$el.find('.add-to-cart-button01');
        return this.balloon().content(this.$balloonAddLoadingSrc).constrainedElement($button).show();
      };

      /*
      カートから削除
      */


      PresentItemBlock01.prototype.removeFromCart = function(e) {
        var $button;
        e.preventDefault();
        if ($(e.target).hasClass('button-disabled')) {
          return;
        }
        this.currentActionType = 'remove';
        this.cart.removePresent(this.shohinCd());
        $button = this.$el.find('.remove-from-cart');
        return this.balloon().content(this.$balloonRemoveLoadingSrc).constrainedElement($button).show();
      };

      /*
      ビューを更新する
      */


      PresentItemBlock01.prototype.updateView = function() {
        if (this.currentActionType === 'remove') {
          this.showRemoveCompleteBalloon();
        }
        if (this.currentActionType === 'add') {
          this.showCompleteBalloon();
        }
        this.currentActionType = null;
        this.updatePanelAvailability();
        return PresentItemBlock01.__super__.updateView.call(this);
      };

      /*
      カートに追加完了したときのバルーン表示
      */


      PresentItemBlock01.prototype.showCompleteBalloon = function() {
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
          if (this.quantity() === this.cart.cartItem(this.shohinCd()).quantity) {
            this._balloon01.hide();
            return;
          }
          return this._balloon01.content(this.$balloonSuccessSrc).show().autohide();
        }
      };

      /*
      パネルの有効無効を更新する
      */


      PresentItemBlock01.prototype.updatePanelAvailability = function() {
        if (this.available()) {
          this.enable();
        }
        if (!this.available()) {
          return this.disable();
        }
      };

      /*
      パネルの有効・無効のチェック
      有効の場合は true を返す
      */


      PresentItemBlock01.prototype.available = function() {
        var pointAvailable;
        pointAvailable = this.cart.pointAvailable();
        return this.point() <= pointAvailable;
      };

      /*
      カートから商品を削除したときのバルーン表示
      */


      PresentItemBlock01.prototype.showRemoveCompleteBalloon = function() {
        var $button, item;
        $button = this.$el.find('.add-to-cart-button01');
        item = this.cart.item(this.shohinCd());
        if (item && item.quantity > 0) {
          this.balloon().hide();
          return;
        }
        return this.balloon().content(this.$balloonRemoveSuccessSrc).constrainedElement($button).show().autohide();
      };

      return PresentItemBlock01;

    })(ItemBlock01);
    return PresentItemBlock01;
  });

}).call(this);
