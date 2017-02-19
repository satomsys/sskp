function nextPage(mode) {
	// x•¥•û–@‘I‘ğ
	if (mode == 0) {
		$('#mode').val('back');
		$('#giftOrderConfirmForm').submit();
		return;
	}

	// ’•¶‚ÌŠm’è‚Ö
	if (mode == 1) {
		$('#mode').val('next');
		$('#giftOrderConfirmForm').submit();
	}
}