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
    <title>めぐりの結晶 開発者のこだわり｜飲む＆食べるドモホルンリンクル＜公式＞</title>
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

<body class="bh-sectionDeveloper page-skincare_tips template-enable-media-queries template-legacy-layout02 [:$body_template_class:]">
    <!--///// (3) GTMの指定 - START /////-->
    [:include file="domo/beautyhabit/_header.inc.tpl":]
    <!--///// (3) GTMの指定 - END /////-->

    <!--///// (4) コンテンツ  <div id="main" class="bh-main">内 - START /////-->
    <div id="main" class="bh-main">
        [:* SP用にナビゲーションを表示 *:] [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]

        <!-- page -->
        <div class="bh-section bh-sectionNomudomo">
            <div class="bh-innr">
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__heading">
                        <div class="bh-onlyPC">
                            <h2><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer_mgk.png" alt="めぐりの結晶 開発者のこだわり"></h2>
                        </div>
                        <div class="bh-onlySP">
                            <h2><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer_mgk.png" alt="めぐりの結晶 開発者のこだわり"></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bh-onlyPC">
                <div class="bh-nomudomoDeveloper__full">
                    <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_main.jpg" alt="表面的なお悩みを一時的にやわらげるのではなく原因に根本からアプローチしたい。着目したのは、体内の「血行」と「代謝」でした。再春館製薬所 研究開発 田野岡亮太">
                </div>
            </div>
            <div class="bh-onlySP bh-nomudomoDeveloper__staff"><img src="/assets/ps/domo/beautyhabit/mgk/img/dev_main_sp.jpg" alt="表面的なお悩みを一時的にやわらげるのではなく原因に根本からアプローチしたい。着目したのは、体内の「血行」と「代謝」でした。再春館製薬所 研究開発 田野岡亮太"></div>
            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__box02">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-a.png" alt="内側の不調が、「きれい」のトラブルに。着目したのは めぐりの力">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-a" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-a_sp.png" alt="内側の不調が、「きれい」のトラブルに。着目したのは めぐりの力">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">女性のさまざまなお悩みをやわらげ“いつまでも若々しくありたい”という願いにお応えするために、私たちは40年以上にわたって年齢からくるお悩みの研究を続けてきました。年齢を重ねると多くの方が「なんとなく調子が悪い」「クマがとれにくい…」「くすみが気になる…」といった、からだの衰えを少しずつ感じるようになります。年齢によって起きるお悩みは、からだの内側の機能に原因があります。最初は小さな不調でも、やがては深刻な悩みにつながってしまう。そんなからだの変化に対し、漢方に学んだ製薬会社として独自の答えを出したい。長く基礎化粧品の研究開発を重ねてきた私たちがたどり着いた答えは、内側で起こる現象には、内側からしっかりと働きかけることができるインナーケアが何としても重要であるということ。そして、再春館製薬所ならではの漢方の考え方をもとにした、見た目年齢と「血行・代謝」との密接な関わりへの着目でした。血行と代謝、つまり年齢とともに低下する“めぐりの力”に根本からアプローチすることで、自ら美しくなろうとする力をからだのすみずみまでめぐらせ、お悩みの出にくいからだを目指すことができる―
                            そんな発想に基づき開発したのが、年齢を重ねたお客様の“きれいづくり”の実現を根本から後押しする「めぐりの結晶」です。
                        </p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_drink.png" alt="めぐりの結晶">
                            </div>
                        </div>
                        <div class="bh-onlySP bh-nomudomoDeveloper__item"><img src="/assets/ps/domo/beautyhabit/mgk/img/dev_drink_sp.png" alt="めぐりの結晶"></div>
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-b.png" alt="からだの内側で起こっている事実に1日中、隙なく立ち向かうために">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-b" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-b_sp.png" alt="からだの内側で起こっている事実に1日中、隙なく立ち向かうために">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">からだの内側にも外側にも深く関わっている「めぐり」＝「血行」と「代謝」。“めぐりの力”とは、必要な栄養をからだのすみずみまで運び、不要なものを排出し細胞の生まれ変わる力のこと。このめぐりのサイクルがつねに滞りなく行われてこそ、からだの細胞は日々生まれ変わることができ、そのしくみをゆるがす原因に根本からアプローチすることができます。逆にこの力が年齢とともに低下してしまうと、お肌やからだ本来の“修復力”もスムーズに機能しにくくなってしまいます。加齢の研究を追求し続けてきた私たち研究員としても、１日の生活を通してお客様のからだの内側でずっと起こり続けている事実や変化、年齢によるお悩みに、隙のないアプローチができる商品をお届けしたいと考え“朝にも飲めて日中の対策ができる”サプリメントとしました。</p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full bh-nomudomoDeveloper__text">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_ph-a.jpg" alt="">
                            </div>
                        </div>
                        <div class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/dev_ph-a_sp.jpg" alt=""></div>
                    </div>
                </div>
            </div>

            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">

                    <div class="bh-nomudomoDeveloper__box02">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-c.png" alt="自然の力を、からだのすみずみへ。模索を重ね、一粒に込めた想い">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-c" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-c_sp.png" alt="自然の力を、からだのすみずみへ。模索を重ね、一粒に込めた想い">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">年齢によるお悩みに少しでも手応えを感じていただけるものをより良い形でご提供したい。そのためには、まず血行・代謝に働きかけてからだの基盤づくりを行い、その働きを補う美容成分をからだのすみずみまで行き渡らせることで、からだごとターンオーバーを促すことが大切です。配合した原料には数ある原料の中から血行・代謝に働きかけるインド原産のアムラという果実を選定。他の美容成分を含め全成分に天然原料を使用することで、“ドモホルンリンクル独自のサプリメント”としてどこにもない組み合わせを実現しています。さらに、継続して飲んでいただけるよう飲みやすさも追求し、粒の大きさや形状には徹底的にこだわりました。発売前にお客様に商品をご紹介した際、「こんなに小さくていいの？
                            助かるわね」というお声をいただいた時はとても嬉しかったですね。
                        </p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full bh-nomudomoDeveloper__text">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_ph-b.jpg" alt="">
                            </div>
                        </div>
                        <div class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/dev_ph-b_sp.jpg" alt=""></div>
                    </div>
                </div>
            </div>


            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__box01">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-d.png" alt="お悩みを根本から支えるために継続的なインナーケアを">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-d" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-d_sp.png" alt="お悩みを根本から支えるために継続的なインナーケアを">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">古いものを排出し、新しいものを生みだすというめぐりの力をコンセプトにした「めぐりの結晶」は、まさに年齢によるお悩みを根本から支えるインナーケアです。ですからお悩みをお持ちのお客様にはぜひ毎日、続けていただきたいですね。これまで基礎化粧品ドモホルンリンクルの研究で解明されてきた年齢肌のお悩みの原因やメカニズムについての成果は実に数多くあり、そのすべてが再春館製薬所としての軌跡ですが、お客様のお悩みのために私たち研究員ができることや解明すべきことはまだまだ残されていると思っています。人のからだは、それだけ未知数なもの。だからこそ、漢方の製薬会社として大切にしてきた“自ら美しくなろうとする力”をさらに解き明かし、これからもお客様のお悩みの根本原因に応え続けていきたい。そう考えています。</p>
                    </div>
                </div>
                <div class="bh-nomudomo04__foot">
                    <div class="bh-onlyPC">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_dev_01.png" alt="年齢によるお悩みに向き合い続けてきた再春館製薬所の開発者のこだわりが詰まった内側ケアをぜひお試しください。">
                    </div>
                    <div class="bh-onlySP bh-osusume">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_dev_01_sp.png" alt="年齢によるお悩みに向き合い続けてきた再春館製薬所の開発者のこだわりが詰まった内側ケアをぜひお試しください。">
                    </div>
                </div>
                <div class="bh-productList bh-osusume">
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
                <div class="bh-nomudomotop">
                    <ul class="bh-nomudomotop__btnList">
                        <li class="bh-nomudomotop__btnList__li">
                            <a href="mgk.html"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_mgk.png" alt="めぐりの結晶 商品ページ"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bh-innr">
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
                    <div class="bh-localPagetop__btnBox bh-localPagetop__btnBox--dev">
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

            <!-- // page -->

        </div>
        <!--///// (4) コンテンツ  <div id="main">内 - END /////-->

        [:include file="domo/_shared/_footer01.inc.tpl":]

        <!--///// (5) サイトカタリスト、YTM - START /////-->
        [:include file="domo/_shared/_footer_analysis.inc.tpl":]
        <!--///// (5) サイトカタリスト、YTM - END /////-->
</body>

</html>