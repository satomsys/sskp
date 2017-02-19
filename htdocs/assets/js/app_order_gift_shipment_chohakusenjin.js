/*
app_order_shipment
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery'], function(require) {
      var $;
      $ = require('jquery');
      return $(function() {
        var $agreedInput, $newAddressRadio, $nextButton, $toggleAbsenceBlock, $toggleAgreementBlock, isNewAddressRadioSelected, isRegisteredAddressRadioSelected, toggleAbsenceBlock, toggleAgreementBlock;
        $nextButton = $('.button-next01');
        $agreedInput = $('input#REGIST_AGREEMENT_FLG_1');
        $newAddressRadio = $('input[name="DELIVERY_KBN"]');
        $toggleAgreementBlock = $('.toggle-agreement-block');
        $toggleAbsenceBlock = $('.toggle-absence-block');
        /*
        お客様情報の取り扱い を表示させる/しない
        */

        toggleAgreementBlock = function(isVisible) {
          if (isVisible) {
            $toggleAgreementBlock.show();
            return;
          }
          return $toggleAgreementBlock.hide();
        };
        /*
        ご不在時の対応 を表示させる/しない
        */

        toggleAbsenceBlock = function(isVisible) {
          if (isVisible) {
            $toggleAbsenceBlock.show();
            return;
          }
          return $toggleAbsenceBlock.hide();
        };
        /*
        お届け先で「 お受け取り人の住所を指定」が選択されているときに true を返す
        */

        isNewAddressRadioSelected = function() {
          return $('#DELIVERY_KBN_2').prop('checked');
        };
        /*
        ご登録住所が選択されているときに true を返す
        */

        isRegisteredAddressRadioSelected = function() {
          return $('#DELIVERY_KBN_0').prop('checked');
        };
        $newAddressRadio.on('change', function() {
          var _this = this;
          return setTimeout(function() {
            toggleAgreementBlock(isNewAddressRadioSelected());
            return toggleAbsenceBlock(isRegisteredAddressRadioSelected());
          }, 50);
        });
        toggleAgreementBlock(isNewAddressRadioSelected());
        return toggleAbsenceBlock(isRegisteredAddressRadioSelected());
      });
    });
  });

}).call(this);
