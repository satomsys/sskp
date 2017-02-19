/* ------------------------
  Accordion
-------------------------- */
$('.accordionBody').each(function(){
  $(this).data('accordionHeight',$(this).height());
  $(this).css({
    'height': 0,
    'display': 'none'
  });
});

$('.accordionKey').on('click',function(){
  var $icon=$(this).children('i'),$key=$(this),$body=$(this).next('.accordionBody');
  var accHeight = $body.data('accordionHeight');
  var accSpeed = (accHeight > 300)?(500):(300);

  var H1 = $body.height();       //買い物かご現在の高さ
  $body.css({"height":"auto"});  //'auto'に仮設定
  var H2 = $body.height();       //'auto'場合の高さ
  $body.css({"height":H1+'px'}); //現在の高さに戻す

  if($(this).data('show')){
    $body.removeClass('active').stop(true).animate({'height':0},accSpeed,function(){$(this).css({'display':'none'});});
    $key.data('show',false).removeClass('off').addClass('on');
  }else{
    $body.addClass('active').css({'display':'block'}).stop(true).animate({'height':H2+'px'},accSpeed);
    $key.data('show',true).removeClass('on').addClass('off');
  }
});

/* ------------------------
  RadioButtonColor
-------------------------- */
$(function(){
	$(".radioAreaBtn").click(function(){
		var name = $(this).children("input").attr("name");
		var id   = $(this).children("input").attr("id");
		$("input[name = '" + name + "']").parent().removeClass("RABon").addClass("RABoff");
		$("label[for='" + id + "']").removeClass("RABoff").addClass("RABon");

	});
});

/* ------------------------
画面の向き変更時に高さを再取得（アコーディオン用
-------------------------- */
$(document).ready(function(){
	$(window).bind('orientationchange',doAction);
});
function doAction(event){
	var $body=$('#kaniform');
	var $CLR = $('clr');
	if (event.orientation=="portrait"){
		$body.css({"height":"auto"});
    } else {
		$body.css({"height":"auto"});
    }

	$("clr").each(function(){
		$(this).css({
			"height" : $(this).parent().height() + 20 + "px"
		});
	});
}

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

	/*
	 *Add SmoothScroll
	  -------------------------------------------------*/
	addEvent(window,"load",function(){
		var anchors = d.getElementsByTagName("a");
		for(var i = 0 ,len=anchors.length; i<len ; i++){
			if(!attrPatt.test(anchors[i].getAttribute(attr)) &&
				anchors[i].href.replace(/\#[a-zA-Z0-9_]+/,"") == location.href.replace(/\#[a-zA-Z0-9_]+/,"")){
				anchors[i].rel = anchors[i].href;
				anchors[i].href = "javascript:void(0)";
				anchors[i].onclick=function(){SmoothScroll(this)}
			}
		}
	});

}

/* ------------------------
  no select item
-------------------------- */
$(function(){
	$("clr").each(function(){
		$(this).css({
			"height" : $(this).parent().height() + 20 + "px"
		});
	});
});


/* ------------------------
  Slider
-------------------------- */
$(window).load(function() {
	if ($.flexslider) {	
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: false,
			animationSpeed: 300,
		});
	}
});