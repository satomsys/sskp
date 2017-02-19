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
  <title>プロテオグリカン｜ねむりとめぐりの研究所｜飲む＆食べるドモホルンリンクル＜公式＞＜公式＞</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.saishunkan.co.jp/domo/beautyhabit/lab/raw_material03.html">
  <meta property="og:title" content="プロテオグリカン｜ねむりとめぐりの研究所｜飲む＆食べるドモホルンリンクル＜公式＞">
  <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
  <!--///// (1) ページタイトル　キーワード　ディスクリプション - END /////-->
  <!-- ▼サイト共通で使うスタイル・スクリプト-->
  <link rel="stylesheet" href="/assets/css/style.css?20160128" />
  <script src="/assets/js/vendor/jquery.min.js" charset="utf-8"></script>
  <script src="/assets/js/vendor/underscore-min.js" charset="utf-8"></script>
  <script src="/assets/js/vendor/require.js" charset="utf-8"></script>
  <script src="/assets/js/require_config.js?20160128" charset="utf-8"></script>
  <script src="/assets/js/app.js?20160128" charset="utf-8"></script>
  <!-- ▲サイト共通で使うスタイル・スクリプト-->
  <!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
  <!--///// (2) ページに必要なjs と CSS - START /////-->
  <!-- /beautyhabit/ 共通部分css -->
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
  <!-- end /beautyhabit/ 共通部分css -->
  <!--///// 下層ページ用 CSS & Web フォント - START /////-->
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/lab/css/rest.css" />
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/lab/css/style.css?20161108" />
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/lab/css/ndw.css?20161108" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css" />
  <!--///// 下層ページ用 CSS & Web フォント - END /////-->
  <script>
    require(["jquery"], function() {
      require(["/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js","/assets/ps/domo/beautyhabit/common/js/remodal.min.js","/assets/ps/domo/beautyhabit/lab/js/jquery.heightLine.js"], function() {
        require(["/assets/ps/domo/beautyhabit/common/js/function.js?20161014", "/assets/ps/domo/beautyhabit/lab/js/function.js?20161108", "/assets/ps/domo/beautyhabit/common/js/osusume.js"]);
      })
    });
  </script>
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

