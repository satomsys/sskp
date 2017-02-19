/* ------------------------
  Tab Menu
-------------------------- */
$('.tabBody').each(function(){
  if(!$(this).hasClass('active')){
    $(this).hide();
  }
});

$(function(){
  $('.tabKeyMenu').on('click',function(){
    var $parent = $(this).parents('.tabHead'),key = $(this).data('tabKey');

    $parent.find('.tabKeyMenu').removeClass('active');
    $(this).addClass('active');

    $parent.find('.tabBody').each(function(){
      ($(this).data('tabBody')==key)?($(this).addClass('active').show()):($(this).removeClass('active').hide());
    });
  });
});



/* ------------------------
  Smooth Scroll
-------------------------- */
new function(){

	var attr ="data-tor-smoothScroll";//for html5 , if you can't use html5 , this value change "class"
	var attrPatt = /noSmooth/;
	var d = document;//document short cut
	
	/*
	 *add Event
	  -------------------------------------------------*/
	function addEvent(elm,listener,fn){
		try{ // IE
			elm.addEventListener(listener,fn,false);
		}catch(e){
			elm.attachEvent(
				"on"+listener
				,function(){
					fn.apply(elm,arguments)
				}
			);
		}
	}

	/*
	 *Start SmoothScroll
	  -------------------------------------------------*/
	function SmoothScroll(a){
		if(d.getElementById(a.rel.replace(/.*\#/,""))){
			var e = d.getElementById(a.rel.replace(/.*\#/,""));
		}else{
			return;
		}
		
		//Move point
		var end=e.offsetTop
		var docHeight = d.documentElement.scrollHeight;
		var winHeight = window.innerHeight || d.documentElement.clientHeight
		if(docHeight-winHeight<end){
			var end = docHeight-winHeight;
		}
		
		//Current Point
		var start=window.pageYOffset || d.documentElement.scrollTop || d.body.scrollTop || 0;
		
		
		var flag=(end<start)?"up":"down";

		function scrollMe(start,end,flag) {
			setTimeout(
				function(){
					if(flag=="up" && start >= end){
						start=start-(start-end)/20-1;
						window.scrollTo(0,start)
						scrollMe(start,end,flag);
					}else if(flag=="down" && start <= end){
						start=start+(end-start)/20+1;
						window.scrollTo(0,start)
						scrollMe(start,end,flag);
					}else{
						scrollTo(0,end);
					}
					return ;
				}
				,10
			);
			
		}

		scrollMe(start,end,flag);
		
	}

}

/* ------------------------
TOPメニューリンクの別ページ表示用
-------------------------- */
$('.siteMapDisp').each(function(){
  $(this).data('siteMapDispHeight',$(this).height());
  $(this).css({
    'display': 'none'
  });
});

$('.siteMapKeyOpen').on('click',function(){
  var $key=$(this), $body=$('.siteMapDisp'),  $page=$('.siteMapDisp').nextAll('*'),$header=$("header"), $flex=$('#flexsliderArea');

var h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );

  if($body.css({'display':'none'}))
  {
	  $body.css({'display':'block','height':h,'min-height':h});
	  $page.css({"visibility":"hidden"});
	  $header.css({"visibility":"hidden"});
  }
});

$('.siteMapKeyClose').on('click',function(){
  var $key=$(this), $body=$('.siteMapDisp'), $page=$('.siteMapDisp').nextAll('*'),$header=$("header");

  if($body.css({'display':'block'}))
  {
	  $body.css({'display':'none','height':0});
	  $page.css({"visibility":"visible"});
	  $header.css({"visibility":"visible"});
  }
});

/* ------------------------
画面の向き変更時に高さを再取得（アコーディオン用
-------------------------- */
$(document).ready(function(){
	$(window).bind('orientationchange',doAction);
});

function doAction(event){
  var $body=$('body');
  var $Mbody=$('.siteMapDisp');
  var h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );
  if($body.css({'display':'block'}))
  {
	if (event.orientation=="portrait"){
		/*$body.css({"height":h});*/
		$Mbody.css({"height":h});
    } else {
		/*$body.css({"height":h});*/
      $Mbody.css({"height":h*1.5});
    }
  }
}
