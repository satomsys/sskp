var appCommon = {
	showAlert: function(message, title) {
		// jAlert(message, title);
		alert(message);
	},
	showConfirm: function(message, title, callback) {
		// jConfirm(message, title, callback)
		if (callback) {
			return callback(confirm(message));
		}
		return confirm(message);
	},
	/**
	 * Apply selected items to cart
	 */
	applyCartChange: function() {
		//
	},
	/**
	 *
	 *
	 */
	addToCart: function(itemId, callback) {
		$.ajax('/domo/service/api/resrv_order/addToCart.json', {
			type: 'POST',
			async: true,
			cache: false,
			timeout: 10000,
			data: JSON.stringify({
				id: itemId
			}),
			success: function(data, status, xhr) {
				var response = {};
				response.status = 'ok';
				response.data = data;
				callback(response);
			},
			complete: function(xhr, status) {
				// 
			},
			error: function(xhr, status, error) {
				var response = {};
				var errorMessage = appCommon.handleErrorMessage(error);
				response.status = 'error';
				response.errorMessage = errorMessage;
				callback(response);
			}
		});
	},
	/**
	 *
	 *
	 */
	changeCartItem: function(itemId, amount, callback) {
		$.ajax('/domo/service/api/resrv_order/updateQuantity.json', {
			type: 'POST',
			async: true,
			cache: false,
			timeout: 10000,
			data: JSON.stringify({
				id: itemId,
				quantity: parseInt(amount)
			}),
			success: function(data, status, xhr) {
				var response = {};
				response.status = 'ok';
				response.data = data;
				callback(response);
			},
			complete: function(xhr, status) {
				// 
			},
			error: function(xhr, status, error) {
				var response = {};
				var errorMessage = appCommon.handleErrorMessage(error);
				response.status = 'error';
				response.errorMessage = errorMessage;
				callback(response);
			}
		});
	},
	/**
	 *
	 *
	 */
	clearCartItem: function(callback) {
		$.ajax('/domo/service/api/resrv_order/clearCart.json', {
			type: 'POST',
			async: true,
			cache: false,
			timeout: 10000,
			success: function(data, status, xhr) {
				var response = {};
				response.status = 'ok';
				response.data = data;
				callback(response);
			},
			complete: function(xhr, status) {
				// 
			},
			error: function(xhr, status, error) {
				var response = {};
				var errorMessage = appCommon.handleErrorMessage(error);
				response.status = 'error';
				response.errorMessage = errorMessage;
				callback(response);
			}
		});
	},
	/**
	 * Add comma to number
	 * @param integer number
	 * @return string formatted number
	 */
	numberFormat: function(number) {
		return number.toString().replace(/([\d]+?)(?=(?:\d{3})+$)/g, function(t){
			return t + ',';
		});
	},
	/**
	 * Handle error message
	 * convert error code to error message
	 * 
	 * @param code Error code from server
	 * @return string error message
	 */
	handleErrorMessage: function(code) {
		var message;
		switch (code) {
			case 'CRER0201':
				message = '商品またはプレゼント品が見つかりませんでした。';
				break;
			case 'CRER0301':
				message = '商品またはプレゼント品が見つかりませんでした。';
				break;
			case 'CRER0302':
				message = '選択された商品の数量が不正です。';
				break;
			case 'CRER9901':
				message = '飲むドモホルンリンクルは、合計2個までの販売とさせていただきます。';
				break;
			case 'CRER9902':
				message = 'ハーフセットはいずれか1セット限定の販売とさせていただきます。';
				break;
			case 'CRER9903':
				message = '購入上限を超えました。購入することはできません。';
				break;
			case 'CRER9904':
				message = '選択上限を超えました。選択することはできません。';
				break;
			case 'CRER9905':
				message = 'お手持ちのポイントが足りません。';
				break;
			case 'CRER9906':
				message = '飲むドモホルンリンクル「1箱（14本入り）」を2個ご希望の場合、さらにお得な「2箱（28本入り）」1個がお勧めです。同じ本数で特典2本がつき、5ポイントとなります。';
				break;
			case 'CRER9907':
				message = '飲むドモホルンリンクル「1箱（7本入り）」を2個ご希望の場合、さらにお得な「1箱（14本入り）」1個がお勧めです。';
				break;
			case 'CRER9908':
				message = '申し訳ございませんが、白花の0ポイントでのお届けについては、1個までとさせていただいております。';
				break;
			case 'CRER9909':
				message = '申し訳ございませんが、飲むドモホルンリンクル（1本）のお届けについては、1個までとさせていただいております。';
				break;
			case 'timeout':
				message = '現在、ページの表示に時間がかかっております。しばらくお待ちいただき、再度アクセスしてください。';
				break;
			default:
				message = 'ご注文商品を承れる個数の上限を超えた場合や一時的に通信ができなかったため、正しく処理を完了できませんでした。\n恐れ入りますが、商品の個数をご確認いただくか、通信環境をご確認いただき、再度操作を行ってください。';
		}
		return message;
	}
}