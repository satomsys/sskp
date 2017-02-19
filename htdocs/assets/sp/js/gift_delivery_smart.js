$(function() {
	var page = {
		/**
		 * Initialize page
		 */
		initialize: function() {
			this.initEventBinding();
			this.initView();
		},
		/**
		 * Bind events for DOM elements
		 */
		initEventBinding: function() {
			var _this = this;
			//////////////////////////////////////////////////////////////////////
			//
			// bind event for shipping_address_type
			//

			// Attach change event to shipping_address_type
			$('input[name="DELIVERY_KBN"]').change(function(event) {
				switch ($(this).val()) {
					case $('#r1').val():
						$('.shipping_address_type_input_accordion').slideUp();
						$('.registered_address_type_input_accordion').slideDown();
						$('#DELIV_CHUI').slideDown();
						$('#Agreement').slideUp();
						_this.enableNextButton();
						break;
					case $('#r2').val():
						$('.shipping_address_type_input_accordion').slideDown();
						$('.registered_address_type_input_accordion').slideUp();
						$('#DELIV_CHUI').slideUp();
						$('#Agreement').slideDown();
						//
						// agreement
						if ($('input[name="REGIST_AGREEMENT_FLG"]').is(':checked')) {
							_this.enableNextButton();
						} else {
							_this.disableNextButton();
						}
						break;
				}
			});

			//////////////////////////////////////////////////////////////////////
			//
			// bind event for REGIST_AGREEMENT_FLG
			//
			$('input[name="REGIST_AGREEMENT_FLG"]').change(function(event) {
				if ($(this).is(':checked')) {
					_this.enableNextButton();
				} else {
					_this.disableNextButton();
				}
			});

			//////////////////////////////////////////////////////////////////////
			//
			// bind event for housou
			//

			// Attach change event to housou
			$('input[name="WRAP_NEED"]').change(function(event) {
				if ($(this).val() == '1') {
					$('.housou_1_accordion').slideDown();
				} else {
					$('.housou_1_accordion').slideUp();
				}
			});

			//////////////////////////////////////////////////////////////////////
			//
			// bind event for mcard
			//

			// Attach change event to mcard
			$('input[name="MSG_NEED"]').change(function(event) {
				if ($(this).val() == '1') {
					$('.mcard_1_accordion').slideDown();
				} else {
					$('.mcard_1_accordion').slideUp();
				}
			});


			// ▼R-#28806_秋の4点施策（8ミニ） 2016/09/13 nul-fukushima
			//////////////////////////////////////////////////////////////////////
			//
			// bind event for dw_used
			//

			// Attach change event to mcard
			$('input[name="DW_USED"]').change(function(event) {
				if ($(this).val() == '1') {
					$('.dw_used_accordion').slideDown();
				} else {
					$('.dw_used_accordion').slideUp();
				}
			});
			// ▲R-#28806_秋の4点施策（8ミニ） 2016/09/13 nul-fukushima

			//////////////////////////////////////////////////////////////////////
			//
			// bind event for NOTE
			//
			var noteIntervalID;
			$('#NOTE').keyup(function(event) {
				noteIntervalID = setInterval(function() {
					$('.note_info_count').text($('#NOTE').val().length);
				}, 100);
			});
			$('#NOTE').on('blur', function(event) {
				clearInterval(noteIntervalID);
			});


			//////////////////////////////////////////////////////////////////////
			//
			// bind event for MSG_TEXT
			//
			var msgIntervalID;
			$('#MSG_TEXT').keyup(function(event) {
				msgIntervalID = setInterval(function() {
					$('.msg_text_info_count').text($('#MSG_TEXT').val().length);
				}, 100);
			});
			$('#NOTE').on('blur', function(event) {
				clearInterval(msgIntervalID);
			});

		},
		/**
		 * First view initialize
		 */
		initView: function() {
			var _this = this;
			//////////////////////////////////////////////////////////////////////
			//
			// init view for shipping_address_type
			//

			// Attach radio label bar color for shipping_address_type
			$('input[name="DELIVERY_KBN"]').each(function(index, item) {
				if ($(item).prop('checked')) {
					$(item).closest('label').addClass('RABon').removeClass('RABoff');
				}
			});

			// If input[name="shipping_address_type"] value is not "input"
			// then hide "shipping_address_type_input_accordion"
			switch ($('input[name="DELIVERY_KBN"]:checked').val()) {
				case $('#r1').val():
					$('.shipping_address_type_input_accordion').hide();
					$('#DELIV_CHUI').show();
					$('#Agreement').hide();
					_this.enableNextButton();
					break;
				case $('#r2').val():
					$('.registered_address_type_input_accordion').hide();
					$('#DELIV_CHUI').hide();
					$('#Agreement').show();
					// agreement
					if ($('input[name="REGIST_AGREEMENT_FLG"]').is(':checked')) {
						_this.enableNextButton();
					} else {
						_this.disableNextButton();
					}
					break;
				default:
					$('.shipping_address_type_input_accordion').hide();
					$('.registered_address_type_input_accordion').hide();
					$('#Agreement').hide();
					$('#DELIV_CHUI').show();
					_this.enableNextButton();
			}

			//////////////////////////////////////////////////////////////////////
			//
			// init view for housou
			//

			// Attach radio label bar color for housou
			$('input[name="WRAP_NEED"]').each(function(index, item) {
				if ($(item).prop('checked')) {
					$(item).closest('label').addClass('RABon').removeClass('RABoff');
				}
			});

			// If input[name="housou"] value is not "1"
			// then hide "housou_1_accordion"
			if ($('input[name="WRAP_NEED"]:checked').val() != '1') {
				$('.housou_1_accordion').hide();
			}

			//////////////////////////////////////////////////////////////////////
			//
			// init view for mcard
			//

			// Attach radio label bar color for mcard
			$('input[name="MSG_NEED"]').each(function(index, item) {
				if ($(item).prop('checked')) {
					$(item).closest('label').addClass('RABon').removeClass('RABoff');
				}
			});

			// If input[name="mcard"] value is not "1"
			// then hide "mcard_1_accordion"
			if ($('input[name="MSG_NEED"]:checked').val() != '1') {
				$('.mcard_1_accordion').hide();
			}

			//////////////////////////////////////////////////////////////////////
			//
			// init view for status
			//

			// Attach radio label bar color for status
			$('input[name="DW_USED"]').each(function(index, item) {
				if ($(item).prop('checked')) {
					$(item).closest('label').addClass('RABon').removeClass('RABoff');
				}
			});
			// ▼R-#28806_秋の4点施策（8ミニ） 2016/09/13 nul-fukushima
			if ($('input[name="DW_USED"]:checked').val() != '1') {
				$('.dw_used_accordion').hide();
			}
			// ▲R-#28806_秋の4点施策（8ミニ） 2016/09/13 nul-fukushima

			$('input[name="ABSENCE"]').each(function(index, item) {
				if ($(item).prop('checked')) {
					$(item).closest('label').addClass('RABon').removeClass('RABoff');
				}
			});

			// Set string length
			$('.note_info_count').text($('#NOTE').val().length);
			$('.msg_text_info_count').text($('#MSG_TEXT').val().length);
		},
		enableNextButton: function() {
			$('a[name="btn_next_top"]').css({
				opacity: 1,
				cursor: 'pointer'
			}).off('click').on('click', function(event) {
				return nextPage(1);
			});
		},
		disableNextButton: function() {
			$('a[name="btn_next_top"]').css({
				opacity: 0.7,
				cursor: 'default'
			}).off('click').on('click', function(event) {
				event.stopPropagation();
				event.preventDefault();
				return false;
			});
		}
	};
	//
	// Initialize
	page.initialize();
});
