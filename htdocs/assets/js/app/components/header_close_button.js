(function() {
  define(['require', 'jquery'], function(require) {
    return $(function() {
      return $('.new-window-page-header .button-close .button-anchor').on('click', function(e) {
        e.preventDefault();
        return window.close();
      });
    });
  });

}).call(this);
