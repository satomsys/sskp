function nextPage(mode) {
	// 支払方法選択
	if (mode == 0) {
		$('#mode').val('back');
		$('#orderConfirmForm').submit();
		return;
	}

	// 注文の確定へ
	if (mode == 1) {
		$('#mode').val('next');
		$('#orderConfirmForm').submit();
	}
}