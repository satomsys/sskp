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
			// bind event for DELIVCLASS
			// 
			
			// Attach change event to DELIVCLASS
			$('input[name="DELIVCLASS"]').change(function(event) {
				switch (true) {
					case $(this).hasClass('shipping_for_registered'):
						$('.delivclass_1_accordion').slideDown();
						$('#OhterAddressFormBox').slideUp();
						$('#ForeignAddressFormBox').slideUp();
						$('#SendDate').slideDown();
						$($('input[name="REGISTERED"]').get(0)).prop('checked', true);
						break;
					case $(this).hasClass('shipping_for_newaddress_input'):
						$('.delivclass_1_accordion').slideUp();
						$('#OhterAddressFormBox').slideDown();
						$('#ForeignAddressFormBox').slideUp();
						$('#SendDate').slideDown();
						break;
					case $(this).hasClass('shipping_for_oversea'):
						$('.delivclass_1_accordion').slideUp();
						$('#OhterAddressFormBox').slideUp();
						$('#ForeignAddressFormBox').slideDown();
						$('#SendDate').slideUp();
						break;
					default:
						$('.delivclass_1_accordion').slideUp();
						$('#OhterAddressFormBox').slideUp();
						$('#ForeignAddressFormBox').slideUp();
						$('#SendDate').slideDown();
				}
			});

			
			//////////////////////////////////////////////////////////////////////
			// 
			// bind event for NOTE
			// 
			var intervalID;
			$('#NOTE').on('focus', function(event) {
				intervalID = setInterval(function() {
					$('.note_info_count').text($('#NOTE').val().length);
				}, 100);
			});
			$('#NOTE').on('blur', function(event) {
				clearInterval(intervalID);
			});

		},
		/**
		 * First view initialize
		 */
		initView: function() {
			var _this = this;

			if ($('input[name="DELIVCLASS"]:checked').length <= 0) {
				$('input[name="DELIVCLASS"].shipping_for_registered').prop('checked', true);
				$($('input[name="REGISTERED"]').get(0)).prop('checked', true);
			}

			// init view for delivclass_1_accordion
			if (! $('input[name="DELIVCLASS"]:checked').hasClass('shipping_for_registered')) {
				$('.delivclass_1_accordion').hide();
			}
			if (! $('input[name="DELIVCLASS"]:checked').hasClass('shipping_for_newaddress_input')) {
				$('#OhterAddressFormBox').hide();
			}
			if (! $('input[name="DELIVCLASS"]:checked').hasClass('shipping_for_oversea')) {
				$('#ForeignAddressFormBox').hide();
			} else {
				$('#SendDate').hide();
			}

			$('input[name="DELIVCLASS"]:checked').closest('label')
				.removeClass('RABoff')
				.addClass('RABon')
				;
			// Set string length
			$('.note_info_count').text($('#NOTE').val().length);
		}
	};
	// 
	// Initialize
	page.initialize();
});
