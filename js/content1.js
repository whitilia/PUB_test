// JavaScript Document
var i;
var j;
var content1_inter;
var content1_img_dv;
var content1_count=0;
var content1_lar=new Array();
var content1_ar=new Array;
content1_ar[0]="48시간 국제 영화제"
content1_ar[1]="현대오일뱅크 제휴런칭"
content1_ar[2]="M2관 론칭 이벤트"
content1_ar[3]="007스카이폴 4k개봉"
content1_ar[4]="무비올나잇"

function con1(){
	var all_dv=document.createElement("div");
	js_con1.appendChild(all_dv);
	all_dv.style.width="980px";
	all_dv.style.height="200px";
	//전체박스
	
	var l_dv=document.createElement("div");
	all_dv.appendChild(l_dv);
	l_dv.style.position="relative";
	l_dv.style.width="638px";
	l_dv.style.height="200px";
	l_dv.style.borderTop="2px solid #cbcbcb";
	
	l_dv.style.cssFloat="left";
	l_dv.addEventListener("mouseover",content1_ov); //마우스오버 이벤트
	l_dv.addEventListener("mouseout",content1_ot); //마우스아웃 이벤트
	//왼쪽 디비박스
	var ml=document.createElement("div");
	l_dv.appendChild(ml);
	ml.style.position="absolute";
	ml.style.zIndex=3;
	ml.style.top="-2px";
	ml.style.width="638px";
	ml.style.height="50px";
	//왼쪽 유엘 담은 박스
	var ml_ul=document.createElement("ul");
	ml.appendChild(ml_ul);
	//왼쪽 유엘
	var img1_dv=document.createElement("div");
	l_dv.appendChild(img1_dv);
	img1_dv.style.position="relative";
	img1_dv.style.width=638+"px";
	img1_dv.style.height="150px";
	img1_dv.style.top="50px";
	img1_dv.style.left="0px";
	img1_dv.style.overflow="hidden";
	//보여지는 이미지박스
	content1_img_dv=document.createElement("div");
	img1_dv.appendChild(content1_img_dv);
	content1_img_dv.style.position="absolute";
	content1_img_dv.style.width=638*5+"px";
	content1_img_dv.style.height="150px";
	content1_img_dv.style.top="-2px";
	content1_img_dv.style.left="0px";
	//왼쪽이미지박스
	
	for(i=0;i<content1_ar.length;i++){
		var ml_li=document.createElement("li");
		ml_ul.appendChild(ml_li);
		ml_li.style.listStyle="none";
		ml_li.style.cssFloat="left";
		ml_li.style.fontSize="11px";
		ml_li.style.padding="10px 4px 4px 4px";
		ml_li.setAttribute("title","contents_li"+i);
		ml_li.addEventListener("click",content1_cl); //클릭이벤트
		
		var ml_tx=document.createTextNode(content1_ar[i]);
		ml_li.appendChild(ml_tx);
		ml_li.style.cursor="pointer";
		content1_lar[i]=ml_li;
		//왼쪽 리스트
		var mi=document.createElement("img");
		content1_img_dv.appendChild(mi);
		mi.setAttribute("src","img/content1/contents"+i+".jpg");
		mi.setAttribute("alt","contents"+i);
		mi.style.width="638px";
		mi.style.height="150px";
		mi.style.position="relative";
		
		//왼쪽이미지
	}
	content1_inter=setInterval(_content1_inter,2000);
	
	var r_dv=document.createElement("div");
	all_dv.appendChild(r_dv);
	r_dv.style.width="296px";
	r_dv.style.height="200px";
	r_dv.style.cssFloat="right";
	//오른쪽 디비박스
	var bn=document.createElement("img");
	r_dv.appendChild(bn);
	bn.setAttribute("src","img/banner_296_200.jpg");
	bn.setAttribute("alt","banner1");
	bn.style.width="296px";
	bn.style.height="200px";
	//오른쪽 사진배너
}
function content1_cl(e){
	for(i=0;i<5;i++){
		if(e.target.title.substr(11,2)==i){
			e.target.style.fontWeight="bold";
			e.target.style.borderTop="2px solid #8b51ba";
			e.target.style.color="#8b51ba";
			content1_count = (-638*e.target.title.substr(11,2));
			content1_img_dv.style.left= content1_count+"px";
		}else{
			content1_lar[i].style.fontWeight="normal";
			content1_lar[i].style.borderTop="none";
			content1_lar[i].style.color="#000";
		}
	}
}
function _content1_inter(){
	if(content1_count==-638*5){
		content1_count=0;
	}
	content1_img_dv.style.left= content1_count+"px";
	for(i=0;i<5;i++){
		if(Math.abs(content1_count/638)==i){
			content1_lar[i].style.fontWeight="bold";
			content1_lar[i].style.borderTop="2px solid #8b51ba";
			content1_lar[i].style.color="#8b51ba";
		}else{
			content1_lar[i].style.fontWeight="normal";
			content1_lar[i].style.borderTop="none";
			content1_lar[i].style.color="#000";
		}
	}
	content1_count -= 638;
}

function content1_ov(e){
	clearInterval(content1_inter);
}
function content1_ot(e){
	content1_inter=setInterval(_content1_inter,2000);
}