var oContent = getId("content");
var oSlide = oContent.getElementsByClassName("slide");
var oLi = oSlide[0].getElementsByTagName("li");
var oPrev = oContent.getElementsByClassName("prev")[0];
var oNext = oContent.getElementsByClassName("next")[0];
var oList = oContent.getElementsByClassName("list");
var _Li = oList[0].getElementsByTagName("li");
var timer=null;
var m = 0;
var oLen = oLi.length;
//自动轮播
function autoPlay(){
	timer = setInterval(function(){
		for(var i=0;i<oLen;i++){
			oLi[i].style.display = "none";
		}
		m++;
		if(m==oLen){
			m=0;
		}
		oLi[m].style.display = "block";
		oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
		move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
		for(var i=0;i<oLen;i++){
			_Li[i].className = "";
		}
		_Li[m].className = "active";
	},1000)
}
autoPlay();
oNext.onclick = function(){
	for(var i=0;i<oLen;i++){
			oLi[i].style.display = "none";
		}
	m++;
	if(m==oLen){
		m = 0;
	}
	oLi[m].style.display = "block";
	oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
	move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
	for(var i=0;i<oLen;i++){
		_Li[i].className = "";
	}
	_Li[m].className = "active";
}
oPrev.onclick = function(){
	for(var i=0;i<oLen;i++){
		oLi[i].style.display = "none";
	}
	m--;
	if(m==-1){
		m = oLen - 1;
	}
	oLi[m].style.display = "block";
	oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
	move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
	for(var i=0;i<oLen;i++){
		_Li[i].className = "";
	}
	_Li[m].className = "active";
}

oContent.onmouseover = function(){
	clearInterval(timer);
}
oContent.onmouseout = function(){
	autoPlay();
}


for(var i=0;i<oLen;i++){
	_Li[i].index = i;
	_Li[i].onclick = function(){
		for(var j=0;j<oLen;j++){
			_Li[j].className = "";
			oLi[j].style.display = "none";
		}
		this.className = "active";
		m = this.index;
		oLi[m].style.display = "block";
		oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
		move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
	}
}