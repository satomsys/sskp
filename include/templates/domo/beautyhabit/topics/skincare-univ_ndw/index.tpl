<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="Shift_JIS">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1,initial-scale=1" />
	<!--///// (1) ページタイトル　キーワード　ディスクリプション - START /////-->
	<title>寝ている間にキレイが育つ「リセット美容」始めよう｜ピックアップ・トピックス｜飲む＆食べるドモホルンリンクル＜公式＞</title>
	<meta name="description" content="【飲む＆食べるドモホルンリンクル】公式ブランドサイト。「ピックアップ・トピックス」では、メディア掲載記をはじめ、旬の話題をご紹介します。">
	<meta name="keywords" content="飲む＆食べるドモホルンリンクル,ドモホルン,ドモ,再春館製薬所,再春館,0120444444,0120-444-444,化粧品,基礎化粧品,お手当て広場,睡眠,修復力,質,肌">
	<meta property="og:type" content="website">
	<meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/topics/skincare-univ_ndw/index.html">
	<meta property="og:title" content="ピックアップ・トピックス｜飲む＆食べるドモホルンリンクル＜公式＞">
	<meta property="og:description" content="【飲む＆食べるドモホルンリンクル】公式ブランドサイト。「ピックアップ・トピックス」では、メディア掲載記をはじめ、旬の話題をご紹介します。">
	<meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg">
	<meta name="robots" content="noindex">
	<!--///// (1) ページタイトル　キーワード　ディスクリプション - END /////-->

	<!-- ▼サイト共通で使うスタイル・スクリプト-->
	[:include file="domo/_shared/_head_shared01.inc.tpl":]
	<!-- ▲サイト共通で使うスタイル・スクリプト-->

	<!-- ▼ページ毎に必要なスタイル・スクリプトなど-->
	<!--///// (2) ページに必要なjs と CSS - START /////-->
	<!-- /beautyhabit/ 共通部分css -->
	<link rel="stylesheet" href="/assets/ps/domo/beautyhabit/ndw/css/ndw.css" />
	<link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
	<link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/osusume.css?20161014" />

	<!-- end /beautyhabit/ 共通部分css -->
	<script>
		require(["jquery"], function() {
			require(["/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js","/assets/ps/domo/beautyhabit/common/js/remodal.min.js"], function() {
				require(["/assets/ps/domo/beautyhabit/common/js/function.js?20161014", "/assets/ps/domo/beautyhabit/common/js/osusume.js"]);
			})
		});
	</script>
	<!--///// (2) ページに必要なjs と CSS - END /////-->
	<!-- ▲ページ毎に必要なスタイル・スクリプトなど-->
	<link rel="stylesheet" type="text/css" href="/assets/ps/domo/beautyhabit/topics/css/topics.css">


	<link rel="stylesheet" type="text/css" href="css/sp_base.css" media="only screen and (min-width: 0px) and (max-width: 568px)" />
	<link rel="stylesheet" type="text/css" href="css/sp_style.css" media="only screen and (min-width: 0px) and (max-width: 568px)" />
	<link rel="stylesheet" type="text/css" href="css/pc_base.css" media="only screen and (min-width: 569px)" />
	<link rel="stylesheet" type="text/css" href="css/pc_style.css" media="only screen and (min-width: 569px)" />

  <!--[if lt IE 9]>
  <script type="text/javascript" src="js/respond.min.js"></script>
  <![endif]-->
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

		<div class="page-topics bg-brown">
			<!--topics_header_ndw-->
			<div class="header-wrap">
				<h1 class="single-wrap c-ttl">
				<span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/topics/img/topics_header01_ndw_pc.png" alt="飲むドモホルンリンクル ピックアップ・トピックス"></span>
				<span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/topics/img/topics_header01_ndw_sp.png" alt="飲むドモホルンリンクル ピックアップ・トピックス"></span>
				</h1>
				<h2 class="single-wrap page-ttl">
				<span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/topics/img/topics_header02_pc.png" alt="特集記事"></span>
				<span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/topics/img/topics_header02_sp.png" alt="特集記事"></span>
				</h2>
			</div>
			<!--/topics_header_ndw-->
			<!-- contents -->
			<div id="contents">
				<!-- wrap -->
				<div class="innr idx_wrap">
					<!-- vsl -->
					<div class="idx_vsl">
						<h2 class="ttl">
							<img class="pc" src="images/idx_ttl.png" alt="寝ている間にキレイが育つ「リセット美容」始めよう">
							<img class="sp" src="images/sp/idx_ttl.png" alt="寝ている間にキレイが育つ「リセット美容」始めよう">
						</h2>
						<p class="txt">
						「寝る子は育つ」<br>
						と言うように、大人の美しさも<br class="sp">夜つくられます。<br>
						美容には毎日気をつかっているのに、<br class="sp">最近手ごたえが感じられない……。<br>そんなときは、<br class="sp">「睡眠」を見直してみませんか？
						</p>
						<ul class="nav">
							<li class="nav01">
								<a class="hover_img" href="repair.html">
									<img class="pc" src="images/idx_btn01.png" alt="1 シワ・シミ予防のカギ 「修復力」とは">
									<img class="sp" src="images/sp/idx_btn01.png" alt="1 シワ・シミ予防のカギ 「修復力」とは">
								</a>
							</li>
							<li class="nav02">
								<a class="hover_img" href="sleep.html">
									<img class="pc" src="images/idx_btn02.png" alt="2 美肌をはぐくむ上質な睡眠">
									<img class="sp" src="images/sp/idx_btn02.png" alt="2 美肌をはぐくむ上質な睡眠">
								</a>
							</li>
							<li class="nav03">
								<a class="hover_img" href="support.html">
									<img class="pc" src="images/idx_btn03.png" alt="3 おやすみ前のキレイサポート">
									<img class="sp" src="images/sp/idx_btn03.png" alt="3 おやすみ前のキレイサポート">
								</a>
							</li>
						</ul>
					</div>
					<!-- /vsl -->
					<!-- blk -->
					<div class="idx_blk">
						<div class="in_box">
							<div class="in_frame">
								<h3 class="sub">思い当たったらはじめどき！</h3>
								<ul class="list">
									<li>しっかりケアしてもカサカサしている</li>
									<li>化粧のりが悪い、くすみが気になる</li>
									<li>顔についた枕の跡がなかなか取れない</li>
									<li>元気なのによく「疲れてる？」と言われる</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /blk -->
				</div>
				<!-- /wrap -->
			</div>
			<!-- /contents -->
			<!--btn-->
			<p class="btn-link-wrap">
				<a href="/domo/beautyhabit/ndw.html">
					<span class="bh-onlyPC"><img class="mgk-datail" src="/assets/ps/domo/beautyhabit/topics/img/btn_ndw_pc.png" alt="「飲むドモホルンリンクル」の詳細はこちら"></span>
					<span class="bh-onlySP"><img class="mgk-datail" src="/assets/ps/domo/beautyhabit/topics/img/btn_ndw_sp.png" alt="「飲むドモホルンリンクル」の詳細はこちら"></span>
				</a>
			</p>
			

			<div class="bh-section bh-sectionNomudomo bh-naviFollow osusume-contents">			
			<div class="bh-innr">

				<div class="bh-osusume">
				  <h3 class="bh-osusume__title">
					<span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01.png" alt="おすすめコンテンツ" title="おすすめコンテンツ"></span>
					<span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01_sp.png" alt="おすすめコンテンツ" title="おすすめコンテンツ"></span>
				  </h3>
				  <div class="bh-osusume__contents">
					<ul class="bh-osusume__clm">
					  <li class="bh-osusume__clm__li">
						<a href="/domo/beautyhabit/review/ndw/interview/index.html" class="bh-interview">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/18.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">
							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー" title="口コミ・インタビュー"></p>
							  <p class="bh-osusume__subTitle">「飲むドモ」お客様インタビュー</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">ぐっすり休んで、キレイを手に入れる。あなたも始めませんか。</div>
						</a>
					  </li>
					  <li class="bh-osusume__clm__li">
						<a href="/domo/beautyhabit/lab/sleep01.html" class="bh-lab">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/5.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">
							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="" title=""></p>
							  <p class="bh-osusume__subTitle">美肌を生み出す秘密とは？睡眠とお肌の関係</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">成長ホルモンの分泌量が減ると、お肌が乾燥しハリが失われます。</div>
						</a>
					  </li>
					  <li class="bh-osusume__clm__li" >
						<a href="/domo/beautyhabit/lab/sleep02.html" class="bh-lab">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/6.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">
							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="" title=""></p>
							  <p class="bh-osusume__subTitle">質の良い睡眠が美肌を生み出す！</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">ぐっすり眠れた朝は、肌のツヤがよく、化粧ノリが良い、そのわけは？</div>
						</a>
					  </li>
					  <li class="bh-osusume__clm__li" >
						<a href="/domo/beautyhabit/lab/sleep03.html" class="bh-lab">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/7.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">
							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="" title=""></p>
							  <p class="bh-osusume__subTitle">【調査】4週間の摂取で変化!?「しわ」編</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">眠りの質を高めることで、しわにどのような変化が？</div>
						</a>
					  </li>
					  <li class="bh-osusume__clm__li">
						<a href="/domo/beautyhabit/lab/sleep04.html" class="bh-lab">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/8.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">

							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="" title=""></p>
							  <p class="bh-osusume__subTitle">【調査】4週間の摂取で変化!?「しみ」編</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">眠りの質を高めると、シミ・キメにも改善を示す結果が。</div>
						</a>
					  </li>
					  <li class="bh-osusume__clm__li" >
						<a href="/domo/beautyhabit/review/ndw/customer_voice.html" class="bh-interview">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/17.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">
							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="口コミ・インタビュー" title="口コミ・インタビュー"></p>
							  <p class="bh-osusume__subTitle">「飲むドモ」 口コミ</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">飲み続けている理由がわかる。実感の声を今すぐチェック！</div>
						</a>
					  </li>
					<li class="bh-osusume__clm__li" >
						<a href="/domo/beautyhabit/topics/socialtrendnews_ndw01.html" class="bh-interview">
						  <div class="bh-osusume__spBox">
							<div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews.jpg" alt="" title=""></div>
							<div class="bh-osusume__spBox__right">
							  <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="ピックアップ・トピックス" title="ピックアップ・トピックス"></p>
							  <p class="bh-osusume__subTitle">ソーシャルトレンドニュース×飲むドモホルンリンクル</p>
							</div>
						  </div>
						  <div class="bh-osusume__text">忙しい女性必見！短い睡眠でキレイになるには、○○ホルモンがカギ</div>
						</a>
					  </li>
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
								<li class="bh-localPagetop__btnList__li"><a href="/domo/beautyhabit/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_ndwtop_01.png" alt=""></a></li>
								<li class="bh-localPagetop__btnList__li"><a href="/domo/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_top_01.png" alt=""></a></li>
							</ul>
						</div>
						<div class="bh-localPagetop__pagetop">
							<a href="#top"><img src="/assets/ps/domo/beautyhabit/common/img/btn_pagetop_01.png" alt=""></a>
						</div>
					</div>
			</div>
			</div>			

			
			
			
		<!--/btn-->
		</div>
	<!--/////  <div id="page-topics bg-brown">内 - END /////-->

	</div>
	<!--///// (4) コンテンツ  <div id="main">内 - END /////-->

	[:include file="domo/_shared/_footer01.inc.tpl":]

	<!--///// (5) サイトカタリスト、YTM - START /////--> 
	[:include file="domo/_shared/_footer_analysis.inc.tpl":]
	<!--///// (5) サイトカタリスト、YTM - END /////-->
</body>
</html>
