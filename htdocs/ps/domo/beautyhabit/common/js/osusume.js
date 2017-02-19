(function ($) {
  var currentW;
  var timer = false;

  function matchHeightSet() {
    var w = document.documentElement.clientWidth;
    $('.bh-osusume__clm__li').matchHeight();
  }

  $(function () {
    matchHeightSet();
  });
  // start ブラウザバックIE対応用
  window.onhashchange = function () {

  }
  window.onpageshow = function (evt) {
    if (evt.persisted) {

    }
  };
  // end ブラウザバックIE対応用
  $(window).on('load', function () {

  });

  $(window).on('scroll', function () {
  });

  $(window).on('resize', function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {

    }, 200);
  });

})(jQuery);
