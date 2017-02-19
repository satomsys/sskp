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
  <!--///// (1) �y�[�W�^�C�g���@�L�[���[�h�@�f�B�X�N���v�V���� - START /////-->
  <title>���R�~�E�C���^�r���[�b���ށ��H�ׂ�h���z���������N����������</title>
  <meta name="description" content="�y���ށ��H�ׂ�h���z���������N���z�����u�����h�T�C�g�B�u���R�~�E�C���^�r���[�v�ł́A���p�҂̕��X�̎����̂�����C���^�r���[�����Љ�܂��B">
  <meta name="keywords" content="�h���z���������N��,�h���z����,�h��,�ďt�ِ���,�ďt��,���R�~�E�C���^�r���[,���ރh���z���������N��">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/review.html">
  <meta property="og:title" content="���R�~�E�C���^�r���[�b���ށ��H�ׂ�h���z���������N����������">
  <meta property="og:description" content="�y���ށ��H�ׂ�h���z���������N���z�����u�����h�T�C�g�B�u���R�~�E�C���^�r���[�v�ł́A���p�҂̕��X�̎����̂�����C���^�r���[�����Љ�܂��B" />
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
          require(["/assets/ps/domo/beautyhabit/review/js/review.js?20161024"]);
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
        <img src="/assets/ps/domo/beautyhabit/review/img/title_review_01.png" alt="���R�~�E�C���^�r���[">
      </div>
    </div>

    <div class="bh-section bh-sectionSubArticle review">
      <div class="bh-innr">
        <div class="bh-articleList">
          <ul class="bh-articleList__list">
            <!-- �T�C�Y�����p�N���X -->
            <li class="bh-articleList__list__gridSizer"></li>
            <li class="bh-articleList__list__gutterSizer"></li>
            <!-- //�T�C�Y�����p�N���X -->
            <li class="bh-articleList__list__li">
              <a href="/domo/beautyhabit/review/ndw/customer_voice.html" class="bh-interview">
                <div class="bh-panel">
                  <div class="bh-panel__upper">
                    <img src="/assets/ps/domo/beautyhabit/common/img/17.jpg" alt="">
                  </div>
                  <div class="bh-panel__lower">
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="���R�~�E�C���^�r���["></p>
                    <h3 class="bh-panel__title">�u���ރh���v ���R�~</h3>
                    <p class="bh-panel__text">���ݑ����Ă��闝�R���킩��B�����̐����������`�F�b�N�I</p>
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
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="���R�~�E�C���^�r���["></p>
                    <h3 class="bh-panel__title">�u���ރh���v���q�l�C���^�r���[</h3>
                    <p class="bh-panel__text">��������x��ŁA�L���C����ɓ����B���Ȃ����n�߂܂��񂩁B</p>
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
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="���R�~�E�C���^�r���["></p>
                    <h3 class="bh-panel__title">�u�߂���̌����v���R�~</h3>
                    <p class="bh-panel__text">�u�߂���̌����v�Ɋ񂹂�ꂽ���q�l�̃��A���ȓ��e�����Љ�B</p>
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
                    <p class="bh-panel__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="���R�~�E�C���^�r���["></p>
                    <h3 class="bh-panel__title">�u�߂���̌����v�C���^�r���[</h3>
                    <p class="bh-panel__text">�������P�������̂��߂ɁB����������P�A�A�����Ă��܂��B</p>
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
            <p>���̃t���[�_�C�����̎�t����<br> �ߑO8���`�ߌ�10���A���j�j������t���Ă���܂��B
            [:* ��R-#29445_�c�Ǝ��Ԃ��F�{�n�k�O�̒ʏ�ɖ߂��yWEB�z2016/11/25 nul-sato*:]
            </p>
            <p>���ԍ��u��ʒm�v�̐ݒ������Ă���ꍇ�́A<br> 0120�̑O�ɁA186�����Ă��������������B
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- // top -->

  </div>
  <!--///// (4) �R���e���c  <div id="main">�� - END /////-->

  [:include file="domo/_shared/_footer01.inc.tpl":]

  <!--///// (5) �T�C�g�J�^���X�g�AYTM - START /////-->
  [:include file="domo/_shared/_footer_analysis.inc.tpl":]
  <!--///// (5) �T�C�g�J�^���X�g�AYTM - END /////-->
</body>

</html>
