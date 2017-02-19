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
				message = '���i�܂��̓v���[���g�i��������܂���ł����B';
				break;
			case 'CRER0301':
				message = '���i�܂��̓v���[���g�i��������܂���ł����B';
				break;
			case 'CRER0302':
				message = '�I�����ꂽ���i�̐��ʂ��s���ł��B';
				break;
			case 'CRER9901':
				message = '���ރh���z���������N���́A���v2�܂ł̔̔��Ƃ����Ă��������܂��B';
				break;
			case 'CRER9902':
				message = '�n�[�t�Z�b�g�͂����ꂩ1�Z�b�g����̔̔��Ƃ����Ă��������܂��B';
				break;
			case 'CRER9903':
				message = '�e���i��1�܂ł̔̔��Ƃ����Ă��������܂��B';
				break;
			case 'CRER9904':
				message = '�e���i��1�܂ł̔̔��Ƃ����Ă��������܂��B';
				break;
			case 'CRER9905':
				message = '���莝���̃|�C���g������܂���B';
				break;
			case 'CRER9906':
				message = '���ރh���z���������N���u1���i14�{����j�v��2����]�̏ꍇ�A����ɂ����ȁu2���i28�{����j�v1�������߂ł��B�����{���œ��T2�{�����A5�|�C���g�ƂȂ�܂��B';
				break;
			case 'CRER9907':
				message = '���ރh���z���������N���u1���i7�{����j�v��2����]�̏ꍇ�A����ɂ����ȁu1���i14�{����j�v1�������߂ł��B';
				break;
			case 'CRER9908':
				message = '���Ԃ�0�|�C���g�ł̂��͂��ɂ��ẮA1�܂łƂ����Ă��������Ă���܂��B';
				break;
			case 'CRER9909':
				message = '�\���󂲂����܂��񂪁A���ރh���z���������N���i1�{�j�̂��͂��ɂ��ẮA1�܂łƂ����Ă��������Ă���܂��B';
				break;
			case 'CRER9999':
				message = data.errorMessage;
				break;
			case 'timeout':
				message = '���݁A�y�[�W�̕\���Ɏ��Ԃ��������Ă���܂��B���΂炭���҂����������A�ēx�A�N�Z�X���Ă��������B';
				break;
			default:
				message = '�����������������ł��܂���ł����B�������܂����A�ʐM�������m�F���������A�ēx������s���Ă��������B';
		}
		return message;
	}
}