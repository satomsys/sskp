/*
confirm block
初期値は HTML 側で入力する
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore'], function(require) {
    var $, Backbone, ConfirmBlock01, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    ConfirmBlock01 = (function(_super) {
      __extends(ConfirmBlock01, _super);

      function ConfirmBlock01() {
        _ref = ConfirmBlock01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      ConfirmBlock01.prototype.initialize = function(o) {
        this.$el = o.$el;
        if (this.$el.data('confirm_block_instance')) {
          return;
        }
        this.$el.data('confirm_block_instance', this);
        this.$target = o.$target;
        this.data_selectable_group = o['data-selectable-group'] || null;
        this.notSelectedText = '選択されていません';
        this.suffix = o.suffix || 'を選択しています';
        return this.initTargetEvent();
      };

      /*
      target event を設定する
      今のところ .panel-selectable01 専用の作り
      */


      ConfirmBlock01.prototype.initTargetEvent = function() {
        var $target,
          _this = this;
        $target = this.$target.filter(function(idx, e) {
          if (_this.data_selectable_group === null) {
            return true;
          }
          return $(e).attr('data-selectable-group') === _this.data_selectable_group;
          return false;
        });
        return $target.find('.selectable-header-block .input-radio01 input').each(function(idx, e) {
          $(e).on('change', _.bind(_this.onRadioChanged, _this));
          if ($(e).prop('checked')) {
            return _this.updateText($(e));
          }
        });
      };

      /*
      表示するテキストを $el に合わせて更新する
      */


      ConfirmBlock01.prototype.updateText = function($el) {
        var text;
        if ($el) {
          text = this.labelText($el) + this.suffix;
        }
        if (text === void 0) {
          text = this.notSelectedText;
        }
        this.text(text);
        return _.defer(_.bind(this.adjustHeight, this));
      };

      /*
      高さ調整
      */


      ConfirmBlock01.prototype.adjustHeight = function() {
        var $e, h;
        h = this.$el.height();
        $e = this.$el.find('.form-item-label-block');
        this.setHeight($e, h);
        $e = this.$el.find('.form-item-input-block');
        return this.setHeight($e, h);
      };

      /*
      要素の高さをあわせる
      */


      ConfirmBlock01.prototype.setHeight = function($el, height) {
        var padding;
        padding = $el.innerHeight() - $el.height();
        return $el.height(height - padding);
      };

      /*
      text を表示させる
      */


      ConfirmBlock01.prototype.text = function(text) {
        return this.$el.find('.selected-item-info').text(text);
      };

      /*
      ラベルのテキストを返す
      */


      ConfirmBlock01.prototype.labelText = function($el) {
        return $el.siblings('label.label-for-input').text();
      };

      /*
      target の中の radio が変更されたときに呼び出されるコールバック
      */


      ConfirmBlock01.prototype.onRadioChanged = function(e) {
        return this.updateText($(e.target));
      };

      return ConfirmBlock01;

    })(Backbone.View);
    return ConfirmBlock01;
  });

}).call(this);
