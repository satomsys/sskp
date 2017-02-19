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
  <title>代謝をあげて肌本来の美しさを！｜ねむりとめぐりの研究所＜公式＞</title>
  <meta name="description" content="代謝は、年齢と共に低下します。代謝をあげることは健康に良いだけでなく、お肌にもうれしい変化が期待できます。">
  <meta name="keywords" content="ドモホルンリンクル,ドモホルン,ドモ,再春館製薬所,再春館,めぐり, 代謝">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.saishunkan.co.jp/domo/beautyhabit/lab/meguri01.html">
  <meta property="og:title" content="代謝をあげて肌本来の美しさを！｜ねむりとめぐりの研究所＜公式＞">
  <meta property="og:description" content="代謝は、年齢と共に低下します。代謝をあげることは健康に良いだけでなく、お肌にもうれしい変化が期待できます。" />
  <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
  <!--///// (1) ページタイトル　キーワード　ディスクリプション - END /////-->
  <!-- ▼サイト共通で使うスタイル・スクリプト-->
  [:include file="domo/_shared/_head_shared01.inc.tpl":]
  <!-- ▲サイト共通で使うスタイル・スクリプト-->
  <!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
  <!--///// (2) ページに必要なjs と CSS - START /////-->
  <!-- /beautyhabit/ 共通部分css -->
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/osusume.css?20161014" />
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

