document.getElementById("ba-form").onsubmit = formCheck;

function formCheck() {
	var check = true; //check변수가 true면 return true, fasle면 return false
	
	changeDisplay("none");
	unrequiredChangeColor();
	
	var required = document.getElementsByClassName("required");
	var checkChoice = false; //check -> 초기에 아무것도 선택하지 않은 경우를 명시하기 위해 따로 변수 지정
	for(var i=0; i<document.addressform.check.length; i++) {
		if(document.addressform.check[i].checked == true) {
			checkChoice = true; //체크가 되어있는 경우에 true로 변경
			break;
		}
	}
	for(var i=0; i<required.length; i++) {
		if(!required[i].value || required[i].selectedIndex == 0 || checkChoice == false) {
			required[i].style.borderColor="#dc3545";
			document.getElementsByClassName("necessary")[i].style.display = "block";
			check = false;
		}else {
			required[i].style.borderColor="#28a745";
		}
	}
	
	var email = document.addressform.email.value;
	if(email) { //email값이 입력되었을 때 형식이 틀린 경우
		var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		var result = emailReg.test(email);
		if(result == false) {
			document.getElementById("email").style.display = "block";
			document.getElementById("input-email").style.borderColor = "#dc3545";
			check = false;
		}
	}
	
	if(check == false) {
		return false;
	}else {
		return true;
	}
}

function changeDisplay(style) { //해당 id를 가진 태그의 display속성을 변경하기 위한 함수 생성
	document.getElementById("email").style.display = style;
	for(var i=0; i<document.getElementsByClassName("necessary").length; i++) {
		document.getElementsByClassName("necessary")[i].style.display = style;
	}
}

function unrequiredChangeColor() {
	for(var i=0; i<document.getElementsByClassName("unrequired").length; i++) { //pass클래스를 가진 태그에 녹색 선과 글자색이 적용되도록
		document.getElementsByClassName("unrequired")[i].style.borderColor = "#28a745";
	}
}



