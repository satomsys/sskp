/**
 * jQuery Config for step5fix
 * Site : �ďt�ِ��� �����t���[
 * Target : �m�F��ʐ�p
 */

//$(function() {
//    checkPossibleGoToNext ();
//    //�ҏW�t�H�[���̕\��
//    //--���͂���
//    $("#edt_send_date_day").click( function(){
//       $(this).hide();
////       $("#edt_send_date_time").hide();
////       $("#txt_send_date_day").hide();
//       $("#up_absence").show();
//       $("select#send_date_day").show();
//       $("#upmode1").show();
//       return false;
//    });
//
//    //--���͂�����
//    $("#edt_send_date_time").click( function(){
//       $(this).hide();
//       $("#txt_send_date_time").hide();
//       $("select#send_date_time").show();
//       $("#upmode1").show();
//       return false;
//    });
//
//	//--���͂����ӏ��
//	$("#edt_caution").click( function(){
//       $(this).hide();
//       $("#txt_caution").hide();
//       $("#up_absence").show();
//       $("#upmode1").show();
//       return false;
//    });
//
//    //--�z���ɂ��ẴR�����g
//    $("#edt_send_comment").click( function(){
//       $(this).hide();
//       $("#txt_send_comment").hide();
//       $("#send_comment").show();
//       $("#upmode2").show();
//       return false;
//    });
//
//});


// ���֐��Q =========================================================================

/*
 * �֐� : checkPossibleGoToNext()
 * ���̉�ʂɐi�߂邩�`�F�b�N�i�͂����I�����Ă��邩�̔��f�̂݁j
 */
function checkPossibleGoToNext () {
	var outtelFlg = false;
	var myMsg;
	var element = document.getElementsByName('outTel');

	for(i = 0; i < element.length; i++){ //���W�I�{�^�����X�L����
		if(element[i].checked) {
			outtelFlg = true;
			break;
		}
	}
	if (outtelFlg) {
		$(".LinkNext a").removeClass("Unavailable");
		//�C�x���g�n���h�����폜
		$(".LinkNext a").unbind("click");
		return false;
	}else{
		if(0 < $("#OutTel").size()){
			$(".LinkNext a").addClass("Unavailable");
			//�C�x���g�n���h�����폜
			$(".LinkNext a").unbind("click");
			//�C�x���g�n���h�����Ē�`
			$(".LinkNext a").click( function(){
				return false;
			});
		}
	}
}

/*
 * �֐� : outtelChk()
 */
function outtelChk() {
	var outtelFlg = false;
	var myMsg;
	var element = document.getElementsByName('outTel');

	for(i = 0; i < element.length; i++){ //���W�I�{�^�����X�L����
		if(element[i].checked) {
			outtelFlg = true;
			break;
		}
	}
	if (outtelFlg) {
		$(".LinkNext a").removeClass("Unavailable");
		//�C�x���g�n���h�����폜
		$(".LinkNext a").unbind("click");;
	}else{
		$(".LinkNext a").addClass("Unavailable");
		//�C�x���g�n���h�����폜
		$(".LinkNext a").unbind("click");
	}
}

/**
 * �S�p�ł��邩���`�F�b�N���܂��B
 *
 * @param �`�F�b�N����l
 * @return ture : �S�p / flase : �S�p�ȊO
 */
function checkIsZenkaku(value) {
	for (var i = 0; i < value.length; ++i) {
		var c = value.charCodeAt(i);
		//  ���p�J�^�J�i�͕s����
		if (c < 256 || (c >= 0xff61 && c <= 0xff9f)) {
			return false;
		}
	}
	return true;
}

/**
 * ������̃o�C�g�����擾����B
 * �S�p��2�o�C�g�A���p��1�o�C�g�Ƃ��ăJ�E���g���܂��B
 *
 * @param �o�C�g���擾����l
 * @return �擾�����o�C�g��
 */
function getByteCount(value) {
	var count = 0;
	for ( var i = 0; i < value.length; ++i ) {
		var sub = value.substring(i, i + 1);
		//�S�p�̏ꍇ�Q�o�C�g�ǉ��B
		if( checkIsZenkaku(sub) ){
			count += 2;
		} else {
			count += 1;
		}
	}
	return count;
}

function dispMessage(){
	var counter = $("#NOTE").val().length;
	var value = $("#NOTE").val();
	if(getByteCount(value) > 370){
		jAlert('�u���x������z���ɂ��Ă̂��v�]�v�͑S�p185�����ȓ��ł����͂��������B(���݂̓��͕������F' + counter + '����)','');
		return false;
	}
	return true;
}