/* ------------------------
��ʂ̌����ύX���ɍ������Ď擾�i�A�R�[�f�B�I���p
-------------------------- */
$(document).ready(function(){
	$(window).bind('orientationchange',doAction);
});
function doAction(event){
	var $body=$('.accordionBody');
	if (event.orientation=="portrait"){
		$body.css({"height":"auto"});
    } else {
	  $body.css({"height":"auto"});
    }
}

/* ------------------------
TOP���j���[�����N�̕ʃy�[�W�\���p
-------------------------- */
$('.siteMapDisp').each(function(){
  $(this).data('siteMapDispHeight',$(this).height());
  $(this).css({
    'display': 'none'
  });
});

$('.siteMapKeyOpen').on('click',function(){
  var $key=$(this), $body=$('.siteMapDisp'),  $page=$('.siteMapDisp').nextAll('*'),$header=$("header");
  var h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );

  if($body.css({'display':'none'})){
	  $body.css({'display':'block','height':h*2});
	  $page.css({"visibility":"hidden"});
	  $header.css({"visibility":"hidden"});
  }
});

$('.siteMapKeyClose').on('click',function(){
  var $key=$(this), $body=$('.siteMapDisp'), $page=$('.siteMapDisp').nextAll('*'),$header=$("header");

  if($body.css({'display':'block'})){
	  $body.css({'display':'none','height':0});
	  $page.css({"visibility":"visible"});
	  $header.css({"visibility":"visible"});
  }
});