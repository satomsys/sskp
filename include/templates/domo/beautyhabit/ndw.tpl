<!DOCTYPE html>
<!--[if IE 6]><html lang='ja' class='ie6' prefix='og: http://ogp.me/ns#'><![endif]-->
<!--[if IE 7]><html lang='ja' class='ie7' prefix='og: http://ogp.me/ns#'><![endif]-->
<!--[if IE 8]><html lang='ja' class='ie8' prefix='og: http://ogp.me/ns#'><![endif]-->
<!--[if IE 9]><html lang='ja' class='ie9' prefix='og: http://ogp.me/ns#'><![endif]-->
<!-- [if gt IE 9] <!-->
<html lang="ja" prefix="og: http://ogp.me/ns#">
<!-- <![endif]-->

<head>
    <meta charset="Shift_JIS">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <!--///// (1) ページタイトル　キーワード　ディスクリプション - START /////-->
    <title>飲むドモホルンリンクル｜飲む＆食べるドモホルンリンクル＜公式＞</title>
    <meta name="description" content="【飲むドモホルンリンクル】商品ページ。睡眠の質を高め、コラーゲンを活用する身体づくりをサポート。内側からぷるんと弾むハリをつくります。">
    <meta name="keywords" content="ドモホルンリンクル,ドモホルン,ドモ,再春館製薬所,再春館,飲むドモホルンリンクル,睡眠,睡眠の質,ドリンク">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.saishunkan.co.jp/domo/beautyhabit/ndw.html">
    <meta property="og:title" content="飲むドモホルンリンクル｜飲む＆食べるドモホルンリンクル＜公式＞">
    <meta property="og:description" content="【飲むドモホルンリンクル】商品ページ。睡眠の質を高め、コラーゲンを活用する身体づくりをサポート。内側からぷるんと弾むハリをつくります。" />
    <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
    <!--///// (1) ページタイトル　キーワード　ディスクリプション - END /////-->
    <!-- ▼サイト共通で使うスタイル・スクリプト-->
    [:include file="domo/_shared/_head_shared01.inc.tpl":]
    <!-- ▲サイト共通で使うスタイル・スクリプト-->

    <!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
    <!--///// (2) ページに必要なjs と CSS - START /////-->
    <!-- /beautyhabit/ 共通部分css -->
    <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
    <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/ndw/css/ndw.css" />
    <!-- end /beautyhabit/ 共通部分css -->
    <script>
        require(["jquery"], function() {
            require(["/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js", "/assets/ps/domo/beautyhabit/common/js/remodal.min.js"], function() {
                require(["/assets/ps/domo/beautyhabit/common/js/function.js?20161014", "/assets/ps/domo/beautyhabit/ndw/js/ndw.js"]);
            })
        });
    </script>
    <!--///// (2) ページに必要なjs と CSS - END /////-->
    <!-- ▲ページ毎に必要なスタイル・スクリプトなど-->
</head>

[:* 遷移先設定 *:] [: if $status_login :] [:assign var="URL" value="/domo/service/order/product_list.html#dnd-anchor":] [:assign var="URL_REGULAR" value="/member/regular_order/regular_order.html#dnd-anchor":] [:assign var="ev_label" value="_product_list":]
[: else :] [: if $device_id :] [:assign var="URL" value="/domo/service/login/?target=/domo/service/order/product_list.html%23dnd-anchor":] [:assign var="URL_REGULAR" value="/domo/service/login/?target=/member/regular_order/regular_order.html%23dnd-anchor":]
[:assign var="ev_label" value="_login":] [: else :] [:assign var="URL" value="/domo/direct_order/#dnd-anchor":] [:assign var="URL_REGULAR" value="/domo/direct_order/#dnd-anchor":] [:assign var="ev_label" value="_direct_order":] [: /if :] [: /if :] [:
if $status_login:] [:* ログイン済 *:] [:assign var=body_template_class value='template-post-login-layout02':] [: else :] [:* 未ログイン *:] [:assign var=body_template_class value='template-pre-login-layout02':] [: if $revisitFlg !==1 && $revisitFlg !==2 :] [:*
S未請求 *:] [:assign var=body_template_class value='template-pre-login-layout01':] [: /if :] [: /if :]

