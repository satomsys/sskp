/*
二重送信を防止する
*/


(function() {
  define(['require', 'jquery'], function(require) {
    var PreventDoubleSubmission;
    PreventDoubleSubmission = (function() {
      /*
      初期化
      */

      function PreventDoubleSubmission(o) {
        this.$form = o.$form || null;
        if (this.$form !== null) {
          this.initializeForm();
          this.$form.data('preventClass', this);
        }
      }

      /*
      フォームの submit イベントを初期化する
      */


      PreventDoubleSubmission.prototype.initializeForm = function() {
        var _this = this;
        return this.$form.on('submit', function(e) {
          if (_this.$form.data('submitted') === true) {
            e.preventDefault();
            return false;
          }
          return _this.onFirstSubmit(e);
        });
      };

      /*
      最初の submit のときに実行される
      */


      PreventDoubleSubmission.prototype.onFirstSubmit = function(e) {
        this.disableButtons();
        this.$form.data('submitted', true);
        return true;
      };

      /*
      ボタンを無効にする
      */


      PreventDoubleSubmission.prototype.disableButtons = function() {
        this.$form.find('.button-anchor').parent().addClass('button-disabled');
        return this.$form.find('.button-anchor').on('click', function(e) {
          return e.preventDefault();
        });
      };

      return PreventDoubleSubmission;

    })();
    $(function() {
      var str;
      str = ['.page-436', '.page-437', '.page-438', '.page-439', '.page-440', '.page-441', '.page-442', '.page-443', '.page-444', '.page-445', '.page-446', '.page-447', '.page-448', '.page-449', '.page-450'].join(',');
      return $(str).find('form').each(function(idx, e) {
        var o, preventDoubleSubmission;
        o = {
          $form: $(e)
        };
        return preventDoubleSubmission = new PreventDoubleSubmission(o);
      });
    });
    return PreventDoubleSubmission;
  });

}).call(this);
