// images

$(function(){
    var $setElem = $('.img-change'),
    pcName = '_pc',
    spName = '_sp',
    replaceWidth = 568;
 
    $setElem.each(function(){
        var $this = $(this);
        function imgSize(){
            if(window.innerWidth > replaceWidth) {
                $this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
            } else {
                $this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
            }
        }
        $(window).resize(function(){imgSize();});
        imgSize();
    });
});
