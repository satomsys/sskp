(function() {
  define(['jquery'], function($) {
    return $(function() {
      return $('.ps-btn-reset .button-anchor').on('click', function(evt) {
        evt.preventDefault();
        return $('.ps-reset-target input[type=checkbox]').removeAttr('checked');
      });
    });
  });

}).call(this);
