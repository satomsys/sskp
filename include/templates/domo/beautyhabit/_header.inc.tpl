[:* お手当て広場にならい、本来ならjavascriptのappendChildなどで特設サイト用のナビを追加すべきだったのだが、
影響範囲等をもとに検討した結果新規にヘッダを作成することとした *:]

  [:* ▼R-#17520_GAタグマネージャー設置 2015/06/05 nul-yamashita*:]
  [:include file="./com_inc/_header_analysis.inc.tpl":]
  [:* ▲R-#17520_GAタグマネージャー設置 2015/06/05 nul-yamashita*:]
  [:* ▼R-#21639_WEB VIEW 製造 2016/03/09 nul-uramoto*:]
  [:if $is_DomoApp == false && $isDomoApp == false:]
  [:include file='domo/_shared/_header_noscript.inc.tpl' :]

  <div class="page-header with-navigation[: if $status_login :] with-user-specific[: /if :]">

  [: if $status_login :]
  [:include file='domo/_shared/_header_usr_specific.inc.tpl' :]
  [: else :]
  [:include file='domo/_shared/_header_top01.inc.tpl' :]
  [: /if :]

  [:include file='domo/_shared/_header_middle01.inc.tpl' :]
[:* グローバルナビゲーション *:]
<div class="header-navigation01 header-navigation01-autostay">
<div class="content-wrapper01">
<ul class="global-navigation-list">
<li class="list-item item-lv1 list-product with-child"><a href="/domo/about_dw/" class="link-anchor link-product anchor-lv1">ドモホルンリンクルのご紹介</a>
<ul class="child-list-lv1">
<li class="list-item item-lv2"><span class="link-text01"><a class="link-anchor" href="/domo/about_dw/"><span class="ir ir-link01"></span>ドモホルンリンクルのご紹介トップ</a>
</span>
<ul class="child-list-lv2">
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/product/"><span class="ir ir-link01"></span>商品一覧</a>
</span>
<ul class="child-list-lv3">
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dcj/"><span class="ir ir-link01"></span><span class="ir ir-num01">1</span>化粧落しジェル</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dcs/"><span class="ir ir-link01"></span><span class="ir ir-num01">2</span>洗顔石鹸</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dfp/"><span class="ir ir-link01"></span><span class="ir ir-num01">3</span>泡の集中パック</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dl/"><span class="ir ir-link01"></span><span class="ir ir-num02">4</span>保湿液</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/de/"><span class="ir ir-link01"></span><span class="ir ir-num02">5</span>美活肌エキス</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dw20/"><span class="ir ir-link01"></span><span class="ir ir-num02">6</span>クリーム20</a>
</span>
</li>
[:* ▼2015/2/5 R-#16855_グローバルナビの商品名間違い対応 (nul yamashita) *:]
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dml/"><span class="ir ir-link01"></span><span class="ir ir-num02">7</span>保護乳液</a>
</span>
</li>
[:* ▲2015/2/5 R-#16855_グローバルナビの商品名間違い対応 (nul yamashita) *:]
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dc/"><span class="ir ir-link01"></span><span class="ir ir-num03">8</span>光対策 素肌ドレスクリーム</a>
</span>
</li>
[:if $smarty.session.LOGINTIME :]
[:assign var=time value=$smarty.session.LOGINTIME:]
[:else:]
[:assign var=time value=$smarty.now:]
[:/if:]
[:if $time >= strtotime('2015-01-06 00:00:00') :]
<li class="list-item item-lv4"><span class="link-text01">&nbsp;</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/mgk/"><span class="ir ir-link01"></span>めぐりの結晶</a>
</span>
</li>
[:/if:]
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dnd/"><span class="ir ir-link01"></span>飲むドモホルンリンクル</a>
</span>
</li>
</ul>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/sample_guide/"><span class="ir ir-link01"></span>無料お試しセットについて</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/speciality/"><span class="ir ir-link01"></span>ドモホルンリンクルのこだわり</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/product/history.html"><span class="ir ir-link01"></span>ドモホルンリンクルの歴史</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/present_guide/"><span class="ir ir-link01"></span>ポイントプレゼント品のご紹介</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/shop/"><span class="ir ir-link01"></span>ドモホルンリンクル コミュニケーションスペースについて</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/cm/"><span class="ir ir-link01"></span>CM紹介</a>
</span>
</li>
</ul>
</li>
</ul>
</li>
<li class="list-item item-lv1 list-voice with-child"><a href="/domo/customer_voice/" class="link-anchor link-voice anchor-lv1">お客様の声</a>
<ul class="child-list-lv1">
<li class="list-item item-lv2"><span class="link-text01"><a class="link-anchor" href="/domo/customer_voice/"><span class="ir ir-link01"></span>お客様の声トップ</a>
</span>
<ul class="child-list-lv2">
[:* ▼R-#29017_H28-00096-70_SSK_NET-1564_実感のお声ページのリンク元のテキストや見出しの修正 2016/10/19 sai-higashi *:]
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/voice/index2.html"><span class="ir ir-link01"></span>私がドモをはじめた理由</a>
[:* ▲R-#29017_H28-00096-70_SSK_NET-1564_実感のお声ページのリンク元のテキストや見出しの修正 2016/10/19 sai-higashi *:]
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/story/"><span class="ir ir-link01"></span>ドモホルンリンクルのある暮らし</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/interview/"><span class="ir ir-link01"></span>ドモホルンリンクルお客様インタビュー</a>
</span>
</li>
</ul>
</li>
</ul>
</li>
<li class="list-item item-lv1 list-shiwashimi with-child"><a href="/domo/laboratory/" class="link-anchor link-shiwashimi anchor-lv1">年齢肌のために</a>
<ul class="child-list-lv1">
<li class="list-item item-lv2"><span class="link-text01"><a class="link-anchor" href="/domo/laboratory/"><span class="ir ir-link01"></span>年齢肌のためにトップ</a>
</span>
<ul class="child-list-lv2">
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/kaihatsu/gakkai/"><span class="ir ir-link01"></span>研究開発の軌跡</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/raw_material/"><span class="ir ir-link01"></span>探し求めた天然原料</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/skinknowledge/"><span class="ir ir-link01"></span>大人の肌を素敵な肌へ</a>
</span>
</li>
[:* ▼R-#28526_しわしみ通信動線削除 2016/07/14 sai-higashi *:]
[:* しわしみ通信動線削除のため処理削除 *:]
[:* ▲R-#28526_しわしみ通信動線削除 2016/07/14 sai-higashi *:]
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/sign/"><span class="ir ir-link01"></span>年齢肌のお悩みの原因</a>
</span>
</li>
</ul>
</li>
</ul>
</li>
<li class="list-item item-lv1 list-oteate"><a href="/domo/skincare/" class="link-anchor link-oteate anchor-lv1">お肌のお手当て</a>
</li>
<li class="list-item item-lv1 list-aboutorder"><a href="/domo/order_guide/" class="link-anchor link-aboutorder anchor-lv1">ご注文について</a>
</li>
<li class="list-item item-lv1 list-faq"><a href="/domo/faq/" class="link-anchor link-faq anchor-lv1">よくあるご質問</a>
</li>
</ul>
</div>
    <!--///// (※) Beautyhabit ローカルナビ - START /////-->
    <div id="" class="bh-localHeader">
      <div class="bh-localHeader__innr">
        <div class="bh-localHeader__left">
          <a href="/domo/beautyhabit/" class="bh-localHeader__title">
            <h1><span>飲む＆食べるドモホルンリンクル</span></h1>
          </a>
        </div>
        <div class="bh-localHeader__right">
          <div class="bh-localHeader__spBtn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="bh-localHeader__spBtnText">MENU</div>
        </div>
      </div>
    </div>
    <div id="" class="bh-localNav">
      <div class="bh-localNav__innr">
        <div class="bh-localNav__list">
          <ul class="bh-localNav__list__ul upper">
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/ndw.html" class="nav01">
                <span>飲むドモホルンリンクル</span>
              </a>
            </li>
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/mgk.html" class="nav02">
                <span>めぐりの結晶</span>
              </a>
            </li>
          </ul>
          <ul class="bh-localNav__list__ul lower">
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/lab.html" class="nav03">
                <span>ねむりとめぐりの研究所</span>
              </a>
            </li>
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/review.html" class="nav04">
                <span>口コミ・インタビュー</span>
              </a>
            </li>
            <li class="bh-localNav__list__nav nav05">
              <a href="/domo/beautyhabit/topics.html" class="nav05">
                <span>ピックアップ・トピックス</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--///// (※) Beautyhabit ローカルナビ - END /////-->
</div>


  <hr class="hidden-hr" />
  <!-- /div.page-header--></div>
  [: /if :]
  [:* ▲R-#21639_WEB VIEW 製造 2016/03/09 nul-uramoto*:]