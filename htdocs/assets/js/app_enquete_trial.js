$(document).ready(function() {
	// ���փ{�^��
	$('#nextButton').on('click', function() {
		var checklist = {'voice':'�����̂���', 'fname':'�����O'}; 
		for (key in checklist) {
			if (sjisKanjiCheck(key, checklist[key]) == false) {
				return;
			}
		}

		$('#mode').val('next');
		$('#trialEnqueteForm').submit();
	});
	// �߂�{�^��
	$('#backButton').one('click', function() {
		$('#mode').val('back');
		$('#trialEnqueteForm').submit();
	});
	// ���M�{�^��
	$('#sendButton').one('click', function() {
		$('#mode').val('send');
		$('#trialEnqueteForm').submit();
	});
});