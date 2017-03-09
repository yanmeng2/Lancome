var optionLi = getId("wrap").getElementsByClassName("option")[0].getElementsByTagName("li");
var listLi = getId("wrap").getElementsByClassName("list")[0].getElementsByTagName("li");
for(var i=0;i<optionLi.length;i++){
	optionLi[i].index = i;
	optionLi[i].onclick = function(){
		for(var j=0;j<optionLi.length;j++){
		optionLi[j].className = "";	
		}
	this.className = "active";
		for(var k=0;k<listLi.length;k++){
			listLi[k].className = ""
		}listLi[this.index].className = "active";
	}
}