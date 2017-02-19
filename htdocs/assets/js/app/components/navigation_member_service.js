/*
navigation member service
会員サービスメニュー
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'shifty'], function(require) {
    var $, Backbone, MemberServiceController, MemberServiceMenuPanel, MemberServiceToggleButton, Tweenable, _, _ref, _ref1;
    $ = require('jquery');
    Backbone = require('backbone');
    _ = require('underscore');
    Tweenable = require('shifty');
    /*
    メニューのコントローラ
    */

    MemberServiceController = (function() {
      _.extend(MemberServiceController.prototype, Backbone.Events);

      function MemberServiceController() {
        this.isOpen(false);
      }

      MemberServiceController.prototype.showPanel = function() {
        this.isOpen(true);
        return this.changeOpenStatus();
      };

      MemberServiceController.prototype.hidePanel = function() {
        this.isOpen(false);
        return this.changeOpenStatus();
      };

      MemberServiceController.prototype.changeOpenStatus = function() {
        return this.trigger('change');
      };

      MemberServiceController.prototype.isOpen = function(isOpenFlg) {
        if ((this._isOpen != null) && isOpenFlg === null) {
          return this._isOpen;
        }
        if (isOpenFlg != null) {
          this._isOpen = isOpenFlg;
        }
        return this._isOpen;
      };

      MemberServiceController.prototype.state = function(stateString) {
        if ((this._stateString != null) && stateString === null) {
          return this._stateString;
        }
        if (stateString != null) {
          this._stateString = stateString;
        }
        return this._stateString;
      };

      return MemberServiceController;

    })();
    /*
    メニューパネル
    */

    MemberServiceMenuPanel = (function(_super) {
      __extends(MemberServiceMenuPanel, _super);

      function MemberServiceMenuPanel() {
        _ref = MemberServiceMenuPanel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      /*
      初期化
      */


      MemberServiceMenuPanel.prototype.initialize = function(o) {
        this.tween = new Tweenable();
        this.$el = o.$el;
        this.controller = o.controller;
        this.listenTo(this.controller, 'change', _.bind(this.onPanelOpenStatusChange, this));
        this.openPanelHeight = this.$el.height();
        this.$el.css('overflow', 'hidden');
        return this.onPanelOpenStatusChange();
      };

      /*
      パネルのステータスが変更された時
      */


      MemberServiceMenuPanel.prototype.onPanelOpenStatusChange = function() {
        if (this.controller.isOpen()) {
          this.show();
          return;
        }
        return this.hide();
      };

      MemberServiceMenuPanel.prototype.show = function() {
        var showTweenObj;
        this.$el.show();
        showTweenObj = this.tweenObject({
          to: {
            height: this.openPanelHeight
          }
        });
        showTweenObj.callback = _.bind(this.showTweenCompleteCallback, this);
        return this.tween.stop().tween(showTweenObj);
      };

      MemberServiceMenuPanel.prototype.hide = function() {
        var hideTweenObj;
        hideTweenObj = this.tweenObject({
          to: {
            height: 0
          }
        });
        hideTweenObj.callback = _.bind(this.hideTweenCompleteCallback, this);
        return this.tween.stop().tween(hideTweenObj);
      };

      MemberServiceMenuPanel.prototype.showTweenCompleteCallback = function() {
        return this.controller.state('panel-shown');
      };

      MemberServiceMenuPanel.prototype.hideTweenCompleteCallback = function() {
        this.$el.hide();
        return this.controller.state('panel-hidden');
      };

      MemberServiceMenuPanel.prototype.tweenStepCallback = function(obj) {
        return this.$el.css('height', obj.height);
      };

      /*
      Tween 用オブジェクトを返す
      */


      MemberServiceMenuPanel.prototype.tweenObject = function(obj) {
        var fromOpacity, returnObject, showTweenObj;
        returnObject = {};
        fromOpacity = Number(this.$el.height()) || 0;
        showTweenObj = {
          duration: 120,
          easing: 'easeInOutQuad',
          step: _.bind(this.tweenStepCallback, this),
          from: {
            height: fromOpacity
          }
        };
        _.extend(returnObject, showTweenObj, obj);
        return returnObject;
      };

      return MemberServiceMenuPanel;

    })(Backbone.View);
    /*
    トグルボタン
    */

    MemberServiceToggleButton = (function(_super) {
      __extends(MemberServiceToggleButton, _super);

      function MemberServiceToggleButton() {
        _ref1 = MemberServiceToggleButton.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      /*
      イベント設定
      */


      MemberServiceToggleButton.prototype.events = {
        'click .button-anchor': 'onClicked'
      };

      /*
      初期化
      */


      MemberServiceToggleButton.prototype.initialize = function(o) {
        this.$el = o.$el;
        this.controller = o.controller;
        this.listenTo(this.controller, 'change', _.bind(this.onPanelOpenStatusChange, this));
        return this.onPanelOpenStatusChange();
      };

      /*
      ボタンがクリックされたとき
      */


      MemberServiceToggleButton.prototype.onClicked = function(e) {
        e.preventDefault();
        if (this.controller.isOpen()) {
          this.controller.hidePanel();
          return;
        }
        return this.controller.showPanel();
      };

      /*
      パネルのステータスが変更された時
      */


      MemberServiceToggleButton.prototype.onPanelOpenStatusChange = function() {
        if (this.controller.isOpen()) {
          this.$el.addClass('button-service-open');
          return;
        }
        return this.$el.removeClass('button-service-open');
      };

      return MemberServiceToggleButton;

    })(Backbone.View);
    return $(function() {
      var controller, panelOptions, toggleButtonOptions, topPos;
      controller = new MemberServiceController();
      toggleButtonOptions = {
        $el: $('.user-specific-header .item-registered-information .button-service'),
        controller: controller
      };
      new MemberServiceToggleButton(toggleButtonOptions);
      panelOptions = {
        $el: $('.user-specific-header .registered-information-list'),
        controller: controller
      };
      new MemberServiceMenuPanel(panelOptions);
      topPos = $('.user-specific-header .item-registered-information .button-service').outerHeight() - 1;
      return {
        $el: $('.user-specific-header .item-registered-information .user-menu-list').css('top', topPos + 'px')
      };
    });
  });

}).call(this);
