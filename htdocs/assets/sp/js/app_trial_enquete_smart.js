function nextPage(mode) {
	// –ß‚é
	if (mode == 0) {
		$('#mode').val('back');
		$('#trialEnqueteForm').submit();
	}
	// Šm”F‰æ–Ê
	if (mode == 1) {
		$('#mode').val('next');
		$('#trialEnqueteForm').submit();
	}
	// ‘—M
	if (mode == 2) {
		$('#mode').val('send');
		$('#trialEnqueteForm').submit();
	}
}

