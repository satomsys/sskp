/*
cart items
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'underscore', 'jquery', 'models/cart_item'], function(require) {
    var $, Backbone, CartItem, CartItems, _, _ref;
    Backbone = require('backbone');
    _ = require('underscore');
    $ = require('jquery');
    CartItem = require('models/cart_item');
    CartItems = (function(_super) {
      __extends(CartItems, _super);

      function CartItems() {
        _ref = CartItems.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CartItems.prototype.model = CartItem;

      CartItems.prototype.findByShohinCd = function(shohinCd) {
        return this.find(function(item) {
          return item.is(shohinCd);
        });
      };

      CartItems.prototype.campaignPresents = function() {
        return this.filter(function(item) {
          return item.type === 'campaign';
        });
      };

      CartItems.prototype.campaignPoints = function() {
        return this.filter(function(item) {
          return item.type === 'campaignPoint';
        });
      };

      return CartItems;

    })(Backbone.Collection);
    return CartItems;
  });

}).call(this);
