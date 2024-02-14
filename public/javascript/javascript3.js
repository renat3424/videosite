let changeInfo=document.getElementById("changeInfo");
let infoform=document.getElementById("InfoForm");
let infocancel=document.getElementById("InfoCancel");



changeInfo.addEventListener("click", Add);
infocancel.addEventListener("click", Cancel);

function Add(){


        infoform.style.display="block";
	 
}

function Cancel() {
  

  infoform.style.display="none";
}