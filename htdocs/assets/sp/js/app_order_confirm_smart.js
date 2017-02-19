function nextPage(mode) {
	// x•¥•û–@‘I‘ğ
	if (mode == 0) {
		$('#mode').val('back');
		$('#orderConfirmForm').submit();
		return;
	}

	// ’•¶‚ÌŠm’è‚Ö
	if (mode == 1) {
		$('#mode').val('next');
		$('#orderConfirmForm').submit();
	}
}