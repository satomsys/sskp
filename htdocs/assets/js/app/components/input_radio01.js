(function() {
  define(['require', 'jquery'], function(require) {
    var $;
    $ = require('jquery');
    return $(function() {
      var updateCheckedClass;
      $('.input-radio01 label').on('click.iOS', function() {
        return {};
      });
      if ($('html.ie6, html.ie7, html.ie8').length <= 0) {
        return;
      }
      updateCheckedClass = function() {
        return $('input[type="radio"]').each(function(idx, e) {
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
      $('input[type="radio"]').on('click', function() {
        return setTimeout(function() {
          return updateCheckedClass();
        }, 10);
      });
      return updateCheckedClass();
    });
  });

}).call(this);
