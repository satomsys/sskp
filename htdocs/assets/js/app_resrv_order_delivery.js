function updateDays() {
	// select����option�����ׂč폜
	$('#DLV_DAY option').remove();
	
	var delivClass = $("input[name='DELIVCLASS']:checked").val();
	if (delivClass == undefined) {
		return false;
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

	$('#DLV_TIME').change();

	if ($('#DLV_TIME').children().length > 1) {
		$('#warn-time').css('display', 'none');
	} else {
		$('#warn-time').css('display', 'block');
	}
}

$(document).ready(function() {
	
	// �߂�{�^��
	$('#backButton').one('click', function() {
		$('#mode').val('back');
		$('#deliveryForm').submit();
	});
	
	// ���փ{�^��
	$('#nextButton').on('click', function() {
		var checklist = {'ADRS_2':'���Z��(�Ԓn�ȍ~)', 'NOTE':'�z���ɂ��Ă̂��v�]'}; 
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

	// �z������
	$(window).load(function() {
		if (typeof selectedTime !== 'undefined') {
			$('#DLV_TIME').val('0');
			$("#DLV_TIME option").each(function(i) {
				// �I��l��option�ɂ���΃Z�b�g
				if ($(this).val() == selectedTime) {
					$('#DLV_TIME').val(selectedTime);
				}
			});
		}
		$('#DLV_TIME').change();
	});
});

