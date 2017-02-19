/**
 * 住所検索
 */

function load_xml(msg) {
	if(!$.support.opacity && typeof msg == 'string') {
		// IE6,7,8
		var data = new ActiveXObject('Microsoft.XMLDOM');
		data.async = false;
		data.loadXML(msg);
	} else {
		data = msg;
	}
	return data;
}

// 入力された郵便番号のチェック
// エラーの場合、バルーンに表示
function checkPostCd(postNo){
	var message = null;
	
	if (postNo != '' && postNo.match( /[^0-9]+/ )){
		message = "郵便番号は半角数字のみで入力してください。";
	} else {
		if (postNo.length < 6){
			message = "郵便番号は6桁もしくは全7桁をご入力ください。";
		}
		if (postNo.match( /^[0]{6,7}/ )){
			message = "郵便番号を正しくご入力ください。";
		}
	}
	
	if (message != null) {
		$('#postcdBalloonMessage').text(message);
		$('#postcdBalloon').show('fast');
		return false;
	}
	
	return true;
}

// ポップアップを閉じる
function closeSearchResult() {
	$('#searchResultPanel').hide();
	$('#searchResultList').remove();
	$('#searchClose').hide();
}

// 住所を確定
function selectAddress(prefname, addr1, postcd) {
	closeSearchResult();
	
	$("input[name='KEN']").val($.trim(prefname));
	$("input[name='ADRS_1']").val($.trim(addr1));
	
	// 確定住所エリアを表示
	$('#selectedAddressBlock').show();
	$('#addressInputPanel').show(500);
	
    $('#POSTCD_sample').removeClass('input-required');
    
	if (postcd) {
		$('#POSTCD').val(postcd);
	}
}

function clearSelectedAddress() {
	$('#addressInputPanel').hide();
	$('#selectedAddressBlock').hide();
	
	$("input[name='KEN']").val('');
	$("input[name='ADRS_1']").val('');
	$('#pref').val('');
	$('#city').val('');
}

// ポップアップ内インデックスが選択された場合の処理
function selectIndex(anchorlink) {
	// 現状表示されているindexのリストを非表示に
	$('#searchResultList ul:visible').hide();
	
	$('#' + anchorlink).show('fast');
}

var searching = false;


