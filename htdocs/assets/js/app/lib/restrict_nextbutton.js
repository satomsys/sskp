/*
restrict_nextbutton
*/


(function() {
  define(['require', 'underscore'], function(require) {
    var RestrictNextbutton, _;
    _ = require('underscore');
    /*
    $nextButton : 次へボタン
    isDisabledMode : disabled にするときに true を返す関数
    */

    RestrictNextbutton = (function() {
      /*
      初期化
      */

      function RestrictNextbutton(o) {
        this.$nextButton = o.$nextButton;
        this.isDisabledMode = _.bind(o.isDisabledMode, this);
        this.updateButtonStatus();
      }

      /*
      ボタンの状態を更新する
      */


      RestrictNextbutton.prototype.updateButtonStatus = function() {
        var _this = this;
        return setTimeout(function() {
          if (_this.isDisabledMode()) {
            _this.disableButton();
            return;
          }
          return _this.enableButton();
        }, 200);
      };

      /*
      ボタンを無効にする
      */


      RestrictNextbutton.prototype.disableButton = function() {
        this.$nextButton.addClass('button-disabled');
        this.$nextButton.find('input,button').attr('disabled', 'disabled');
        return this.$nextButton.on('click.restrictNextbutton', function(e) {
          return e.preventDefault();
        });
      };

      /*
      ボタンを有効にする
      */


      RestrictNextbutton.prototype.enableButton = function() {
        this.$nextButton.removeClass('button-disabled');
        this.$nextButton.find('input,button').removeAttr('disabled');
        return this.$nextButton.off('click.restrictNextbutton');
      };

      return RestrictNextbutton;

    })();
    return RestrictNextbutton;
  });

}).call(this);
