function nextPage(mode) {
	// �߂�
	if (mode == 0) {
		$('#mode').val('back');
		$('#trialEnqueteForm').submit();
	}
	// �m�F���
	if (mode == 1) {
		$('#mode').val('next');
		$('#trialEnqueteForm').submit();
	}
	// ���M
	if (mode == 2) {
		$('#mode').val('send');
		$('#trialEnqueteForm').submit();
	}
}

