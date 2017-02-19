(function ($) {
  var currentW;
  var timer = false;
  var $sectionConcept    = $('.bh-sectionConcept');
  var $sectionSubArticle = $('.bh-sectionSubArticle');
  var $articleList       = $('.bh-articleList__list__li');
  var panel = false;


  var elem;
  if($sectionConcept.length > 0){
    elem = $sectionConcept;
  }else if($sectionSubArticle.length > 0){
    elem = $sectionSubArticle;
  }

  function judge() {
    if(window.innerWidth <= 568) {
      panels();
    }else if($(window).scrollTop() > ($(window).height()/8)){
      panels();
    }
    return;
  }

  function panels(){
    if(!panel){
      panel = true;
      topInit();
    }
    return;
  }

  $(function(){
    judge(); 
  });

  // beautyhabit ローディング
  function bh_loading(elem){
    elem.append($('<span>',{class:"bh-loading"}));
    $('.bh-loading').fadeIn("fast");
    return;
  }

  function bh_loading_hide(){
    $('.bh-loading').fadeOut("fast");
    return;
  }


  function masonaryRandom() {
    if($('.bh-articleList__list').length) {
      var _arr = [];
      var _list = $('.bh-articleList__list');

      _list.each(function() {
        var _list_li = $(this).children('.bh-articleList__list__li');

        //配列に入れる
        _list_li.each(function() {
          _arr.push($(this));
          $(this).remove();
        });
        //ランダム化
        function shuffle(array) {
          var m = array.length, t, i;
          while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }
          return array;
        }
        shuffle(_arr);
        var len = _list_li.length;
        for (var i= 0; i < len; i++) {
          _list.append(_arr[i]);
        }
        $(this).children('.bh-articleList__list__li').eq(1).addClass('bh-horizonal');
      });
    }
  }

  function masonaryInit() {
    $('.bh-articleList__list').masonry({
      // options
      itemSelector: '.bh-articleList__list__li',
      columnWidth: '.bh-articleList__list__gridSizer',//290,
      gutter: '.bh-articleList__list__gutterSizer',
      isResizable: true,
      percentPosition: true
    });
  }

　// パネルをスクロールに沿って表示
  function bh_graduallydisplay() {
    $('.bh-articleList__list__li').each(function(i){
      $(this).delay(100 * i).animate({
        opacity:1
      })
    });
  }

  function topInit() {
    bh_loading(elem);
    setTimeout(function(){
      masonaryRandom();
      masonaryInit();
      bh_loading_hide(elem);
      bh_graduallydisplay();
    },500);
  }

  function matchHeightSet() {
    var w = document.documentElement.clientWidth;
    //$('.bh-articleList__list__li:nth-child(4n+1) .bh-panel').matchHeight();
    //$('.bh-articleList__list__li:nth-child(4n+4) .bh-panel').matchHeight();
    $('.bh-panel .bh-panel__lower').matchHeight();
    $('.bh-panel > div').matchHeight();
  }

  // start ブラウザバックIE対応用
  window.onhashchange = function () {

  }
  window.onpageshow = function (evt) {
    if (evt.persisted) {

    }
  };
  // end ブラウザバックIE対応用
  $(window).on('load', function () {
    matchHeightSet();
  });

  $(window).on('scroll', function () {
    judge();
  });

  $(window).on('resize', function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {

    }, 200);
  });

})(jQuery);
