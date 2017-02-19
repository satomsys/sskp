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
  <title>飲む＆食べるドモホルンリンクル＜公式＞</title>
  <meta name="description" content="【飲む＆食べるドモホルンリンクル】公式サイト。再春館製薬所のインナーケア【飲むドモホルンリンクル】【めぐりの結晶】でハリ・ツヤ・うるおい実感！わたしのちからで、きれいを生みだす毎日へ。">
  <meta name="keywords" content="ドモホルンリンクル,ドモホルン,ドモ,再春館製薬所,再春館">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/">
  <meta property="og:title" content="飲む＆食べるドモホルンリンクル＜公式＞">
  <meta property="og:description" content="【飲む＆食べるドモホルンリンクル】公式サイト。再春館製薬所のインナーケア【飲むドモホルンリンクル】【めぐりの結晶】でハリ・ツヤ・うるおい実感！わたしのちからで、きれいを生みだす毎日へ。" />
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
          require(["/assets/ps/domo/beautyhabit/top/js/imagesloaded.pkgd.min.js","/assets/ps/domo/beautyhabit/top/js/top.js?20161024"]);
        })
      });
    });
  </script>
  <!--///// (2) ページに必要なjs と CSS - END /////-->
  <!-- ▲ページ毎に必要なスタイル・スクリプトなど-->
  <!-- /beautyhabit/ 共通部分css -->
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/top/css/top.css" />
  <!-- end /beautyhabit/ 共通部分css -->
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
    <div class="bh-section bh-sectionMain">
      <div class="bh-onlyPC">
      <a class="bh-more" href="#"><span>もっとみる</span><span></span><span></span><span></span></a>
      </div>
      <div>
          <span class="bh-onlyPC"><img class="bh-topmv" src="/assets/ps/domo/beautyhabit/top/img/thumb_top_01.jpg" alt=""></span>
          <span class="bh-onlySP"><img class="bh-topmv" src="/assets/ps/domo/beautyhabit/top/img/thumb_top_01_sp.jpg" alt=""></span>
      </div>
    </div>

    <div class="bh-section bh-sectionConcept">
      <h2 class="bh-hide">わたしのちからできれいを生みだす毎日へ。</h2>
      <div class="bh-concept">
        <div>
          <div class="bh-onlyPC">
            <a href="#modal01" class="bh-concepttextBox">
              <img class="bh-concepttext" src="/assets/ps/domo/beautyhabit/top/img/concept.png" alt="わたしのちからできれいを生み出す毎日へ。 BRAND CONCEPT >">
            </a>
          </div>
          <div class="bh-onlySP">
            <a href="#modal01">
              <img class="bh-topmv" src="/assets/ps/domo/beautyhabit/top/img/concept_sp.jpg" alt="わたしのちからできれいを生み出す毎日へ。 BRAND CONCEPT >">
            </a>
          </div>
          <div class="remodal remodal__top" data-remodal-id="modal01">
            <button data-remodal-action="close" class="remodal-close"></button>
            <div class="remodal__top__thumb">
              <div class="bh-onlyPC">
                <img src="/assets/ps/domo/beautyhabit/top/img/thumb_modal_01_pc.jpg" alt="わたしのちからできれいを生み出す毎日へ。">
              </div>
              <div class="bh-onlySP">
                <img src="/assets/ps/domo/beautyhabit/top/img/thumb_modal_01.jpg" alt="わたしのちからできれいを生み出す毎日へ。">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bh-innr">
        <div class="bh-onlyPC">
          <div class="bh-about">
            <ul class="bh-about__list">
              <li class="bh-about__list__li">
                <a href="/domo/beautyhabit/ndw.html"><img src="/assets/ps/domo/beautyhabit/top/img/thumb_about_01.png" alt="about 飲むドモホルンリンクル"></a>
              </li>
              <li class="bh-about__list__li">
                <a href="/domo/beautyhabit/mgk.html"><img src="/assets/ps/domo/beautyhabit/top/img/thumb_about_02.png" alt="about めぐりの結晶"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bh-onlySP">
          <div class="bh-about">
            <ul class="bh-about__list">
              <li class="bh-about__list__li">
                <a href="/domo/beautyhabit/ndw.html"><img src="/assets/ps/domo/beautyhabit/top/img/thumb_about_sp_01.png" alt="about 飲むドモホルンリンクル"></a>
              </li>
              <li class="bh-about__list__li">
                <a href="/domo/beautyhabit/mgk.html"><img src="/assets/ps/domo/beautyhabit/top/img/thumb_about_sp_02.png" alt="about めぐりの結晶"></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bh-articleList">
          <ul class="bh-articleList__list">
            <!-- サイズ調整用クラス -->
            <li class="bh-articleList__list__gridSizer"></li>
            <li class="bh-articleList__list__gutterSizer"></li>
            <!-- //サイズ調整用クラス -->
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/sleep01.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/5.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">美肌を生み出す秘密とは？睡眠とお肌の関係</h3>
                    <p class="bh-panel__text">成長ホルモンの分泌量が減ると、お肌が乾燥しハリが失われます。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/sleep02.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/6.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">質の良い睡眠が美肌を生み出す！</h3>
                    <p class="bh-panel__text">ぐっすり眠れた朝は、肌のツヤがよく、化粧ノリが良い、そのわけは？</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/sleep03.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/7.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">【調査】4週間の摂取で変化!?「しわ」編</h3>
                    <p class="bh-panel__text">眠りの質を高めることで、しわにどのような変化が？</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/sleep04.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/8.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="眠りとめぐみの研究所"></p>
                    <h3 class="bh-panel__title">【調査】4週間の摂取で変化!?「しみ」編</h3>
                    <p class="bh-panel__text">眠りの質を高めると、シミ・キメにも改善を示す結果が。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/meguri01.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/9.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">代謝をあげて肌本来の美しさを！</h3>
                    <p class="bh-panel__text">代謝をあげると、健康だけでなくお肌にも良い影響を及ぼします。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/meguri02.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/10.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">血行不良が肌老化の原因！？</h3>
                    <p class="bh-panel__text">血行は、お肌とからだをすこやかに保つために必要不可欠なもの。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/meguri03.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/11.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">シワシミ対策の鍵！からだの奥のめぐり</h3>
                    <p class="bh-panel__text">めぐりとは、不要なものを排出し、必要なものを行き渡らせること。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/meguri04.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/28.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">自然の中にある、めぐる食材とは？</h3>
                    <p class="bh-panel__text">お肌は毎日の積み重ね。食材、簡単レシピをご紹介。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/raw_material01.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/12.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">眠りの質を高め、疲れを和らげるクワンソウ</h3>
                    <p class="bh-panel__text">クワンソウエキスは、目覚めを抑え、深い眠りの持続を助けます。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/raw_material02.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/13.jpg?20161107" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">お肌をはつらつとさせる月桃葉エキス</h3>
                    <p class="bh-panel__text">月桃は、ポリフェノールが豊富で抗酸化作用も注目されています。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/raw_material03.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/14.jpg?20161107" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">肌にハリを与えるプロテオグリカン</h3>
                    <p class="bh-panel__text">お肌のハリが失われるのは、プロテオグリカンの減少が一因に。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/lab/raw_material04.html" class="bh-lab">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/15.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                    <h3 class="bh-panel__title">体を温めるゆずの力 ゆず種子エキス</h3>
                    <p class="bh-panel__text">ゆずの成分リモニンには、血行促進、リラックス作用があります。</p>
                  </div>
                </div>
              </a>
            </li>

            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/review/ndw/customer_voice.html" class="bh-interview">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/17.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                    <h3 class="bh-panel__title">「飲むドモ」 口コミ</h3>
                    <p class="bh-panel__text">飲み続けている理由がわかる。実感の声を今すぐチェック！</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/review/ndw/interview/index.html" class="bh-interview">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/18.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                    <h3 class="bh-panel__title">「飲むドモ」お客様インタビュー</h3>
                    <p class="bh-panel__text">ぐっすり休んで、キレイを手に入れる。あなたも始めませんか。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/review/mgk/customer_voice.html" class="bh-interview">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/21.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                    <h3 class="bh-panel__title">「めぐりの結晶」口コミ</h3>
                    <p class="bh-panel__text">「めぐりの結晶」に寄せられたお客様のリアルな投稿をご紹介。</p>
                  </div>
                </div>
              </a>
            </li>
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/review/mgk/interview/index.html" class="bh-interview">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/22.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー"></p>
                    <h3 class="bh-panel__title">「めぐりの結晶」インタビュー</h3>
                    <p class="bh-panel__text">美しく輝く毎日のために。内側からもケア、続けています。</p>
                  </div>
                </div>
              </a>
            </li>

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

  [:include file="domo/_shared/_footer01.inc.tpl":]

  <!--///// (5) サイトカタリスト、YTM - START /////-->
  [:include file="domo/_shared/_footer_analysis.inc.tpl":]
  <!--///// (5) サイトカタリスト、YTM - END /////-->

</body>
</html>
