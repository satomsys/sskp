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
    <title>飲むドモホルンリンクル 開発者のこだわり｜飲む＆食べるドモホルンリンクル＜公式＞</title>
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
                            <h2><img src="/assets/ps/domo/beautyhabit/ndw/img/title_developer_ndw.png" alt="飲むドモホルンリンクル 開発者のこだわり"></h2>
                        </div>
                        <div class="bh-onlySP">
                            <h2><img src="/assets/ps/domo/beautyhabit/ndw/img/title_developer_ndw.png" alt="飲むドモホルンリンクル 開発者のこだわり"></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bh-onlyPC">
                <div class="bh-nomudomoDeveloper__full">
                    <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_main.jpg" alt="コラーゲンのパイオニアとして年齢からくるお悩みの原因を突き詰め、見えてきたのは「睡眠の質」の大切さでした。再春館製薬所 研究開発 田野岡亮太">
                </div>
            </div>
            <div class="bh-onlySP  bh-nomudomoDeveloper__staff"><img src="/assets/ps/domo/beautyhabit/ndw/img/dev_main_sp.jpg" alt="コラーゲンのパイオニアとして年齢からくるお悩みの原因を突き詰め、見えてきたのは「睡眠の質」の大切さでした。再春館製薬所 研究開発 田野岡亮太"></div>
            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__box02">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-a.png" alt="お客様のお悩みに寄り添うことで生まれたドモホルンリンクル初のインナーケア">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-a" src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-a_sp.png" alt="お客様のお悩みに寄り添うことで生まれたドモホルンリンクル初のインナーケア">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">お客様の“きれいづくり”のため、漢方の製薬会社として日本で最初にコラーゲンを化粧品に活用した再春館製薬所は、40年以上にわたって年齢からくるお悩みの研究を積み重ねてきました。女性のさまざまなお悩みの解消、そして“いつまでも若々しくありたい”という願いにお応えするため、年齢によるお悩みの原因を突き止め、根本から解決するための取り組みを日々進めています。そんな長年の研究の中で聞こえてきたのは、年齢を重ねていくにつれ「眠りが浅くて、疲れがとれない」「ハリがなくなってきた…」「なんとなく調子が悪い…」といった、女性ならではの不安定な体調に悩み、少しずつからだの変化や衰えを感じ始めていらっしゃるお客様からのお声でした。私たちのからだの中には、もともとコラーゲンをつくり出す力が備わっています。からだ本来がもつそれらの力に対し、「日中はお仕事、夜は家事・育児」といった“女性の多忙なライフスタイル”の中で複雑化するお悩みの原因に根本からお応えできる方法とはどんなことだろうか？
                            年齢を重ねることで減少していくコラーゲンをどうしたら自らの力でつくり出せるように後押しできるだろうか？ 美しくあり続けるために最適な体内環境を整え、なんとかお悩みや不安を取り除いてさしあげたい― そんなお客様の“きれいづくり”への想いを結集し完成させたのが、今までとはまったく異なる独自の発想で開発したインナーケア、「飲むドモホルンリンクル」です。</p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_drink.png" alt="">
                            </div>
                        </div>
                        <div class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/dev_drink_sp.jpg" alt=""></div>
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-b.png" alt="いかにしてお悩みの根本原因へ届けるか最上の方法は「睡眠」へのアプローチ">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-b" src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-b_sp.png" alt="いかにしてお悩みの根本原因へ届けるか最上の方法は「睡眠」へのアプローチ">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">お客様のお悩みの根本原因を探れば探るほど、血行や代謝、ホルモンバランスなど“からだ本来が持っている力”が深く関わっているということがわかってきます。年齢を重ねるごとに届きにくくなるコラーゲンをしっかりと届けるためには、内側からコラーゲンを補うことが大切。年齢によるお悩みをもつお客様に、与えたコラーゲンがしっかりと活用されるようにしたい。長年にわたり、あらゆる角度から研究を続けてたどり着いた私たちのひとつの結論。それが、成長ホルモンの分泌を大きく左右する“睡眠の質”を高めることでした。深く眠ること、上質な睡眠をとることこそが自らが美しくなろうとする根本力を後押しできる。睡眠の質に着目したのも、良質な睡眠をとることでからだが自ら美しくなろうとする力を引き出し、コラーゲンづくりを助けていくという発想に基づく考えからです。睡眠の質の向上、そのためのリラックス。これらが飲むドモホルンリンクルの考え方の要であり、そのためにクワンソウ、GABA、コラーゲンという成分を配合しています。</p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full bh-nomudomoDeveloper__text">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_ph-a.jpg" alt="">
                            </div>
                        </div>
                        <div class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/dev_ph-a.jpg" alt=""></div>
                    </div>
                </div>
            </div>

            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">

                    <div class="bh-nomudomoDeveloper__box02">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-c.png" alt="確かな手応えだけでなく、続けやすさ、飲みやすさにもこだわって">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-c" src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-c_sp.png" alt="確かな手応えだけでなく、続けやすさ、飲みやすさにもこだわって">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">配合しているクワンソウは、沖縄で昔から「眠り草」として重宝されている伝統植物です。インナーケアとして安心なものだけを配合したいと考え、配合成分は信頼できる生産地・生産者による原料を使用しています。4,000mgというコラーゲンの配合量も1日の食事で摂れるコラーゲン量と1日に必要な量をもとに算出した数字です。また、毎日おいしく親しんでいただきたいという想いから「味」にも徹底的にこだわり、マンゴー、ピーチ、グレープフルーツなどさまざまな味を検証。ドリンクという形態であることや夜寝る前にも飲んでいただけること、甘すぎる後味は好まれにくいだろうということから、最も飲みやすい味として「ゆず」を採用しました。からだにやさしい成分をおいしくお届けしたい。私たち研究員のこだわりが詰まった商品となっています。</p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full bh-nomudomoDeveloper__text">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_ph-b.jpg" alt="">
                            </div>
                        </div>
                        <div class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/dev_ph-b_sp.jpg" alt=""></div>
                    </div>
                </div>
            </div>

            <div class="bh-innr">
                <h2 class="bh-hide">飲むドモホルンリンクル</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__box01">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-d.png" alt="修復力を根本から支えるために大切なのは、毎日のインナーケア">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-d" src="/assets/ps/domo/beautyhabit/ndw/img/dev_title-d_sp.png" alt="修復力を根本から支えるために大切なのは、毎日のインナーケア">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">人のからだには“自ら美しくなろうとする力”があり、その力は睡眠の質によって大きく左右されます。しかし、効果的な成分をたくさんドリンクに入れても、それがしっかりと届かなくては意味がない。大切なのは、お肌やからだが本来もつ“修復力”にアプローチする内側からのケアを毎日続けていただくことで、お悩みが出にくくなるようにすること。そのためにはまず、生命活動の基盤となる「睡眠の質」を大切にしていただき、効果成分そのものをしっかり運べるからだの基盤づくりをしていただきたいのです。飲むドモホルンリンクルは、年齢とともにどうしても低下してしまうからだの状態を根本から支えることで、お客様のお悩みに真正面から向き合うことができる商品だと自負しています。</p>
                    </div>
                </div>
                <div class="bh-nomudomo04__foot">
                    <div class="bh-onlyPC">
                        <img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_dev_01.png" alt="年齢によるお悩みに向き合い続けてきた再春館製薬所の開発者のこだわりが詰まった内側ケアをぜひお試しください。">
                    </div>
                    <div class="bh-onlySP bh-osusume">
                        <img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_dev_01_sp.png" alt="年齢によるお悩みに向き合い続けてきた再春館製薬所の開発者のこだわりが詰まった内側ケアをぜひお試しください。">
                    </div>
                </div>
                <div class="bh-productList bh-osusume">
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
                <div class="bh-nomudomotop">
                    <ul class="bh-nomudomotop__btnList">
                        <li class="bh-nomudomotop__btnList__li">
                            <a href="ndw.html"><img src="/assets/ps/domo/beautyhabit/ndw/img/btn_ndw.png" alt="飲むドモホルンリンクル 商品ページ"></a>
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
                        </ul>
                    </div>
                </div>
                <div class="bh-localPagetop">
                    <div class="bh-localPagetop__btnBox  bh-localPagetop__btnBox--dev">
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