<body class="page-skincare_tips template-enable-media-queries template-legacy-layout02 [:$body_template_class:]">
    <!--///// (3) GTMの指定 - START /////-->
    [:include file="domo/beautyhabit/_header.inc.tpl":]
    <!--///// (3) GTMの指定 - END /////-->

    <!--///// (4) コンテンツ  <div id="main" class="bh-main">内 - START /////-->
    <div id="main" class="bh-main">
        [:* SP用にナビゲーションを表示 *:] [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]

        <!-- page -->
        <div class="bh-section bh-sectionMovie">
            <div class="bh-innr">
                <div class="bh-youtube">
                    <!-- <img src="/assets/ps/domo/beautyhabit/ndw/img/ndw_mov_01.png" alt=""> -->
                    <iframe width="940" height="529" src="https://www.youtube.com/embed/wNamwyftSlI" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="bh-section bh-sectionNomudomo">
            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomo01">
                    <h3 class="bh-nomudomo01__title">
                        <img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_01.png" alt="ハリ・ツヤ・うるおい。大切なのは睡眠の質。">
                        <hr>
                    </h3>
                    <p class="bh-nomudomo01__text">お肌・からだの細胞を修復し再生させる「成長ホルモン」。この「成長ホルモン」は、特に深い眠りが訪れやすい眠りはじめの3時間に多く分泌されます。ところが、睡眠の質は年齢とともに低下しがち。そのため、深い眠りをサポートすることが、すこやかなお肌づくりには欠かせません。</p>

                    <div class="bh-nomudomo01__clm2Wrap">
                        <ul class="bh-nomudomo01__clm2">
                            <li class="bh-nomudomo01__clm2__li">
                                <h4 class="bh-nomudomo01__clm2__title">
                                    <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd01_01.png" alt="1日の時間帯による成長ホルモンの分泌グラフ"></span>
                                    <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd01_01_sp.png" alt="1日の時間帯による成長ホルモンの分泌グラフ"></span>
                                </h4>
                                <div class="bh-onlyPC">
                                    <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd01_01.png" alt=""></div>
                                </div>
                                <div class="bh-onlySP">
                                    <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd01_sp_01.png" alt=""></div>
                                </div>

                            </li>
                            <li class="bh-nomudomo01__clm2__li">
                                <h4 class="bh-nomudomo01__clm2__title">
                                    <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd01_02.png" alt="人間が本来持つ、自ら美しくなろうとする力に着目"></span>
                                    <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd01_02_sp.png" alt="人間が本来持つ、自ら美しくなろうとする力に着目"></span>
                                </h4>
                                <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd01_02.png" alt=""></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bh-nomudomo02">
                    <h3 class="bh-nomudomo02__title">
                        <img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02.png" alt="お肌づくりの成分を、おやすみ中に活用する">
                        <hr>
                    </h3>
                    <p class="bh-nomudomo02__text">飲むドモホルンリンクルには上質なコラーゲンやヒアルロン酸がたっぷり。成長ホルモンが分泌される時間を狙い、おやすみ前に飲むことで、それらを最大限活用することができます。寝ている時間を有効活用してきれいをつくる。賢い女性の賢い選択です。</p>

                    <div class="bh-nomudomo02__box01">
                        <h4 class="bh-nomudomo02__box01__title">
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-01.png" alt="成分"></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-01_sp.png" alt="成分"></span>
                        </h4>
                        <div class="bh-nomudomo02__box01__contents">
                            <div class="bh-nomudomo02__box01__contents__title">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-02.png" alt="信頼して続けられる、選び抜いた天然原料を1本に凝縮">
                            </div>
                            <ul class="bh-nomudomo02__clm2">
                                <li class="bh-nomudomo02__clm2__li">
                                    <div class="bh-nomudomo02__clm2__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_01.jpg" alt="クワンソウ"></div>
                                    <p class="bh-nomudomo02__clm2__text">
                                        眠れないときに効果的と沖縄で重宝されてきた「クワンソウ」。リラックス効果も期待できます。
                                    </p>
                                </li>
                                <li class="bh-nomudomo02__clm2__li">
                                    <div class="bh-nomudomo02__clm2__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_02.jpg" alt="GABA"></div>
                                    <p class="bh-nomudomo02__clm2__text">
                                        緊張やストレスをやわらげる働きをもち、幅広く食品に使用されている「GABA」。カナダ産の大麦から抽出。
                                    </p>
                                </li>
                            </ul>

                            <ul class="bh-nomudomo02__clm4">
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_03.jpg" alt="アマニ"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_04.jpg" alt="プロテオグリカン"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_05.jpg" alt="鱧コラーゲン"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_06.jpg" alt="月桃葉"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_07.jpg" alt="パイナップル"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_08.jpg" alt="ヒアルロン酸"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_09.jpg" alt="金時ショウガ"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_10.jpg" alt="ゆず種子"></div>
                                </li>
                            </ul>

                            <div class="bh-nomudomo02__foot">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd02_11.png" alt="眠りの質を高めるだけでなく、最も高い相乗効果を生むように10成分を配合した、再春館製薬所ならではの内側ケアにご期待ください。">
                            </div>
                        </div>

                    </div>
                </div>

                <div class="bh-nomudomoDeveloper">
                    <h4 class="bh-nomudomoDeveloper__box01__title">
                        <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_developer.png" alt="開発者インタビュー"></span>
                        <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_developer_sp.png" alt="開発者インタビュー"></span>
                    </h4>
                    <div class="bh-nomudomoDeveloper__box01__contents">
                        <div class="bh-nomudomoDeveloper__thumb__btn">
                            <a href="ndw01.html"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_next_01.png" alt="続きを読む"></a>
                        </div>
                        <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/developer__ndw.jpg" alt="コラーゲンのパイオニアとして年齢からくるお悩みの原因を突き詰め、見えてきたのは「睡眠の質」の大切さでした。 再春館製薬所 研究開発 田野岡亮太"></span>
                        <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/developer__ndw_sp.jpg" alt="コラーゲンのパイオニアとして年齢からくるお悩みの原因を突き詰め、見えてきたのは「睡眠の質」の大切さでした。 再春館製薬所 研究開発 田野岡亮太"></span>
                    </div>
                </div>

                <div class="bh-nomudomo03">
                    <h3 class="bh-nomudomo03__title"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd03_01.png" alt="明日のわたしが、たのしみになる美習慣。"></h3>
                    <div class="bh-nomudomo03__thumb">
                        <div class="bh-nomudomo03__thumb__img"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd03_01.png" alt=""></div>
                        <div class="bh-nomudomo03__thumb__btn">
                            <a href="#modal01"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_haigoulist_01.png" alt="配合成分一覧"></a>

                            <div class="remodal modal01" data-remodal-id="modal01">
                                <button data-remodal-action="close" class="remodal-close"></button>
                                <div class="modalContents">
                                    <div class="modal01__box01">
                                        <h4 class="modal01__title">飲むドモホルンリンクル　<br class="bh-onlySP">配合成分一覧</h4>
                                        <div class="modal01__tableWrap">
                                            <ul class="modal01__table">
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__th"><span>原材料名</span></div>
                                                    <div class="modal01__table__th"><span>起源</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>コラーゲンペプチド</span></div>
                                                    <div class="modal01__table__td"><span>鱧の皮・鮭の皮</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ゆず果汁</span></div>
                                                    <div class="modal01__table__td"><span>ゆずの果皮及び果実</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>グラニュ糖</span></div>
                                                    <div class="modal01__table__td"><span>テンサイ</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>はちみつ</span></div>
                                                    <div class="modal01__table__td"><span>花蜜</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>クワンソウエキス</span></div>
                                                    <div class="modal01__table__td"><span>クワンソウの葉及び茎</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>大麦乳酸発酵液ギャバ粉末</span></div>
                                                    <div class="modal01__table__td"><span>大麦</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>月桃葉エキス粉末</span></div>
                                                    <div class="modal01__table__td"><span>月桃の葉</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>金時ショウガエキス</span></div>
                                                    <div class="modal01__table__td"><span>金時ショウガの根茎</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>アマニ抽出物粉末</span></div>
                                                    <div class="modal01__table__td"><span>亜麻の種子</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ユズ種子エキス加工粉末</span></div>
                                                    <div class="modal01__table__td"><span>ゆずの種子</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>パイナップル果実抽出物<br>(セラミド含有)</span></div>
                                                    <div class="modal01__table__td"><span>パイナップルの果実</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>サケ軟骨抽出物粉末</span></div>
                                                    <div class="modal01__table__td"><span>サケの鼻軟骨</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>酸味料</span></div>
                                                    <div class="modal01__table__td"><span>トウモロコシ・サトウダイコン</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ゆず香料</span></div>
                                                    <div class="modal01__table__td"><span>ゆずの果実</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>甘味料(ステビア)</span></div>
                                                    <div class="modal01__table__td"><span>ステビアの葉</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ヒアルロン酸</span></div>
                                                    <div class="modal01__table__td"><span>醗酵</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>乳化剤</span></div>
                                                    <div class="modal01__table__td"><span>甘藷・大豆・キャッサバ・<br>サトウキビ・テンサイ・<br>トウモロコシ・パーム・ヤシ</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="modal01__text">※原材料の一部にサケ、ゼラチン、大豆を含みます。<br>※ゆず香料はゆず果実由来です。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bh-nomudomo03__text">
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>商品名</dt>
                            <dd>飲むドモホルンリンクル<sup>※</sup><span class="bh-labelBlack">年齢美習慣</span></dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>価格</dt>
                            <dd>7本入り 3,024円（税込）　　<br class="bh-onlySP">14本入り 5,940円（税込）<br> 30本入り 11,880円（税込）</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>ご購入ポイント</dt>
                            <dd>7本入り 1ポイント　　<br class="bh-onlySP">14本入り 2ポイント<br>30本入り 5ポイント</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>内容量</dt>
                            <dd>50mL（1本当り）<br>1日1本を目安にお召しあがりください。</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>配合量</dt>
                            <dd>1日1本（50mL）あたり<br>コラーゲン：4,000mg<br>クワンソウエキス：258mg<br>GABA：162mg<br>ヒアルロン酸：10mg<br>セラミド：100μg<br>保存料・着色料・合成香料無添加<br>ノンカフェイン<br>35kcal</dd>
                        </dl>
                    </div>
                    <div class="bh-nomudomo03__foot">
                        <img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_nd03_02.png" alt="1本35kcalと低カロリー。さらに、人工香料・甘味料不使用だから、続けて安心。おやすみ時間に、明日のきれいと元気を育てましょう。">
                    </div>
                </div>

                <div class="bh-productList">
                    <ul class="bh-productList__clm">
                        <li class="bh-productList__clm__li">
                            <div class="bh-onlyPC">
                                <div class="bh-productList__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_01.png" alt=""></div>
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_chumon_01.png" alt=""></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_01_sp.png" alt=""></a>
                            </div>
                        </li>
                        <li class="bh-productList__clm__li">
                            <div class="bh-onlyPC">
                                <div class="bh-productList__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_02.png" alt=""></div>
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_chumon_01.png" alt=""></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_02_sp.png" alt=""></a>
                            </div>
                        </li>
                        <li class="bh-productList__clm__li li03">
                            <div class="bh-onlyPC">
                                <div class="bh-productList__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_03.png" alt=""></div>
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_chumon_01.png" alt=""></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_03_sp.png" alt=""></a>
                            </div>
                        </li>
                        <li class="bh-productList__clm__li li04">
                            <div class="bh-onlyPC">
                                <div class="bh-productList__thumb"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_04.png" alt=""></div>
                                <a href="[:$URL_REGULAR:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_chumon_02.png" alt=""></a>
                                <a href="#modal02" class="bh-productList__btn2"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_teiki_01.png" alt="定期お届けコースだけのうれしい特典はこちら"></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL_REGULAR:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_pl_04_sp.png" alt=""></a>
                                <a href="#modal02" class="bh-productList__btn2"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_teiki_01.png" alt="定期お届けコースだけのうれしい特典はこちら"></a>
                            </div>

                            <div class="remodal modal02" data-remodal-id="modal02">
                                <button data-remodal-action="close" class="remodal-close"></button>
                                <div class="modalContents">
                                    <div class="modal02__box01">
                                        <h4 class="modal02__title"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_01.png" alt="うれしい特典付き「定期お届けコース」のご案内"></h4>
                                        <p class="modal02__text">きれいがずっと続く毎日を応援するため、<br> 特典付きの「定期お届けコース」をご用意しました。<br> ぜひご利用ください。
                                        </p>
                                    </div>
                                    <div class="modal02__box02">
                                        <h5 class="modal02__subtitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_02.png" alt="特典 その1"></h5>
                                        <div class="modal02__extitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_03.png" alt="マンスリープレゼント（毎月の定期特典）"></div>
                                        <p class="modal02__text">毎月のお届け時に、下記のうちからどちらかをプレゼントいたします。お申し込み時にお選びください。</p>
                                        <div class="modal02__box02__figure"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_modal01_01.png" alt=""></div>
                                    </div>
                                    <div class="modal02__box03">
                                        <h5 class="modal02__subtitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_04.png" alt="特典 その2"></h5>
                                        <div class="modal02__extitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_05.png" alt="お楽しみプレゼント"></div>
                                        <p class="modal02__text">３回ごとに、マンスリープレゼント（毎月の定期特典）に加えて「お楽しみプレゼント」をご用意。何が贈られてくるか、お楽しみに！</p>
                                        <div class="modal02__box03__figure01"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_modal01_02.png" alt="定期お届け"></div>
                                        <div class="modal02__box03__figure02"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_modal01_03.png" alt="お客様のご都合に合わせてお届けします。２種類の指定方法からお選びください。"></div>
                                        <div class="modal02__caution">
                                            <p class="modal02__caution__title">ご注意</p>
                                            <ul class="modal02__caution__list">
                                                <li>「定期お届けコース」は3回以上のご購入が条件となります。</li>
                                                <li>お支払いは、一括払いでお願いしております。</li>
                                                <li>お届け日時・お届け先の変更がある場合、お届け指定日の5日前までにお電話（0120-444-444）もしくは、<a href="/domo/inquiry/">メール</a>にてお知らせください。</li>
                                                <li>ご購入ポイントは、商品発送日に加算されます。ご注文されてすぐのタイミングでは加算されません。</li>
                                                <li>休止・解約は、お届け指定日の5日前までにお電話（0120-444-444）にてお知らせください。</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="bh-osusume">
                    <h3 class="bh-osusume__title">
                        <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01.png" alt="おすすめコンテンツ"></span>
                        <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01_sp.png" alt="おすすめコンテンツ"></span>
                    </h3>
                    <div class="bh-osusume__contents">
                        <ul class="bh-osusume__clm">
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/review/ndw/interview/index.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/18.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                                            <p class="bh-osusume__subTitle">「飲むドモ」お客様インタビュー</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">ぐっすり休んで、キレイを手に入れる。あなたも始めませんか。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/sleep01.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/5.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt=""></p>
                                            <p class="bh-osusume__subTitle">美肌を生み出す秘密とは？睡眠とお肌の関係</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">成長ホルモンの分泌量が減ると、お肌が乾燥しハリが失われます。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/sleep02.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/6.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt=""></p>
                                            <p class="bh-osusume__subTitle">質の良い睡眠が美肌を生み出す！</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">ぐっすり眠れた朝は、肌のツヤがよく、化粧ノリが良い、そのわけは？</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/sleep03.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/7.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt=""></p>
                                            <p class="bh-osusume__subTitle">【調査】4週間の摂取で変化!?「しわ」編</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">眠りの質を高めることで、しわにどのような変化が？</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/sleep04.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/8.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt=""></p>
                                            <p class="bh-osusume__subTitle">【調査】4週間の摂取で変化!?「しみ」編</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">眠りの質を高めると、シミ・キメにも改善を示す結果が。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/review/ndw/customer_voice.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/17.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                                            <p class="bh-osusume__subTitle">「飲むドモ」 口コミ</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">飲み続けている理由がわかる。実感の声を今すぐチェック！</div>
                                </a>
                            </li>
                            [:* ▼R-#29449_【H28-00117-04】しわしみ食品_ピックアップトピックへの記事2本追加　2016/11/21 nul-hatano *:]
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/socialtrendnews_ndw01.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">ソーシャルトレンドニュース×飲むドモホルンリンクル</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">忙しい女性必見！短い睡眠でキレイになるには、○○ホルモンがカギ</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/skincare-univ_ndw/index.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-skincare.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">スキンケア大学×飲むドモホルンリンクル</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">寝ている間にキレイが育つ「リセット美容」始めよう</div>
                                </a>
                            </li>
                            [:* ▲R-#29449_【H28-00117-04】しわしみ食品_ピックアップトピックへの記事2本追加　2016/11/21 nul-hatano *:]

                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/socialtrendnews_ndw02.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews02.jpg" alt="" title=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス" title="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">第2回 ソーシャルトレンドニュース×飲むドモホルンリンクル</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">「美味しすぎる美容ドリンク」飲むドモホルンリンクルって実際どうなの？感想まとめ</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/socialtrendnews_ndw03.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews03.jpg" alt="" title=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス" title="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">第3回 ソーシャルトレンドニュース×飲むドモホルンリンクル</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">お正月のダラダラ睡眠は卒業！「グッスリ寝て女子力あげる」4つの睡眠法をやってみた</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bh-localPagetop">
                    <div class="bh-localPagetop__btnBox">
                        <ul class="bh-localPagetop__btnList">
                            <li class="bh-localPagetop__btnList__li">
                                <a href="/domo/beautyhabit/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_ndwtop_01.png" alt="飲む＆食べるドモホルンリンクルトップ"></a>
                            </li>
                            <li class="bh-localPagetop__btnList__li">
                                <a href="/domo/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_top_01.png" alt="ドモホルンリンクルトップ"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="bh-localPagetop__pagetop">
                        <a href="#top"><img src="/assets/ps/domo/beautyhabit/common/img/btn_pagetop_01.png" alt="ページトップへ"></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- // page -->

    </div>
    <!--///// (4) コンテンツ  <div id="main">内 - END /////-->

    [:include file="domo/_shared/_footer01.inc.tpl":]

    <!--///// (5) サイトカタリスト、YTM - START /////-->
    [:include file="domo/_shared/_footer_analysis.inc.tpl":]
    <!--///// (5) サイトカタリスト、YTM - END /////-->
</body>

</html>