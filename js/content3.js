// JavaScript Document
//var i;
var content3_count=0;
var content3_im;
function con3(){
	var all_dv=document.createElement("div");
	js_con3.appendChild(all_dv);
	all_dv.style.position="relative";
	all_dv.style.width="296px";
	all_dv.style.height="200px";
	//전체박스
	var top=document.createElement("div");
	all_dv.appendChild(top);
	top.style.position="relative";
	top.style.width="296px";
	top.style.height="31px";
	top.style.marginBottom="11px";
	top.style.borderTop="2px solid #cbcbcb";
	//위쪽박스
	var im_bn=document.createElement("img");
	top.appendChild(im_bn);
	im_bn.setAttribute("src","img/h2_main_pro.gif");
	im_bn.setAttribute("alt","im_bn1");
	im_bn.style.width="64px";
	im_bn.style.height="14px";
	im_bn.style.position="relative";
	im_bn.style.cssFloat="left";
	im_bn.style.top="10px";
	//위쪽박스안에 이미지
	var im_dv=document.createElement("div");
	top.appendChild(im_dv);
	im_dv.style.width="27px";
	im_dv.style.height="14px";
	im_dv.style.position="relative";
	im_dv.style.cssFloat="right";
	im_dv.style.top="10px";
	var bt1=document.createElement("img");
	im_dv.appendChild(bt1);
	bt1.setAttribute("src","img/arrowBannerMoveAset(-1).gif");
	bt1.setAttribute("alt","button1");
	bt1.style.width="13px"
	bt1.style.height="14px";
	bt1.style.position="relative";
	bt1.style.cssFloat="left";
	bt1.style.cursor="pointer";
	var bt2=document.createElement("img");
	im_dv.appendChild(bt2);
	bt2.setAttribute("src","img/arrowBannerMoveAset(1).gif");
	bt2.setAttribute("alt","button2");
	bt2.style.width="14px"
	bt2.style.height="14px";
	bt2.style.cursor="pointer";
	bt1.addEventListener("click",content3_cl1);
	bt2.addEventListener("click",content3_cl2);
	//위쪽버튼
	var bottom=document.createElement("div");
	all_dv.appendChild(bottom);
	bottom.style.position="relative";
	bottom.style.width="296px";
	bottom.style.height="156px";
	//아래박스
	content3_im=document.createElement("img");
	bottom.appendChild(content3_im);
	content3_im.setAttribute("src","img/EventsPartnership0.jpg");
	content3_im.setAttribute("alt","EventsPartnership");
	content3_im.style.position="absolute";
	content3_im.style.zIndex=2;
	content3_im.style.width="296px";
	content3_im.style.height="156px";
	//아래이미지
	
}
function content3_cl1(e){
	content3_count++;
	if(content3_count==2){
		content3_count = 0;
	}
	content3_im.src="img/EventsPartnership"+content3_count+".jpg";
}
function content3_cl2(e){
	content3_count++;
	if(content3_count==2){
		content3_count = 0;
	}
	content3_im.src="img/EventsPartnership"+content3_count+".jpg";
	
}