/**
 * jQuery Config for step5fix
 * Site : 再春館製薬所 注文フロー
 * Target : 支払い方法選択画面専用
 */

// ▼処理実行 =========================================================================
var tabNo = false; 	//最初に開きたいtabインデックス (falseで全て非表示:初回のみ)

$(function() {
		//タブ初期化
		$('.tabBody').each(function(){
		  if(!$(this).hasClass('active')){
		    $(this).hide();
		  }
		});

		//タブメニューのクリックイベント
		$('.tabKeyMenu').on('click',function(){
		    var $parent = $(this).parents('.tabHead'),key = $(this).data('tabKey');

		    $parent.find('.tabKeyMenu').removeClass('active');
		    $(this).addClass('active');

		    $parent.find('.tabBody').each(function(){
		      ($(this).data('tabBody')==key)?($(this).addClass('active').show()):($(this).removeClass('active').hide());
		    });

		    //支払い方法を選択するかチェック
			checkPaymentType (key);
			InnerView();
			checkPossibleGoToNext();
			return false;
		  });

		$("input[name='pay_type1']").click(function() {
			InnerView();
			$(".LinkNext a").removeClass("desable");
			$(".LinkNext a").unbind("click");
		});

		//クレジットカード
		//「別のカードを利用する」のカード入力・詳細情報を非表示
		$('#otheCardBox').hide();
		$('body.First #otheCardBox').show();
		$("#payCard input[name='usecard_kbn']").click( function(){
				elm=$(this);
				if( elm.attr("checked") == true || elm.attr("checked") == "checked"){

					//elm.attr("id")からelm.attr("value")に変更 20100624 ec-one kawansihi
					//if ( elm.attr("id") == "usecard_kbn2" ) {
					if ( elm.attr("value") == "2" ) {
						//表示：クレジットカードの入力フォーム
						$("#newcard").slideDown();
						$("#payCard div[name='sel_name1']").hide();
					}
					else {
						//非表示：クレジットカードの入力フォーム
						$("#newcard").slideUp();
						$("#payCard div[name='sel_name1']").show();

					}
			}
    //checkPossibleGoToNext ();
    });
    checkPossibleGoToNext ();
});


// ▼関数群 =========================================================================

/*
 * 関数 : checkPossibleGoToNext()
 * 次の画面に進めるかチェック（届け先を選択しているかの判断のみ）
 */
function checkPossibleGoToNext () {
    var myFlag = false;
    var myMsg;
	var payType;
	var payTypeVal = document.ds.pay_list.value;
	var payTypeList = payTypeVal.split(",");

    if (typeof document.ds.pay_type1.length != 'undefined'){
    	for(i = 0; i < document.ds.pay_type1.length; i++){ //全てのラジオボタンをスキャン
			if(document.ds.pay_type1[i].checked) {
				payType = document.ds.pay_type1[i].value;
				for(k = 0; k < payTypeList.length; k++){
					if (payTypeList[k] == payType) {
						myFlag = true;
						break;
					}
				}
				if (myFlag == true){
					break;
				}
			}
		}
	}else if (document.ds.pay_type1.checked){
		payType = document.ds.pay_type1.value;
		for(k = 0; k < payTypeList.length; k++){
			if (payTypeList[k] == payType) {
				myFlag = true;
				break;
			}
		}
	}

    if (myFlag) {
        $(".LinkNext a").removeClass("desable");
        //イベントハンドラを削除
        $(".LinkNext a").unbind("click");
            return false;
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

/*
 * 関数 : checkPaymentType(aactiveTabKey)
 * タブメニューのクリック時に支払い方法を選択するかチェック
 */
function checkPaymentType (activeTabKey) {
	//var elements = document.getElementsByName("pay_type1")

	if (activeTabKey == "1") {
		if (document.getElementById("pay_credit").type == "radio") {
			document.getElementById("pay_credit").checked = true;
		}
	} else if (activeTabKey == "2") {
		if (document.getElementById("pay_furi").type == "radio") {
			document.getElementById("pay_furi").checked = true;
		}
	} else if (activeTabKey == "3") {
		if (document.getElementById("pay_daibiki").type == "radio") {
			document.getElementById("pay_daibiki").checked = true;
		}
	} else if (activeTabKey == "4") {
		if (document.getElementById("pay_hikiotoshi").type == "radio") {
			document.getElementById("pay_hikiotoshi").checked = true;
		}
	}
	return false;
}

/*
 * 関数 : InnerView
 * ラジオボタンのチェック時に支払い方法を表示させる
 * #1439 2011/02/04 ec-one uchida update
 * #1514 2011/04/12 ec-one uchida update
 */
function InnerView () {

	if (document.getElementById("pay_credit").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>クレジットカード</span>が選択されています。</p>");
		$(".PageInfo2").html("<p class='mT10'>現在、<span class='fcRed'>クレジットカード</span>が選択されています。</p>");
	} else if (document.getElementById("pay_furi").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>お振込み</span>が選択されています。</p>");
		$(".PageInfo2").html("<p class='mT10'>現在、<span class='fcRed'>お振込み</span>が選択されています。</p>");
	} else if (document.getElementById("pay_daibiki").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>代金引換払い</span>が選択されています。</p>");
		$(".PageInfo2").html("<p class='mT10'>現在、<span class='fcRed'>代金引換払い</span>が選択されています。</p>");
	} else if (document.getElementById("pay_hikiotoshi").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>口座引落し</span>が選択されています。</p>");
		$(".PageInfo2").html("<p class='mT10'>現在、<span class='fcRed'>口座引落し</span>が選択されています。</p>");
	}
	return false;
}
