// JavaScript Document
var main;
var menu_li;
var main_ar=new Array();
var m_con1_left_li;
var m_con2_center_con_vis;
var m3;
var m3_p;
var m_con1_right_ul;
var check_num=0;
var content6_count=0;
var content6_tcount=0;
function con6(){
	main=document.getElementById("main");
	var menu=document.getElementById("top_con");
	menu_li=menu.getElementsByTagName("li");
	for(i=0;i<5;i++){
		if(i <3){
			main_ar[i] = document.getElementById("m_con"+(i+1));
			menu_li[i].addEventListener("click",main_cl);
		}else{
			menu_li[i].addEventListener("click",main_cl1); 
		}
	}
	var m_con1_left=document.getElementById("m_con1_left");
	m_con1_left_li=m_con1_left.getElementsByTagName("li");
	for(i=0;i<8;i++){
		m_con1_left_li[i].addEventListener("click",m_con1_left_li_cl);
	}
	var m_con1_right=document.getElementById("m_con1_right");
	m_con1_right_ul=m_con1_right.getElementsByTagName("ul");
	for(i=0;i<7;i++){
		if(m_con1_right_ul[i].id.substr(7,1)==0){
			m_con1_right_ul[i].style.visibility="visible";
		}else{
			m_con1_right_ul[i].style.visibility="hidden";
		}
	}
	m_con2_center_con_vis=document.getElementById("m_con2_center_con_vis");
	m3=document.getElementById("m_con3_center_con_vis");
	m3_p=m3.getElementsByTagName("p");
	for(i=0;i<14;i++){
		m3_p[i].addEventListener("click",m3_p_cl);
		m3_p[0].removeEventListener("click",m3_p_cl);
		m3_p[7].removeEventListener("click",m3_p_cl);
	}
	var m_con2_center=document.getElementById("m_con2_center");
	var con2_le=document.getElementById("con2_le");
	con2_le.style.cursor="pointer";
	var con2_ri=document.getElementById("con2_ri");
	con2_ri.style.cursor="pointer";
	con2_le.addEventListener("click",con2_le_cl);
	con2_ri.addEventListener("click",con2_ri_cl);
}
function main_cl1(e){
	if(e.target.alt.substr(7,1) == 4){
		main.style.height = "200px";
	}else{
		main.style.height = "50px";
	}
}
function main_cl(e){
	for(i=0;i<3;i++){
		if(i == e.target.alt.substr(7,1)){
			main_ar[i].style.visibility = "visible";
			main.style.height = "200px";
			menu_li[i].childNodes[0].src="img/showTab"+(i+3)+".gif";
			if(i==0){
				m_con1_right_ul[check_num].style.visibility="visible";
			}else{
				for(j=0;j<7;j++){
					m_con1_right_ul[j].style.visibility="hidden";
				}
			}
		}else{
			main_ar[i].style.visibility = "hidden";
			menu_li[i].childNodes[0].src="img/showTab"+(i)+".gif";
		}
	}
}
function m_con1_left_li_cl(e){
	for(i=0;i<7;i++){
		if(e.target.title.substr(4,1)==i){
			m_con1_left_li[i].style.color="#5acfc6";
			m_con1_left_li[i].style.background="#63308c";
			m_con1_right_ul[i].style.visibility="visible";
			check_num = i;
		}else{
			m_con1_left_li[i].style.color="#a586bd";
			m_con1_left_li[i].style.background="#402556";
			m_con1_right_ul[i].style.visibility="hidden";
		}
	}
}
function m3_p_cl(e){
	for(i=0;i<6;i++){
		if(e.target.title.substr(4,2)==i){
			m3_p[i+1].style.background="#63308c";
			m3_p[i+1].style.color="#5acfc6";
		}else{
			m3_p[i+1].style.background="#402556";
			m3_p[i+1].style.color="#a586bd";
		}
	}
	for(i=6;i<14;i++){
		if(e.target.title.substr(4,2)==i){
			m3_p[i+2].style.background="#63308c";
			m3_p[i+2].style.color="#5acfc6";
		}else{
			m3_p[i+2].style.background="#402556";
			m3_p[i+2].style.color="#a586bd";
		}
	}
}
function con2_le_cl(e){
	if(content6_count<0){
		content6_count+=900;
	}
	m_con2_center_con_vis.style.left = content6_count + "px";
}
function con2_ri_cl(e){
	if(content6_count>-1800){
		content6_count-=900;
	}
	m_con2_center_con_vis.style.left = content6_count + "px";
}
