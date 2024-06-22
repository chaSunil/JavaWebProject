/**
 * 
 */
const LogIn = () => {
	let login = document.getElementById("login-form");
	alert(LogIn.innerText);
}
const Register = () => {
	let register = document.getElementById("register-form");
	alert(Register.innerText);
}

let logbtn = document.getElementById("login");
logbtn.addEventListener("click",LogIn);

let regbtn = document.getElementById("register");
regbtn.addEventListener("click",Register);

function login(){
	const email 	= document.getElementById("email");
	const pwd 		= document.getElementById("pwd");
	
	if(email.value == "" || pwd.value ==""){
		alert("이메일과 비밀번호을 다시 입력해주세요.");
	} /*else{
		location.href="메인페이지";
	}*/
}

function create(){
	const name		= document.getElementById("name");
	const email 	= document.getElementById("email");
	const pwd 		= document.getElementById("pwd");
	
	if(email.value == "" || pwd.value ==""|| name.value == ""){
		alert("이름,이메일,비밀번호을 다시 입력해주세요.");
	} else{
		location.href="login.html";
		alert("회원가입이 완료되었습니다. 다시 로그인해주세요.");
	}
}