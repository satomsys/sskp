function nextPage(mode) {
	// �x�����@�I��
	if (mode == 0) {
		$('#mode').val('back');
		$('#giftOrderConfirmForm').submit();
		return;
	}

	// �����̊m���
	if (mode == 1) {
		$('#mode').val('next');
		$('#giftOrderConfirmForm').submit();
	}
}