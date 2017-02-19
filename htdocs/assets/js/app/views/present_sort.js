/*
present sort
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore'], function(require) {
    var $, Backbone, PresentSort, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    PresentSort = (function(_super) {
      __extends(PresentSort, _super);

      function PresentSort() {
        _ref = PresentSort.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PresentSort.prototype.events = {
        "click .sort-genre a": "onSelectChanged"
      };

      /*
      初期化
      */


      PresentSort.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.presentsBlock = o.presentsBlock;
        return this.initializePresentsBlockEvent();
      };

      PresentSort.prototype.initializePresentsBlockEvent = function() {
        return this.presentsBlock.on('rearranged', _.bind(this.onRearranged, this));
      };

      /*
      ソートを実行する
      */


      PresentSort.prototype.sort = function($el) {
        var sortOrder, sortTarget;
        sortTarget = $el.attr('data-sort-target');
        sortOrder = $el.attr('data-sort-order');
        return this.presentsBlock.sort(sortTarget, sortOrder);
      };

      /*
      リンクテキストの表示を更新
      */


      PresentSort.prototype.updateState = function() {
        var sortOrder, sortTarget;
        sortTarget = this.presentsBlock.sortTarget();
        sortOrder = this.presentsBlock.sortOrder();
        return this.$el.find('.sort-genre a').each(function(idx, e) {
          var $e;
          $e = $(e);
          if ($e.attr('data-sort-target') === sortTarget && $e.attr('data-sort-order') === sortOrder) {
            $(e).addClass('link-stay');
            return;
          }
          return $(e).removeClass('link-stay');
        });
      };

      /*
      ソート項目の変更ボタンが押された時の処理
      */


      PresentSort.prototype.onSelectChanged = function(e) {
        e.preventDefault();
        if ($(e.target).hasClass('link-stay')) {
          return;
        }
        return this.sort($(e.target));
      };

      /*
      並び替えが終わったときに呼び出されるコールバック
      */


      PresentSort.prototype.onRearranged = function() {
        return this.updateState();
      };

      return PresentSort;

    })(Backbone.View);
    return PresentSort;
  });

}).call(this);
