/*
panelSelectableCheck01
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'shifty'], function(require) {
    var $, Backbone, PanelSelectableCheck01, PanelSelectableCheckController, Tweenable, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Tweenable = require('shifty');
    PanelSelectableCheckController = (function() {
      _.extend(PanelSelectableCheckController.prototype, Backbone.Events);

      /*
      初期化
      */


      function PanelSelectableCheckController(o) {
        this.group = o.group;
        this.panelSelectables = [];
      }

      /*
      選択中のパネルを変更する
      */


      PanelSelectableCheckController.prototype.changePanel = function($el) {
        this.$currentPanel($el);
        return this.trigger('change');
      };

      /*
      選択中のパネルの DOM を返す
      */


      PanelSelectableCheckController.prototype.$currentPanel = function($el) {
        if ($el === null && (this._$currentPanel != null)) {
          return this._$currentPanel;
        }
        if ($el != null) {
          this._$currentPanel = $el;
        }
        return this._$currentPanel;
      };

      return PanelSelectableCheckController;

    })();
    PanelSelectableCheck01 = (function(_super) {
      __extends(PanelSelectableCheck01, _super);

      function PanelSelectableCheck01() {
        _ref = PanelSelectableCheck01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      イベント初期化
      */


      PanelSelectableCheck01.prototype.events = {
        'click': 'onPanelClicked'
      };

      /*
      初期化
      */


      PanelSelectableCheck01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.controller = o.controller;
        if (this.$el.data('panel_selectablecheck01_instance') != null) {
          return;
        }
        this.$el.data('panel_selectablecheck01_instance', this);
        this.$selectableHeaderBlock = this.$el.find('.selectable-header-block');
        this.$selectableBodyBlock = this.$el.find('.selectable-body-block');
        this.$panelSelectableInnterBlock = this.$el.find('.panel-selectable-inner-block');
        this.initializeCheckEvents();
        this.initializeControllerEvents();
        this.initializeAnimationSettings();
        return this.updateView();
      };

      /*
      コントローライベントを初期化する
      */


      PanelSelectableCheck01.prototype.initializeControllerEvents = function() {
        return this.controller.on('change', _.bind(this.onGroupPanelChanged, this));
      };

      /*
      チェックボックスのイベントを初期化する
      */


      PanelSelectableCheck01.prototype.initializeCheckEvents = function() {
        return this.$selectableHeaderBlock.find('input.input-type-checkbox').on('change', _.bind(this.onCheckChanged, this));
      };

      /*
      アニメーションに必要な初期設定
      */


      PanelSelectableCheck01.prototype.initializeAnimationSettings = function() {
        var headerHeight;
        headerHeight = this.$selectableHeaderBlock.outerHeight();
        this.$panelSelectableInnterBlock.css('overflow', 'hidden');
        this.hideHeight = headerHeight;
        this.showTweenObj = {
          duration: 200,
          easing: 'easeInOutQuad',
          step: _.bind(this.showTweenStepCallback, this),
          callback: _.bind(this.showTweenCompleteCallback, this)
        };
        return this.tween = new Tweenable();
      };

      /*
      表示を更新する
      */


      PanelSelectableCheck01.prototype.updateView = function() {
        this.updateDisabledView();
        this.updateSelectedView();
        return this.updateBodyBlock();
      };

      /*
      disabled 表示の更新
      */


      PanelSelectableCheck01.prototype.updateDisabledView = function() {
        if (this.$check().prop('disabled')) {
          this.$el.addClass('panel-disabled');
          return;
        }
        return this.$el.removeClass('panel-disabled');
      };

      /*
      checked 表示の更新
      */


      PanelSelectableCheck01.prototype.updateSelectedView = function() {
        if (this.$check().prop('checked')) {
          this.$el.addClass('panel-selected');
          return;
        }
        return this.$el.removeClass('panel-selected');
      };

      /*
      selectable-body-block の表示の更新
      */


      PanelSelectableCheck01.prototype.updateBodyBlock = function() {
        var $check;
        $check = this.$check();
        if ($check.prop('disabled') || !$check.prop('checked')) {
          this.hideBodyBlock();
          return;
        }
        return this.showBodyBlock();
      };

      /*
      selectable-body-block を表示する
      */


      PanelSelectableCheck01.prototype.showBodyBlock = function() {
        var _this = this;
        this._elementTop = this.$el.offset().top - 17;
        this._scrollTop = $(window).scrollTop();
        if (this.$selectableBodyBlock.length !== 0) {
          this.startTweenAnimation();
          return;
        }
        this.$panelSelectableInnterBlock.css('height', '');
        this.$selectableBodyBlock.show();
        this.isHid = false;
        return setTimeout(function() {
          return _this.adjustScrollTop();
        }, 10);
      };

      /*
      selectable-body-block を隠す
      */


      PanelSelectableCheck01.prototype.hideBodyBlock = function() {
        var _this = this;
        if (this.isHid) {
          return;
        }
        return setTimeout(function() {
          _this.$selectableBodyBlock.hide();
          _this.$panelSelectableInnterBlock.css('height', '');
          return _this.isHid = true;
        }, 0);
      };

      /*
      アニメーションを開始する
      */


      PanelSelectableCheck01.prototype.startTweenAnimation = function() {
        var bodyHeight, height, tweenObj;
        bodyHeight = this.$selectableBodyBlock.outerHeight();
        height = bodyHeight + this.hideHeight + 16;
        tweenObj = _.clone(this.showTweenObj);
        tweenObj.from = {
          height: this.hideHeight
        };
        tweenObj.to = {
          height: height
        };
        this.tween.stop().tween(tweenObj);
        this.$selectableBodyBlock.show();
        return this.isHid = false;
      };

      /*
      表示トゥイーンアニメーション時に呼び出されるコールバック
      */


      PanelSelectableCheck01.prototype.showTweenStepCallback = function(obj) {
        this.$panelSelectableInnterBlock.height(obj.height);
        return this.adjustScrollTop();
      };

      /*
      表示完了時に呼び出されるコールバック
      */


      PanelSelectableCheck01.prototype.showTweenCompleteCallback = function() {
        this.adjustScrollTop();
        return this.$panelSelectableInnterBlock.css('height', '');
      };

      /*
      スクロールトップを調整する
      */


      PanelSelectableCheck01.prototype.adjustScrollTop = function() {
        var top;
        if ($(window).scrollTop() < 1) {
          return;
        }
        top = this.$el.offset().top - this._elementTop + this._scrollTop;
        if (top !== this._scrollTop) {
          top -= 17;
        }
        return $(window).scrollTop(top);
      };

      /*
      同一グループのパネルが変更されたときに呼び出されるコールバック
      */


      PanelSelectableCheck01.prototype.onGroupPanelChanged = function() {
        if (this.$el.get(0) !== this.controller.$currentPanel().get(0)) {
          this.$check().prop('checked', false);
        }
        return setTimeout(_.bind(this.updateView, this), 50);
      };

      /*
      checkbox がクリックされたときに呼び出されるコールバック
      */


      PanelSelectableCheck01.prototype.onCheckChanged = function(e) {
        return this.controller.changePanel(this.$el);
      };

      /*
      panel 全体 がクリックされたときに呼び出されるコールバック
      */


      PanelSelectableCheck01.prototype.onPanelClicked = function(e) {
        var $check, $target;
        $target = $(e.currentTarget);
        $check = $target.find('.selectable-header-block .input-type-checkbox');
        if ($check.prop('disabled')) {
          return;
        }
        if ($check.prop('checked') && e.target !== $check.get(0)) {
          return;
        }
        if (e.target !== $check.get(0)) {
          $check.click();
          return e.preventDefault();
        }
      };

      /*
      開閉用 check ボタン要素を返す
      */


      PanelSelectableCheck01.prototype.$check = function() {
        return this.$selectableHeaderBlock.find('input.input-type-checkbox');
      };

      return PanelSelectableCheck01;

    })(Backbone.View);
    return $(function() {
      var $el, $panel, controller, group, o, panelSelectables, _results;
      panelSelectables = {};
      $('.panel-selectablecheck01').each(function(idx, e) {
        var $e, group;
        $e = $(e);
        group = $e.attr('data-selectable-group');
        if (panelSelectables[group] == null) {
          panelSelectables[group] = [];
        }
        return panelSelectables[group].push($e);
      });
      _results = [];
      for (group in panelSelectables) {
        controller = new PanelSelectableCheckController({
          group: group
        });
        _results.push((function() {
          var _i, _len, _ref1, _results1;
          _ref1 = panelSelectables[group];
          _results1 = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $panel = _ref1[_i];
            $el = $panel;
            o = {
              $el: $panel,
              controller: controller
            };
            _results1.push(new PanelSelectableCheck01(o));
          }
          return _results1;
        })());
      }
      return _results;
    });
  });

}).call(this);
