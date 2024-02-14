let comment=document.getElementById("comment");
let submit=document.getElementById("sub");
let textarea=document.getElementById("textarea");
let comments=document.getElementById("comments");
let myvideo=document.getElementById("myvideo");


let queryString;

function commentLoader() {

	queryString = location.search.substring(1);
	myvideo.src="media/"+queryString;
		for (let i = 0; i < localStorage.length; i++) {
		let q=localStorage.key(i);
        if (Number.isInteger(parseInt(q[0]))) {
		
		let li=document.createElement("li");
		let h1=document.createElement("h1");
		let p1=document.createElement("p");
		let p2=document.createElement("p");
		h1.style=comment.children[0].style;
		p1.style=comment.children[1].style;
		p2.style=comment.children[2].style;

		h1.innerHTML="Admin";
		p1.innerHTML=localStorage.getItem(q);
		p2.innerHTML=q;
		li.appendChild(h1);
		li.appendChild(p1);
		li.appendChild(p2);
		li.style.display="block";
		li.style.margin="10px";
		comments.appendChild(li);


	}
		
	}
}


function Sub(){

  myvideo.src="media/"+queryString;
   if (textarea.value!="") {

   	  let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

today = dd+"."+mm+"."+yyyy+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

        let li=document.createElement("li");
		let h1=document.createElement("h1");
		let p1=document.createElement("p");
		let p2=document.createElement("p");
		h1.style=comment.children[0].style;
		p1.style=comment.children[1].style;
		p2.style=comment.children[2].style;
		h1.innerHTML="Admin";
		p1.innerHTML=textarea.value;
		p2.innerHTML=today;
        li.appendChild(h1);
		li.appendChild(p1);
		li.appendChild(p2);
		li.style.display="block";
		li.style.margin="10px";
		comments.appendChild(li);
		localStorage.setItem(today, textarea.value);


   }






}


submit.addEventListener("click", Sub);


let signin=document.getElementById("Sig");
let login=document.getElementById("Log");
let signinform=document.getElementById("SignInForm");
let loginform=document.getElementById("LogInForm");
let signcancel=document.getElementById("SignCancel");
let logcancel=document.getElementById("LogCancel");

signin.addEventListener("click", Sig);
login.addEventListener("click", Log);
signcancel.addEventListener("click", Cancel);
logcancel.addEventListener("click", Cancel);
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


