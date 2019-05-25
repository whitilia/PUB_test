// JavaScript Document
var con5_ar=new Array;
con5_ar[0]="동대문"
con5_ar[1]="신촌"
con5_ar[2]="제천"
con5_ar[3]="수유"
var l_cl_box0;
var l_cl_box1;
var l_cl_box2;
var l_cl_box3;
var con5_l_top;
var con5_clbox;
var imgbox;
var con5_img;
var con5_inter;
var con5_count=0;

function con5(){
	l_cl_box0 = document.getElementById("l_top_cl0");
	l_cl_box1 = document.getElementById("l_top_cl1");
	l_cl_box2 = document.getElementById("l_top_cl2");
	l_cl_box3 = document.getElementById("l_top_cl3");
	con5_l_top = document.getElementById("l_top");
	con5_clbox = con5_l_top.getElementsByTagName("div");
	imgbox = document.getElementById("l_bottom_img");
	con5_img=imgbox.getElementsByTagName("img");
	con5_img[0].addEventListener("mouseover",con5_ov);
	con5_img[0].addEventListener("mouseout",con5_ot);
	for(i=0;i<4;i++){
		con5_clbox[i].addEventListener("click",con5_cl);
		con5_clbox[i].addEventListener("mouseover",con5_ov);
		con5_clbox[i].addEventListener("mouseout",con5_ot);
	}
	
	l_cl_box_tx0=document.createTextNode(con5_ar[0]);
	l_cl_box0.appendChild(l_cl_box_tx0);
	l_cl_box0.style.fontSize="11px";
	l_cl_box_tx1=document.createTextNode(con5_ar[1]);
	l_cl_box1.appendChild(l_cl_box_tx1);
	l_cl_box1.style.fontSize="11px";
	l_cl_box_tx2=document.createTextNode(con5_ar[2]);
	l_cl_box2.appendChild(l_cl_box_tx2);
	l_cl_box2.style.fontSize="11px";
	l_cl_box_tx3=document.createTextNode(con5_ar[3]);
	l_cl_box3.appendChild(l_cl_box_tx3);
	l_cl_box3.style.fontSize="11px";
	

	con5_inter=setInterval(_con5_inter,2000);
}

function con5_cl(e){
	for(i=0;i<4;i++){
		if(e.target.id.substr(8,1)==i){
			e.target.style.fontWeight="bold";
			e.target.style.borderTop="2px solid #8b51ba";
			e.target.style.color="#8b51ba";
			con5_img[0].src="img/theater/TheaterDetail"+(i+1)+".jpg";
		}else{
			con5_clbox[i].style.fontWeight="normal";
			con5_clbox[i].style.borderTop="none";
			con5_clbox[i].style.color="#000";
		}
		
	}
}

function _con5_inter(){
	con5_count++;
	if(con5_count==4){
		con5_count=0;
	}
	for(i=0;i<4;i++){
		if(con5_count==i){
			con5_clbox[i].style.fontWeight="bold";
			con5_clbox[i].style.borderTop="2px solid #8b51ba";
			con5_clbox[i].style.color="#8b51ba";
			
		}else{
			con5_clbox[i].style.fontWeight="normal";
			con5_clbox[i].style.borderTop="none";
			con5_clbox[i].style.color="#000";
		}
	}
	con5_img[0].src="img/theater/TheaterDetail"+(con5_count+1)+".jpg";
}

function con5_ov(e){
	clearInterval(con5_inter);
}
function con5_ot(e){
	con5_inter=setInterval(_con5_inter,2000);
}
