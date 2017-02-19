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
		$.ajax('/domo/service/api/addToCartDirectOrder.json', {
			type: 'POST',
			async: true,
			cache: false,
			timeout: 10000,
			data: JSON.stringify({
				id: itemId
			}),
			success: function(data, status, xhr) {
			},
			complete: function(xhr, status) {
				var response = {};
				response.data = JSON.parse(xhr.responseText);
				if (response.data.error) {
					var errorMessage = appCommon.handleErrorMessage(response.data);
					response.status = 'error';
					response.errorMessage = errorMessage;
				} else {
					response.status = 'ok';
				}
				callback(response);
			},
			error: function(xhr, status, error) {
			}
		});
	},
	/**
	 *
	 *
	 */
	changeCartItem: function(itemId, amount, callback) {
		$.ajax('/domo/service/api/updateQuantityDirectOrder.json', {
			type: 'POST',
			async: true,
			cache: false,
			timeout: 10000,
			data: JSON.stringify({
				id: itemId,
				quantity: parseInt(amount)
			}),
			success: function(data, status, xhr) {
			},
			complete: function(xhr, status) {
				var response = {};
				response.data = JSON.parse(xhr.responseText);
				if (response.data.error) {
					var errorMessage = appCommon.handleErrorMessage(response.data);
					response.status = 'error';
					response.errorMessage = errorMessage;
				} else {
					response.status = 'ok';
				}
				callback(response);
			},
			error: function(xhr, status, error) {
			}
		});
	},
	/**
	 *
	 *
	 */
	clearCartItem: function(callback) {
		$.ajax('/domo/service/api/clearCartDirectOrder.json', {
			type: 'POST',
			async: true,
			cache: false,
			timeout: 10000,
			success: function(data, status, xhr) {
			},
			complete: function(xhr, status) {
				var response = {};
				response.data = JSON.parse(xhr.responseText);
				if (response.data.error) {
					var errorMessage = appCommon.handleErrorMessage(response.data);
					response.status = 'error';
					response.errorMessage = errorMessage;
				} else {
					response.status = 'ok';
				}
				callback(response);
			},
			error: function(xhr, status, error) {
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
	handleErrorMessage: function(data) {
		var message, code=data.error;
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
				message = '各商品は1つまでの販売とさせていただきます。';
				break;
			case 'CRER9904':
				message = '各商品は1つまでの販売とさせていただきます。';
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
				message = '白花の0ポイントでのお届けについては、1個までとさせていただいております。';
				break;
			case 'CRER9909':
				message = '申し訳ございませんが、飲むドモホルンリンクル（1本）のお届けについては、1個までとさせていただいております。';
				break;
			case 'CRER9999':
				message = data.errorMessage;
				break;
			case 'timeout':
				message = '現在、ページの表示に時間がかかっております。しばらくお待ちいただき、再度アクセスしてください。';
				break;
			default:
				message = '正しく処理を完了できませんでした。恐れ入りますが、通信環境をご確認いただき、再度操作を行ってください。';
		}
		return message;
	}
}