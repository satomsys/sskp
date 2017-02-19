// 簡単注文可能な場合に必要なJS処理

// 希望日のリストを生成する
function updateTimes() {
	// 指定なしのoptionを保持
	var firstOptaion = $('#DLV_TIME option:first-child');
	// select内のoptionをすべて削除
	$('#DLV_TIME option').remove();
	// 指定なしを戻す
	$('#DLV_TIME').append(firstOptaion);

	var times = dateJson[1];
	var timeflg = dateJson[2];

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
			if (sjisKanjiCheck('NOTE', '配送についてのご要望') == false) {
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
	         confirmDialog.content('<div><div class="warn-block01"><ul class="warn-list01"><li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>代金引換でお支払の場合、お選び頂いているご不在時の対応は無効になります。よろしいですか</li></ul></div><div class="modal-confirm-button-block01"><div class="primary"><span class="button-box01 button-thick button-width-fixed01 button-priority-high"><a href="#" class="button-anchor button-ok">はい</a></span></div><div class="secondary"><span class="button-box01 button-thick button-width-fixed01 button-priority-medium"><a href="#" class="button-anchor button-cancel">いいえ</a></span></div></div></div>');
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
				// 選択値がoptionにあればセット
				if ($(this).val() == selectedTime) {
					$('#DLV_TIME').val(selectedTime);
				}
			});
		}
		$('#DLV_TIME').change();
	});
	updateTimes();
});

