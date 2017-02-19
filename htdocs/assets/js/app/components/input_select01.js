(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore'], function(require) {
    var $, Backbone, InputSelect01, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    InputSelect01 = (function(_super) {
      __extends(InputSelect01, _super);

      function InputSelect01() {
        _ref = InputSelect01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      InputSelect01.prototype.initialize = function(o) {
        this.wrapperClass = 'selected-value-wrapper';
        this.valueClass = 'selected-value';
        this.arrowClass = 'selected-arrow';
        this.$el = o.$el;
        return this.render();
      };

      InputSelect01.prototype.createReplaceBlock = function() {
        var div;
        div = "<div class=\"" + this.wrapperClass + "\">\n    <span class=\"" + this.valueClass + "\"></span>\n    <span class=\"" + this.arrowClass + "\">▼</span>\n</div>";
        return div;
      };

      InputSelect01.prototype.$select = function() {
        return this._select = this._select || this.$el.find('select');
      };

      InputSelect01.prototype.initEvents = function() {
        return this.$select().on('change', _.bind(this.onChange, this));
      };

      InputSelect01.prototype.initSize = function() {
        var _this = this;
        return this.$select().each(function(idx, e) {
          var $me, $target, h;
          $me = $(e);
          h = $me.outerHeight() - 2;
          $target = $me.siblings("." + _this.wrapperClass);
          return $target.height(h);
        });
      };

      InputSelect01.prototype.onChange = function(e) {
        return this.setSelectedLabel($(e.target));
      };

      InputSelect01.prototype.setSelectedLabel = function($el) {
        var text;
        text = $el.find('option:selected').get(0) ? $el.find('option:selected').get(0).text : '';
        return this.$valueLabel($el).text(text);
      };

      InputSelect01.prototype.$valueLabel = function($el) {
        var $valueLabel;
        $valueLabel = $el.data('valuelabel') || null;
        if ($valueLabel === null) {
          $valueLabel = $el.siblings("." + this.wrapperClass).find("." + this.valueClass);
          $el.data('valueLabel', $valueLabel);
        }
        return $valueLabel;
      };

      InputSelect01.prototype.render = function() {
        var $el;
        $el = this.$el;
        $el.append(this.createReplaceBlock());
        this.initEvents();
        setTimeout(_.bind(this.initSize, this), 100);
        return this.$select().trigger('change');
      };

      return InputSelect01;

    })(Backbone.View);
    $(function() {
      var o, _input_select01;
      o = {
        $el: $('.input-select01')
      };
      return _input_select01 = new InputSelect01(o);
    });
    return InputSelect01;
  });

}).call(this);
