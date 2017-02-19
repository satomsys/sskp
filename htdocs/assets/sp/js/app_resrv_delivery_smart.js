function updateDays() {
	// select����option�����ׂč폜
	$('#DLV_DAY option').remove();
	
	var delivClass = $("input[name='DELIVCLASS']:checked").val();
	if (delivClass == undefined) {
		return false;
	}
	if (delivClass == $('#r1').val()) {
		var registerd = $("input[name='REGISTERED']:checked").val();
		if (registerd == undefined) {
			return false;
		}
		delivClass = registerd;
	}

	var weekNm = "�����ΐ��؋��y";
	var days = dateJson[delivClass][0];
	for (var i in days) {
		var dt = new Date(days[i].substr(0, 4), days[i].substr(4, 2) - 1, days[i].substr(6 , 2));
        var text = days[i].substr(4, 2) +  "��" + days[i].substr(6 , 2) + "���i" + weekNm.substr(dt.getDay(), 1) + "�j";
		var option = '<option value="' + days[i] + '">' + text + '</option>';
		$('#DLV_DAY').append(option);
	}
	
	if (typeof selectedDate !== 'undefined') {
		$('#DLV_DAY').val(selectedDate);
		selectedDate = '0';	// ���񃍁[�h�ȍ~�̍Đ�������0
	}
	$('#DLV_DAY').change();

	if ($('#DLV_DAY').children().length > 1) {
		$('#warn-day').css('display', 'none');
	} else {
		$('#warn-day').css('display', 'block');
	}
}

function updateTimes() {
	// �w��Ȃ���option��ێ�
	var firstOptaion = $('#DLV_TIME option:first-child');
	// select����option�����ׂč폜
	$('#DLV_TIME option').remove();
	// �w��Ȃ���߂�
	$('#DLV_TIME').append(firstOptaion);
	
	var delivClass = $("input[name='DELIVCLASS']:checked").val();
	if (delivClass == undefined) {
		return false;
	}
	if (delivClass == $('#r1').val()) {
		var registerd = $("input[name='REGISTERED']:checked").val();
		if (registerd == undefined) {
			return false;
		}
		delivClass = registerd;
	}

	var times = dateJson[delivClass][1];
	var timeflg = dateJson[delivClass][2];

	// �ŒZ���w��łȂ��ꍇ�͎��Ԏw��`�F�b�N�͕s�v
	if ($('#DLV_DAY').prop("selectedIndex") != 1) {
		timeflg = 0;
	}
	
	for (key in times) {
		// ���Ԏw��s��(9)�̂Ƃ���for�ɓ���Ȃ��̂ōl���s�v
		if (parseInt(key) < timeflg) {
			// ���Ԏw��t���O�̒l��菬�����ꍇ��option�ɓ���Ȃ�
			continue;
		}

		var option = '<option value="' + key + '">' + times[key] + '</option>';
		$('#DLV_TIME').append(option);
	}
	if (typeof selectedTime !== 'undefined') {
		$('#DLV_TIME').val('0');
		$("#DLV_TIME option").each(function(i) {
			// �I��l��option�ɂ���΃Z�b�g
			if ($(this).val() == selectedTime) {
				$('#DLV_TIME').val(selectedTime);
			}
		});
		selectedTime = '0';	// ���񃍁[�h�ȍ~�̍Đ�������0
	}
	$('#DLV_TIME').change();

	if ($('#DLV_TIME').children().length > 1) {
		$('#warn-time').css('display', 'none');
	} else {
		$('#warn-time').css('display', 'block');
	}
}

function nextPage(mode) {
	// ���i�̊m�F��
	if (mode == 0) {
		$('#mode').val('back');
		$('#deliveryForm').submit();
		return;
	}

	// �x�������@�I��
	if (mode == 1) {
		var checklist = {'ADRS_2':'���Z��(�Ԓn�ȍ~)', 'NOTE':'�z���ɂ��Ă̂��v�]'}; 
		for (key in checklist) {
			if (sjisKanjiCheck(key, checklist[key]) == false) {
				return;
			}
		}

		var delivClass = $("input[name='DELIVCLASS']:checked").val();
		if (delivClass == $('#r1').val()) {
			var registerd = $("input[name='REGISTERED']:checked").val();
			if (registerd == undefined) {
				return false;
			}
			$('input[name="DELIVCLASS"]').val(registerd);
		} else if (delivClass == $('#r4').val()) {
			$('#FOREIGN').val('1');
		}
		
		$('#mode').val('next');
		$('#deliveryForm').submit();
	}
}

$(document).ready(function() {
	
	$('input[name="DELIVCLASS"]').on('change', function() {
		$('#DLV_TIME').val('0');
		updateDays();
	});
	$('input[name="REGISTERED"]').on('change', function() {
		$('#DLV_TIME').val('0');
		updateDays();
	});

	$('#DLV_DAY').on('change', function(event) {
		updateTimes();
	});
	
	$('#warn-day').css('display', 'none');
	$('#warn-time').css('display', 'none');
	updateDays();

});

