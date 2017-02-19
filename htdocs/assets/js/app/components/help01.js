(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'components/balloon01'], function(require) {
    var $, Backbone, Balloon01, Help01, closeButtonSrc, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    Balloon01 = require('components/balloon01');
    closeButtonSrc = '<div class="balloon-buttons cart-balloon-buttons"><ul class="balloon-button-items"><li class="list-item list-item-close"><span class="button-box01 button-priority-low"><a class="button-anchor button-close button-balloon-close" href="#"><span class="ir ir-balloon-close01"></span></a></span></li></ul><div>';
    Help01 = (function(_super) {
      __extends(Help01, _super);

      function Help01() {
        _ref = Help01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Help01.prototype.events = {
        'mouseover .link-anchor .ir-help01': 'onLinkMouseOver',
        'mouseout .link-anchor .ir-help01': 'onLinkMouseOut',
        'click .link-anchor .ir-help01': 'onLinkClick',
        'touchend .link-anchor .ir-help01': 'onLinkClick'
      };

      /*
      初期化
      */


      Help01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.$el.data('instance', this);
        return this.render();
      };

      /*
      render
      */


      Help01.prototype.render = function() {
        var $htmlContent;
        $htmlContent = this.$el.find('.help-content');
        this.content = $htmlContent.html();
        return $htmlContent.hide();
      };

      Help01.prototype.balloon = function() {
        if (this._balloon) {
          return this._balloon;
        }
        if (window.ssk && window.ssk.app && window.ssk.app.ua.Mobile && $(this.content).find('.button-balloon-close').length === 0) {
          this.content += closeButtonSrc;
        }
        this._balloon = new Balloon01();
        this._balloon.constrainedElement(this.$el.find('.ir-help01'));
        this._balloon.offsetY(0);
        this._balloon.content($("<div>" + this.content + "</div>"));
        if (this.balloonWidth()) {
          this._balloon.width(this.balloonWidth());
        }
        return this._balloon;
      };

      Help01.prototype.balloonWidth = function() {
        var n;
        n = this.$el.find('.link-anchor').attr('data-balloon-width');
        if (n != null) {
          return Number(n - 2);
        }
        return null;
      };

      Help01.prototype.onLinkMouseOver = function(e) {
        e.preventDefault();
        return this.balloon().show();
      };

      Help01.prototype.onLinkMouseOut = function(e) {
        e.preventDefault();
        return this.balloon().hide();
      };

      Help01.prototype.onLinkClick = function(e) {
        e.preventDefault();
        return e.stopPropagation();
      };

      return Help01;

    })(Backbone.View);
    $(function() {
      return $('.link-help01').each(function(idx, e) {
        var $el, o;
        $el = $(e);
        o = {
          $el: $el
        };
        return new Help01(o);
      });
    });
    return Help01;
  });

}).call(this);
