/*
注文フロー同封物パネル
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone'], function(require) {
    var $, Backbone, OrderIncludeListLayout, OrderIncludePanel, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    OrderIncludeListLayout = (function() {
      function OrderIncludeListLayout(o) {
        this.$el = o.$el;
        this.layout();
      }

      /*
      平仄を合わせる
      - 最初の4つのパネルは上のマージン無し
      - 改行直後のパネルの左マージンを消す
      - 画像パネルの最大個数は2
      - パネル総数は10個
      */


      OrderIncludeListLayout.prototype.layout = function() {
        var isPicEnd, lineItems, pics, texts,
          _this = this;
        isPicEnd = false;
        lineItems = 0;
        pics = 0;
        texts = 0;
        return this.$el.find('.list-item').each(function(idx, e) {
          var $e, pic;
          $e = $(e);
          if (idx <= 3) {
            $e.css('margin-top', 0);
          }
          if (_this.isLeftPanel(pics, texts)) {
            $e.css({
              'margin-left': 0,
              'clear': 'both'
            });
            isPicEnd = false;
            pics = 0;
            texts = 0;
          }
          pic = !!($e.find('.order-include-has-image').length > 0);
          lineItems += 1;
          if (pic && isPicEnd === false) {
            pics += 1;
          }
          if (!pic) {
            return texts += 1;
          }
        });
      };

      OrderIncludeListLayout.prototype.isLeftPanel = function(pics, texts) {
        if (pics === 0 && texts === 0) {
          return true;
        }
        if (pics === 0 && texts === 4) {
          return true;
        }
        if (pics === 1 && texts === 6) {
          return true;
        }
        if (pics === 2 && texts === 4) {
          return true;
        }
        if (pics === 3 && texts === 2) {
          return true;
        }
        if (pics === 4 && texts === 0) {
          return true;
        }
        return false;
      };

      return OrderIncludeListLayout;

    })();
    OrderIncludePanel = (function(_super) {
      __extends(OrderIncludePanel, _super);

      function OrderIncludePanel() {
        _ref = OrderIncludePanel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      イベント初期化
      */


      OrderIncludePanel.prototype.events = {
        'click': 'onPanelClicked'
      };

      /*
      初期化
      */


      OrderIncludePanel.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.initializeCheckboxEvents();
        return this.updateCheckbox();
      };

      OrderIncludePanel.prototype.initializeCheckboxEvents = function() {
        return this.$checkbox().on('change', _.bind(this.onCheckboxChanged, this));
      };

      OrderIncludePanel.prototype.updateCheckbox = function() {
        var checked;
        checked = this.$checkbox().prop('checked');
        if (checked) {
          this.$el.addClass('order-include-selected');
        }
        if (!checked) {
          return this.$el.removeClass('order-include-selected');
        }
      };

      OrderIncludePanel.prototype.onCheckboxChanged = function(e) {
        return this.updateCheckbox();
      };

      OrderIncludePanel.prototype.onPanelClicked = function(e) {
        if ($(e.target).hasClass('ir-input-checkbox01')) {
          return;
        }
        if ($(e.target).hasClass('input-type-checkbox')) {
          return;
        }
        if ($(e.target).hasClass('label-for-input')) {
          return;
        }
        return this.$checkbox().click();
      };

      OrderIncludePanel.prototype.$checkbox = function() {
        return this.$el.find('.input-type-checkbox');
      };

      return OrderIncludePanel;

    })(Backbone.View);
    return $(function() {
      $('.order-include-list01').each(function(idx, el) {
        var o;
        o = {
          $el: $(el)
        };
        return new OrderIncludeListLayout(o);
      });
      return $('.panel01.order-include-panel').each(function(idx, el) {
        var o;
        o = {
          $el: $(el)
        };
        return new OrderIncludePanel(o);
      });
    });
  });

}).call(this);
