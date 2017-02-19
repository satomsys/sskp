/**
 * jQuery Config for step5fix
 * Site : �ďt�ِ��� �����t���[
 * Target : �x�������@�I����ʐ�p
 */

// ���������s =========================================================================
var tabNo = false; 	//�ŏ��ɊJ������tab�C���f�b�N�X (false�őS�Ĕ�\��:����̂�)

$(function() {
		//�^�u������
		$('.tabBody').each(function(){
		  if(!$(this).hasClass('active')){
		    $(this).hide();
		  }
		});

		//�^�u���j���[�̃N���b�N�C�x���g
		$('.tabKeyMenu').on('click',function(){
		    var $parent = $(this).parents('.tabHead'),key = $(this).data('tabKey');

		    $parent.find('.tabKeyMenu').removeClass('active');
		    $(this).addClass('active');

		    $parent.find('.tabBody').each(function(){
		      ($(this).data('tabBody')==key)?($(this).addClass('active').show()):($(this).removeClass('active').hide());
		    });

		    //�x�������@��I�����邩�`�F�b�N
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

		//�N���W�b�g�J�[�h
		//�u�ʂ̃J�[�h�𗘗p����v�̃J�[�h���́E�ڍ׏����\��
		$('#otheCardBox').hide();
		$('body.First #otheCardBox').show();
		$("#payCard input[name='usecard_kbn']").click( function(){
				elm=$(this);
				if( elm.attr("checked") == true || elm.attr("checked") == "checked"){

					//elm.attr("id")����elm.attr("value")�ɕύX 20100624 ec-one kawansihi
					//if ( elm.attr("id") == "usecard_kbn2" ) {
					if ( elm.attr("value") == "2" ) {
						//�\���F�N���W�b�g�J�[�h�̓��̓t�H�[��
						$("#newcard").slideDown();
						$("#payCard div[name='sel_name1']").hide();
					}
					else {
						//��\���F�N���W�b�g�J�[�h�̓��̓t�H�[��
						$("#newcard").slideUp();
						$("#payCard div[name='sel_name1']").show();

					}
			}
    //checkPossibleGoToNext ();
    });
    checkPossibleGoToNext ();
});


// ���֐��Q =========================================================================

/*
 * �֐� : checkPossibleGoToNext()
 * ���̉�ʂɐi�߂邩�`�F�b�N�i�͂����I�����Ă��邩�̔��f�̂݁j
 */
function checkPossibleGoToNext () {
    var myFlag = false;
    var myMsg;
	var payType;
	var payTypeVal = document.ds.pay_list.value;
	var payTypeList = payTypeVal.split(",");

    if (typeof document.ds.pay_type1.length != 'undefined'){
    	for(i = 0; i < document.ds.pay_type1.length; i++){ //�S�Ẵ��W�I�{�^�����X�L����
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
        //�C�x���g�n���h�����폜
        $(".LinkNext a").unbind("click");
            return false;
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

/*
 * �֐� : checkPaymentType(aactiveTabKey)
 * �^�u���j���[�̃N���b�N���Ɏx�������@��I�����邩�`�F�b�N
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
 * �֐� : InnerView
 * ���W�I�{�^���̃`�F�b�N���Ɏx�������@��\��������
 * #1439 2011/02/04 ec-one uchida update
 * #1514 2011/04/12 ec-one uchida update
 */
function InnerView () {

	if (document.getElementById("pay_credit").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>�N���W�b�g�J�[�h</span>���I������Ă��܂��B</p>");
		$(".PageInfo2").html("<p class='mT10'>���݁A<span class='fcRed'>�N���W�b�g�J�[�h</span>���I������Ă��܂��B</p>");
	} else if (document.getElementById("pay_furi").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>���U����</span>���I������Ă��܂��B</p>");
		$(".PageInfo2").html("<p class='mT10'>���݁A<span class='fcRed'>���U����</span>���I������Ă��܂��B</p>");
	} else if (document.getElementById("pay_daibiki").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>�����������</span>���I������Ă��܂��B</p>");
		$(".PageInfo2").html("<p class='mT10'>���݁A<span class='fcRed'>�����������</span>���I������Ă��܂��B</p>");
	} else if (document.getElementById("pay_hikiotoshi").checked == true) {
		$(".PageInfo").html("<p class='mT10'><span class='fcRed'>����������</span>���I������Ă��܂��B</p>");
		$(".PageInfo2").html("<p class='mT10'>���݁A<span class='fcRed'>����������</span>���I������Ă��܂��B</p>");
	}
	return false;
}
