/*
campaign 25
25企画用バルーン
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'components/balloon01', 'lib/comma'], function(require) {
    var Backbone, Balloon01, Campaign25, Comma, campaignString, _ref;
    Balloon01 = require('components/balloon01');
    Backbone = require('backbone');
    Comma = require('lib/comma');
    campaignString = "<span><strong class='campaign'>あと<span class='countdown'>{{countdown}}</span></strong>以上ご購入で、<strong class='campaign campaign-item'>{{item}}</strong>をお贈りします。</span>";
    Campaign25 = (function(_super) {
      __extends(Campaign25, _super);

      function Campaign25() {
        _ref = Campaign25.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      Campaign25.prototype.initialize = function(o) {
        var $html, enable, item, start, target;
        this.cart = o.cart;
        $html = $('.user-specific-header .cart-information-block');
        enable = $html.attr('data-campaign25-enable');
        start = $html.attr('data-campaign25-start');
        target = $html.attr('data-campaign25-target');
        item = $html.attr('data-campaign25-item');
        if (enable === 'true' && start && target && item) {
          this.campaignString = campaignString.replace('{{item}}', $('<div/>').html(item).text());
          this.initCartEvents();
          /*
          **円以上 の **円（税込み）
          */

          this.countDownMax = Number(target);
          /*
          バルーン表示開始金額（税込み）
          */

          this.countDownStart = Number(start);
          this.item = item;
          this.campaignString = this.campaignString.replace('{{countdown}}', this.countDownPriceString());
          return this.initializeBalloon();
        }
      };

      /*
      カートのイベントを設定する
      */


      Campaign25.prototype.initCartEvents = function() {
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      バルーンの初期化
      */


      Campaign25.prototype.initializeBalloon = function() {
        this.balloon = new Balloon01();
        this.balloon.content($(this.campaignString));
        this.balloon.constrainedElement(this.$target());
        this.balloon.offsetY(0);
        this.balloon.positionFixed(true);
        this.balloon.$el.addClass('balloon-campaign-25');
        return this.updateCountdown();
      };

      Campaign25.prototype.updateCountdown = function() {
        var isVisible;
        isVisible = this.cart.grandTotal() >= this.countDownStart;
        if (isVisible === false) {
          this.balloon.hide();
          return;
        }
        this.balloon.show();
        return this.balloon.$el.find('.countdown').text(this.countDownPriceString());
      };

      /*
      カートが変更されたときに呼び出されるコールバック
      */


      Campaign25.prototype.onCartChanged = function() {
        return this.updateCountdown();
      };

      /*
      バルーンの矢印の置かれる要素を返す
      */


      Campaign25.prototype.$target = function() {
        return $('.header-cart-button .price-point-block .price-amount');
      };

      /*
      あと n 円の文字列を返す
      */


      Campaign25.prototype.countDownPriceString = function() {
        var countdown, grandTotal;
        grandTotal = this.cart.grandTotal();
        countdown = this.countDownMax - grandTotal;
        if (countdown < 0) {
          countdown = 0;
        }
        return Comma.add(countdown) + '円';
      };

      return Campaign25;

    })(Backbone.View);
    return Campaign25;
  });

}).call(this);
