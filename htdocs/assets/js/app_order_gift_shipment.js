/*
app_order_shipment
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery', 'lib/restrict_nextbutton'], function(require) {
      var $, RestrictNextbutton;
      $ = require('jquery');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      return $(function() {
        var $agreedInput, $newAddressRadio, $nextButton, $toggleAbsenceBlock, $toggleAgreementBlock, isNewAddressRadioSelected, isRegisteredAddressRadioSelected, o, restrictNextButton, toggleAbsenceBlock, toggleAgreementBlock;
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
        o = {
          $nextButton: $nextButton,
          isDisabledMode: function() {
            var agreed;
            if (isNewAddressRadioSelected() === false) {
              return false;
            }
            agreed = $agreedInput.prop('checked');
            return !agreed;
          }
        };
        restrictNextButton = new RestrictNextbutton(o);
        $agreedInput.on('change', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        $newAddressRadio.on('change', function() {
          var _this = this;
          return setTimeout(function() {
            toggleAgreementBlock(isNewAddressRadioSelected());
            toggleAbsenceBlock(isRegisteredAddressRadioSelected());
            return (_.bind(restrictNextButton.updateButtonStatus, restrictNextButton))();
          }, 50);
        });
        toggleAgreementBlock(isNewAddressRadioSelected());
        return toggleAbsenceBlock(isRegisteredAddressRadioSelected());
      });
    });
  });

}).call(this);
