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
			// bind event for tab button
			// 
			$('.tabKeyMenu').on('click', function(event) {
				var radioTargetSelector = $(this).attr('data-radio-target');
				if (radioTargetSelector) {
					$(radioTargetSelector).prop('checked', true);
					$(radioTargetSelector).change();
				}
			});
			
			//////////////////////////////////////////////////////////////////////
			// 
			// bind event for DAIBIKI HIKIOTOSHI
			// 
			$('input[name="pay_type1"]').on('change', function(event) {
				switch ($(this).attr('id')) {
					case 'pay_daibiki_card':
						$('.daibiki_cache_info').show();
						$('.payment_method_for_epay').hide();
						break;
					case 'pay_daibiki_emoney':
						$('.daibiki_cache_info').hide();
						$('.payment_method_for_epay').show();
						break;
					case 'pay_hikiotoshi':
						if ($('input[name="pay_type2"]:checked').attr('id') === 'pay_hiki') {
							$('.payment_method_for_hikiotoshi_y').hide();
							$('.payment_method_for_hikiotoshi_g').show();
						}
						if ($('input[name="pay_type2"]:checked').attr('id') === 'pay_hiki2') {
							$('.payment_method_for_hikiotoshi_y').show();
							$('.payment_method_for_hikiotoshi_g').hide();
						}
						break;
					default:
						$('.daibiki_cache_info').hide();
						$('.payment_method_for_epay').hide();
						$('.payment_method_for_hikiotoshi_y').hide();
						$('.payment_method_for_hikiotoshi_g').hide();
						
				}
			});
			$('input[name="pay_type2"]').on('change', function(event) {
				if ($(this).attr('id') === 'pay_hiki') {
					$('.payment_method_for_hikiotoshi_g').slideDown();
				} else {
					$('.payment_method_for_hikiotoshi_g').slideUp();
				}
				if ($(this).attr('id') === 'pay_hiki2') {
					$('.payment_method_for_hikiotoshi_y').slideDown();
				} else {
					$('.payment_method_for_hikiotoshi_y').slideUp();
				}
			});

			
			//////////////////////////////////////////////////////////////////////
			// 
			// bind event for card
			// 
			$('input[name="creditcard_select"]').on('change', function(event) {
				if ($(this).val() == 'card_new') {
					$('.pay_count').slideUp();
					$('.input_card_info').slideDown();
				} else if ($(this).val() == 'card_registered') {
						$('.pay_count').slideDown();
						$('.input_card_info').slideUp();
				} else {
					$('.pay_count').slideUp();
					$('.input_card_info').slideUp();
				}
			});
		},
		/**
		 * First view initialize
		 */
		initView: function() {
			var _this = this;
			
			// init card view
			if ($('input[name="creditcard_select"]').val() == 'card_registered') {
				$('.pay_count').show();
				$('.input_card_info').hide();
			} else if ($('input[name="creditcard_select"]').val() == 'card_new') {
				$('.pay_count').hide();
				$('.input_card_info').show();
			} else {
				$('.pay_count').show();
				$('.input_card_info').hide();
			}

			if ($('input[name="pay_type1"]').val() == 3) {
				$('.daibiki_cache_info').show();
			} else {
				$('.daibiki_cache_info').hide();
			}

			if ($('input[name="pay_type1"]').val() == 4) {
				$('.payment_method_for_epay').show();
			} else {
				$('.payment_method_for_epay').hide();
			}

			if ($('input[name="pay_type1"]').val() == 7) {
				if ($('input[name="pay_type2"]').val() == 4) {
					$('.payment_method_for_hikiotoshi_y').show();
				} else {
					$('.payment_method_for_hikiotoshi_y').hide();
				}
				if ($('input[name="pay_type2"]').val() == 5) {
					$('.payment_method_for_hikiotoshi_g').show();
				} else {
					$('.payment_method_for_hikiotoshi_g').hide();
				}
			}
		}
	};
	// 
	// Initialize
	page.initialize();
});
