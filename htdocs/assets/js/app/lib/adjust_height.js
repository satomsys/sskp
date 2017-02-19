/*
adjust height
*/


(function() {
  define(['require', 'jquery', 'controllers/device'], function(require) {
    var $, Device, adjustHeight;
    $ = require('jquery');
    Device = require('controllers/device');
    /*
    指定された要素の高さをあわせる
    */

    adjustHeight = (function() {
      function adjustHeight($el) {
        var $headers, images, promises,
          _this = this;
        this.$el = $el;
        this.done = false;
        this.image_loaded = false;
        this.has_image = false;
        if ($el.hasClass('faq-item-block01')) {
          $headers = $el.find('.header-area');
          this.adjust($headers);
        }
        if (Device.getType() !== Device.TYPE_PHONE) {
          this.image_length = $el.find('img').size();
          this.image_load_count = 0;
          if (this.image_length > 0) {
            promises = [];
            images = [];
            $el.find('img').each(function(e, t) {
              return promises.push(new $.Deferred(function(dfd) {
                var tmp_img;
                tmp_img = new Image();
                tmp_img.onload = function() {
                  return dfd.resolve(_this);
                };
                tmp_img.onerror = function() {
                  return dfd.reject(_this);
                };
                tmp_img.src = $(t).attr('src');
                if (tmp_img.complete) {
                  dfd.resolve(_this);
                }
                return images.push(tmp_img);
              }).promise());
            });
            $.when.apply($, promises).then(function() {
              _this.adjust(_this.$el);
              return images = null;
            });
          } else {
            this.adjust($el);
          }
          $(window).on('resize.adjustHeight', $.proxy(this, 'onResize'));
        }
      }

      adjustHeight.prototype.adjust = function($el) {
        var maxHeight,
          _this = this;
        maxHeight = 0;
        this.clearElemHeightStyle();
        $el.each(function(e, t) {
          if ($(t).height() > maxHeight) {
            return maxHeight = $(t).height();
          }
        });
        $el.css('height', "" + maxHeight + "px");
        if ($('body.ie7').length > 0) {
          $el.hide();
          return setTimeout(function() {
            $el.show();
            return _this.done = true;
          });
        } else {
          return this.done = true;
        }
      };

      adjustHeight.prototype.clearElemHeightStyle = function() {
        var str;
        if (this.$el.attr('style')) {
          str = this.$el.attr('style').replace(/height\:\s\d+px;/, '');
          return this.$el.attr('style', str);
        }
      };

      adjustHeight.prototype.onResize = function(evt) {
        if (Device.getType() === Device.TYPE_PHONE && this.done) {
          this.clearElemHeightStyle();
          return this.done = false;
        } else if (!this.done) {
          return this.adjust(this.$el);
        }
      };

      return adjustHeight;

    })();
    return adjustHeight;
  });

}).call(this);
