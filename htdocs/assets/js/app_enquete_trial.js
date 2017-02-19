$(document).ready(function() {
	// 次へボタン
	$('#nextButton').on('click', function() {
		var checklist = {'voice':'実感のお声', 'fname':'お名前'}; 
		for (key in checklist) {
			if (sjisKanjiCheck(key, checklist[key]) == false) {
				return;
			}
		}

		$('#mode').val('next');
		$('#trialEnqueteForm').submit();
	});
	// 戻るボタン
	$('#backButton').one('click', function() {
		$('#mode').val('back');
		$('#trialEnqueteForm').submit();
	});
	// 送信ボタン
	$('#sendButton').one('click', function() {
		$('#mode').val('send');
		$('#trialEnqueteForm').submit();
	});
});