$(document).ready(function() {
	
	// 郵便番号入力フィールド
	$('#POSTCD').bind('focus', function() {
		if ($('#prefSelectBlock').is(':visible')) {
			// 住所から検索中であれば、非表示に
			$('#prefSelectBlock').hide();
			$('#citySelectBlock').hide();
			$('#selectedAddressBlock').hide();
		}
		if ($('#city').val() != '') {
			// 住所から検索中であれば、非表示に
			closeSearchResult();
		}
	});
	$('#POSTCD').bind('keyup', function() {
		var postcd = $('#POSTCD').val();
		if (postcd.length < 7) {
			// 検索結果をクリア
			clearSelectedAddress();
		}
	});
	$('#POSTCD').bind('change', function() {
		// 検索結果をクリア
		clearSelectedAddress();
	});
	
	// ポップアップ閉じるイベント
	$('#searchClose').bind('click', function() {
		// Vista+IE7のバグを回避するためcloseSearchResultを使わない
		$('#searchResultPanel').hide();
	});
	
	// 郵便番号から住所を検索ボタン
	$('#searchAddressButton').bind('click', function() {
		if (searching) {
			return false;
		}
		searching = true;
		
		// 以前の検索結果を削除
		closeSearchResult();
		
		var postcd = $('#POSTCD').val();
		if (!checkPostCd(postcd)) {
			searching = false;
			return false;
		}
		
		// バリデーションエラー表示中であれば非表示に
		if ($('#postcdBalloon').is(':visible')) {
			$('#postcdBalloon').hide('fast');
		}
		
		// 郵便番号入力エリアが画面上部にくるようにスクロール
		var top = $('#addressSearchPanel').offset().top;
		$('html,body').animate({scrollTop:top}, 'fast');
		
		// 必要ない表示項目は非表示に
		$('#prefSelectBlock').hide();
		$('#citySelectBlock').hide();
		clearSelectedAddress();
		
		
		$.ajax({
			type:'POST', 
			url:'/domo/ajax/getPostCdList.req.php', 
			data:'postcd=' + postcd, 
			dataType:'xml',
			beforeSend:function() {
				$('#searchMessage').text('読み込み中...');
				$('#searchResultPanel').show('fast');
				$('#searchClose').hide();
			}, 
			success:function(data, dataType, xhr){
				if (xhr.status != 200) {
					$('#searchMessage').text('恐れ入りますが、しばらく経ってから検索してください。');
					$('#searchClose').show();
					return ;
				}
				
				var xml = load_xml(data);
				var cnt = $(xml).find('total').text();
				
				if (cnt > 0) {
					if (cnt == 1) {
						// 住所確定
						var postcd = $(xml).find('postcd').text();
						var prefname = $(xml).find('prefname').text();
						var addr1 = $(xml).find('addr1').text();
						selectAddress(prefname, addr1, postcd);
					} else {
						$('#searchMessage').text('検索結果[' + cnt + '件]');
						
						var list = '<ul id="searchResultList" style="list-style: none outside none;margin:0px;padding:0px 20px;">';
						$(xml).find('entry').each(function() {
							var postcd = $(this).find('postcd').text();
							var prefname = $(this).find('prefname').text();
							var addr1 = $(this).find('addr1').text();
							
							list += '<li style="line-height: 25px;"><a onclick="selectAddress(\'' + prefname + '\', \'' + addr1 + '\', \'' + postcd + '\');">[' + postcd + ']&nbsp;' + prefname + '&nbsp;' + addr1 + '</a></li>';
							
						});
						list += '</ul>';
						
						$('#searchMessage').after(list);
						
						$('#searchClose').show();
					}
				} else {
					$('#searchMessage').text('該当する住所が存在しません。');
					$('#searchClose').show();
					return ;
				}
			},
			complete:function(xhr, textStatus) {
				searching = false;
			}, 
			error:function(xhr, textStatus, errorThrown) {
				$('#searchMessage').text('恐れ入りますが、しばらく経ってから検索してください。');
				$('#searchClose').show();
			}
		});
	});
	
	// 住所から検索ボタン
	$('#searchStartButton').bind('click', function() {
		// 入力されている郵便番号をクリア
		$('#POSTCD').val('');
		
		closeSearchResult();
		
		// バリデーションエラー表示中であれば非表示に
		if ($('#postcdBalloon').is(':visible')) {
			$('#postcdBalloon').hide('fast');
		}
		
		$('#citySelectBlock').hide();
		clearSelectedAddress();
		
		// 郵便番号入力エリアが画面上部にくるようにスクロール
		var top = $('#addressSearchPanel').offset().top;
		$('html,body').animate({scrollTop:top}, 'fast');
		
		// 都道府県選択ボックスを表示
		$('#pref').change();
		$('#prefSelectBlock').show('fast');
	});
	
	// 都道府県確定ボタン
	$('#prefSelectButton').bind('click', function() {
		var selectedPref = $('#pref').val();
		if (selectedPref == '') {
			$('#searchMessage').text('該当する住所が存在しません。');
			$('#searchResultPanel').show('fast');
			$('#searchClose').show();
			return ;
		}

		selectedPref = selectedPref.replace(/(^[\s　]+)|([\s　]+$)/g, "");
		searching = true;
		
		// 以前の結果は非表示に
		$('#citySelectBlock').hide();
		$('#city').empty();
		
		$.ajax({
			type:'POST', 
			url:'/domo/ajax/getAjaxData.req.php', 
			data:'pref=' + selectedPref + '&mode=1', 
			dataType:'xml',
			beforeSend:function() {
				$('#searchMessage').text('読み込み中...');
				$('#searchResultPanel').show('fast');
				$('#searchClose').hide();
			}, 
			success:function(data, dataType, xhr){
				if (xhr.status != 200) {
					$('#searchMessage').text('恐れ入りますが、しばらく経ってから検索してください。');
					$('#searchClose').show();
					return ;
				}
				
				var xml = load_xml(data);
				var cnt = $(xml).find('total').text();
				
				if (cnt > 0) {
					
					$('#city').append('<option value="" selected="true">市区町村</option>');
					$(xml).find('entry').each(function() {
						var city = $(this).find('city').text();
						var groupCd = $(this).find('group_cd').text();
						
						var option = '<option value=\"' + groupCd + '\">' + city + '</option>';
						$('#city').append(option);
					});
					
				} else {
					$('#searchMessage').text('該当する住所が存在しません。');
					$('#searchClose').show();
					return ;
				}
				
				closeSearchResult();
				
				// 県選択エリアが画面上部にくるようにスクロール
				var top = $('#prefSelectBlock').offset().top;
				$('html,body').animate({scrollTop:top}, 'fast');
				
				// デザイン側のイベントを発生させるため
				$('#city').change();
				
				// 市区町村セレクトボックス表示
				$('#citySelectBlock').show('fast');
			}, 
			complete:function(xhr, textStatus) {
				searching = false;
			}, 
			error:function(xhr, textStatus, errorThrown) {
				$('#searchMessage').text('恐れ入りますが、しばらく経ってから検索してください。');
				$('#searchClose').show();
			}
		});
	});
	
	// 市区町村確定ボタン
	$('#citySelectButton').bind('click', function() {
		var selectedCity = $('#city').val();
		if (selectedCity == '') {
			$('#searchMessage').text('該当する住所が存在しません。');
			$('#searchResultPanel').show('fast');
			$('#searchClose').show();
			return ;
		}
		
		//値が空でも検索、該当なしメッセージを表示する
		selectedCity = selectedCity.replace(/(^[\s　]+)|([\s　]+$)/g, "");
		searching = true;
		
		$.ajax({
			type:'POST', 
			url:'/domo/ajax/getAjaxData.req.php', 
			data:'group_cd=' + selectedCity + '&mode=2', 
			dataType:'xml',
			beforeSend:function() {
				$('#searchMessage').text('読み込み中...');
				$('#searchResultPanel').show('fast');
				$('#searchClose').hide();
			}, 
			success:function(data, dataType, xhr){
				if (xhr.status != 200) {
					$('#searchMessage').text('恐れ入りますが、しばらく経ってから検索してください。');
					$('#searchClose').show();
					return ;
				}
				
				var xml = load_xml(data);
				var cnt = $(xml).find('total').text();
				
				if (cnt > 0) {
					if (cnt == 1) {
						// 住所確定
						var postcd = $(xml).find('postcd').text();
						var prefname = $(xml).find('prefname').text();
						var addr1 = $(xml).find('addr1').text();
						
						// 郵便番号をセット
						$('#POSTCD').val(postcd);
						
						// 住所をセット
						selectAddress(prefname, addr1);
					} else {
						$('#searchMessage').text('検索結果[' + cnt + '件]');
						
						var list = '<div id="searchResultList" style="padding:0px 20px;">';
						
						var kanalist = '';
						$(xml).find('kanalist').each(function() {
							var anchortag = $(this).find('anchortag').text();
							var kanatop = $(this).find('kanatop').text();
							
							kanalist += '<span style="float:left;">[&nbsp;<a onclick="selectIndex(\'' + anchortag + '\');" style=""> ' + kanatop + ' </a>&nbsp;]&nbsp;</span>';
						});
						kanalist += '<span style="float:left;">[&nbsp;<a onclick="selectIndex(\'addrList_other\');" style=""> その他 </a>&nbsp;]&nbsp;</span>';
						kanalist += '<div style="clear:both;"></div>';
						list += kanalist;
						
						var addresslist = '';
						$(xml).find('entry').each(function() {
							var anchorlink = $(this).find('anchorlink').text();
							var postcd = $(this).find('postcd').text();
							var prefname = $(this).find('prefname').text();
							var addr1 = $(this).find('addr1').text();
							var addr1ext = '';
							
							if (addresslist.length === 0) {
								// その他用
								anchorlink = 'addrList_other';
								addr1ext += '（他に記載がない場合）';
							}
							
							if (anchorlink != undefined && anchorlink.length > 0) {
								// それぞれのindex内リストの最初のentryにのみanchorlinkがついている
								if (addresslist.length > 0) {
									addresslist += '</ul>';
								}
								// display:noneでindex毎にリストを生成
								addresslist += '<ul id="' + anchorlink + '" style="list-style: none outside none;margin:0px;padding:0px 20px;display:none;">';
							}
							
							addresslist += '<li style="line-height: 25px;"><a onclick="selectAddress(\'' + prefname + '\', \'' + addr1 + '\', \'' + postcd + '\');">[' + postcd + ']&nbsp;' + prefname + '&nbsp;' + addr1 + addr1ext + '</a></li>';
							
						});
						
						list += addresslist;
						list += '</div>';
						
						$('#searchMessage').after(list);
						
						// 最初のindexのリストを表示
						$('#addrList_1').show('fast');
						
						$('#searchClose').show();
					}
				} else {
					$('#searchMessage').text('該当する住所が存在しません。');
					$('#searchClose').show();
					return ;
				}
				
				// セレクトボックスは非表示に
				$('#prefSelectBlock').hide();
				$('#citySelectBlock').hide();
			}, 
			complete:function(xhr, textStatus) {
				searching = false;
			}, 
			error:function(xhr, textStatus, errorThrown) {
				$('#searchMessage').text('恐れ入りますが、しばらく経ってから検索してください。');
				$('#searchClose').show();
			}
		});
	});
	
});

