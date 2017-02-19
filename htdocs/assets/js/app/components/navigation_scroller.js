/*
navigation scroller
TODO: ナビ追従
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'controllers/device'], function(requirem, $, Backbone, _, Device) {
    var NavScroller, _ref;
    NavScroller = (function(_super) {
      __extends(NavScroller, _super);

      function NavScroller() {
        _ref = NavScroller.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      NavScroller.prototype.initialize = function(o) {
        var self;
        this.$el = o.$el;
        this.$pageHeader = $('.page-header');
        this.$headerSpecific = $('.user-specific-header');
        this.$headerNav = $('.header-navigation01');
        this.$footerTop = $('.footer-top01');
        this.$footerMiddle = $('.footer-middle01');
        this.windowHeight = this.$el.height();
        this.documentHeight = $(document).height();
        this.scrollTop = this.$el.scrollTop();
        this.defaultSize = 600;
        this.isWithUserSpecific = this.$pageHeader.hasClass('with-user-specific') ? true : false;
        this.isWithTrialset = this.$footerTop.hasClass('footer-with-trialset01') ? true : false;
        this.isSize = this.checkWindowSize();
        this.headerDefaultStyle = this.getHeaderNavStyle();
        this.footerDefaultStyle = this.getFooterTopStyle();
        if (Device.getType() === Device.TYPE_PHONE && this.headerDefaultStyle) {
          this.needToInitDefaultStyle = true;
        }
        this.initializeScrollEvents();
        if (this.$headerNav.size()) {
          if (location.hash && $(location.hash).size()) {
            this.adjustScrollTop($(location.hash));
          }
          self = this;
          $('body').on('click.NavScroller', 'a', function(evt) {
            var arr, key, lh;
            arr = this.href.split('#');
            key = arr[1];
            lh = (location.href.split('#'))[0];
            if (key && arr[0] === lh && $('#' + key).size()) {
              evt.preventDefault();
              return self.adjustScrollTop($('#' + key));
            }
          });
          if (!Device.isMobile()) {
            self = this;
            return $('input,textarea').on('focus', function(evt) {
              var hh, st;
              hh = self.$headerNav.outerHeight() - 20;
              if (self.isWithUserSpecific) {
                hh += self.$headerSpecific.outerHeight();
              }
              st = $(window).scrollTop();
              if ($(this).offset().top < st + hh) {
                return self.adjustScrollTop($(this));
              }
            });
          }
        }
      };

      NavScroller.prototype.initializeScrollEvents = function() {
        var $el;
        $el = this.$el;
        this.setStyle();
        $el.on('scroll', _.bind(this.setStyle, this));
        return $el.on('resize orientationchange', _.bind(this.resetStyle, this));
      };

      NavScroller.prototype.checkWindowSize = function() {
        if (this.windowHeight > this.defaultSize) {
          return true;
        } else {
          return false;
        }
      };

      /*
      スクロール時に呼び出されるコールバック
      */


      NavScroller.prototype.setStyle = function() {
        if (Device.getType() !== Device.TYPE_DESKTOP) {
          return;
        }
        this.scrollTop = this.$el.scrollTop();
        this.setHeaderNavStyle();
        this.setFooterTopStyle();
        return this.$headerSpecific.addClass('user-specific-header-active');
      };

      /*
      ウインドウリサイズ時に呼び出されるコールバック
      */


      NavScroller.prototype.resetStyle = function() {
        var _this = this;
        if (Device.getType() !== Device.TYPE_DESKTOP) {
          this.device_mode_pre = Device.getType();
        }
        if (this.device_mode_pre !== Device.getType()) {
          if (this.$headerNav.length > 0 && ((this.headerDefaultStyle.headerNavPosY - this.$el.scrollTop()) === 0 || this.needToInitDefaultStyle === true)) {
            this.headerDefaultStyle = this.getHeaderNavStyle();
          }
          if (this.headerDefaultStyle) {
            this.$headerNav.css({
              position: this.headerDefaultStyle.headerNavStyle.position,
              top: this.headerDefaultStyle.headerNavPosY
            });
            this.headerDefaultStyle = this.getHeaderNavStyle();
          }
        }
        this.device_mode_pre = Device.getType();
        setTimeout(function() {
          return _this.isSize = _this.checkWindowSize();
        }, 0);
        this.windowHeight = this.$el.height();
        return this.setStyle();
      };

      /*
      .header-navigation01のスタイル取得
      */


      NavScroller.prototype.getHeaderNavStyle = function() {
        if (!this.$headerNav.length) {
          return;
        }
        return {
          headerSpecificHeight: this.$headerSpecific.outerHeight(),
          headerNavPosY: this.$headerNav.offset().top,
          headerNavStyle: {
            position: this.$headerNav.css('position'),
            top: this.$headerNav.css('top'),
            bottom: this.$headerNav.css('bottom'),
            boxShadow: 'none'
          }
        };
      };

      /*
      .footer-top01のスタイル取得
      */


      NavScroller.prototype.getFooterTopStyle = function() {
        if (!this.isWithTrialset) {
          return;
        }
        return {
          footerTopHeight: this.$footerTop.outerHeight(),
          footerTopPosY: this.$footerMiddle.offset().top - this.$footerTop.outerHeight(),
          footerTopStyle: {
            position: this.$footerTop.css('position'),
            top: this.$footerTop.css('top'),
            bottom: this.$footerTop.css('bottom')
          }
        };
      };

      /*
      スクロールする度にセットされる
      */


      NavScroller.prototype.getFooterTopPosition = function() {};

      /*
      .header-navigation01のスタイル調整
      */


      NavScroller.prototype.setHeaderNavStyle = function() {
        var o, posY;
        if (!this.$headerNav.length) {
          return;
        }
        posY = this.isWithUserSpecific ? this.headerDefaultStyle.headerSpecificHeight : '0';
        o = this.headerDefaultStyle;
        if ((this.scrollTop + o.headerSpecificHeight) < o.headerNavPosY || !this.isSize) {
          this.$headerNav.css(o.headerNavStyle);
          return;
        }
        return this.$headerNav.css({
          position: 'fixed',
          top: posY,
          bottom: 'auto',
          boxShadow: '0 2px 6px -3px rgba(0, 0, 0, .2)'
        });
      };

      /*
      .footer-top01のスタイル調整
      */


      NavScroller.prototype.setFooterTopStyle = function() {
        var o;
        if (!this.isWithTrialset) {
          return;
        }
        if (this.documentHeight !== $(document).height() && this.documentHeight + this.footerDefaultStyle.footerTopHeight !== $(document).height()) {
          this.documentHeight = $(document).height();
          this.footerDefaultStyle.footerTopPosY = this.$footerMiddle.offset().top - this.$footerTop.outerHeight();
        }
        o = this.footerDefaultStyle;
        if (Number(this.scrollTop + this.windowHeight) > Number(o.footerTopPosY + o.footerTopHeight * 2) || !this.isSize) {
          this.$footerTop.css(o.footerTopStyle);
          return;
        }
        return this.$footerTop.css({
          position: 'fixed',
          top: 'auto',
          bottom: '0',
          width: '100%'
        });
      };

      NavScroller.prototype.adjustScrollTop = function($target) {
        var d;
        d = this.$headerNav.outerHeight() + 20;
        if (this.isWithUserSpecific) {
          d += this.$headerSpecific.outerHeight();
        }
        return $(window).scrollTop($target.offset().top - d);
      };

      return NavScroller;

    })(Backbone.View);
    /*
    document ready
    */

    return $(function() {
      var o;
      if (document.readyState !== 'complete') {
        setTimeout(arguments.callee, 10);
        return;
      }
      if (!$('body').hasClass('no-sticky-header')) {
        o = {
          $el: $(window)
        };
        return new NavScroller(o);
      }
    });
  });

}).call(this);
