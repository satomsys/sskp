[:* ���蓖�čL��ɂȂ炢�A�{���Ȃ�javascript��appendChild�Ȃǂœ��݃T�C�g�p�̃i�r��ǉ����ׂ��������̂����A
�e���͈͓������ƂɌ����������ʐV�K�Ƀw�b�_���쐬���邱�ƂƂ��� *:]

  [:* ��R-#17520_GA�^�O�}�l�[�W���[�ݒu 2015/06/05 nul-yamashita*:]
  [:include file="./com_inc/_header_analysis.inc.tpl":]
  [:* ��R-#17520_GA�^�O�}�l�[�W���[�ݒu 2015/06/05 nul-yamashita*:]
  [:* ��R-#21639_WEB VIEW ���� 2016/03/09 nul-uramoto*:]
  [:if $is_DomoApp == false && $isDomoApp == false:]
  [:include file='domo/_shared/_header_noscript.inc.tpl' :]

  <div class="page-header with-navigation[: if $status_login :] with-user-specific[: /if :]">

  [: if $status_login :]
  [:include file='domo/_shared/_header_usr_specific.inc.tpl' :]
  [: else :]
  [:include file='domo/_shared/_header_top01.inc.tpl' :]
  [: /if :]

  [:include file='domo/_shared/_header_middle01.inc.tpl' :]
[:* �O���[�o���i�r�Q�[�V���� *:]
<div class="header-navigation01 header-navigation01-autostay">
<div class="content-wrapper01">
<ul class="global-navigation-list">
<li class="list-item item-lv1 list-product with-child"><a href="/domo/about_dw/" class="link-anchor link-product anchor-lv1">�h���z���������N���̂��Љ�</a>
<ul class="child-list-lv1">
<li class="list-item item-lv2"><span class="link-text01"><a class="link-anchor" href="/domo/about_dw/"><span class="ir ir-link01"></span>�h���z���������N���̂��Љ�g�b�v</a>
</span>
<ul class="child-list-lv2">
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/product/"><span class="ir ir-link01"></span>���i�ꗗ</a>
</span>
<ul class="child-list-lv3">
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dcj/"><span class="ir ir-link01"></span><span class="ir ir-num01">1</span>���ϗ����W�F��</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dcs/"><span class="ir ir-link01"></span><span class="ir ir-num01">2</span>���Ό�</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dfp/"><span class="ir ir-link01"></span><span class="ir ir-num01">3</span>�A�̏W���p�b�N</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dl/"><span class="ir ir-link01"></span><span class="ir ir-num02">4</span>�ێ��t</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/de/"><span class="ir ir-link01"></span><span class="ir ir-num02">5</span>�������G�L�X</a>
</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dw20/"><span class="ir ir-link01"></span><span class="ir ir-num02">6</span>�N���[��20</a>
</span>
</li>
[:* ��2015/2/5 R-#16855_�O���[�o���i�r�̏��i���ԈႢ�Ή� (nul yamashita) *:]
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dml/"><span class="ir ir-link01"></span><span class="ir ir-num02">7</span>�ی���t</a>
</span>
</li>
[:* ��2015/2/5 R-#16855_�O���[�o���i�r�̏��i���ԈႢ�Ή� (nul yamashita) *:]
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dc/"><span class="ir ir-link01"></span><span class="ir ir-num03">8</span>���΍� �f���h���X�N���[��</a>
</span>
</li>
[:if $smarty.session.LOGINTIME :]
[:assign var=time value=$smarty.session.LOGINTIME:]
[:else:]
[:assign var=time value=$smarty.now:]
[:/if:]
[:if $time >= strtotime('2015-01-06 00:00:00') :]
<li class="list-item item-lv4"><span class="link-text01">&nbsp;</span>
</li>
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/mgk/"><span class="ir ir-link01"></span>�߂���̌���</a>
</span>
</li>
[:/if:]
<li class="list-item item-lv4"><span class="link-text01"><a class="link-anchor" href="/domo/product/dnd/"><span class="ir ir-link01"></span>���ރh���z���������N��</a>
</span>
</li>
</ul>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/sample_guide/"><span class="ir ir-link01"></span>�����������Z�b�g�ɂ���</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/speciality/"><span class="ir ir-link01"></span>�h���z���������N���̂������</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/product/history.html"><span class="ir ir-link01"></span>�h���z���������N���̗��j</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/present_guide/"><span class="ir ir-link01"></span>�|�C���g�v���[���g�i�̂��Љ�</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/shop/"><span class="ir ir-link01"></span>�h���z���������N�� �R�~���j�P�[�V�����X�y�[�X�ɂ���</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/cm/"><span class="ir ir-link01"></span>CM�Љ�</a>
</span>
</li>
</ul>
</li>
</ul>
</li>
<li class="list-item item-lv1 list-voice with-child"><a href="/domo/customer_voice/" class="link-anchor link-voice anchor-lv1">���q�l�̐�</a>
<ul class="child-list-lv1">
<li class="list-item item-lv2"><span class="link-text01"><a class="link-anchor" href="/domo/customer_voice/"><span class="ir ir-link01"></span>���q�l�̐��g�b�v</a>
</span>
<ul class="child-list-lv2">
[:* ��R-#29017_H28-00096-70_SSK_NET-1564_�����̂����y�[�W�̃����N���̃e�L�X�g�〈�o���̏C�� 2016/10/19 sai-higashi *:]
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/voice/index2.html"><span class="ir ir-link01"></span>�����h�����͂��߂����R</a>
[:* ��R-#29017_H28-00096-70_SSK_NET-1564_�����̂����y�[�W�̃����N���̃e�L�X�g�〈�o���̏C�� 2016/10/19 sai-higashi *:]
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/story/"><span class="ir ir-link01"></span>�h���z���������N���̂����炵</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/interview/"><span class="ir ir-link01"></span>�h���z���������N�����q�l�C���^�r���[</a>
</span>
</li>
</ul>
</li>
</ul>
</li>
<li class="list-item item-lv1 list-shiwashimi with-child"><a href="/domo/laboratory/" class="link-anchor link-shiwashimi anchor-lv1">�N��̂��߂�</a>
<ul class="child-list-lv1">
<li class="list-item item-lv2"><span class="link-text01"><a class="link-anchor" href="/domo/laboratory/"><span class="ir ir-link01"></span>�N��̂��߂Ƀg�b�v</a>
</span>
<ul class="child-list-lv2">
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/kaihatsu/gakkai/"><span class="ir ir-link01"></span>�����J���̋O��</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/raw_material/"><span class="ir ir-link01"></span>�T�����߂��V�R����</a>
</span>
</li>
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/skinknowledge/"><span class="ir ir-link01"></span>��l�̔���f�G�Ȕ���</a>
</span>
</li>
[:* ��R-#28526_���킵�ݒʐM�����폜 2016/07/14 sai-higashi *:]
[:* ���킵�ݒʐM�����폜�̂��ߏ����폜 *:]
[:* ��R-#28526_���킵�ݒʐM�����폜 2016/07/14 sai-higashi *:]
<li class="list-item item-lv3"><span class="link-text01"><a class="link-anchor" href="/domo/sign/"><span class="ir ir-link01"></span>�N��̂��Y�݂̌���</a>
</span>
</li>
</ul>
</li>
</ul>
</li>
<li class="list-item item-lv1 list-oteate"><a href="/domo/skincare/" class="link-anchor link-oteate anchor-lv1">�����̂��蓖��</a>
</li>
<li class="list-item item-lv1 list-aboutorder"><a href="/domo/order_guide/" class="link-anchor link-aboutorder anchor-lv1">�������ɂ���</a>
</li>
<li class="list-item item-lv1 list-faq"><a href="/domo/faq/" class="link-anchor link-faq anchor-lv1">�悭���邲����</a>
</li>
</ul>
</div>
    <!--///// (��) Beautyhabit ���[�J���i�r - START /////-->
    <div id="" class="bh-localHeader">
      <div class="bh-localHeader__innr">
        <div class="bh-localHeader__left">
          <a href="/domo/beautyhabit/" class="bh-localHeader__title">
            <h1><span>���ށ��H�ׂ�h���z���������N��</span></h1>
          </a>
        </div>
        <div class="bh-localHeader__right">
          <div class="bh-localHeader__spBtn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="bh-localHeader__spBtnText">MENU</div>
        </div>
      </div>
    </div>
    <div id="" class="bh-localNav">
      <div class="bh-localNav__innr">
        <div class="bh-localNav__list">
          <ul class="bh-localNav__list__ul upper">
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/ndw.html" class="nav01">
                <span>���ރh���z���������N��</span>
              </a>
            </li>
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/mgk.html" class="nav02">
                <span>�߂���̌���</span>
              </a>
            </li>
          </ul>
          <ul class="bh-localNav__list__ul lower">
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/lab.html" class="nav03">
                <span>�˂ނ�Ƃ߂���̌�����</span>
              </a>
            </li>
            <li class="bh-localNav__list__nav">
              <a href="/domo/beautyhabit/review.html" class="nav04">
                <span>���R�~�E�C���^�r���[</span>
              </a>
            </li>
            <li class="bh-localNav__list__nav nav05">
              <a href="/domo/beautyhabit/topics.html" class="nav05">
                <span>�s�b�N�A�b�v�E�g�s�b�N�X</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--///// (��) Beautyhabit ���[�J���i�r - END /////-->
</div>


  <hr class="hidden-hr" />
  <!-- /div.page-header--></div>
  [: /if :]
  [:* ��R-#21639_WEB VIEW ���� 2016/03/09 nul-uramoto*:]