// �ȒP�����\�ȏꍇ�ɕK�v��JS����

// ��]���̃��X�g�𐶐�����
function updateTimes() {
	// �w��Ȃ���option��ێ�
	var firstOptaion = $('#DLV_TIME option:first-child');
	// select����option�����ׂč폜
	$('#DLV_TIME option').remove();
	// �w��Ȃ���߂�
	$('#DLV_TIME').append(firstOptaion);

	var times = dateJson[1];
	var timeflg = dateJson[2];

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

	$('#DLV_TIME').val('0');
	$('#DLV_TIME').change();
	if ($('#DLV_TIME').children().length > 1) {
		$('#warn-time').css('display', 'none');
	} else {
		$('#warn-time').css('display', 'block');
	}
}

$(document).ready(function() {
	$('#next-page-button').on('click', function(e) {
		var method = $("input[name='ordering_method']:checked").val();
		if (method == '1') {
			if (sjisKanjiCheck('NOTE', '�z���ɂ��Ă̂��v�]') == false) {
				return false;
			}
		}

		if (isDaibiki == true) {
	         var absence = $("select[name='ABSENCE'] option:selected").val();
	         if (method != '1' || absence == '0') {
	            e.preventDefault();
	            return $('#confirmForm').submit();
	         }
	         
	         var Confirm01 = require('components/modal_confirm01');
	         var confirmDialog = new Confirm01();
	         confirmDialog.content('<div><div class="warn-block01"><ul class="warn-list01"><li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>��������ł��x���̏ꍇ�A���I�ђ����Ă��邲�s�ݎ��̑Ή��͖����ɂȂ�܂��B��낵���ł���</li></ul></div><div class="modal-confirm-button-block01"><div class="primary"><span class="button-box01 button-thick button-width-fixed01 button-priority-high"><a href="#" class="button-anchor button-ok">�͂�</a></span></div><div class="secondary"><span class="button-box01 button-thick button-width-fixed01 button-priority-medium"><a href="#" class="button-anchor button-cancel">������</a></span></div></div></div>');
	         confirmDialog.$el.find('.button-cancel').on('click', function(e) {
	            e.preventDefault();
	            return confirmDialog.hide();
	         });
	         confirmDialog.$el.find('.button-ok').on('click', function(e) {
	            e.preventDefault();
	            confirmDialog.hide();
	            return $('#confirmForm').submit();
	         });
	         confirmDialog.show();
	         
	         return false;
		}
	});
	
	$('#DLV_DAY').on('change', function(event) {
		updateTimes();
	});

	$('#warn-time').css('display', 'none');
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
	updateTimes();
});

