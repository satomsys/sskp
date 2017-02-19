(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'lib/comma'], function(require) {
    var $, Backbone, Comma, TableRowMixed01, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    Comma = require('lib/comma');
    TableRowMixed01 = (function(_super) {
      __extends(TableRowMixed01, _super);

      function TableRowMixed01() {
        _ref = TableRowMixed01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      TableRowMixed01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.cart = o.cart;
        this.initCartEvents();
        if (o.forceUpdate) {
          return this.updateView();
        }
      };

      /*
      カートからのコールバックを設定する
      */


      TableRowMixed01.prototype.initCartEvents = function() {
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      PoinInformation 部分を初期化する
      */


      TableRowMixed01.prototype.isProductSummary = function() {
        return this.$el.hasClass('product-summary-row');
      };

      TableRowMixed01.prototype.isPresentSummary = function() {
        return this.$el.hasClass('present-summary-row');
      };

      TableRowMixed01.prototype.isCampaignPresentSummary = function() {
        return this.$el.hasClass('campaign-present-summary-row');
      };

      TableRowMixed01.prototype.isGrandTotal = function() {
        return this.$el.hasClass('grandtotal-row');
      };

      TableRowMixed01.prototype.isPointReserved = function() {
        return this.$el.hasClass('point-reserved-row');
      };

      TableRowMixed01.prototype.isPointAvailable = function() {
        return this.$el.hasClass('point-available-row');
      };

      TableRowMixed01.prototype.isCampaignPoint = function() {
        return this.$el.hasClass('campaign-point-row');
      };

      /*
      ビューを更新する
      */


      TableRowMixed01.prototype.updateView = function() {
        if (this.isProductSummary()) {
          return this.updateProductSummaryView();
        }
        if (this.isPresentSummary()) {
          return this.updatePresentSummaryView();
        }
        if (this.isCampaignPresentSummary()) {
          return this.updateCampaignPresentSummaryView();
        }
        if (this.isGrandTotal()) {
          return this.updateGrandTotalView();
        }
        if (this.isPointReserved()) {
          return this.updatePointReservedView();
        }
        if (this.isPointAvailable()) {
          return this.updatePointAvailableView();
        }
        if (this.isCampaignPoint()) {
          return this.updateCampaignPointView();
        }
      };

      /*
      商品品合計を更新する
      */


      TableRowMixed01.prototype.updateProductSummaryView = function() {
        var cart, point, quantity, subtotal;
        cart = this.cart;
        quantity = cart.productQuantity();
        subtotal = cart.productSubTotal();
        point = cart.productPointGet();
        return this.updateTableValue(quantity, subtotal, point);
      };

      /*
      プレゼント品合計を更新する
      */


      TableRowMixed01.prototype.updatePresentSummaryView = function() {
        var cart, point, quantity, subtotal;
        cart = this.cart;
        quantity = cart.presentQuantity();
        subtotal = cart.presentSubTotal();
        point = cart.pointUse();
        return this.updateTableValue(quantity, subtotal, point);
      };

      /*
      キャンペーンプレゼント品合計を更新する
      */


      TableRowMixed01.prototype.updateCampaignPresentSummaryView = function() {
        var cart, point, quantity, subtotal;
        cart = this.cart;
        quantity = cart.campaignPresentQuantity();
        subtotal = cart.campaignPresentSubTotal();
        point = cart.campaignPresentPointGet();
        return this.updateTableValue(quantity, subtotal, point);
      };

      /*
      合計を更新する
      */


      TableRowMixed01.prototype.updateGrandTotalView = function() {
        var cart, point, quantity, subtotal;
        cart = this.cart;
        quantity = this.cart.totalQuantity();
        subtotal = this.cart.grandTotal();
        point = this.cart.pointTotal();
        return this.updateTableValue(quantity, subtotal, point);
      };

      /*
      今までの積立ポイントを更新する
      */


      TableRowMixed01.prototype.updatePointReservedView = function() {
        var cart, pointSavings;
        cart = this.cart;
        pointSavings = cart.pointSavings();
        pointSavings = Comma.add(pointSavings);
        return this.$el.find('.point-amount').text(pointSavings);
      };

      /*
      次回への積立ポイントを更新する
      */


      TableRowMixed01.prototype.updatePointAvailableView = function() {
        var cart, pointAvailable;
        cart = this.cart;
        pointAvailable = cart.pointAvailable();
        pointAvailable = Comma.add(pointAvailable);
        return this.$el.find('.point-amount').text(pointAvailable);
      };

      /*
      キャンペーンポイントを更新する
      */


      TableRowMixed01.prototype.updateCampaignPointView = function() {
        var item, point, quantity, shohinCd, subtotal;
        shohinCd = this.$el.attr('data-shohin-cd');
        item = this.cart.item(shohinCd);
        quantity = '-';
        subtotal = '-';
        point = item !== void 0 ? item.point_subtotal : 0;
        point = Comma.add(point);
        this.updateTableValue(quantity, subtotal, point);
        if (item === void 0) {
          return this.$el.hide();
        } else {
          return this.$el.show();
        }
      };

      /*
      個数・小計・ポイントを更新する
      */


      TableRowMixed01.prototype.updateTableValue = function(quantity, price, point) {
        var opPoint, pointOperator, pointUnit, priceUnit;
        this.$el.find('.col-quantity .quantity-amount').text(quantity);
        if (this.isProductSummary() || this.isGrandTotal()) {
          price = Comma.add(price);
        } else {
          price = this.processPrice(price);
        }
        priceUnit = price === '-' ? '' : '円';
        this.$el.find('.col-subtotal .price-unit').text(priceUnit);
        this.$el.find('.col-subtotal .price-amount').text(price);
        if (point === 0 && this.isCampaignPresentSummary()) {
          point = '-';
          pointOperator = '';
          pointUnit = '';
        } else if (point === 0 && this.isGrandTotal() !== true) {
          point = '0';
          pointOperator = '';
          pointUnit = 'ポイント';
        } else if (this.isGrandTotal() === true) {
          point = '-';
          pointOperator = '';
          pointUnit = '';
        } else {
          opPoint = this.isPresentSummary() ? point * -1 : point;
          point = Comma.add(Math.abs(point));
          pointOperator = this.pointOperator(opPoint);
          pointUnit = 'ポイント';
        }
        this.$el.find('.col-point .point-amount').text(point);
        this.$el.find('.col-point .point-prefix').text(pointOperator);
        return this.$el.find('.col-point .point-unit').text(pointUnit);
      };

      /*
      価格表示の整形
      */


      TableRowMixed01.prototype.processPrice = function(price) {
        if (price === 0 || price === '-') {
          return '-';
        }
        if (typeof price === 'number') {
          return Comma.add(price);
        }
        return price;
      };

      /*
      ＋・−・(出力しない) の出しわけ
      */


      TableRowMixed01.prototype.pointOperator = function(number) {
        if (number < 0) {
          return '−';
        }
        if (number > 0) {
          return '＋';
        }
        if (number === 0) {
          return '';
        }
      };

      /*
      カートが変更されたときに呼び出される
      */


      TableRowMixed01.prototype.onCartChanged = function() {
        return this.updateView();
      };

      return TableRowMixed01;

    })(Backbone.View);
    return TableRowMixed01;
  });

}).call(this);
