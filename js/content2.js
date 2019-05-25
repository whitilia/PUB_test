// JavaScript Document
var con2_bottom_centerbox_img;
var con2_inter;
var con2_tcount=0;
var con2_count=0;
var con2_movie;
var con2_clbox_dv;
var con2_clbox;
var cate = new Array("bookingArr","customerArr","abcArr","comingArr")
var bookingArr=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
var customerArr=new Array(2,3,4,5,6,7,8,9,1,10,11,12,13,14,15,16,17,18);
var abcArr=new Array(3,4,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18);
var comingArr=new Array(4,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18);

function con2(){
	var con2_arrow1=document.getElementById("con2_arrow1");//왼쪽화살
	var con2_arrow2=document.getElementById("con2_arrow2");//오른쪽화살
	con2_bottom_centerbox_img=document.getElementById("con2_bottom_centerbox_img");//사진박스
	var con2_imgbox=con2_bottom_centerbox_img.getElementsByTagName("div");
	con2_arrow1.addEventListener("click",con2_cl1);
	con2_arrow2.addEventListener("click",con2_cl2);
	
	var con2_top_l=document.getElementById("con2_top_l");
	con2_clbox=con2_top_l.getElementsByTagName("p");//예매율순
	con2_clbox_dv=con2_top_l.getElementsByTagName("div");
	con2_movie=con2_bottom_centerbox_img.getElementsByTagName("img");//사진
	for(i=0;i<4;i++){
		con2_clbox[i].addEventListener("click",con2_clbox_cl);
	}
	for(i=0;i<con2_imgbox.length;i++){
		var r_box=document.createElement("p");
		con2_imgbox[i].appendChild(r_box);
		r_box.style.width="30px";
		r_box.style.height="25px";
		r_box.style.position="absolute";
		r_box.style.top="0px";
		r_box.style.left=125*i+"px";
		r_box.style.zIndex=5;
		
		var tx=document.createTextNode(i+1);
		r_box.appendChild(tx);
		r_box.style.fontWeight="bold";
		r_box.style.textAlign="center";
		r_box.style.paddingTop="5px";
		r_box.style.color="#fff";
		if(i<6){
			r_box.style.background="#995acb";
		}else{
			r_box.style.background="#929292";
		}
	}
	
	con2_inter=setInterval(_con2_inter,10);
}
function con2_cl1(e){
	if(con2_count>-125){
		con2_tcount = -1625;
	}
	con2_tcount+=125;
}
function con2_cl2(e){
	if(con2_count<-1375){
		con2_tcount = 125;
	}
	con2_tcount-=125;
}
function _con2_inter(){
	con2_bottom_centerbox_img.style.left = con2_count + "px";
	con2_count+=(con2_tcount-con2_count)*.1;
}
function con2_clbox_cl(e){
	for(i=0;i<18;i++){
		con2_movie[i].src="img/img2/"+(window[cate[e.target.title.substr(5,1)]][i])+".jpg"
	}
	for(i=0;i<4;i++){
		if(e.target.title.substr(5,1)==i){
			con2_clbox[i].style.fontWeight="bold";
			con2_clbox_dv[i].style.borderTop="2px solid #8b51ba";
			con2_clbox[i].style.color="#8b51ba";
		}else{
			con2_clbox[i].style.fontWeight="normal";
			con2_clbox_dv[i].style.borderTop="none";
			con2_clbox[i].style.color="#000";
		}
	}
}
