/*
presents block
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'underscore', 'backbone', 'jquery'], function(require) {
    var $, Backbone, PresentsBlock, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    PresentsBlock = (function(_super) {
      __extends(PresentsBlock, _super);

      function PresentsBlock() {
        _ref = PresentsBlock.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化する
      */


      PresentsBlock.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.cart = o.cart;
        return this.storeDefaultOrder();
      };

      /*
      初期の並びを保存する
      */


      PresentsBlock.prototype.storeDefaultOrder = function() {
        return this.$el.find('> div').each(function(idx, e) {
          var $e;
          $e = $(e);
          return $e.find('.present-item-block01, .present-item-block02').attr('data-sort-default', idx);
        });
      };

      /*
      ソートする
      */


      PresentsBlock.prototype.sort = function(target, order) {
        this.sortTarget(target);
        this.sortOrder(order);
        return this.rearrange();
      };

      /*
      フィルターする
      */


      PresentsBlock.prototype.filter = function(type) {
        this.filterType(type);
        return this.rearrange();
      };

      /*
      並び替えをする
      */


      PresentsBlock.prototype.rearrange = function() {
        var $sorted, $target;
        $target = this.$el;
        this.filterDivs($target);
        $sorted = this.sortDivs($target);
        this.updatePanelMargin($sorted);
        this.$el.html($sorted);
        this.cart.updateItemBlock();
        return this.rearranged();
      };

      /*
      パネルの左マージンの追加/削除を行う
      */


      PresentsBlock.prototype.updatePanelMargin = function($target) {
        var pos,
          _this = this;
        pos = 0;
        return $target.each(function(idx, e) {
          var $e;
          $e = $(e);
          if ($e.is(':visible')) {
            _this.changePanelMargin($e, pos % 4 === 0);
            return ++pos;
          }
        });
      };

      /*
      パネルの左マージンの追加/削除を行う
      hasNoMargin == true のときにマージン無し
      */


      PresentsBlock.prototype.changePanelMargin = function($e, hasNoMargin) {
        if (hasNoMargin) {
          $e.removeClass('has-left-margin');
          return;
        }
        return $e.addClass('has-left-margin');
      };

      /*
      div のフィルター
      */


      PresentsBlock.prototype.filterDivs = function($target) {
        var filterType,
          _this = this;
        filterType = this.filterType();
        if (filterType === 'all' || filterType === null) {
          $target.find(' > div').show();
          return;
        }
        return $target.find(' > div').each(function(idx, e) {
          var $e, filterCategories;
          $e = $(e);
          filterCategories = _this.elementFilterCategories($e);
          if (_.indexOf(filterCategories, filterType) === -1) {
            $e.hide();
            return;
          }
          return $e.show();
        });
      };

      /*
      div のソート
      */


      PresentsBlock.prototype.sortDivs = function($target) {
        var $sorted, invert, sortTarget;
        sortTarget = this.sortTarget();
        if (sortTarget === null) {
          return $target.find('> div');
        }
        invert = this.sortOrder() === 'ascending' ? 1 : -1;
        $sorted = $target.find('> div').sort(function(a, b) {
          var $a, $b, defaultA, defaultB, valA, valB;
          $a = $(a).find('.present-item-block01, .present-item-block02');
          $b = $(b).find('.present-item-block01, .present-item-block02');
          valA = Number($a.attr(sortTarget));
          valB = Number($b.attr(sortTarget));
          if (valA > valB) {
            return 1 * invert;
          }
          if (valA < valB) {
            return -1 * invert;
          }
          defaultA = Number($a.attr('data-sort-default'));
          defaultB = Number($b.attr('data-sort-default'));
          if (defaultA >= defaultB) {
            return 1 * invert;
          } else {
            return -1 * invert;
          }
        });
        return $sorted;
      };

      /*
      data-filter-categor を配列にして返す
      */


      PresentsBlock.prototype.elementFilterCategories = function($el) {
        var filterCategories, filterCategoryString;
        filterCategoryString = $el.find('.present-item-block01, .present-item-block02').attr('data-filter-category') || '';
        filterCategories = filterCategoryString.split(' ');
        return filterCategories;
      };

      /*
      並び替え後に呼び出される
      */


      PresentsBlock.prototype.rearranged = function() {
        return this.trigger('rearranged');
      };

      /*
      ソート項目を設定する/返す
      */


      PresentsBlock.prototype.sortTarget = function(target) {
        if ((target == null) && (this._sortTarget != null)) {
          return this._sortTarget;
        }
        this._sortTarget = target != null ? target : null;
        return this._sortTarget;
      };

      /*
      ソート順を設定する/返す
      */


      PresentsBlock.prototype.sortOrder = function(order) {
        if ((order == null) && (this._sortOrder != null)) {
          return this._sortOrder;
        }
        this._sortOrder = order != null ? order : null;
        return this._sortOrder;
      };

      /*
      フィルタータイプを設定する/返す
      */


      PresentsBlock.prototype.filterType = function(type) {
        if ((type == null) && (this._filterType != null)) {
          return this._filterType;
        }
        this._filterType = type != null ? type : null;
        return this._filterType;
      };

      return PresentsBlock;

    })(Backbone.View);
    return PresentsBlock;
  });

}).call(this);
