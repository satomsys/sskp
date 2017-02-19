/*
mail_domain_check
TODO: メールアドレスのドメイン指定受信表示・非表示
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require(['require', 'jquery', 'backbone', 'underscore'], function(require) {
    var $, Backbone, checkView, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    checkView = (function(_super) {
      __extends(checkView, _super);

      function checkView() {
        _ref = checkView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      checkView.prototype.events = {
        'blur .mail-domain-input': 'onInputted'
      };

      checkView.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.$input = this.$el.find('.mail-domain-input').find('input');
        return this.$value = this.$el.find('.mail-domain-value');
      };

      checkView.prototype.onInputted = function() {
        var val;
        val = this.$input.val();
        return this.toggle(val);
      };

      checkView.prototype.toggle = function(val) {
        if (val.length === 0) {
          this.hide();
          return;
        }
        return this.show();
      };

      checkView.prototype.show = function() {
        return this.$value.show();
      };

      checkView.prototype.hide = function() {
        return this.$value.hide();
      };

      return checkView;

    })(Backbone.View);
    /*
    document ready
    */

    return $(function() {
      return $('.mail-domain-check').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new checkView(o);
      });
    });
  });

}).call(this);
