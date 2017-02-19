function updateDays() {
	// �w��Ȃ���option��ێ�
	var firstOptaion = $('#DELIVERY_DATE option:first-child');
	// select����option�����ׂč폜
	$('#DELIVERY_DATE option').remove();
	// �w��Ȃ���߂�
	$('#DELIVERY_DATE').append(firstOptaion);
	
	var delivKbn = $("input[name='DELIVERY_KBN']:checked").val();
	if (delivKbn == undefined) {
		return false;
	}
	var weekNm = "�����ΐ��؋��y";
	var days = dateJson[delivKbn][0];
	for (var i in days) {
		var dt = new Date(days[i].substr(0, 4), days[i].substr(4, 2) - 1, days[i].substr(6 , 2));
        var text = days[i].substr(4, 2) +  "��" + days[i].substr(6 , 2) + "���i" + weekNm.substr(dt.getDay(), 1) + "�j";
		var option = '<option value="' + days[i] + '">' + text + '</option>';
		$('#DELIVERY_DATE').append(option);
	}
	
	if (typeof selectedDate !== 'undefined') {
		$('#DELIVERY_DATE').val(selectedDate);
		selectedDate = '0';	// ���񃍁[�h�ȍ~�̍Đ�������0
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
	// �w��Ȃ���option��ێ�
	var firstOptaion = $('#DELIVERY_TIME option:first-child');
	// select����option�����ׂč폜
	$('#DELIVERY_TIME option').remove();
	// �w��Ȃ���߂�
	$('#DELIVERY_TIME').append(firstOptaion);
	
	var delivKbn = $("input[name='DELIVERY_KBN']:checked").val();
	if (delivKbn == undefined) {
		return false;
	}

	var times = dateJson[delivKbn][1];
	var timeflg = dateJson[delivKbn][2];

	// �ŒZ���w��łȂ��ꍇ�͎��Ԏw��`�F�b�N�͕s�v
	if ($('#DELIVERY_DATE').prop("selectedIndex") != 1) {
		timeflg = 0;
	}
	
	for (key in times) {
		// ���Ԏw��s��(9)�̂Ƃ���for�ɓ���Ȃ��̂ōl���s�v
		if (parseInt(key) < timeflg) {
			// ���Ԏw��t���O�̒l��菬�����ꍇ��option�ɓ���Ȃ�
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
	
	// �߂�{�^��
	$('#backButton').one('click', function() {
		$("input[name='mode']").val('back');
		$('#deliveryForm').submit();
	});
	
	// ���փ{�^��
	$('#nextButton').on('click', function() {
		var checklist = {
			'NAMEKANJI_SEI':'������ɂȂ���̂����O(��)', 'NAMEKANJI_MEI':'������ɂȂ���̂����O(��)', 
			'NAMEKANA_SEI':'������ɂȂ���̂����O(�Z�C)', 'NAMEKANA_MEI':'������ɂȂ���̂����O(���C)', 
			'ADRS_2':'���Z��(�Ԓn�ȍ~)', 
			'GIFT_SENDER_NAME_SEI':'����喼(��)', 'GIFT_SENDER_NAME_MEI':'����喼(��)', 
			'MSG_ADDRESS_NAME':'���b�Z�[�W�J�[�h�F����', 'MSG_TEXT':'���b�Z�[�W�J�[�h�F���b�Z�[�W',
			'MSG_SENDER_NAME':'���b�Z�[�W�J�[�h�F�����', 'NOTE':'�z���ɂ��Ă̂��v�]'}; 
		for (key in checklist) {
			if (sjisKanjiCheck(key, checklist[key]) == false) {
				return;
			}
		}

		$("input[name='mode']").val('next');
		$('#deliveryForm').submit();
	});
	
	// ���͂���̐؂�ւ��Ŕz�������̍��ڂ�ύX����
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

	// �z������
	$(window).load(function() {
		if (typeof selectedTime !== 'undefined') {
			$('#DELIVERY_TIME').val('0');
			$("#DELIVERY_TIME option").each(function(i) {
				// �I��l��option�ɂ���΃Z�b�g
				if ($(this).val() == selectedTime) {
					$('#DELIVERY_TIME').val(selectedTime);
				}
			});
		}
		$('#DELIVERY_TIME').change();
	});

});

