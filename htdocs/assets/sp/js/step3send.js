/**
 * jQuery Config for step5fix
 * Site : 再春館製薬所 注文フロー
 * Target : お届け先選択画面専用
 */

// ▼処理実行 =========================================================================

$(function() {

    checkPossibleGoToNext ();
    //届け先選択：全ての変更毎にチェック
    // メモ: change()はチェックされた時しか取れなかった。外れた時はイベントが取れなかったので全てのラジオで判定する。
    $("#SendAddress input[name='DELIVCLASS']").click( function(){
        changeAddress($(this));
    });
    //ページ表示時にも届け先のチェック
    $("#SendAddress input[name='DELIVCLASS']:checked").each( function(){
        changeAddress($(this));
    });


    //同梱物の内容のチップツールでの画像表示
    $("label.ToolTips").hover(
        function(){
            $(this).children(".ToolTipsBox").show();
        }
        ,
        function(){
            $(this).children(".ToolTipsBox").hide();
        }
    );

    // 2011/04/06 tazoe@econe WAO対応 海外発送対応(A-4607) IDを付加
    $("#country_td select").attr("id", "countryCd");
});


// ▼関数群 =========================================================================

/*
 * 関数 : changeAddress
 * 指定した範囲のIDのセレクトを１個増やす
 * in / elm : チェックされたラジオボタン
 */
function changeAddress ( elm ){

    if( elm.attr("checked") == true || elm.attr("checked") == "checked" ){
/*
        //コンビニ受取の場合
        if ( elm.attr("id") == "addressCon" ) {
            //表示：コンビニ店舗選択ボタン、コンビニ受取の注意事項
            //$("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").show();
            $("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").slideDown("fast");
        }
        else {
            //非表示：コンビニ店舗選択ボタン、コンビニ受取の注意事項
            //$("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").hide();
            $("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").slideUp("fast");
        }
*/
        //その他のお届け先指定の場合
        if ( elm.attr("id") == "addressOther" ) {
            //表示：追加住所フォーム
            //$("#addressOtherWrap, #OhterAddressFormBox").show();
            $("#addressOtherWrap, #OhterAddressFormBox").slideDown("fast");
            //$("#BtnAddOtherAddress").css({"display":"block"}).slideUp("5000");
            //$("#BtnAddOtherAddress").hide();
        }
        else {
            //非表示：追加住所フォーム
            //$("#addressOtherWrap, #OhterAddressFormBox").hide();
            $("#addressOtherWrap, #OhterAddressFormBox").slideUp("fast");
            //$("#BtnAddOtherAddress").show();
            //$("#BtnAddOtherAddress").css({"display":"block"}).slideDown("5000");
        }
        // 2011/04/06 tazoe@econe WAO対応 海外発送対応(A-4607)
        if (elm.attr("id") == "addressForeign") {
            // 表示：追加住所フォーム
            $("#addressOtherWrap, #ForeignAddressFormBox").slideDown("fast");
        } else {
            // 非表示：追加住所フォーム
            $("#addressOtherWrap, #ForeignAddressFormBox").slideUp("fast");
        }
    }
    checkPossibleGoToNext ();
}

/*
 * 関数 : checkPossibleGoToNext()
 * 次の画面に進めるかチェック（届け先を選択しているかの判断のみ）
 */
function checkPossibleGoToNext () {
    var myFlag = false;
    var myMsg;

    $("#SendAddress input[name='DELIVCLASS']:checked").each( function(){
/*

        //コンビニ受取
        if( $(this).attr("id") == "addressCon" ){
            msg = "受け取るコンビニを選択してください";
            myFlag = true;
        }
 */        //その他のお届け先指定の場合
        /*else */if( $(this).attr("id") == "addressOther" ){
            for(i = 0; i < document.frm.ADRS_CHANGE.length; i++){ //全てのラジオボタンをスキャン
				if(document.frm.ADRS_CHANGE[i].checked) {
				myFlag = true;
				break;
			}
	}
        }
        //海外住所の場合
        else if( $(this).attr("id") == "addressForeign" ){
            //フォームの入力項目をチェック（☆値が空かどうかのみ判断です）
            if( $("input[name='COUNTRYCD']").val() != ""
                && $("input[name='POSTCD_FOREIGN']").val() != ""
                && $("input[name='ADRS_FOREIGN_1']").val() != ""
                && $("input[name='COUNTRY_ADDRESSEE']").val() != ""
                && $("input[name='TEL_NO_FOREIGN']").val() != ""
            ){
                myFlag = true;
            }
        } else {
            myFlag = true;
        }
    });

    if (myFlag) {
        $(".LinkNext a").removeClass("desable");
        //イベントハンドラを削除
        $(".LinkNext a").unbind("click");
        //イベントハンドラを再定義
            return false;
        //});
    } else {
        $(".LinkNext a").addClass("desable");
        //イベントハンドラを削除
        $(".LinkNext a").unbind("click");
        //イベントハンドラを再定義
        $(".LinkNext a").click( function(){
            return false;
        });
    }
}

function addotherChk() {
	var otherFlg = false;
	for(i = 0; i < document.frm.ADRS_CHANGE.length; i++){ //全てのラジオボタンをスキャン
		if(document.frm.ADRS_CHANGE[i].checked) {
			otherFlg = true;
			break;
		}
	}

	if (otherFlg == true){

		$(".LinkNext a").removeClass("desable");
    	//イベントハンドラを削除
    	$(".LinkNext a").unbind("click");

    }else{
		$(".LinkNext a").addClass("desable");
		//イベントハンドラを削除
    	$(".LinkNext a").unbind("click");
	}
}

function addforeignChk() {
	var foreignFlg = false;

    //フォームの入力項目をチェック（☆値が空かどうかのみ判断です）
    if( $("input[name='COUNTRYCD']").val() != ""
        && $("input[name='POSTCD_FOREIGN']").val() != ""
        && $("input[name='ADRS_FOREIGN_1']").val() != ""
        && $("input[name='COUNTRY_ADDRESSEE']").val() != ""
        && $("input[name='TEL_NO_FOREIGN']").val() != ""
    ){
        foreignFlg = true;
    }

	if (foreignFlg == true){
	
		$(".LinkNext a").removeClass("desable");
    	//イベントハンドラを削除
    	$(".LinkNext a").unbind("click");

    }else{
		$(".LinkNext a").addClass("desable");
		//イベントハンドラを削除
    	$(".LinkNext a").unbind("click");
	}
}
