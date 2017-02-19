/**
 * jQuery Config for step5fix
 * Site : �ďt�ِ��� �����t���[
 * Target : ���͂���I����ʐ�p
 */

// ���������s =========================================================================

$(function() {

    checkPossibleGoToNext ();
    //�͂���I���F�S�Ă̕ύX���Ƀ`�F�b�N
    // ����: change()�̓`�F�b�N���ꂽ���������Ȃ������B�O�ꂽ���̓C�x���g�����Ȃ������̂őS�Ẵ��W�I�Ŕ��肷��B
    $("#SendAddress input[name='DELIVCLASS']").click( function(){
        changeAddress($(this));
    });
    //�y�[�W�\�����ɂ��͂���̃`�F�b�N
    $("#SendAddress input[name='DELIVCLASS']:checked").each( function(){
        changeAddress($(this));
    });


    //�������̓��e�̃`�b�v�c�[���ł̉摜�\��
    $("label.ToolTips").hover(
        function(){
            $(this).children(".ToolTipsBox").show();
        }
        ,
        function(){
            $(this).children(".ToolTipsBox").hide();
        }
    );

    // 2011/04/06 tazoe@econe WAO�Ή� �C�O�����Ή�(A-4607) ID��t��
    $("#country_td select").attr("id", "countryCd");
});


// ���֐��Q =========================================================================

/*
 * �֐� : changeAddress
 * �w�肵���͈͂�ID�̃Z���N�g���P���₷
 * in / elm : �`�F�b�N���ꂽ���W�I�{�^��
 */
function changeAddress ( elm ){

    if( elm.attr("checked") == true || elm.attr("checked") == "checked" ){
/*
        //�R���r�j���̏ꍇ
        if ( elm.attr("id") == "addressCon" ) {
            //�\���F�R���r�j�X�ܑI���{�^���A�R���r�j���̒��ӎ���
            //$("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").show();
            $("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").slideDown("fast");
        }
        else {
            //��\���F�R���r�j�X�ܑI���{�^���A�R���r�j���̒��ӎ���
            //$("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").hide();
            $("a#LinkBtnLowsonSelect , #addressBox3 div.Msg").slideUp("fast");
        }
*/
        //���̑��̂��͂���w��̏ꍇ
        if ( elm.attr("id") == "addressOther" ) {
            //�\���F�ǉ��Z���t�H�[��
            //$("#addressOtherWrap, #OhterAddressFormBox").show();
            $("#addressOtherWrap, #OhterAddressFormBox").slideDown("fast");
            //$("#BtnAddOtherAddress").css({"display":"block"}).slideUp("5000");
            //$("#BtnAddOtherAddress").hide();
        }
        else {
            //��\���F�ǉ��Z���t�H�[��
            //$("#addressOtherWrap, #OhterAddressFormBox").hide();
            $("#addressOtherWrap, #OhterAddressFormBox").slideUp("fast");
            //$("#BtnAddOtherAddress").show();
            //$("#BtnAddOtherAddress").css({"display":"block"}).slideDown("5000");
        }
        // 2011/04/06 tazoe@econe WAO�Ή� �C�O�����Ή�(A-4607)
        if (elm.attr("id") == "addressForeign") {
            // �\���F�ǉ��Z���t�H�[��
            $("#addressOtherWrap, #ForeignAddressFormBox").slideDown("fast");
        } else {
            // ��\���F�ǉ��Z���t�H�[��
            $("#addressOtherWrap, #ForeignAddressFormBox").slideUp("fast");
        }
    }
    checkPossibleGoToNext ();
}

/*
 * �֐� : checkPossibleGoToNext()
 * ���̉�ʂɐi�߂邩�`�F�b�N�i�͂����I�����Ă��邩�̔��f�̂݁j
 */
function checkPossibleGoToNext () {
    var myFlag = false;
    var myMsg;

    $("#SendAddress input[name='DELIVCLASS']:checked").each( function(){
/*

        //�R���r�j���
        if( $(this).attr("id") == "addressCon" ){
            msg = "�󂯎��R���r�j��I�����Ă�������";
            myFlag = true;
        }
 */        //���̑��̂��͂���w��̏ꍇ
        /*else */if( $(this).attr("id") == "addressOther" ){
            for(i = 0; i < document.frm.ADRS_CHANGE.length; i++){ //�S�Ẵ��W�I�{�^�����X�L����
				if(document.frm.ADRS_CHANGE[i].checked) {
				myFlag = true;
				break;
			}
	}
        }
        //�C�O�Z���̏ꍇ
        else if( $(this).attr("id") == "addressForeign" ){
            //�t�H�[���̓��͍��ڂ��`�F�b�N�i���l���󂩂ǂ����̂ݔ��f�ł��j
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
        //�C�x���g�n���h�����폜
        $(".LinkNext a").unbind("click");
        //�C�x���g�n���h�����Ē�`
            return false;
        //});
    } else {
        $(".LinkNext a").addClass("desable");
        //�C�x���g�n���h�����폜
        $(".LinkNext a").unbind("click");
        //�C�x���g�n���h�����Ē�`
        $(".LinkNext a").click( function(){
            return false;
        });
    }
}

function addotherChk() {
	var otherFlg = false;
	for(i = 0; i < document.frm.ADRS_CHANGE.length; i++){ //�S�Ẵ��W�I�{�^�����X�L����
		if(document.frm.ADRS_CHANGE[i].checked) {
			otherFlg = true;
			break;
		}
	}

	if (otherFlg == true){

		$(".LinkNext a").removeClass("desable");
    	//�C�x���g�n���h�����폜
    	$(".LinkNext a").unbind("click");

    }else{
		$(".LinkNext a").addClass("desable");
		//�C�x���g�n���h�����폜
    	$(".LinkNext a").unbind("click");
	}
}

function addforeignChk() {
	var foreignFlg = false;

    //�t�H�[���̓��͍��ڂ��`�F�b�N�i���l���󂩂ǂ����̂ݔ��f�ł��j
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
    	//�C�x���g�n���h�����폜
    	$(".LinkNext a").unbind("click");

    }else{
		$(".LinkNext a").addClass("desable");
		//�C�x���g�n���h�����폜
    	$(".LinkNext a").unbind("click");
	}
}
