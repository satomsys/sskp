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
			// bind event for IKUSEI_COMMENT
			//
			var intervalID;
			$('#IKUSEI_COMMENT').on('focus', function(event) {
				intervalID = setInterval(function() {
					$('.ikusei_comment_count').text($('#IKUSEI_COMMENT').val().length);
				}, 100);
			});
			$('#IKUSEI_COMMENT').on('blur', function(event) {
				clearInterval(intervalID);
			});

			//////////////////////////////////////////////////////////////////////
			//
			// bind event for #order_submit
			//
			$('#order_submit').on('click', function(event) {
				event.preventDefault();
				$('#order_submit').css({
					opacity: 0.7,
					cursor: 'default'
				});
				nextPage(1);
				$('#order_submit').off('click');
				return false;
			});

			$('#order_submit2').on('click', function(event) {
				event.preventDefault();
				$('#order_submit2').css({
					opacity: 0.7,
					cursor: 'default'
				});
				nextPage(1);
				$('#order_submit2').off('click');
				return false;
			});
		},
		/**
		 * First view initialize
		 */
		initView: function() {
			// Set string length
			if ($('#IKUSEI_COMMENT').length > 0) {
				$('.ikusei_comment_count').text($('#IKUSEI_COMMENT').val().length);
			}
		}
	};
	//
	// Initialize
	page.initialize();
});
