$(document).ready(function() {

	$('input[id^="orderButton"]').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr("id").substr(11);	// id to specify the form

		var Confirm01 = require('components/modal_confirm01');
		var confirmDialog = new Confirm01();
		confirmDialog.content('<div><div class="warn-block01"><ul class="warn-list01"><li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>����������������ɂ��ď��i��ǉ����܂��B��낵���ł����H</li><li class="list-item"><span>��</span>���w���ɂȂ�Ȃ����i�͒ǉ�����܂���̂ł��������������B</li></ul></div><div class="modal-confirm-button-block01"><div class="primary"><span class="button-box01 button-thick button-width-fixed01 button-priority-high"><a href="#" class="button-anchor button-ok">�͂�</a></span></div><div class="secondary"><span class="button-box01 button-thick button-width-fixed01 button-priority-medium"><a href="#" class="button-anchor button-cancel">������</a></span></div></div></div>');
		confirmDialog.$el.find('.button-cancel').on('click', function(e) {
			e.preventDefault();
			return confirmDialog.hide();
		});
		confirmDialog.$el.find('.button-ok').on('click', function(e) {
			e.preventDefault();
			confirmDialog.hide();
			return $('#addToCartForm'+id).submit();
		});
		confirmDialog.show();
	});
});
