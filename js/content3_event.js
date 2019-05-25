// JavaScript Document
//var i;
content3_event_count=0;
var content3_event_im;
var a1a1=new Array;
a1a1[0]="<파괴자들> 예매 경품 이벤트";
a1a1[1]="<브레이킹 던 PART2>와 함께하는 특별 상영...";
a1a1[2]="메가박스와 함께하는 <카르멘> 기대평 이벤트!";
a1a1[3]="'제2의 쿠엔틴 타란티노를 찾아라'";
function con3_event(){
	var all_dv=document.createElement("div");
	js_con3_event_top.appendChild(all_dv);
	all_dv.style.position="relative";
	all_dv.style.width="300px";
	all_dv.style.height="124px";
	//전체박스
	var top=document.createElement("div");
	all_dv.appendChild(top);
	top.style.position="relative";
	top.style.width="300px";
	top.style.height="31px";
	top.style.marginBottom="11px";
	top.style.borderTop="2px solid #cbcbcb";
	//위쪽박스
	var im_bn=document.createElement("img");
	top.appendChild(im_bn);
	im_bn.setAttribute("src","img/h2_main_02.gif");
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
	bt1.addEventListener("click",content3_event_cl1);
	bt2.addEventListener("click",content3_event_cl2);
	//위쪽버튼
	var bottom=document.createElement("div");
	all_dv.appendChild(bottom);
	bottom.style.position="relative";
	bottom.style.width="300px";
	bottom.style.height="80px";
	//아래박스
	content3_event_im=document.createElement("img");
	bottom.appendChild(content3_event_im);
	content3_event_im.setAttribute("src","img/m1/Movie0.jpg");
	content3_event_im.setAttribute("alt","movie");
	content3_event_im.style.position="absolute";
	content3_event_im.style.zIndex=2;
	content3_event_im.style.width="300px";
	content3_event_im.style.height="80px";
	content3_event_im.style.cursor="pointer";
	//아래이미지
	/*var tx_dv=document.createElement("div");
	all_dv.appendChild(tx_dv);
	tx_dv.style.position="relative";
	tx_dv.style.width="300px";
	tx_dv.style.height="76px";
	tx_dv.style.background="#ff0";
	var tx_dv_ul=document.createElement("ul");
	tx_dv.appendChild(tx_dv_ul);
	for(i=0;i<a1a1.length;i++){
		var tx_dv_li=document.createElement("li");
		tx_dv_ul.appendChild(tx_dv_li);
		var tx_dv_tx=document.createTextNode(a1a1[i]);
		tx_dv_li.appendChild(tx_dv_tx);
		tx_dv_li.style.listStyle="none";
	}*/
}
function content3_event_cl1(e){
	content3_event_count++;
	if(content3_event_count==4){
		content3_event_count = 0;
	}
	content3_event_im.src="img/m1/Movie"+content3_event_count+".jpg";
}
function content3_event_cl2(e){
	content3_event_count--;
	if(content3_event_count=='-1'){
		content3_event_count = 3;
	}
	content3_event_im.src="img/m1/Movie"+content3_event_count+".jpg";
	
}