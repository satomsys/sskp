(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore'], function(require) {
    var $, Backbone, YouTubeLoader01, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    YouTubeLoader01 = (function(_super) {
      __extends(YouTubeLoader01, _super);

      function YouTubeLoader01() {
        _ref = YouTubeLoader01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      YouTubeLoader01.prototype.initialize = function(o) {
        var $el;
        this.$el = $el = o.$el;
        this.id = $el.attr('data-youtube-id');
        this.width = $el.attr('data-youtube-width');
        this.height = $el.attr('data-youtube-height');
        this.options = $el.attr('data-youtube-options') || 'rel=0&showinfo=0&theme=light&autohide=1';
        this.is_link = $el.attr('data-youtube-link') ? 1 : 0;
        return this.render();
      };

      YouTubeLoader01.prototype.render = function() {
        var str,
          _this = this;
        if (!this.is_link) {
          str = this.buildIframeTag();
          this.$el.html(str);
          this.adjustSize();
          return $(window).on('resize.YouTubeLoader01', function() {
            return _this.adjustSize();
          });
        } else {
          str = this.buildThumbTag();
          return this.$el.html(str);
        }
      };

      YouTubeLoader01.prototype.adjustSize = function() {
        var $iframe, h, s;
        $iframe = this.$el.find('iframe');
        if ($iframe.width() !== this.width) {
          s = $iframe.width() / this.width;
          h = s * this.height;
          return $iframe.height(h);
        }
      };

      YouTubeLoader01.prototype.buildIframeTag = function() {
        var str;
        str = " <iframe width='" + this.width + "' height='" + this.height + "' src='//www.youtube.com/embed/" + this.id + "?" + this.options + "&wmode=transparent' frameborder='0' allowfullscreen ></iframe>";
        return str;
      };

      YouTubeLoader01.prototype.buildThumbTag = function() {
        var thumb_url, url;
        thumb_url = 'http://i.ytimg.com/vi/' + this.id + '/0.jpg';
        url = 'http://youtu.be/' + this.id;
        return "<a href=\"" + url + "\" target='_blank'><img src=\"" + thumb_url + "\" alt=\"\" class=\"thumb\" width=\"" + this.width + "\"><img src=\"/assets/img/YouTube-social-icon_red_128px.png\" alt=\"\" class=\"icon\"></a>";
      };

      return YouTubeLoader01;

    })(Backbone.View);
    return $(function() {
      var $targets;
      $targets = $('.youtube-loader01');
      return $targets.each(function(idx, e) {
        var o;
        if ($(e).attr('data-youtube-id')) {
          o = {
            $el: $(e)
          };
          return new YouTubeLoader01(o);
        }
      });
    });
  });

}).call(this);
