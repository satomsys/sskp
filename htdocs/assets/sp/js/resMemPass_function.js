function fieldCheck(login_hidden) {

	var inKAINPW_CHG = document.chg.KAINPW_CHG.value;
	var inKAINPW_CHG2 = document.chg.KAINPW_CHG2.value;

	if(login_hidden!=true){
		document.frm.KAINPW.value = "";
	}

	if(inKAINPW_CHG!=""){
		inKAINPW_CHG = trim(inKAINPW_CHG);
	}

	if(inKAINPW_CHG2!=""){
		inKAINPW_CHG2 = trim(inKAINPW_CHG2);
	}

	if (inKAINPW_CHG.length == 0){
		errMsg = "���V�����p�X���[�h����͂��Ă�������";
		$('#errResPW').html(errMsg).show();
		location.href="#pos_resist";
		return false;
	}

	if (inKAINPW_CHG2.length ==0 ){
		errMsg = "���V�����p�X���[�h�i�m�F�p�j����͂��Ă�������";
		$('#errResPW').html(errMsg).show();
		location.href="#pos_resist";
		return false;
	}

	if(PWFormatCheck(inKAINPW_CHG) == false){
		errMsg = "���V�����p�X���[�h�ɂ́A8�����ȏ�12�����ȉ��̔��p�p�����̑g�ݍ��킹����͂��Ă�������";
		document.chg.KAINPW_CHG.value = '';
		document.chg.KAINPW_CHG2.value = '';
		$('#errResPW').html(errMsg).show();
		location.href="#pos_resist";
		return false;
	}

	for (i = 1; i < inKAINPW_CHG.length; i ++) {
		if (inKAINPW_CHG.charAt(i - 1) != inKAINPW_CHG.charAt(i)) {
			break;
		}
		if (i == inKAINPW_CHG.length - 1) {
			errMsg = "���p�X���[�h�ɓ��������̌J��Ԃ��͂��g�����������܂���";
			document.chg.KAINPW_CHG.value = '';
			document.chg.KAINPW_CHG2.value = '';
			$('#errResPW').html(errMsg).show();
			location.href="#pos_resist";
			return false;
		}
	}


	if(inKAINPW_CHG != inKAINPW_CHG2){
		errMsg = "���V�����p�X���[�h�ƐV�����p�X���[�h�i�m�F�p�j���قȂ�܂�";
		document.chg.KAINPW_CHG.value = '';
		document.chg.KAINPW_CHG2.value = '';
		$('#errResPW').html(errMsg).show();
		location.href="#pos_resist";
		return false;
	}
	$('#errResPW').hide();

	document.chg.action='resMemPass_form.html';
	document.chg.device_print.value = getDevicePrint();
	return oneSubmit(document.chg);
}

function fieldCheck2() {


	document.chg.KAINPW_CHG.value = "";
	document.chg.KAINPW_CHG2.value = "";

	var inKAINPW = document.frm.KAINPW.value;


	if(inKAINPW!=""){
		inKAINPW		 = trim(inKAINPW);
	}

	if(inKAINPW==""){
		errMsg = "�p�X���[�h����͂��Ă�������";
		$('#errLogin').html(errMsg).show();
		location.href="#pos_login";
		return false;
	}

	if(PWFormatCheck2(inKAINPW) == true){
		errMsg = "���p�X���[�h�ɂ́A1�����ȏ�12�����ȉ��̔��p�p��������͂��Ă�������";
		document.frm.KAINPW.value = '';
		$('#errLogin').html(errMsg).show();
		location.href="#pos_login";
		return false;
	}
	document.chg.action='resMemPass_form.html';
	document.frm.device_print.value = getDevicePrint();
	return oneSubmit(document.frm);
}
