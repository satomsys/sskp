/*
#point_information
利用可能ポイント ・積立ポイント・加算ポイント・使用ポイントを出力する
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'lib/comma'], function(require) {
    var $, Backbone, Comma, PointInformation, _, _ref;
    Backbone = require('backbone');
    Comma = require('lib/comma');
    $ = require('jquery');
    _ = require('underscore');
    PointInformation = (function(_super) {
      __extends(PointInformation, _super);

      function PointInformation() {
        _ref = PointInformation.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      PointInformation.prototype.initialize = function(o) {
        this.cart = o.cart;
        this.$el = o.$el;
        return this.initCartEvents();
      };

      /*
      カートからのコールバックを設定する
      */


      PointInformation.prototype.initCartEvents = function() {
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      ビューを更新する
      */


      PointInformation.prototype.updateView = function() {
        var $el, cart, pointAvailable, pointGet, pointSavings, pointUse;
        cart = this.cart;
        pointAvailable = cart.pointAvailable();
        pointSavings = cart.pointSavings();
        pointGet = cart.pointGet();
        pointUse = cart.pointUse();
        pointAvailable = Comma.add(pointAvailable);
        pointSavings = Comma.add(pointSavings);
        pointGet = Comma.add(pointGet);
        pointUse = Comma.add(pointUse);
        $el = this.$el;
        $el.find('.total .point-amount').text(pointAvailable);
        $el.find('.point-tsumitate .amount').text(pointSavings);
        $el.find('.point-get .amount').text(pointGet);
        return $el.find('.point-use .amount').text(pointUse);
      };

      /*
      カート変更時に呼び出されるコールバック関数
      */


      PointInformation.prototype.onCartChanged = function() {
        return this.updateView();
      };

      return PointInformation;

    })(Backbone.View);
    return PointInformation;
  });

}).call(this);
