/**
 * jQuery Config for step5fix
 * Site : �ďt�ِ��� �����t���[
 * Target : �v���[���g�I����ʐ�p
 */

//

var ITEMS = 0;  //���i�̎��
var ITEMS_MAX = 18; //�ő�w���\�ȏ��i��(���)
var PRESENTS_MAX = 10; //�I���\�ȃv���[���g���̍ő�(Max)

var KNYUPT = 0; //���񂨔����グ�|�C���g
var SAVEPT = 47; //�ϗ��|�C���g
var USEDPT = 0; //���񗘗p�|�C���g
var POOLPT = 0; //����J�z�|�C���g


var AMOUNT = 0; //���i���z
var TAX = 0;    //�����
var TOTAL = 0;  //���v���z(�ō�)

//���iselect�̐ړ���
var StrSlcGoods = "ordisp"; //id,name�����̋��ʕ�����
//�v���[���gselect�̐ړ���
var StrSlcPresent = "scd"; //id,name�����̋��ʕ�����
//�v���[���g���X�g��id�ړ���
var PresLi = "li-"+ StrSlcPresent;
//�v���[���g���X�g��class
var PresLiSelected = "Selected";  //�I�����
var PresLiShortage = "Shortage";  //�|�C���g�s�����
//���̃v���[���g�i�ꗗ��id�ړ���
var StrSidePres = "side-pr";

var tabNo = false; 	//�ŏ��ɊJ������tab�C���f�b�N�X (false�őS�Ĕ�\��:����̂�)


// ���֐��Q =========================================================================

/*
 * �֐� : checkPossibleGoToNext()
 * ���̉�ʂɐi�߂邩�`�F�b�N�iITEM�̑I�𐔂Ŕ��f�j
 */
function checkPossibleGoToNext () {
    if (ITEMS > 0) {
        $(".LinkNext a").removeClass("Unavailable");
        //�C�x���g�n���h�����폜
        $(".LinkNext a").unbind("click");
        //�C�x���g�n���h�����Ē�`
        $(".LinkNext a").click( function(){
            return false;
        });
    } else {
        $(".LinkNext a").addClass("Unavailable");
        //�C�x���g�n���h�����폜
        $(".LinkNext a").unbind("click");
        //�C�x���g�n���h�����Ē�`
        //$(".LinkNext a").click( function(){
            return false;
        //});
    }
}

/*
 * �֐� : checkPresent
 *  �S�v���[���g�̕K�v�|�C���g�ƃ|�C���g�c�z�̃`�F�b�N
 */
function checkPresent () {
    //�e�v���[���g�̑I���\���`�F�b�N
    $("#paySupport ul.PresentBoxList li, #payTeiban ul.PresentBoxList li, #payKetai ul.PresentBoxList li").each(function(){
        //�v���[���gid�擾
        //var PresId = $(this).attr("id").substring(PresLi.length);
		var tmpPrs = $(this).attr("id").substring(PresLi.length);
		arrPrs = tmpPrs.split("_");
		var PresId = arrPrs[0];
		var PresLevel = arrPrs[1];

        if( Pres[PresId] ) {
            checkPresentPoint(PresId,PresLevel);
        }
    });
}

/*
 * �֐� : checkPresentPoint
 *  �e�v���[���g�̕K�v�|�C���g�ƃ|�C���g�c�z�̃`�F�b�N
 * in / PresId : �v���[���gID
 * out
 */
function checkPresentPoint ( PresId,PresLevel ){

    //alert(presentID);
    //�v���[���g�̑I����
    var pv = $("select#" + StrSlcPresent + PresId).val();

    //�|�C���g�s���̏ꍇ
    if( Pres[PresId].point > POOLPT ){
        //�I���ł��Ȃ���ԂɕύX
        chgDisabledPresent(PresId,PresLevel);
    } else {
        //����Ă���ꍇ
        chgAvailablePresent(PresId,PresLevel);
    }
}

/*
 * �֐� : setSelectOption
 *  select��I���\�Ȍ�������option�𒲐�����B
 *  �I���ł��Ȃ��i�|�C���g�s���j�̎���option��1��(value=0)�ɂ���
 * in / PresId : �v���[���gID
 * out
 */
function setSelectOption ( PresId , Init ) {
    var select = $("#"+StrSlcPresent + PresId);
    var options = select.find("option");
    var selectedVal = select.find("option:selected").val() * 1;

    //�c��|�C���g����A���Ƃǂꂾ���w��v���[���g��I�ׂ邩
    var n = PRESENTS_MAX + selectedVal;
    if(Pres[PresId].point >= 1) {
        n = Math.floor( (POOLPT)/Pres[PresId].point ) + selectedVal;
        if( n > PRESENTS_MAX){
            n = PRESENTS_MAX;
        }
    }
    //���ɑI�����Ă��鎞
    if( selectedVal >= 1 ){
        //alert("selected�� 0�ȊO�������� : ID="+ PresId + ", �I����= " + select.find("option:selected").val());
        //�I�ׂ����葽��option���폜����
        select.find("option:gt("+ n +")").remove();
        for( var i=1; i<= n; i++){
            //alert(i +":"+select.find("option:eq("+ i +")").val());
            if( select.find("option:eq("+ i +")").val() != i ) {
                select.append($('<option>').attr({ value: i }).text(i+'��'));
            }
        }
        select.width(); //IE6�΍�
    }
    //��ȏ�͑I�ׂāA���I����
    else if( n >= 1 ){
        select.show();
        //select��option��1�ȏ���폜
        select.find("option:gt(0)").remove();
        //option�̑I�����𒲐�
        for( var i=1; i<=n; i++){
            //alert(i +":"+select.find("option:eq("+ i +")").val());
            if( select.find("option:eq("+ i +")").val() != i ) {
                select.append($('<option>').attr({ value: i }).text(i+'��'));
            }
        }
        select.width(); //IE6�΍�
    }
    //�|�C���g�s���Ȏ�
    else {
        //alert("�|�C���g�s��" + select.find("option:gt(0)").size());
        //select��option��1�ȏ���폜
        select.find("option:gt(0)").remove();
        select.hide();
    }
}

/*
 * �֐� : resetPresentSelect
 *  �|�C���g�̌�select��S��0�ɂ���
 */
function resetPresentSelect () {
    //�S�v���[���g��select
    $("select[id^='"+StrSlcPresent+"']").each(function(){
        //�I�����ꂽ�v���[���g��
        $(this).val(0);
    });
    checkPresent ();
}

/*
 * �֐� : addFigure
 * in ���l
 * out 3��","��؂�̕������Ԃ�
 */
function addFigure(str) {
    var num = new String(str).replace(/,/g, "");
    while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
    return num;
}