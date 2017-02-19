function nextPage(mode) {
	// 商品選択orプレゼント品選択
	if (mode == 0) {
		$('#mode').val('back');
		$('#productConfirmForm').submit();
		return;
	}

	// お届け先or注文確認画面
	if (mode == 1) {
		$('#mode').val('next');
		$('#productConfirmForm').submit();
	}
}

function confirmPage() {
	var method = $("input[name='ordering_method']:checked").val();
	if (method == '1') {
		if (sjisKanjiCheck('NOTE', '配送についてのご要望') == false) {
			return false;
		}
	}

	var absence = $("select[name='ABSENCE'] option:selected").val();
	if (isDaibiki == false || absence == '0') {
		return $('#productConfirmForm').submit();
	} else {
		appCommon.showConfirm('代金引換でお支払の場合、お選び頂いているご不在時の対応は無効になります。よろしいですか', '', function(result) {
			if (result) {
				return $('#productConfirmForm').submit();
			}
		});
	}

	return false;
}