<body class="page-skincare_tips template-enable-media-queries page-beautyhabit_labo template-legacy-layout02 [:$body_template_class:]">
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
            <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_01_sp.png" alt="代謝をあげて肌本来の美しさを！" />
          </h2>
        </div><!-- .h2_container sp -->
        <div class="h2_container pc" style="margin-top:44px;">
          <h2>
            <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_01_pc.png" alt="代謝をあげて肌本来の美しさを！" />
          </h2>
        </div><!-- .h2_container pc -->
      </div><!-- .header_inner -->
    </div><!-- .header -->

    <!-- <div class="youtube">
      <div class="youtube_inner">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Kenykluj6GQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>
    </div> -->

    <div class="content">
      <div class="content_inner">
        
        <div class="column_01">
          <div>
            <div class="box_clear">
              <div class="img_container">
                <img src="/assets/ps/domo/beautyhabit/lab/img/meguri01/01.png" />
              </div>
              <div class="text_01">
                <p>代謝というと、ダイエットのときによく聞く言葉ではないでしょうか。また、年齢を重ねるととともに、代謝が落ち、太りやすくなる、という話もよく耳にします。</p>
                <p>では、その代謝って何か、ご存じですか。代謝をあげることは、健康にも良いだけでなく、お肌にも良い影響をおよぼすと言われています。<br />代謝について知ることで、肌本来の美しさを引き出しましょう。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="column_01">
          <div>
            <h3>
              <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_02_pc.png" alt="お肌をつくる重要な働き、それが「代謝」" />
              <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_02_sp.png" alt="お肌をつくる重要な働き、それが「代謝」" />
            </h3>
            <div class="box_clear">
              <div class="text_01">
                <p class="pink large bold">血液から栄養分を取り込んで細胞をつくったり、元気にした上で、出てくる老廃物などのよぶんなものを捨てる一連の働きを「代謝」といいます。</p>
                <p>お肌やからだの傷んだところをなおしたり、新しくしたり、人間のからだの生命活動そのものなのです。この働きが鈍ると、細胞をつくり出す力も弱まり、老化の原因となっていきます。</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3>
          <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_03_pc.png" alt="代謝は加齢とともに落ちる！" />
          <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_03_sp.png" alt="代謝は加齢とともに落ちる！" />
        </h3>
        
        <div class="column_01 meguri01_03">
          <div>
            <h5>
              <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_04_pc.png" alt="年齢による基礎代謝量の推移" />
              <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_04_sp.png" alt="年齢による基礎代謝量の推移" />
            </h5>
            <div class="box_white">
              <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/02_pc.png" />
              <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/02_sp.png" />
            </div>
          </div>
        </div>
        
        <div class="column_01">
          <div>
            <div class="box_clear">
              <div class="text_01">
                <p class="large bold">年齢によるシワやシミ、太りやすい。<br />それらは「代謝低下」のサインです。</p>
                <p>骨や筋肉をつくらなければいけない幼少期は、代謝がたいへん活発ですが、大人になると成長がとまり、代謝も落ちます。</p>
                <p>さらに、筋肉量やホルモン量の低下、冷えも代謝低下の要因になります。</p>
                <p class="pink large bold">からだ全体の代謝が下がると、健康な新しい細胞がつくられにくくなるため、シワやシミといったお肌の老化があらわれるのです。</p>
                <p>これによってお肌のターンオーバーが悪くなります。</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3>
          <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_05_pc.png" alt="お肌と代謝のふか～い関係" />
          <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_05_sp.png" alt="お肌と代謝のふか～い関係" />
        </h3>
        
        <div class="column_02 clearfix meguri01_04">
          <div>
            <h5>
              <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_06_pc.png" alt="皮膚とその他の体内要素の割合" />
              <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_06_sp.png" alt="皮膚とその他の体内要素の割合" />
            </h5>
            <div class="box_white">
              <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/03_pc.png" />
              <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/03_sp.png" />
            </div>
          </div>
          <div>
            <div class="box_clear">
              <p>お肌とからだはつながっているもの。</p>
              <p class="pink large bold">からだ全体の「代謝」をあげることが、お肌の代謝「ターンオーバー」をあげることにつながります。</p>
              <p>お肌はからだのたった7％程度。そのほかの約93％の部分がお肌をささえています。そのため、からだ全体の代謝があがると、年齢による悩みにうれしい変化が期待できます。</p>
            </div>
          </div>
        </div>
        
        <h3 class="meguri01_05">
          <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_07_pc.png" alt="毎日の食事で、代謝アップ！" />
          <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_07_sp.png" alt="毎日の食事で、代謝アップ！" />
        </h3>
        
        <div class="column_02 clearfix">
          <div>
            <div class="box_clear">
              <div class="img_container sp">
                <img src="/assets/ps/domo/beautyhabit/lab/img/meguri01/04_sp.png" />
              </div>
              <div class="meguri01_06">
                <p class="large bold">食べるもので、からだはできています。</p>
                <p>血液から運ばれる栄養は、もとをたどれば口から取り入れる毎日の食事からつくられます。<br />当たり前のことですが、食事によって取り入れたものが、血となり、細胞に届き、あなたのお肌や臓器をつくっているのです。代謝をあげるために、からだのことを考えた、栄養たっぷりの自然のめぐみをいただくようにしましょう。</p>
              </div>
            </div>
          </div>
          <div class="pc">
            <div class="box_clear">
              <img src="/assets/ps/domo/beautyhabit/lab/img/meguri01/04_pc.png" />
            </div>
          </div>
        </div>
        
        <h3 class="meguri01_07">
          <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_08_pc.png" alt="「夜」と「日中」にメリハリを。「自律神経」が鍵" />
          <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/title_08_sp.png" alt="「夜」と「日中」にメリハリを。「自律神経」が鍵" />
        </h3>
        
        <div class="column_01">
          <div>
            <div class="box_clear">
              <div class="img_container">
                <img class="pc" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/05_pc.png" />
                <img class="sp" src="/assets/ps/domo/beautyhabit/lab/img/meguri01/05_sp.png" />
              </div>
              <div class="text_01">
                <p>代謝は、じつは「自律神経」とも深く関わっていて、2つの自律神経が乱れると代謝も低下します。自律神経のバランスを整えるには、ストレスを溜めないことや、生活のリズムを整えることが大切です。<br />なかでもポイントは、<span class="pink large bold">日中と夜の生活のリズム。夜はしっかり眠ってからだを再生させ、朝の光とともに起きて元気に活動すること。</span></p>
                <p>2つの自律神経を整えることが代謝アップの秘訣なのです。</p>
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
              <li class="bh-osusume__clm__li" style="height: 450px;">
                <a href="/domo/beautyhabit/lab/meguri02.html" class="bh-lab">
                  <div class="bh-osusume__spBox">
                    <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/10.jpg" alt=""></div>
                    <div class="bh-osusume__spBox__right">
                      <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="ねむりとめぐりの研究所"></p>
                      <p class="bh-osusume__subTitle">血行不良が肌老化の原因！？</p>
                    </div>
                  </div>
                  <div class="bh-osusume__text">「血行」は、お肌とからだをすこやかに保つために必要不可欠なもの。</div>
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
