/*
present category filter
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'backbone', 'jquery', 'underscore'], function(require) {
    var $, Backbone, PresentCategoryFilter, _, _ref;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    PresentCategoryFilter = (function(_super) {
      __extends(PresentCategoryFilter, _super);

      function PresentCategoryFilter() {
        _ref = PresentCategoryFilter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PresentCategoryFilter.prototype.events = {
        "change .input-select01 .input-type-select": "onSelectChanged"
      };

      /*
      初期化
      */


      PresentCategoryFilter.prototype.initialize = function(o) {
        this.$el = o.$el;
        return this.presentsBlock = o.presentsBlock;
      };

      /*
      フィルターを実行する
      */


      PresentCategoryFilter.prototype.filter = function() {
        var type;
        type = this.$el.find('.input-select01 .input-type-select').val();
        return this.presentsBlock.filter(type);
      };

      /*
      select が変更されたときに呼び出される
      */


      PresentCategoryFilter.prototype.onSelectChanged = function(e) {
        e.preventDefault();
        return this.filter();
      };

      return PresentCategoryFilter;

    })(Backbone.View);
    return PresentCategoryFilter;
  });

}).call(this);
