/*
input radio box
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone'], function(require) {
    var $, Backbone, InputRadioBox01, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    InputRadioBox01 = (function(_super) {
      __extends(InputRadioBox01, _super);

      function InputRadioBox01() {
        _ref = InputRadioBox01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      イベント初期化
      */


      InputRadioBox01.prototype.events = {
        'click': 'onPanelClicked'
      };

      /*
      初期化
      */


      InputRadioBox01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.initializeRadioEvents();
        return this.updateView();
      };

      /*
      ラジオボタンのイベントを初期化する
      */


      InputRadioBox01.prototype.initializeRadioEvents = function() {
        var radioName;
        radioName = this.$radio().attr('name');
        return $("input[name=" + radioName + "]").on('change', _.bind(this.onRadioChanged, this));
      };

      /*
      カレント表示を入れ替える
      */


      InputRadioBox01.prototype.updateView = function() {
        this.updateDisabledView();
        return this.updateSelectedView();
      };

      /*
      checked 表示の更新
      */


      InputRadioBox01.prototype.updateSelectedView = function() {
        if (this.$radio().prop('checked')) {
          this.$el.addClass('input-radio-box-selected');
          return;
        }
        return this.$el.removeClass('input-radio-box-selected');
      };

      /*
      disabled 表示の更新
      */


      InputRadioBox01.prototype.updateDisabledView = function() {
        if (this.$radio().prop('disabled')) {
          this.$el.addClass('input-radio-box-disabled');
          return;
        }
        return this.$el.removeClass('input-radio-box-disabled');
      };

      /*
      panel全体 がクリックされたときに呼び出されるコールバック
      */


      InputRadioBox01.prototype.onPanelClicked = function(e) {
        var $radio, $target;
        $target = $(e.currentTarget);
        $radio = $target.find('.input-type-radio');
        if ($radio.prop('checked')) {
          return;
        }
        if (e.target !== $radio.get(0)) {
          return $radio.click();
        }
      };

      /*
      radio がクリックされたときに呼び出されるコールバック
      */


      InputRadioBox01.prototype.onRadioChanged = function(e) {
        return setTimeout(_.bind(this.updateView, this), 50);
      };

      /*
      radio ボタンの dom を返す
      */


      InputRadioBox01.prototype.$radio = function() {
        return this.$el.find('.input-radio01 input.input-type-radio');
      };

      return InputRadioBox01;

    })(Backbone.View);
    $(function() {
      return $('.input-radio-box01').each(function(idx, e) {
        var $e, o;
        $e = $(e);
        o = {
          $el: $e
        };
        return new InputRadioBox01(o);
      });
    });
    return InputRadioBox01;
  });

}).call(this);
