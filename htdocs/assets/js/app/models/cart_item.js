/*
cart item
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'underscore', 'jquery'], function(require) {
    var $, Backbone, CartItem, _;
    Backbone = require('backbone');
    _ = require('underscore');
    $ = require('jquery');
    CartItem = (function(_super) {
      __extends(CartItem, _super);

      CartItem.prototype.defaults = function() {
        return {
          shohinCd: null,
          quantity: 0,
          subtotal: 0,
          point_subtotal: 0,
          level: '00',
          type: null
        };
      };

      function CartItem(attr) {
        this.shohinCd = attr.shohinCd || null;
        this.quantity = Number(attr.quantity) || 0;
        this.subtotal = Number(attr.subtotal) || 0;
        this.point_subtotal = Number(attr.point_subtotal) || 0;
        this.type = attr.type || null;
        this.name = attr.name || null;
        this.level = attr.level || '00';
      }

      CartItem.prototype.validate = function(attrs, options) {
        if (!attrs.shohinCd) {
          return "shohinCd is not defined in attr";
        }
      };

      CartItem.prototype.isSetItem = function() {
        return /^(set4|set8|setperfect|set3|reg8ten|reg4ten)$/.test(this.shohinCd);
      };

      CartItem.prototype.is = function(shohinCd) {
        return this.shohinCd === shohinCd;
      };

      return CartItem;

    })(Backbone.Model);
    return CartItem;
  });

}).call(this);
