var tSt = new Date(1912,7-1,30);
var tEd = new Date(1926,12-1,25);
var sSt = new Date(1926,12-1,26);
var sEd = new Date(1989,1-1,7);
var hSt = new Date(1989,1-8,8);

function toggle2(select_sec_auth){
	var num = '';
	if(select_sec_auth == '0'){
		num = 1;
	}else if(select_sec_auth == '1'){
		num = 2;
	}
	toggle(num);
}

function toggle(num){
	if(num == '0'){
		document.getElementById("telephoneInputArea").style.visibility = "visible";
		document.getElementById("telephoneInputArea").style.height = "auto";
		$("#buttonA p").addClass("pushButton");
		document.getElementById("input_type").value = 0;
		$('#errSelectSecondAuth').hide();
	}
	if(num == '1'){
		document.getElementById("birthdayInputArea").style.visibility = "hidden";
		document.getElementById("birthdayInputArea").style.height = "0";
		document.getElementById("telephoneInputArea").style.visibility = "visible";
		document.getElementById("telephoneInputArea").style.height = "auto";
		$("#buttonA p").addClass("pushButton");
		$("#buttonB p").removeClass("pushButton");
		document.getElementById("input_type").value = 0;
		$('#errBirth').hide();
		$('#errSelectSecondAuth').hide();
	}
	if(num == '2'){
		document.getElementById("telephoneInputArea").style.visibility = "hidden";
		document.getElementById("telephoneInputArea").style.height = "0";
		document.getElementById("birthdayInputArea").style.visibility = "visible";
		document.getElementById("birthdayInputArea").style.height = "auto";
		$("#buttonB p").addClass("pushButton");
		$("#buttonA p").removeClass("pushButton");
		document.getElementById("input_type").value = 1;
		$('#errTel').hide();
		$('#errSelectSecondAuth').hide();
	}
}

function err_position(){
	location.href = "#error_position";
}