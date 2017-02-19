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
  <!--///// (1) �y�[�W�^�C�g���@�L�[���[�h�@�f�B�X�N���v�V���� - START /////-->
  <title>�s�b�N�A�b�v�E�g�s�b�N�X�b���ށ��H�ׂ�h���z���������N����������</title>
  <meta name="description" content="�y���ށ��H�ׂ�h���z���������N���z�����u�����h�T�C�g�B�u�s�b�N�A�b�v�E�g�s�b�N�X�v�ł́A���f�B�A�f�ڋL���͂��߁A�{�̘b������Љ�܂��B">
  <meta name="keywords" content="�h���z���������N��,�h���z����,�h��,�ďt�ِ���,�ďt��,�s�b�N�A�b�v�E�g�s�b�N�X">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/topics.html">
  <meta property="og:title" content="���R�~�E�C���^�r���[�b���ށ��H�ׂ�h���z���������N����������">
  <meta property="og:description" content="�y���ށ��H�ׂ�h���z���������N���z�����u�����h�T�C�g�B�u�s�b�N�A�b�v�E�g�s�b�N�X�v�ł́A���f�B�A�f�ڋL���͂��߁A�{�̘b������Љ�܂��B" />
  <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
  <!--///// (1) �y�[�W�^�C�g���@�L�[���[�h�@�f�B�X�N���v�V���� - END /////-->
  <!-- ���T�C�g���ʂŎg���X�^�C���E�X�N���v�g-->
  [:* �ȉ��̃t�@�C�����C���N���[�h���T�C�g���ʂ�js�Acss���Ăяo���悤�ɂ���̂����A�y�[�W�ɕK�v��js��r���ŌĂяo���K�v�����邽�ߒ��������܂� *:]
  [:* [:include file="domo/_shared/_head_shared01.inc.tpl":] *:]
  <link rel="stylesheet" href="/assets/css/style.css?20160128" />
  <script src="/assets/js/vendor/jquery.min.js" charset="utf-8"></script>
  <!-- ���y�[�W���ɕK�v�ȃX�^�C���E�X�N���v�g�Ȃ�-->
  <script src="/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js" charset="utf-8"></script>
  <script src="/assets/ps/domo/beautyhabit/common/js/function.js?20161024" charset="utf-8"></script>
  <script src="/assets/ps/domo/beautyhabit/common/js/remodal.min.js" charset="utf-8"></script>
  <!-- ���y�[�W���ɕK�v�ȃX�^�C���E�X�N���v�g�Ȃ�-->
  <script src="/assets/js/vendor/underscore-min.js" charset="utf-8"></script>
  <script src="/assets/js/vendor/require.js" charset="utf-8"></script>
  <script src="/assets/js/require_config.js?20160128" charset="utf-8"></script>
  <script src="/assets/js/app.js?20160128" charset="utf-8"></script>
  <!-- ���T�C�g���ʂŎg���X�^�C���E�X�N���v�g-->

  <!-- ���y�[�W���ɕK�v�ȃX�^�C���E�X�N���v�g�Ȃ�-->
  <!--///// (2) �y�[�W�ɕK�v��js �� CSS - START /////-->
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
  <!-- /beautyhabit/ ���ʕ���css -->
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
  <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/top/css/top.css" />
  <!-- end /beautyhabit/ ���ʕ���css -->
  <!--///// (2) �y�[�W�ɕK�v��js �� CSS - END /////-->
  <!-- ���y�[�W���ɕK�v�ȃX�^�C���E�X�N���v�g�Ȃ�-->
</head>

[: if $status_login:]
	[:* ���O�C���� *:]
	[:assign var=body_template_class value='template-post-login-layout02':]
[: else :]
	[:* �����O�C�� *:]
	[:assign var=body_template_class value='template-pre-login-layout02':]

	[: if $revisitFlg !==1 && $revisitFlg !==2 :]
		[:* S������ *:]
		[:assign var=body_template_class value='template-pre-login-layout01':]
	[: /if :]
[: /if :]

<body class="page-skincare_tips template-enable-media-queries template-legacy-layout02 [:$body_template_class:]">
  <!--///// (3) GTM�̎w�� - START /////-->
  [:include file="domo/beautyhabit/_header.inc.tpl":]
  <!--///// (3) GTM�̎w�� - END /////-->

  <!--///// (4) �R���e���c  <div id="main" class="bh-main">�� - START /////-->
  <div id="main" class="bh-main">
  [:* SP�p�Ƀi�r�Q�[�V������\�� *:]
  [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]

    <!-- top -->
    <div class="bh-section bh-sectionSubIndex">
      <div class="bh-innr">
        <img src="/assets/ps/domo/beautyhabit/topics/img/title_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X">
      </div>
    </div>

    <div class="bh-section bh-sectionSubArticle topics">
      <div class="bh-innr">
        <div class="bh-articleList">
          <ul class="bh-articleList__list">
            <!-- �T�C�Y�����p�N���X -->
            <li class="bh-articleList__list__gridSizer"></li>
            <li class="bh-articleList__list__gutterSizer"></li>
            <!-- //�T�C�Y�����p�N���X -->
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/cafeglobe_meguri01.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/25.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">cafeglobe�~�߂���̌���</h3>
                    <p class="bh-panel__text">�X�[�p�[�t���[�c������΁A�����ɂȂ��Ă��L���C�͑����I</p>
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
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">MY LOHAS�~�߂���̌���</h3>
                    <p class="bh-panel__text">��ǂ݂̂Ȃ��l�ɂȂ�B�u���l��ہv�𐶂ރC���h�̉ʎ��Ƃ́H</p>
                  </div>
                </div>
              </a>
            </li>
            [:* ��R-#29449_�yH28-00117-04�z���킵�ݐH�i_�s�b�N�A�b�v�g�s�b�N�ւ̋L��2�{�ǉ��@2016/11/21 nul-hatano *:]
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/socialtrendnews_ndw01.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">�\�[�V�����g�����h�j���[�X�~���ރh���z���������N��</h3>
                    <p class="bh-panel__text">�Z���������K���I�Z�������ŃL���C�ɂȂ�ɂ́A�����z���������J�M</p>
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
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">�X�L���P�A��w�~���ރh���z���������N��</h3>
                    <p class="bh-panel__text">�Q�Ă���ԂɃL���C����u���Z�b�g���e�v�n�߂悤</p>
                  </div>
                </div>
              </a>
            </li>
            [:* ��R-#29449_�yH28-00117-04�z���킵�ݐH�i_�s�b�N�A�b�v�g�s�b�N�ւ̋L��2�{�ǉ��@2016/11/21 nul-hatano *:]
            [:* �����킵�ݐH�i_�X�L���P�A��w�߂���ǉ��@2016/12/5 geo-kajishi *:]
			<li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/skincare-univ_meguri/index.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-skincare_meguri.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">�X�L���P�A��w�~�߂���̌���</h3>
                    <p class="bh-panel__text">���́u�߂�����e�v�ō�������I��ǂ܂Ȃ������P�A�̃R�c</p>
                  </div>
                </div>
              </a>
            </li>
            [:* �����킵�ݐH�i_�X�L���P�A��w�߂���ǉ��@2016/12/5 geo-kajishi *:]
            
             <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/topics/socialtrendnews_ndw02.html" class="bh-topics">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/th-socialnews02.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">��2�� �\�[�V�����g�����h�j���[�X�~���ރh���z���������N��</h3>
                    <p class="bh-panel__text">�u��������������e�h�����N�v���ރh���z���������N�����Ď��ۂǂ��Ȃ́H���z�܂Ƃ�</p>
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
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                    <h3 class="bh-panel__title">��3�� �\�[�V�����g�����h�j���[�X�~���ރh���z���������N��</h3>
                    <p class="bh-panel__text">�������̃_���_�������͑��ƁI�u�O�b�X���Q�ď��q�͂�����v4�̐����@������Ă݂�</p>
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
          <img src="/assets/ps/domo/beautyhabit/top/img/thumb_inquiry_01.jpg" alt="�݂Ȃ��܂̐������񂹂��������B">
        </div>
        <div class="bh-sectionInquiry__wrap">
          <ul class="bh-sectionInquiry__clm2">
            <li class="bh-sectionInquiry__clm2__left">
              <div class="bh-sectionInquiry__clm2__title"><img src="/assets/ps/domo/beautyhabit/top/img/text_inquiry_mail_01.png" alt="���[���ł̂��₢���킹"></div>
              <div class="bh-sectionInquiry__clm2__btnBox">
                <a href="/domo/inquiry/"><img src="/assets/ps/domo/beautyhabit/top/img/btn_inquiry_mail_01.png" alt="�����k�E�����z�͂�����"></a>
              </div>
            </li>
            <li class="bh-sectionInquiry__clm2__right">
              <div class="bh-sectionInquiry__clm2__title"><img src="/assets/ps/domo/beautyhabit/top/img/text_inquiry_tel_01.png" alt="0120-444-444"></div>
              <div class="bh-sectionInquiry__clm2__btnBox">
                <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/top/img/btn_inquiry_tel_01.png" alt="�d�b�ł̂��₢���킹"></span>
                <a href="tel:0120444444" class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/top/img/btn_inquiry_tel_01.png" alt="�d�b�ł̂��₢���킹"></a>
              </div>
            </li>
          </ul>
          <div class="bh-sectionInquiry__textBox">
            [:* ��R-#29445_�c�Ǝ��Ԃ��F�{�n�k�O�̒ʏ�ɖ߂��yWEB�z2016/11/25 nul-sato*:]
            <p>���̃t���[�_�C�����̎�t����<br> �ߑO8���`�ߌ�10���A���j�j������t���Ă���܂��B</p>
            [:* ��R-#29445_�c�Ǝ��Ԃ��F�{�n�k�O�̒ʏ�ɖ߂��yWEB�z2016/11/25 nul-sato*:]
            <p>���ԍ��u��ʒm�v�̐ݒ������Ă���ꍇ�́A<br> 0120�̑O�ɁA186�����Ă��������������B</p>
          </div>
        </div>
      </div>
    </div>
    <!-- // top -->

  </div>
  <!--///// (4) �R���e���c  <div id="main">�� - END /////-->

[:* ��R-#29383_�yH28-00117-03�z�H�i�T�C�g_LABO�z���^�s�b�N�A�b�v�g�s�b�N�z��_�������Z�b�g�o�i�[�����or�t�b�^�[���ւ� 2016/11/14 nul-hatano *:]
  [:include file="domo/_shared/_footer02.inc.tpl":]
[:* ��R-#29383_�yH28-00117-03�z�H�i�T�C�g_LABO�z���^�s�b�N�A�b�v�g�s�b�N�z��_�������Z�b�g�o�i�[�����or�t�b�^�[���ւ� 2016/11/14 nul-hatano *:]

  <!--///// (5) �T�C�g�J�^���X�g�AYTM - START /////-->
  [:include file="domo/_shared/_footer_analysis.inc.tpl":]
  <!--///// (5) �T�C�g�J�^���X�g�AYTM - END /////-->
</body>

</html>
