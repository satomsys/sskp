(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'underscore', 'backbone'], function(require) {
    var Backbone, Cart, _, _ref;
    _ = require('underscore');
    Backbone = require('backbone');
    Cart = (function(_super) {
      __extends(Cart, _super);

      function Cart() {
        _ref = Cart.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Cart.prototype.initialize = function() {};

      return Cart;

    })(Backbone.Model);
    return Cart;
  });

}).call(this);
