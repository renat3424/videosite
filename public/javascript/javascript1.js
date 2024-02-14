let signin=document.getElementById("Sig");
let login=document.getElementById("Log");
let signinform=document.getElementById("SignInForm");
let loginform=document.getElementById("LogInForm");
let signcancel=document.getElementById("SignCancel");
let logcancel=document.getElementById("LogCancel");

if(signin!=null){
signin.addEventListener("click", Sig);
login.addEventListener("click", Log);
signcancel.addEventListener("click", Cancel);
logcancel.addEventListener("click", Cancel);
}
function Sig(){

     

	
	 	signinform.style.display="block";
	 
	
}

function Log(){


        loginform.style.display="block";
	 
}

function Cancel() {
	if (this.id=="SignCancel") {
		signinform.style.display="none";
	}else{
		loginform.style.display="none";
	}
}