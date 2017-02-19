function updateDays() {
	// select内のoptionをすべて削除
	$('#DLV_DAY option').remove();
	
	var delivClass = $("input[name='DELIVCLASS']:checked").val();
	if (delivClass == undefined) {
		return false;
	}
	var weekNm = "日月火水木金土";
	var days = dateJson[delivClass][0];
	for (var i in days) {
		var dt = new Date(days[i].substr(0, 4), days[i].substr(4, 2) - 1, days[i].substr(6 , 2));
        var text = days[i].substr(4, 2) +  "月" + days[i].substr(6 , 2) + "日（" + weekNm.substr(dt.getDay(), 1) + "）";
		var option = '<option value="' + days[i] + '">' + text + '</option>';
		$('#DLV_DAY').append(option);
	}
	
	if (typeof selectedDate !== 'undefined') {
		$('#DLV_DAY').val(selectedDate);
		selectedDate = '0';	// 初回ロード以降の再生成時は0
		if ($('#DLV_DAY option:selected').size() == 0) {
			$('#DLV_DAY').val($('#DLV_DAY option:first-child').val());
		}
	}
	$('#DLV_DAY').change();

	if ($('#DLV_DAY').children().length > 1) {
		$('#warn-day').css('display', 'none');
	} else {
		$('#warn-day').css('display', 'block');
	}
}

function updateTimes() {
	// 指定なしのoptionを保持
	var firstOptaion = $('#DLV_TIME option:first-child');
	// select内のoptionをすべて削除
	$('#DLV_TIME option').remove();
	// 指定なしを戻す
	$('#DLV_TIME').append(firstOptaion);
	
	var delivClass = $("input[name='DELIVCLASS']:checked").val();
	if (delivClass == undefined) {
		return false;
	}

	var times = dateJson[delivClass][1];
	var timeflg = dateJson[delivClass][2];

	// 最短日指定でない場合は時間指定チェックは不要
	if ($('#DLV_DAY').prop("selectedIndex") != 1) {
		timeflg = 0;
	}
	
	for (key in times) {
		// 時間指定不可(9)のときはforに入らないので考慮不要
		if (parseInt(key) < timeflg) {
			// 時間指定フラグの値より小さい場合はoptionに入れない
			continue;
		}

		var option = '<option value="' + key + '">' + times[key] + '</option>';
		$('#DLV_TIME').append(option);
	}

	$('#DLV_TIME').change();

	if ($('#DLV_TIME').children().length > 1) {
		$('#warn-time').css('display', 'none');
	} else {
		$('#warn-time').css('display', 'block');
	}
}

$(document).ready(function() {
	
	// 戻るボタン
	$('#backButton').one('click', function() {
		$('#mode').val('back');
		$('#deliveryForm').submit();
	});
	
	// 次へボタン
	$('#nextButton').on('click', function() {
		var checklist = {'ADRS_2':'ご住所(番地以降)', 'NOTE':'配送についてのご要望'}; 
		for (key in checklist) {
			if (sjisKanjiCheck(key, checklist[key]) == false) {
				return;
			}
		}

		$('.tab-item').each(function() {
			if ($(this).hasClass('tab-stay')) {
				var target = $(this).attr('data-tab-target');
				var num = target.replace('tab-content', '');
				
				if (num == '1') {
					$('#FOREIGN').val('1');
				}
			}
		});
		
		$('#mode').val('next');
		$('#deliveryForm').submit();
	});
	
	$('input[name="DELIVCLASS"]').on('change', function() {
		$('#DLV_TIME').val('0');
		updateDays();
	});

	$('#DLV_DAY').on('change', function(event) {
		updateTimes();
	});

	$('.panel-selectable01[data-selectable-group="deliver_to"] .selectable-header-block .input-type-radio').on('change', function(e) {
		if (e.target.id === 'addressPanel') {
            setTimeout('updateDays()', 500);
        }
	});
	
	$('#warn-day').css('display', 'none');
	$('#warn-time').css('display', 'none');
	updateDays();

	// 配送日時
	$(window).load(function() {
		if (typeof selectedTime !== 'undefined') {
			$('#DLV_TIME').val('0');
			$("#DLV_TIME option").each(function(i) {
				// 選択値がoptionにあればセット
				if ($(this).val() == selectedTime) {
					$('#DLV_TIME').val(selectedTime);
				}
			});
		}
		$('#DLV_TIME').change();
	});
});

