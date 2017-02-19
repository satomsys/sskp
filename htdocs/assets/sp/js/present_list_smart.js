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
			// bind event for item pulldowns
			// 

			// Attach change event to item pulldowns
			$('[data-present-code] select').change(function(event) {
				var container = $(this).closest('[data-present-code]');
				// 
				// Check max count
				if (_this.validateMaxCount(container, parseInt($(this).val()))) {
					// 
					// Check points
					if (_this.validatePoint()) {
						// Apply to cart
						var itemId = container.attr('data-present-code');
						var amount = $(this).val();
						var item = this;
						
						appCommon.changeCartItem(itemId, amount, function (response) {
							if (response.status === 'ok') {
								// Set use point
								$('#pointUse').text(appCommon.numberFormat(_this.getTotalUsePoint()));
								$('#pointAvailable').text(appCommon.numberFormat(response.data.point.available)).data('available-point', response.data.point.available);
							} else if (response.status === 'error') {
								// If api error occured then set item to last selected
								$(item).data('lastSelected').prop('selected', true);
								
								appCommon.showAlert(response.errorMessage);
							}
						});
					} else {
						// If validation failure then set item to last selected
						$(this).data('lastSelected').prop('selected', true);

						appCommon.showAlert([
							'お手持ちのポイントが足りません。',
							'現在[' + _this.getAvailablePoint() + 'ポイント]です。'
						].join("\n"), '');
					}
				} else {
					// If validation failure then set item to last selected
					$(this).data('lastSelected').prop('selected', true);

					appCommon.showAlert([
						container.find('dt.name').next().text() + 'は、合計' + container.data('max-count') + '個までの販売とさせていただきます。',
						'お手数おかけいたしますが、数量の変更をお願いいたします。'
					].join("\n"), '');
				}
				_this.initView();
			});

		},
		/**
		 * First view initialize
		 */
		initView: function() {
			// init view for items
			$('[data-present-code] select').each(function(index, item) {
				$(this).data('lastSelected', $(this).find('option:selected'));
				if ($(item).val() > 0) {
					$(item).closest('li').addClass('selected');
				} else {
					$(item).closest('li').removeClass('selected');
				}
			});
		},
		/**
		 * Validate item count
		 * check `count` and container's data-max-count
		 * @param container containerDOM like <div class="detail" data-item-code="0253" data-max-count="1">
		 * @param count integer
		 * @return boolean
		 */
		validateMaxCount: function(container, count) {
			if (container.data('max-count')) {
				return container.data('max-count') >= count;
			}
			return true;
		},
		/**
		 * Validate total point
		 * @return boolean
		 */
		validatePoint: function() {
			var availablePoint = parseInt($('#pointTotal').data('total-point')) + parseInt($('#pointAvailable3').data('available-point'));
			return availablePoint >= this.getTotalUsePoint();
		},
		/**
		 * Get available point
		 * available point is set in data-available-point="VALUE"
		 *
		 * return integer available point
		 */
		getAvailablePoint: function() {
			return parseInt($('#pointAvailable').data('available-point'));
		},
		/**
		 * Get total point
		 * total point is POINT x amount of item
		 * return integer total point
		 */
		getTotalUsePoint: function() {
			var totalPoint = 0;
			$('[data-present-code]').each(function(index, item) {
				var amount = parseInt($(item).find('select').val());
				var point = parseInt($(this).find('[data-point-value]').data('point-value'));
				totalPoint += amount * point;
			});
			return totalPoint;
		}
	};
	// 
	// Initialize
	page.initialize();
});
