(function() {
  define(['data/navigation_stay_setting'], function(nav_data) {
    return $(function() {
      var $node, arr, hit, key, reg;
      $node = $('.header-navigation01-autostay');
      if (!$node.size()) {
        return;
      }
      hit = null;
      for (key in nav_data) {
        arr = nav_data[key];
        reg = new RegExp(arr.join('|'));
        if (location.pathname.match(reg)) {
          if (key === 'product' && location.pathname.match(/(dcj|dcs|dfp|dl|de|dw20|dml|dc)\/care\.html/)) {
            continue;
          }
          hit = key;
          break;
        }
      }
      if (hit) {
        return $node.find('.list-' + hit).find('> a').addClass('link-stay');
      }
    });
  });

}).call(this);
