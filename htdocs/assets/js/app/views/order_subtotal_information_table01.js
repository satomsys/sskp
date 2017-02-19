(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'views/table_row_mixed01'], function(require) {
    var $, Backbone, OrderSubtotalInformationTable01, TableRowMixed01, campaignPointItemSrc, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    TableRowMixed01 = require('views/table_row_mixed01');
    /*
    キャンペーンポイント品の行用テンプレート
    */

    campaignPointItemSrc = '<tr data-shohin-cd="{{shohinCd}}" class="table-row-mixed01 campaign-point-row"> <th class="table-header-cell01 col-row-header">{{shohinName}}</th><td class="table-data-cell01 col-quantity"><span class="quantity-amount">-</span></td><td class="table-data-cell01 col-subtotal"><span class="price-amount">-</span></td><td class="table-data-cell01 col-point"><span class="point-prefix">{{pointPrefix}}</span><span class="point-amount">{{pointAmount}}</span><span class="point-unit">{{pointUnit}}</span></td></tr>';
    OrderSubtotalInformationTable01 = (function(_super) {
      __extends(OrderSubtotalInformationTable01, _super);

      function OrderSubtotalInformationTable01() {
        _ref = OrderSubtotalInformationTable01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      OrderSubtotalInformationTable01.prototype.initialize = function(o) {
        var isProductTable,
          _this = this;
        this.$el = o.$el;
        this.cart = o.cart;
        this.campaignPointCds = new Array();
        isProductTable = o.$el.hasClass('table-product-subtotal');
        o.$el.find('.table-row-mixed01').each(function(idx, e) {
          var $e, rowData;
          $e = $(e);
          rowData = {
            $el: $e,
            cart: o.cart
          };
          new TableRowMixed01(rowData);
          if (isProductTable && $e.attr('data-shohin-cd')) {
            return _this.campaignPointCds.push($e.attr('data-shohin-cd'));
          }
        });
        if (isProductTable) {
          return this.initializeCampaignPointTable();
        }
      };

      /*
      キャンペーンポイント用テーブルの設定
      */


      OrderSubtotalInformationTable01.prototype.initializeCampaignPointTable = function() {
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      カートの中身が変更されたときに呼び出されるコールバック
      */


      OrderSubtotalInformationTable01.prototype.onCartChanged = function() {
        var items,
          _this = this;
        items = this.unRenderedCampaignPoints();
        return _.each(items, function(item) {
          return _this.addCampaignPointRow(item);
        });
      };

      /*
      キャンペーンポイント品の行を生成する
      */


      OrderSubtotalInformationTable01.prototype.addCampaignPointRow = function(item) {
        var $newRow, rowData, src;
        src = campaignPointItemSrc;
        item.pointAmount = item.point_subtotal;
        src = src.replace('{{shohinCd}}', item.shohinCd).replace('{{shohinName}}', item.name).replace('{{pointAmount}}', item.pointAmount);
        $newRow = $(src);
        this.$el.find('tbody').append($newRow);
        rowData = {
          $el: $newRow,
          cart: this.cart,
          forceUpdate: true
        };
        new TableRowMixed01(rowData);
        return this.campaignPointCds.push(item.shohinCd);
      };

      /*
      まだ生成されていないキャンペーンポイントのアイテムを返す
      */


      OrderSubtotalInformationTable01.prototype.unRenderedCampaignPoints = function() {
        var items, shohinCds;
        shohinCds = this.campaignPointCds;
        items = this.cart.items().campaignPoints();
        items = _.filter(items, function(item) {
          return (_.indexOf(shohinCds, item.shohinCd)) < 0;
        });
        return items;
      };

      return OrderSubtotalInformationTable01;

    })(Backbone.View);
    return OrderSubtotalInformationTable01;
  });

}).call(this);
