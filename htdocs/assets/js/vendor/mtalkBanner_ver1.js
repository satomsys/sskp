$.extend({
	getPlatform: function(){
		var _userAgent = (navigator.userAgent).toLowerCase();
		var _version = _userAgent.substring(_userAgent.indexOf('android') +8);
		_version = _version.substring(0,_version.indexOf('.'));
		var _browser=_userAgent.indexOf('chrome');
		var retPlatform = 'pc';
		
		if(_userAgent.indexOf('android') > -1 || _userAgent.indexOf('iphone os') > -1){
				retPlatform = 'sp';
				if (_userAgent.indexOf('android') > -1){
						if (parseInt(_version) == 3 || (_browser > -1 && _userAgent.indexOf('mobile') == -1)){
								retPlatform = 'pc';
						}
				}
		} else if (screen.width <='568'){
			retPlatform = 'sp';
		}
		return retPlatform;
	},
	
	chatBannerActivate: function(options){
		var options = $.extend({
			bnrDelayTime: 5000,
			bnrCloseMode: 'minimize',
			closeBtnType: 'yajirusi',
			useShake: true,
			shakeInterval: 60,
			bnrOpenClose:	'open',
			bnSize: {
				sp: {w:'80', h:'80', b:'5', r:'5', btnwh:'20', btnb:'95', miniw:'50', minih:'50', minib:'45', minir:'5', opacity:'0.82'},
				pc: {w:'206', h:'125', b:'70', r:'5', btnwh:'20', btnb:'205', miniw:'120', minih:'92', minib:'75', minir:'9', opacity:'1.0'}
			},
			envTarget: 'chat'
		}, options);
		
		var _bnrDelayTime = options.bnrDelayTime;
		var _bnrCloseMode = options.bnrCloseMode;
		var _closeBtnType = options.closeBtnType;
		var _bnrOpenClose = options.bnrOpenClose;
		var _bnSize = options.bnSize
		var platform = $.getPlatform();
		var $bnImgHtml_wide = $('<img src="/assets/img/vendor/chat/chat_banner_' + platform + '.png" style="display:block; width:' + _bnSize[platform].w + 'px; height:' + _bnSize[platform].h + 'px;border:0;"/>');
		var $bnImgHtml_mini = $('<img src="/assets/img/vendor/chat/chat_banner_' + platform + '_mini.png" style="display:block; width:' + _bnSize[platform].miniw + 'px; height:' + _bnSize[platform].minih + 'px;border:0; opacity:' + _bnSize[platform].opacity + '"/>').hide();
		var uiImgHtml = '<img src="/assets/img/vendor/chat/chat_banner_close_btn_' + _closeBtnType + '.png" style="display:block; width:' + _bnSize[platform].btnwh + 'px; height:' + _bnSize[platform].btnwh + 'px;border:0px;"/>';
		
		var drawBanner = function(pNodeId){
			
			var $ui = $('<div id="talkBannerCloseBtn">\
					<a href="#">\
						' + uiImgHtml + '\
					</a>\
				</div>\
			').css({
				float: 'right',
				marginBottom: 10
			});
			
			var $banner = $('\
				<div id="talkBanner">\
					<a href="#" style="display:block;margin-top:30px;outline:none;">\
					</a>\
				</div>\
			').css({
				display: 'none',
				position:'fixed',
				zIndex: 999,
				bottom: _bnSize[platform].b +'px',
				right: _bnSize[platform].r +'px',
				textDecoration: 'none'
			});
			$banner.prepend($ui);
			$banner.children('a').append($bnImgHtml_wide, $bnImgHtml_mini);
			
			$banner.appendTo($('body'));
			
			if(options.useShake){
				setInterval(function(){
					$banner.animate({ right: 5 }, 75).animate({ right: 15 }, 75).animate({ right: 5 }, 75).animate({ right: 15 }, 75).animate({ right: 5 }, 75);
				}, 1000 * options.shakeInterval);
			}
			
			$banner.children('a').on('click', function(ev){
				var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
				var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
				var width = $(window).innerWidth();
				var height = $(window).innerHeight();
				var left = ((width / 2) - (450 / 2)) + dualScreenLeft;
				var top = ((height / 2) - (655 / 2)) + dualScreenTop;

				var win;
				var url = 'https://' + options.envTarget +'.saishunkan.co.jp/sshk/jsp/talk/talkCheck.jsp';
				var urlParm;
				var properties = 'width=450,height=655,top=' + top + ', left=' + left + ',resizable=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,status=yes,channelmode=no' + (( ((navigator.userAgent).toLowerCase()).indexOf('windows') == -1 ) ? ',fullscreen=yes' : '');

				var jsonParam = {
					customerId: '',
					customerName:'',
					option01:'',
					option02:'',
					option03:''
				};

				ev.preventDefault();

				try{
					jsonParam = {
						customerId : typeof Chat_CustID == 'undefined' ? '' : Chat_CustID,
						customerName : typeof Chat_CustName == 'undefined' ? '' : Chat_CustName,
						option01 : typeof Chat_Title == 'undefined' ? '' : Chat_Title,
						option02 : typeof Chat_Url == 'undefined' ? '' : Chat_Url,
						option03 : typeof Chat_CookieID == 'undefined' ? '' : Chat_CookieID
					};
				}catch(e){}
				if( jsonParam.customerId == '' ){ jsonParam.customerName = ''; }
				urlParm = '?customerId=' + encodeURIComponent(jsonParam.customerId) + '&customerName=' + encodeURIComponent(jsonParam.customerName) + '&option01=' + encodeURI(encodeURIComponent(jsonParam.option01)) + '&option02=' + encodeURIComponent(jsonParam.option02) + '&option03=' + encodeURIComponent(jsonParam.option03) + '&platForm=' + platform + '&csNodeId=' + pNodeId;
				console.log(urlParm);
				win = window.open(url + urlParm, 'talkPopup', properties);
				if(win){ win.focus(); }
			});
			
			$ui.on('click', function(ev){
				ev.preventDefault();
				switch (_bnrCloseMode){
					case 'hide':
						$banner.hide(); break;
					case 'fadeout':
						$banner.fadeOut(900); break;
					case 'minimize':
					default:
						$ui.hide();
						$bnImgHtml_wide.stop().hide();
						$banner.css({
							bottom: _bnSize[platform].minib + 'px',
							right: _bnSize[platform].minir + 'px'
						});
						$bnImgHtml_mini.stop().fadeIn(900);
				}
				document.cookie = 'bnrOpenClose=close; path=/';
				return false;
			});
			
			if(_bnrOpenClose == 'close' && _bnrCloseMode == 'minimize'){ $ui.trigger('click'); }
			$banner.fadeIn(900);
		}
		
		$(window).on('message', function(ev){
				var obj = JSON.parse(ev.originalEvent.data);
				if("CHECK_AVAILABLE" == obj.type){
						if (obj.message == 0){
							if(_bnrOpenClose != 'close' || _bnrCloseMode == 'minimize'){
								setTimeout(function(){
									drawBanner(obj.value)
								}, _bnrDelayTime);
							}
						} else {
							console.log('error code : ' + obj.message);
							if(typeof $banner !== "undefined"){
								$banner.hide();
							}
						}
				}
		});
	}
});
