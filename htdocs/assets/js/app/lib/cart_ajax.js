/*
cart_ajax.coffee
主に AJAX との通信部分
*/


(function() {
  define(['require', 'backbone', 'jquery', 'underscore', 'models/cart_item', 'collections/cart_items'], function(require) {
    var $, Backbone, CartAjax, CartItem, CartItems, POST_ADD_TO_CART_URL, POST_REMOVE_ALL_ITEMS_URL, POST_UPDATE_QUANTITY_URL, _;
    Backbone = require('backbone');
    $ = require('jquery');
    _ = require('underscore');
    CartItem = require('models/cart_item');
    CartItems = require('collections/cart_items');
    POST_ADD_TO_CART_URL = '/domo/service/api/addToCart.json';
    POST_UPDATE_QUANTITY_URL = '/domo/service/api/updateQuantity.json';
    POST_REMOVE_ALL_ITEMS_URL = '/domo/service/api/clearCart.json';
    /*
    TEMP: 商品データ
    動作確認モック用仮データ
    */

    CartAjax = (function() {
      _.extend(CartAjax.prototype, Backbone.Events);

      function CartAjax(cart) {
        this.cart = cart;
        this.itemsObj = {};
      }

      /*
      TEMP: セット品を展開する
      動作確認モック用仮データ
      */


      /*
      モック用仮実装：セット商品を展開する
      セット品はサーバ側で展開する予定
      */


      /*
      cart の中身を整理する必要があれば整理する
      */


      CartAjax.prototype.normalizeCart = function() {};

      /*
      サーバへ POST する
      */


      CartAjax.prototype.sync = function(o) {
        var action, type;
        type = o.type || null;
        action = o.action || null;
        if (type === 'product' || 'present') {
          if (action === 'add') {
            this.postAddToCart(o);
          }
          if (action === 'change') {
            this.postUpdateQuantity(o);
          }
          if (action === 'remove') {
            this.postRemoveFromCart(o);
          }
        }
        if (action === 'removeAllItems' && type === null) {
          return this.removeAllItems();
        }
      };

      /*
      商品/プレゼント品を追加するメッセージを送信する
      セット品の扱いによっては変更が必要
      */


      CartAjax.prototype.postAddToCart = function(o) {
        var _this = this;
        return $.ajax({
          beforeSend: function(xhr) {
            return xhr.overrideMimeType("application/x-www-form-urlencoded; charset=Shift_JIS");
          },
          type: 'POST',
          url: POST_ADD_TO_CART_URL,
          data: '{"id":"' + o.shohinCd + '"}',
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded; charset=Shift_JIS',
          timeout: 10000
        }).always(function(data, textStatus, jqXHR) {
          return _this.onAjaxComplete(data, textStatus, jqXHR);
        });
      };

      /*
      商品/プレゼント品を削除するメッセージを送信する
      */


      CartAjax.prototype.postRemoveFromCart = function(o) {
        var _this = this;
        return $.ajax({
          beforeSend: function(xhr) {
            return xhr.overrideMimeType("application/x-www-form-urlencoded; charset=Shift_JIS");
          },
          type: 'POST',
          url: POST_UPDATE_QUANTITY_URL,
          data: '{"id":"' + o.shohinCd + '","quantity":0}',
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded; charset=Shift_JIS',
          timeout: 10000
        }).always(function(data, textStatus, jqXHR) {
          return _this.onAjaxComplete(data, textStatus, jqXHR);
        });
      };

      /*
      商品/プレゼント品を変更するメッセージを送信する
      */


      CartAjax.prototype.postUpdateQuantity = function(o) {
        var _this = this;
        return $.ajax({
          beforeSend: function(xhr) {
            return xhr.overrideMimeType("application/x-www-form-urlencoded; charset=Shift_JIS");
          },
          type: 'POST',
          url: POST_UPDATE_QUANTITY_URL,
          data: '{"id":"' + o.shohinCd + '","quantity":' + o.quantity + '}',
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded; charset=Shift_JIS',
          timeout: 10000
        }).always(function(data, textStatus, jqXHR) {
          return _this.onAjaxComplete(data, textStatus, jqXHR);
        });
      };

      /*
      全アイテムを削除するメッセージを送信する
      */


      CartAjax.prototype.removeAllItems = function() {
        var _this = this;
        return $.ajax({
          beforeSend: function(xhr) {
            return xhr.overrideMimeType("application/x-www-form-urlencoded; charset=Shift_JIS");
          },
          type: 'POST',
          url: POST_REMOVE_ALL_ITEMS_URL,
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded; charset=Shift_JIS',
          timeout: 10000
        }).always(function(data, textStatus, jqXHR) {
          return _this.onAjaxComplete(data, textStatus, jqXHR);
        });
      };

      /*
      ajax 通信が終わったときに呼び出される
      */


      CartAjax.prototype.onAjaxComplete = function(data, textStatus, jqXHR) {
        var o;
        if (textStatus !== 'success' && _.isString(jqXHR)) {
          this.ajaxError(data, textStatus, jqXHR);
          return;
        }
        this.parseFetchedData(data);
        o = {
          cartItems: this.cartItemsFetched.clone(),
          grandTotal: this.grandTotal(),
          productQuantity: this.productQuantity(),
          productPointGet: this.productPointGet(),
          presentQuantity: this.presentQuantity(),
          campaignPresentQuantity: this.campaignPresentQuantity(),
          campaignPresentPointGet: this.campaignPresentPointGet(),
          pointAvailable: this.pointAvailable(),
          pointSavings: this.pointSavings(),
          pointGet: this.pointGet(),
          pointUse: this.pointUse()
        };
        return this.trigger('success', o);
      };

      /*
      ajaxError のとき
      */


      CartAjax.prototype.ajaxError = function(jqXHR, textStatus, errorThrown) {
        var o;
        o = {
          error: {
            textStatus: textStatus,
            errorThrown: errorThrown
          }
        };
        return this.trigger('error', o);
      };

      /*
      サーバから送られたデータをパースする
      */


      CartAjax.prototype.parseFetchedData = function(data) {
        var cartItems;
        this.grandTotal(data.total.priceTotal);
        this.productQuantity(data.shohin.quantity);
        this.productPointGet(data.shohin.pointSubtotal);
        this.presentQuantity(data.present.quantity);
        this.campaignPresentQuantity(data.campaign.quantity);
        this.campaignPresentPointGet(data.campaign.pointSubtotal);
        this.pointAvailable(data.point.available);
        this.pointSavings(data.point.reserved);
        this.pointGet(data.point.addition);
        this.pointUse(data.point.consumption);
        cartItems = new CartItems();
        _.each(data.shohin.items, function(item) {
          var cartItem;
          cartItem = new CartItem({
            shohinCd: item.id,
            quantity: item.quantity,
            subtotal: item.priceSubtotal,
            point_subtotal: item.pointSubtotal,
            type: 'shohin'
          });
          return cartItems.push(cartItem);
        });
        _.each(data.present.items, function(item) {
          var cartItem;
          cartItem = new CartItem({
            shohinCd: item.id,
            quantity: item.quantity,
            point_subtotal: item.pointSubtotal,
            type: 'present'
          });
          return cartItems.push(cartItem);
        });
        _.each(data.campaign.items, function(item) {
          var cartItem;
          cartItem = new CartItem({
            shohinCd: item.id,
            quantity: item.quantity,
            point_subtotal: item.pointSubtotal,
            name: item.name,
            type: 'campaign',
            level: item.level
          });
          return cartItems.push(cartItem);
        });
        _.each(data.campaignPoint.items, function(item) {
          var cartItem;
          cartItem = new CartItem({
            shohinCd: item.id,
            quantity: item.quantity,
            point_subtotal: item.pointSubtotal,
            name: item.name,
            type: 'campaignPoint'
          });
          return cartItems.push(cartItem);
        });
        return this.cartItemsFetched = cartItems;
      };

      /*
      カート内の商品の合計金額を取得/設定
      */


      CartAjax.prototype.grandTotal = function(grandTotal) {
        if (grandTotal !== void 0) {
          this._grandTotal = grandTotal;
        }
        if (this._grandTotal === void 0) {
          this._grandTotal = 0;
        }
        return this._grandTotal;
      };

      /*
      カート内の商品点数を取得/設定
      */


      CartAjax.prototype.productQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._productQuantity = quantity;
        }
        if (this._productQuantity === void 0) {
          this._productQuantity = 0;
        }
        return this._productQuantity;
      };

      /*
      カート内のプレゼント品点数を返す
      */


      CartAjax.prototype.presentQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._presentQuantity = quantity;
        }
        if (this._presentQuantity === void 0) {
          this._presentQuantity = 0;
        }
        return this._presentQuantity;
      };

      /*
      カート内のキャンペーンプレゼント品点数を返す
      */


      CartAjax.prototype.campaignPresentQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._campaignPresentQuantiy = quantity;
        }
        if (this._campaignPresentQuantiy === void 0) {
          this._campaignPresentQuantiy = 0;
        }
        return this._campaignPresentQuantiy;
      };

      /*
      カート内のキャンペーンプレゼントのポイント合計を返す
      */


      CartAjax.prototype.productPointGet = function(pointGet) {
        if (pointGet !== void 0) {
          this._productPointGet = pointGet;
        }
        if (this._productPointGet === void 0) {
          this._productPointGet = 0;
        }
        return this._productPointGet;
      };

      /*
      カート内のキャンペーンプレゼントのポイント合計を返す
      */


      CartAjax.prototype.campaignPresentPointGet = function(pointGet) {
        if (pointGet !== void 0) {
          this._campaignPresentPointGet = pointGet;
        }
        if (this._campaignPresentPointGet === void 0) {
          this._campaignPresentPointGet = 0;
        }
        return this._campaignPresentPointGet;
      };

      /*
      使用可能ポイント数を返す
      */


      CartAjax.prototype.pointAvailable = function(point) {
        if ((this._pointAvailable != null) && point === void 0) {
          return this._pointAvailable;
        }
        this._pointAvailable = point || 0;
        return this._pointAvailable;
      };

      /*
      取得ポイント数を返す
      */


      CartAjax.prototype.pointGet = function(point) {
        if ((this._pointGet != null) && point === void 0) {
          return this._pointGet;
        }
        this._pointGet = point || 0;
        return this._pointGet;
      };

      /*
      使用ポイント数を返す
      */


      CartAjax.prototype.pointUse = function(point) {
        if ((this._pointUse != null) && point === void 0) {
          return this._pointUse;
        }
        this._pointUse = point || 0;
        return this._pointUse;
      };

      /*
      積立ポイント数を取得/設定
      */


      CartAjax.prototype.pointSavings = function(point) {
        if ((this._pointSavings != null) && point === void 0) {
          return this._pointSavings;
        }
        this._pointSavings = point || 0;
        return this._pointSavings;
      };

      return CartAjax;

    })();
    return CartAjax;
  });

}).call(this);
