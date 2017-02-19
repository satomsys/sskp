(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'shifty'], function(require) {
    var $, Backbone, ModalWindow01, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    return ModalWindow01 = (function(_super) {
      __extends(ModalWindow01, _super);

      function ModalWindow01() {
        _ref = ModalWindow01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      Tween 用オブジェクトを返す
      */


      ModalWindow01.prototype.tweenObject = function(obj) {
        var fromOpacity, returnObject, showTweenObj;
        returnObject = {};
        fromOpacity = Number(this.$dialog().css('opacity')) || 0;
        showTweenObj = {
          duration: 100,
          easing: 'easeInOutQuad',
          step: _.bind(this.tweenStepCallback, this),
          from: {
            opacity: fromOpacity
          }
        };
        _.extend(returnObject, showTweenObj, obj);
        return returnObject;
      };

      /*
      tweenが変わるたびに呼び出されるコールバック
      */


      ModalWindow01.prototype.tweenStepCallback = function(obj) {};

      /*
      body のスクロールを抑制する
      ref: https://github.com/twbs/bootstrap/issues/9855#issuecomment-30109204
      */


      ModalWindow01.prototype.preventBodyScroll = function() {
        var scrollbarWidth;
        if (document.body.clientHeight > window.innerHeight) {
          if (this._scrollbarDetectDiv == null) {
            this._scrollbarDetectDiv = $('<div style="width: 100px; height:100px; overflow: scroll; position: absolute; top: -9999px;"></div>');
            $('body').append(this._scrollbarDetectDiv);
          }
          scrollbarWidth = this._scrollbarDetectDiv.get(0).offsetWidth - this._scrollbarDetectDiv.get(0).clientWidth;
          $('body').css('padding-right', scrollbarWidth + 'px');
        }
        $('body').css('overflow', 'hidden');
        $(window).on('wheel.UserScrollDisabler  mousewheel.UserScrollDisabler DOMMouseScroll.UserScrollDisabler', function(e) {
          e.stopPropagation();
          return e.preventDefault();
        });
        $(document).on('wheel.UserScrollDisabler mousewheel.UserScrollDisabler touchmove.UserScrollDisabler', function(e) {
          e.stopPropagation();
          return e.preventDefault();
        });
        return $(window).on('scroll.UserScrollDisabler', function(e) {
          e.stopPropagation();
          return e.preventDefault();
        });
      };

      /*
      body のスクロールを有効にする
      */


      ModalWindow01.prototype.enableBodyScroll = function() {
        $('body').css('overflow', 'auto');
        $('body').css('padding-right', '0');
        $(window).off('.UserScrollDisabler');
        return $(document).off('.UserScrollDisabler');
      };

      /*
      IE6 での上端合わせ
      */


      ModalWindow01.prototype.adjustTopPositionWhenIE6 = function() {
        var topPx;
        if (window.ssk.app.ua.lteIE6) {
          topPx = $(document).scrollTop() + 'px';
          return this.$dialog().css('top', topPx);
        }
      };

      /*
      幅を変更する
      */


      ModalWindow01.prototype.adjustWidth = function() {
        var $dialog, $iframe, $iframeHtml, $wrapper, e, html, iframe, style, uaString, width, wrapper;
        width = this.calcWidth();
        $dialog = this.$dialog();
        uaString = window.navigator.userAgent;
        if (uaString.toLowerCase().indexOf('chrome') > 0 && uaString.toLowerCase().indexOf('edge') > 0) {
          wrapper = $dialog[0].getElementsByClassName('modal-content-wrapper');
          if (!wrapper.length) {
            wrapper = $dialog[0].getElementsByClassName('modal-confirm-wrapper');
          }
          wrapper = wrapper[0];
          wrapper.style.width = width;
          iframe = wrapper.getElementsByTagName('iframe')[0];
          if (!iframe) {
            return;
          }
          try {
            html = iframe.contentWindow.document.getElementsByTagName('html');
          } catch (_error) {
            e = _error;
            return;
          }
          if (html.length < 1) {
            return;
          }
          style = html[0].getAttribute('style') ? [html[0].getAttribute('style')] : [];
          if (width.match('px')) {
            style.push('; overflow-x: hidden;');
          }
          if (width.match('%')) {
            style.push('; overflow-x: auto;');
          }
          html[0].setAttribute('style', style.join(' '));
          return;
        }
        $wrapper = $dialog.find('.modal-content-wrapper');
        if (!$wrapper.get(0)) {
          $wrapper = $dialog.find('.modal-confirm-wrapper');
        }
        $iframe = $dialog.find('.modal-content iframe');
        $wrapper.css('width', width);
        if ($iframe) {
          if ($('html').hasClass('ie7') && width.match('px')) {
            width = Number(width.replace('px', '')) + 16 + 'px';
          }
          $iframe.css('width', width);
          if ($iframe && window.navigator.userAgent.toLowerCase().indexOf('trident') > 0 && $iframe.get(0) && $iframe.get(0).contentWindow) {
            html = null;
            try {
              html = $iframe.get(0).contentWindow.document.getElementsByTagName('html');
            } catch (_error) {
              e = _error;
              return;
            }
            if (html.length < 1) {
              return;
            }
            style = html[0].getAttribute('style') ? [html[0].getAttribute('style')] : [];
            if (width.match('px')) {
              style.push('; overflow-x: hidden;');
            }
            if (width.match('%')) {
              style.push('; overflow-x: auto;');
            }
            return html[0].setAttribute('style', style.join(' '));
          } else {
            $iframeHtml = $iframe.contents().find('html');
            if (width.match('px')) {
              $iframeHtml.css('overflow-x', 'hidden');
            }
            if (width.match('%')) {
              return $iframeHtml.css('overflow-x', 'auto');
            }
          }
        }
      };

      return ModalWindow01;

    })(Backbone.View);
  });

}).call(this);
