/**
 * jQuery Config for step5fix
 * Site : 再春館製薬所 注文フロー
 * Target : 確認画面専用
 */

//$(function() {
//    checkPossibleGoToNext ();
//    //編集フォームの表示
//    //--お届け日
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
//    //--お届け時間
//    $("#edt_send_date_time").click( function(){
//       $(this).hide();
//       $("#txt_send_date_time").hide();
//       $("select#send_date_time").show();
//       $("#upmode1").show();
//       return false;
//    });
//
//	//--お届け注意情報
//	$("#edt_caution").click( function(){
//       $(this).hide();
//       $("#txt_caution").hide();
//       $("#up_absence").show();
//       $("#upmode1").show();
//       return false;
//    });
//
//    //--配送についてのコメント
//    $("#edt_send_comment").click( function(){
//       $(this).hide();
//       $("#txt_send_comment").hide();
//       $("#send_comment").show();
//       $("#upmode2").show();
//       return false;
//    });
//
//});


// ▼関数群 =========================================================================

/*
 * 関数 : checkPossibleGoToNext()
 * 次の画面に進めるかチェック（届け先を選択しているかの判断のみ）
 */
function checkPossibleGoToNext () {
	var outtelFlg = false;
	var myMsg;
	var element = document.getElementsByName('outTel');

	for(i = 0; i < element.length; i++){ //ラジオボタンをスキャン
		if(element[i].checked) {
			outtelFlg = true;
			break;
		}
	}
	if (outtelFlg) {
		$(".LinkNext a").removeClass("Unavailable");
		//イベントハンドラを削除
		$(".LinkNext a").unbind("click");
		return false;
	}else{
		if(0 < $("#OutTel").size()){
			$(".LinkNext a").addClass("Unavailable");
			//イベントハンドラを削除
			$(".LinkNext a").unbind("click");
			//イベントハンドラを再定義
			$(".LinkNext a").click( function(){
				return false;
			});
		}
	}
}

/*
 * 関数 : outtelChk()
 */
function outtelChk() {
	var outtelFlg = false;
	var myMsg;
	var element = document.getElementsByName('outTel');

	for(i = 0; i < element.length; i++){ //ラジオボタンをスキャン
		if(element[i].checked) {
			outtelFlg = true;
			break;
		}
	}
	if (outtelFlg) {
		$(".LinkNext a").removeClass("Unavailable");
		//イベントハンドラを削除
		$(".LinkNext a").unbind("click");;
	}else{
		$(".LinkNext a").addClass("Unavailable");
		//イベントハンドラを削除
		$(".LinkNext a").unbind("click");
	}
}

/**
 * 全角であるかをチェックします。
 *
 * @param チェックする値
 * @return ture : 全角 / flase : 全角以外
 */
function checkIsZenkaku(value) {
	for (var i = 0; i < value.length; ++i) {
		var c = value.charCodeAt(i);
		//  半角カタカナは不許可
		if (c < 256 || (c >= 0xff61 && c <= 0xff9f)) {
			return false;
		}
	}
	return true;
}

/**
 * 文字列のバイト数を取得する。
 * 全角を2バイト、半角を1バイトとしてカウントします。
 *
 * @param バイトを取得する値
 * @return 取得したバイト数
 */
function getByteCount(value) {
	var count = 0;
	for ( var i = 0; i < value.length; ++i ) {
		var sub = value.substring(i, i + 1);
		//全角の場合２バイト追加。
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
		jAlert('「お支払いや配送についてのご要望」は全角185文字以内でご入力ください。(現在の入力文字数：' + counter + '文字)','');
		return false;
	}
	return true;
}