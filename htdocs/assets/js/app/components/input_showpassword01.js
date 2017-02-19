(function() {
  define(['require', 'jquery'], function(require) {
    var $;
    $ = require('jquery');
    return $(function() {
      var updateCheckedClass;
      updateCheckedClass = function() {
        return $('.input-showpassword01 input[type="checkbox"]').each(function(idx, e) {
          var $e, $target, target;
          $e = $(e);
          target = $e.attr('data-show-target-id');
          if (!target) {
            return;
          }
          $target = $('#' + target);
          if (!$target) {
            return;
          }
          if ($e.prop('checked')) {
            return $target.attr('type', 'text');
          } else {
            return $target.attr('type', 'password');
          }
        });
      };
      $('.input-showpassword01 input[type="checkbox"]').on('click', function() {
        return setTimeout(function() {
          return updateCheckedClass();
        }, 10);
      });
    });
  });

}).call(this);
