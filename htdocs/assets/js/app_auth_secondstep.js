/*
app_auth_secondstep
*/


(function() {
  require(['require', 'jquery', 'underscore', 'backbone', 'shifty', 'app'], function(require) {
    return require(['require', 'jquery'], function(require) {
      var $;
      $ = require('jquery');
      return $(function() {
        var changeMethod, currentMethodClassId, setMethodForm;
        setMethodForm = function(str) {
          if (str === 'form-method01') {
            $('.input-tel01-row').show().css('display', 'table-row');
            return $('.input-birthday-row').hide();
          } else if (str === 'form-method02') {
            $('.input-tel01-row').hide();
            return $('.input-birthday-row').show().css('display', 'table-row');
          } else {
            $('.input-tel01-row').hide();
            return $('.input-birthday-row').hide();
          }
        };
        changeMethod = function(e) {
          return setMethodForm(e.target.id);
        };
        $('input.input_type-toggle').on('change', changeMethod);
        currentMethodClassId = null;
        $('input.input_type-toggle').each(function(idx, e) {
          if (e.checked) {
            currentMethodClassId = e.id;
          }
        });
        return setMethodForm(currentMethodClassId);
      });
    });
  });

}).call(this);
