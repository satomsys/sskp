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
  Slider
-------------------------- */
$(window).load(function() {
    $('.flexslider').flexslider({
		animation: "slide",
		slideshow: false,
		animationSpeed: 300,
		
	});
});

/* ------------------------
  disabled
-------------------------- */
$(function(){
           //送信ボタンの無効、チェックボックスを外す
            $(".confirm input").css({opacity:"0.4",cursor:"default"}).prop("disabled","disabled");
            $(".btnAgree input:checkbox").prop("checked",false);
           //チェックボックスがクリックされると送信ボタン有効
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



