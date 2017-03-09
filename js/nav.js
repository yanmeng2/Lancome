var container = document.getElementsByClassName("container")[0];
var Li = container.getElementsByTagName("li");
for(var i=0;i<Li.length;i++){
	Li[i].onmouseover = function(){
		this.getElementsByTagName("div")[0].style.display = "block";
	}
	Li[i].onmouseout = function(){
		this.getElementsByTagName("div")[0].style.display = "none";
	}
}