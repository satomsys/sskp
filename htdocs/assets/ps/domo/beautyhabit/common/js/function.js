(function ($) {
  var currentW;
  var timer       = false;
  var $localNav   = 131;
  var $localNavSp = 92;

  $(function () {
    bh_localNav();
    bh_localNavScroll();
    bh_viewMovie()
    // $('html,body').scrollTop(131);

    //movieSetting('.bh-movie');
  });
  // start ブラウザバックIE対応用
  window.onhashchange = function () {

  }
  window.onpageshow = function (evt) {
    if (evt.persisted) {

    }
  };
  // end ブラウザバックIE対応用
  $(window).load(function () {
    localNavFix();
    if($(window).scrollTop() < $localNav || $(window).scrollTop() < $localNavSp){
      bn_localNavStartPosition();
    }
  });

  $(window).on('scroll', function () {
    bh_localNavScroll();
    localNavFix( );    
  });

  $(window).on('resize', function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      localNavFix( );
      bh_localNavReset();
      bh_localNavScroll();
    }, 200);
  });


  // beautyhabit ローカルナビ開閉
  function bh_localNav() {
    if ($('#bh-spLocalNavBtn, #bh-localNavBtn').length && $('#bh-localNav').length) {
      currentW = window.innerWidth ? window.innerWidth : $(window).width();
      var _btn = $('#bh-spLocalNavBtn, #bh-localNavBtn');
      var _trg = $('#bh-localNav');
      var _body = $('body');
      _btn.on('click', function ( e ) {
        e.stopPropagation();
        e.preventDefault();
        var _trg = $(this).closest('#bh-localHeader').siblings('#bh-localNav');
        
        if ($(this).hasClass('open')) {
          _body.removeClass('open');
          $(this).removeClass('open');
          _trg.stop().fadeOut(400, function () {
            _trg.removeAttr("style");
          });
          $(window).off('.noScroll');
        } else {
          _body.addClass('open');
          $(this).addClass('open');
          _trg.addClass('open').stop().fadeIn(400);
          if (_body.hasClass('fixed')) {
            $(window).on('touchmove.noScroll', function (e) {
              e.preventDefault();
            });
          }

          if(_trg.hasClass('bh-localNav_sp')){
            _trg.closest('.megaDrop').css({
              'top': $('.tmp-sp-header').height()
            })
          }
        }
      });
    }
  }


  // beautyhabit ローカルナビ スクロール追従
  function bh_localNavScroll() {
    if ($('#bh-spLocalNavBtn, #bh-localNavBtn').length && $('#bh-localNav').length) {
      var offsetTop = 131; //サイト共通タブメニューとグロナビ高さ SP
      var _body = $('body');
      var _trg = $('#bh-localNavWrap');
      var sc = $('html').scrollTop() || $('body').scrollTop();
      var w = window.innerWidth ? window.innerWidth : $(window).width();
      if (w <= 568) {
        if (sc >= offsetTop) {
          _body.addClass('fixed');
          if (_body.hasClass('open')) {
            $(window).on('touchmove.noScroll', function (e) {
              e.preventDefault();
            });
          }
        } else {
          _body.removeClass('fixed');
        }
      } else {
        if (sc >= 190) {
          _trg.addClass('fixed');
          //top
          if($(".bh-sectionMain").length > 0){
            $(".bh-sectionMain,.bh-sectionConcept,.bh-sectionInquiry").addClass('bh-naviFollow');
          }

          //飲むとめぐり
          if($(".bh-sectionMovie").length > 0){
            $(".bh-sectionMovie,.bh-sectionNomudomo").addClass('bh-naviFollow');
          }

　　　　　　//下層
          if($(".bh-sectionSubIndex").length > 0){
            $(".bh-sectionSubIndex,.bh-sectionSubArticle,.bh-sectionInquiry").addClass('bh-naviFollow');
          }


        } else {
          _trg.removeClass('fixed');
          if($(".bh-sectionMain").length > 0){
            $(".bh-sectionMain,.bh-sectionConcept,.bh-sectionInquiry").removeClass('bh-naviFollow');
          }

          //top
          if($(".bh-sectionMovie").length > 0){
            $(".bh-sectionMovie,.bh-sectionNomudomo").removeClass('bh-naviFollow');
          }

          if($(".bh-sectionSubIndex").length > 0){
            $(".bh-sectionSubIndex,.bh-sectionSubArticle,.bh-sectionInquiry").removeClass('bh-naviFollow');
          }

        }
      }
    }
  }


  // beautyhabit ローカルナビ ロード時強制スクロール
  function bn_localNavStartPosition(){
    if(window.innerWidth <= 568) {
      $('html,body').animate({scrollTop: $localNavSp},10);
    }else{
      $('html,body').animate({scrollTop: $localNav},10);
    }
    return;
  }


  // beautyhabit ローカルナビ　リサイズ時のリセット
  function bh_localNavReset() {
    if ($('#bh-spLocalNavBtn, #bh-localNavBtn').length && $('#bh-localNav').length) {
      var w = window.innerWidth ? window.innerWidth : $(window).width();
      //var h = window.innerHeight ? window.innerHeight: $(window).height();
      var _btn = $('#bh-spLocalNavBtn, #bh-localNavBtn');
      var _trg = $('#bh-localNav');
      if (currentW <= 568 && w > 568) {
        _btn.removeClass('open');
        _trg.removeClass('open').stop().slideUp(0, function () {
          _trg.removeAttr("style");
        });
        $('body').removeClass('fixed open');
        $(window).off('.noScroll');
        currentW = w;
        //console.log(w);
      } else if (currentW > 568 && w <= 568) {
        _btn.removeClass('open');
        _trg.removeClass('open').stop().slideUp(0, function () {
          _trg.removeAttr("style");
        });
        $('body').removeClass('fixed open');
        $(window).off('.noScroll');
        currentW = w;
        //console.log(w, "a");
      }
    }
  }

  //動画の挙動 remodalとの組み合わせ
  //youtube api読み込み
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function movieSetting(selector) {
    var ytplayer; //YTplayer用
    var ytplayers = []; //YTplayer格納用
    var playerIdArray = []; // player判別用idの配列
    var movieIdArray = []; // youtube動画のid用の配列
    var _index; //何番目のモーダル
    //youtubeのイベント
    function onPlayerReady(event) {
      ytplayer = event.target;
      ytplayer.playVideo();
    }

    function onPlayerStateChange(event) {
      var ytStatus = event.data;
      ytplayer = event.target;
      // 再生終了したとき
      if (ytStatus == YT.PlayerState.ENDED) {
        ytplayer.stopVideo();
        $('.remodal').eq(_index).find('.remodal-close').click();
      }
    }
    //movYoutubeのidとdata-id（動画のID）を配列に
    $(selector).each(function () {
      var _this = $(this);
      movieIdArray.push(_this.data("movie-id"));
      playerIdArray.push(_this.attr('id'));
    });
    var player;
    //モーダルが開いた時
    $(document).on('opened', '.remodal', function () {
      var modal = $(this);
      _index = $(".remodal").index(this);
      // YT.Playerを生成
      if (!modal.hasClass('ready')) {
        player = new YT.Player(
          playerIdArray[_index], {
            videoId: movieIdArray[_index],
            playerVars: {
              //'autoplay': 1,
              //'controls': 0
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          }
        );
        //YT.Playerオブジェクトを格納する
        ytplayers[_index] = player;
      } else {
        ytplayers[_index].playVideo();
      }
      modal.addClass('ready');
    });
    //モーダルが閉じた時
    $(document).on('closed', '.remodal', function () {
      ytplayers[_index].pauseVideo();
    });
  }

/**
* ローカルナビを .page-headerから出したときのフィックス
* ※1 ただし、ウィンドウ高さが600pxを下回ったときにグロナビがStaticになる仕様に準じ
* こちらもウィンドウ上部固定となる
*/
function localNavFix( width ){
  var $target = $('#bh-localNavWrap'),
      $nav = $('.page-header'),
      $windowHeight = $(window).innerHeight(),
      $windowWidth = $(window).width(),
      $windowScrollVal = $(window).scrollTop();

      //breakpoint 568pxでナビの高さ手入力。この値がローカルナビのオフセット
       $scrollLimit = $windowWidth < 568  ? 131 : 171;

      // ※1
      if( $windowHeight < 601){

          if( $scrollLimit < $windowScrollVal ){
            $target.css({
              'top':  '0px',
            });            
          } else {
            // console.log( 'aaa' )
            $target.css({
              'top':  $scrollLimit + 'px',
            });               
        }
        return; 
      }


        $navHeight = $nav.outerHeight();
        if( ($scrollLimit - $( '.header-navigation01').outerHeight()) < $windowScrollVal ){
          $target.addClass('fixed');
          // alert( $( '.header-navigation01').outerHeight() );
          $target.css({
            'top':  $( '.header-navigation01').outerHeight() + 'px'
          });        
        } else {
          // alert( 'over' )
          $target.removeClass('fixed');          
          $target.css({
            'top':  $scrollLimit + 'px'
          });                  
        }
}

/**
* ローカルナビ「動画を見る」クリック時にナビを閉じる
*/
function bh_viewMovie(){
  var $target = $('#bh-localNavWrap'),
      $link = $target.find( 'a' );

      $link.on( 'click', function(){
        if($link.attr('href').indexOf('#') == -1 ){
          window.setTimeout( function(){
            $('#bh-localNavBtn').click();
          }, 300 )
        }        
      })


}

/**
* メインヴィジュアル中ボタンのページスクロール
* .bh-sectionMainvisual__btn > a
*/

$( function(){
  var $button = $( '.bh-sectionMainvisual__btn a' );

  $button.on( 'click', function( e ){
    e.preventDefault();
    e.stopPropagation();

    var $to = $( $button.attr('href') ).offset().top;

    $( 'body,html').animate({
      scrollTop: $to
    }, 'fast' );
  });
})

})(jQuery);
