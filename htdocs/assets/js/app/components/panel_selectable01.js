/*
panelSelectable01
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'shifty'], function(require) {
    var $, Backbone, PanelSelectable01, PanelSelectableController, Tweenable, _, _ref;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Tweenable = require('shifty');
    PanelSelectableController = (function() {
      _.extend(PanelSelectableController.prototype, Backbone.Events);

      /*
      初期化
      */


      function PanelSelectableController(o) {
        this.group = o.group;
        this.panelSelectables = [];
      }

      /*
      選択中のパネルを変更する
      */


      PanelSelectableController.prototype.changePanel = function($el) {
        this.$currentPanel($el);
        return this.trigger('change');
      };

      /*
      選択中のパネルの DOM を返す
      */


      PanelSelectableController.prototype.$currentPanel = function($el) {
        if ($el === null && (this._$currentPanel != null)) {
          return this._$currentPanel;
        }
        if ($el != null) {
          this._$currentPanel = $el;
        }
        return this._$currentPanel;
      };

      return PanelSelectableController;

    })();
    PanelSelectable01 = (function(_super) {
      __extends(PanelSelectable01, _super);

      function PanelSelectable01() {
        _ref = PanelSelectable01.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      イベント初期化
      */


      PanelSelectable01.prototype.events = {
        'click': 'onPanelClicked'
      };

      /*
      初期化
      */


      PanelSelectable01.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.controller = o.controller;
        if (this.$el.data('panel_selectable01_instance') != null) {
          return;
        }
        this.$el.data('panel_selectable01_instance', this);
        this.$selectableHeaderBlock = this.$el.find('.selectable-header-block');
        this.$selectableBodyBlock = this.$el.find('.selectable-body-block');
        this.$panelSelectableInnterBlock = this.$el.find('.panel-selectable-inner-block');
        this.addNameToInputRadio();
        this.initializeRadioEvents();
        this.initializeControllerEvents();
        this.initializeAnimationSettings();
        return this.updateView();
      };

      /*
      radio に name 属性を追加する
      IE7, IE6 では name が無いと radio がアクティブにならないようなので、name をつける
      かつ、attr で name を変更できないので、 IE の mergeAttributes を使う
      */


      PanelSelectable01.prototype.addNameToInputRadio = function() {
        var dummyName;
        if (window.ssk === void 0) {
          setTimeout(_.bind(this.addNameToInputRadio, this), 100);
          return;
        }
        if (window.ssk.app.ua.lteIE7 && this.$radio().attr('name') === void 0) {
          dummyName = this.$radio().get(0).tagName + '-' + this.$radio().get(0).uniqueID;
          return this.$radio().get(0).mergeAttributes(document.createElement("<INPUT name='" + dummyName + "'/>"), false);
        }
      };

      /*
      コントローライベントを初期化する
      */


      PanelSelectable01.prototype.initializeControllerEvents = function() {
        return this.controller.on('change', _.bind(this.onGroupPanelChanged, this));
      };

      /*
      ラジオボタンのイベントを初期化する
      */


      PanelSelectable01.prototype.initializeRadioEvents = function() {
        return this.$selectableHeaderBlock.find('input.input-type-radio').on('change', _.bind(this.onRadioChanged, this));
      };

      /*
      アニメーションに必要な初期設定
      */


      PanelSelectable01.prototype.initializeAnimationSettings = function() {
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


      PanelSelectable01.prototype.updateView = function() {
        this.updateDisabledView();
        this.updateSelectedView();
        return this.updateBodyBlock();
      };

      /*
      disabled 表示の更新
      */


      PanelSelectable01.prototype.updateDisabledView = function() {
        if (this.$radio().prop('disabled')) {
          this.$el.addClass('panel-disabled');
          return;
        }
        return this.$el.removeClass('panel-disabled');
      };

      /*
      checked 表示の更新
      */


      PanelSelectable01.prototype.updateSelectedView = function() {
        if (this.$radio().prop('checked')) {
          this.$el.addClass('panel-selected');
          return;
        }
        return this.$el.removeClass('panel-selected');
      };

      /*
      selectable-body-block の表示の更新
      */


      PanelSelectable01.prototype.updateBodyBlock = function() {
        var $radio;
        $radio = this.$radio();
        if ($radio.prop('disabled') || !$radio.prop('checked')) {
          this.hideBodyBlock();
          return;
        }
        return this.showBodyBlock();
      };

      /*
      selectable-body-block を表示する
      */


      PanelSelectable01.prototype.showBodyBlock = function() {
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


      PanelSelectable01.prototype.hideBodyBlock = function() {
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


      PanelSelectable01.prototype.startTweenAnimation = function() {
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


      PanelSelectable01.prototype.showTweenStepCallback = function(obj) {
        this.$panelSelectableInnterBlock.height(obj.height);
        return this.adjustScrollTop();
      };

      /*
      表示完了時に呼び出されるコールバック
      */


      PanelSelectable01.prototype.showTweenCompleteCallback = function() {
        this.adjustScrollTop();
        return this.$panelSelectableInnterBlock.css('height', '');
      };

      /*
      スクロールトップを調整する
      */


      PanelSelectable01.prototype.adjustScrollTop = function() {
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


      PanelSelectable01.prototype.onGroupPanelChanged = function() {
        if (this.$el.get(0) !== this.controller.$currentPanel().get(0)) {
          this.$radio().prop('checked', false);
        }
        return setTimeout(_.bind(this.updateView, this), 50);
      };

      /*
      panel 全体 がクリックされたときに呼び出されるコールバック
      */


      PanelSelectable01.prototype.onPanelClicked = function(e) {
        var $radio, $target;
        $target = $(e.currentTarget);
        $radio = $target.find('.selectable-header-block .input-type-radio');
        if ($radio.prop('disabled')) {
          return;
        }
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


      PanelSelectable01.prototype.onRadioChanged = function(e) {
        return this.controller.changePanel(this.$el);
      };

      /*
      開閉用 radio ボタン要素を返す
      */


      PanelSelectable01.prototype.$radio = function() {
        return this.$selectableHeaderBlock.find('input.input-type-radio');
      };

      return PanelSelectable01;

    })(Backbone.View);
    return $(function() {
      var $el, $panel, controller, group, o, panelSelectables, _results;
      panelSelectables = {};
      $('.panel-selectable01').each(function(idx, e) {
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
        controller = new PanelSelectableController({
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
            _results1.push(new PanelSelectable01(o));
          }
          return _results1;
        })());
      }
      return _results;
    });
  });

}).call(this);