<body class="page-skincare_tips template-enable-media-queries page-beautyhabit_labo [:$body_template_class:]">
  <!--///// (3) GTMの指定 - START /////-->
  [:include file="domo/beautyhabit/_header.inc.tpl":]
  <!--///// (3) GTMの指定 - END /////-->

  <!--///// (4) コンテンツ  <div id="main" class="bh-main">内 - START /////-->
  <div id="main" class="bh-main">
  [:* SP用にナビゲーションを表示 *:]
  [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]
    
  <!--///// 下層ページ - START /////-->
  
  <div class="wrap">

    <div class="header">
      <div class="header_inner">
        <div class="h1_container">
          <h1>
            <div class="sp"><img src="/assets/ps/domo/beautyhabit/lab/img/common/h1_sp.png" /></div>
            <div class="pc"><img class="h1_img" src="/assets/ps/domo/beautyhabit/lab/img/common/h1_pc.png" /></div>
          </h1>
        </div><!-- .h1_container -->
        <div class="h2_container sp">
          <h2>
            <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/01_sp.png" alt="肌にハリを与えるプロテオグリカン" />
          </h2>
        </div><!-- .h2_container sp -->
        <div class="h2_container pc" style="margin-top:44px;">
          <h2>
            <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/01_pc.png" alt="肌にハリを与えるプロテオグリカン" />
          </h2>
        </div><!-- .h2_container pc -->
      </div><!-- .header_inner -->
    </div><!-- .header -->

    <div class="content">
      <div class="content_inner clearfix">

        <div class="column_01 raw_material03_01">
          <div>
            <h6>
              <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/02_pc.png" alt="プロテオグリカンはこんな方にオススメ" />
              <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/02_sp.png" alt="プロテオグリカンはこんな方にオススメ" />
            </h6>
            <div class="box_clear">
              <div class="text_01">
                <ul class="raw_material_list">
                  <li><span class="bold">肌のハリや弾力を保ちたい方</span></li>
                  <li><span class="bold">いつまでも若々しくいたい方</span></li>
                  <li><span class="bold">生活習慣病を予防したい方</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3>
          <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/03_pc.png" alt="プロテオグリカンとは？" />
          <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/03_sp.png" alt="プロテオグリカンとは？" />
        </h3>

        <div class="column_01 raw_material03_02">
          <div>
            <div class="box_clear">
              <div class="img_container">
                <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/04_pc.png" alt="プロテオグリカン" />
                <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/04_sp.png" alt="プロテオグリカン" />
              </div>
              <div class="text_01">
                <p>プロテオグリカンは、コラーゲンやヒアルロン酸と同じく、真皮を構成する細胞外マトリックスの一つ。皮膚や軟骨などに分布し、スポンジのように水を保持しながら、<span class="pink large bold">弾力を維持する重要な働き</span>をしています。</p><p>しかし、この<span class="pink large bold">プロテオグリカンは、加齢とともに減少</span>することが知られています。年齢を重ねるにつれ、お肌のハリが失われたり関節が痛くなるのは、プロテオグリカンの減少が原因の一つなのです。</p><p>現在でもプロテオグリカンの研究は進んでおり、お肌に潤いを与えるだけでなく、お肌のターンオーバーを促進する働きなども明らかになっています。これらの働きから、最近は美容業界で注目の成分なのです。</p><p>プロテオグリカンの原料となる鮭の軟骨は、「氷頭（ひず、ひょうず）」とも呼ばれ、北海道や東北などでは、「氷頭なます」という郷土料理として親しまれています。</p>
              </div>
              <div class="img_container">
                <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/05_pc.png" alt="※生産地：日本(青森県)" />
                <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/raw_material03/05_sp.png" alt="※生産地：日本(青森県)" />
              </div>
            </div>
          </div>
        </div>

      </div><!-- .content_inner -->
    </div><!-- .content -->

    <!-- // おすすめコンテンツ - START -->    
    <div class="bh-section bh-sectionNomudomo">
      <div class="bh-innr">
        <div class="bh-osusume">
          <h3 class="bh-osusume__title"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01.png" alt=""></h3>
          <div class="bh-osusume__contents">
            <ul class="bh-osusume__clm">
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/sleep01.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/5.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">美肌を生み出す秘密とは？睡眠とお肌の関係</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">成長ホルモンの分泌量が減ると、お肌が乾燥しハリが失われます。</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/sleep02.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/6.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">質の良い睡眠が美肌を生み出す！</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">ぐっすり眠れた朝は、肌のツヤがよく、化粧ノリが良い、そのわけは？</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/sleep03.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/7.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">【調査】4週間の摂取で変化!?「しわ」編</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">眠りの質を高めることで、しわにどのような変化が？</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/sleep04.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/8.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">【調査】 4週間の摂取で変化!?「しみ」編</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">眠りの質を高めると、シミ・キメにも改善を示す結果が。</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/raw_material01.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/12.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">眠りの質を高め、疲れを和らげるクワンソウ</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">クワンソウエキスは、目覚めを抑え、深い眠りの持続を助けます。</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/raw_material02.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/13.jpg?20161107" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">お肌を整える月桃葉エキス</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">月桃は、ポリフェノールが豊富で抗酸化作用も注目されています。</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/raw_material04.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/15.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">体を温めるゆずの力 ゆず種子エキス</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">ゆずの成分リモニンには、血行促進、リラックス作用があります。</div>
                </a>
              </li>
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/meguri04.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/lab/img/meguri04/40.png" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">自然の中にある、めぐる食材とは？</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">お肌は毎日の積み重ね。食材、簡単レシピをご紹介。</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="bh-localPagetop">
          <div class="bh-localPagetop__btnBox">
            <ul class="bh-localPagetop__btnList">
              <li class="bh-localPagetop__btnList__li">
                <a href="/domo/beautyhabit/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_ndwtop_01.png" alt=""></a>
              </li>
              <li class="bh-localPagetop__btnList__li">
                <a href="/domo/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_top_01.png" alt=""></a>
              </li>
            </ul>
          </div>
          <div class="bh-localPagetop__pagetop">
            <a href="#top"><img src="/assets/ps/domo/beautyhabit/common/img/btn_pagetop_01.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
    <!-- // おすすめコンテンツ - END -->

  </div><!-- .wrap -->
  <!--///// 下層ページ - END /////-->

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