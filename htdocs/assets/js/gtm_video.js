// youtube iframe api�@�̓ǂݍ���
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//�v���[���[�̐����֐�
function initVideoPlayer_Delay(id,videoid,w,h){
  var player;
  function onPlayerReady(){
    //console.log("�ǂݍ���")
    dataLayer.push({'event': 'video_'+videoid+'_ready'});
    //console.log(dataLayer)
  }
  function onPlayerStateChange(event){
    if(event.data == YT.PlayerState.PLAYING){
      //console.log("�Đ�")
      dataLayer.push({'event': 'video_'+videoid+'_play'});
      //console.log(dataLayer)
    }
    if(event.data == YT.PlayerState.PAUSED){
      //console.log("�ꎞ��~")
      dataLayer.push({'event': 'video_'+videoid+'_paused','time':player.getCurrentTime()});
      //console.log(player.getCurrentTime(),dataLayer)
    }
    if(event.data == YT.PlayerState.ENDED){
      //console.log("�I��")
      dataLayer.push({'event': 'video_'+videoid+'_ended'});
      //console.log(dataLayer)
    }
    //console.log("on stage change",event);
  }
  //console.log("done")
  player = new YT.Player(id,{
    height: h,
    width:  w,
    playerVars:{
      'rel':'0',
      'origin':'https://www.saishunkan.co.jp'
    },
    videoId:videoid,// '0ol7zq2Yiq4',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function initVideoPlayer(id,videoid,w,h){
  setTimeout((function(){initVideoPlayer_Delay(id,videoid,w,h)}),0)
}


