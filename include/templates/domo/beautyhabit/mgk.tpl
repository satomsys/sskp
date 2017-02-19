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
    <title>めぐりの結晶｜飲む＆食べるドモホルンリンクル＜公式＞</title>
    <meta name="description" content="【めぐりの結晶】商品ページ。よぶんなものを排出し、必要なものをすみずみまで運ぶ「めぐり」をサポート。内側から透明感・ハリを生みだします。">
    <meta name="keywords" content="ドモホルンリンクル,ドモホルン,ドモ,再春館製薬所,再春館,めぐり,めぐりの結晶">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/mgk.html">
    <meta property="og:title" content="めぐりの結晶｜飲む＆食べるドモホルンリンクル＜公式＞">
    <meta property="og:description" content="【めぐりの結晶】商品ページ。よぶんなものを排出し、必要なものをすみずみまで運ぶ「めぐり」をサポート。内側から透明感・ハリを生みだします。" />
    <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
    <!--///// (1) ページタイトル　キーワード　ディスクリプション - END /////-->
    <!-- ▼サイト共通で使うスタイル・スクリプト-->
    [:include file="domo/_shared/_head_shared01.inc.tpl":]
    <!-- ▲サイト共通で使うスタイル・スクリプト-->

    <!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
    <!--///// (2) ページに必要なjs と CSS - START /////-->
    <!-- /beautyhabit/ 共通部分css -->
    <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
    <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/mgk/css/mgk.css" />
    <!-- end /beautyhabit/ 共通部分css -->
    <script>
        require(["jquery"], function() {
            require(["/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js", "/assets/ps/domo/beautyhabit/common/js/remodal.min.js"], function() {
                require(["/assets/ps/domo/beautyhabit/common/js/function.js?20161014", "/assets/ps/domo/beautyhabit/mgk/js/mgk.js"]);
            })
        });
    </script>
    <!--///// (2) ページに必要なjs と CSS - END /////-->
    <!-- ▲ページ毎に必要なスタイル・スクリプトなど-->
</head>

