/*
app_order_shipment
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'jquery', 'lib/restrict_nextbutton'], function(require) {
      var $, RestrictNextbutton;
      $ = require('jquery');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      return $(function() {
        var $nextButton, changeAddress, currentDeliverClassId, hideBlockOnTabChange, hideTabName, o, restrictNextButton, setAddressForm;
        setAddressForm = function(str) {
          if (str === 'address01') {
            $('.registered-address01-row').show();
            return $('.registered-address02-row').hide();
          } else if (str === 'address02') {
            $('.registered-address01-row').hide();
            return $('.registered-address02-row').show();
          } else {
            $('.registered-address01-row').hide();
            return $('.registered-address02-row').hide();
          }
        };
        changeAddress = function(e) {
          return setAddressForm(e.target.id);
        };
        $('input.address-toggle').on('change', changeAddress);
        $('input.address-toggle').each(function(idx, e) {
          if (e.checked) {
            setAddressForm(e.id);
          }
        });
        currentDeliverClassId = null;
        $('.input-type-radio[name="DELIVCLASS"]').each(function(idx, item) {
          if ($(item).prop('checked')) {
            return currentDeliverClassId = item.id;
          }
        });
        $('.input-type-radio[name="DELIVCLASS"]').on('change', function(e) {
          if ($(e.target).parents('.selectable-header-block').length === 0) {
            return currentDeliverClassId = e.target.id;
          }
        });
        $('.panel-selectable01[data-selectable-group="deliver_to"] .selectable-header-block .input-type-radio').on('change', function(e) {
          if (e.target.id === 'addressPanel' && currentDeliverClassId !== 'addressOther' && !$('#' + currentDeliverClassId).prop('checked')) {
            return $('#' + currentDeliverClassId).prop('checked', true);
          }
        });
        setAddressForm(currentDeliverClassId);
        hideBlockOnTabChange = function($targetTab) {
          var tabTargetName;
          tabTargetName = $targetTab.attr('data-tab-target');
          return $('[data-hide-block="true"]').each(function(idx, item) {
            var $item, hideOn;
            $item = $(item);
            hideOn = $item.attr('data-hide-tab-name');
            if (hideOn === tabTargetName) {
              return $item.hide();
            } else {
              return $item.show();
            }
          });
        };
        if ($('[data-hide-block="true"]').length > 0) {
          $('.tab-header-block .tab-item').on('click', function(e) {
            return hideBlockOnTabChange($(e.target));
          });
          setTimeout(function() {
            if ($('.tab-header-block .tab-item.tab-stay').length > 0) {
              return hideBlockOnTabChange($('.tab-header-block .tab-item.tab-stay'));
            }
          }, 500);
        }
        if ($('[data-restrict-button="true"]').length > 0) {
          $nextButton = $('.primary .button-next01');
          hideTabName = $('[data-restrict-button="true"]').attr('data-hide-tab-name');
          o = {
            $nextButton: $nextButton,
            isDisabledMode: function() {
              var $tabStay, tabTargetname;
              $tabStay = $('.tab-header-block .tab-item.tab-stay');
              if ($tabStay.length < 1) {
                return false;
              }
              tabTargetname = $tabStay.attr('data-tab-target');
              if (tabTargetname === hideTabName) {
                return true;
              }
              return false;
            }
          };
          restrictNextButton = new RestrictNextbutton(o);
          return $('.tab-header-block .tab-item').on('click', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        }
      });
    });
  });

}).call(this);
