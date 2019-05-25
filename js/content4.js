// JavaScript Document
var top_ar=new Array;
top_ar[0]="전체"
top_ar[1]="영화관"
var top_cl1;
var top_cl2;

function con4(){
	top_cl1=document.createTextNode(top_ar[0]);
	cl_box1.appendChild(top_cl1);
	cl_box1.style.fontSize="11px";
	top_cl2=document.createTextNode(top_ar[1]);
	cl_box2.appendChild(top_cl2);
	cl_box2.style.fontSize="11px";
	cl_box1.addEventListener("click",con4_cl1);
	cl_box2.addEventListener("click",con4_cl2);
	
}
function con4_cl1(e){
	cl_box1.style.fontWeight="bold";
	cl_box1.style.borderTop="2px solid #8b51ba";
	cl_box1.style.color="#8b51ba";
	cl_box2.style.fontWeight="normal";
	cl_box2.style.borderTop="none";
	cl_box2.style.color="#000";
	bottom_con1.style.visibility="visible";
	bottom_con2.style.visibility="hidden";
	
}
function con4_cl2(e){
	cl_box2.style.fontWeight="bold";
	cl_box2.style.borderTop="2px solid #8b51ba";
	cl_box2.style.color="#8b51ba";
	cl_box1.style.fontWeight="normal";
	cl_box1.style.borderTop="none";
	cl_box1.style.color="#000";
	bottom_con2.style.visibility="visible";
	bottom_con1.style.visibility="hidden";
}