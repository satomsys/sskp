/*
device.coffee
デバイス幅によって処理を振り分ける
一旦スマホ対応だけなので、このスマホ専用処理クラスとする
*/


(function() {
  define(['require', 'jquery'], function(require) {
    var $, Device;
    $ = require('jquery');
    Device = (function() {
      var src_header_compact, src_header_default;

      Device.LIMIT_WIDTH_PHONE = 568;

      Device.TYPE_TABLET = 'type_tablet';

      Device.TYPE_PHONE = 'type_phone';

      Device.TYPE_DESKTOP = 'type_desktop';

      src_header_default = '/assets/sp/include/header.html';

      src_header_compact = '/assets/sp/include/header_compact.html';

      function Device() {
        var _this = this;
        this.is_header_loading = false;
        this.is_header_loaded = false;
        this.type = Device.TYPE_PC;
        $(function() {
          _this.media_query_enable = $('body').hasClass('template-enable-media-queries');
          _this.detectDeviceWidth();
          if (Device.isMobile()) {
            $('html').addClass('is-mobile');
            _this.switchViewport();
            $(window).on('orientationchange.Device resize.Device', $.proxy(_this, 'onOrientationChange'));
          } else {
            $(window).on('resize.Device', $.proxy(_this, 'onResize'));
          }
          if (!_this.media_query_enable) {
            return;
          }
          $('body').on('click.Device', '.tmp-sp-btn_sitemap', function(evt) {
            var $key, $target, h;
            evt.preventDefault();
            $key = $(this);
            $target = $('.tmp-sp-nav-links');
            h = Math.max.apply(null, [document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight]);
            if ($target.css({
              'display': 'none'
            })) {
              return $target.css({
                'display': 'block',
                'height': h,
                'min-height': h
              });
            }
          });
          return $('body').on('touchend.Device', '.tmp-sp-nav-links-btn_close', function(evt) {
            var $target;
            evt.preventDefault();
            $target = $('.tmp-sp-nav-links');
            if ($target.css({
              'display': 'block'
            })) {
              return $target.css({
                'display': 'none',
                'height': 0
              });
            }
          });
        });
      }

      Device.prototype.onResize = function() {
        return this.detectDeviceWidth();
      };

      Device.prototype.onOrientationChange = function() {
        if (this.pre_orientation === window.orientation) {
          return;
        }
        this.pre_orientation = window.orientation;
        this.detectDeviceWidth();
        return this.switchViewport();
      };

      Device.prototype.detectDeviceWidth = function() {
        this.type = Device.getType();
        if (this.type === Device.TYPE_PHONE) {
          return this.loadSpHeaderSrc();
        }
      };

      Device.prototype.switchViewport = function() {
        if (!$('meta[name="viewport"]').size()) {
          return;
        }
        if (!this.base_viewport_content) {
          this.base_viewport_content = $('meta[name="viewport"]').attr('content');
        }
        if (this.base_viewport_content !== $('meta[name="viewport"]').attr('content')) {
          $('meta[name="viewport"]').attr('content', this.base_viewport_content);
          return setTimeout($.proxy(this, 'setViewport'), 10);
        } else {
          return this.setViewport();
        }
      };

      Device.prototype.setViewport = function() {
        var s, str, w;
        if (!this.media_query_enable || Device.getTabletWidth() > Device.LIMIT_WIDTH_PHONE) {
          w = Device.getTabletWidth();
          s = Math.min(1, Math.round(w / 1000 * 10000) / 10000);
          str = this.base_viewport_content;
          str = str.replace(/,\s?initial-scale=1/, ', initial-scale=' + s);
          str = str.replace(/width=device-width/, 'width=1000');
          $('meta[name="viewport"]').attr('content', str);
        } else {
          str = this.base_viewport_content.replace(/device-width/, 320);
          $('meta[name="viewport"]').attr('content', str);
        }
      };

      Device.prototype.loadSpHeaderSrc = function() {
        var dfd, url;
        if (!this.media_query_enable) {
          return;
        }
        if (this.is_header_loaded || this.is_header_loading) {
          return;
        }
        url = src_header_default;
        if ($('body').get(0).className && $('body').get(0).className.match(/(template-new-window-layout\d\d|template-order-layout\d\d)/)) {
          url = src_header_compact;
        }
        this.is_header_loading = true;
        dfd = $.ajax({
          url: url,
          cache: true,
          dataType: 'html'
        });
        return dfd.done($.proxy(this, 'onLoadSpHeaderScrDone')).fail($.proxy(this, 'onLoadSpHeaderScrFail')).always($.proxy(this, 'onLoadSpHeaderAlways'));
      };

      Device.prototype.onLoadSpHeaderScrDone = function(data) {
        var $button_close, $button_close_sp, $main, $page_header;
        this.is_header_loaded = true;
        $page_header = $('.page-header');
        $(data).insertBefore($('.page-header'));
        $button_close = $page_header.find('.button-close-block');
        $main = $('#main');
        if ($button_close.size() && $main.size()) {
          return $button_close_sp = $button_close.clone(true).appendTo($main).addClass('button-priority-low').addClass('sp-show-element').addClass('button-close-block-js-generated');
        }
      };

      Device.prototype.onLoadSpHeaderScrFail = function() {};

      Device.prototype.onLoadSpHeaderAlways = function() {
        return this.is_header_loading = false;
      };

      Device.prototype.getCurrentType = function() {
        return this.type;
      };

      Device.getTabletWidth = function() {
        var dpr, ua, w;
        dpr = window.devicePixelRatio || 1;
        ua = navigator.userAgent;
        if (window.orientation === 0 || window.orientation === 180) {
          if (ua.indexOf('Android') > 0 && parseFloat(ua.slice(ua.indexOf("Android") + 8)) < 4.3) {
            w = screen.width / dpr;
          } else {
            w = screen.width;
          }
        } else {
          if (ua.indexOf('Android') > 0 && parseFloat(ua.slice(ua.indexOf("Android") + 8)) < 4.3) {
            w = screen.width / dpr;
          } else {
            w = screen.height;
          }
        }
        return w;
      };

      Device.isMobile = function() {
        return typeof window.orientation !== 'undefined';
      };

      Device.getType = function() {
        var w;
        w = $(window).width();
        if (Device.isMobile()) {
          w = Device.getTabletWidth();
        }
        if (w <= Device.LIMIT_WIDTH_PHONE) {
          return Device.TYPE_PHONE;
        } else {
          return Device.TYPE_DESKTOP;
        }
      };

      return Device;

    })();
    return Device;
  });

}).call(this);
