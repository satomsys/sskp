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
    <title>�߂���̌��� �J���҂̂������b���ށ��H�ׂ�h���z���������N����������</title>
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

<body class="bh-sectionDeveloper page-skincare_tips template-enable-media-queries template-legacy-layout02 [:$body_template_class:]">
    <!--///// (3) GTM�̎w�� - START /////-->
    [:include file="domo/beautyhabit/_header.inc.tpl":]
    <!--///// (3) GTM�̎w�� - END /////-->

    <!--///// (4) �R���e���c  <div id="main" class="bh-main">�� - START /////-->
    <div id="main" class="bh-main">
        [:* SP�p�Ƀi�r�Q�[�V������\�� *:] [:include file="domo/beautyhabit/_sp_navi.inc.tpl":]

        <!-- page -->
        <div class="bh-section bh-sectionNomudomo">
            <div class="bh-innr">
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__heading">
                        <div class="bh-onlyPC">
                            <h2><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer_mgk.png" alt="�߂���̌��� �J���҂̂������"></h2>
                        </div>
                        <div class="bh-onlySP">
                            <h2><img src="/assets/ps/domo/beautyhabit/mgk/img/title_developer_mgk.png" alt="�߂���̌��� �J���҂̂������"></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bh-onlyPC">
                <div class="bh-nomudomoDeveloper__full">
                    <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_main.jpg" alt="�\�ʓI�Ȃ��Y�݂��ꎞ�I�ɂ��炰��̂ł͂Ȃ������ɍ��{����A�v���[�`�������B���ڂ����̂́A�̓��́u���s�v�Ɓu��Ӂv�ł����B�ďt�ِ��� �����J�� �c�쉪����">
                </div>
            </div>
            <div class="bh-onlySP bh-nomudomoDeveloper__staff"><img src="/assets/ps/domo/beautyhabit/mgk/img/dev_main_sp.jpg" alt="�\�ʓI�Ȃ��Y�݂��ꎞ�I�ɂ��炰��̂ł͂Ȃ������ɍ��{����A�v���[�`�������B���ڂ����̂́A�̓��́u���s�v�Ɓu��Ӂv�ł����B�ďt�ِ��� �����J�� �c�쉪����"></div>
            <div class="bh-innr">
                <h2 class="bh-hide">���ރh���z���������N��</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__box02">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-a.png" alt="�����̕s�����A�u���ꂢ�v�̃g���u���ɁB���ڂ����̂� �߂���̗�">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-a" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-a_sp.png" alt="�����̕s�����A�u���ꂢ�v�̃g���u���ɁB���ڂ����̂� �߂���̗�">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">�����̂��܂��܂Ȃ��Y�݂����炰�g���܂ł���X�������肽���h�Ƃ����肢�ɂ��������邽�߂ɁA��������40�N�ȏ�ɂ킽���ĔN��炭�邨�Y�݂̌����𑱂��Ă��܂����B�N����d�˂�Ƒ����̕����u�Ȃ�ƂȂ����q�������v�u�N�}���Ƃ�ɂ����c�v�u�����݂��C�ɂȂ�c�v�Ƃ������A���炾�̐�����������������悤�ɂȂ�܂��B�N��ɂ���ċN���邨�Y�݂́A���炾�̓����̋@�\�Ɍ���������܂��B�ŏ��͏����ȕs���ł��A�₪�Ă͐[���ȔY�݂ɂȂ����Ă��܂��B����Ȃ��炾�̕ω��ɑ΂��A�����Ɋw�񂾐����ЂƂ��ēƎ��̓������o�������B������b���ϕi�̌����J�����d�˂Ă��������������ǂ蒅���������́A�����ŋN���錻�ۂɂ́A�������炵������Ɠ��������邱�Ƃ��ł���C���i�[�P�A�����Ƃ��Ă��d�v�ł���Ƃ������ƁB�����āA�ďt�ِ��򏊂Ȃ�ł͂̊����̍l���������Ƃɂ����A�����ڔN��Ɓu���s�E��Ӂv�Ƃ̖��ڂȊւ��ւ̒��ڂł����B���s�Ƒ�ӁA�܂�N��ƂƂ��ɒቺ����g�߂���̗́h�ɍ��{����A�v���[�`���邱�ƂŁA����������Ȃ낤�Ƃ���͂����炾�̂��݂��݂܂ł߂��点�A���Y�݂̏o�ɂ������炾��ڎw�����Ƃ��ł���\
                            ����Ȕ��z�Ɋ�Â��J�������̂��A�N����d�˂����q�l�́g���ꂢ�Â���h�̎��������{����㉟������u�߂���̌����v�ł��B
                        </p>
                        <div class="bh-onlyPC">
                            <div class="bh-nomudomoDeveloper__full">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_drink.png" alt="�߂���̌���">
                            </div>
                        </div>
                        <div class="bh-onlySP bh-nomudomoDeveloper__item"><img src="/assets/ps/domo/beautyhabit/mgk/img/dev_drink_sp.png" alt="�߂���̌���"></div>
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-b.png" alt="���炾�̓����ŋN�����Ă��鎖����1�����A���Ȃ��������������߂�">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-b" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-b_sp.png" alt="���炾�̓����ŋN�����Ă��鎖����1�����A���Ȃ��������������߂�">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">���炾�̓����ɂ��O���ɂ��[���ւ���Ă���u�߂���v���u���s�v�Ɓu��Ӂv�B�g�߂���̗́h�Ƃ́A�K�v�ȉh�{�����炾�̂��݂��݂܂ŉ^�сA�s�v�Ȃ��̂�r�o���זE�̐��܂�ς��͂̂��ƁB���̂߂���̃T�C�N�����˂ɑ؂�Ȃ��s���Ă����A���炾�̍זE�͓��X���܂�ς�邱�Ƃ��ł��A���̂����݂���邪�������ɍ��{����A�v���[�`���邱�Ƃ��ł��܂��B�t�ɂ��̗͂��N��ƂƂ��ɒቺ���Ă��܂��ƁA�����₩�炾�{���́g�C���́h���X���[�Y�ɋ@�\���ɂ����Ȃ��Ă��܂��܂��B����̌�����ǋ��������Ă����������������Ƃ��Ă��A�P���̐�����ʂ��Ă��q�l�̂��炾�̓����ł����ƋN���葱���Ă��鎖����ω��A�N��ɂ�邨�Y�݂ɁA���̂Ȃ��A�v���[�`���ł��鏤�i�����͂��������ƍl���g���ɂ����߂ē����̑΍􂪂ł���h�T�v�������g�Ƃ��܂����B</p>
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
                <h2 class="bh-hide">���ރh���z���������N��</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">

                    <div class="bh-nomudomoDeveloper__box02">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-c.png" alt="���R�̗͂��A���炾�̂��݂��݂ցB�͍����d�ˁA�ꗱ�ɍ��߂��z��">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-c" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-c_sp.png" alt="���R�̗͂��A���炾�̂��݂��݂ցB�͍����d�ˁA�ꗱ�ɍ��߂��z��">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">�N��ɂ�邨�Y�݂ɏ����ł��艞���������Ă�����������̂����ǂ��`�ł��񋟂������B���̂��߂ɂ́A�܂����s�E��ӂɓ��������Ă��炾�̊�ՂÂ�����s���A���̓�����₤���e���������炾�̂��݂��݂܂ōs���n�点�邱�ƂŁA���炾���ƃ^�[���I�[�o�[�𑣂����Ƃ���؂ł��B�z�����������ɂ͐����錴���̒����猌�s�E��ӂɓ���������C���h���Y�̃A�����Ƃ����ʎ���I��B���̔��e�������܂ߑS�����ɓV�R�������g�p���邱�ƂŁA�g�h���z���������N���Ǝ��̃T�v�������g�h�Ƃ��Ăǂ��ɂ��Ȃ��g�ݍ��킹���������Ă��܂��B����ɁA�p�����Ĉ���ł���������悤���݂₷�����ǋ����A���̑傫����`��ɂ͓O��I�ɂ������܂����B�����O�ɂ��q�l�ɏ��i�����Љ���ہA�u����Ȃɏ������Ă����́H
                            �������ˁv�Ƃ����������������������͂ƂĂ������������ł��ˁB
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
                <h2 class="bh-hide">���ރh���z���������N��</h2>
                <div class="bh-nomudomoDeveloper bh-nomudomoDeveloper__inner">
                    <div class="bh-nomudomoDeveloper__box01">
                        <div class="bh-onlyPC">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-d.png" alt="���Y�݂����{����x���邽�߂Ɍp���I�ȃC���i�[�P�A��">
                                <hr>
                            </h3>
                        </div>
                        <div class="bh-onlySP">
                            <h3 class="bh-nomudomoDeveloper__title">
                                <img class="imgW-d" src="/assets/ps/domo/beautyhabit/mgk/img/dev_title-d_sp.png" alt="���Y�݂����{����x���邽�߂Ɍp���I�ȃC���i�[�P�A��">
                                <hr>
                            </h3>
                        </div>
                        <p class="bh-nomudomoDeveloper__text">�Â����̂�r�o���A�V�������̂𐶂݂����Ƃ����߂���̗͂��R���Z�v�g�ɂ����u�߂���̌����v�́A�܂��ɔN��ɂ�邨�Y�݂����{����x����C���i�[�P�A�ł��B�ł����炨�Y�݂��������̂��q�l�ɂ͂��Ж����A�����Ă������������ł��ˁB����܂Ŋ�b���ϕi�h���z���������N���̌����ŉ𖾂���Ă����N��̂��Y�݂̌����⃁�J�j�Y���ɂ��Ă̐��ʂ͎��ɐ���������A���̂��ׂĂ��ďt�ِ��򏊂Ƃ��Ă̋O�Ղł����A���q�l�̂��Y�݂̂��߂Ɏ��������������ł��邱�Ƃ�𖾂��ׂ����Ƃ͂܂��܂��c����Ă���Ǝv���Ă��܂��B�l�̂��炾�́A���ꂾ�����m���Ȃ��́B�����炱���A�����̐����ЂƂ��đ�؂ɂ��Ă����g����������Ȃ낤�Ƃ���́h������ɉ����������A���ꂩ������q�l�̂��Y�݂̍��{�����ɉ��������Ă��������B�����l���Ă��܂��B</p>
                    </div>
                </div>
                <div class="bh-nomudomo04__foot">
                    <div class="bh-onlyPC">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_dev_01.png" alt="�N��ɂ�邨�Y�݂Ɍ������������Ă����ďt�ِ��򏊂̊J���҂̂�����肪�l�܂��������P�A�����Ђ��������������B">
                    </div>
                    <div class="bh-onlySP bh-osusume">
                        <img src="/assets/ps/domo/beautyhabit/mgk/img/thumb_dev_01_sp.png" alt="�N��ɂ�邨�Y�݂Ɍ������������Ă����ďt�ِ��򏊂̊J���҂̂�����肪�l�܂��������P�A�����Ђ��������������B">
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
                <div class="bh-nomudomotop">
                    <ul class="bh-nomudomotop__btnList">
                        <li class="bh-nomudomotop__btnList__li">
                            <a href="mgk.html"><img src="/assets/ps/domo/beautyhabit/mgk/img/btn_mgk.png" alt="�߂���̌��� ���i�y�[�W"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bh-innr">
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
                    <div class="bh-localPagetop__btnBox bh-localPagetop__btnBox--dev">
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

            <!-- // page -->

        </div>
        <!--///// (4) �R���e���c  <div id="main">�� - END /////-->

        [:include file="domo/_shared/_footer01.inc.tpl":]

        <!--///// (5) �T�C�g�J�^���X�g�AYTM - START /////-->
        [:include file="domo/_shared/_footer_analysis.inc.tpl":]
        <!--///// (5) �T�C�g�J�^���X�g�AYTM - END /////-->
</body>

</html>