[:* 遷移先設定 *:] [: if $status_login :] [: if $isSmartPhone :] [:assign var="URL" value="/domo/service/order/product_list.html#NomuDomohornWrinkle":] [: else :] [:assign var="URL" value="/domo/service/order/product_list.html#beautyhabit":] [: /if :] [:assign
var="URL_REGULAR" value="/member/regular_order/regular_order.html#beautyhabit":] [:assign var="ev_label" value="_product_list":] [: else :] [: if $device_id :] [: if $isSmartPhone :] [:assign var="URL" value="/domo/service/login/?target=/domo/service/order/product_list.html%23NomuDomohornWrinkle":]
[: else :] [:assign var="URL" value="/domo/service/login/?target=/domo/service/order/product_list.html%23beautyhabit":] [: /if :] [:assign var="URL_REGULAR" value="/domo/service/login/?target=/member/regular_order/regular_order.html#beautyhabit":] [:assign
var="ev_label" value="_login":] [: else :] [: if $isSmartPhone :] [:assign var="URL" value="/domo/direct_order/#NomuDomohornWrinkle":] [:assign var="URL_REGULAR" value="/domo/direct_order/#NomuDomohornWrinkle":] [: else :] [:assign var="URL" value="/domo/direct_order/#beautyhabit":]
[:assign var="URL_REGULAR" value="/domo/direct_order/#beautyhabit":] [: /if :] [:assign var="ev_label" value="_direct_order":] [: /if :] [: /if :] [: if $status_login:] [:* ログイン済 *:] [:assign var=body_template_class value='template-post-login-layout02':]
[: else :] [:* 未ログイン *:] [:assign var=body_template_class value='template-pre-login-layout02':] [: if $revisitFlg !==1 && $revisitFlg !==2 :] [:* S未請求 *:] [:assign var=body_template_class value='template-pre-login-layout01':] [: /if :] [: /if :]

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
                    <!-- <img src="/assets/ps/domo/beautyhabit/mgk/img/mgk_mov_01.png" alt=""> -->
                    <iframe width="940" height="529" src="https://www.youtube.com/embed/6WpSfaeRiyA" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="bh-section bh-sectionNomudomo">
            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomo01">
                    <h3 class="bh-nomudomo01__title">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd_01.png" alt="透明感・ハリの秘訣は、「出す」、「すみずみまで運ぶ」。">
                        <hr>
                    </h3>
                    <p class="bh-nomudomo01__text">「めぐり」とは、よぶんなものを排出することと、必要なものをすみずみまで運び、細胞の生まれ変わりを促すこと。「めぐり」の力は年齢とともに低下するため、内側からサポートしてあげることが大切です。きちんとめぐらせるサイクルを整え、要らないものを排出してしまえば、透明感アップやハリも期待できます。</p>

                    <div class="bh-nomudomo01__clm2Wrap">
                        <ul class="bh-nomudomo01__clm2">
                            <li class="bh-nomudomo01__clm2__li">
                                <h4 class="bh-nomudomo01__clm2__title">
                                    <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_01.png" alt="年齢による基礎代謝量の推移"></span>
                                    <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_01_sp.png" alt="年齢による基礎代謝量の推移"></span>
                                </h4>
                                <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd01_01.png" alt=""></div>
                            </li>
                            <li class="bh-nomudomo01__clm2__li">
                                <h4 class="bh-nomudomo01__clm2__title">
                                    <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_02.png" alt="人間は本来、自ら美しくなろうとする力がある"></span>
                                    <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_02_sp.png" alt="人間は本来、自ら美しくなろうとする力がある"></span>
                                </h4>
                                <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd01_02.png" alt=""></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bh-nomudomo02">
                    <h3 class="bh-nomudomo02__title">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd_02.png" alt="めぐりサイクルにのって、お肌成分が力を発揮。">
                        <hr>
                    </h3>
                    <p class="bh-nomudomo02__text">めぐりの結晶は、ドモホルンリンクルならではの上質なコラーゲンやヒアルロン酸をふんだんに配合。それらを「めぐりサイクル」にのせることで、からだのすみずみで力を発揮することができます。昼間の時間に、効率的にきれいをつくりましょう。</p>

                    <div class="bh-nomudomo02__box01">
                        <h4 class="bh-nomudomo02__box01__title">
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-01.png" alt="成分"></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-01_sp.png" alt="成分"></span>
                        </h4>
                        <div class="bh-nomudomo02__box01__contents">
                            <div class="bh-nomudomo02__box01__contents__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd_02-02.png" alt="自然の力で「代謝」「血行」にアプローチ厳選9成分をぎゅっと凝縮">
                            </div>
                            <ul class="bh-nomudomo02__clm2">
                                <li class="bh-nomudomo02__clm2__li">
                                    <div class="bh-nomudomo02__clm2__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_01.jpg" alt="アムラ"></div>
                                    <p class="bh-nomudomo02__clm2__text">
                                        インドの伝統的な「アーユルヴェーダ」の世界でも三大果実の１つと称され、レモンの約10倍のビタミンC、赤ワインの約30倍のポリフェノールを含む。
                                    </p>
                                </li>
                                <li class="bh-nomudomo02__clm2__li">
                                    <div class="bh-nomudomo02__clm2__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_02.jpg" alt="ヒハツ"></div>
                                    <p class="bh-nomudomo02__clm2__text">
                                        食べると約11分でぽかぽかするほどの温める力を持つ。「血行」に働きかけ、めぐりの力をサポートする長コショウ。
                                    </p>
                                </li>
                            </ul>
                            <div class="bh-nomudomo02__foot">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_12.png" alt="すみずみまでめぐるサイクル">
                            </div>
                            <ul class="bh-nomudomo02__clm4">
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_03.jpg" alt="アンセリン"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_04.jpg" alt="月桃葉"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_05.jpg" alt="プロテオグリカン"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_06.jpg" alt="鱧コラーゲン"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_07.jpg" alt="シトルリン"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_08.jpg" alt="ビートセラミド"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_09.jpg" alt="ヒアルロン酸"></div>
                                </li>
                            </ul>

                            <div class="bh-nomudomo02__foot">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_11.png" alt="めぐり力だけでなく、最も高い相乗効果を生むように9成分を配合した、再春館製薬所ならではの内側ケアにご期待ください。">
                            </div>
                        </div>

                    </div>
                    <div class="bh-nomudomoDeveloper">
                        <h4 class="bh-nomudomoDeveloper__box01__title">
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer.png" alt="開発者インタビュー"></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer_sp.png" alt="開発者インタビュー"></span>
                        </h4>
                        <div class="bh-nomudomoDeveloper__box01__contents">
                            <div class="bh-nomudomoDeveloper__thumb__btn">
                                <a href="mgk01.html"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_next_01.png" alt="続きを読む"></a>
                            </div>
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/developer__mgk.jpg" alt="表面的なお悩みを一時的にやわらげるのではなく原因に根本からアプローチしたい。着目したのは、体内の「血行」と「代謝」でした。再春館製薬所 研究開発 田野岡亮太"></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/developer__mgk_sp.jpg" alt="表面的なお悩みを一時的にやわらげるのではなく原因に根本からアプローチしたい。着目したのは、体内の「血行」と「代謝」でした。再春館製薬所 研究開発 田野岡亮太"></span>
                        </div>
                    </div>
                </div>

                <div class="bh-nomudomo03">
                    <h3 class="bh-nomudomo03__title"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd03_01.png" alt="明日のわたしが、たのしみになる美習慣。"></h3>
                    <div class="bh-nomudomo03__thumb">
                        <div class="bh-nomudomo03__thumb__img"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd03_01.png" alt=""></div>
                        <div class="bh-nomudomo03__thumb__btn">
                            <a href="#modal01"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_haigoulist_01.png" alt="配合成分一覧"></a>

                            <div class="remodal modal01" data-remodal-id="modal01">
                                <button data-remodal-action="close" class="remodal-close"></button>
                                <div class="modalContents">
                                    <div class="modal01__box01">
                                        <h4 class="modal01__title">めぐりの結晶　　　<br class="bh-onlySP">配合成分一覧</h4>
                                        <div class="modal01__tableWrap">
                                            <ul class="modal01__table">
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__th"><span>原材料名</span></div>
                                                    <div class="modal01__table__th"><span>起源</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>コラーゲンペプチド（鱧由来）</span></div>
                                                    <div class="modal01__table__td"><span>鱧の皮</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>アムラエキス</span></div>
                                                    <div class="modal01__table__td"><span>アムラの果実</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>L-シトルリン</span></div>
                                                    <div class="modal01__table__td"><span>発酵</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ヒハツエキス</span></div>
                                                    <div class="modal01__table__td"><span>ヒハツの果穂</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>月桃葉エキス</span></div>
                                                    <div class="modal01__table__td"><span>月桃の葉</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>フィッシュペプチド</span></div>
                                                    <div class="modal01__table__td"><span>マグロ・カツオ</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>サケ鼻軟骨エキス</span></div>
                                                    <div class="modal01__table__td"><span>サケの鼻軟骨</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ビート抽出物</span></div>
                                                    <div class="modal01__table__td"><span>テンサイ</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>結晶セルロース</span></div>
                                                    <div class="modal01__table__td"><span>セルロース</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ショ糖エステル</span></div>
                                                    <div class="modal01__table__td"><span>サトウキビ・テンサイ・パーム・ヤシ</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>リン酸カルシウム</span></div>
                                                    <div class="modal01__table__td"><span>リン鉱石・石灰石</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>ヒアルロン酸</span></div>
                                                    <div class="modal01__table__td"><span>醗酵</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>シェラック</span></div>
                                                    <div class="modal01__table__td"><span>醗酵・ベニバナ</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>加工デンプン</span></div>
                                                    <div class="modal01__table__td"><span>トウモロコシ</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>カルナウバロウ</span></div>
                                                    <div class="modal01__table__td"><span>カルナウバロウバヤシ</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="modal01__text">※原材料の一部にサケ、ゼラチンを含みます。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bh-nomudomo03__text">
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>商品名</dt>
                            <dd>めぐりの結晶<sup>※</sup><span class="bh-labelBlack">年齢美習慣</span></dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>価格</dt>
                            <dd>6,480円（税込）</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>ご購入ポイント</dt>
                            <dd>3ポイント</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>内容量</dt>
                            <dd>120粒（約１ヶ月分）1日4粒を目安にお召し上がりください。</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>配合量</dt>
                            <dd>1日4粒（1.0g）あたり<br>コラーゲン：300mg<br>アムラエキス：79mg<br>シトルリン：100mg<br>ヒアルロン酸：8mg<br>プロテオグリカン：1,000μg<br>保存料・着色料無添加</dd>
                        </dl>
                        <ul class="bh-nomudomoNote">
                            <li class="bh-nomudomoNote__list">※原材料の一部にサケ、ゼラチンを含みます。</li>
                            <li class="bh-nomudomoNote__list">※めぐりの結晶は食品です。</li>
                        </ul>
                    </div>
                    <div class="bh-nomudomo03__foot">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd03_02.png" alt="飲み込みやすい、小粒で丸い形状。手軽に飲めるから、続けやすい。日中ダメージにゆるがない、きれいと元気を育てましょう。">
                    </div>
                </div>

                <div class="bh-productList">
                    <ul class="bh-productList__clm">
                        <li class="bh-productList__clm__li">
                            <div href="[:$URL:]" class="bh-onlyPC">
                                <div class="bh-productList__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_pl_01.png" alt=""></div>
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_chumon_01.png" alt=""></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_pl_01_sp.png" alt=""></a>
                            </div>
                        </li>
                        <li class="bh-productList__clm__li li04">
                            <div class="bh-onlyPC">
                                <div class="bh-productList__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_pl_04.png" alt=""></div>
                                <a href="[:$URL_REGULAR:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_chumon_02.png" alt=""></a>
                                <a href="#modal02" class="bh-productList__btn2"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_teiki_01.png" alt="定期お届けコースだけのうれしい特典はこちら"></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL_REGULAR:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_pl_04_sp.png" alt=""></a>
                                <a href="#modal02" class="bh-productList__btn2"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_teiki_01.png" alt="定期お届けコースだけのうれしい特典はこちら"></a>
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
                                        <div class="modal02__box02__figure"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_modal01_01.png" alt=""></div>
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
                                <a href="/domo/beautyhabit/review/mgk/interview/index.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/22.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                                            <p class="bh-osusume__subTitle">「めぐりの結晶」インタビュー</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">美しく輝く毎日のために。内側からもケア、続けています。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/meguri02.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/10.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                                            <p class="bh-osusume__subTitle">血行不良が肌老化の原因！？</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">血行は、お肌とからだをすこやかに保つために必要不可欠なもの。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/meguri03.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/11.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                                            <p class="bh-osusume__subTitle">シワシミ対策の鍵！からだの奥のめぐり</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">めぐりとは、不要なものを排出し、必要なものを行き渡らせること。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/review/mgk/customer_voice.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/21.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                                            <p class="bh-osusume__subTitle">「めぐりの結晶」口コミ</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">「めぐりの結晶」に寄せられたお客様のリアルな投稿をご紹介。</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/cafeglobe_meguri01.html" class="bh-topics">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/25.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">cafeglobe×めぐりの結晶</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">スーパーフルーツがあれば、いくつになってもキレイは続く！</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/mylohas_meguri01.html" class="bh-topics">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/26.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">MY LOHAS×めぐりの結晶</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">よどみのない人になる。「美人印象」を生むインドの果実とは？</div>
                                </a>
                            </li>
                            [:* ▼しわしみ食品_スキンケア大学めぐり追加　2016/12/5 geo-kajishi *:]
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/skincare-univ_meguri/index.html" class="bh-topics">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-skincare_meguri.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                                            <p class="bh-osusume__subTitle">スキンケア大学×めぐりの結晶</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">朝の「めぐり美容」で差をつける！よどまない内側ケアのコツ</div>
                                </a>
                            </li>
                            [:* ▲しわしみ食品_スキンケア大学めぐり追加　2016/12/5 geo-kajishi *:]
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