$(function () {
	$(document).ajaxSuccess(function ( event, jqXHR, ajaxOptions, data ){
		if (ajaxOptions.url.match(/\/(domo|chohakusenjin)\/service\/api\/(addToCart|updateQuantity|clearCart|getCartSummary).json/)) {
			if (data && data.shohin) {
				var price, reduction;
				if (data.shohin.priceSubtotal) {
					price = data.shohin.priceSubtotal;
				} else {
					price = '0';
				}
				if (data.total.reduction) {
					reduction = data.total.reduction;
				} else {
					reduction = '0';
				}
				$('.price-amount-without-reduction').text(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				$('.price-reduction').text(reduction.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
				if (data.shohin.quantity > 0) {
					$('#message-reduction').show();
				} else {
					$('#message-reduction').hide();
				}
			}
		}
	});
});
