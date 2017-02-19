/*
dialog_contents.coffee

ダイアログの中身のHTMLを定義する
*/


(function() {
  define(['require'], function(require) {
    var exp;
    exp = {};
    /*
    お買い物かごを空にする 確認ダイアログ
    */

    exp['clearCartConfirmStr'] = '<div class="confirm-cart-clear">\n    <div class="warn-block01">\n        <ul class="warn-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>お選びいただいた商品、プレゼント品をお買い物かごから全て削除いたします。</li>\n        </ul>\n    </div>\n    <div class="modal-confirm-button-block01">\n        <div class="primary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-high">\n                <a href="#" class="button-anchor button-clear-cart">はい</a>\n            </span>\n            <!--\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>注釈</li>\n            </ul>\n            -->\n        </div>\n        <div class="secondary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-medium">\n                <a href="#" class="button-anchor button-cancel">いいえ</a>\n            </span>\n            <!--\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>注釈</li>\n            </ul>\n            -->\n        </div>\n    </div>\n</div>';
    /*
    商品個数が0になるためプレゼント品削除
    */

    exp['clearPresentConfirm'] = '<div class="confirm-cart-clear">\n    <div class="warn-block01">\n        <ul class="warn-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>商品の変更をおこなうと、お買い物かごに入っている商品がなくなるため、お選びいただいたプレゼント品がすべて削除されます。</li>\n        </ul>\n    </div>\n    <div class="modal-confirm-button-block01">\n        <div class="primary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-high">\n                <a href="#" class="button-anchor button-clear-cart">はい</a>\n            </span>\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>お買い物かごを空にします</li>\n            </ul>\n        </div>\n        <div class="secondary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-medium">\n                <a href="#" class="button-anchor button-cancel">いいえ</a>\n            </span>\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>商品の変更を行いません</li>\n            </ul>\n        </div>\n    </div>\n</div>';
    /*
    ポイントが足りない場合
    */

    exp['pointShortConfirm'] = '<div class="confirm-cart-clear">\n    <div class="warn-block01">\n        <ul class="warn-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>商品の変更をおこなうと、お客様のご利用可能なポイントが、お買い物かごに入っているプレゼント品の利用ポイント合計より少なくなります。</li>\n        </ul>\n    </div>\n    <div class="modal-confirm-button-block01">\n        <div class="primary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-high">\n                <a href="#" class="button-anchor button-clear-cart">はい</a>\n            </span>\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>お選びいただいたプレゼント品は削除されます</li>\n            </ul>\n        </div>\n        <div class="secondary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-medium">\n                <a href="#" class="button-anchor button-cancel">いいえ</a>\n            </span>\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>商品の変更を行いません</li>\n            </ul>\n        </div>\n    </div>\n</div>';
    /*
    中間確認画面でお買い物カゴに商品が無いときに商品選択ページにリダイレクトさせるためのメッセージ
    */

    exp['redirectToProductPage'] = '<div class="confirm-cart-redirect">\n    <div class="warn-block01">\n        <ul class="warn-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>ご注文商品が全て取消されました。再度、商品の選び直しをお願いいたします。</li>\n        </ul>\n    </div>\n    <p>自動的に商品の選択の画面に切り替わります。</p>\n</div>';
    /*
    AJAX 系エラー表示
    */

    exp['ajaxErrorBase'] = '<div class="confirm-cart-clear">\n    <div class="alert-block01">\n        <ul class="alert-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>{{ERROR_MESSAGE}}</li>\n        </ul>\n    </div>\n    <div class="modal-confirm-button-block01">\n        <div class="single">\n            <span class="button-box01 button-width-fixed01 button-priority-low">\n                <a href="#" class="button-anchor button-close">閉じる</a>\n            </span>\n        </div>\n    </div>\n</div>';
    /*
    タイムアウト処理
    */

    exp['timeoutDialog'] = '<div class="confirm-cart-clear">\n    <div class="alert-block01">\n        <div class="heading401">\n            <h4 class="heading">お客様の情報を守るため接続が中断されました。</h4>\n        </div>\n        <ul class="alert-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>画面が表示されてから一定時間ページ操作の無い状態が続きましたので、お客様の情報を守るため接続が中断されました。<br>このまま画面を継続するには、「閉じる」ボタンを押してください。</li>\n        </ul>\n    </div>\n    <div class="modal-confirm-button-block01">\n        <div class="single">\n            <span class="button-box01 button-width-fixed01 button-priority-low">\n                <a href="#" class="button-anchor button-close">閉じる</a>\n            </span>\n        </div>\n    </div>\n</div>\n';
    /*
    テストダイアログ
    */

    exp['testDialog'] = '<div class="confirm-cart-clear">\n    <div class="alert-block01">\n        <div class="heading401">\n            <h4 class="heading">お客様の情報を守るため接続が中断されました。</h4>\n        </div>\n        <ul class="alert-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-alert01 list-bullet">[!]</span>テストダイアログ</li>\n        </ul>\n    </div>\n    <div class="warn-block01">\n        <ul class="warn-list01">\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>テストダイアログ</li>\n            <li class="list-item with-specific-bullet"><span class="ir ir-warn01 list-bullet">[!]</span>テストダイアログ</li>\n        </ul>\n    </div>\n    <div class="modal-confirm-button-block01">\n        <div class="primary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-high">\n                <a href="#" class="button-anchor button-clear-cart">プライマリボタン</a>\n            </span>\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>注釈</li>\n            </ul>\n        </div>\n        <div class="secondary">\n            <span class="button-box01 button-thick button-width-fixed01 button-priority-medium">\n                <a href="#" class="button-anchor button-cancel">キャンセル</a>\n            </span>\n            <ul class="notice-list01">\n                <li class="list-item with-specific-bullet"><span class="list-bullet-notice01 list-bullet">※</span>注釈</li>\n            </ul>\n        </div>\n    </div>\n</div>\n';
    return exp;
  });

}).call(this);
