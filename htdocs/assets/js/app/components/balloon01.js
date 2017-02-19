(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'shifty'], function(require) {
    var $, Backbone, Balloon01, Tweenable, balloonSrc, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Tweenable = require('shifty');
    balloonSrc = '<div class=\'balloon01\'>\n    <div class="ir ir-balloon-arrow01 balloon-arrow"></div>\n    <div class=\'balloon-content\'>\n    </div>\n</div>';
    return Balloon01 = (function(_super) {
      __extends(Balloon01, _super);

      function Balloon01() {
        _ref = Balloon01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Balloon01.prototype.initialize = function() {
        this.tween = new Tweenable();
        this.$el = $(balloonSrc);
        this.$dom = null;
        this.$prevDom = null;
        this.offsetY(5);
        this.domModified = false;
        this._isActive = false;
        this._isShown = false;
        this.defaultAutohideTimeMsec = 5000;
        this.autohideTimeoutId = null;
        this.$el.css('left', '-9999px');
        this.$el.css('opacity', 0);
        return $('body').append(this.$el);
      };

      /*
      バルーンの中身を設定する
      */


      Balloon01.prototype.content = function($dom) {
        if (!$dom) {
          return this;
        }
        if (this.$dom === null || this.$dom.get(0) !== $dom.get(0)) {
          this.$dom = $dom;
          this.domModified = true;
        }
        return this;
      };

      Balloon01.prototype.offsetY = function(num) {
        if (num != null) {
          this._offsetY = num;
        }
        return this._offsetY;
      };

      Balloon01.prototype.width = function(num) {
        return this.$el.width(num);
      };

      /*
      バルーン表示
      */


      Balloon01.prototype.show = function() {
        var _this = this;
        this._isActive = true;
        this.clearAutohide();
        $(window).bind('resize.balloon01', _.bind(this.onWindowResize, this));
        $(window).bind('touchstart.balloon01', function() {
          return _this._scrolling = true;
        });
        $(window).bind('touchend.balloon01', function() {
          var checkScrollTop;
          _this._windowScrollTop = $(window).scrollTop();
          checkScrollTop = function() {
            var st;
            st = $(window).scrollTop();
            if (st === this._windowScrollTop) {
              this._tscrolling = false;
              return;
            }
            this._windowScrollTop = $(window).scrollTop();
            return setTimeout(checkScrollTop, 100);
          };
          if (_this._windowScrollTop) {
            return checkScrollTop();
          }
        });
        if (this.domModified) {
          this.changeContent();
          return this;
        }
        this.showBalloonElement();
        return this;
      };

      /*
      バルーンの中身を入れ替える
      */


      Balloon01.prototype.changeContent = function() {
        var $close, $content, $el,
          _this = this;
        $el = this.$el;
        $close = $el.find('.button-balloon-close');
        $close.unbind('click.balloonClose01', _.bind(this.onCloseButtonClicked, this));
        $content = $el.find('.balloon-content');
        if ($content.get(0).innerHTML.replace(/(^\s+|\s+$)/, '').length === 0) {
          $content.html(this.$dom);
          $close = $el.find('.button-balloon-close');
          $close.bind('click.balloonClose01', _.bind(this.onCloseButtonClicked, this));
          this.showBalloonElement();
          return;
        }
        $content.css('height', $content.height() + 'px');
        return $content.fadeOut(200, function() {
          $content.html(_this.$dom);
          $close = _this.$el.find('.button-balloon-close');
          $close.bind('click.balloonClose01', _.bind(_this.onCloseButtonClicked, _this));
          $content.css('height', 'auto');
          return _.defer(function() {
            $content.fadeIn(200);
            return _this.showBalloonElement();
          });
        });
      };

      /*
      表示アニメーションを開始する
      */


      Balloon01.prototype.showBalloonElement = function() {
        var showTweenObj;
        if (this._isActive === false) {
          return;
        }
        this.$el.show();
        this.move();
        if (this.$el.css('opacity') === '1') {
          if (this.tween.isPlaying()) {
            this.tween.stop();
          }
          this.showTweenCompleteCallback();
          return;
        }
        showTweenObj = this.tweenObject({
          to: {
            opacity: 1
          }
        });
        showTweenObj.callback = _.bind(this.showTweenCompleteCallback, this);
        return this.tween.stop().tween(showTweenObj);
      };

      /*
      表示トゥイーンが終わったときに呼び出される
      */


      Balloon01.prototype.showTweenCompleteCallback = function() {
        this._isShown = true;
        this.domModified = false;
        return this.trigger('onShowComplete');
      };

      /*
      自動的に閉じる
      */


      Balloon01.prototype.autohide = function(msec) {
        var _this = this;
        msec = msec || this.defaultAutohideTimeMsec;
        this.clearAutohide();
        this.autohideTimeoutId = window.setTimeout(_.bind(this.hide, this), msec);
        this.$el.on('mouseenter.balloon-autohide', function() {
          return _this.clearAutohide();
        });
        return this.$el.on('mouseleave.balloon-autohide', function() {
          return _this.autohide(msec);
        });
      };

      /*
      自動的に閉じる処理を無効にする
      */


      Balloon01.prototype.clearAutohide = function() {
        if (this.autohideTimeoutId) {
          return window.clearTimeout(this.autohideTimeoutId);
        }
      };

      /*
      バルーン非表示
      */


      Balloon01.prototype.hide = function() {
        var hideTweenObj;
        if (this._isActive === false) {
          return;
        }
        this._isActive = false;
        $(window).unbind('resize.balloon01');
        $(window).unbind('touchstart.balloon01');
        $(window).unbind('touchend.balloon01');
        this.$el.off('mouseenter.balloon-autohide');
        this.$el.off('mouseleave.balloon-autohide');
        this.clearAutohide();
        if (this.$el.css('opacity') === '0') {
          if (this.tween.isPlaying()) {
            this.tween.stop();
          }
          this.hideTweenCompleteCallback();
          return;
        }
        hideTweenObj = this.tweenObject({
          to: {
            opacity: 0
          }
        });
        hideTweenObj.callback = _.bind(this.hideTweenCompleteCallback, this);
        this.tween.stop().tween(hideTweenObj);
        return this;
      };

      /*
      ダイアログ隠し完了時点に呼び出されるコールバック
      */


      Balloon01.prototype.hideTweenCompleteCallback = function() {
        this._isShown = false;
        this.$el.css('opacity', 0);
        this.$el.hide();
        return this.trigger('onHideComplete');
      };

      /*
      バルーンの表示対象の要素を設定する
      */


      Balloon01.prototype.constrainedElement = function($el) {
        this.$constrained = $el;
        return this;
      };

      /*
      表示されていたら true を返す
      */


      Balloon01.prototype.isShown = function() {
        return this._isShown;
      };

      Balloon01.prototype.isActive = function() {
        return this._isActive;
      };

      /*
      バルーンを指定位置に移動させる
      (css の left, top を変更する)
      */


      Balloon01.prototype.move = function() {
        var $arrow, $constrained, $contentBox, $el, arrowLeft, contentboxLeft, contentboxRight, diff, isMobileSafari, offset, outerHeight, outerWidth, w, x, y;
        isMobileSafari = function() {
          var ret, ua;
          ua = window.navigator.userAgent.toLowerCase();
          ret = !!ua.match(/mobile/) && !!ua.match(/safari/);
          return ret;
        };
        if (isMobileSafari() && this._scrolling) {
          return;
        }
        if (this.positionFixed()) {
          this.$el.css('position', 'fixed');
        }
        $constrained = this.$constrained;
        offset = $constrained.offset();
        outerHeight = $constrained.outerHeight();
        outerWidth = $constrained.outerWidth();
        $contentBox = $constrained.parents('.content-wrapper01');
        contentboxLeft = $contentBox.offset().left;
        contentboxRight = contentboxLeft + $contentBox.outerWidth();
        y = offset['top'] + outerHeight;
        x = offset['left'] + Math.floor(outerWidth / 2);
        if (this.positionFixed()) {
          y -= $(window).scrollTop();
        }
        $el = this.$el;
        w = $el.outerWidth();
        x = x - Math.floor(w / 2);
        y = y + 10 - this.offsetY();
        $arrow = $el.find('.balloon-arrow');
        arrowLeft = (w / 2) - Math.floor($arrow.outerWidth() / 2);
        diff = 0;
        if ((x + w) > contentboxRight) {
          diff = (x + w) - contentboxRight;
        }
        if (x < contentboxLeft) {
          diff = x - contentboxLeft;
        }
        x = x - diff;
        arrowLeft += diff;
        $arrow.css('left', arrowLeft);
        this.$el.css('left', x + 'px');
        return this.$el.css('top', y + 'px');
      };

      /*
      閉じるボタンがクリックされた時に呼び出されるコールバック関数
      */


      Balloon01.prototype.onCloseButtonClicked = function(e) {
        e.preventDefault();
        return this.hide();
      };

      /*
      window.resize のときに呼び出されるコールバック
      */


      Balloon01.prototype.onWindowResize = function() {
        return this.move();
      };

      Balloon01.prototype.positionFixed = function(isFixed) {
        if (this._fixed && (isFixed == null)) {
          return this._fixed;
        }
        if (isFixed != null) {
          this._fixed = isFixed;
        }
        return this._fixed;
      };

      /*
      Tween のときに呼び出される関数
      */


      Balloon01.prototype.tweenStepCallback = function(obj) {
        return this.$el.css('opacity', obj.opacity);
      };

      /*
      Tween 用オブジェクトを返す
      */


      Balloon01.prototype.tweenObject = function(obj) {
        var fromOpacity, returnObject, showTweenObj;
        returnObject = {};
        fromOpacity = Number(this.$el.css('opacity')) || 0;
        showTweenObj = {
          duration: 200,
          easing: 'easeInOutQuad',
          step: _.bind(this.tweenStepCallback, this),
          from: {
            opacity: fromOpacity
          }
        };
        _.extend(returnObject, showTweenObj, obj);
        return returnObject;
      };

      return Balloon01;

    })(Backbone.View);
  });

}).call(this);
