/*
app_order_final_confirmation
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'main', 'jquery', 'lib/restrict_nextbutton'], function(require) {
      var $, RestrictNextbutton;
      $ = require('jquery');
      RestrictNextbutton = require('lib/restrict_nextbutton');
      return $(function() {
        var $nextButton, o, restrictNextButton;
        if ($('input[name="outTel"]') && $('input[name="outTel"]').length > 0) {
          $nextButton = $('.primary .button-next01');
          o = {
            $nextButton: $nextButton,
            isDisabledMode: function() {
              var methodChecked;
              methodChecked = false;
              $('input[name="outTel"]').each(function(idx, e) {
                methodChecked = methodChecked || e.checked || false;
              });
              if (methodChecked === false) {
                return true;
              }
            }
          };
          restrictNextButton = new RestrictNextbutton(o);
          return $('input[name="outTel"]').on('change', _.bind(restrictNextButton.updateButtonStatus, restrictNextButton));
        }
      });
    });
  });

}).call(this);
