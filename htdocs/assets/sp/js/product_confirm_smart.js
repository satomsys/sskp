var METHOD_QUICK = "1";
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
			$('[data-item-type] select').change(function(event) {
				var container = $(this).closest('[data-item-type]');
				var itemId = container.attr('data-item-code');
				var amount = $(this).val();
				var _item = this;
				var update = function (response) {
					if (response.status === 'ok') {
						_this.updateView(response.data);
						if (response.data.total.quantity == 0) {
							appCommon.showAlert("お買い物かごに商品が入っておりません。商品の選び直しをお願いいたします。\n自動的に商品の選択の画面に切り替わります。");
							setTimeout(function (){location.href='./product_list.html';}, 5000);
						}
					} else if (response.status === 'error') {
						// If validation failure then set item to last selected
						$(_item).data('lastSelected').prop('selected', true);
						
						appCommon.showAlert(response.errorMessage);
					}
				};

				if ($('#reserved_point').size()) {
					var pointSubtotal = 0;
					$('.item_box[data-item-type="item"]').each(function (index, item) {
						pointSubtotal += $(item).data('item-point') * $(item).find('select').val();
					});
					var pointAvailable = $('#reserved_point').data('reserved-point') - $('#use_point').data('use-point') + pointSubtotal;
					if (pointAvailable < 0) {
						appCommon.showConfirm("商品の変更をおこなうと、お客様のご利用可能なポイントが、お買い物かごに入っているプレゼント品の利用ポイント合計より少なくなります。", null, function (result) {
							if (result) {
								appCommon.changeCartItem(itemId, amount, update);
							} else {
								$(_item).data('lastSelected').prop('selected', true);
							}
						});
					} else {
						appCommon.changeCartItem(itemId, amount, update);
					}
				} else {
					appCommon.changeCartItem(itemId, amount, update);
				}
			});

			
			//////////////////////////////////////////////////////////////////////
			// 
			// bind event for ordering_method
			// 

			// Attach change event to ordering_method
			$('input[name="ordering_method"]').change(function(event) {
				if ($(this).val() == METHOD_QUICK) {
					$('.shipping_method_accordion').slideDown(800);
					$('.show_from_kantan_shipping').show();
					$('.show_from_not_kantan_shipping').hide();
					$('.show_from_kantan_shipping').closest('li').css({float: 'right'});
				} else {
					$('.shipping_method_accordion').slideUp(600);
					$('.show_from_kantan_shipping').hide();
					$('.show_from_not_kantan_shipping').show();
					$('.show_from_not_kantan_shipping').closest('li').css({float: 'right'});
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
			// If input[name="ordering_method"] value is not METHOD_QUICK
			// then hide "shipping_method_accordion"
			if ($('input[name="ordering_method"]:checked').val() != METHOD_QUICK) {
				$('.shipping_method_accordion').hide();
				$('.show_from_kantan_shipping').hide();
				$('.show_from_not_kantan_shipping').show();
				$('.show_from_not_kantan_shipping').closest('li').css({float: 'right'});
			} else {
				$('.show_from_kantan_shipping').show();
				$('.show_from_not_kantan_shipping').hide();
				$('.show_from_kantan_shipping').closest('li').css({float: 'right'});
			}
			
			// Refresh delivery
			$('input[name="ordering_method"]:checked').closest('label')
				.removeClass('RABoff')
				.addClass('RABon')
				;

			// Set string length
			if ($('.note_info_count').size()) {
				$('.note_info_count').text($('#NOTE').val().length);
			}

			// Set selected values of items
			$('[data-item-type] select').each(function(index, item) {
				$(item).data('lastSelected', $(item).find('option:selected'));
			});
		},
		
		
		updateView: function (data) {
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
							$(item).find('span.item_amount').text(appCommon.numberFormat(data.shohin.items[i].quantity));
							$(item).find('span.total_point').text(appCommon.numberFormat(data.shohin.items[i].pointSubtotal));
							$(item).find('span.total_price').text(appCommon.numberFormat(data.shohin.items[i].priceSubtotal));
						} else {
							$(item).remove();
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
							$(item).find('span.item_amount').text(appCommon.numberFormat(data.present.items[i].quantity));
							$(item).find('span.total_point').text(appCommon.numberFormat(data.present.items[i].pointSubtotal));
						} else {
							$(item).remove();
						}
					}
				}
				if (!isExists) {
					$(item).remove();
				}
			});

			$('[data-item-type="campaign-present"]:visible').remove();
			var container = $('.campaign_container');
			var itemTpl = $('[data-item-type="campaign-present"]');
			for (var i in data.campaign.items) {
				var itemView = itemTpl.clone();
				itemView.find('img').attr('src', '/assets/ps/domo/present_guide/index/img/pic_index_'+data.campaign.items[i].id+'_'+data.campaign.items[i].level+'.jpg');
				itemView.find('.item_title').text(data.campaign.items[i].name);
				itemView.find('.amount').text(data.campaign.items[i].quantity);
				container.append(itemView);
				itemView.show();
			}

			var totalPoint = data.point.reserved + data.point.addition;
			
			$('#reserved_point').text(appCommon.numberFormat(data.point.reserved)).data('reserved-point', data.point.reserved);
			$('#current_point').text(appCommon.numberFormat(data.shohin.pointSubtotal));
			$('#total_point').text(appCommon.numberFormat(totalPoint));
			$('#use_point').text(appCommon.numberFormat(data.point.consumption)).data('use-point', data.point.consumption);;
			$('#next_reserve_point').text(appCommon.numberFormat(data.point.available));
			$('#total_price_include_tax').text(appCommon.numberFormat(data.total.priceTotal));
			$('#deposit').text(appCommon.numberFormat(data.total.deposit));
			$('#reduction_price').text(appCommon.numberFormat(data.total.reduction));
			$('#total_price_without_reduction').text(appCommon.numberFormat(data.shohin.priceSubtotal));
			
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
			$('.display_present_amount').text(appCommon.numberFormat(data.present.quantity));
			$('.display_present_used_point').text(String(appCommon.numberFormat(data.present.pointSubtotal)));
			// total
			$('.display_total_amount').text(appCommon.numberFormat(data.total.quantity));
			$('.display_total_price').text(appCommon.numberFormat(data.total.priceTotal));
			$('.display_total_point').text(totalPoint);
			// next point
			$('.display_next_point').text(appCommon.numberFormat(data.point.available));

			if (data.shohin.quantity > 0) {
				$('#message-deposit').show();
				$('#deposit_price').show();
			} else {
				$('#message-deposit').hide();
				$('#deposit_price').hide();
			}
		}
	};
	// 
	// Initialize
	page.initialize();
});
