/*
dialog01
TODO: スマートフォン対応
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'components/modal_window01', 'shifty'], function(require) {
    var $, Backbone, Confirm01, ModalWindow01, Tweenable, confirmOverlayStr, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Tweenable = require('shifty');
    ModalWindow01 = require('components/modal_window01');
    confirmOverlayStr = '<div class=\'modal-confirm01 modal-overlay\'>\n    <div class="modal-confirm-wrapper">\n        <div class="modal-confirm-content">\n        </div>\n    </div>\n</div>';
    return Confirm01 = (function(_super) {
      __extends(Confirm01, _super);

      function Confirm01() {
        _ref = Confirm01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      Confirm01.prototype.initialize = function(o) {
        this.$el = $(confirmOverlayStr);
        this.tween = new Tweenable();
        this.$dom = null;
        this.contentMargin = 40;
        this.contentPadding = 28;
        this.wrapperButtonHeight = 0;
        this.contentMinMargin = 5;
        this.windowHeightLimit = 400;
        return $('body').append(this.$el);
      };

      /*
      中身を設定する
      */


      Confirm01.prototype.content = function($dom) {
        this.$dom = $dom;
        this.$el.find('.modal-confirm-content').html(this.$dom);
        return this.$el.css('opacity', 0);
      };

      /*
      ダイアログを表示させる
      */


      Confirm01.prototype.show = function() {
        var showTweenObj;
        this.preventBodyScroll();
        $(window).bind('resize.confirm01', _.bind(this.onWindowResize, this));
        if (window.ssk.app.ua.lteIE6) {
          this.$dialog().css('height', $(window).height() + 'px');
        }
        this.$el.show();
        this.adjustTopPositionWhenIE6();
        showTweenObj = this.tweenObject({
          to: {
            opacity: 1
          }
        });
        this.tween.stop().tween(showTweenObj);
        return this.redraw();
      };

      /*
      ダイアログを隠す
      */


      Confirm01.prototype.hide = function() {
        var hideTweenObj;
        $(window).unbind('resize.confirm01');
        this.enableBodyScroll();
        hideTweenObj = this.tweenObject({
          to: {
            opacity: 0
          },
          callback: _.bind(this.hideTweenCompleteCallback, this)
        });
        return this.tween.stop().tween(hideTweenObj);
      };

      /*
      ダイアログ隠し完了時点に呼び出されるコールバック
      */


      Confirm01.prototype.hideTweenCompleteCallback = function() {
        this.$dialog().css('opacity', 0);
        return this.$dialog().hide();
      };

      /*
      Tween のときに呼び出される関数
      */


      Confirm01.prototype.tweenStepCallback = function(obj) {
        return this.$el.css('opacity', obj.opacity);
      };

      Confirm01.prototype.redraw = function() {
        this.adjustWidth();
        return this.adjustHeight();
      };

      /*
      リサイズ時
      */


      Confirm01.prototype.onWindowResize = function() {
        return this.redraw();
      };

      /*
      ダイアログ要素を返す
      */


      Confirm01.prototype.$dialog = function() {
        return this.$el;
      };

      /*
      高さを変更する
      */


      Confirm01.prototype.adjustHeight = function() {
        var $content, $dialog, $wrapper, heightAndMargin, windowHeight;
        windowHeight = $(window).height();
        heightAndMargin = this.adjustHeightShortContentHeight();
        if (windowHeight <= this.windowHeightLimit && heightAndMargin === null) {
          heightAndMargin = this.adjustHeightShortWindowHeight();
        }
        if (heightAndMargin === null) {
          heightAndMargin = this.adjustHeightNormalWindowHeight();
        }
        if (heightAndMargin === null) {
          return;
        }
        $dialog = this.$dialog();
        $wrapper = $dialog.find('.modal-confirm-wrapper');
        $content = $wrapper.find('.modal-confirm-content');
        $wrapper.css('height', (heightAndMargin.height - 2 * this.contentPadding) + 'px');
        return $wrapper.css({
          'margin-top': heightAndMargin.marginTop + 'px',
          'margin-bottom': heightAndMargin.marginBottom + 'px'
        });
      };

      /*
      content が少ないとき
      */


      Confirm01.prototype.adjustHeightShortContentHeight = function() {
        var margin, o, windowHeight, wrapperHeight;
        windowHeight = $(window).height();
        wrapperHeight = this.wrapperHeight();
        if (windowHeight >= wrapperHeight) {
          margin = Math.floor((windowHeight - wrapperHeight) / 2);
          o = {
            height: wrapperHeight,
            marginTop: margin,
            marginBottom: margin
          };
          return o;
        }
        return null;
      };

      /*
      @windowHeightLimit よりも Window の高さが高いとき
      */


      Confirm01.prototype.adjustHeightNormalWindowHeight = function() {
        var o;
        o = {
          marginTop: this.contentMargin,
          marginBottom: this.contentMargin,
          height: this.calcInnerHeight(this.contentMargin, this.contentMargin)
        };
        return o;
      };

      /*
      @windowHeightLimit よりも Window の高さが低いとき
      */


      Confirm01.prototype.adjustHeightShortWindowHeight = function() {
        var o;
        o = {
          marginTop: this.contentMinMargin + this.wrapperButtonHeight,
          marginBottom: this.contentMinMargin,
          height: this.calcInnerHeight(this.contentMinMargin, this.contentMinMargin)
        };
        return o;
      };

      Confirm01.prototype.wrapperHeight = function() {
        return this.$dialog().find('.modal-confirm-content').height() + 2 * this.contentPadding;
      };

      /*
      window とマージンに対してのコンテンツの高さを返す
      */


      Confirm01.prototype.calcInnerHeight = function(marginTop, marginBottom) {
        return $(window).height() - marginTop - marginBottom;
      };

      /*
      幅を計算する
      */


      Confirm01.prototype.calcWidth = function() {
        var max, windowWidth;
        max = 700;
        windowWidth = $(window).width();
        if (windowWidth < max) {
          return '100%';
        }
        return max + 'px';
      };

      return Confirm01;

    })(ModalWindow01);
  });

}).call(this);
