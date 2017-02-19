(function() {
  define(['require', 'jquery'], function(require) {
    var $;
    $ = require('jquery');
    return $(function() {
      var updateCheckedClass;
      window.ssk = window.ssk || {};
      window.ssk.checkbox01 = window.ssk.checkbox01 || {};
      $('.input-checkbox01 label, .input-checkbox02 label ').on('click.iOS', function() {
        return {};
      });
      if ($('html.ie6, html.ie7, html.ie8').length <= 0) {
        return;
      }
      updateCheckedClass = function() {
        return $('input[type="checkbox"]').each(function(idx, e) {
          var $e;
          $e = $(e);
          if ($e.prop('disabled')) {
            $e.siblings().addClass('input-disabled');
          } else {
            $e.siblings().removeClass('input-disabled');
          }
          if ($e.prop('checked')) {
            return $e.siblings().addClass('input-checked');
          } else {
            return $e.siblings().removeClass('input-checked');
          }
        });
      };
      $('input[type="checkbox"]').on('click', function() {
        return setTimeout(function() {
          return updateCheckedClass();
        }, 10);
      });
      window.ssk.checkbox01.updateCheckedClass = updateCheckedClass;
      setTimeout(function() {
        return updateCheckedClass();
      }, 250);
    });
  });

}).call(this);
