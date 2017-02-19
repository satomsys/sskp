/*
cart_ajax_error
Ajax 系エラーダイアログの表示
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'jquery', 'backbone', 'underscore', 'components/modal_confirm01', 'data/dialog_contents'], function(require) {
    var $, Backbone, CartAjaxErrorDialog, Confirm01, ErrorDialog, ErrorDialogCRER0201, ErrorDialogCRER0301, ErrorDialogCRER0302, ErrorDialogCRER9901, ErrorDialogCRER9902, ErrorDialogCRER9903, ErrorDialogCRER9904, ErrorDialogCRER9905, ErrorDialogCRER9906, ErrorDialogCRER9907, ErrorDialogCRER9908, ErrorDialogCRER9909, ErrorDialogCommon, ErrorDialogTimeout, dialogContents, _, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    $ = require('jquery');
    _ = require('underscore');
    Backbone = require('backbone');
    dialogContents = require('data/dialog_contents');
    Confirm01 = require('components/modal_confirm01');
    dialogContents = require('data/dialog_contents');
    Confirm01 = require('components/modal_confirm01');
    /*
    エラーダイアログ管理クラス
    */

    CartAjaxErrorDialog = (function() {
      _.extend(CartAjaxErrorDialog.prototype, Backbone.Events);

      function CartAjaxErrorDialog() {
        this.currentErrorDialog = null;
        this.errorsWithErrorCode = {
          'CRER0201': ErrorDialogCRER0201,
          'CRER0301': ErrorDialogCRER0301,
          'CRER0302': ErrorDialogCRER0302,
          'CRER9901': ErrorDialogCRER9901,
          'CRER9902': ErrorDialogCRER9902,
          'CRER9903': ErrorDialogCRER9903,
          'CRER9904': ErrorDialogCRER9904,
          'CRER9905': ErrorDialogCRER9905,
          'CRER9906': ErrorDialogCRER9906,
          'CRER9907': ErrorDialogCRER9907,
          'CRER9908': ErrorDialogCRER9908,
          'CRER9909': ErrorDialogCRER9909,
          'timeout': ErrorDialogTimeout
        };
      }

      CartAjaxErrorDialog.prototype.show = function(status, errorThrown) {
        var errorClass;
        if (this.currentErrorDialog) {
          this.currentErrorDialog.destroy();
          delete this.currentErrorDialog;
        }
        errorClass = this.errorsWithErrorCode[errorThrown] || null;
        if (errorClass) {
          this.currentErrorDialog = new errorClass(status, errorThrown);
          return;
        }
        return this.currentErrorDialog = new ErrorDialogCommon(status, errorThrown);
      };

      return CartAjaxErrorDialog;

    })();
    /*
    */

    ErrorDialog = (function(_super) {
      __extends(ErrorDialog, _super);

      function ErrorDialog() {
        _ref = ErrorDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ErrorDialog.prototype.show = function(src) {
        var _this = this;
        this.dialog = new Confirm01();
        this.dialog.content($(src));
        this.dialog.$el.find('.button-close').on('click', function(e) {
          e.preventDefault();
          return _this.dialog.hide();
        });
        return this.dialog.show();
      };

      ErrorDialog.prototype.destroy = function() {
        this.dialog.$el.find('.button-close').off('click');
        this.dialog.remove();
        return delete this.dialog;
      };

      return ErrorDialog;

    })(Backbone.View);
    /*
    CRER0201    不正な商品ID（必須エラー、商品が存在しないなど）
    */

    ErrorDialogCRER0201 = (function(_super) {
      __extends(ErrorDialogCRER0201, _super);

      function ErrorDialogCRER0201() {
        _ref1 = ErrorDialogCRER0201.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      ErrorDialogCRER0201.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '商品またはプレゼント品が見つかりませんでした。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER0201;

    })(ErrorDialog);
    /*
    CRER0301    不正な商品ID（必須エラー、商品が存在しないなど）
    */

    ErrorDialogCRER0301 = (function(_super) {
      __extends(ErrorDialogCRER0301, _super);

      function ErrorDialogCRER0301() {
        _ref2 = ErrorDialogCRER0301.__super__.constructor.apply(this, arguments);
        return _ref2;
      }

      ErrorDialogCRER0301.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '商品またはプレゼント品が見つかりませんでした。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER0301;

    })(ErrorDialog);
    /*
    CRER0302    不正な数量（必須エラー、数値エラーなど）
    */

    ErrorDialogCRER0302 = (function(_super) {
      __extends(ErrorDialogCRER0302, _super);

      function ErrorDialogCRER0302() {
        _ref3 = ErrorDialogCRER0302.__super__.constructor.apply(this, arguments);
        return _ref3;
      }

      ErrorDialogCRER0302.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '数量を変更できませんでした。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER0302;

    })(ErrorDialog);
    /*
    CRER9901    飲むドモをこれ以上選択することができない場合
    */

    ErrorDialogCRER9901 = (function(_super) {
      __extends(ErrorDialogCRER9901, _super);

      function ErrorDialogCRER9901() {
        _ref4 = ErrorDialogCRER9901.__super__.constructor.apply(this, arguments);
        return _ref4;
      }

      ErrorDialogCRER9901.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '飲むドモホルンリンクルは、合計2個までの販売とさせていただきます。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9901;

    })(ErrorDialog);
    /*
    CRER9902   ハーフセットをこれ以上選択することができない場合
    */

    ErrorDialogCRER9902 = (function(_super) {
      __extends(ErrorDialogCRER9902, _super);

      function ErrorDialogCRER9902() {
        _ref5 = ErrorDialogCRER9902.__super__.constructor.apply(this, arguments);
        return _ref5;
      }

      ErrorDialogCRER9902.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = 'ハーフセットはいずれか1セット限定の販売とさせていただきます。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9902;

    })(ErrorDialog);
    /*
    CRER9903   商品最大選択数を超えた場合
    */

    ErrorDialogCRER9903 = (function(_super) {
      __extends(ErrorDialogCRER9903, _super);

      function ErrorDialogCRER9903() {
        _ref6 = ErrorDialogCRER9903.__super__.constructor.apply(this, arguments);
        return _ref6;
      }

      ErrorDialogCRER9903.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '購入上限を超えました。購入することはできません。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9903;

    })(ErrorDialog);
    /*
    CRER9904    プレゼント最大選択数を超えた場合
    */

    ErrorDialogCRER9904 = (function(_super) {
      __extends(ErrorDialogCRER9904, _super);

      function ErrorDialogCRER9904() {
        _ref7 = ErrorDialogCRER9904.__super__.constructor.apply(this, arguments);
        return _ref7;
      }

      ErrorDialogCRER9904.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '選択上限を超えました。選択することはできません。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9904;

    })(ErrorDialog);
    /*
    CRER9905    ポイント不足（プレゼント品の場合のみ）
    */

    ErrorDialogCRER9905 = (function(_super) {
      __extends(ErrorDialogCRER9905, _super);

      function ErrorDialogCRER9905() {
        _ref8 = ErrorDialogCRER9905.__super__.constructor.apply(this, arguments);
        return _ref8;
      }

      ErrorDialogCRER9905.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = 'お手持ちのポイントが足りません。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9905;

    })(ErrorDialog);
    /*
    CRER9906    飲むドモ14本をこれ以上選択することができない場合(1つまで)
    */

    ErrorDialogCRER9906 = (function(_super) {
      __extends(ErrorDialogCRER9906, _super);

      function ErrorDialogCRER9906() {
        _ref9 = ErrorDialogCRER9906.__super__.constructor.apply(this, arguments);
        return _ref9;
      }

      ErrorDialogCRER9906.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '飲むドモホルンリンクル「1箱（14本入り）」を2個ご希望の場合、さらにお得な「2箱（28本入り）」1個がお勧めです。同じ本数で特典2本がつき、5ポイントとなります。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9906;

    })(ErrorDialog);
    /*
    CRER9907    飲むドモ7本をこれ以上選択することができない場合(1つまで)
    */

    ErrorDialogCRER9907 = (function(_super) {
      __extends(ErrorDialogCRER9907, _super);

      function ErrorDialogCRER9907() {
        _ref10 = ErrorDialogCRER9907.__super__.constructor.apply(this, arguments);
        return _ref10;
      }

      ErrorDialogCRER9907.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '飲むドモホルンリンクル「1箱（7本入り）」を2個ご希望の場合、さらにお得な「1箱（14本入り）」1個がお勧めです。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9907;

    })(ErrorDialog);
    /*
    CRER9908    0ポイントの白花をこれ以上選択することができない場合
    */

    ErrorDialogCRER9908 = (function(_super) {
      __extends(ErrorDialogCRER9908, _super);

      function ErrorDialogCRER9908() {
        _ref11 = ErrorDialogCRER9908.__super__.constructor.apply(this, arguments);
        return _ref11;
      }

      ErrorDialogCRER9908.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '白花の0ポイントでのお届けについては、1個までとさせていただいております。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9908;

    })(ErrorDialog);
    /*
    CRER9908    0ポイントの飲むドモをこれ以上選択することができない場合
    */

    ErrorDialogCRER9909 = (function(_super) {
      __extends(ErrorDialogCRER9909, _super);

      function ErrorDialogCRER9909() {
        _ref12 = ErrorDialogCRER9909.__super__.constructor.apply(this, arguments);
        return _ref12;
      }

      ErrorDialogCRER9909.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '申し訳ございませんが、飲むドモホルンリンクル（1本）のお届けについては、1個までとさせていただいております。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCRER9909;

    })(ErrorDialog);
    /*
    timeout    タイムアウト
    */

    ErrorDialogTimeout = (function(_super) {
      __extends(ErrorDialogTimeout, _super);

      function ErrorDialogTimeout() {
        _ref13 = ErrorDialogTimeout.__super__.constructor.apply(this, arguments);
        return _ref13;
      }

      ErrorDialogTimeout.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        errorMessage = '現在、ページの表示に時間がかかっております。しばらくお待ちいただき、再度アクセスしてください。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogTimeout;

    })(ErrorDialog);
    /*
    基本エラーダイアログ
    */

    ErrorDialogCommon = (function(_super) {
      __extends(ErrorDialogCommon, _super);

      function ErrorDialogCommon() {
        _ref14 = ErrorDialogCommon.__super__.constructor.apply(this, arguments);
        return _ref14;
      }

      ErrorDialogCommon.prototype.initialize = function(status, errorThrown) {
        var errorMessage, src;
        // errorMessage = '正しく処理を完了できませんでした。恐れ入りますが、通信環境をご確認いただき、再度操作を行ってください。';
        errorMessage = '以下の理由により正しく処理を完了できませんでした。';
        errorMessage += '<ul><li><span>ご注文商品を承れる個数の上限を超えた場合</span></li><li><span>一時的に通信ができなかった場合</span></li></ul>';
        errorMessage += '恐れ入りますが、商品の個数をご確認いただくか、通信環境をご確認いただき、再度操作を行ってください。';
        src = dialogContents['ajaxErrorBase'];
        src = src.replace('{{ERROR_MESSAGE}}', errorMessage);
        return this.show(src);
      };

      return ErrorDialogCommon;

    })(ErrorDialog);
    return CartAjaxErrorDialog;
  });

}).call(this);
