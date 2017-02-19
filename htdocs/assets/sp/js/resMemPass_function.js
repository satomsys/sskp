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
		errMsg = "※新しいパスワードを入力してください";
		$('#errResPW').html(errMsg).show();
		location.href="#pos_resist";
		return false;
	}

	if (inKAINPW_CHG2.length ==0 ){
		errMsg = "※新しいパスワード（確認用）を入力してください";
		$('#errResPW').html(errMsg).show();
		location.href="#pos_resist";
		return false;
	}

	if(PWFormatCheck(inKAINPW_CHG) == false){
		errMsg = "※新しいパスワードには、8文字以上12文字以下の半角英数字の組み合わせを入力してください";
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
			errMsg = "※パスワードに同じ文字の繰り返しはお使いいただけません";
			document.chg.KAINPW_CHG.value = '';
			document.chg.KAINPW_CHG2.value = '';
			$('#errResPW').html(errMsg).show();
			location.href="#pos_resist";
			return false;
		}
	}


	if(inKAINPW_CHG != inKAINPW_CHG2){
		errMsg = "※新しいパスワードと新しいパスワード（確認用）が異なります";
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
		errMsg = "パスワードを入力してください";
		$('#errLogin').html(errMsg).show();
		location.href="#pos_login";
		return false;
	}

	if(PWFormatCheck2(inKAINPW) == true){
		errMsg = "※パスワードには、1文字以上12文字以下の半角英数字を入力してください";
		document.frm.KAINPW.value = '';
		$('#errLogin').html(errMsg).show();
		location.href="#pos_login";
		return false;
	}
	document.chg.action='resMemPass_form.html';
	document.frm.device_print.value = getDevicePrint();
	return oneSubmit(document.frm);
}
