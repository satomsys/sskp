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
			// bind event for add_item
			// 
			$('.add_item').click(function(event) {
				event.preventDefault();
				var itemId = $(this).closest('[data-item-code]').attr('data-item-code');
				var amount = 1;
				var item = this;

				appCommon.changeCartItem(itemId, amount, function (response) {
					if (response.status === 'ok') {
						var select = $(item).closest('[data-item-code]').find('select');
						select.val(amount);
						_this.updateView(response.data);
					} else if (response.status === 'error') {
						appCommon.showAlert(response.errorMessage);
					}
				});
			});
			
			$('[data-item-code] select').change(function(event) {
				var item = this;
				var itemId = $(this).closest('[data-item-code]').attr('data-item-code');
				var amount = parseInt($(this).val());
				var update = function (response) {
					if (response.status === 'ok') {
						_this.updateView(response.data);
					} else if (response.status === 'error') {
						// If validation failure then set item to last selected
						$(item).data('lastSelected').prop('selected', true);
						appCommon.showAlert(response.errorMessage);
					}
				};

				var alertStr = '';
				if ($('.item_box[data-item-type="present"]').size()) {
					var amountSubtotal = 0;
					var pointSubtotal = 0;
					$('.item_box[data-item-type="item"]').each(function (index, item) {
						pointSubtotal += $(item).data('item-point') * $(item).find('select').val();
						amountSubtotal += $(item).find('select').val();
					});
					if (amountSubtotal <= 0) {
						alertStr = "商品の変更をおこなうと、お買い物かごに入っている商品がなくなるため、お選びいただいたプレゼント品がすべて削除されます。";
					} else {
						var pointAvailable = $('.display_point_reserved').data('reserved-point') - $('.display_present_used_point').data('used-point') + pointSubtotal;
						if (pointAvailable < 0) {
							alertStr = "商品の変更をおこなうと、お客様のご利用可能なポイントが、お買い物かごに入っているプレゼント品の利用ポイント合計より少なくなります。";
						}
					}
				}
				if (alertStr.length > 0) {
					appCommon.showConfirm(alertStr, null, function (result) {
						if (result) {
							appCommon.changeCartItem(itemId, amount, update);
						} else {
							$(item).data('lastSelected').prop('selected', true);
						}
					});
				} else {
					appCommon.changeCartItem(itemId, amount, update);
				}
			});

			//////////////////////////////////////////////////////////////////////
			// 
			// bind event for delete_from_cart
			// 
			$('.delete_from_cart').click(function(event) {
				var item = $(this).closest('[data-item-code]');
				$(item).closest('[data-item-code]').find('select').val(0).change();
				return false;
			});

			//////////////////////////////////////////////////////////////////////
			// 
			// bind event for clear_cart
			// 
			$('.clear_cart').on('click', $.proxy(_this.clearCartHandler, this));
		},
		/**
		 * First view initialize
		 */
		initView: function() {
			var _this = this;
			var totalAmount = 0;
			$('[data-item-code]').each(function(index, item) {
				var container = $(item).closest('[data-item-code]');
				var select = container.find('select');
				select.data('lastSelected', $(this).find('option:selected'));
				var price = container.attr('data-item-price');
				var point = container.attr('data-item-point');
				var amount = select.val();
				totalAmount += parseInt(amount | 0);
				
				if (amount > 0) {
					// there is item in cart
					$(item).find('.when-added').show();
					$(item).find('.when-empty').hide();
				} else {
					if ($(item).data('item-type') == 'item') {
						// there is item in cart
						$(item).find('.when-added').hide();
						$(item).find('.when-empty').show();
					} else if ($(item).data('item-type') == 'present') {
						$(item).remove();
					}
				}
				container.find('span.price').text(appCommon.numberFormat(price * amount));
				container.find('span.point').text(appCommon.numberFormat(point * amount));
			});

			if ($('#add_another_present').size() && $('.display_item_amount').text() == '0') {
				$('#add_another_present').hide();
			}
			//
			// Clear cart button
			if (totalAmount > 0) {
				_this.enableClearCartButton();
			} else {
				_this.disableClearCartButton();
			}
		},
		
		updateView: function (data) {
			var _this = this;
			$('[data-item-type="item"]').each(function(index, item) {
				var container = $(item).closest('[data-item-code]');
				var select = container.find('select');
				select.data('lastSelected', $(this).find('option:selected'));
				var isExists = false;

				for (var i in data.shohin.items) {
					if (data.shohin.items[i].id == $(container).data('item-code')) {
						isExists = true;
						if (data.shohin.items[i].quantity > 0) {
							// there is item in cart
							$(item).find('span.price').text(appCommon.numberFormat(data.shohin.items[i].priceSubtotal));
							$(item).find('span.point').text(appCommon.numberFormat(data.shohin.items[i].pointSubtotal));
							$(item).find('.when-added').show();
							$(item).find('.when-empty').hide();
						} else {
							// there is item in cart
							$(item).find('.when-added').hide();
							$(item).find('.when-empty').show();
						}
						break;
					}
				}
				if (!isExists) {
					$(item).remove();
				}
			});
			$('[data-item-type="present"]').each(function(index, item) {
				var container = $(item).closest('[data-item-code]');
				var select = container.find('select');
				select.data('lastSelected', $(this).find('option:selected'));
				var isExists = false;

				for (var i in data.present.items) {
					if (data.present.items[i].id == $(container).data('item-code')) {
						isExists = true;
						if (data.present.items[i].quantity > 0) {
							// there is item in cart
							$(item).find('span.point').text(appCommon.numberFormat(data.present.items[i].pointSubtotal));
							$(item).find('.when-added').show();
							$(item).find('.when-empty').hide();
						} else {
							$(item).remove();
						}
					}
				}
				if (!isExists) {
					$(item).remove();
				}
			});

			$('[data-item-type="campaign"]:visible').remove();
			var container = $('.campaign_container');
			var itemTpl = $('[data-item-type="campaign"]');
			for (var i in data.campaign.items) {
				var itemView = itemTpl.clone();
				itemView.find('img').attr('src', '/assets/ps/domo/present_guide/index/img/pic_index_'+data.campaign.items[i].id+'_'+data.campaign.items[i].level+'.jpg');
				itemView.find('.item_title').text(data.campaign.items[i].name);
				itemView.find('.amount').text(data.campaign.items[i].quantity);
				container.append(itemView);
				itemView.show();

			}

			if ($('#add_another_present').size() > 0 && data.shohin.quantity > 0) {
				$('#add_another_present').show();
			} else {
				$('#add_another_present').hide();
			}

			var totalPoint = data.point.addition - data.point.consumption;
			if (totalPoint > 0) {
				totalPoint = String('+' + appCommon.numberFormat(totalPoint));
			} else {
				totalPoint = String(appCommon.numberFormat(totalPoint));
			}
			
			$('.display_item_amount').text(appCommon.numberFormat(data.shohin.quantity));
			$('.display_item_total_price').text(appCommon.numberFormat(data.shohin.priceSubtotal));
			if ($('#point_reserved').size()) {
				$('.display_point_reserved').text(appCommon.numberFormat(data.point.reserved)).data('reserved-point', data.point.reserved);
				$('.display_item_additional_point').text(String('+' + appCommon.numberFormat(data.shohin.pointSubtotal)));
			}
			
			$('.item_total tr:gt(1)').remove();
			var container = $('.item_total');
			for (var i in data.campaignPoint.items) {
				var campaignPoint = container.find('tr').clone();
				$(campaignPoint[0]).find('td').text(data.campaignPoint.items[i].name);
				$(campaignPoint[1]).find('td').text('-');
				$(campaignPoint[1]).find('.point-col').text('+'+data.campaignPoint.items[i].pointSubtotal+'ポイント');
				container.append(campaignPoint);
			}
			
			// point
			if ($('#point_reserved').size()) {
				$('.display_present_amount').text(appCommon.numberFormat(data.present.quantity));
				$('.display_present_used_point').text(String(appCommon.numberFormat(data.present.pointSubtotal))).data('used-point', data.present.pointSubtotal);
			};
			$('.display_campaign_present_amount').text(appCommon.numberFormat(data.campaign.quantity));
			// total
			$('.display_total_amount').text(appCommon.numberFormat(data.total.quantity));
			$('.display_total_price').text(appCommon.numberFormat(data.total.priceTotal));
			// next point
			$('.display_next_point').text(appCommon.numberFormat(data.point.available));
			$('.display_deposit_price').text(appCommon.numberFormat(data.total.deposit));
			$('.display_reduction_price').text(appCommon.numberFormat(data.total.reduction));
			if (data.shohin.quantity>0) {
				$('#message-deposit').show();
				$('#table_deposit_subtotal').show();
			} else {
				$('#message-deposit').hide();
				$('#table_deposit_subtotal').hide();
			}

			// 
			// Reset 'clear cart' view
			if (data.total.quantity > 0) {
				_this.enableClearCartButton();
			} else {
				_this.disableClearCartButton();
			}
		},
		/**
		 * Clear cart pressed handler
		 */
		clearCartHandler: function(event) {
			var _this = this;
			appCommon.showConfirm('お選びいただいた商品、プレゼント品をお買い物かごから全て削除いたします。', '', function(result) {
				if (result) {
					appCommon.clearCartItem(function (response) {
						if (response.status === 'ok') {
							$('[data-item-code] select').val(0);
							_this.updateView(response.data);
						} else if (response.status === 'error') {
							appCommon.showAlert(response.errorMessage);
						}
					});
				}
			});
			return false;
		},
		/**
		 * Enable clear cart button
		 */
		enableClearCartButton: function() {
			$('.clear_cart').css({
				opacity: 1,
				cursor: 'pointer'
			});
			$('.clear_cart')
				.off('click')
				.on('click', $.proxy(this.clearCartHandler, this))
			;
		},
		/**
		 * Disable clear cart button
		 */
		disableClearCartButton: function() {
			$('.clear_cart').css({
				opacity: 0.7,
				cursor: 'default'
			});
			$('.clear_cart')
				.off('click')
				.on('click', function() { return false; })
			;
		}
	};
	// 
	// Initialize
	page.initialize();
});
