<!DOCTYPE html>
<!--[if IE 6]><html lang='ja' class='ie6' prefix='og: http://ogp.me/ns#'><![endif]-->
<!--[if IE 7]><html lang='ja' class='ie7' prefix='og: http://ogp.me/ns#'><![endif]-->
<!--[if IE 8]><html lang='ja' class='ie8' prefix='og: http://ogp.me/ns#'><![endif]-->
<!--[if IE 9]><html lang='ja' class='ie9' prefix='og: http://ogp.me/ns#'><![endif]-->
<!-- [if gt IE 9] <!-->
<html lang="ja" prefix="og: http://ogp.me/ns#">
<!-- <![endif]--><head>
  <meta charset="Shift_JIS">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <!--///// (1) ページタイトル　キーワード　ディスクリプション - START /////-->
  <title>ピックアップ・トピックス｜飲む＆食べるドモホルンリンクル＜公式＞</title>
  <meta name="description" content="【飲む＆食べるドモホルンリンクル】公式ブランドサイト。「ピックアップ・トピックス」では、メディア掲載記をはじめ、旬の話題をご紹介します。">
  <meta name="keywords" content="ドモホルンリンクル,ドモホルン,ドモ,再春館製薬所,再春館,ピックアップ・トピックス">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/topics.html">
  <meta property="og:title" content="口コミ・インタビュー｜飲む＆食べるドモホルンリンクル＜公式＞">
  <meta property="og:description" content="【飲む＆食べるドモホルンリンクル】公式ブランドサイト。「ピックアップ・トピックス」では、メディア掲載記をはじめ、旬の話題をご紹介します。" />
  <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
  <!--///// (1) ページタイトル　キーワード　ディスクリプション - END /////-->
  <!-- ▼サイト共通で使うスタイル・スクリプト-->
  [:* 以下のファイルをインクルードしサイト共通のjs、cssを呼び出すようにするのだが、ページに必要なjsを途中で呼び出す必要があるため直書きします *:]
  [:* [:include file="domo/_shared/_head_shared01.inc.tpl":] *:]
  <link rel="stylesheet" href="/assets/css/style.css?20160128" />
  <script src="/assets/js/vendor/jquery.min.js" charset="utf-8"></script>
  <!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
  <script src="/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js" charset="utf-8"></script>
  <script src="/assets/ps/domo/beautyhabit/common/js/function.js?20161024" charset="utf-8"></script>
  <script src="/assets/ps/domo/beautyhabit/common/js/remodal.min.js" charset="utf-8"></script>
  <!-- ▲ページ毎に必要なスタイル・スクリプトなど-->
  <script src="/assets/js/vendor/underscore-min.js" charset="utf-8"></script>
  <script src="/assets/js/vendor/require.js" charset="utf-8"></script>
  <script src="/assets/js/require_config.js?20160128" charset="utf-8"></script>
  <script src="/assets/js/app.js?20160128" charset="utf-8"></script>
  <!-- ▲サイト共通で使うスタイル・スクリプト-->

  <!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
  <!--///// (2) ページに必要なjs と CSS - START /////-->
  <script>
    require(["jquery"], function() {
      require(["/assets/ps/domo/beautyhabit/top/js/masonry.pkgd.min.js"], function(Masonry) {
        require(["/assets/ps/domo/beautyhabit/top/js/jquery-bridget.js"], function(jQueryBridget) {
          jQueryBridget('masonry', Masonry);
          require(["/assets/ps/domo/beautyhabit/topics/js/topics.js?20161024"]);
        })
      });
    });
  </script>
  <!-- /beautyhabit/ 共通部分css -->
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/top/css/top.css" />
  <!-- end /beautyhabit/ 共通部分css -->
  <!--///// (2) ページに必要なjs と CSS - END /////-->
  <!-- ▲ページ毎に必要なスタイル・スクリプトなど-->
</head>

[: if $status_login:]
	[:* ログイン済 *:]
	[:assign var=body_template_class value='template-post-login-layout02':]
[: else :]
	[:* 未ログイン *:]
	[:assign var=body_template_class value='template-pre-login-layout02':]

	[: if $revisitFlg !==1 && $revisitFlg !==2 :]
		[:* S未請求 *:]
		[:assign var=body_template_class value='template-pre-login-layout01':]
	[: /if :]
[: /if :]

