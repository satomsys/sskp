$(function () {
	$(document).ajaxSuccess(function ( event, jqXHR, ajaxOptions, data ){
		if (ajaxOptions.url.match(/\/(domo|chohakusenjin)\/service\/api\/(addToCartDirectOrder|updateQuantityDirectOrder|clearCartDirectOrder|getCartSummaryDirectOrder).json/)) {
			var total_src = '</tr><tr class="totalElement"><td class="name">商品合計（税込）</td><td class="quantity"><span>{{quantity}}</span>点</td><td class="price"><span>{{total}}</span>円</td></tr>';
			$('#cart_table').find('tbody').empty();
			if (data && data.shohin) {
				if (data.shohin.items) {
					var items = data.shohin.items;

					for (i = 0; i < items.length; i++) {
						var item_src = '<tr class="defaultElement"><td class="name">{{shohinName}}</td><td class="quantity"><span>{{quantity}}</span>点</td><td class="price"><span>{{subtotal}}</span>円</td></tr>';
						if (items[i].quantity > 0) {
							item_src = item_src.replace(/\{\{shohinName\}\}/g, items[i].name).replace(/\{\{quantity\}\}/g, items[i].quantity).replace(/\{\{subtotal\}\}/g, items[i].priceSubtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
							$('#cart_table').find('tbody').append(item_src);
						}
					}

					if (data.shohin.quantity > 0) {
						total_src = total_src.replace(/\{\{quantity\}\}/g, data.shohin.quantity).replace(/\{\{total\}\}/g, data.shohin.priceSubtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
						$('#cart_table').find('tbody').append(total_src);
					}
				}

				if (data.shohin.quantity <= 0) {
					total_src = total_src.replace(/\{\{quantity\}\}/g, 0).replace(/\{\{total\}\}/g, 0);
					$('#cart_table').find('tbody').append(total_src);
				}
			}
		}
	});
});




