/*
text area count
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery'], function(require) {
    var $, Backbone, TextAreaCount, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    TextAreaCount = (function(_super) {
      __extends(TextAreaCount, _super);

      function TextAreaCount() {
        _ref = TextAreaCount.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      TextAreaCount.prototype.initialize = function(o) {
        var $el, targetName;
        this.$el = $el = o.$el;
        targetName = $el.attr('data-textarea-target') || null;
        if (targetName === null) {
          return null;
        }
        this.$target = $(targetName);
        if (!this.$target) {
          return null;
        }
        this.initializeMaxCount();
        this.initializeTargetEvent();
        return this.onTextareaChanged();
      };

      /*
      TextArea のイベント初期化
      */


      TextAreaCount.prototype.initializeTargetEvent = function() {
        this.$target.on('change', _.bind(this.onTextareaChanged, this));
        return this.$target.on('keyup', _.bind(this.onTextareaChanged, this));
      };

      /*
      テキストが変更されたときに呼び出されるコールバック
      */


      TextAreaCount.prototype.onTextareaChanged = function() {
        this.updateHtml(this.generateHTML());
        return this.updateTextarea();
      };

      /*
      テキストエリアの表示を変更する
      */


      TextAreaCount.prototype.updateTextarea = function() {
        var $inputTextArea, tooLong;
        $inputTextArea = this.$target.parent('.input-textarea01');
        if ($inputTextArea == null) {
          return;
        }
        tooLong = this.isTextLengthTooLong();
        if (tooLong) {
          this.errorView();
          return;
        }
        return this.normalView();
      };

      /*
      通常状態にする
      */


      TextAreaCount.prototype.normalView = function() {
        var $inputTextArea;
        $inputTextArea = this.$target.parent('.input-textarea01');
        $inputTextArea.removeClass('input-error');
        return $inputTextArea.find('.form-error-balloon01').remove();
      };

      /*
      エラー状態にする
      */


      TextAreaCount.prototype.errorView = function() {
        var $inputTextArea;
        $inputTextArea = this.$target.parent('.input-textarea01');
        $inputTextArea.addClass('input-error');
        if ($inputTextArea.find('.form-error-balloon01')[0] == null) {
          return $('<div class="form-error-balloon01"><div class="error-message">' + this.maxCount + '文字以内でお願いします。</div></div>').prependTo($inputTextArea);
        }
      };

      /*
      HTML を更新する
      */


      TextAreaCount.prototype.updateHtml = function(str) {
        return this.$el.html(str);
      };

      /*
      表示するHTMLを生成する
      */


      TextAreaCount.prototype.generateHTML = function() {
        var cssClass, txt;
        cssClass = '';
        if (this.isTextLengthTooLong()) {
          cssClass = ' class="overflow"';
        }
        txt = "（入力文字数<b" + cssClass + ">" + (this.textLength()) + "</b>文字）";
        return txt;
      };

      /*
      テキストエリアの文字数を返す
      */


      TextAreaCount.prototype.textLength = function() {
        return this.$target.val().length;
      };

      /*
      文字数が最大文字数より多かったら true を返す
      */


      TextAreaCount.prototype.isTextLengthTooLong = function() {
        if (this.maxCount == null) {
          return false;
        }
        return this.maxCount < this.textLength();
      };

      /*
      最大文字数を返す
      */


      TextAreaCount.prototype.initializeMaxCount = function() {
        return this.maxCount = this.$el.attr('data-textarea-max') || this.$target.attr('maxlength') || null;
      };

      return TextAreaCount;

    })(Backbone.View);
    $(function() {
      return $('.text-area-count').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new TextAreaCount(o);
      });
    });
    return TextAreaCount;
  });

}).call(this);
