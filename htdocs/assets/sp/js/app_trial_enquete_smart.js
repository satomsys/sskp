function nextPage(mode) {
	// 戻る
	if (mode == 0) {
		$('#mode').val('back');
		$('#trialEnqueteForm').submit();
	}
	// 確認画面
	if (mode == 1) {
		$('#mode').val('next');
		$('#trialEnqueteForm').submit();
	}
	// 送信
	if (mode == 2) {
		$('#mode').val('send');
		$('#trialEnqueteForm').submit();
	}
}

