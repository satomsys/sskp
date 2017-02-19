(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'views/table_row_data01', 'views/table_row_present_page_link', 'views/table_row_default_present_page_link'], function(require) {
    var $, Backbone, DefaultPresentPageLink, OrderInformationTable01, PresentPageLink, TableRowData01, campaignPreserntItemSrc, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    TableRowData01 = require('views/table_row_data01');
    PresentPageLink = require('views/table_row_present_page_link');
    DefaultPresentPageLink = require('views/table_row_default_present_page_link');
    /*
    キャンペーンプレゼント品の行用テンプレート
    */

    campaignPreserntItemSrc = '<tr class="table-row-data01" data-shohin-cd="{{shohinCd}}"><td class="table-data-cell01 col-name"><div class="product-data"><div class="thumbnail-area"><img src="{{thumbnailUrl}}" alt="{{shohinName}}"></div><div class="shohin-name-area"><span class="shohin-name">{{shohinName}}</span></div><div class="point-area">{{point}}</div></div></td><td class="table-data-cell01 col-quantity"><span class="quantity-amount">{{quantity}}</span></td><td class="table-data-cell01 col-subtotal">{{subtotal}}</td><td class="table-data-cell01 col-point"><div class="pointsubtotal">{{pointSubtotal}}</div></td></tr>';
    OrderInformationTable01 = (function(_super) {
      __extends(OrderInformationTable01, _super);

      function OrderInformationTable01() {
        _ref = OrderInformationTable01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      OrderInformationTable01.prototype.initialize = function(o) {
        var pageType, type,
          _this = this;
        this.$el = o.$el;
        this.cart = o.cart;
        type = this.type();
        this.pageType = pageType = o.pageType;
        this.shohinCds = new Array();
        this.$el.find('.table-row-data01').each(function(idx, e) {
          var $e, obj;
          $e = $(e);
          obj = {
            $el: $e,
            cart: o.cart,
            type: type,
            pageType: pageType
          };
          if ($e.hasClass('present-page-link')) {
            new PresentPageLink(obj);
            return;
          }
          if ($e.hasClass('default-present-page-link')) {
            new DefaultPresentPageLink(obj);
            return;
          }
          new TableRowData01(obj);
          if (type === 'campaign-presents') {
            return _this.shohinCds.push($e.attr('data-shohin-cd'));
          }
        });
        if (type === 'campaign-presents') {
          return this.initializeCampaignPresentTable();
        }
      };

      /*
      キャンペーンプレゼント品用テーブルの設定
      */


      OrderInformationTable01.prototype.initializeCampaignPresentTable = function() {
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      カートの中身が変更されたときに呼び出されるコールバック
      */


      OrderInformationTable01.prototype.onCartChanged = function() {
        var items,
          _this = this;
        items = this.unRenderedCampaignPresernts();
        return _.each(items, function(item) {
          return _this.addCampaignPresentRow(item);
        });
      };

      /*
      キャンペーンプレゼント品の行を追加する
      */


      OrderInformationTable01.prototype.addCampaignPresentRow = function(item) {
        var $newRow, obj, point, pointSubtotal, src, subtotal;
        src = campaignPreserntItemSrc;
        item.thumbnailUrl = '/assets/ps/domo/service/order/img/present_table_' + item.shohinCd + '_' + item.level + '.png';
        if (item.thumbnailUrl != null) {
          src = src.replace('{{thumbnailUrl}}', item.thumbnailUrl);
        }
        src = src.replace(/\{\{shohinCd\}\}/g, item.shohinCd).replace(/\{\{shohinName\}\}/g, item.name).replace(/\{\{quantity\}\}/g, item.quantity);
        point = item.point;
        subtotal = '-';
        pointSubtotal = Number(item.point_subtotal) !== 0 ? item.point_subtotal : '-';
        if (pointSubtotal !== '-') {
          pointSubtotal = "<span class='point-amount'>" + pointSubtotal + "</span><span class='point-unit'>ポイント</span>";
        }
        if (point) {
          src = src.replace('{{point}}', point + 'ポイント');
        }
        src = src.replace('{{subtotal}}', subtotal);
        src = src.replace('{{pointSubtotal}}', pointSubtotal);
        $newRow = $(src);
        this.$el.find('tbody').append($newRow);
        if (point == null) {
          $newRow.find('.point-area').remove();
        }
        obj = {
          $el: $newRow,
          cart: this.cart,
          type: this.type(),
          pageType: this.pageType
        };
        new TableRowData01(obj);
        return this.shohinCds.push(item.shohinCd);
      };

      /*
      未構築のキャンペーンプレゼント品を抽出する
      */


      OrderInformationTable01.prototype.unRenderedCampaignPresernts = function() {
        var items, shohinCds;
        shohinCds = this.shohinCds;
        items = this.cart.items().campaignPresents();
        items = _.filter(items, function(item) {
          return (_.indexOf(shohinCds, item.shohinCd)) < 0;
        });
        return items;
      };

      /*
      テーブルのタイプを返す
      */


      OrderInformationTable01.prototype.type = function() {
        var $el;
        $el = this.$el;
        if ($el.hasClass('products-table')) {
          return 'products';
        }
        if ($el.hasClass('presents-table')) {
          return 'presents';
        }
        if ($el.hasClass('campaign-presents-table')) {
          return 'campaign-presents';
        }
        return null;
      };

      return OrderInformationTable01;

    })(Backbone.View);
    return OrderInformationTable01;
  });

}).call(this);
