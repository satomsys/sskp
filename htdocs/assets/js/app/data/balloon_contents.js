/*
balloon_contents.coffee

バルーンの中身のHTMLを定義する
*/


(function() {
  define(['require', 'main'], function(require) {
    var URL_ID436, exp;
    exp = {};
    URL_ID436 = (require('main')).cart.cartPageUrl();
    /*
    ローディング 商品追加
    */

    exp['balloonAddLoadingSrc'] = '<div class=\'balloon-spinner\'>\n    <div class="balloon-spinner-wrapper"><img src=\'/assets/img/spinner02.gif\' alt=\'\' class=\'balloon-spinner-image\' /></div>\n    <span class=\'label\'>お買い物かごに追加しています...</span>\n</div>';
    /*
    ローディング 商品削除
    */

    exp['balloonRemoveLoadingSrc'] = '<div class=\'balloon-spinner\'>\n    <div class="balloon-spinner-wrapper"><img src=\'/assets/img/spinner02.gif\' alt=\'\' class=\'balloon-spinner-image\' /></div>\n    <span class=\'label\'>お買い物かごから削除しています...</span>\n</div>';
    /*
    ローディング 商品個数変更
    */

    exp['balloonQuantityChangeLoadingSrc'] = '<div class=\'balloon-spinner\'>\n    <div class="balloon-spinner-wrapper"><img src=\'/assets/img/spinner02.gif\' alt=\'\' class=\'balloon-spinner-image\' /></div>\n    <span class=\'label\'>個数を変更しています...</span>\n</div>';
    /*
    商品追加完了
    */

    exp['balloonSuccessSrc'] = "<div class='cart-balloon-success'>\n    <p>追加されました。ご注文個数はお買い物かごで変更いただけます。</p>\n    <div class='balloon-buttons cart-balloon-buttons'>\n        <ul class=\"balloon-button-items\">\n            <li class=\"list-item list-item-cart\"><span class='button-box01 button-priority-low'><a class='button-anchor' href='" + URL_ID436 + "'><span class=\"ir ir-balloon-cart01\"></span>お買い物かごを見る</a></span></li>\n            <li class=\"list-item list-item-close\"><span class='button-box01 button-priority-low'><a class='button-anchor button-close button-balloon-close' href='#'><span class=\"ir ir-balloon-close01\"></span></a></span></li>\n        </ul>\n    </div>\n</div>";
    /*
    商品追加完了 セット品
    */

    exp['balloonSetItemSuccessSrc'] = "<div class='cart-balloon-success'>\n    <p>追加されました。（お買い物かごでは単品ごとに表示されます。）</p>\n    <div class='balloon-buttons cart-balloon-buttons'>\n        <ul class=\"balloon-button-items\">\n            <li class=\"list-item list-item-cart\"><span class='button-box01 button-priority-low'><a class='button-anchor' href='" + URL_ID436 + "'><span class=\"ir ir-balloon-cart01\"></span>お買い物かごを見る</a></span></li>\n            <li class=\"list-item list-item-close\"><span class='button-box01 button-priority-low'><a class='button-anchor button-close button-balloon-close' href='#'><span class=\"ir ir-balloon-close01\"></span></a></span></li>\n        </ul>\n    </div>\n</div>";
    /*
    商品削除完了
    */

    exp['balloonRemoveSuccessSrc'] = '<div class=\'cart-balloon-success\'>\n    <p>追加を取消しました。</p>\n\n    <div class=\'balloon-buttons cart-balloon-buttons\'>\n        <ul class="balloon-button-items">\n            <li class="list-item list-item-close"><span class=\'button-box01 button-priority-low\'><a class=\'button-anchor button-close button-balloon-close\' href=\'#\'><span class="ir ir-balloon-close01"></span></a></span></li>\n        </ul>\n    <div>\n</div>';
    /*
    ローディング お買い物かごを空にする
    */

    exp['balloonCartClearLoadingSrc'] = '<div class=\'balloon-spinner\'>\n    <div class="balloon-spinner-wrapper"><img src=\'/assets/img/spinner02.gif\' alt=\'\' class=\'balloon-spinner-image\' /></div>\n    <span class=\'label\'>お買い物かごを空にしています...</span>\n</div>';
    /*
    完了 お買い物かごを空にする
    */

    exp['balloonCartClearSuccessSrc'] = '<div class=\'cart-balloon-success\'>\n    <p>お買い物かごを空にしました。</p>\n\n    <div class=\'balloon-buttons cart-balloon-buttons\'>\n        <ul class="balloon-button-items">\n            <li class="list-item list-item-close"><span class=\'button-box01 button-priority-low\'><a class=\'button-anchor button-close button-balloon-close\' href=\'#\'><span class="ir ir-balloon-close01"></span></a></span></li>\n        </ul>\n    <div>\n</div>';
    return exp;
  });

}).call(this);
