/**
 * jQuery Config for step5fix
 * Site : 再春館製薬所 注文フロー
 * Target : プレゼント選択画面専用
 */

//

var ITEMS = 0;  //商品の種類
var ITEMS_MAX = 18; //最大購入可能な商品個数(種類)
var PRESENTS_MAX = 10; //選択可能なプレゼント個数の最大(Max)

var KNYUPT = 0; //今回お買い上げポイント
var SAVEPT = 47; //積立ポイント
var USEDPT = 0; //今回利用ポイント
var POOLPT = 0; //次回繰越ポイント


var AMOUNT = 0; //商品金額
var TAX = 0;    //消費税
var TOTAL = 0;  //合計金額(税込)

//商品selectの接頭語
var StrSlcGoods = "ordisp"; //id,name属性の共通文字列
//プレゼントselectの接頭語
var StrSlcPresent = "scd"; //id,name属性の共通文字列
//プレゼントリストのid接頭語
var PresLi = "li-"+ StrSlcPresent;
//プレゼントリストのclass
var PresLiSelected = "Selected";  //選択状態
var PresLiShortage = "Shortage";  //ポイント不足状態
//横のプレゼント品一覧のid接頭語
var StrSidePres = "side-pr";

var tabNo = false; 	//最初に開きたいtabインデックス (falseで全て非表示:初回のみ)


// ▼関数群 =========================================================================

/*
 * 関数 : checkPossibleGoToNext()
 * 次の画面に進めるかチェック（ITEMの選択数で判断）
 */
function checkPossibleGoToNext () {
    if (ITEMS > 0) {
        $(".LinkNext a").removeClass("Unavailable");
        //イベントハンドラを削除
        $(".LinkNext a").unbind("click");
        //イベントハンドラを再定義
        $(".LinkNext a").click( function(){
            return false;
        });
    } else {
        $(".LinkNext a").addClass("Unavailable");
        //イベントハンドラを削除
        $(".LinkNext a").unbind("click");
        //イベントハンドラを再定義
        //$(".LinkNext a").click( function(){
            return false;
        //});
    }
}

/*
 * 関数 : checkPresent
 *  全プレゼントの必要ポイントとポイント残額のチェック
 */
function checkPresent () {
    //各プレゼントの選択可能かチェック
    $("#paySupport ul.PresentBoxList li, #payTeiban ul.PresentBoxList li, #payKetai ul.PresentBoxList li").each(function(){
        //プレゼントid取得
        //var PresId = $(this).attr("id").substring(PresLi.length);
		var tmpPrs = $(this).attr("id").substring(PresLi.length);
		arrPrs = tmpPrs.split("_");
		var PresId = arrPrs[0];
		var PresLevel = arrPrs[1];

        if( Pres[PresId] ) {
            checkPresentPoint(PresId,PresLevel);
        }
    });
}

/*
 * 関数 : checkPresentPoint
 *  各プレゼントの必要ポイントとポイント残額のチェック
 * in / PresId : プレゼントID
 * out
 */
function checkPresentPoint ( PresId,PresLevel ){

    //alert(presentID);
    //プレゼントの選択個数
    var pv = $("select#" + StrSlcPresent + PresId).val();

    //ポイント不足の場合
    if( Pres[PresId].point > POOLPT ){
        //選択できない状態に変更
        chgDisabledPresent(PresId,PresLevel);
    } else {
        //足りている場合
        chgAvailablePresent(PresId,PresLevel);
    }
}

/*
 * 関数 : setSelectOption
 *  selectを選択可能な個数だけにoptionを調整する。
 *  選択できない（ポイント不足）の時はoptionを1個(value=0)にする
 * in / PresId : プレゼントID
 * out
 */
function setSelectOption ( PresId , Init ) {
    var select = $("#"+StrSlcPresent + PresId);
    var options = select.find("option");
    var selectedVal = select.find("option:selected").val() * 1;

    //残りポイントから、あとどれだけ指定プレゼントを選べるか
    var n = PRESENTS_MAX + selectedVal;
    if(Pres[PresId].point >= 1) {
        n = Math.floor( (POOLPT)/Pres[PresId].point ) + selectedVal;
        if( n > PRESENTS_MAX){
            n = PRESENTS_MAX;
        }
    }
    //既に選択している時
    if( selectedVal >= 1 ){
        //alert("selectedが 0個以外だったら : ID="+ PresId + ", 選択個数= " + select.find("option:selected").val());
        //選べる個数より多いoptionを削除する
        select.find("option:gt("+ n +")").remove();
        for( var i=1; i<= n; i++){
            //alert(i +":"+select.find("option:eq("+ i +")").val());
            if( select.find("option:eq("+ i +")").val() != i ) {
                select.append($('<option>').attr({ value: i }).text(i+'個'));
            }
        }
        select.width(); //IE6対策
    }
    //一個以上は選べて、未選択時
    else if( n >= 1 ){
        select.show();
        //selectのoptionの1個以上を削除
        select.find("option:gt(0)").remove();
        //optionの選択個数を調整
        for( var i=1; i<=n; i++){
            //alert(i +":"+select.find("option:eq("+ i +")").val());
            if( select.find("option:eq("+ i +")").val() != i ) {
                select.append($('<option>').attr({ value: i }).text(i+'個'));
            }
        }
        select.width(); //IE6対策
    }
    //ポイント不足な時
    else {
        //alert("ポイント不足" + select.find("option:gt(0)").size());
        //selectのoptionの1個以上を削除
        select.find("option:gt(0)").remove();
        select.hide();
    }
}

/*
 * 関数 : resetPresentSelect
 *  ポイントの個数selectを全て0個にする
 */
function resetPresentSelect () {
    //全プレゼント個数select
    $("select[id^='"+StrSlcPresent+"']").each(function(){
        //選択されたプレゼント個数
        $(this).val(0);
    });
    checkPresent ();
}

/*
 * 関数 : addFigure
 * in 数値
 * out 3桁","区切りの文字列を返す
 */
function addFigure(str) {
    var num = new String(str).replace(/,/g, "");
    while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
    return num;
}