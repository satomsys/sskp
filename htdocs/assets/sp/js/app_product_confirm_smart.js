function nextPage(mode) {
	// ���i�I��or�v���[���g�i�I��
	if (mode == 0) {
		$('#mode').val('back');
		$('#productConfirmForm').submit();
		return;
	}

	// ���͂���or�����m�F���
	if (mode == 1) {
		$('#mode').val('next');
		$('#productConfirmForm').submit();
	}
}

function confirmPage() {
	var method = $("input[name='ordering_method']:checked").val();
	if (method == '1') {
		if (sjisKanjiCheck('NOTE', '�z���ɂ��Ă̂��v�]') == false) {
			return false;
		}
	}

	var absence = $("select[name='ABSENCE'] option:selected").val();
	if (isDaibiki == false || absence == '0') {
		return $('#productConfirmForm').submit();
	} else {
		appCommon.showConfirm('��������ł��x���̏ꍇ�A���I�ђ����Ă��邲�s�ݎ��̑Ή��͖����ɂȂ�܂��B��낵���ł���', '', function(result) {
			if (result) {
				return $('#productConfirmForm').submit();
			}
		});
	}

	return false;
}