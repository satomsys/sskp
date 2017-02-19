/*
gototop
ページトップへ戻るボタン
*/


(function() {
  define(['require', 'jquery', 'shifty'], function(require) {
    var $, Tweenable;
    $ = require('jquery');
    Tweenable = require('shifty');
    return $(function() {
      var tweenable;
      tweenable = new Tweenable();
      return $('a[href="#top"]').on('click', function(e) {
        var currentY;
        e.preventDefault();
        currentY = $('body').scrollTop() || $('html').scrollTop();
        return tweenable.tween({
          from: {
            y: currentY
          },
          to: {
            y: 0
          },
          duration: 250,
          easing: 'easeOutQuad',
          step: function(o) {
            var y;
            y = o.y;
            return $('html,body').scrollTop(y);
          }
        });
      });
    });
  });

}).call(this);
