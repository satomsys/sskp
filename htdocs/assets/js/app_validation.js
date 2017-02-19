	var PROHIBIT_CHAR = "���������M���f���P�g�������{�}���`�R�K�a�y�����l�h��";
	var SJIS_KANJI_CHECK_ERROR = "<br><br>�V�X�e����A�ꕔ�Ή��ł��Ȃ�������������܂��B<br>����]�ʂ�ɓo�^���邱�Ƃ��ł����A�\���󂲂����܂���B\n�ʂ̊�������͂����������A�Ђ炪�ȁA�J�^�J�i�œ��͂����肢�������܂��B<br><br>";


	function sjisKanjiRegCheck(inDat){
		var prohibition = PROHIBIT_CHAR;
		if(prohibition.indexOf(inDat)>=0){
			return true;
		}else{
			return false;
		}
	}

	function sjisKanjiCheckAll(chkStr) {
		var i = 0;

		// ���ƂȂ镶���������A��
		var ngStr = "[";
		for (i = 0; i < chkStr.length; i ++) {

			var c = chkStr.charAt(i);
			if(sjisKanjiRegCheck(c) == true){
				ngStr += " " + c;
			}
			var gaijiTei = chkStr.charCodeAt(i)
			if(gaijiTei == 39606 ){
				ngStr += " " + c;
			}
		}

		if (ngStr.length > 1) {
			ngStr += " ]";
			return SJIS_KANJI_CHECK_ERROR + ngStr;
		}
		return null;
	}

	function sjisKanjiCheck(objId, label) {
		var errorMsg = sjisKanjiCheckAll($('#'+objId).val());
		if (errorMsg == null) {
			return true;
		}

		errorMsg = label + errorMsg;

		if (typeof require == "function") {
	      var Confirm01 = require('components/modal_confirm01');
	      var confirmDialog = new Confirm01();
	      confirmDialog.content('<div><div class="warn-block01"><ul class="warn-list01"><li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>' + errorMsg +
				'</li></ul></div><div class="modal-confirm-button-block01"><div class="single"><span class="button-box01 button-thick button-width-fixed01 button-priority-high"><a href="#" class="button-anchor button-ok">OK</a></span></div></div></div>');
	      confirmDialog.$el.find('.button-ok').on('click', function(e) {
					e.preventDefault();
					$('#'+objId).focus();
	            return confirmDialog.hide();
	      });
	      confirmDialog.show();
		} else {
			alert(errorMsg.replace(/<br>/g, "\n"));
		}
		return false;
	}