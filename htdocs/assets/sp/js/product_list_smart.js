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
			$('[data-item-code] select').change(function(event) {
				var itemId = $(this).closest('[data-item-code]').attr('data-item-code');
				var amount = parseInt($(this).val());
				var item = this;

				appCommon.changeCartItem(itemId, amount, function (response) {
					if (response.status === 'ok') {
						_this.initView(response);
					} else if (response.status === 'error') {
						// If validation failure then set item to last selected
						$(item).data('lastSelected').prop('selected', true);
						
						appCommon.showAlert(response.errorMessage);
					}
				});
			});

		},
		/**
		 * First view initialize
		 */
		initView: function(response) {
			// init view for items
			var totalItemAmount = 0;
			$('[data-item-code] select').each(function(index, item) {
				$(this).data('lastSelected', $(this).find('option:selected'));
				if ($(item).val() > 0) {
					$(item).closest('li').addClass('selected');
				} else {
					$(item).closest('li').removeClass('selected');
				}
				totalItemAmount += parseInt($(item).val());
			});
			$('ul.itemList li.selected span.status i:not(.static)').addClass('checked');
			$('ul.itemList li:not(.selected) span.status i:not(.static)').removeClass('checked');
			//
			//
			if (totalItemAmount > 0) {
				$('.gotoNext').css({
					opacity: 1,
					cursor: 'pointer'
				}).off('click');
			} else {
				$('.gotoNext').css({
					opacity: 0.7,
					cursor: 'default'
				}).on('click', function(event) {
					event.stopPropagation();
					event.preventDefault();
					return false;
				});
			}
			//
			//
			if (response) {
				var totalPrice = parseInt(response.data.total.priceTotal);
				var totalPriceWithoutReduction = parseInt(response.data.shohin.priceSubtotal);
				var deposit = response.data.total.deposit;
				var reductionPrice = response.data.total.reduction;
				var shohinQuantity = parseInt(response.data.shohin.quantity);
			} else {
				var totalPrice = parseInt($('.priceTotal').text().split(',').join(''));
				var deposit = parseInt($('.priceDeposit').text().split(',').join(''));
				var reductionPrice = parseInt($('.priceReduction').text().split(',').join(''));
				var totalPriceWithoutReduction = parseInt($('.priceTotalWithoutReduction').text().split(',').join(''));
				var shohinQuantity = totalPriceWithoutReduction > 0;
			}
			if (totalPrice >= $('.campaign_text').data('campaign25-start')) {
				$('.campaign_text').show();
			} else {
				$('.campaign_text').hide();
			}
			var campaign25Target = parseInt($('.campaign_text').data('campaign25-target'));
			$('.priceTotal').text(appCommon.numberFormat(totalPrice));
			$('.priceDeposit').text(appCommon.numberFormat(deposit));
			$('.priceReduction').text(appCommon.numberFormat(reductionPrice));
			$('.priceTotalWithoutReduction').text(appCommon.numberFormat(totalPriceWithoutReduction));
			if (campaign25Target - totalPrice < 0) {
				$('.campaign_price').text(0);
			} else {
				$('.campaign_price').text(appCommon.numberFormat(campaign25Target - totalPrice));
			}
			if (shohinQuantity>0) {
				$('#message-deposit').show();
				$('#deposit_price').show();
			} else {
				$('#message-deposit').hide();
				$('#deposit_price').hide();
			}

		},
		checkSet: function(message, itemId) {
			var _this = this;

			appCommon.showConfirm(message, '', function(result) {
				if (result) {
					//
					// Show "You selected a set item" message
					$('#set').show();
					// 
					// Set amount of items
					// Apply cart change
					appCommon.addToCart(itemId, function (response) {
						if (response.status === 'ok') {
							for (var i in response.data.shohin.items) {
								$('[data-item-code="'+response.data.shohin.items[i].id+'"] select').val(response.data.shohin.items[i].quantity);
							}
						} else if (response.status === 'error') {
							appCommon.showAlert(response.errorMessage);
						}
						_this.initView(response);
					});
				}
			});
		}
	};
	// 
	// Initialize
	page.initialize();

	// 
	// Exports
	window.checkset = $.proxy(page.checkSet, page);
});
