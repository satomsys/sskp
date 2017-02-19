/*
プロダクトページへ戻るダイアログ
*/


(function() {
  define(['require', 'backbone', 'underscore', 'components/modal_confirm01', 'data/dialog_contents'], function(require) {
    var $, Backbone, Confirm01, RedirectProductpage, dialogContents, _;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    Confirm01 = require('components/modal_confirm01');
    dialogContents = require('data/dialog_contents');
    return RedirectProductpage = (function() {
      function RedirectProductpage() {
        this.confirm = new Confirm01();
        this.confirm.content($(dialogContents['redirectToProductPage']));
        this.confirm.show();
      }

      return RedirectProductpage;

    })();
  });

}).call(this);
