

let addvideo=document.getElementById("addvideo");
let uploadform=document.getElementById("UploadForm");
let uploadcancel=document.getElementById("UploadCancel");


if(addvideo!=null && uploadcancel!=null){
addvideo.addEventListener("click", Add);
uploadcancel.addEventListener("click", Cancel);
}
function Add(){


        uploadform.style.display="block";
	 
}

function Cancel() {
  

  uploadform.style.display="none";
}