<body class="page-skincare_tips template-enable-media-queries template-legacy-layout02 [:$body_template_class:]">
  <!--///// (3) GTMの指定 - START /////-->
  [:include file="domo/beautyhabit/_header.inc.tpl":]
  <!--///// (3) GTMの指定 - END /////-->

  <!--///// (4) コンテンツ  <div id="main" class="bh-main">内 - START /////-->
  <div id="main" class="bh-main">
  [:* SP用にナビゲーションを表示 *:]
  [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]

    <!-- top -->
    <div class="bh-section bh-sectionSubIndex">
      <div class="bh-innr">
        <img src="/assets/ps/domo/beautyhabit/topics/img/title_topics_01.png" alt="ピックアップ・トピックス">
      </div>
    </div>

    <div class="bh-section bh-sectionSubArticle topics">
      <div class="bh-innr">
        <div class="bh-articleList">
          <ul class="bh-articleList__list">
            <!-- サイズ調整用クラス -->
            <li class="bh-articleList__list__gridSizer"></li>
            <li class="bh-articleList__list__gutterSizer"></li>
            <!-- //サイズ調整用クラス -->
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/cafeglobe_meguri01.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/25.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">cafeglobe×めぐりの結晶</h3>
                    <p class="bh-panel__text">スーパーフルーツがあれば、いくつになってもキレイは続く！</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/mylohas_meguri01.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/26.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">MY LOHAS×めぐりの結晶</h3>
                    <p class="bh-panel__text">よどみのない人になる。「美人印象」を生むインドの果実とは？</p>
                  </div>
                </div>
              </a>
            </li>
            [:* ▼R-#29449_【H28-00117-04】しわしみ食品_ピックアップトピックへの記事2本追加　2016/11/21 nul-hatano *:]
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/socialtrendnews_ndw01.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">ソーシャルトレンドニュース×飲むドモホルンリンクル</h3>
                    <p class="bh-panel__text">忙しい女性必見！短い睡眠でキレイになるには、○○ホルモンがカギ</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/skincare-univ_ndw/index.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-skincare.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">スキンケア大学×飲むドモホルンリンクル</h3>
                    <p class="bh-panel__text">寝ている間にキレイが育つ「リセット美容」始めよう</p>
                  </div>
                </div>
              </a>
            </li>
            [:* ▲R-#29449_【H28-00117-04】しわしみ食品_ピックアップトピックへの記事2本追加　2016/11/21 nul-hatano *:]
            [:* ▼しわしみ食品_スキンケア大学めぐり追加　2016/12/5 geo-kajishi *:]
			<li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/skincare-univ_meguri/index.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-skincare_meguri.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">スキンケア大学×めぐりの結晶</h3>
                    <p class="bh-panel__text">朝の「めぐり美容」で差をつける！よどまない内側ケアのコツ</p>
                  </div>
                </div>
              </a>
            </li>
            [:* ▲しわしみ食品_スキンケア大学めぐり追加　2016/12/5 geo-kajishi *:]
            
             <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/socialtrendnews_ndw02.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews02.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">第2回 ソーシャルトレンドニュース×飲むドモホルンリンクル</h3>
                    <p class="bh-panel__text">「美味しすぎる美容ドリンク」飲むドモホルンリンクルって実際どうなの？感想まとめ</p>
                  </div>
                </div>
              </a>
            </li>
             
             <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/socialtrendnews_ndw03.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews03.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス"></p>
                    <h3 class="bh-panel__title">第3回 ソーシャルトレンドニュース×飲むドモホルンリンクル</h3>
                    <p class="bh-panel__text">お正月のダラダラ睡眠は卒業！「グッスリ寝て女子力あげる」4つの睡眠法をやってみた</p>
                  </div>
                </div>
              </a>
            </li>            
          </ul>
        </div>
      </div>
    </div>

    <div class="bh-section bh-sectionInquiry">
      <div class="bh-innr">
        <div class="bh-sectionInquiry__thumb">
          <img src="/assets/ps/domo/beautyhabit/top/img/thumb_inquiry_01.jpg" alt="みなさまの声をお寄せください。">
        </div>
        <div class="bh-sectionInquiry__wrap">
          <ul class="bh-sectionInquiry__clm2">
            <li class="bh-sectionInquiry__clm2__left">
              <div class="bh-sectionInquiry__clm2__title"><img src="/assets/ps/domo/beautyhabit/top/img/text_inquiry_mail_01.png" alt="メールでのお問い合わせ"></div>
              <div class="bh-sectionInquiry__clm2__btnBox">
                <a href="/domo/inquiry/"><img src="/assets/ps/domo/beautyhabit/top/img/btn_inquiry_mail_01.png" alt="ご相談・ご感想はこちら"></a>
              </div>
            </li>
            <li class="bh-sectionInquiry__clm2__right">
              <div class="bh-sectionInquiry__clm2__title"><img src="/assets/ps/domo/beautyhabit/top/img/text_inquiry_tel_01.png" alt="0120-444-444"></div>
              <div class="bh-sectionInquiry__clm2__btnBox">
                <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/top/img/btn_inquiry_tel_01.png" alt="電話でのお問い合わせ"></span>
                <a href="tel:0120444444" class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/top/img/btn_inquiry_tel_01.png" alt="電話でのお問い合わせ"></a>
              </div>
            </li>
          </ul>
          <div class="bh-sectionInquiry__textBox">
            [:* ▼R-#29445_営業時間を熊本地震前の通常に戻す【WEB】2016/11/25 nul-sato*:]
            <p>このフリーダイヤルの受付時間<br> 午前8時～午後10時、日曜祝日も受付けております。</p>
            [:* ▲R-#29445_営業時間を熊本地震前の通常に戻す【WEB】2016/11/25 nul-sato*:]
            <p>※番号「非通知」の設定をされている場合は、<br> 0120の前に、186をつけておかけください。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- // top -->

  </div>
  <!--///// (4) コンテンツ  <div id="main">内 - END /////-->

[:* ▼R-#29383_【H28-00117-03】食品サイト_LABO配下／ピックアップトピック配下_お試しセットバナーを取るorフッター差替え 2016/11/14 nul-hatano *:]
  [:include file="domo/_shared/_footer02.inc.tpl":]
[:* ▲R-#29383_【H28-00117-03】食品サイト_LABO配下／ピックアップトピック配下_お試しセットバナーを取るorフッター差替え 2016/11/14 nul-hatano *:]

  <!--///// (5) サイトカタリスト、YTM - START /////-->
  [:include file="domo/_shared/_footer_analysis.inc.tpl":]
  <!--///// (5) サイトカタリスト、YTM - END /////-->
</body>

</html>
