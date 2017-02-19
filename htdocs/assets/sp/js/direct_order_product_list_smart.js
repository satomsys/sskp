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
			var total_src = '<dt><span class="fcPurple fsM">商品合計</span></dt><dd class="txtAR fsM"><span class="priceTotal">0</span>円（税込）</span></dd>';
			$('#cart_table').find('dl').empty();
			if (response) {
				var totalPrice = parseInt(response.data.total.priceTotal);
				var totalPriceWithoutReduction = parseInt(response.data.shohin.priceSubtotal);
				var deposit = response.data.total.deposit;
				var reductionPrice = response.data.total.reduction;
				var shohinQuantity = parseInt(response.data.shohin.quantity);
			} else {
				var totalPrice = parseInt(0);
				var deposit = parseInt($('.priceDeposit').text().split(',').join(''));
				var reductionPrice = parseInt($('.priceReduction').text().split(',').join(''));
				var totalPriceWithoutReduction = parseInt($('.priceTotalWithoutReduction').text().split(',').join(''));
				var shohinQuantity = totalPriceWithoutReduction > 0;
			}

			if (response) {
				if (response.data && response.data.shohin) {
					if (response.data.shohin.items) {
						var items = response.data.shohin.items;

						for (i = 0; i < items.length; i++) {
							var item_src = '<dt>{{shohinName}}</dt><dd class="txtAR">{{subtotal}}円（税込）</dd>';
							if (items[i].quantity > 0) {
								item_src = item_src.replace(/\{\{shohinName\}\}/g, items[i].name).replace(/\{\{subtotal\}\}/g, appCommon.numberFormat(items[i].priceSubtotal));
								$('#cart_table').find('dl').append(item_src);
							}
						}
					}

					if (response.data.shohin.quantity > 0) {
						$('#cart_table').find('dl').append('<br>');
					}
				}
			}
			$('#cart_table').find('dl').append(total_src);

			$('.priceTotal').text(appCommon.numberFormat(totalPrice));
			$('.priceDeposit').text(appCommon.numberFormat(deposit));
			$('.priceReduction').text(appCommon.numberFormat(reductionPrice));
			$('.priceTotalWithoutReduction').text(appCommon.numberFormat(totalPriceWithoutReduction));
		},
		checkSet: function(message, itemId) {
			var _this = this;

			appCommon.showConfirm(message, '', function(result) {
				if (result) {
					// 
					// Set amount of items
					// Apply cart change
					appCommon.addToCart(itemId, function (response) {
						if (response.status === 'ok') {
							for (var i in response.data.shohin.items) {
								$('[data-item-code="'+response.data.shohin.items[i].id+'"] select').val(response.data.shohin.items[i].quantity);
							}
							//
							// Show "You selected a set item" message
							$('#set').show();
						} else if (response.status === 'error') {
							appCommon.showAlert(response.errorMessage);
							//
							// hide "You selected a set item" message
							$('#set').hide();
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
