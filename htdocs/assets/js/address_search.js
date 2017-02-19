/**
 * �Z������
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

// ���͂��ꂽ�X�֔ԍ��̃`�F�b�N
// �G���[�̏ꍇ�A�o���[���ɕ\��
function checkPostCd(postNo){
	var message = null;
	
	if (postNo != '' && postNo.match( /[^0-9]+/ )){
		message = "�X�֔ԍ��͔��p�����݂̂œ��͂��Ă��������B";
	} else {
		if (postNo.length < 6){
			message = "�X�֔ԍ���6���������͑S7���������͂��������B";
		}
		if (postNo.match( /^[0]{6,7}/ )){
			message = "�X�֔ԍ��𐳂��������͂��������B";
		}
	}
	
	if (message != null) {
		$('#postcdBalloonMessage').text(message);
		$('#postcdBalloon').show('fast');
		return false;
	}
	
	return true;
}

// �|�b�v�A�b�v�����
function closeSearchResult() {
	$('#searchResultPanel').hide();
	$('#searchResultList').remove();
	$('#searchClose').hide();
}

// �Z�����m��
function selectAddress(prefname, addr1, postcd) {
	closeSearchResult();
	
	$("input[name='KEN']").val($.trim(prefname));
	$("input[name='ADRS_1']").val($.trim(addr1));
	
	// �m��Z���G���A��\��
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

// �|�b�v�A�b�v���C���f�b�N�X���I�����ꂽ�ꍇ�̏���
function selectIndex(anchorlink) {
	// ����\������Ă���index�̃��X�g���\����
	$('#searchResultList ul:visible').hide();
	
	$('#' + anchorlink).show('fast');
}

var searching = false;


$(document).ready(function() {
	
	// �X�֔ԍ����̓t�B�[���h
	$('#POSTCD').bind('focus', function() {
		if ($('#prefSelectBlock').is(':visible')) {
			// �Z�����猟�����ł���΁A��\����
			$('#prefSelectBlock').hide();
			$('#citySelectBlock').hide();
			$('#selectedAddressBlock').hide();
		}
		if ($('#city').val() != '') {
			// �Z�����猟�����ł���΁A��\����
			closeSearchResult();
		}
	});
	$('#POSTCD').bind('keyup', function() {
		var postcd = $('#POSTCD').val();
		if (postcd.length < 7) {
			// �������ʂ��N���A
			clearSelectedAddress();
		}
	});
	$('#POSTCD').bind('change', function() {
		// �������ʂ��N���A
		clearSelectedAddress();
	});
	
	// �|�b�v�A�b�v����C�x���g
	$('#searchClose').bind('click', function() {
		// Vista+IE7�̃o�O��������邽��closeSearchResult���g��Ȃ�
		$('#searchResultPanel').hide();
	});
	
	// �X�֔ԍ�����Z���������{�^��
	$('#searchAddressButton').bind('click', function() {
		if (searching) {
			return false;
		}
		searching = true;
		
		// �ȑO�̌������ʂ��폜
		closeSearchResult();
		
		var postcd = $('#POSTCD').val();
		if (!checkPostCd(postcd)) {
			searching = false;
			return false;
		}
		
		// �o���f�[�V�����G���[�\�����ł���Δ�\����
		if ($('#postcdBalloon').is(':visible')) {
			$('#postcdBalloon').hide('fast');
		}
		
		// �X�֔ԍ����̓G���A����ʏ㕔�ɂ���悤�ɃX�N���[��
		var top = $('#addressSearchPanel').offset().top;
		$('html,body').animate({scrollTop:top}, 'fast');
		
		// �K�v�Ȃ��\�����ڂ͔�\����
		$('#prefSelectBlock').hide();
		$('#citySelectBlock').hide();
		clearSelectedAddress();
		
		
		$.ajax({
			type:'POST', 
			url:'/domo/ajax/getPostCdList.req.php', 
			data:'postcd=' + postcd, 
			dataType:'xml',
			beforeSend:function() {
				$('#searchMessage').text('�ǂݍ��ݒ�...');
				$('#searchResultPanel').show('fast');
				$('#searchClose').hide();
			}, 
			success:function(data, dataType, xhr){
				if (xhr.status != 200) {
					$('#searchMessage').text('�������܂����A���΂炭�o���Ă��猟�����Ă��������B');
					$('#searchClose').show();
					return ;
				}
				
				var xml = load_xml(data);
				var cnt = $(xml).find('total').text();
				
				if (cnt > 0) {
					if (cnt == 1) {
						// �Z���m��
						var postcd = $(xml).find('postcd').text();
						var prefname = $(xml).find('prefname').text();
						var addr1 = $(xml).find('addr1').text();
						selectAddress(prefname, addr1, postcd);
					} else {
						$('#searchMessage').text('��������[' + cnt + '��]');
						
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
					$('#searchMessage').text('�Y������Z�������݂��܂���B');
					$('#searchClose').show();
					return ;
				}
			},
			complete:function(xhr, textStatus) {
				searching = false;
			}, 
			error:function(xhr, textStatus, errorThrown) {
				$('#searchMessage').text('�������܂����A���΂炭�o���Ă��猟�����Ă��������B');
				$('#searchClose').show();
			}
		});
	});
	
	// �Z�����猟���{�^��
	$('#searchStartButton').bind('click', function() {
		// ���͂���Ă���X�֔ԍ����N���A
		$('#POSTCD').val('');
		
		closeSearchResult();
		
		// �o���f�[�V�����G���[�\�����ł���Δ�\����
		if ($('#postcdBalloon').is(':visible')) {
			$('#postcdBalloon').hide('fast');
		}
		
		$('#citySelectBlock').hide();
		clearSelectedAddress();
		
		// �X�֔ԍ����̓G���A����ʏ㕔�ɂ���悤�ɃX�N���[��
		var top = $('#addressSearchPanel').offset().top;
		$('html,body').animate({scrollTop:top}, 'fast');
		
		// �s���{���I���{�b�N�X��\��
		$('#pref').change();
		$('#prefSelectBlock').show('fast');
	});
	
	// �s���{���m��{�^��
	$('#prefSelectButton').bind('click', function() {
		var selectedPref = $('#pref').val();
		if (selectedPref == '') {
			$('#searchMessage').text('�Y������Z�������݂��܂���B');
			$('#searchResultPanel').show('fast');
			$('#searchClose').show();
			return ;
		}

		selectedPref = selectedPref.replace(/(^[\s�@]+)|([\s�@]+$)/g, "");
		searching = true;
		
		// �ȑO�̌��ʂ͔�\����
		$('#citySelectBlock').hide();
		$('#city').empty();
		
		$.ajax({
			type:'POST', 
			url:'/domo/ajax/getAjaxData.req.php', 
			data:'pref=' + selectedPref + '&mode=1', 
			dataType:'xml',
			beforeSend:function() {
				$('#searchMessage').text('�ǂݍ��ݒ�...');
				$('#searchResultPanel').show('fast');
				$('#searchClose').hide();
			}, 
			success:function(data, dataType, xhr){
				if (xhr.status != 200) {
					$('#searchMessage').text('�������܂����A���΂炭�o���Ă��猟�����Ă��������B');
					$('#searchClose').show();
					return ;
				}
				
				var xml = load_xml(data);
				var cnt = $(xml).find('total').text();
				
				if (cnt > 0) {
					
					$('#city').append('<option value="" selected="true">�s�撬��</option>');
					$(xml).find('entry').each(function() {
						var city = $(this).find('city').text();
						var groupCd = $(this).find('group_cd').text();
						
						var option = '<option value=\"' + groupCd + '\">' + city + '</option>';
						$('#city').append(option);
					});
					
				} else {
					$('#searchMessage').text('�Y������Z�������݂��܂���B');
					$('#searchClose').show();
					return ;
				}
				
				closeSearchResult();
				
				// ���I���G���A����ʏ㕔�ɂ���悤�ɃX�N���[��
				var top = $('#prefSelectBlock').offset().top;
				$('html,body').animate({scrollTop:top}, 'fast');
				
				// �f�U�C�����̃C�x���g�𔭐������邽��
				$('#city').change();
				
				// �s�撬���Z���N�g�{�b�N�X�\��
				$('#citySelectBlock').show('fast');
			}, 
			complete:function(xhr, textStatus) {
				searching = false;
			}, 
			error:function(xhr, textStatus, errorThrown) {
				$('#searchMessage').text('�������܂����A���΂炭�o���Ă��猟�����Ă��������B');
				$('#searchClose').show();
			}
		});
	});
	
	// �s�撬���m��{�^��
	$('#citySelectButton').bind('click', function() {
		var selectedCity = $('#city').val();
		if (selectedCity == '') {
			$('#searchMessage').text('�Y������Z�������݂��܂���B');
			$('#searchResultPanel').show('fast');
			$('#searchClose').show();
			return ;
		}
		
		//�l����ł������A�Y���Ȃ����b�Z�[�W��\������
		selectedCity = selectedCity.replace(/(^[\s�@]+)|([\s�@]+$)/g, "");
		searching = true;
		
		$.ajax({
			type:'POST', 
			url:'/domo/ajax/getAjaxData.req.php', 
			data:'group_cd=' + selectedCity + '&mode=2', 
			dataType:'xml',
			beforeSend:function() {
				$('#searchMessage').text('�ǂݍ��ݒ�...');
				$('#searchResultPanel').show('fast');
				$('#searchClose').hide();
			}, 
			success:function(data, dataType, xhr){
				if (xhr.status != 200) {
					$('#searchMessage').text('�������܂����A���΂炭�o���Ă��猟�����Ă��������B');
					$('#searchClose').show();
					return ;
				}
				
				var xml = load_xml(data);
				var cnt = $(xml).find('total').text();
				
				if (cnt > 0) {
					if (cnt == 1) {
						// �Z���m��
						var postcd = $(xml).find('postcd').text();
						var prefname = $(xml).find('prefname').text();
						var addr1 = $(xml).find('addr1').text();
						
						// �X�֔ԍ����Z�b�g
						$('#POSTCD').val(postcd);
						
						// �Z�����Z�b�g
						selectAddress(prefname, addr1);
					} else {
						$('#searchMessage').text('��������[' + cnt + '��]');
						
						var list = '<div id="searchResultList" style="padding:0px 20px;">';
						
						var kanalist = '';
						$(xml).find('kanalist').each(function() {
							var anchortag = $(this).find('anchortag').text();
							var kanatop = $(this).find('kanatop').text();
							
							kanalist += '<span style="float:left;">[&nbsp;<a onclick="selectIndex(\'' + anchortag + '\');" style=""> ' + kanatop + ' </a>&nbsp;]&nbsp;</span>';
						});
						kanalist += '<span style="float:left;">[&nbsp;<a onclick="selectIndex(\'addrList_other\');" style=""> ���̑� </a>&nbsp;]&nbsp;</span>';
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
								// ���̑��p
								anchorlink = 'addrList_other';
								addr1ext += '�i���ɋL�ڂ��Ȃ��ꍇ�j';
							}
							
							if (anchorlink != undefined && anchorlink.length > 0) {
								// ���ꂼ���index�����X�g�̍ŏ���entry�ɂ̂�anchorlink�����Ă���
								if (addresslist.length > 0) {
									addresslist += '</ul>';
								}
								// display:none��index���Ƀ��X�g�𐶐�
								addresslist += '<ul id="' + anchorlink + '" style="list-style: none outside none;margin:0px;padding:0px 20px;display:none;">';
							}
							
							addresslist += '<li style="line-height: 25px;"><a onclick="selectAddress(\'' + prefname + '\', \'' + addr1 + '\', \'' + postcd + '\');">[' + postcd + ']&nbsp;' + prefname + '&nbsp;' + addr1 + addr1ext + '</a></li>';
							
						});
						
						list += addresslist;
						list += '</div>';
						
						$('#searchMessage').after(list);
						
						// �ŏ���index�̃��X�g��\��
						$('#addrList_1').show('fast');
						
						$('#searchClose').show();
					}
				} else {
					$('#searchMessage').text('�Y������Z�������݂��܂���B');
					$('#searchClose').show();
					return ;
				}
				
				// �Z���N�g�{�b�N�X�͔�\����
				$('#prefSelectBlock').hide();
				$('#citySelectBlock').hide();
			}, 
			complete:function(xhr, textStatus) {
				searching = false;
			}, 
			error:function(xhr, textStatus, errorThrown) {
				$('#searchMessage').text('�������܂����A���΂炭�o���Ă��猟�����Ă��������B');
				$('#searchClose').show();
			}
		});
	});
	
});

