/* ------------------------
  Addressbar
-------------------------- */
function doScroll(){
	if(window.pageYOffset === 0){
		window.scrollTo(0,1);
	}
}
window.onload = function(){
	setTimeout(doScroll, 100);
}

/* ------------------------
Accordion
-------------------------- */
$(function () {
	$('#campaignArea > p:gt(3):not(#moreViewArea)').wrapAll('<div class="accordionBody">').show();
	$('.accordionBody').each(function(){
		  $(this).data('accordionHeight',$(this).height());
		  $(this).css({
		    'height': 0,
		    'display': 'none'
		  });
		});

		$('.accordionKey').on('click',function(){
		  var $icon=$(this).children('i'),$key=$(this),$body=$('.accordionBody');
		  var accHeight = $body.data('accordionHeight');
		  var accSpeed = (accHeight > 300)?(500):(300);

		  var H1 = $body.height();       //�������������݂̍���
		  $body.css({"height":"auto"});  //'auto'�ɉ��ݒ�
		  var H2 = $body.height();       //'auto'�ꍇ�̍���
		  $body.css({"height":H1+'px'}); //���݂̍����ɖ߂�


			$('.accordionKey').hide();
		    $body.addClass('active').css({'display':'block'}).stop(true).animate({'height':H2+'px'},accSpeed);
		    $key.data('show',true).removeClass('on').addClass('off');
		});
});


/* ------------------------
  disabled
-------------------------- */
$(function(){
           //���M�{�^���̖����A�`�F�b�N�{�b�N�X���O��
            $(".confirm input").css({opacity:"0.4",cursor:"default"}).prop("disabled","disabled");
            $(".btnAgree input:checkbox").prop("checked",false);
           //�`�F�b�N�{�b�N�X���N���b�N�����Ƒ��M�{�^���L��
            $(".btnAgree label,.btnAgree input").click(function(){
                if($(".btnAgree input:checkbox").prop('checked')==true){
                    $(".confirm input").css({opacity:"1",cursor:"pointer"}).removeAttr("disabled");
                }else{
                     $(".confirm input").css({opacity:"0.4",cursor:"default"}).prop("disabled","disabled");
            }
        })
});


/* ------------------------
  Window Close
-------------------------- */
function close_win(){
  var nvua = navigator.userAgent;
    if(nvua.indexOf('MSIE') >= 0){
      if(nvua.indexOf('MSIE 5.0') == -1) {
        top.opener = '';
      }
    }
    else if(nvua.indexOf('Gecko') >= 0){
      top.name = 'CLOSE_WINDOW';
      wid = window.open('','CLOSE_WINDOW');
    }
    top.close();
}


