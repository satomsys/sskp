(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore'], function(require) {
    var $, Backbone, Spinner01, spinnerSrc, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    spinnerSrc = '<div class=\'spinner01\'>\n    <img src=\'/assets/img/spinner01.gif\' alt=\'\' class=\'spinner-image\'>\n    <span class="label">読み込み中...</span>\n</div>';
    return Spinner01 = (function(_super) {
      __extends(Spinner01, _super);

      function Spinner01() {
        _ref = Spinner01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Spinner01.prototype.initialize = function() {
        return this.$el = $(spinnerSrc);
      };

      Spinner01.prototype.setPosition = function(pos) {
        return this;
      };

      Spinner01.prototype.show = function() {
        $('body').append(this.$el);
        this.trigger('showComplete');
        return this;
      };

      Spinner01.prototype.hide = function() {
        this.$el.hide();
        this.trigger('hideComplete');
        return this;
      };

      return Spinner01;

    })(Backbone.View);
  });

}).call(this);
