$(document).ready(function() {
	$('#backButton').one('click', function() {
		$('#mode').val('back');
		$('#orderConfirmForm').submit();
	});

	$('#nextButton').on('click', function() {
		if (document.getElementById("IKUSEI_COMMENT") != null) {
			if (sjisKanjiCheck('IKUSEI_COMMENT', 'ご意見・ご感想') == false) {
					return false;
			}
		}

		$('#mode').val('next');
		$('#orderConfirmForm').submit();
	});
});
