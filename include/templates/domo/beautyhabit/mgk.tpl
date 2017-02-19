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
    <title>�߂���̌����b���ށ��H�ׂ�h���z���������N����������</title>
    <meta name="description" content="�y�߂���̌����z���i�y�[�W�B��Ԃ�Ȃ��̂�r�o���A�K�v�Ȃ��̂����݂��݂܂ŉ^�ԁu�߂���v���T�|�[�g�B�������瓧�����E�n���𐶂݂����܂��B">
    <meta name="keywords" content="�h���z���������N��,�h���z����,�h��,�ďt�ِ���,�ďt��,�߂���,�߂���̌���">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.saishunkan.co.jp/domo/beautyhabit/mgk.html">
    <meta property="og:title" content="�߂���̌����b���ށ��H�ׂ�h���z���������N����������">
    <meta property="og:description" content="�y�߂���̌����z���i�y�[�W�B��Ԃ�Ȃ��̂�r�o���A�K�v�Ȃ��̂����݂��݂܂ŉ^�ԁu�߂���v���T�|�[�g�B�������瓧�����E�n���𐶂݂����܂��B" />
    <meta property="og:image" content="http://www.saishunkan.co.jp/assets/ps/domo/beautyhabit/img/common/og_image.jpg" />
    <!--///// (1) �y�[�W�^�C�g���@�L�[���[�h�@�f�B�X�N���v�V���� - END /////-->
    <!-- ���T�C�g���ʂŎg���X�^�C���E�X�N���v�g-->
    [:include file="domo/_shared/_head_shared01.inc.tpl":]
    <!-- ���T�C�g���ʂŎg���X�^�C���E�X�N���v�g-->

    <!-- ���y�[�W���ɕK�v�ȃX�^�C���E�X�N���v�g�Ȃ�-->
    <!--///// (2) �y�[�W�ɕK�v��js �� CSS - START /////-->
    <!-- /beautyhabit/ ���ʕ���css -->
    <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/common/css/common.css?20161014" />
    <link rel="stylesheet" href="/assets/ps/domo/beautyhabit/mgk/css/mgk.css" />
    <!-- end /beautyhabit/ ���ʕ���css -->
    <script>
        require(["jquery"], function() {
            require(["/assets/ps/domo/beautyhabit/common/js/jquery.matchHeight-min.js", "/assets/ps/domo/beautyhabit/common/js/remodal.min.js"], function() {
                require(["/assets/ps/domo/beautyhabit/common/js/function.js?20161014", "/assets/ps/domo/beautyhabit/mgk/js/mgk.js"]);
            })
        });
    </script>
    <!--///// (2) �y�[�W�ɕK�v��js �� CSS - END /////-->
    <!-- ���y�[�W���ɕK�v�ȃX�^�C���E�X�N���v�g�Ȃ�-->
</head>

[:* �J�ڐ�ݒ� *:] [: if $status_login :] [: if $isSmartPhone :] [:assign var="URL" value="/domo/service/order/product_list.html#NomuDomohornWrinkle":] [: else :] [:assign var="URL" value="/domo/service/order/product_list.html#beautyhabit":] [: /if :] [:assign
var="URL_REGULAR" value="/member/regular_order/regular_order.html#beautyhabit":] [:assign var="ev_label" value="_product_list":] [: else :] [: if $device_id :] [: if $isSmartPhone :] [:assign var="URL" value="/domo/service/login/?target=/domo/service/order/product_list.html%23NomuDomohornWrinkle":]
[: else :] [:assign var="URL" value="/domo/service/login/?target=/domo/service/order/product_list.html%23beautyhabit":] [: /if :] [:assign var="URL_REGULAR" value="/domo/service/login/?target=/member/regular_order/regular_order.html#beautyhabit":] [:assign
var="ev_label" value="_login":] [: else :] [: if $isSmartPhone :] [:assign var="URL" value="/domo/direct_order/#NomuDomohornWrinkle":] [:assign var="URL_REGULAR" value="/domo/direct_order/#NomuDomohornWrinkle":] [: else :] [:assign var="URL" value="/domo/direct_order/#beautyhabit":]
[:assign var="URL_REGULAR" value="/domo/direct_order/#beautyhabit":] [: /if :] [:assign var="ev_label" value="_direct_order":] [: /if :] [: /if :] [: if $status_login:] [:* ���O�C���� *:] [:assign var=body_template_class value='template-post-login-layout02':]
[: else :] [:* �����O�C�� *:] [:assign var=body_template_class value='template-pre-login-layout02':] [: if $revisitFlg !==1 && $revisitFlg !==2 :] [:* S������ *:] [:assign var=body_template_class value='template-pre-login-layout01':] [: /if :] [: /if :]

<body class="page-skincare_tips template-enable-media-queries template-legacy-layout02 [:$body_template_class:]">
    <!--///// (3) GTM�̎w�� - START /////-->
    [:include file="domo/beautyhabit/_header.inc.tpl":]
    <!--///// (3) GTM�̎w�� - END /////-->

    <!--///// (4) �R���e���c  <div id="main" class="bh-main">�� - START /////-->
    <div id="main" class="bh-main">
        [:* SP�p�Ƀi�r�Q�[�V������\�� *:] [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]

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
                <h2 class="bh-hide">���ރh���z���������N��</h2>
                <div class="bh-nomudomo01">
                    <h3 class="bh-nomudomo01__title">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd_01.png" alt="�������E�n���̔錍�́A�u�o���v�A�u���݂��݂܂ŉ^�ԁv�B">
                        <hr>
                    </h3>
                    <p class="bh-nomudomo01__text">�u�߂���v�Ƃ́A��Ԃ�Ȃ��̂�r�o���邱�ƂƁA�K�v�Ȃ��̂����݂��݂܂ŉ^�сA�זE�̐��܂�ς��𑣂����ƁB�u�߂���v�̗͔͂N��ƂƂ��ɒቺ���邽�߁A��������T�|�[�g���Ă����邱�Ƃ���؂ł��B������Ƃ߂��点��T�C�N���𐮂��A�v��Ȃ����̂�r�o���Ă��܂��΁A�������A�b�v��n�������҂ł��܂��B</p>

                    <div class="bh-nomudomo01__clm2Wrap">
                        <ul class="bh-nomudomo01__clm2">
                            <li class="bh-nomudomo01__clm2__li">
                                <h4 class="bh-nomudomo01__clm2__title">
                                    <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_01.png" alt="�N��ɂ���b��ӗʂ̐���"></span>
                                    <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_01_sp.png" alt="�N��ɂ���b��ӗʂ̐���"></span>
                                </h4>
                                <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd01_01.png" alt=""></div>
                            </li>
                            <li class="bh-nomudomo01__clm2__li">
                                <h4 class="bh-nomudomo01__clm2__title">
                                    <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_02.png" alt="�l�Ԃ͖{���A����������Ȃ낤�Ƃ���͂�����"></span>
                                    <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd01_02_sp.png" alt="�l�Ԃ͖{���A����������Ȃ낤�Ƃ���͂�����"></span>
                                </h4>
                                <div class="bh-nomudomo01__clm2__contents"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd01_02.png" alt=""></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="bh-nomudomo02">
                    <h3 class="bh-nomudomo02__title">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd_02.png" alt="�߂���T�C�N���ɂ̂��āA�����������͂𔭊��B">
                        <hr>
                    </h3>
                    <p class="bh-nomudomo02__text">�߂���̌����́A�h���z���������N���Ȃ�ł͂̏㎿�ȃR���[�Q����q�A�������_���ӂ񂾂�ɔz���B�������u�߂���T�C�N���v�ɂ̂��邱�ƂŁA���炾�̂��݂��݂ŗ͂𔭊����邱�Ƃ��ł��܂��B���Ԃ̎��ԂɁA�����I�ɂ��ꂢ������܂��傤�B</p>

                    <div class="bh-nomudomo02__box01">
                        <h4 class="bh-nomudomo02__box01__title">
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-01.png" alt="����"></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_nd_02-01_sp.png" alt="����"></span>
                        </h4>
                        <div class="bh-nomudomo02__box01__contents">
                            <div class="bh-nomudomo02__box01__contents__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd_02-02.png" alt="���R�̗͂Łu��Ӂv�u���s�v�ɃA�v���[�`���I9������������ƋÏk">
                            </div>
                            <ul class="bh-nomudomo02__clm2">
                                <li class="bh-nomudomo02__clm2__li">
                                    <div class="bh-nomudomo02__clm2__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_01.jpg" alt="�A����"></div>
                                    <p class="bh-nomudomo02__clm2__text">
                                        �C���h�̓`���I�ȁu�A�[�������F�[�_�v�̐��E�ł��O��ʎ��̂P�Ə̂���A�������̖�10�{�̃r�^�~��C�A�ԃ��C���̖�30�{�̃|���t�F�m�[�����܂ށB
                                    </p>
                                </li>
                                <li class="bh-nomudomo02__clm2__li">
                                    <div class="bh-nomudomo02__clm2__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_02.jpg" alt="�q�n�c"></div>
                                    <p class="bh-nomudomo02__clm2__text">
                                        �H�ׂ�Ɩ�11���łۂ��ۂ�����قǂ̉��߂�͂����B�u���s�v�ɓ��������A�߂���̗͂��T�|�[�g���钷�R�V���E�B
                                    </p>
                                </li>
                            </ul>
                            <div class="bh-nomudomo02__foot">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_12.png" alt="���݂��݂܂ł߂���T�C�N��">
                            </div>
                            <ul class="bh-nomudomo02__clm4">
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_03.jpg" alt="�A���Z����"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_04.jpg" alt="�����t"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_05.jpg" alt="�v���e�I�O���J��"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_06.jpg" alt="��R���[�Q��"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_07.jpg" alt="�V�g������"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_08.jpg" alt="�r�[�g�Z���~�h"></div>
                                </li>
                                <li class="bh-nomudomo02__clm4__li">
                                    <div class="bh-nomudomo02__clm4__thumb"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_09.jpg" alt="�q�A�������_"></div>
                                </li>
                            </ul>

                            <div class="bh-nomudomo02__foot">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd02_11.png" alt="�߂���͂����łȂ��A�ł�����������ʂ𐶂ނ悤��9������z�������A�ďt�ِ��򏊂Ȃ�ł͂̓����P�A�ɂ����҂��������B">
                            </div>
                        </div>

                    </div>
                    <div class="bh-nomudomoDeveloper">
                        <h4 class="bh-nomudomoDeveloper__box01__title">
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer.png" alt="�J���҃C���^�r���["></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer_sp.png" alt="�J���҃C���^�r���["></span>
                        </h4>
                        <div class="bh-nomudomoDeveloper__box01__contents">
                            <div class="bh-nomudomoDeveloper__thumb__btn">
                                <a href="mgk01.html"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_next_01.png" alt="������ǂ�"></a>
                            </div>
                            <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/mgk/img/developer__mgk.jpg" alt="�\�ʓI�Ȃ��Y�݂��ꎞ�I�ɂ��炰��̂ł͂Ȃ������ɍ��{����A�v���[�`�������B���ڂ����̂́A�̓��́u���s�v�Ɓu��Ӂv�ł����B�ďt�ِ��� �����J�� �c�쉪����"></span>
                            <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/mgk/img/developer__mgk_sp.jpg" alt="�\�ʓI�Ȃ��Y�݂��ꎞ�I�ɂ��炰��̂ł͂Ȃ������ɍ��{����A�v���[�`�������B���ڂ����̂́A�̓��́u���s�v�Ɓu��Ӂv�ł����B�ďt�ِ��� �����J�� �c�쉪����"></span>
                        </div>
                    </div>
                </div>

                <div class="bh-nomudomo03">
                    <h3 class="bh-nomudomo03__title"><img src="/assets/ps/domo/beautyhabit/mgk/img/title_nd03_01.png" alt="�����̂킽�����A���̂��݂ɂȂ���K���B"></h3>
                    <div class="bh-nomudomo03__thumb">
                        <div class="bh-nomudomo03__thumb__img"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd03_01.png" alt=""></div>
                        <div class="bh-nomudomo03__thumb__btn">
                            <a href="#modal01"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_haigoulist_01.png" alt="�z�������ꗗ"></a>

                            <div class="remodal modal01" data-remodal-id="modal01">
                                <button data-remodal-action="close" class="remodal-close"></button>
                                <div class="modalContents">
                                    <div class="modal01__box01">
                                        <h4 class="modal01__title">�߂���̌����@�@�@<br class="bh-onlySP">�z�������ꗗ</h4>
                                        <div class="modal01__tableWrap">
                                            <ul class="modal01__table">
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__th"><span>���ޗ���</span></div>
                                                    <div class="modal01__table__th"><span>�N��</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�R���[�Q���y�v�`�h�i��R���j</span></div>
                                                    <div class="modal01__table__td"><span>��̔�</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�A�����G�L�X</span></div>
                                                    <div class="modal01__table__td"><span>�A�����̉ʎ�</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>L-�V�g������</span></div>
                                                    <div class="modal01__table__td"><span>���y</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�q�n�c�G�L�X</span></div>
                                                    <div class="modal01__table__td"><span>�q�n�c�̉ʕ�</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�����t�G�L�X</span></div>
                                                    <div class="modal01__table__td"><span>�����̗t</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�t�B�b�V���y�v�`�h</span></div>
                                                    <div class="modal01__table__td"><span>�}�O���E�J�c�I</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�T�P�@��G�L�X</span></div>
                                                    <div class="modal01__table__td"><span>�T�P�̕@�</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�r�[�g���o��</span></div>
                                                    <div class="modal01__table__td"><span>�e���T�C</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�����Z�����[�X</span></div>
                                                    <div class="modal01__table__td"><span>�Z�����[�X</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�V�����G�X�e��</span></div>
                                                    <div class="modal01__table__td"><span>�T�g�E�L�r�E�e���T�C�E�p�[���E���V</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�����_�J���V�E��</span></div>
                                                    <div class="modal01__table__td"><span>�����z�΁E�ΊD��</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�q�A�������_</span></div>
                                                    <div class="modal01__table__td"><span>���y</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�V�F���b�N</span></div>
                                                    <div class="modal01__table__td"><span>���y�E�x�j�o�i</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>���H�f���v��</span></div>
                                                    <div class="modal01__table__td"><span>�g�E�����R�V</span></div>
                                                </li>
                                                <li class="modal01__table__tr">
                                                    <div class="modal01__table__td"><span>�J���i�E�o���E</span></div>
                                                    <div class="modal01__table__td"><span>�J���i�E�o���E�o���V</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="modal01__text">�����ޗ��̈ꕔ�ɃT�P�A�[���`�����܂݂܂��B
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bh-nomudomo03__text">
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>���i��</dt>
                            <dd>�߂���̌���<sup>��</sup><span class="bh-labelBlack">�N����K��</span></dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>���i</dt>
                            <dd>6,480�~�i�ō��j</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>���w���|�C���g</dt>
                            <dd>3�|�C���g</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>���e��</dt>
                            <dd>120���i��P�������j1��4����ڈ��ɂ������オ�肭�������B</dd>
                        </dl>
                        <dl class="bh-nomudomo03__text__dl">
                            <dt>�z����</dt>
                            <dd>1��4���i1.0g�j������<br>�R���[�Q���F300mg<br>�A�����G�L�X�F79mg<br>�V�g�������F100mg<br>�q�A�������_�F8mg<br>�v���e�I�O���J���F1,000��g<br>�ۑ����E���F�����Y��</dd>
                        </dl>
                        <ul class="bh-nomudomoNote">
                            <li class="bh-nomudomoNote__list">�����ޗ��̈ꕔ�ɃT�P�A�[���`�����܂݂܂��B</li>
                            <li class="bh-nomudomoNote__list">���߂���̌����͐H�i�ł��B</li>
                        </ul>
                    </div>
                    <div class="bh-nomudomo03__foot">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_nd03_02.png" alt="���ݍ��݂₷���A�����Ŋۂ��`��B��y�Ɉ��߂邩��A�����₷���B�����_���[�W�ɂ�邪�Ȃ��A���ꂢ�ƌ��C����Ă܂��傤�B">
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
                                <a href="#modal02" class="bh-productList__btn2"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_teiki_01.png" alt="������͂��R�[�X�����̂��ꂵ�����T�͂�����"></a>
                            </div>
                            <div class="bh-onlySP">
                                <a href="[:$URL_REGULAR:]" class="bh-productList__btn"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_pl_04_sp.png" alt=""></a>
                                <a href="#modal02" class="bh-productList__btn2"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_teiki_01.png" alt="������͂��R�[�X�����̂��ꂵ�����T�͂�����"></a>
                            </div>

                            <div class="remodal modal02" data-remodal-id="modal02">
                                <button data-remodal-action="close" class="remodal-close"></button>
                                <div class="modalContents">
                                    <div class="modal02__box01">
                                        <h4 class="modal02__title"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_01.png" alt="���ꂵ�����T�t���u������͂��R�[�X�v�̂��ē�"></h4>
                                        <p class="modal02__text">���ꂢ�������Ƒ����������������邽�߁A<br> ���T�t���́u������͂��R�[�X�v�����p�ӂ��܂����B<br> ���Ђ����p���������B
                                        </p>
                                    </div>
                                    <div class="modal02__box02">
                                        <h5 class="modal02__subtitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_02.png" alt="���T ����1"></h5>
                                        <div class="modal02__extitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_03.png" alt="�}���X���[�v���[���g�i�����̒�����T�j"></div>
                                        <p class="modal02__text">�����̂��͂����ɁA���L�̂�������ǂ��炩���v���[���g�������܂��B���\�����ݎ��ɂ��I�т��������B</p>
                                        <div class="modal02__box02__figure"><img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_modal01_01.png" alt=""></div>
                                    </div>
                                    <div class="modal02__box03">
                                        <h5 class="modal02__subtitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_04.png" alt="���T ����2"></h5>
                                        <div class="modal02__extitle"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_modal01_05.png" alt="���y���݃v���[���g"></div>
                                        <p class="modal02__text">�R�񂲂ƂɁA�}���X���[�v���[���g�i�����̒�����T�j�ɉ����āu���y���݃v���[���g�v�����p�ӁB���������Ă��邩�A���y���݂ɁI</p>
                                        <div class="modal02__box03__figure01"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_modal01_02.png" alt="������͂�"></div>
                                        <div class="modal02__box03__figure02"><img src="/assets/ps/domo/beautyhabit/ndw/img/thumb_modal01_03.png" alt="���q�l�̂��s���ɍ��킹�Ă��͂����܂��B�Q��ނ̎w����@���炨�I�т��������B"></div>
                                        <div class="modal02__caution">
                                            <p class="modal02__caution__title">������</p>
                                            <ul class="modal02__caution__list">
                                                <li>�u������͂��R�[�X�v��3��ȏ�̂��w���������ƂȂ�܂��B</li>
                                                <li>���x�����́A�ꊇ�����ł��肢���Ă���܂��B</li>
                                                <li>���͂������E���͂���̕ύX������ꍇ�A���͂��w�����5���O�܂łɂ��d�b�i0120-444-444�j�������́A<a href="/domo/inquiry/">���[��</a>�ɂĂ��m�点���������B</li>
                                                <li>���w���|�C���g�́A���i�������ɉ��Z����܂��B����������Ă����̃^�C�~���O�ł͉��Z����܂���B</li>
                                                <li>�x�~�E���́A���͂��w�����5���O�܂łɂ��d�b�i0120-444-444�j�ɂĂ��m�点���������B</li>
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
                        <span class="bh-onlyPC"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01.png" alt="�������߃R���e���c"></span>
                        <span class="bh-onlySP"><img src="/assets/ps/domo/beautyhabit/ndw/img/title_osusume_01_sp.png" alt="�������߃R���e���c"></span>
                    </h3>
                    <div class="bh-osusume__contents">
                        <ul class="bh-osusume__clm">
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/review/mgk/interview/index.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/22.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="���R�~�E�C���^�r���["></p>
                                            <p class="bh-osusume__subTitle">�u�߂���̌����v�C���^�r���[</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">�������P�������̂��߂ɁB����������P�A�A�����Ă��܂��B</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/meguri02.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/10.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="�˂ނ�Ƃ߂���̌�����"></p>
                                            <p class="bh-osusume__subTitle">���s�s�ǂ����V���̌����I�H</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">���s�́A�����Ƃ��炾�������₩�ɕۂ��߂ɕK�v�s���Ȃ��́B</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/lab/meguri03.html" class="bh-lab">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/11.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_labo_01.png" alt="�˂ނ�Ƃ߂���̌�����"></p>
                                            <p class="bh-osusume__subTitle">�V���V�~�΍�̌��I���炾�̉��̂߂���</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">�߂���Ƃ́A�s�v�Ȃ��̂�r�o���A�K�v�Ȃ��̂��s���n�点�邱�ƁB</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/review/mgk/customer_voice.html" class="bh-interview">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/21.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_interview_01.png" alt="���R�~�E�C���^�r���["></p>
                                            <p class="bh-osusume__subTitle">�u�߂���̌����v���R�~</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">�u�߂���̌����v�Ɋ񂹂�ꂽ���q�l�̃��A���ȓ��e�����Љ�B</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/cafeglobe_meguri01.html" class="bh-topics">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/25.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                                            <p class="bh-osusume__subTitle">cafeglobe�~�߂���̌���</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">�X�[�p�[�t���[�c������΁A�����ɂȂ��Ă��L���C�͑����I</div>
                                </a>
                            </li>
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/mylohas_meguri01.html" class="bh-topics">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/26.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                                            <p class="bh-osusume__subTitle">MY LOHAS�~�߂���̌���</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">��ǂ݂̂Ȃ��l�ɂȂ�B�u���l��ہv�𐶂ރC���h�̉ʎ��Ƃ́H</div>
                                </a>
                            </li>
                            [:* �����킵�ݐH�i_�X�L���P�A��w�߂���ǉ��@2016/12/5 geo-kajishi *:]
                            <li class="bh-osusume__clm__li">
                                <a href="/domo/beautyhabit/topics/skincare-univ_meguri/index.html" class="bh-topics">
                                    <div class="bh-osusume__spBox">
                                        <div class="bh-osusume__thumb"><img src="/assets/ps/domo/beautyhabit/common/img/th-skincare_meguri.jpg" alt=""></div>
                                        <div class="bh-osusume__spBox__right">
                                            <p class="bh-osusume__category"><img src="/assets/ps/domo/beautyhabit/top/img/title_panel_topics_01.png" alt="�s�b�N�A�b�v�E�g�s�b�N�X"></p>
                                            <p class="bh-osusume__subTitle">�X�L���P�A��w�~�߂���̌���</p>
                                        </div>
                                    </div>
                                    <div class="bh-osusume__text">���́u�߂�����e�v�ō�������I��ǂ܂Ȃ������P�A�̃R�c</div>
                                </a>
                            </li>
                            [:* �����킵�ݐH�i_�X�L���P�A��w�߂���ǉ��@2016/12/5 geo-kajishi *:]
                        </ul>
                    </div>
                </div>

                <div class="bh-localPagetop">
                    <div class="bh-localPagetop__btnBox">
                        <ul class="bh-localPagetop__btnList">
                            <li class="bh-localPagetop__btnList__li">
                                <a href="/domo/beautyhabit/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_ndwtop_01.png" alt="���ށ��H�ׂ�h���z���������N���g�b�v"></a>
                            </li>
                            <li class="bh-localPagetop__btnList__li">
                                <a href="/domo/"><img src="/assets/ps/domo/beautyhabit/common/img/btn_top_01.png" alt="�h���z���������N���g�b�v"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="bh-localPagetop__pagetop">
                        <a href="#top"><img src="/assets/ps/domo/beautyhabit/common/img/btn_pagetop_01.png" alt="�y�[�W�g�b�v��"></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- // page -->

    </div>
    <!--///// (4) �R���e���c  <div id="main">�� - END /////-->

    [:include file="domo/_shared/_footer01.inc.tpl":]

    <!--///// (5) �T�C�g�J�^���X�g�AYTM - START /////-->
    [:include file="domo/_shared/_footer_analysis.inc.tpl":]
    <!--///// (5) �T�C�g�J�^���X�g�AYTM - END /////-->
</body>

</html>