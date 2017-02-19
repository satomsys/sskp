/*
radio_toggle_panel01
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore'], function(require) {
    var $, Backbone, RadioTogglePanel, _, _ref;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    RadioTogglePanel = (function(_super) {
      __extends(RadioTogglePanel, _super);

      function RadioTogglePanel() {
        _ref = RadioTogglePanel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      RadioTogglePanel.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.$target = $(o.$el.attr('data-panel-toggle-query'));
        this.initializeRadioEvents();
        return this.updateView();
      };

      RadioTogglePanel.prototype.initializeRadioEvents = function() {
        var $el, name;
        name = this.$el.attr('name') || null;
        $el = this.$el;
        if (name) {
          $el = $("input[name='" + name + "']");
        }
        return $el.on('change', _.bind(this.onRadioChanged, this));
      };

      /*
      ビューを更新する
      */


      RadioTogglePanel.prototype.updateView = function() {
        if (this.$el.prop('checked')) {
          this.showTarget();
          return;
        }
        return this.hideTarget();
      };

      /*
      ターゲットとなる要素を表示させる
      */


      RadioTogglePanel.prototype.showTarget = function() {
        return this.$target.show();
      };

      /*
      ターゲットとなる要素を隠す
      */


      RadioTogglePanel.prototype.hideTarget = function() {
        return this.$target.hide();
      };

      /*
      ラジオボタンが変更されたときに呼び出される
      */


      RadioTogglePanel.prototype.onRadioChanged = function(e) {
        return this.updateView();
      };

      return RadioTogglePanel;

    })(Backbone.View);
    /*
    ready
    */

    $(function() {
      return $('input[type="radio"][data-panel-toggle-query]').each(function(idx, e) {
        var o;
        o = {
          $el: $(e)
        };
        return new RadioTogglePanel(o);
      });
    });
    return RadioTogglePanel;
  });

}).call(this);
