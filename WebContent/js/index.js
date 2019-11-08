document.getElementById("ba-form").onsubmit = formCheck;

function formCheck() {
	var check = true; //check변수가 true면 return true, fasle면 return false
	
	changeDisplay();
	unrequiredChangeColor();
	
	var required = document.getElementsByClassName("required");
	var checkChoice = false; //check -> 초기에 아무것도 선택하지 않은 경우를 명시하기 위해 따로 변수 지정
	for(var i=0; i<document.addressform.check.length; i++) {
		if(document.addressform.check[i].checked == true) {
			checkChoice = true; //체크가 되어있는 경우에 true로 변경
			break;
		}
	}
	if(checkChoice == false) {
		document.getElementById("check").classList.add("block");
	}

	for(var i=0; i<required.length; i++) {
		if(required[i].value === "" || required[i].selectedIndex == 0) {
			required[i].classList.add("border-red");
			document.getElementsByClassName("necessary")[i].classList.add("block");
			check = false;
		}else {
			required[i].classList.remove("border-red");
			required[i].classList.add("border-green");
		}
	}
	
	var email = document.addressform.email.value;
	if(email) { //email값이 입력되었을 때 형식이 틀린 경우
		var emailReg = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/i;
		var result = emailReg.test(email);
		if(result == false) {
			document.getElementById("email").classList.add("block");
			document.getElementById("input-email").classList.add("border-red");
			check = false;
		}
	}
	
	return check;
}

function changeDisplay() { //해당 id를 가진 태그의 display속성을 변경하기 위한 함수 생성
	document.getElementById("email").classList.remove("block");
	document.getElementById("input-email").classList.remove("border-red");
	document.getElementById("email").classList.add("hidden");
	for(var i=0; i<document.getElementsByClassName("necessary").length; i++) {
		document.getElementsByClassName("necessary")[i].classList.remove("block");
		document.getElementsByClassName("necessary")[i].classList.add("hidden");
	}
}

function unrequiredChangeColor() {
	for(var i=0; i<document.getElementsByClassName("unrequired").length; i++) { //pass클래스를 가진 태그에 녹색 선과 글자색이 적용되도록
		document.getElementsByClassName("unrequired")[i].classList.add("border-green");
	}
}



