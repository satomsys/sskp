/*
input required

input-required クラスがついた入力フォームの処理
*/


(function() {
  define(['require', 'jquery', 'underscore'], function(require) {
    var $, InputRequired, _;
    $ = require('jquery');
    _ = require('underscore');
    InputRequired = (function() {
      /*
      初期化
      */

      function InputRequired(o) {
        this.$el = o.$el;
        this.initializeEvents();
        this.updateInputType(this.$el.find('input, textarea, select'));
      }

      /*
      イベントを初期化する
      */


      InputRequired.prototype.initializeEvents = function() {
        this.$el.find('input').on('change', _.bind(this.onInputChange, this));
        this.$el.find('textarea').on('change', _.bind(this.onTextareaChange, this));
        return this.$el.find('select').on('change', _.bind(this.onSelectChange, this));
      };

      /*
      input change
      */


      InputRequired.prototype.onInputChange = function(e) {
        return this.updateInputType($(e.target));
      };

      /*
      textarea change
      */


      InputRequired.prototype.onTextareaChange = function(e) {
        return this.updateInputType($(e.target));
      };

      /*
      select change
      */


      InputRequired.prototype.onSelectChange = function(e) {
        return this.updateInputType($(e.target));
      };

      /*
      input のタイプ(必須かどうか)を変更する
      */


      InputRequired.prototype.updateInputType = function($target) {
        if (this.isEmptyVal($target)) {
          this.addRequired();
          return;
        }
        return this.removeRequired();
      };

      /*
      要素が空/未選択の時
      */


      InputRequired.prototype.isEmptyVal = function($target) {
        if ($target.val() === '選択してください') {
          return true;
        }
        return $target.val() === null || $target.val() === '' || false;
      };

      /*
      input-required クラスを付ける
      */


      InputRequired.prototype.addRequired = function() {
        return this.$el.addClass('input-required');
      };

      /*
      input-required クラスを削除する
      */


      InputRequired.prototype.removeRequired = function() {
        return this.$el.removeClass('input-required');
      };

      return InputRequired;

    })();
    return $(function() {
      return $('.input-required').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new InputRequired(o);
      });
    });
  });

}).call(this);
