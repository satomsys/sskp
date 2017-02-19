function updateDays() {
	// 指定なしのoptionを保持
	var firstOptaion = $('#DELIVERY_DATE option:first-child');
	// select内のoptionをすべて削除
	$('#DELIVERY_DATE option').remove();
	// 指定なしを戻す
	$('#DELIVERY_DATE').append(firstOptaion);
	
	var delivKbn = $("input[name='DELIVERY_KBN']:checked").val();
	if (delivKbn == undefined) {
		return false;
	}
	var weekNm = "日月火水木金土";
	var days = dateJson[delivKbn][0];
	for (var i in days) {
		var dt = new Date(days[i].substr(0, 4), days[i].substr(4, 2) - 1, days[i].substr(6 , 2));
        var text = days[i].substr(4, 2) +  "月" + days[i].substr(6 , 2) + "日（" + weekNm.substr(dt.getDay(), 1) + "）";
		var option = '<option value="' + days[i] + '">' + text + '</option>';
		$('#DELIVERY_DATE').append(option);
	}
	
	if (typeof selectedDate !== 'undefined') {
		$('#DELIVERY_DATE').val(selectedDate);
		selectedDate = '0';	// 初回ロード以降の再生成時は0
		if ($('#DELIVERY_DATE option:selected').size() == 0) {
			$('#DELIVERY_DATE').val($('#DELIVERY_DATE option:first-child').val());
		}
	}
	$('#DELIVERY_DATE').change();

	if ($('#DELIVERY_DATE').children().length > 1) {
		$('#warn-date').css('display', 'none');
	} else {
		$('#warn-date').css('display', 'block');
	}
}

function updateTimes() {
	// 指定なしのoptionを保持
	var firstOptaion = $('#DELIVERY_TIME option:first-child');
	// select内のoptionをすべて削除
	$('#DELIVERY_TIME option').remove();
	// 指定なしを戻す
	$('#DELIVERY_TIME').append(firstOptaion);
	
	var delivKbn = $("input[name='DELIVERY_KBN']:checked").val();
	if (delivKbn == undefined) {
		return false;
	}

	var times = dateJson[delivKbn][1];
	var timeflg = dateJson[delivKbn][2];

	// 最短日指定でない場合は時間指定チェックは不要
	if ($('#DELIVERY_DATE').prop("selectedIndex") != 1) {
		timeflg = 0;
	}
	
	for (key in times) {
		// 時間指定不可(9)のときはforに入らないので考慮不要
		if (parseInt(key) < timeflg) {
			// 時間指定フラグの値より小さい場合はoptionに入れない
			continue;
		}

		var option = '<option value="' + key + '">' + times[key] + '</option>';
		$('#DELIVERY_TIME').append(option);
	}

	$('#DELIVERY_TIME').change();

	if ($('#DELIVERY_TIME').children().length > 1) {
		$('#warn-time').css('display', 'none');
	} else {
		$('#warn-time').css('display', 'block');
	}
}

$(document).ready(function() {
	
	// 戻るボタン
	$('#backButton').one('click', function() {
		$("input[name='mode']").val('back');
		$('#deliveryForm').submit();
	});
	
	// 次へボタン
	$('#nextButton').on('click', function() {
		var checklist = {
			'NAMEKANJI_SEI':'お受取りになる方のお名前(姓)', 'NAMEKANJI_MEI':'お受取りになる方のお名前(名)', 
			'NAMEKANA_SEI':'お受取りになる方のお名前(セイ)', 'NAMEKANA_MEI':'お受取りになる方のお名前(メイ)', 
			'ADRS_2':'ご住所(番地以降)', 
			'GIFT_SENDER_NAME_SEI':'贈り主名(姓)', 'GIFT_SENDER_NAME_MEI':'贈り主名(名)', 
			'MSG_ADDRESS_NAME':'メッセージカード：宛名', 'MSG_TEXT':'メッセージカード：メッセージ',
			'MSG_SENDER_NAME':'メッセージカード：贈り主', 'NOTE':'配送についてのご要望'}; 
		for (key in checklist) {
			if (sjisKanjiCheck(key, checklist[key]) == false) {
				return;
			}
		}

		$("input[name='mode']").val('next');
		$('#deliveryForm').submit();
	});
	
	// お届け先の切り替えで配送日時の項目を変更する
	$("input[name='DELIVERY_KBN']").bind('change', function() {
		$('#DELIVERY_TIME').val('0');
		updateDays();
	});

	$('#DELIVERY_DATE').on('change', function(event) {
		updateTimes();
	});
	
	$('#warn-date').css('display', 'none');
	$('#warn-time').css('display', 'none');
	updateDays();

	// 配送日時
	$(window).load(function() {
		if (typeof selectedTime !== 'undefined') {
			$('#DELIVERY_TIME').val('0');
			$("#DELIVERY_TIME option").each(function(i) {
				// 選択値がoptionにあればセット
				if ($(this).val() == selectedTime) {
					$('#DELIVERY_TIME').val(selectedTime);
				}
			});
		}
		$('#DELIVERY_TIME').change();
	});

});

