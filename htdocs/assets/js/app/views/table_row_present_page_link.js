(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore', 'lib/comma'], function(require) {
    var $, Backbone, Comma, PresentPageLink, _, _ref;
    Backbone = require('backbone');
    Comma = require('lib/comma');
    $ = require('jquery');
    _ = require('underscore');
    /*
    プレゼント品が１つも選択されていない時に表示される行。
    */

    PresentPageLink = (function(_super) {
      __extends(PresentPageLink, _super);

      function PresentPageLink() {
        _ref = PresentPageLink.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      PresentPageLink.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.cart = o.cart;
        return this.cart.on('change', _.bind(this.onCartChanged, this));
      };

      /*
      */


      PresentPageLink.prototype.onCartChanged = function() {
        var cart, pointAvailable, presentQuantity, productQuantity;
        cart = this.cart;
        presentQuantity = cart.presentQuantity();
        pointAvailable = cart.pointAvailable();
        productQuantity = cart.productQuantity();
        if (presentQuantity === 0 && productQuantity > 0) {
          this.show();
        }
        if (presentQuantity > 0 || productQuantity === 0) {
          this.hide();
        }
        return this.point(pointAvailable);
      };

      PresentPageLink.prototype.show = function() {
        return this.$el.show();
      };

      PresentPageLink.prototype.hide = function() {
        return this.$el.hide();
      };

      PresentPageLink.prototype.point = function(point) {
        point = Comma.add(point);
        return this.$el.find('.point-information .point-amount').text(point);
      };

      return PresentPageLink;

    })(Backbone.View);
    return PresentPageLink;
  });

}).call(this);
