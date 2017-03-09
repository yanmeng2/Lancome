var optionLi = getId("list-items").getElementsByClassName("option")[0].getElementsByTagName("li");
var listDiv = getId("list-items").getElementsByClassName("list")[0].getElementsByTagName("div");
for(let i=1;i<optionLi.length;i++){
	optionLi[i].index = i;
	optionLi[i].onclick = function(){
		for(let j=0;j<listDiv.length;j++){
			optionLi[j+1].className = "";
			listDiv[j].className = "";
		}
	this.className = "active";
	listDiv[this.index-1].className = "active";
	}
}