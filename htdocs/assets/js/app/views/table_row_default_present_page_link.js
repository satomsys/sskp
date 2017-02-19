(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore'], function(require) {
    var $, Backbone, DefaultPresentPageLink, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    /*
    プレゼント品が１つも選択されていない時に表示される行。
    */

    DefaultPresentPageLink = (function(_super) {
      __extends(DefaultPresentPageLink, _super);

      function DefaultPresentPageLink() {
        _ref = DefaultPresentPageLink.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      DefaultPresentPageLink.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.cart = o.cart;
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      */


      DefaultPresentPageLink.prototype.onCartChanged = function() {
        var cart, pointAvailable, presentQuantity;
        cart = this.cart;
        presentQuantity = cart.presentQuantity();
        pointAvailable = cart.pointAvailable();
        if (presentQuantity > 0) {
          this.show();
        }
        if (presentQuantity === 0) {
          return this.hide();
        }
      };

      DefaultPresentPageLink.prototype.show = function() {
        return this.$el.show();
      };

      DefaultPresentPageLink.prototype.hide = function() {
        return this.$el.hide();
      };

      return DefaultPresentPageLink;

    })(Backbone.View);
    return DefaultPresentPageLink;
  });

}).call(this);
