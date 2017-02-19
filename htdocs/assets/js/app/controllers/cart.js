/*
cart.coffee
HTML 上の各要素と、通信部分との間を取り持つクラス
*/


(function() {
  define(['require', 'backbone', 'underscore', 'models/cart_item', 'collections/cart_items', 'lib/cart_ajax', 'lib/cart_redirect_productpage', 'lib/cart_ajax_error_dialog', 'lib/comma'], function(require) {
    var Backbone, Cart, CartAjax, CartAjaxErrorDialog, CartItem, CartItems, Comma, MAX_PRESENT_LIMIT, _;
    Backbone = require('backbone');
    _ = require('underscore');
    CartItem = require('models/cart_item');
    CartItems = require('collections/cart_items');
    CartAjax = require('lib/cart_ajax');
    Comma = require('lib/comma');
    CartAjaxErrorDialog = require('lib/cart_ajax_error_dialog');
    MAX_PRESENT_LIMIT = 20;
    /*
    */

    Cart = (function() {
      _.extend(Cart.prototype, Backbone.Events);

      function Cart() {
        this._cartItems = new CartItems();
        this.ajax = new CartAjax(this);
        this.initAjaxEvents(this.ajax);
        this._itemBlocks = {};
        this._headerCartButton = null;
        this._tableRowDatas = {};
        this._cartAjaxErrorDialog = new CartAjaxErrorDialog();
      }

      /*
      Ajax イベントを初期化する
      */


      Cart.prototype.initAjaxEvents = function(ajax) {
        ajax.on('success', _.bind(this.onAjaxSuccess, this));
        return ajax.on('error', _.bind(this.onAjaxError, this));
      };

      /*
      カートに商品を追加する
      */


      Cart.prototype.addProduct = function(shohinCd, quantity) {
        var item;
        item = this.cartItem(shohinCd);
        if (!item) {
          throw new Error('addProduct no item : ' + shohinCd);
        }
        item = new CartItem(item);
        item.quantity += Number(quantity);
        return this.sync({
          shohinCd: shohinCd,
          quantity: quantity,
          type: 'product',
          action: 'add',
          item: item
        });
      };

      /*
      カートから商品を削除する
      */


      Cart.prototype.removeProduct = function(shohinCd) {
        var item;
        item = this.item(shohinCd);
        if (!item) {
          throw new Error('removeProduct no item : ' + shohinCd);
        }
        item = new CartItem(item);
        item.quantity = 0;
        return this.sync({
          shohinCd: shohinCd,
          quantity: item.quantity,
          type: 'product',
          action: 'remove',
          item: item
        });
      };

      /*
      カートの商品の数量を変更する
      */


      Cart.prototype.changeProductQuantity = function(shohinCd, quantity) {
        var item;
        item = this.cartItem(shohinCd);
        if (!item) {
          throw new Error('changeProductQuantity no item : ' + shohinCd);
        }
        item = new CartItem(item);
        item.quantity = Number(quantity);
        return this.sync({
          shohinCd: shohinCd,
          quantity: item.quantity,
          type: 'product',
          action: 'change',
          item: item
        });
      };

      /*
      カートにプレゼント品を追加する
      */


      Cart.prototype.addPresent = function(shohinCd, quantity) {
        var item;
        item = this.cartItem(shohinCd);
        if (!item) {
          return;
        }
        item = new CartItem(item);
        item.quantity += Number(quantity);
        return this.sync({
          shohinCd: shohinCd,
          quantity: quantity,
          type: 'present',
          action: 'add',
          item: item
        });
      };

      /*
      カートからプレゼント品を削除する
      */


      Cart.prototype.removePresent = function(shohinCd) {
        var item;
        item = this.item(shohinCd);
        if (!item) {
          return;
        }
        item = new CartItem(item);
        item.quantity = 0;
        return this.sync({
          shohinCd: shohinCd,
          quantity: item.quantity,
          type: 'present',
          action: 'remove',
          item: item
        });
      };

      /*
      カートのプレゼント品の数量を変更する
      */


      Cart.prototype.changePresentQuantity = function(shohinCd, quantity) {
        var item;
        item = this.cartItem(shohinCd);
        if (!item) {
          return;
        }
        item = new CartItem(item);
        item.quantity = Number(quantity);
        return this.sync({
          shohinCd: shohinCd,
          quantity: item.quantity,
          type: 'present',
          action: 'change',
          item: item
        });
      };

      /*
      カートの商品をすべて削除する
      */


      Cart.prototype.removeAllItems = function() {
        return this.sync({
          action: 'removeAllItems'
        });
      };

      /*
      Ajax 通信をする
      */


      Cart.prototype.sync = function(o) {
        this.trigger('startSync');
        return this.ajax.sync(o);
      };

      /* 
      商品(CartItem インスタンス) を返す。無かったらundefined
      */


      Cart.prototype.item = function(shohinCd) {
        return this._cartItems.findByShohinCd(shohinCd);
      };

      /* 
      カート内の商品(CartItems インスタンス) を返す
      */


      Cart.prototype.items = function() {
        return this._cartItems;
      };

      /*
      商品追加・削除の通信が終了したら呼び出されるコールバック関数
      正常終了時
      */


      Cart.prototype.onAjaxSuccess = function(data) {
        this._cartItems = data.cartItems;
        this.grandTotal(data.grandTotal);
        this.productQuantity(data.productQuantity);
        this.productPointGet(data.productPointGet);
        this.presentQuantity(data.presentQuantity);
        this.campaignPresentQuantity(data.campaignPresentQuantity);
        this.campaignPresentPointGet(data.campaignPresentPointGet);
        this.pointAvailable(data.pointAvailable);
        this.pointSavings(data.pointSavings);
        this.pointGet(data.pointGet);
        this.pointUse(data.pointUse);
        return this.updateCart();
      };

      /*
      商品追加・削除の通信が終了したら呼び出されるコールバック関数
      */


      Cart.prototype.onAjaxError = function(data) {
        this.updateCart();
        return this._cartAjaxErrorDialog.show(data.error.status, data.error.errorThrown);
      };

      /*
      カートアップデート処理
      受信後に何か処理が必要であればここで処理する
      */


      Cart.prototype.updateCart = function() {
        if (this.backProductSelectPageWhenZeroProduct() && this.productQuantity() <= 0) {
          this.backProductSelectPage();
        }
        return this.trigger('change');
      };

      /*
      HeaderButtonを登録する
      */


      Cart.prototype.headerCartButton = function(headerCartButton) {
        if (headerCartButton !== void 0) {
          this._headerCartButton = headerCartButton;
        }
        return this._headerCartButton;
      };

      /*
      ItemBlock01 を登録する
      */


      Cart.prototype.addItemBlock = function(shohinCd, itemBlock) {
        return this._itemBlocks[shohinCd] = itemBlock;
      };

      /*
      ItemBlock01 を返す
      */


      Cart.prototype.itemBlock = function(shohinCd) {
        return this._itemBlocks[shohinCd] || null;
      };

      /*
      TableRowData01 を登録する
      */


      Cart.prototype.addTableRowData = function(shohinCd, tableRowData) {
        if (shohinCd) {
          return this._tableRowDatas[shohinCd] = tableRowData;
        }
      };

      /*
      TableRowData01 を返す
      */


      Cart.prototype.tableRowData = function(shohinCd) {
        return this._tableRowDatas[shohinCd] || null;
      };

      /*
      CartItem を作成する。すでに作成されていたらそれを返す
      */


      Cart.prototype.cartItem = function(shohinCd) {
        var currentQuantity, item, point_subtotal, subtotal, type;
        if (this.item(shohinCd)) {
          return this.item(shohinCd);
        }
        currentQuantity = 0;
        if (this.itemBlock(shohinCd)) {
          currentQuantity = this.itemBlock(shohinCd).quantity();
        }
        if (this.tableRowData(shohinCd)) {
          currentQuantity = this.tableRowData(shohinCd).quantity();
        }
        currentQuantity = Number(currentQuantity);
        subtotal = 0;
        if (this.tableRowData(shohinCd)) {
          subtotal = this.tableRowData(shohinCd).subtotal();
        }
        point_subtotal = 0;
        if (this.tableRowData(shohinCd)) {
          point_subtotal = this.tableRowData(shohinCd).point_subtotal();
        }
        if (this.tableRowData(shohinCd)) {
          type = this.tableRowData(shohinCd).itemType;
        }
        item = new CartItem({
          shohinCd: shohinCd,
          quantity: currentQuantity,
          subtotal: subtotal,
          point_subtotal: point_subtotal,
          type: type
        });
        this._cartItems.add(item);
        return item;
      };

      /*
      HTML からデータを取得する
      */


      Cart.prototype.fetchItemStatus = function() {
        var item, row, shohinCd, _ref, _ref1;
        _ref = this._itemBlocks;
        for (shohinCd in _ref) {
          item = _ref[shohinCd];
          if (item.quantity() === 0) {
            continue;
          }
          this.cartItem(shohinCd);
        }
        _ref1 = this._tableRowDatas;
        for (shohinCd in _ref1) {
          row = _ref1[shohinCd];
          if (row.quantity() === 0) {
            continue;
          }
          if (!shohinCd) {
            continue;
          }
          this.cartItem(shohinCd);
        }
        this.fetchDataFromHeaderButton();
        this.fetchDataFromTable();
        return this.updateCart();
      };

      /*
      ヘッダのボタンから情報を取得する
      モック動作用関数
      */


      Cart.prototype.fetchDataFromHeaderButton = function() {
        var b;
        b = this.headerCartButton();
        if (b.$el.length < 1) {
          return;
        }
        this.grandTotal(b.grandTotal());
        this.pointAvailable(b.pointAvailable());
        this.productQuantity(b.productQuantity());
        return this.presentQuantity(b.presentQuantity());
      };

      /*
      商品小計・合計テーブルから値を取得する
      */


      Cart.prototype.fetchDataFromTable = function() {
        var campaignPresentPointGet, campaignPresentQuantity, grandTotal, pointAvailable, pointSavings, pointUse, presentQuantity, productPointGet, productQuantity,
          _this = this;
        grandTotal = $('table.table-grand-total .col-subtotal .price-amount').text();
        productQuantity = $('table.table-subtotal .product-summary-row .col-quantity .quantity-amount').text();
        presentQuantity = $('table.table-subtotal .present-summary-row .col-quantity .quantity-amount').text();
        pointAvailable = $('table.table-point-available .col-point .point-amount').text();
        pointSavings = $('table.table-point-reserved .col-point .point-amount').text();
        productPointGet = $('table.table-subtotal .product-summary-row .col-point .point-amount').text();
        pointUse = $('table.table-subtotal .present-summary-row .col-point .point-amount').text();
        if (grandTotal && this.grandTotal() === 0) {
          grandTotal = Comma.remove(grandTotal);
          this.grandTotal(Number(grandTotal));
        }
        if (productQuantity.length > 0) {
          this.productQuantity(Number(productQuantity));
        }
        if (presentQuantity.length > 0 && this.presentQuantity() === 0) {
          this.presentQuantity(Number(presentQuantity));
        }
        if (pointAvailable.length > 0) {
          pointAvailable = Comma.remove(pointAvailable);
          this.pointAvailable(Number(pointAvailable));
        }
        if (pointSavings.length > 0) {
          pointSavings = Comma.remove(pointSavings);
          this.pointSavings(Number(pointSavings));
        }
        if (productPointGet.length > 0) {
          productPointGet = Comma.remove(productPointGet);
          this.productPointGet(Number(productPointGet));
        }
        if (pointUse.length > 0) {
          pointUse = Comma.remove(pointUse);
          this.pointUse(Number(pointUse));
        }
        if ($('table.table-subtotal .campaign-point-row')) {
          $('table.table-subtotal .campaign-point-row').each(function(idx, item) {
            var $item, name, pointSubtotal, quantity, shohinCd;
            $item = $(item);
            shohinCd = $item.attr('data-shohin-cd');
            quantity = $item.find('.col-quantity .quantity-amount').text();
            pointSubtotal = $item.find('.col-point .point-amount').text();
            pointSubtotal = Comma.remove(pointSubtotal);
            name = $item.find('.col-row-header').text();
            if (quantity === '-') {
              quantity = 0;
            }
            if (name && shohinCd) {
              item = new CartItem({
                shohinCd: shohinCd,
                quantity: Number(quantity),
                point_subtotal: Number(pointSubtotal),
                name: name,
                type: 'campaignPoint'
              });
              _this._cartItems.add(item);
              return campaignPresentPointGet += Number(pointSubtotal);
            }
          });
        }
        if ($('table.campaign-presents-table tr.table-row-data01')) {
          campaignPresentQuantity = this.campaignPresentQuantity();
          campaignPresentPointGet = this.campaignPresentPointGet();
          $('table.campaign-presents-table tr.table-row-data01').each(function(idx, item) {
            var $item, name, pointSubtotal, quantity, shohinCd, subtotal;
            $item = $(item);
            shohinCd = $item.attr('data-shohin-cd');
            quantity = $item.find('.col-quantity .quantity-amount').text() || 0;
            subtotal = $item.find('.col-subtotal .subtotal-amount').text() || 0;
            pointSubtotal = $item.find('.col-point .point-amount').text() || 0;
            pointSubtotal = Comma.remove(pointSubtotal);
            name = $item.find('.shohin-name').text();
            if (name && shohinCd) {
              item = new CartItem({
                shohinCd: shohinCd,
                quantity: Number(quantity),
                point_subtotal: Number(pointSubtotal),
                name: name,
                type: 'campaign'
              });
              _this._cartItems.add(item);
              campaignPresentQuantity += Number(quantity);
              return campaignPresentPointGet += Number(pointSubtotal);
            }
          });
          this.campaignPresentQuantity(campaignPresentQuantity);
          return this.campaignPresentPointGet(campaignPresentPointGet);
        }
      };

      /*
      カートのご注文商品 合計金額を返す/設定する
      */


      Cart.prototype.grandTotal = function(total) {
        if (total !== void 0) {
          this._grandTotal = total;
        }
        if (this._grandTotal === void 0) {
          this._grandTotal = 0;
        }
        return this._grandTotal;
      };

      /*
      カートのご注文商品・プレゼント品・キャンペーン・プレゼント品個数合計を返す
      */


      Cart.prototype.totalQuantity = function() {
        var total;
        total = this.productQuantity() + this.presentQuantity() + this.campaignPresentQuantity();
        return total;
      };

      /*
      現在利用可能ポイントを返す/設定する
      */


      Cart.prototype.pointAvailable = function(point) {
        if (point !== void 0) {
          this._pointAvailable = point;
        }
        if (this._pointAvailable === void 0) {
          this._pointAvailable = 0;
        }
        return this._pointAvailable;
      };

      /*
      積立ポイントを返す/設定する
      */


      Cart.prototype.pointSavings = function(point) {
        if (point !== void 0) {
          this._pointSavings = point;
        }
        if (this._pointSavings === void 0) {
          this._pointSavings = 0;
        }
        return this._pointSavings;
      };

      /*
      今回のポイント合計を返す
      */


      Cart.prototype.pointTotal = function() {
        return Number(this.pointAvailable()) - Number(this.pointSavings());
      };

      /*
      今回取得ポイントを返す/設定する
      */


      Cart.prototype.pointGet = function(point) {
        if (point !== void 0) {
          this._pointGet = point;
        }
        if (this._pointGet === void 0) {
          this._pointGet = 0;
        }
        return this._pointGet;
      };

      /*
      今回使用ポイントを返す/設定する
      */


      Cart.prototype.pointUse = function(point) {
        if (point !== void 0) {
          this._pointUse = point;
        }
        if (this._pointUse === void 0) {
          this._pointUse = 0;
        }
        return this._pointUse;
      };

      /*
      今回取得の商品購入ポイントを返す/設定する
      */


      Cart.prototype.productPointGet = function(point) {
        if (point !== void 0) {
          this._productPointGet = point;
        }
        if (this._productPointGet === void 0) {
          this._productPointGet = 0;
        }
        return this._productPointGet;
      };

      /*
      今回取得キャンペーンポイントを返す/設定する
      */


      Cart.prototype.campaignPresentPointGet = function(point) {
        if (point !== void 0) {
          this._campaignPointGet = point;
        }
        if (this._campaignPointGet === void 0) {
          this._campaignPointGet = 0;
        }
        return this._campaignPointGet;
      };

      /*
      カートのご注文商品の合計金額を返す
      */


      Cart.prototype.productSubTotal = function(subtotal) {
        return this.grandTotal();
      };

      /*
      カートのプレゼント品の小計金額
      */


      Cart.prototype.presentSubTotal = function(subtotal) {
        return 0;
      };

      /*
      カートのキャンペーンプレゼント品の小計金額
      */


      Cart.prototype.campaignPresentSubTotal = function(subtotal) {
        return 0;
      };

      /*
      カートのご注文商品点数を返す/設定する
      */


      Cart.prototype.productQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._productQuantity = quantity;
        }
        if (this._productQuantity === void 0) {
          this._productQuantity = 0;
        }
        return this._productQuantity;
      };

      /*
      カートのプレゼント品点数を返す/設定する
      */


      Cart.prototype.presentQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._presentQuantity = quantity;
        }
        if (this._presentQuantity === void 0) {
          this._presentQuantity = 0;
        }
        return this._presentQuantity;
      };

      /*
      カートのプレゼント品点数を返す/設定する
      */


      Cart.prototype.presentQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._presentQuantity = quantity;
        }
        if (this._presentQuantity === void 0) {
          this._presentQuantity = 0;
        }
        return this._presentQuantity;
      };

      /*
      カートのキャンペーンプレゼント品点数を返す/設定する
      */


      Cart.prototype.campaignPresentQuantity = function(quantity) {
        if (quantity !== void 0) {
          this._campaignPresentQuantity = quantity;
        }
        if (this._campaignPresentQuantity === void 0) {
          this._campaignPresentQuantity = 0;
        }
        return this._campaignPresentQuantity;
      };

      /*
      最後の商品の場合 true
      */


      Cart.prototype.isLastProduct = function(shohinCd) {
        var item;
        item = this.item(shohinCd) || {
          quantity: 0
        };
        return this.productQuantity() === item.quantity;
      };

      /*
      保持ポイントが、使用ポイントを下回る場合に true
      */


      Cart.prototype.isPointShort = function(shohinCd, quantity) {
        var available, item, point;
        item = this.item(shohinCd);
        if (quantity > item.quantity) {
          return false;
        }
        point = item.point_subtotal / item.quantity;
        available = this.pointAvailable() - item.point_subtotal + point * quantity;
        return available < 0;
      };

      /*
      プレゼント品の最大選択可能個数を返す
      */


      Cart.prototype.presentSelectableLimit = function(shohinCd) {
        var available, i, item, max, point, requiredPoint, _i;
        item = this.item(shohinCd);
        if (!item) {
          return;
        }
        max = MAX_PRESENT_LIMIT;
        point = item.point_subtotal / item.quantity;
        available = this.pointAvailable() + item.point_subtotal;
        for (i = _i = 1; 1 <= max ? _i <= max : _i >= max; i = 1 <= max ? ++_i : --_i) {
          requiredPoint = point * i;
          if (requiredPoint > available) {
            return i - 1;
          }
        }
        return max;
      };

      Cart.prototype.updateItemBlock = function() {
        return _.each(this._itemBlocks, function(item) {
          return item.updateElement();
        });
      };

      /*
      商品がゼロになったら商品選択ページに戻るかどうか
      */


      Cart.prototype.backProductSelectPageWhenZeroProduct = function(toEnable) {
        if (toEnable === void 0 && (this._isBackBpdocutSelectPage != null)) {
          return this._isBackBpdocutSelectPage;
        }
        if (toEnable != null) {
          this._isBackBpdocutSelectPage = toEnable;
        }
        return this._isBackBpdocutSelectPage;
      };

      /*
      商品選択ページのURL を設定する/返す
      */


      Cart.prototype.productSelectPageUrl = function(url) {
        if (url === void 0 && (this._productPageUrl != null)) {
          return this._productPageUrl;
        }
        if (url !== null) {
          this._productPageUrl = url;
        }
        return this._productPageUrl;
      };

      /*
      お買い物かごページのURL を設定する/返す
      */


      Cart.prototype.cartPageUrl = function(url) {
        if (url === void 0 && (this._cartPageUrl != null)) {
          return this._cartPageUrl;
        }
        if (url !== null) {
          this._cartPageUrl = url;
        }
        return this._cartPageUrl;
      };

      /*
      商品選択ページに戻る処理
      */


      Cart.prototype.backProductSelectPage = function() {
        var url;
        new (require('lib/cart_redirect_productpage'));
        url = this.productSelectPageUrl();
        return setTimeout(function() {
          return location.href = url;
        }, 5000);
      };

      return Cart;

    })();
    return Cart;
  });

}).call(this);
