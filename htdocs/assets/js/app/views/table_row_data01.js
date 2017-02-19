(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'components/balloon01', 'lib/comma', 'components/input_select01', 'components/modal_confirm01', 'data/balloon_contents', 'data/dialog_contents'], function(require) {
    var $, Backbone, Balloon01, Comma, Confirm01, InputSelect01, TableRowData01, balloonContents, dialogContents, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    Balloon01 = require('components/balloon01');
    Confirm01 = require('components/modal_confirm01');
    Comma = require('lib/comma');
    InputSelect01 = require('components/input_select01');
    balloonContents = require('data/balloon_contents');
    dialogContents = require('data/dialog_contents');
    TableRowData01 = (function(_super) {
      __extends(TableRowData01, _super);

      function TableRowData01() {
        _ref = TableRowData01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TableRowData01.prototype.events = {
        "click .button-add .button-anchor": "addToCart",
        "change .select-list .input-type-select": "changeQuantity",
        "click .remove-area .remove-item": "removeFromCart"
      };

      /*
      初期化
      */


      TableRowData01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.cart = o.cart;
        this.currentActionType = null;
        this.itemType = o.type;
        this.pageType = o.pageType;
        switch (o.type) {
          case 'products':
            this.cartAddItem = _.bind(this.cart.addProduct, this.cart);
            this.cartRemoveItem = _.bind(this.cart.removeProduct, this.cart);
            this.cartChangeItem = _.bind(this.cart.changeProductQuantity, this.cart);
            break;
          case 'presents':
            this.cartAddItem = _.bind(this.cart.addPresent, this.cart);
            this.cartRemoveItem = _.bind(this.cart.removePresent, this.cart);
            this.cartChangeItem = _.bind(this.cart.changePresentQuantity, this.cart);
            break;
          case 'campaign-presents':
            this.cartAddItemItem = function() {
              return {};
            };
            this.cartRemoveItem = function() {
              return {};
            };
            this.cartChangeItem = function() {
              return {};
            };
        }
        this.$balloonAddLoadingSrc = $(balloonContents['balloonAddLoadingSrc']);
        this.$balloonRemoveLoadingSrc = $(balloonContents['balloonRemoveLoadingSrc']);
        this.$balloonQuantityChangeLoadingSrc = $(balloonContents['balloonQuantityChangeLoadingSrc']);
        this.$dialogClearPresentConfirm = $(dialogContents['clearPresentConfirm']);
        this.$dialogPointShortConfirm = $(dialogContents['pointShortConfirm']);
        this.cart.on('change', _.bind(this.onCartChanged, this));
        this.cart.on('startSync', _.bind(this.onCartStartSync, this));
        return this.cart.addTableRowData(this.shohinCd(), this);
      };

      /*
      # 商品のタイプ
      # 親テーブルに持たせるように変更
      */


      /*
      カートに1点追加する
      */


      TableRowData01.prototype.addToCart = function(e) {
        e.preventDefault();
        if (!this.$el.find('.col-quantity .button-add').hasClass('button-disabled')) {
          this.currentActionType = 'add';
          this.cartAddItem(this.shohinCd(), 1);
          return this.balloon().content(this.$balloonAddLoadingSrc).constrainedElement(this.$el.find('.col-quantity .button-add')).show();
        }
      };

      /*
      商品点数を変更する
      */


      TableRowData01.prototype.changeQuantity = function() {
        var quantity;
        quantity = Number(this.$el.find('.select-list .input-type-select').val());
        if (this.itemType === 'products' && quantity === 0 && this.cart.isLastProduct(this.shohinCd()) && this.cart.presentQuantity() > 0) {
          this.showClearPresentConfirmDialog();
          return;
        }
        if (this.itemType === 'products' && this.cart.isPointShort(this.shohinCd(), quantity)) {
          this.showPointShortConfirmDialog();
          return;
        }
        if (quantity === 0) {
          this.currentActionType = 'remove';
          this.cartRemoveItem(this.shohinCd());
          this.balloon().content(this.$balloonRemoveLoadingSrc).constrainedElement(this.$el.find('.select-list .input-type-select')).show();
          return;
        }
        if (quantity === 1 && this.currentActionType === 'add') {
          return;
        }
        this.currentActionType = 'change';
        this.cartChangeItem(this.shohinCd(), quantity);
        return this.balloon().content(this.$balloonQuantityChangeLoadingSrc).constrainedElement(this.$el.find('.select-list .input-type-select')).show();
      };

      /*
      */


      TableRowData01.prototype.showPointShortConfirmDialog = function() {
        var _this = this;
        if (!this.pointShortConfirm) {
          this.pointShortConfirm = new Confirm01();
          this.pointShortConfirm.content(this.$dialogPointShortConfirm);
          this.pointShortConfirm.$el.find('.button-cancel').on('click', function(e) {
            var quantity;
            e.preventDefault();
            _this.pointShortConfirm.hide();
            quantity = _this.cart.item(_this.shohinCd()).quantity;
            _this.$el.find('.select-list .input-type-select').val(quantity);
            return _this.$el.find('.select-list .selected-value').text(quantity);
          });
          this.pointShortConfirm.$el.find('.button-clear-cart').on('click', function(e) {
            var quantity;
            e.preventDefault();
            _this.pointShortConfirm.hide();
            quantity = Number(_this.$el.find('.select-list .input-type-select').val());
            _this.currentActionType = 'change';
            _this.cartChangeItem(_this.shohinCd(), quantity);
            return _this.balloon().content(_this.$balloonQuantityChangeLoadingSrc).constrainedElement(_this.$el.find('.select-list .input-type-select')).show();
          });
        }
        return this.pointShortConfirm.show();
      };

      /*
      */


      TableRowData01.prototype.showPointShortConfirmDialogDelete = function() {
        var _this = this;
        if (!this.pointShortConfirmDelete) {
          this.pointShortConfirmDelete = new Confirm01();
          this.pointShortConfirmDelete.content(this.$dialogPointShortConfirm);
          this.pointShortConfirmDelete.$el.find('.button-cancel').on('click', function(e) {
            e.preventDefault();
            return _this.pointShortConfirmDelete.hide();
          });
          this.pointShortConfirmDelete.$el.find('.button-clear-cart').on('click', function(e) {
            e.preventDefault();
            _this.pointShortConfirmDelete.hide();
            _this.currentActionType = 'remove';
            _this.cartRemoveItem(_this.shohinCd());
            return _this.balloon().content(_this.$balloonRemoveLoadingSrc).constrainedElement(_this.$el.find('.remove-item')).show();
          });
        }
        return this.pointShortConfirmDelete.show();
      };

      /*
      カートから削除する
      */


      TableRowData01.prototype.removeFromCart = function(e) {
        e.preventDefault();
        if (this.itemType === 'products') {
          if (this.cart.isLastProduct(this.shohinCd()) && this.cart.presentQuantity() > 0) {
            this.showClearPresentConfirmDialog();
            return;
          }
        }
        if (this.itemType === 'products' && this.cart.isPointShort(this.shohinCd(), 0)) {
          this.showPointShortConfirmDialogDelete();
          return;
        }
        if (!this.$el.find('.remove-item').hasClass('button-disabled')) {
          this.currentActionType = 'remove';
          this.cartRemoveItem(this.shohinCd());
          return this.balloon().content(this.$balloonRemoveLoadingSrc).constrainedElement(this.$el.find('.remove-item')).show();
        }
      };

      TableRowData01.prototype.showClearPresentConfirmDialog = function() {
        var _this = this;
        if (!this.clearConfirm) {
          this.clearConfirm = new Confirm01();
          this.clearConfirm.content(this.$dialogClearPresentConfirm);
          this.clearConfirm.$el.find('.button-cancel').on('click', function(e) {
            e.preventDefault();
            _this.clearConfirm.hide();
            return _this.updateView();
          });
          this.clearConfirm.$el.find('.button-clear-cart').on('click', function(e) {
            e.preventDefault();
            _this.clearConfirm.hide();
            _this.currentActionType = 'remove';
            _this.cartRemoveItem(_this.shohinCd());
            return _this.balloon().content(_this.$balloonRemoveLoadingSrc).constrainedElement(_this.$el.find('.remove-item')).show();
          });
        }
        return this.clearConfirm.show();
      };

      /*
      shohin-cd を取得する
      */


      TableRowData01.prototype.shohinCd = function() {
        return this.$el.attr('data-shohin-cd');
      };

      /*
      ポイントキャンペーンだったら true を返す
      この実装はフラグたてるなり方法を考える必要がある。今のところ、キャンペーン用テキストがあったら true にしている。
      */


      TableRowData01.prototype.isPointCampaign = function() {
        return !!this.$el.find('.point-area .campaign').length > 0;
      };

      /*
      ボタンが無効なときに true
      */


      TableRowData01.prototype.isButtonDisabled = function() {
        var buttonDisabled;
        buttonDisabled = !!(this.$('.add-to-cart-button01').hasClass('button-disabled'));
        return this.isDisabled() || buttonDisabled;
      };

      /*
      ビューを更新する
      */


      TableRowData01.prototype.updateView = function() {
        var item;
        if (!this.shohinCd()) {
          return;
        }
        item = this.cart.item(this.shohinCd()) || {
          quantity: 0
        };
        this.showCompleteBalloon();
        this.updateClassName(item);
        if (this.itemType === 'products') {
          this.updateSubtotal(item);
        }
        if (this.itemType === 'presents') {
          this.updateSelectLimit();
        }
        this.updatePoint(item);
        this.updateQuantity(item);
        this.updateRemoveButton(item);
        if (item.quantity === 0 && !this.isStickyItem()) {
          this.$el.hide();
        }
        if (item.quantity !== 0) {
          return this.$el.show();
        }
      };

      /*
      入力個数の制限
      */


      TableRowData01.prototype.updateSelectLimit = function() {
        var max;
        max = this.cart.presentSelectableLimit(this.shohinCd());
        return this.$el.find('.select-list option').each(function(idx, e) {
          var $e, val;
          $e = $(e);
          val = $e.val();
          if (val <= max) {
            $e.removeAttr('disabled');
          }
          if (val > max) {
            return $e.attr('disabled', 'disabled');
          }
        });
      };

      /*
      表示をキープする商品の場合は true
      */


      TableRowData01.prototype.isStickyItem = function() {
        var pageType;
        pageType = this.pageType;
        if (pageType !== 'cart') {
          return false;
        }
        return this.isStandardEight();
      };

      /*
      基本8点の商品かどうか。
      商品番号がついていたら基本8点とみなしている
      */


      TableRowData01.prototype.isStandardEight = function() {
        var irClass;
        irClass = this.$el.find('.shohin-name-area .ir').attr('class');
        if ((irClass != null) === false) {
          return false;
        }
        return /ir-product-number/.test(irClass);
      };

      /*
      完了後バルーン
      */


      TableRowData01.prototype.showCompleteBalloon = function() {
        if (!this._balloon01) {
          return;
        }
        if (this._balloon01.isActive() === false) {
          return;
        }
        this._balloon01.hide();
      };

      /*
      クラス名を更新する
      */


      TableRowData01.prototype.updateClassName = function(item) {
        if (Number(item.quantity) === 0) {
          this.$el.addClass('not-selected');
          return;
        }
        return this.$el.removeClass('not-selected');
      };

      /*
      小計を更新する
      */


      TableRowData01.prototype.updateSubtotal = function(item) {
        var html, subtotal;
        if (item.subtotal === 0 || item.subtotal === void 0) {
          this.$el.find('.col-subtotal .subtotal').html('-');
          return;
        }
        if (item.subtotal) {
          subtotal = Comma.add(item.subtotal);
        }
        html = '<span class="price-amount">' + subtotal + '</span><span class="price-unit">円</span>';
        return this.$el.find('.col-subtotal .subtotal').html(html);
      };

      /*
      ポイントを更新する
      */


      TableRowData01.prototype.updatePoint = function(item) {
        var html, pointAmountClass, point_subtotal;
        point_subtotal = item.point_subtotal || 0;
        if (point_subtotal === 0 && Number(item.quantity) === 0) {
          this.$el.find('.col-point .pointsubtotal').html('-');
          return;
        }
        if (this.itemType === 'campaign-presents' && Number(item.point_subtotal) === 0) {
          this.$el.find('.col-point .pointsubtotal').html('-');
          return;
        }
        pointAmountClass = 'point-amount';
        if (this.isPointCampaign()) {
          pointAmountClass += ' campaign';
        }
        html = '<span class="' + pointAmountClass + '">';
        html += point_subtotal + '</span><span class="point-unit">ポイント</span>';
        return this.$el.find('.col-point .pointsubtotal').html(html);
      };

      /*
      個数を更新する
      */


      TableRowData01.prototype.updateQuantity = function(item) {
        var html, num, o, quantity, selectVal, _i;
        quantity = Number(item.quantity);
        if (this.itemType === 'campaign-presents') {
          this.$el.find('.col-quantity').html("<span class='quantity-amount'>" + quantity + "</span>");
          return;
        }
        if (quantity === 0) {
          html = '<span class="button-box01 button-priority-low button-add"><a class="button-anchor" href="#" data-shohin-cd="' + this.shohinCd() + '">追加する</a></span>';
          this.$el.find('.col-quantity').html(html);
          return;
        }
        if (quantity > 0 && this.$el.find('.col-quantity .select-list').length === 0) {
          html = '<div class="select-list"><div class="input-width-narrow input-select01"><select autocomplete="off" class="input-type-select" data-shohin-cd="' + this.shohinCd() + '">';
          for (num = _i = 0; _i <= 10; num = ++_i) {
            html += '<option value="' + num + '"';
            if (num === quantity) {
              html += ' selected="selected"';
            }
            html += '>' + num + '</option>';
          }
          html += '</select></div></div>';
          this.$el.find('.col-quantity').html(html);
          o = {
            $el: this.$el.find('.input-select01')
          };
          new InputSelect01(o);
          return;
        }
        if (this.$el.find('.col-quantity .select-list').length > 0) {
          selectVal = this.$el.find('.col-quantity .select-list select').val();
          if (Number(selectVal) !== quantity) {
            this.$el.find('.col-quantity .select-list select').val(quantity);
            return this.$el.find('.col-quantity .select-list .selected-value').text(quantity);
          }
        }
      };

      /*
      取消ボタンを更新する
      */


      TableRowData01.prototype.updateRemoveButton = function(item) {
        if (!item) {
          return;
        }
        if (this.itemType === 'campaign-presents') {
          return;
        }
        if (item.quantity > 0) {
          this.showRemoveButton();
          return;
        }
        return this.hideRemoveButton();
      };

      /*
      取消ボタンを表示する
      */


      TableRowData01.prototype.showRemoveButton = function() {
        var $el, removeButtonSrc;
        $el = this.$el.find('.remove-area .remove-item');
        if ($el.length > 0) {
          $el.show();
          return;
        }
        removeButtonSrc = '<div class="remove-area"><a href="#" data-shohin-cd="' + this.shohinCd() + '" class="remove-item">取消</a>';
        return this.$el.find('.product-data').append(removeButtonSrc);
      };

      /*
      取消ボタンを非表示にする
      */


      TableRowData01.prototype.hideRemoveButton = function() {
        var $el;
        $el = this.$el.find('.remove-area .remove-item');
        if ($el.length > 0) {
          $el.hide();
        }
      };

      /*
      カートが変更されたときに呼び出される
      */


      TableRowData01.prototype.onCartChanged = function() {
        this.updateView();
        return this.enableButtons();
      };

      /*
      サーバとの通信が始まったときに呼び出される
      */


      TableRowData01.prototype.onCartStartSync = function() {
        return this.disabledButtons();
      };

      /*
      ボタンを無効にする
      */


      TableRowData01.prototype.disabledButtons = function() {
        $('.input-select01').addClass('input-disabled').find('select').attr('disabled', 'disabled');
        $('.button-add').addClass('button-disabled');
        return $('.remove-area .remove-item').addClass('button-disabled');
      };

      /*
      ボタンを有効にする
      */


      TableRowData01.prototype.enableButtons = function() {
        $('.input-select01').removeClass('input-disabled').find('select').removeAttr('disabled');
        $('.button-add').removeClass('button-disabled');
        return $('.remove-area .remove-item').removeClass('button-disabled');
      };

      TableRowData01.prototype.quantity = function() {
        var quantity, quantityt;
        quantity = this.$el.find('.col-quantity .input-type-select').val();
        if (!quantity) {
          quantity = this.$el.find('.col-quantity .quantity-amount').text();
        }
        if (!quantity) {
          quantity = 0;
        }
        quantityt = Number(quantity);
        return quantity;
      };

      TableRowData01.prototype.subtotal = function() {
        var subtotal;
        subtotal = this.$el.find('.col-subtotal .price-amount').text();
        if (subtotal) {
          subtotal = Comma.remove(subtotal);
        }
        return Number(subtotal);
      };

      TableRowData01.prototype.point_subtotal = function() {
        var point;
        point = this.$el.find('.col-point .pointsubtotal .point-amount').text();
        return point;
      };

      TableRowData01.prototype.balloon = function() {
        if (this._balloon01) {
          return this._balloon01;
        }
        this._balloon01 = new Balloon01();
        return this._balloon01;
      };

      return TableRowData01;

    })(Backbone.View);
    return TableRowData01;
  });

}).call(this);
