/*
dialog01
TODO: スマートフォン対応
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'components/modal_window01', 'shifty', 'controllers/device'], function(require) {
    var $, Backbone, Device, Dialog01, ModalWindow01, Tweenable, isAndroid, isAndroidTablet, isIe6, isIe7, isIpad, ltAndroidTablet4, ltIpadIOS6, lthAndroid4, majorVersion, openNewWindowDevices, overlayStr, ua, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Tweenable = require('shifty');
    ModalWindow01 = require('components/modal_window01');
    Device = require('controllers/device');
    overlayStr = '<div class=\'modal-dialog01 modal-overlay\'>\n    <div class="modal-content-wrapper">\n        <div class="modal-content">\n        </div>\n        <div class="button-modal-close">\n            <a href="#" class="button-anchor"><span class="ir ir-modal-window-close01">☓</span></a>\n        </div>\n    </div>\n</div>';
    ua = window.navigator.userAgent.toLowerCase();
    isIe6 = ua.indexOf('msie 6') > 0;
    isIe7 = ua.indexOf('msie 7') > 0;
    isIpad = ua.indexOf('ipad') > 0;
    isAndroid = ua.indexOf('android') > 0;
    lthAndroid4 = isAndroid ? Number(ua.match(/android\s([0-9])/)[1]) <= 4 : false;
    isAndroidTablet = isAndroid && ua.indexOf('mobile') <= 0;
    majorVersion = (isIpad || isAndroid) && ua.match(/version\/([0-9])/) !== null ? Number(ua.match(/version\/([0-9])/)[1]) : void 0;
    ltIpadIOS6 = isIpad && typeof majorVersion === 'number' && majorVersion < 6;
    ltAndroidTablet4 = isAndroidTablet && lthAndroid4;
    ltAndroidTablet4 = ltAndroidTablet4 || ua.indexOf('SC-01C') > 0 || ua.indexOf('Android 2.3.6; ja-jp; N-06D') > 0;
    openNewWindowDevices = isIe6 || isIe7 || ltIpadIOS6 || ltAndroidTablet4;
    Dialog01 = (function(_super) {
      __extends(Dialog01, _super);

      function Dialog01() {
        _ref = Dialog01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Dialog01.prototype.events = {
        'click .link-anchor': 'onLinkClicked'
      };

      /*
      初期化
      */


      Dialog01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.tween = new Tweenable();
        this.contentMargin = 40;
        this.contentPadding = 28;
        this.wrapperButtonHeight = 40;
        this.contentMinMargin = 5;
        return this.windowHeightLimit = 400;
      };

      /*
      リンククリック時に呼び出されるコールバック
      */


      Dialog01.prototype.onLinkClicked = function(e) {
        e.preventDefault();
        return this.show();
      };

      /*
      ダイアログを表示させる
      */


      Dialog01.prototype.show = function() {
        var href;
        if (Device.getType() === Device.TYPE_PHONE || openNewWindowDevices) {
          href = this.iframeSrc();
          window.open(href);
          return;
        }
        this.setContent();
        $(window).bind('resize.dialog01', _.bind(this.onWindowResize, this));
        this.preventBodyScroll();
        this.setOnIframeLoadEvent();
        this.$el.show();
        this.adjustTopPositionWhenIE6();
        if (this.isIframeLoaded === true) {
          this.$dialog().on('click.dialog01-overlay', _.bind(this.onOverlayClicked, this));
          this.$dialog().show();
          return this.redraw();
        }
      };

      /*
      ダイアログを隠す
      */


      Dialog01.prototype.hide = function() {
        var hideTweenObj;
        $(window).unbind('resize.dialog01');
        this.enableBodyScroll();
        hideTweenObj = this.tweenObject({
          to: {
            opacity: 0
          },
          callback: _.bind(this.hideTweenCompleteCallback, this)
        });
        this.tween.stop().tween(hideTweenObj);
        return this.$dialog().off('click.dialog01-overlay');
      };

      /*
      ダイアログ隠し完了時点に呼び出されるコールバック
      */


      Dialog01.prototype.hideTweenCompleteCallback = function() {
        this.$dialog().css('opacity', 0);
        return this.$dialog().hide();
      };

      /*
      iframe の onload イベントを追加&１回だけ実行
      */


      Dialog01.prototype.setOnIframeLoadEvent = function() {
        var _this = this;
        if (this._iframeOnLoadEventSet === true) {
          return;
        }
        this.$dialog().find('.modal-content iframe').on('load', function() {
          if (_this.isIframeLoaded) {
            _this.adjustWidth();
            return;
          }
          _this.adjustInitialHeight();
          _this.$dialog().css('opacity', 0);
          _this.$dialog().on('click.dialog01-overlay', _.bind(_this.onOverlayClicked, _this));
          _this.$dialog().show();
          return _this.isIframeLoaded = true;
        });
        return this._iframeOnLoadEventSet = true;
      };

      /*
      Tween のときに呼び出される関数
      */


      Dialog01.prototype.tweenStepCallback = function(obj) {
        return this.$dialog().css('opacity', obj.opacity);
      };

      /*
      iframe のタグを生成する
      */


      Dialog01.prototype.setContent = function() {
        var iframe, iframeSrc;
        if (this._iframeGenerated === true) {
          return;
        }
        iframeSrc = this.iframeSrc();
        iframe = "<iframe src='" + iframeSrc + "' frameborder='0' seamless></iframe>";
        this.$dialog().find('.modal-content').html(iframe);
        return this._iframeGenerated = true;
      };

      /*
      iframe の src を返す
      */


      Dialog01.prototype.iframeSrc = function() {
        return this.$el.find('.link-anchor').attr('href');
      };

      /*
      再描画する
      */


      Dialog01.prototype.redraw = function() {
        var showTweenObj;
        if (this.isIframeLoaded !== true) {
          return;
        }
        this.adjustHeight();
        this.adjustWidth();
        showTweenObj = this.tweenObject({
          to: {
            opacity: 1
          }
        });
        return this.tween.stop().tween(showTweenObj);
      };

      /*
      高さを変更する
      */


      Dialog01.prototype.adjustHeight = function() {
        var $content, $dialog, $iframe, $wrapper, heightAndMargin, windowHeight;
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
        $wrapper = $dialog.find('.modal-content-wrapper');
        $content = $wrapper.find('.modal-content');
        $iframe = $content.find('iframe');
        $content.css('height', heightAndMargin.height + 'px');
        $iframe.css('height', heightAndMargin.height + 'px');
        $wrapper.css({
          'margin-top': heightAndMargin.marginTop + 'px',
          'margin-bottom': heightAndMargin.marginBottom + 'px'
        });
        if (!(isIpad || isAndroid)) {
          return $content.css({
            'overflow': 'hidden'
          });
        }
      };

      /*
      content(iframe) が少ないとき
      */


      Dialog01.prototype.adjustHeightShortContentHeight = function() {
        var iframeHeight, margin, o, windowHeight, wrapperHeight;
        windowHeight = $(window).height();
        iframeHeight = this.iframeHeight;
        wrapperHeight = this.wrapperHeight();
        if (iframeHeight !== -1 && windowHeight >= wrapperHeight) {
          margin = Math.floor((windowHeight - wrapperHeight) / 2) + this.wrapperButtonHeight;
          o = {
            height: iframeHeight,
            marginTop: margin,
            marginBottom: margin
          };
          return o;
        }
        return null;
      };

      /*
      @windowHeightLimit よりも Window の高さが低いとき
      */


      Dialog01.prototype.adjustHeightShortWindowHeight = function() {
        var o;
        o = {
          marginTop: this.contentMinMargin + this.wrapperButtonHeight,
          marginBottom: this.contentMinMargin,
          height: this.calcInnerHeight(this.contentMinMargin + this.wrapperButtonHeight, this.contentMinMargin)
        };
        return o;
      };

      /*
      @windowHeightLimit よりも Window の高さが高いとき
      */


      Dialog01.prototype.adjustHeightNormalWindowHeight = function() {
        var o;
        o = {
          marginTop: this.contentMargin,
          marginBottom: this.contentMargin,
          height: this.calcInnerHeight(this.contentMargin, this.contentMargin)
        };
        return o;
      };

      /*
      window とマージンに対してのコンテンツの高さを返す
      */


      Dialog01.prototype.calcInnerHeight = function(marginTop, marginBottom) {
        return $(window).height() - marginTop - marginBottom - (this.contentPadding * 2);
      };

      /*
      コンテンツの閉じるボタンの上から、パネル下までの高さ
      */


      Dialog01.prototype.wrapperHeight = function() {
        return this.iframeHeight + (this.contentPadding * 2) + this.wrapperButtonHeight;
      };

      /*
      幅を変更する
      */


      /*
      幅を計算する
      */


      Dialog01.prototype.calcWidth = function() {
        var max, windowWidth;
        max = 1000;
        if (this.isSetInformationFrame()) {
          max = 550;
        }
        windowWidth = $(window).width();
        if (windowWidth < max) {
          return '100%';
        }
        return max + 'px';
      };

      /*
      iframe の初期の高さを取得する
      */


      Dialog01.prototype.adjustInitialHeight = function() {
        var _this = this;
        return setTimeout(function() {
          var e;
          try {
            _this.iframeHeight = _this.$dialog().find('.modal-content iframe').contents().find('body')[0].scrollHeight;
          } catch (_error) {
            e = _error;
            _this.iframeHeight = -1;
          }
          return _this.redraw();
        }, 0);
      };

      /*
      ウィンドウがリサイズされたときに呼び出されるコールバック
      */


      Dialog01.prototype.onWindowResize = function() {
        return this.redraw();
      };

      /*
      body のスクロールを抑制する
      */


      /*
      body のスクロールを有効にする
      */


      /*
      ダイアログのイベントを設定する
      */


      Dialog01.prototype.initDialogEvents = function() {
        var $d,
          _this = this;
        $d = this.$dialog();
        $d.on('wheel mousewheel', function(e) {
          e.preventDefault();
          return e.stopPropagation();
        });
        return $d.find('.button-modal-close .button-anchor').on('click', function(e) {
          e.preventDefault();
          return _this.hide();
        });
      };

      /*
      Tween 用オブジェクトを返す
      */


      /*
      ダイアログ要素を返す
      */


      Dialog01.prototype.$dialog = function() {
        var $d;
        if (this._$dialog) {
          return this._$dialog;
        }
        $d = $(overlayStr);
        if (this.isSetInformationFrame()) {
          $d.find('.modal-content-wrapper').addClass('for-product-set');
        }
        $('body').append($d);
        this._$dialog = $d;
        this.initDialogEvents();
        return this._$dialog;
      };

      /*
      パネルのどこかがクリックされたときに呼び出されるコールバック
      */


      Dialog01.prototype.onOverlayClicked = function(e) {
        if (e.target !== this.$dialog().find('.modal-content-wrapper').get(0)) {
          return this.hide();
        }
      };

      /*
      セット情報かどうかを返す
      */


      Dialog01.prototype.isSetInformationFrame = function() {
        if (this._isSetInformationFrame) {
          return this._isSetInformationFrame;
        }
        this._isSetInformationFrame = this.$el.hasClass('set-info-frame');
        return this._isSetInformationFrame;
      };

      return Dialog01;

    })(ModalWindow01);
    /*
    document ready
    */

    $(function() {
      return $('.link-for-dialog').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new Dialog01(o);
      });
    });
    return Dialog01;
  });

}).call(this);
