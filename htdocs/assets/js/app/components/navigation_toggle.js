/*
navigation toggle
TODO: ピロメニュー
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore'], function(require) {
    var $, Backbone, NavApp, NavOverlay, NavView, _, _ref, _ref1;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    NavApp = (function() {
      _.extend(NavApp.prototype, Backbone.Events);

      function NavApp() {
        this.id = '';
      }

      NavApp.prototype.onClicked = function(id) {
        id = id || this.id;
        this.setId(id);
        return this.trigger('change', this.id);
      };

      NavApp.prototype.setId = function(id) {
        if (this.id === '') {
          this.id = id;
          return;
        }
        if (id === this.id) {
          this.id = '';
          return;
        }
        return this.id = id;
      };

      return NavApp;

    })();
    NavView = (function(_super) {
      __extends(NavView, _super);

      function NavView() {
        _ref = NavView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavView.prototype.events = {
        'click .anchor-lv1': 'onLinkClicked'
      };

      NavView.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.app = o.app;
        this.$target = this.$el.find('.child-list-lv1');
        this.openClass = 'open';
        this.defaultStyle = {
          maxHeight: this.$target.css('max-height')
        };
        this.openStyle = {
          maxHeight: '1000px'
        };
        this.changeLink();
        return this.listenTo(this.app, 'change', this.toggle);
      };

      NavView.prototype.changeLink = function() {
        return this.$el.find('.anchor-lv1').attr({
          href: '#'
        });
      };

      NavView.prototype.onLinkClicked = function(e) {
        e.preventDefault();
        return this.app.onClicked(this.cid);
      };

      NavView.prototype.toggle = function(id) {
        if (id === this.cid) {
          this.show();
          return;
        }
        return this.hide();
      };

      NavView.prototype.show = function() {
        this.$el.addClass(this.openClass);
        return this.$target.stop().animate(this.openStyle, 300);
      };

      NavView.prototype.hide = function() {
        var _this = this;
        return this.$target.stop().animate(this.defaultStyle, 200, function() {
          return _this.$el.removeClass(_this.openClass);
        });
      };

      return NavView;

    })(Backbone.View);
    NavOverlay = (function(_super) {
      __extends(NavOverlay, _super);

      function NavOverlay() {
        _ref1 = NavOverlay.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      NavOverlay.prototype.initialize = function(app) {
        this.$el = $('<div></div>').addClass('nav-overlay');
        this.app = app;
        this.documentHeight = $(document).height();
        this.setStyle();
        this.$el.on('click', _.bind(this.onOverlayClicked, this));
        return this.listenTo(this.app, 'change', this.toggle);
      };

      NavOverlay.prototype.setStyle = function() {
        if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1 || (navigator.userAgent.toLowerCase().indexOf('windows nt') > 0 && navigator.userAgent.toLowerCase().indexOf('rv:11.0') > 0)) {
          this.$el.appendTo('.page-header');
        } else {
          this.$el.appendTo('body');
        }
        return this.$el.css({
          display: 'none',
          position: 'fixed',
          left: '0',
          top: '0',
          zIndex: '99',
          width: '100%',
          height: this.documentHeight,
          backgroundColor: '#faf4f2',
          backgroundColor: 'rgba(250, 244, 242, .5)'
        });
      };

      NavOverlay.prototype.onOverlayClicked = function() {
        return this.app.onClicked();
      };

      NavOverlay.prototype.toggle = function(id) {
        if (id.length === 0) {
          this.hide();
          return;
        }
        return this.show();
      };

      NavOverlay.prototype.show = function() {
        return this.$el.stop().fadeIn(50);
      };

      NavOverlay.prototype.hide = function() {
        return this.$el.stop().fadeOut(50);
      };

      return NavOverlay;

    })(Backbone.View);
    /*
    document ready
    */

    return $(function() {
      var app;
      app = new NavApp();
      new NavOverlay(app);
      return $('.global-navigation-list').find('.with-child').each(function(idx, e) {
        var o;
        o = {
          $el: $(e),
          app: app
        };
        return new NavView(o);
      });
    });
  });

}).call(this);
