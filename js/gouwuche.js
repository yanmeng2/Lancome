$(function(){
	var xhr=new XMLHttpRequest();
	xhr.open("GET","gouwuche.php");
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			//console.log(eval(xhr.responseText))
			SP(xhr.responseText)
		}
	}
	xhr.send();
	
	function SP(dth){
		var SZ=eval(dth);
		
		//console.log(SZ);
		//var arr=SZ.Object;
		
		var htmlStr="<ul>";
		for(var i=0;i<SZ.length;i++){
			
			if(getCookie("name")==SZ[i].xiangqingId){
				d2.style.display="none";
			//console.log(getCookie("name"));
			//console.log(SZ[i].xiangqingId);
			htmlStr+="<li>";
			htmlStr+="<span>";
			htmlStr+="<img src='"+SZ[i].mingcheng+"' />";
			htmlStr+="<a>"+SZ[i].jiage+"</a>";
			htmlStr+="&nbsp;("+SZ[i].daxiao+" "+SZ[i].yanse+")</span>";
			htmlStr+="<span>"+SZ[i].shuliang+"</span>";
			htmlStr+="<span><input type='text' value='"+SZ[i].tupian+"'></span>";
			htmlStr+="<span>"+SZ[i].shuliang+"</span>";
			htmlStr+="<span><a>删除</a></span></li>";
			//console.log(shouji)
			}
		}
		htmlStr+="</ul>"
		$("#d1").append(htmlStr);
	}
})