(function() {
  define((['require', 'jquery', 'underscore', 'controllers/device'], function(require) {
    var $, Device, _;
    $ = require('jquery');
    _ = require('underscore');
    Device = require('controllers/device');
    if (Device.getType() === Device.TYPE_PHONE) {
      return;
    }
    return $(function() {
      return $('.multicolumn-list01-auto').css({
        opacity: 0
      }).each(function() {
        var h, set_w, w;
        if ($(this).hasClass('multicolumn-type-even2')) {
          w = $(this).width();
          if (w === 0) {
            return;
          }
          set_w = (w - 20) / 2;
          h = 0;
          return $(this).find('.list-item').width(set_w).filter(':nth-child(even)').css({
            'margin-left': '20px'
          }).end().each(function(index, $node) {
            h = Math.max($(this).height(), h);
            if (index % 2 === 1) {
              $(this).height(h).siblings().eq(index - 1).height(h);
              return h = 0;
            }
          });
        }
      }).animate({
        opacity: 1
      }, {
        easing: 'linear',
        duration: 100
      });
    });
  }));

}).call(this);
